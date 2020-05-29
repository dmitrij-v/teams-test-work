const { User } = require('../models');
const passwordHash = require('password-hash');
const httpStatus = require('http-status');

module.exports = {
  create(req, res) {
    const { body: { email, username, password } } = req;
    console.log(req.body)
    const passHash = passwordHash.generate(password);

    return User
      .create({ email, username, password: passHash })
      .then(user => res.status(httpStatus.CREATED).send(user))
      .catch(error => res.status(httpStatus.ERROR).send(error));
  },

  async getById(req, res) {
    try {
      const { params: { id } } = req;
      const user = await User.findOne({ where: { id } });
      if (!user)
        return res.status(httpStatus.NOT_FOUND).send({message: "User not found"})

      res.status(httpStatus.OK).send(user);
    } catch(error) {
      res.status(httpStatus.ERROR).send(error)
    }
  },

  list(req, res) {
    return User
      .findAll()
      .then(users => res.status(httpStatus.OK).send(users))
      .catch(error => res.status(httpStatus.ERROR).send(error));
  },

};

const { User } = require('../models');
const passwordHash = require('password-hash');
const httpStatus = require('http-status');

module.exports = {
  async create(req, res) {
    const { body: { email, username, password } } = req;
    const passHash = passwordHash.generate(password);

    if (User.checkEmail)
      return res.status(httpStatus.CONFLICT)
                .send({code: httpStatus.CONFLICT, message: 'Email already used', data: {} })

    const checkLogin = await User.findOne({ where: { username } });
    if (checkLogin)
      return res.status(httpStatus.CONFLICT)
                .send({ code: httpStatus.CONFLICT, message: 'Username already used', data: {} })

    return User
      .create({ email, username, password: passHash })
      .then(user => {
        console.log(user);
        user.sayTitle();
        res.status(httpStatus.CREATED)
            .send({ code: httpStatus.CREATED, message: 'User was created', data: user.toJSON })
      })
      .catch(error => res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error));
  },

  async getById(req, res) {
    const { params: { id } } = req;
    const user = await User.findOne({ where: { id } });
    if (!user)
      return res.status(httpStatus.NOT_FOUND).send({message: "User not found"})

    res.status(httpStatus.OK).send(user);
  },

  list(req, res) {
    return User
      .findAll()
      .then(users => res.status(httpStatus.OK).send(users))
      .catch(error => res.status(httpStatus.ERROR).send(error));
  },

};

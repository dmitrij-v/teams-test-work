const Joi = require('joi')

module.exports = {
  register: {
    body: {
      email: Joi.string()
        .email()
        .required(),
      username: Joi.string()
        .required()
        .regex(/^[a-zA-Z0-9]*$/)
        .min(2)
        .max(30),
      password: Joi.string()
        .required()
        .min(8)
        .max(128),
    },
  }
}

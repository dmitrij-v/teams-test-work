const express = require('express');
const router = new express.Router();
const validate = require('express-validation');
const { register } = require('../validations/auth.validation');
const usersController = require('../controllers/users.js');

router
  .route('/')
  .post(validate(register), usersController.create)
router.get('/', usersController.list);
router.get('/:id', usersController.getById);

module.exports = router;

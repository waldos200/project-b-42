const express = require('express');

const { UserValidator } = require('../validators');
const { UserController } = require('../controllers');

const router = express.Router();

router.post('/singup',
  UserValidator.create, UserController.singup);
router.post('/login', UserValidator.login, UserController.login);

module.exports = router;
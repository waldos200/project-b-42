const express = require('express');

const { UserValidator } = require('../validators');
const { UserController } = require('../controllers');

const router = express.Router();

router.post('/api/v1/users', UserValidator.create, UserController.create);

module.exports = router;

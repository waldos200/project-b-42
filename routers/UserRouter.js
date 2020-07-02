const express = require('express');
const { UserController } = require('../controllers');

const router = express.Router();

router.post('/api/v1/users', UserController.create);

module.exports = router;

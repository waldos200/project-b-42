const express = require('express');

const router = express.Router();

const { PostValidator } = require('../validators');
const { PostController } = require('../controllers');

router.post('/users/:idUser/posts',
  PostValidator.create, PostController.create);

module.exports = router;

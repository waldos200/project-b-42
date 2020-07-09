const express = require('express');

const router = express.Router();

const { PostValidator } = require('../validators');
const { PostController } = require('../controllers');

router.post('/users/:idUser/posts',
  PostValidator.create, PostController.create);

router.get('/users/:idUser/posts',
  PostValidator.findAll, PostController.findAll);

router.get('/users/:idUser/posts/:idPost',
  PostValidator.findOne, PostController.findOne);

router.patch('/users/:idUser/posts/:idPost',
  PostValidator.updateOne, PostController.updateOne);

router.delete('/users/:idUser/posts/:idPost',
  PostValidator.deleteOne, PostController.deleteOne);

module.exports = router;

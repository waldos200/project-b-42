const { UserService, PostService } = require('../services');

module.exports = {
  create: async (req, res) => {
    const { idUser } = req.params;
    const { body } = req;
    try {
      // 1) Traemos al usuario
      const user = await UserService.findOneById(idUser);
      // 2) Crear el objeto de posts
      const post = await PostService.create(body);
      // 3) Agregar el nuevo post al usuario y salvar el usuario
      const userWithPost = await UserService.addPost(user, post);
      // 4) Responder al cliente con el usuario con el nuevo post
      res.status(201).json(userWithPost);
    } catch (error) {
      res.status(400).json({ message: 'error adding post to user', error });
    }
  },
};

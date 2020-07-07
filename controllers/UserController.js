const { UserService } = require('../services');

module.exports = {
  create: async (req, res) => {
    const { email } = req.body;
    try {
      const userExists = await UserService.findOneByEmail(email);
      if (userExists) res.status(400).json({message: 'Emailalready taken'});
      const user = await UserService.create(req.body);
      res.status(201).json(user);
    } catch (err) {
      res.status(400).json(err);
    }
  },
  findAll: async (req, res) => {
    try {
      const user = await UserService.findAll();
      res.status(201).json(user);
    } catch (err) {
      res.status(400).json(err);
    }
  },
  findOne: async (req, res) => {
    const { id } = req.params;
    try {
      const user = await UserService.findOneById(id);
      UserService.findByid(id);
      res.status(201).json(user);
    } catch (err) {
      res.status(400).json(err);
    }
  },
  updateOne: async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    try {
      const user = await UserService.findOneById(id);
      const modifiedUser = await UserService.updateOne(user, body);
      res.status(201).json(modifiedUser);
    } catch (err) {
      res.status(400).json(err);
    }
  },
  deleteOne: async (req, res) => {
    const { id } = req.params;
    try {
      const user = await UserService.findOneById(id);
      if (!user) res.status(404).json({ message: 'User not found' });
      await UserService.deleteOneByid(id);
      res.status(204).json();
    } catch (err) {
      res.status(400).json(err);
    }
  },
  signup: async (req, res) => {
    const { email } = req.body;
    try {
      const userExists = await UserService.findOneByEmail(email);
      if (userExists) res.status(400).json({message: 'Emailalready taken'});
      const user = await UserService.create(req.body);
      user.password = undefined;
      res.status(201).json(user);
    } catch (err) {
      res.status(400).json(err);
    }
  },
};

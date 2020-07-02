const express = require('express');

const api = express();
const PORT = process.env.PORT || 3000;

api.use(express.urlencoded({ extends: true }));
api.use(express.json({ extends: true }));

api.get('/', (req, res) => res.send('hello word'));

// CRUD Usuarios
const { User } = require('../models');

// JS Vanilla
/* api.post('/api/v1/users', (req, res) => {
  new User(req.body).save()
    .then((user) => res.status(201).json(user))
    .catch((err) => res.status(400).json(err));
}); */

// ES6
api.post('/api/v1/users', async (req, res) => {
  try {
    const user = await new User(req.body).save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = { api, PORT };

const express = require('express');
const { errors } = require('celebrate');

const api = express();
const PORT = process.env.PORT || 3000;

api.use(express.urlencoded({ extends: true }));
api.use(express.json({ extends: true }));

api.get('/', (req, res) => res.send('hello word'));

api.use(require('../routers'));

api.use(errors());

module.exports = { api, PORT };

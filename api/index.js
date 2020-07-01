const express = require('express');

const api = express();
const PORT = process.env.PORT || 3000;

api.use(express.urlencoded({ extends: true }));
api.use(express.json({ extends: true }));

api.get('/', (req, res) => res.send('hello word'));

module.exports = { api, PORT };

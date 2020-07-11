const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const { errors } = require('celebrate');

const api = express();
const PORT = process.env.PORT || 3000;

api.use(cors());
api.use(morgan('dev'));
api.use(express.urlencoded({ extends: true }));
api.use(express.json({ extends: true }));

api.get('/', (req, res) => res.send(`Hello Word ${req.perrito}`));

api.use('/api/v1', require('../routers'));

api.use(errors());

module.exports = { api, PORT };

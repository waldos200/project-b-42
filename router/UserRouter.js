const express = require('express');
const { model } = require('../models/User');

const router = express.Router();

router.post('/api/v1/users', async (req, res) => {
  try {
    const user = await new User(req.body).save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;

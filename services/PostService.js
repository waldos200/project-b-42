const { Post } = require('../models');

module.exports = {
  create: (body) => new Post(body),
};

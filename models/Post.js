const mongoose = require('mongoose');

const { Schema } = mongoose;

const postSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String,
  },
  date: {
    type: String,
    default: Date.now(),
  },
  permissions: {
    type: String,
    enum: ['PUBLIC', 'PRIVATE'],
    default: 'PUBLIC',
  },
});

const Post = mongoose.model('Post', postSchema);

module.exports = { Post, postSchema };

const mongoose = require('mongoose');

const { Schema } = mongoose;

const postSchema = new Schema({
  is_active: {
    type: Boolean,
    default: true,
  },
  title: {
    type: String,
    required: true,
    trim: true,
  },
  body: {
    type: String,
    required: true,
  },
  image: String,
  date: {
    type: Date,
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

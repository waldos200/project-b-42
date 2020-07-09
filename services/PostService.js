const { Post } = require('../models');

module.exports = {
  create: (body) => new Post(body),
  addPostToUser: (post, user) => {
    user.posts.push(post);
    return user.save();
  },
  findOneByIdInUser: (idPost, user) => user.posts.id(idPost),
  updateOneByIdInUser: (idPost, user, body) => {
    const updatedPosts = user.posts.map((post) => {
      // eslint-disable-next-line no-underscore-dangle
      if (post._id.toString() === idPost) {
        const updatedPost = Object.assign(post, body);
        return updatedPost;
      }
      return post;
    });
    // eslint-disable-next-line no-param-reassign
    user.posts = updatedPosts;
    return user.save();
  },
};

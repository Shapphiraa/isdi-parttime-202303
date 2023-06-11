module.exports = {
  registerUser: require('./users/registerUser'),
  authenticateUser: require('./users/authenticateUser'),
  retrieveUser: require('./users/retrieveUser'),
  updateUserAvatar: require('./users/updateUserAvatar'),
  updateUserPassword: require('./users/updateUserPassword'),
  createPost: require('./posts/createPost'),
  retrievePost: require('./posts/retrievePost'),
  retrievePosts: require('./posts/retrievePosts'),
  retrieveSavedPosts: require('./posts/retrieveSavedPosts'),
  deletePost: require('./posts/deletePost'),
  updatePost: require('./posts/updatePost')
  // privatizePost: require('./posts/privatizePost'),
  // toggleLikePost: require('./posts/toggleLikePost'),
  // toggleSavePost: require('./posts/toggleSavePost'),
  // buyPost: require('./posts/buyPost'),
  // sellPost: require('./posts/sellPost')
}
const {
  validators: { validateId },
  errors: { ExistenceError },
} = require('com')

const { User, Post } = require('../../data/models')

module.exports = function retrievePost(userId, postId) {
  validateId(userId, 'User ID')
  validateId(postId, 'Post ID')

  return Promise.all([
    User.findOne({ _id: userId }),
    Post.findOne({ _id: postId }),
  ]).then(([user, post]) => {
    if (!user) throw new ExistenceError('User not found! 😥')

    if (!post) throw new ExistenceError('Post not found! 😥')

    return post
  })
}

const {
  validators: { validateId },
  errors: { ExistenceError, PropertyError },
} = require('com')

const { User, Post } = require('../../data/models')

module.exports = function togglePrivatizePost(userId, postId) {
  validateId(userId, 'User ID')
  validateId(postId, 'Post ID')

  return (async () => {
    try {
      const [user, post] = await Promise.all([
        User.findById(userId),
        Post.findById(postId),
      ])

      if (!user) throw new ExistenceError('User not found! 😥')
      if (!post) throw new ExistenceError('Post not found! 😥')

      if (post.author.toString() !== userId) {
        throw new PropertyError(
          `Post with ID ${post._id.toString()} does not belong to user with ID ${userId} 😥`
        )
      }

      if (post.visibility === 'public') {
        await Post.updateOne(
          { _id: postId },
          { $set: { visibility: 'private' } }
        )
      } else {
        await Post.updateOne(
          { _id: postId },
          { $set: { visibility: 'public' } }
        )
      }
    } catch (error) {
      throw error
    }
  })()
}

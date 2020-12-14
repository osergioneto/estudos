window.App = window.App || {}

const { getPostsForUser, getUserById } = require("./api");

function showPostsForCurrentUser(userId, cb) {
  getPostsForUser(userId, posts => {
    const postTemplates = posts.map(post => {
      return `
      <div class="post">
        ${post.title}
        ${post.body}
        ${post.createdBy}
      </div>`
    });
    return cb(postTemplates);
  })
}

function showUserProfile(userId, cb) {
  return getUserById(userId, user => {
    const profile = `
      <div>
        ${user.name}
      </div>
    `
    cb(user);
  })
}

module.exports = {
  showPostsForCurrentUser,
  showUserProfile
}

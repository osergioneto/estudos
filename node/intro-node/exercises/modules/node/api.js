const { users: usersData, posts: postsData } = require("./data");

console.log({ usersData, usersData });

function getUserById(id, cb) {
  const user = usersData.find(user => user.id === id);
  return cb(user);
};

function getPostsForUser(userId, cb) {
  const posts = postsData.filter(post => post.createdBy === userId);
  return cb(posts)
}

module.exports = {
  getUserById,
  getPostsForUser
}
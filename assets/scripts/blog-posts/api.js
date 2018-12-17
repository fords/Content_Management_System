const config = require('../config.js')
const store = require('../store.js')

const getAllPosts = function () {
  return $.ajax({
    url: config.apiUrl + '/blogposts',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const createPost = function (data) {
  return $.ajax({
    url: config.apiUrl + '/blogposts/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const deletePost = function (data) {
  const id = data.blogpost.id
  // delete data.post.id
  return $.ajax({
    url: config.apiUrl + '/blogposts/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const updatePost = function (data) {
  const id = data.blogpost.id
  // delete data.post.id
  return $.ajax({
    url: config.apiUrl + '/blogposts/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  createPost,
  getAllPosts,
  updatePost,
  deletePost
}

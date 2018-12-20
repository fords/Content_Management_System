const config = require('../config.js')
const store = require('../store.js')

const getAllBlogs = function () {
  return $.ajax({
    url: config.apiUrl + '/blogs',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const createBlog = function (data) {
  return $.ajax({
    url: config.apiUrl + '/blogs/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const deleteBlog = function (blogId) {
  console.log(blogId)
  return $.ajax({
    url: config.apiUrl + '/blogs/' + blogId,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateBlog = function (data) {
  const id = data.blog.id
  return $.ajax({
    url: config.apiUrl + '/blogs/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  createBlog,
  getAllBlogs,
  updateBlog,
  deleteBlog
}

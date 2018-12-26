const config = require('../config.js')
const store = require('../store.js')

const getAllBlogs = function () {
  // console.log('getting blogs')
  return $.ajax({
    url: config.apiUrl + '/blogs',
    method: 'GET'
  })
}
const createBlog = function (data) {
  return $.ajax({
    url: config.apiUrl + '/blogs',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const deleteBlog = function (blogId) {
  return $.ajax({
    url: config.apiUrl + '/blogs/' + blogId,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateBlog = function (blogId, data) {
  const id = blogId
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

const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields.js')

const onGetAllBlogs = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.getAllBlogs(data)
    .then(ui.getBlogSuccess)
    .catch(ui.getBlogFailure) // if your request failed
  $(event.target).trigger('reset')
}

const onGetAllBlogsVisitor = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.getAllBlogs(data)
    .then(ui.getBlogVisitorSuccess)
    .catch(ui.getBlogVisitorFailure) // if your request failed
  $(event.target).trigger('reset')
}

const onCreateBlog = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  $(event.target).trigger('reset')
  api.createBlog(data)
    .then(ui.createBlogSuccess) // if your request was succesful
    .catch(ui.createBlogFailure) // if your request failed
}

const onUpdateBlog = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  const blogId = $(event.target).closest('section').data('id')
  api.updateBlog(blogId, data)
    .then(ui.updateBlogSuccess)
    // .then(onGetAllBlogs)
    .catch(ui.updateBlogFailure) // if your request failed
  // $(event.target).trigger('reset')
}

const onDeleteBlog = event => {
  event.preventDefault()
  const blogId = $(event.target).closest('section').data('id')
  api.deleteBlog(blogId)
    .then(() => onGetAllBlogs(event))
    .then(ui.deleteBlogSuccess) // if your request was succesful
    .catch(ui.deleteBlogFailure) // if your request failed
}

module.exports = {
  onGetAllBlogs,
  onGetAllBlogsVisitor,
  onCreateBlog,
  onUpdateBlog,
  onDeleteBlog
}

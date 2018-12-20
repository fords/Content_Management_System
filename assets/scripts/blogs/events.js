const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields.js')

const onGetAllBlogs = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  api.getAllBlogs(data)
    .then(ui.getBlogSuccess)
    .catch(ui.failure) // if your request failed
  $(event.target).trigger('reset')
}

const onCreateBlog = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  $(event.target).trigger('reset')
  console.log(data)
  api.createBlog(data)
    .then(ui.createBlogSuccess) // if your request was succesful
    .catch(ui.failure) // if your request failed
}
const onUpdateBlogpost = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  $(event.target).trigger('reset')
  api.updatePost(data)
    .then(ui.updatePostSuccess) // if your request was succesful
    .catch(ui.failure) // if your request failed
}
const onDeleteBlog = event => {
  event.preventDefault()
  const blogId =
   $(event.target).closest('section').data('id')
  api.deleteBlog(blogId)
    .then(() => onGetAllBlogs(event))
    .then(ui.DeleteBlogSuccess) // if your request was succesful
    .catch(ui.failure) // if your request failed
}

module.exports = {
  onGetAllBlogs,
  onCreateBlog,
  onUpdateBlogpost,
  onDeleteBlog
}

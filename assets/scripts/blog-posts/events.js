const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields.js')

const onGetAllBlogposts = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  $(event.target).trigger('reset')
  console.log()
  api.getAllPosts(data)
    .then(ui.getPostSuccess)
    .catch(ui.failure) // if your request failed
}

const onCreateBlogpost = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  $(event.target).trigger('reset')
  console.log('create = ' + data)
  api.createPost(data)
    .then(ui.createPostSuccess) // if your request was succesful
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
const onDeleteBlogpost = event => {
  event.preventDefault()
  const blogpostId =
   $(event.target).closest('section').data('id')
  api.deletePost(blogpostId)
    .then(() => onGetAllBlogposts(event))
    .then(ui.DeletePostSuccess) // if your request was succesful
    .catch(ui.failure) // if your request failed
}

module.exports = {
  onGetAllBlogposts,
  onCreateBlogpost,
  onUpdateBlogpost,
  onDeleteBlogpost,
  getFormFields
}

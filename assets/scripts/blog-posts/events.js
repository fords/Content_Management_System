const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields.js')

const onGetAllPost = event => {
  event.preventDefault()
  console.log('get all post = ')
  api.getAllPosts()
    .then(ui.getPostSuccess)
    .catch(ui.failure) // if your request failed
}

const onCreatePost = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  $(event.target).trigger('reset')
  api.createPost(data)
    .then(ui.createPostSuccess) // if your request was succesful
    .catch(ui.failure) // if your request failed
}
const onUpdatePost = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  $(event.target).trigger('reset')
  api.updatePost(data)
    .then(ui.updatePostSuccess) // if your request was succesful
    .catch(ui.failure) // if your request failed
}
const onDeletePost = event => {
  event.preventDefault()
  const blogpostId =
   $(event.target).closest('section').data('id')
  api.deletePost(blogpostId)
    .then(() => onGetAllPost(event))
    .then(ui.DeletePostSuccess) // if your request was succesful
    .catch(ui.failure) // if your request failed
}

module.exports = {
  onGetAllPost,
  onCreatePost,
  onUpdatePost,
  onDeletePost,
  getFormFields
}

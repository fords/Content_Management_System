const store = require('../store.js')
const showPostsTemplate = require('../templates/post-listing.handlebars')

const createPostSuccess = data => {
  $('#message').html('Successfully created a post')
  $('#message').removeClass('failure')
  $('#message').addClass('success')
  $('#sign-up-form').addClass('hidden')
  $('#change-password-form').hide()
}

const deletePostSuccess = data => {
  store.post = data.post
  $('#message').html('Successfully deleted a post!')
  $('#message').addClass('success')
  $('#message').removeClass('failure')
  $('#sign-up-form').addClass('hidden')
  $('#sign-in-form').addClass('hidden')
  $('#change-password-form').removeClass('hidden')
  $('#sign-out-button').removeClass('hidden')
  $('#sign-out-button').show()
  $('#change-password-form').show()
  $('#sign-up-form').hide()
  $('#sign-in-form').hide()
}

const updatePostSuccess = data => {
  $('#message').html('Successfully updated a post')
  $('#message').removeClass('failure')
  $('#message').addClass('success')
  $('#sign-up-form').removeClass('hidden')
  $('#sign-in-form').removeClass('hidden')
  $('#change-password-form').addClass('hidden')
  $('#sign-out-button').addClass('hidden')
}
const getPostSuccess = data => {
  $('#message').html('Successfully updated a post')
  const showPostsHtml = showPostsTemplate({posts: data.posts})
  $('.content').html(showPostsHtml)
  $('#message').removeClass('failure')
  $('#message').addClass('success')
  $('#sign-up-form').removeClass('hidden')
  $('#sign-in-form').removeClass('hidden')
  $('#change-password-form').addClass('hidden')
  $('#sign-out-button').addClass('hidden')
}
const failure = data => {
  $('#message').html('Oops, something went wrong, please try again')
  $('#message').css('color', 'red')
  $('#message').removeClass('success')
  $('#message').addClass('failure')
  $('#sign-up-form').removeClass('hidden')
  $('#sign-in-form').removeClass('hidden')
  $('#change-password-form').removeClass('hidden')
}
module.exports = {
  getPostSuccess,
  createPostSuccess,
  updatePostSuccess,
  deletePostSuccess,
  failure
}

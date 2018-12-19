const store = require('../store.js')
const showPostsTemplate = require('../templates/post-listing.handlebars')

const createPostSuccess = data => {
  $('#create-message').html('Successfully created a blogpost')

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
const getPostsSuccess = data => {
  const showPostsHtml = showPostsTemplate({blogposts: data.blogposts})
  $('#message').html('Successfully updated a post')
  console.log('all posts shown')
  $('.content').html(showPostsHtml)
  // $('#message').removeClass('failure')
  // $('#message').addClass('success')
  // $('#sign-up-form').removeClass('hidden')
  // $('#sign-in-form').removeClass('hidden')
  // $('#change-password-form').addClass('hidden')
  // $('#sign-out-button').addClass('hidden')
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
  getPostsSuccess,
  createPostSuccess,
  updatePostSuccess,
  deletePostSuccess,
  failure
}

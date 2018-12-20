const store = require('../store.js')
const showPostsTemplate = require('../templates/post-listing.handlebars')

const createPostSuccess = data => {
  $('#create-blogpost-message').html('Successfully created a blogpost')
}

const deletePostSuccess = data => {
  store.post = data.post
  $('#message').html('Successfully deleted a post!')
}

const updatePostSuccess = data => {

}

const getPostSuccess = data => {
  const showPostsHtml = showPostsTemplate({blogposts: data.blogposts})
  console.log(data.blogposts)
  $('.blogpost-content').html(showPostsHtml)
}

const failure = data => {
  $('.blogpost-content').html('Error on showing blogpost')
}

module.exports = {
  getPostSuccess,
  createPostSuccess,
  updatePostSuccess,
  deletePostSuccess,
  failure
}

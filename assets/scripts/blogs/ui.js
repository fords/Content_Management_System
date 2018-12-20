// const store = require('../store.js')
const showBlogsTemplate = require('../templates/blog-listing.handlebars')

const createBlogSuccess = data => {
  console.log('Created Blog')
  $('#create-blog-message').html('Successfully created a blog')
}

const createBlogFailure = data => {
  console.log('Failed to create')
}

const deleteBlogSuccess = data => {
  $('#blog-message').html('Successfully deleted a blog!')
}

const updateBlogSuccess = data => {

}

const getBlogSuccess = data => {
  const showBlogsHtml = showBlogsTemplate({blogs: data.blogs})
  $('.blog-content').html(showBlogsHtml)
}

const failure = data => {
  $('#blog-message').html('Oops, something went wrong, please try again')
  $('create-blog-message').html('Failure creating blog')
}
module.exports = {
  getBlogSuccess,
  createBlogSuccess,
  createBlogFailure,
  updateBlogSuccess,
  deleteBlogSuccess,
  failure
}

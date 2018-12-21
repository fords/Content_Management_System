const showBlogsTemplate = require('../templates/blog-listing.handlebars')

const createBlogSuccess = data => {
  $('.create-blog-message').html('Successfully created a blog')
}

const deleteBlogSuccess = data => {
  $('#blog-message').html('Successfully deleted a blog!')
}

const updateBlogSuccess = data => {
  $('#update-blog-message').html('Successfully updated a blog!')
  $('.modal').modal('hide') // closes modal after success
}

const getBlogSuccess = data => {
  const showBlogsHtml = showBlogsTemplate({blogs: data.blogs})
  $('.blog-content').html(showBlogsHtml)
}

const failure = data => {
  $('.create-blog-message').html('Failure creating blog')
  $('.create-blog-message').css('color', 'red')
  $('.blog-message').html('Failure deleting blog')
  $('.blog-message').css('color', 'red')
}
module.exports = {
  getBlogSuccess,
  createBlogSuccess,
  updateBlogSuccess,
  deleteBlogSuccess,
  failure
}

const showBlogsTemplate = require('../templates/blog-listing.handlebars')

const createBlogSuccess = data => {
  $('.create-blog-message').html('Successfully created a blog')
  $('.create-blog-message').fadeOut(5000)
}

const createBlogFailure = () => {
  $('.create-blog-message').html('Could not create a blog')
  $('.create-blog-message').fadeOut(9000)
}

const deleteBlogSuccess = data => {
  $('.delete-blog-message').html('Successfully deleted a blog!').fadeOut(9000)
}

const deleteBlogFailure = () => {
  $('.delete-blog-message').html('The blog was not able to be deleted')
  $('.delete-blog-message').fadeOut(9000)
}

const updateBlogSuccess = data => {
  $('.update-blog-message').html('Successfully updated a blog!')
  $('.modal').modal('hide') // closes modal after success
}

const updateBlogFailure = () => {
  $('.update-blog-message').html('Unable to update the blog')
  $('.update-blog-message').fadeout(9000)
}

const getBlogSuccess = data => {
  const showBlogsHtml = showBlogsTemplate({blogs: data.blogs})
  $('.blog-content').html(showBlogsHtml)
  $('.delete-blog-btn').css('visibility', 'visible')
  $('.update-blog-btn').css('visibility', 'visible')
  $('#snow').css('visibility', 'hidden')
}

const getBlogFailure = () => {
  $('.blog-content').html('Unable to show all Blogs.')
  $('.blog-content').fadeout(9000)
}

const getBlogVisitorSuccess = data => {
  const showBlogsHtml = showBlogsTemplate({blogs: data.blogs})
  $('.blog-content').html(showBlogsHtml)
  $('.delete-btn').css('visibility', 'hidden')
  $('.update-btn').css('visibility', 'hidden')
  $('#snow').css('visibility', 'hidden')
  $('#holidays').css('visibility', 'hidden')
  $('#team').css('visibility', 'hidden')
}

const getBlogVisitorFailure = () => {
  $('.blog-content').html('Something is wrong. We are unable to show the blogs.')
  $('.blog-content').fadeout(9000)
}
module.exports = {
  createBlogSuccess,
  createBlogFailure,
  updateBlogSuccess,
  updateBlogFailure,
  deleteBlogSuccess,
  deleteBlogFailure,
  getBlogSuccess,
  getBlogFailure,
  getBlogVisitorSuccess,
  getBlogVisitorFailure
}

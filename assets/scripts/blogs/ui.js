const showBlogsTemplate = require('../templates/blog-listing.handlebars')

const createBlogSuccess = data => {
  $('#create-blog-message').show().text('Successfully created a blog')
  $('#create-blog-message').removeClass()
  $('#create-blog-message').addClass('success')
  $('#create-blog-message').fadeOut(5000)
}

const createBlogFailure = () => {
  $('#create-blog-message').show().text('Could not create a blog')
  $('#create-blog-message').removeClass()
  $('#create-blog-message').addClass('failure')
  $('#create-blog-message').fadeOut(5000)
}

const deleteBlogSuccess = data => {
  $('#delete-blog-message').show().text('Successfully deleted a blog!')
  $('#delete-blog-message').removeClass()
  $('#delete-blog-message').addClass('success')
  $('#delete-blog-message').fadeOut(5000)
}

const deleteBlogFailure = () => {
  $('#delete-blog-message').show().text('The blog was not able to be deleted')
  $('#delete-blog-message').removeClass()
  $('#delete-blog-message').addClass('failure')
  $('#delete-blog-message').fadeOut(5000)
}

const updateBlogSuccess = data => {
  $('#update-blog-message').show().text('Successfully updated a blog!')
  $('#update-blog-message').removeClass()
  $('#update-blog-message').addClass('success')
  $('.modal').modal('hide') // closes modal after success
  $('#update-blog-message').fadeOut(5000)
}

const updateBlogFailure = () => {
  $('#update-blog-message').show().text('Unable to update the blog')
  $('#update-blog-message').removeClass()
  $('#update-blog-message').addClass('failure')
  $('#update-blog-message').fadeOut(5000)
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
  $('.blog-content').fadeout(5000)
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
  $('.blog-content').fadeout(5000)
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

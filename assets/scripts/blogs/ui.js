const showBlogsTemplate = require('../templates/blog-listing.handlebars')

const createBlogSuccess = data => {
  $('#create-blog-message').html('Successfully created a blog')
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
  $('.delete-blog-btn').css('visibility', 'visible')
  $('.update-blog-btn').css('visibility', 'visible')
  // $('.website-content').css('visibility', 'hidden')
}

const getBlogSuccessVisitor = data => {
  const showBlogsHtml = showBlogsTemplate({blogs: data.blogs})
  $('.blog-content').html(showBlogsHtml)
  $('.delete-btn').css('visibility', 'hidden')
  $('.update-btn').css('visibility', 'hidden')
  // $('.website-content').css('visibility', 'hidden')
}

const failure = data => {
  $('#blog-message').html('Oops, something went wrong, please try again')
  $('create-blog-message').html('Failure creating blog')
}
module.exports = {
  getBlogSuccess,
  getBlogSuccessVisitor,
  createBlogSuccess,
  updateBlogSuccess,
  deleteBlogSuccess,
  failure
}

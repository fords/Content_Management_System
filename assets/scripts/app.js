'use strict'

const authEvents = require('./auth/events.js')
const blogEvents = require('./blogs/events.js')
const websiteEvents = require('./websites/events.js')

$(() => {
  // Auth
  $('#create-blog-button').css('visibility', 'hidden')
  $('#create-button').css('visibility', 'hidden')
  $('#show-all-blogs').css('visibility', 'hidden')
  $('#show-all-websites').css('visibility', 'hidden')
  $('#options-button').css('visibility', 'hidden')

  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#change-password').on('submit', authEvents.onChangePassword)

  // Websites

  $('#show-all-websites').on('click', websiteEvents.onGetAllWebsites)
  $('#show-all-websites-beforeLogIn').on('click', websiteEvents.onGetAllWebsitesVisitor)
  $('#create-website').on('submit', websiteEvents.onCreateWebsite)
  $('.website-content').on('click', '.delete-website-btn', websiteEvents.onDeleteWebsite)
  $('.website-content').on('submit', websiteEvents.onUpdateWebsite)

  // Blogs

  $('#show-all-blogs').on('click', blogEvents.onGetAllBlogs)
  $('#show-all-blogs-beforeLogIn').on('click', blogEvents.onGetAllBlogsVisitor)
  $('#create-blog').on('submit', blogEvents.onCreateBlog)
  $('.blog-content').on('click', '.delete-blog-btn', blogEvents.onDeleteBlog)
  $('.blog-content').on('submit', blogEvents.onUpdateBlog)

  setTimeout(function () {
    $('#snow').css('visibility', 'hidden')
  }, 10000)
  $('#team').fadeOut(2000)
  $('#holidays').fadeOut(2000)
})

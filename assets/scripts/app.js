'use strict'

const authEvents = require('./auth/events.js')
const blogEvents = require('./blogs/events.js')
const websiteEvents = require('./websites/events.js')

$(() => {
  // Auth
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#change-password').on('submit', authEvents.onChangePassword)

  // Websites
  $('#show-all-websites').on('click', websiteEvents.onGetAllWebsites)
  $('#create-website').on('submit', websiteEvents.onCreateWebsite)
  $('.website-content').on('click', '.btn-danger', websiteEvents.onDeleteWebsite)
  $('.website-content').on('submit', websiteEvents.onUpdateWebsite)

  // Blogs
  $('#show-all-blogs').on('click', blogEvents.onGetAllBlogs)
  $('#create-blog').on('submit', blogEvents.onCreateBlog)
  $('.blog-content').on('click', '.btn-danger', blogEvents.onDeleteBlog)
  $('.blog-content').on('submit', blogEvents.onUpdateBlog)
})

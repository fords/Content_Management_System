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
  $('.show-websites-btn').on('click', websiteEvents.onGetAllWebsites)
  $('#create-website').on('submit', websiteEvents.onCreateWebsite)
  $('.website-content').on('click', '.delete-website-btn', websiteEvents.onDeleteWebsite)
  $('.website-content').on('submit', websiteEvents.onUpdateWebsite)

  // Blogs
  $('.show-blogs-btn').on('click', blogEvents.onGetAllBlogs)
  $('#create-blog').on('submit', blogEvents.onCreateBlog)
  $('.blog-content').on('click', '.delete-blog-btn', blogEvents.onDeleteBlog)
  $('.blog-content').on('submit', blogEvents.onUpdateBlog)
})

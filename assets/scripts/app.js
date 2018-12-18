'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/events.js')
const blogpostsEvents = require('./blog-posts/events.js')
const websiteEvents = require('./websites/events.js')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#show-all-websites').on('click', blogpostsEvents.onGetAllPost)
  $('#create-website').on('submit', websiteEvents.onCreateWebsite)
})

const store = require('../store.js')
const showWebsitesTemplate = require('../templates/website-listing.handlebars')

// messages for user

const createWebsiteSuccess = data => {
  $('#message').html('Successfully created a website')
  $('#message').removeClass('failure')
  $('#message').addClass('success')
  $('#sign-up-form').addClass('hidden')
  $('#change-password-form').hide()
}

const deleteWebsiteSuccess = data => {
  store.website = data.website
  $('#message').html('Successfully deleted a website!')
  $('#message').addClass('success')
  $('#message').removeClass('failure')
  $('#sign-up-form').addClass('hidden')
  $('#sign-in-form').addClass('hidden')
  $('#change-password-form').removeClass('hidden')
  $('#sign-out-button').removeClass('hidden')
  $('#sign-out-button').show()
  $('#change-password-form').show()
  $('#sign-up-form').hide()
  $('#sign-in-form').hide()
}

const updateWebsiteSuccess = data => {
  $('#message').html('Successfully updated a website')
  $('#message').removeClass('failure')
  $('#message').addClass('success')
  $('#sign-up-form').removeClass('hidden')
  $('#sign-in-form').removeClass('hidden')
  $('#change-password-form').addClass('hidden')
  $('#sign-out-button').addClass('hidden')
}
const getWebsiteSuccess = data => {
  $('#message').html('Successfully updated a website')
  const showWebsitesHtml = showWebsitesTemplate({websites: data.websites})
  $('.content').html(showWebsitesHtml)
  // $('#message').append(data)
  $('#message').removeClass('failure')
  $('#message').addClass('success')
  $('#sign-up-form').removeClass('hidden')
  $('#sign-in-form').removeClass('hidden')
  $('#change-password-form').addClass('hidden')
  $('#sign-out-button').addClass('hidden')
}
const failure = data => {
  $('#message').html('Oops, something went wrong, please try again')
  $('#message').css('color', 'red')
  $('#message').removeClass('success')
  $('#message').addClass('failure')
  $('#sign-up-form').removeClass('hidden')
  $('#sign-in-form').removeClass('hidden')
  $('#change-password-form').removeClass('hidden')
}
module.exports = {
  getWebsiteSuccess,
  createWebsiteSuccess,
  updateWebsiteSuccess,
  deleteWebsiteSuccess,
  failure
}

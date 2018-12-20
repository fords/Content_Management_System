// const store = require('../store.js')
const showWebsitesTemplate = require('../templates/website-listing.handlebars')

const createWebsiteSuccess = data => {
  $('#create-website-message').html('Successfully created a website')
}

const deleteWebsiteSuccess = data => {
  $('#message').html('Successfully deleted a website!')
}

const updateWebsiteSuccess = data => {
  $('#update-website-message').html('Successfully updated a website!')
}

const getWebsiteSuccess = data => {
  const showWebsitesHtml = showWebsitesTemplate({websites: data.websites})
  $('.website-content').html(showWebsitesHtml)
}

const failure = data => {
  $('#update-website-message').html('Oops, something went wrong, please try again')
}
module.exports = {
  getWebsiteSuccess,
  createWebsiteSuccess,
  updateWebsiteSuccess,
  deleteWebsiteSuccess,
  failure
}

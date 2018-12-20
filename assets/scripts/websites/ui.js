// const store = require('../store.js')
const showWebsitesTemplate = require('../templates/website-listing.handlebars')

const createWebsiteSuccess = data => {
  console.log('Created Website')
  $('#create-website-message').html('Successfully created a website')
}

const deleteWebsiteSuccess = data => {
  $('#message').html('Successfully deleted a website!')
}

const updateWebsiteSuccess = data => {

}

const getWebsiteSuccess = data => {
  const showWebsitesHtml = showWebsitesTemplate({websites: data.websites})
  $('.website-content').html(showWebsitesHtml)
}

const failure = data => {
  $('#message').html('Oops, something went wrong, please try again')
}
module.exports = {
  getWebsiteSuccess,
  createWebsiteSuccess,
  updateWebsiteSuccess,
  deleteWebsiteSuccess,
  failure
}

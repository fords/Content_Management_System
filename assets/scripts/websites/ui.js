const showWebsitesTemplate = require('../templates/website-listing.handlebars')

const createWebsiteSuccess = data => {
  $('.create-website-message').html('Successfully created a website')
}

const deleteWebsiteSuccess = data => {
  $('#message').html('Successfully deleted a website!')
}

const updateWebsiteSuccess = data => {
  $('#update-website-message').html('Successfully updated a website!')
  $('.modal').modal('hide') // closes modal after success
}

const getWebsiteSuccess = data => {
  const showWebsitesHtml = showWebsitesTemplate({websites: data.websites})
  $('.website-content').html(showWebsitesHtml)
}

const failure = data => {
  $('.website-message').html('Failure deleting website')
  $('.website-message').css('color', 'red')
  $('.update-website-message').html('Oops, something went wrong, please try again')
  $('.update-website-message').css('color', 'red')
}
module.exports = {
  getWebsiteSuccess,
  createWebsiteSuccess,
  updateWebsiteSuccess,
  deleteWebsiteSuccess,
  failure
}

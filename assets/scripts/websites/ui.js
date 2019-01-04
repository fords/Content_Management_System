const showWebsitesTemplate = require('../templates/website-listing.handlebars')

const createWebsiteSuccess = data => {
  $('.create-website-message').html('Successfully created a website')
  $('.create-website-message').fadeOut(5000)
}

const createWebsiteFailure = () => {
  $('.create-website-message').html('Failure creating a website')
  $('.create-website-message').fadeOut(9000)
}

const deleteWebsiteSuccess = data => {
  $('.delete-website-message').html('Successfully deleted a website!')
  $('.delete-website-message').fadeOut(9000)
}

const deleteWebsiteFailure = () => {
  $('.delete-website-message').html('Unable to delete a website')
  $('.delete-website-message').fadeOut(9000)
}

const updateWebsiteSuccess = data => {
  $('.update-website-message').html('Successfully updated a website!')
  $('.modal').modal('hide') // closes modal after success
}

const updateWebsiteFailure = () => {
  $('.update-website-message').html('Unable to update the website')
  $('.update-website-message').fadeout(9000)
}

const getWebsiteSuccess = data => {
  const showWebsitesHtml = showWebsitesTemplate({websites: data.websites})
  $('.website-content').html(showWebsitesHtml)
  $('.delete-website-btn').css('visibility', 'visible')
  $('.update-website-btn').css('visibility', 'visible')
  $('#snow').css('visibility', 'hidden')
}

const getWebsiteFailure = () => {
  $('.website-content').html('Unable to show all Websites.')
  $('.website-content').fadeout(9000)
}

const getWebsiteVisitorSuccess = data => {
  const showWebsitesHtml = showWebsitesTemplate({websites: data.websites})
  $('.website-content').html(showWebsitesHtml)
  $('.delete-btn').css('visibility', 'hidden')
  $('.update-btn').css('visibility', 'hidden')
  $('#snow').css('visibility', 'hidden')
  $('#holidays').css('visibility', 'hidden')
  $('#team').css('visibility', 'hidden')
}

const getWebsiteVisitorFailure = () => {
  $('.website-content').html('Something is wrong. We are unable to show the Websites.')
  $('.website-content').fadeout(9000)
}

module.exports = {
  createWebsiteSuccess,
  createWebsiteFailure,
  updateWebsiteSuccess,
  updateWebsiteFailure,
  deleteWebsiteSuccess,
  deleteWebsiteFailure,
  getWebsiteSuccess,
  getWebsiteFailure,
  getWebsiteVisitorSuccess,
  getWebsiteVisitorFailure
}

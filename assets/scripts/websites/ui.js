const showWebsitesTemplate = require('../templates/website-listing.handlebars')

const createWebsiteSuccess = data => {
  $('#create-website-message').html('Successfully created a website')
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
  $('.delete-website-btn').css('visibility', 'visible')
  $('.update-website-btn').css('visibility', 'visible')
  $('#snow').css('visibility', 'hidden')
}

const getWebsiteVisitorSuccess = data => {
  const showWebsitesHtml = showWebsitesTemplate({websites: data.websites})
  $('.website-content').html(showWebsitesHtml)
  $('.delete-btn').css('visibility', 'hidden')
  $('.update-btn').css('visibility', 'hidden')
  $('#snow').css('visibility', 'hidden')
}

const failure = data => {
  $('#update-website-message').html('Oops, something went wrong, please try again')
}
module.exports = {
  getWebsiteSuccess,
  getWebsiteVisitorSuccess,
  createWebsiteSuccess,
  updateWebsiteSuccess,
  deleteWebsiteSuccess,
  failure
}

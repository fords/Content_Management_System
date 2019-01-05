const showWebsitesTemplate = require('../templates/website-listing.handlebars')
const store = require('../store.js')

const createWebsiteSuccess = data => {
  $('#create-website-message').show().text('Successfully created a website')
  $('#create-website-message').removeClass()
  $('#create-website-message').addClass('success')
  $('#create-website-message').fadeOut(5000)
}

const createWebsiteFailure = () => {
  $('#create-website-message').show().text('Failure creating a website')
  $('#create-website-message').removeClass()
  $('#create-website-message').addClass('failure')
  $('#create-website-message').fadeOut(5000)
}

const deleteWebsiteSuccess = data => {
  $('#delete-website-message').show().text('Successfully deleted a website!')
  $('#delete-website-message').removeClass()
  $('#delete-website-message').addClass('success')
  $('#delete-website-message').fadeOut(5000)
}

const deleteWebsiteFailure = () => {
  $('#delete-website-message').show().text('Unable to delete a website')
  $('#delete-website-message').removeClass()
  $('#delete-website-message').addClass('failure')
  $('#delete-website-message').fadeOut(5000)
}

const updateWebsiteSuccess = data => {
  $('#update-website-message').show().text('Successfully updated a website!')
  $('#update-website-message').removeClass()
  $('#update-website-message').addClass('success')
  $('.modal').modal('hide') // closes modal after success
  $('#update-website-message').fadeOut(5000)
}

const updateWebsiteFailure = () => {
  $('#update-website-message').show().text('Unable to update the website')
  $('#update-website-message').removeClass()
  $('#update-website-message').addClass('failure')
  $('#update-website-message').fadeout(5000)
}

const getWebsiteSuccess = data => {
  store.count += 1
  // console.log(store.count)
  if (store.count % 2 === 0) {
    const showWebsitesHtml = showWebsitesTemplate({websites: data.websites})

    $('.website-content').html(showWebsitesHtml)
    $('.website-content').show()
    $('.delete-website-btn').css('visibility', 'visible')
    $('.update-website-btn').css('visibility', 'visible')
    $('#snow').css('visibility', 'hidden')
  } else {
    $('.website-content').hide()
  }
}

const getWebsiteFailure = () => {
  $('.website-content').html('Unable to show all Websites.')
  $('.website-content').fadeout(5000)
}

const getWebsiteVisitorSuccess = data => {
  if (store.visitor_web) {
    const showWebsitesHtml = showWebsitesTemplate({websites: data.websites})
    $('.website-content').show()
    $('.website-content').html(showWebsitesHtml)
    $('.delete-btn').css('visibility', 'hidden')
    $('.update-btn').css('visibility', 'hidden')
    $('#snow').css('visibility', 'hidden')
    $('#holidays').css('visibility', 'hidden')
    $('#team').css('visibility', 'hidden')
  } else {
    $('.website-content').hide()
  }
  store.visitor_web = !store.visitor_web
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

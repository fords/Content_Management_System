'use strict'
const store = require('../store.js')

const signUpSuccess = data => {
  $('#up-message').show().text('Sign Up Success')
  $('#up-message').removeClass()
  $('#up-message').addClass('success')
  $('#up-message').fadeOut(5000)
}

const signUpFailure = () => { // removed error parameter
  $('#up-message').show().text('Error on Sign Up')
  $('#up-message').removeClass()
  $('#up-message').addClass('failure')
  $('#up-message').fadeOut(9000)
}

const signInSuccess = data => {
  store.user = data.user
  store.count = 1
  store.count_blog = 1
  $('#up-message').removeClass()
  $('#up-message').addClass('success')
  $('#options-button').css('visibility', 'visible') // show options button
  $('#create-blog-button').css('visibility', 'visible')
  $('#create-button').css('visibility', 'visible')
  $('#update-button').css('visibility', 'visible')
  $('#blogpost-actions').css('visibility', 'visible')
  $('#sign-up-button').hide() // sign up is hidden

  $('#authorizationModal').modal('hide') // closes modal after success
  $('.shown-website').css('visibility', 'hidden')
  $('.shown-blog').css('visibility', 'hidden')
  $('#show-all-blogs').css('visibility', 'visible')
  $('#show-all-websites').css('visibility', 'visible')
  $('#show-all-blogs-beforeLogIn').css('visibility', 'hidden')
  $('#show-all-websites-beforeLogIn').css('visibility', 'hidden')
  $('.snowflakes').css('visibility', 'hidden')
  $('#snow').css('visibility', 'hidden')
  $('#team').css('visibility', 'hidden')
  $('#holidays').css('visibility', 'hidden')
}

const signInFailure = () => { // removed error parameter
  $('#up-message').show().text('Error on Sign In')
  $('#up-message').removeClass()
  $('#up-message').addClass('failure')
  // removed console.error
  $('#up-message').fadeOut(9000)
}

const changePasswordSuccess = data => {
  $('#out-message').show().text('Your Password Has Been Changed!')
  $('#out-message').removeClass()
  $('#out-message').addClass('success')
  $('#out-message').fadeOut(5000)
}

const changePasswordFailure = () => { // removed error parameter
  $('#out-message').show().text('Error on password change')
  $('#out-message').removeClass()
  $('#out-message').addClass('failure')
  // removed console.error
  $('#out-message').fadeOut(9000)
}

const signOutSuccess = data => {
  store.user = null
  store.visitor_web = true
  store.visitor_blog = true
  $('#out-message').removeClass()
  $('#out-message').addClass('success')
  // $('.current-player').hide()
  $('#options-button').css('visibility', 'hidden') // sets option buton back to hidden
  $('#sign-up-button').show() // sign up appears
  $('#create-button').css('visibility', 'hidden')
  $('#create-blog-button').css('visibility', 'hidden')
  $('#update-button').css('visibility', 'hidden')

  $('#optionsModal').modal('hide') // closes modal after success
  $('.shown-website').css('visibility', 'hidden')
  $('.shown-blog').css('visibility', 'hidden')
  $('.website-content').hide()
  $('.blog-content').hide()
  $('#show-all-blogs').css('visibility', 'hidden')
  $('#show-all-websites').css('visibility', 'hidden')
  $('#show-all-blogs-beforeLogIn').css('visibility', 'visible')
  $('#show-all-websites-beforeLogIn').css('visibility', 'visible')
  $('.delete-btn').css('visibility', 'hidden')
  $('.update-btn').css('visibility', 'hidden')
  $('.snowflakes').css('visibility', 'visible')
  $('#snow').css('visibility', 'visible')
  setTimeout(function () {
    $('#snow').css('visibility', 'hidden')
  }, 10000)
}

const signOutFailure = () => { // removed error parameter
  $('#out-message').show().text('Error on Sign Out')
  $('#out-message').removeClass()
  $('#out-message').addClass('failure')
  // removed console.error
  $('#out-message').fadeOut(9000)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}

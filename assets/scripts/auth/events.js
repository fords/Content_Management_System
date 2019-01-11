const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields.js')

const onSignUp = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  $(event.target).trigger('reset')
  api.signUp(data)
    .then(ui.signUpSuccess) // if your request was succesful
    .catch(ui.signUpFailure) // if your request failed
}
const onSignIn = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  $(event.target).trigger('reset')
  api.signIn(data)
    .then(ui.signInSuccess) // if your request was succesful
    .catch(ui.signInFailure) // if your request failed
}
const onSignOut = event => {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess) // if your request was succesful
    .catch(ui.signOutFailure) // if your request failed
}
const onChangePassword = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  $(event.target).trigger('reset')
  api.changePassword(data)
    .then(ui.changePasswordSuccess) // if your request was succesful
    .catch(ui.changePasswordFailure) // if your request failed
}

module.exports = {
  onSignIn,
  onSignUp,
  onSignOut,
  onChangePassword,
  getFormFields
}

const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields.js')

const onGetAllWebsites = () => {
  event.preventDefault()
  const data = getFormFields(event.target)
  $(event.target).trigger('reset')
  console.log(data)
  api.getAllWebsites(data)
    .then(ui.getWebsiteSuccess)
    .catch(ui.failure) // if your request failed
}

const onCreateWebsite = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('events = ' + data)
  $(event.target).trigger('reset')
  api.createWebsite(data)
    .then(ui.createWebsiteSuccess) // if your request was succesful
    .catch(ui.failure) // if your request failed
}
const onUpdateWebsite = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  $(event.target).trigger('reset')
  api.updateWebsite(data)
    .then(ui.updateWebsiteSuccess) // if your request was succesful
    .catch(ui.failure) // if your request failed
}
const onDeleteWebsite = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.deleteWebsite(data)
    .then(ui.DeleteWebsiteSuccess) // if your request was succesful
    .catch(ui.failure) // if your request failed
}

module.exports = {

  onGetAllWebsites,
  onCreateWebsite,
  onUpdateWebsite,
  onDeleteWebsite
}

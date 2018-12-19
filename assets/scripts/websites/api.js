const config = require('../config.js')
const store = require('../store.js')

const getAllWebsites = function (data) {
  return $.ajax({
    url: config.apiUrl + '/websites',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const createWebsite = function (data) {
  console.log('api = ' + store.user.token)
  return $.ajax({
    url: config.apiUrl + '/websites',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const deleteWebsite = function (data) {
  const id = data.website.id
  // delete data.website.id
  return $.ajax({
    url: config.apiUrl + '/websites/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const updateWebsite = function (data) {
  const id = data.website.id
  // delete data.website.id
  return $.ajax({
    url: config.apiUrl + '/websites/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  createWebsite,
  getAllWebsites,
  updateWebsite,
  deleteWebsite
}

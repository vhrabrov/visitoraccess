const login = require('./login');
const rules = require('./rules');
const survey = require('./survey');
const patient = require('./patient');
const booking = require('./booking');

const swaggerDocument = {
  openapi: '3.0.1',
  info: {
    version: '1.0.0',
    title: 'APIs Document',
    description: 'your description here',
    termsOfService: '',
  },
  paths: {
    "/login": {
      "get": login,
    },
    "/rules": {
      "get": rules,
    },
    "/survey": {
      "get": survey,
    },
    "/patient/search": {
      "post": patient,
    },
    "/patient/book/:id": {
      "put": booking.book,
    },
    "/patient/unbook/:id": {
      "put": booking.unbook,
    }
  }
}

module.exports = swaggerDocument;
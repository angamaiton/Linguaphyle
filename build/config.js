var electron = require('electron')

var path = require('path')

var APP_NAME = 'Linguaphyle'

module.exports = {
  APP_NAME: APP_NAME,
  WINDOW_MAIN: 'file://' + path.join(__dirname, '..', 'static', 'main.html'),
}
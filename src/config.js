const electron = require('electron')

const path = require('path')

const APP_NAME = 'Linguaphyle'

module.exports = {
  APP_NAME: APP_NAME,
  WINDOW_MAIN: 'file://' + path.join(__dirname, '..', 'static', 'main.html'),
}
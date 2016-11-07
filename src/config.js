const electron = require('electron')

const path = require('path')

module.exports = {
  WINDOW_MAIN: 'file://' + path.join(__dirname, '..', 'static', 'main.html'),
}
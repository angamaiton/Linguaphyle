var appConfig = require('application-config')('Linguaphyle')
var electron = require('electron')

var path = require('path')

var APP_NAME = 'Linguaphyle'
var APP_VERSION = require('../package.json').version

module.exports = {
  APP_NAME: APP_NAME,
  APP_VERSION: APP_VERSION,
  APP_WINDOW_TITLE: APP_NAME + ' (ALPHA)',
  CONFIG_PATH: getConfigPath(),
  WINDOW_MAIN: 'file://' + path.join(__dirname, '..', 'static', 'main.html'),
}

function getConfigPath() {
  return path.dirname(appConfig.filePath)
}
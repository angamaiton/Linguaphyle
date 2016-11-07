const appConfig = require('application-config')('Linguaphyle')
const electron = require('electron')

const path = require('path')

const APP_NAME = 'Linguaphyle'
const APP_VERSION = require('../package.json').version

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
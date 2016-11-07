const electron = require('electron')
const app = electron.app

const menu = require('./menu')
const windows = require('./windows')

function init() {
  let isReady = false

  app.on('ready', onReady)

  app.on('activate', () => {
    windows.main.show()
  })
}

function onReady() {
  isReady = true

  windows.main.init()
  menu.init()
}

init()
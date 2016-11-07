var electron = require('electron')
var app = electron.app

var menu = require('./menu')
var windows = require('./windows')

function init() {
  var isReady = false

  app.on('ready', onReady)

  app.on('activate', function () {
    windows.main.show()
  })
}

function onReady() {
  isReady = true

  windows.main.init()
  menu.init()
}

init()
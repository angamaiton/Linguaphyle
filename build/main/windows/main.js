var main = module.exports = {
  init: init,
  win: null
}
var config = require('../../config')

var electron = require('electron')
var app = electron.app
var menu = require('../menu')

function init() {
  if (main.win) {
    return main.win.show()
  }

  var win = main.win = new electron.BrowserWindow({
    width: 1200,
    height: 800
  })

  win.loadURL(config.WINDOW_MAIN)

  win.once('ready-to-show', function () {
    win.show()
  })
}

function show() {
  main.win.show()
}
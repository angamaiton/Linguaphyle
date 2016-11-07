var main = module.exports = {
  init: init,
  setTitle: setTitle,
  show: show,
  toggleDevTools: toggleDevTools,
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
    height: 800,
    title: config.APP_WINDOW_TITLE,
    titleBarStyle: 'hidden-inset' // Hide title bar (Mac)
  })

  win.loadURL(config.WINDOW_MAIN)

  win.once('ready-to-show', function () {
    win.show()
  })

  win.on('close', function () {
    app.quit()
  })
}

function toggleDevTools() {
  if (!main.win) { return }
  if (main.win.webContents.isDevToolsOpened()) {
    main.win.webContents.closeDevTools()
  } else {
    main.win.webContents.openDevTools({ detach: true })
  }
}

function setTitle(title) {
  if (!main.win) { return }
  main.win.setTitle(title)
}

function show() {
  main.win.show()
}
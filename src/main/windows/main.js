const main = module.exports = {
  init,
  setTitle,
  show,
  toggleDevTools,
  win: null
}
const config = require('../../config')

const electron = require('electron')
const app = electron.app
const menu = require('../menu')

function init() {
  if (main.win) {
    return main.win.show()
  }

  const win = main.win = new electron.BrowserWindow({
    width: 1200,
    height: 800,
    title: config.APP_WINDOW_TITLE
  })

  win.loadURL(config.WINDOW_MAIN)

  win.once('ready-to-show', () => {
    win.show()
  })

  win.on('close', () => {
    app.quit()
  })
}

function toggleDevTools() {
  if (!main.win) return
  if (main.win.webContents.isDevToolsOpened()) {
    main.win.webContents.closeDevTools()
  } else {
    main.win.webContents.openDevTools({ detach: true })
  }
}

function setTitle(title) {
  if (!main.win) return
  main.win.setTitle(title)
}

function show() {
  main.win.show()
}
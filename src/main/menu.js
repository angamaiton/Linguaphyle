module.exports = {
  init
}

const windows = require('./windows')

const electron = require('electron')

const app = electron.app

let menu = null

function init() {
  menu = electron.Menu.buildFromTemplate(getMenuTemplate())
  electron.Menu.setApplicationMenu(menu)
}

function getMenuTemplate() {
  const template = [
    {
      label: 'File'
    },
    {
      label: 'Edit'
    },
    {
      label: 'View'
    }
  ]
  return template
}
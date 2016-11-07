module.exports = {
  init: init
}

var windows = require('./windows')

var electron = require('electron')

var app = electron.app

var menu = null

function init() {
  menu = electron.Menu.buildFromTemplate(getMenuTemplate())
  electron.Menu.setApplicationMenu(menu)
}

function getMenuTemplate() {
  var template = [
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
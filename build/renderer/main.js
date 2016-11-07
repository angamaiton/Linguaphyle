var State = require('./lib/state')
State.load(onState)

var electron = require('electron')
var React = require('react')
var ReactDOM = require('react-dom')

var config = require('../config')

var App = require('./pages/app')

var ipcRenderer = electron.ipcRenderer

var state

var app

function onState(err, _state) {
  if (err) { return onError(err) }

  state = window.state = _state
  window.dispatch = dispatch

  state.location.go({
    url: 'home',
    setup: function (cb) {
      state.window.title = config.APP_WINDOW_TITLE
      cb(null)
    }
  })

  setupIpc()

  app = ReactDOM.render(React.createElement( App, { state: state }), document.querySelector('#body'))
}

function update() {
  app.setState(state)
  updateElectron()
}

function updateElectron() {
   if (state.window.title !== state.prev.title) {
    state.prev.title = state.window.title
    ipcRenderer.send('setTitle', state.window.title)
  }
}

var dispatchHandlers = {
  'setTitle': function (title) { state.window.title = title }
}

function dispatch(action) {
  var args = [], len = arguments.length - 1;
  while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

  var handler = dispatchHandlers[action]
  if (handler) { handler.apply(void 0, args) }
  else { console.error('Missing dispatch handler: ' + action) }

  update()
}

function setupIpc() {
  State.on('stateSaved', function () { return ipcRenderer.send('stateSaved'); })
}

function updateElectron() {

}
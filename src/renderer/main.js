const State = require('./lib/state')
State.load(onState)

const electron = require('electron')
const React = require('react')
const ReactDOM = require('react-dom')

const config = require('../config')

const App = require('./pages/app')

const ipcRenderer = electron.ipcRenderer

let state

let app

function onState(err, _state) {
  if (err) return onError(err)

  state = window.state = _state
  window.dispatch = dispatch

  state.location.go({
    url: 'home',
    setup: (cb) => {
      state.window.title = config.APP_WINDOW_TITLE
      cb(null)
    }
  })

  setupIpc()

  app = ReactDOM.render(<App state={state} />, document.querySelector('#body'))
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

const dispatchHandlers = {
  'setTitle': (title) => { state.window.title = title }
}

function dispatch(action, ...args) {
  const handler = dispatchHandlers[action]
  if (handler) handler(...args)
  else console.error('Missing dispatch handler: ' + action)

  update()
}

function setupIpc() {
  State.on('stateSaved', () => ipcRenderer.send('stateSaved'))
}

function updateElectron() {

}
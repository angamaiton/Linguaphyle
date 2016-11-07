const appConfig = require('application-config')('Linguaphyle')
const path = require('path')
const {EventEmitter} = require('events')

const config = require('../../config')

const SAVE_DEBOUNCE_INTERVAL = 1000

appConfig.filePath = path.join(config.CONFIG_PATH, 'config.json')

const State = module.exports = Object.assign(new EventEmitter(), {
  load,
  save
})

function getDefaultState() {
  const LocationHistory = require('location-history')

  return {
    client: null,
    server: null,
    prev: {
      title: null
    },
    location: new LocationHistory(),
    window: {
      title: config.APP_WINDOW_TITLE
    },
    errors: [],
    saved: {}
  }
}

function load(cb) {
  appConfig.read(function (err, saved) {
    if (err || !saved.version) {
      setupStateSaved(onSavedState)
    } else {
      onSavedState(null, saved)
    }
  })

  function onSavedState(err, saved) {
    const state = getDefaultState()
    state.saved = saved

    cb(null, state)
  }
}

function save(state,cb) {
  const copy = Object.assign({}, state.saved)

  appConfig.write(copy, (err) => {
    if (err) console.error(err)
    else State.emit('stateSaved')
  })
}

function saveImmediate(state, cb) {
  appConfig.write(copy, (err) => {
    if (err) console.error(err)
    else State.emit('stateSaved')
  })
}

function setupStateSaved(cb) {

  const saved = {
    version: config.APP_VERSION
  }

  cb(null, saved)
}
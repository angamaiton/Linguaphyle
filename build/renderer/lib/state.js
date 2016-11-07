var appConfig = require('application-config')('Linguaphyle')
var path = require('path')
var ref = require('events');
var EventEmitter = ref.EventEmitter;

var config = require('../../config')

var SAVE_DEBOUNCE_INTERVAL = 1000

appConfig.filePath = path.join(config.CONFIG_PATH, 'config.json')

var State = module.exports = Object.assign(new EventEmitter(), {
  load: load,
  save: save
})

function getDefaultState() {
  var LocationHistory = require('location-history')

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
    var state = getDefaultState()
    state.saved = saved

    cb(null, state)
  }
}

function save(state,cb) {
  var copy = Object.assign({}, state.saved)

  appConfig.write(copy, function (err) {
    if (err) { console.error(err) }
    else { State.emit('stateSaved') }
  })
}

function saveImmediate(state, cb) {
  appConfig.write(copy, function (err) {
    if (err) { console.error(err) }
    else { State.emit('stateSaved') }
  })
}

function setupStateSaved(cb) {

  var saved = {
    version: config.APP_VERSION
  }

  cb(null, saved)
}
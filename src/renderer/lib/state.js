const appConfig = require('application-config')('Linguaphyle')
const path = require('path')
const {EventEmitter} = require('events')

const config = require('../../config')

const SAVE_DEBOUNCE_INTERVAL = 1000

const State = module.exports = Object.assign(new EventEmitter(), {
  save: function() {
    const debounce = require('debounce')
    State.save = debounce(saveImmediate, SAVE_DEBOUNCE_INTERVAL)
  }
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
  setupStateSaved(onSavedState)
}

function setupStateSaved() {
  
}

function saveImmediate(state, cb) {
  
}
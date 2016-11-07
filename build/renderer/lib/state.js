var appConfig = require('application-config')('Linguaphyle')
var path = require('path')
var ref = require('events');
var EventEmitter = ref.EventEmitter;

var config = require('../../config')

var SAVE_DEBOUNCE_INTERVAL = 1000

var State = module.exports = Object.assign(new EventEmitter(), {
  save: function() {
    var debounce = require('debounce')
    State.save = debounce(saveImmediate, SAVE_DEBOUNCE_INTERVAL)
  }
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
  setupStateSaved(onSavedState)
}

function setupStateSaved() {
  
}

function saveImmediate(state, cb) {
  
}
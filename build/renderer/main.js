var electron = require('electron')
var React = require('react')
var ReactDOM = require('react-dom')

var config = require('../config')

var App = require('./pages/app')

var app

app = ReactDOM.render(React.createElement( App, null ), document.querySelector('#body'))
var electron = require('electron')
var React = require('react')
var ReactDOM = require('react-dom')

var App = require('./pages/app')

var app

app = ReactDOM.render(React.createElement( App, { state: state }), document.querySelector('#body'))
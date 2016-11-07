const electron = require('electron')
const React = require('react')
const ReactDOM = require('react-dom')

const config = require('../config')

const App = require('./pages/app')

let app

app = ReactDOM.render(<App />, document.querySelector('#body'))
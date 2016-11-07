const electron = require('electron')
const React = require('react')
const ReactDOM = require('react-dom')

const App = require('./pages/app')

let app

app = ReactDOM.render(<App state={state} />, document.querySelector('#body'))
var createGetter = require('fn-getter')
var React = require('react')

var config = require('../../config')

var Header = require('../components/header')

var LanguageListPage = require('./language-list-page')

var Views = {
  'home': createGetter(function () { return LanguageListPage; })
}

var App = (function (superclass) {
  function App () {
    superclass.apply(this, arguments);
  }

  if ( superclass ) App.__proto__ = superclass;
  App.prototype = Object.create( superclass && superclass.prototype );
  App.prototype.constructor = App;

  App.prototype.render = function render () {
    var state = this.props.state

    return (
      React.createElement( 'div', { className: 'app' },
        React.createElement( 'div', { className: 'content' },
          React.createElement( Header, { state: state }),
          this.getView()
        )
      )
    )
  };
  App.prototype.getView = function getView () {
    var state = this.props.state
    var View = Views[state.location.url()]()
    return (React.createElement( View, { state: state }))
  };

  return App;
}(React.Component));
module.exports = App
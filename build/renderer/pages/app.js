var createGetter = require('fn-getter')
var React = require('react')

var config = require('../../config')

var LanguageListPage = require('./language-list-page')

var Views = {
  'home': createGetter(function () { return LanguageListPage; })
}

var App = (function (superclass) {
  function App(props) {
    this.state = {
      title: config.APP_WINDOW_TITLE
    }
  }

  if ( superclass ) App.__proto__ = superclass;
  App.prototype = Object.create( superclass && superclass.prototype );
  App.prototype.constructor = App;
  App.prototype.render = function render () {
    return (
      React.createElement( 'div', { className: 'app' },
        React.createElement( 'div', { className: 'content' }, "WEEWWWW LADDDD ", this.state.title
        )
      )
    )
  };

  return App;
}(React.Component));
module.exports = App
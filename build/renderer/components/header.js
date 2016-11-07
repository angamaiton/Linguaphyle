var React = require('react')

var Header = (function (superclass) {
  function Header () {
    superclass.apply(this, arguments);
  }

  if ( superclass ) Header.__proto__ = superclass;
  Header.prototype = Object.create( superclass && superclass.prototype );
  Header.prototype.constructor = Header;

  Header.prototype.render = function render () {
    return (
      React.createElement( 'div', { className: 'header' },
      this.getTitle()
      )
    )
  };

  Header.prototype.getTitle = function getTitle () {
    if (process.platform !== 'darwin') { return null }
    var state = this.props.state
    return (React.createElement( 'div', { className: 'title' }, state.window.title))
  };

  return Header;
}(React.Component));

module.exports = Header
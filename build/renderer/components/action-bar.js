var React = require('react')
var Col = require('react-bootstrap').Col
var Nav = require('react-bootstrap').Nav
var NavItem = require('react-bootstrap').NavItem

var ActionBar = (function (superclass) {
  function ActionBar () {
    superclass.apply(this, arguments);
  }

  if ( superclass ) ActionBar.__proto__ = superclass;
  ActionBar.prototype = Object.create( superclass && superclass.prototype );
  ActionBar.prototype.constructor = ActionBar;

  ActionBar.prototype.render = function render () {
    return (
      React.createElement( Col, { sm: 6, md: 3 },
        React.createElement( Nav, { bsStyle: 'pills', bsClass: 'action-bar' }, "test")
      )
    )
  };

  return ActionBar;
}(React.Component));

module.exports = ActionBar
const React = require('react')
const Col = require('react-bootstrap').Col
const Nav = require('react-bootstrap').Nav
const NavItem = require('react-bootstrap').NavItem

class ActionBar extends React.Component {
  render() {
    return (
      <Col sm={6} md={3}>
        <Nav bsStyle='pills' bsClass='action-bar'>
          test
        </Nav>
      </Col>
    )
  }
}

module.exports = ActionBar
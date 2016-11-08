const createGetter = require('fn-getter')
const React = require('react')

const config = require('../../config')

const Header = require('../components/header')
const ActionBar = require('../components/action-bar')
const Col = require('react-bootstrap').Col

const LanguageListPage = require('./language-list-page')

const Views = {
  'home': createGetter(() => LanguageListPage)
}

class App extends React.Component {
  render() {
    const state = this.props.state

    return (
      <div className='app'>
        <div className='content'>
          <Header state={state} />
          <ActionBar state={state} />
            <Col sm={6} md={3}>
              {this.getView()}
            </Col>
        </div>
      </div>
    )
  }
  getView() {
    const state = this.props.state
    const View = Views[state.location.url()]()
    return (<View state={state} />)
  }
}
module.exports = App
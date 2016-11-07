const createGetter = require('fn-getter')
const React = require('react')

const config = require('../../config')

const Header = require('../components/header')

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
          WEEWWWW LADDDD
          {this.getView()}
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
const createGetter = require('fn-getter')
const React = require('react')

const config = require('../../config')

const LanguageListPage = require('./language-list-page')

const Views = {
  'home': createGetter(() => LanguageListPage)
}

class App extends React.Component {
  constructor(props) {
    this.state = {
      title: config.APP_WINDOW_TITLE
    }
  }
  render() {
    return (
      <div className='app'>
        <div className='content'>
          WEEWWWW LADDDD
          {this.state.title}
        </div>
      </div>
    )
  }
}
module.exports = App
const createGetter = require('fn-getter')
const React = require('react')

const LanguageListPage = require('./language-list-page')

const Views = {
  'home': createGetter(() => LanguageListPage)
}

class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <div className='content'>
          WEEWWWW LADDDD
        </div>
      </div>
    )
  }
}
module.exports = App
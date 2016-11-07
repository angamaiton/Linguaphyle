const React = require('react')

class Header extends React.Component {
  render() {
    return (
      <div className='header'>
      {this.getTitle()}
      </div>
    )
  }

  getTitle() {
    if (process.platform !== 'darwin') return null
    const state = this.props.state
    return (<div className='title'>{state.window.title}</div>)
  }
}

module.exports = Header
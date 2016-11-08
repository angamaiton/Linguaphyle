const React = require('react')
const Nav = require('react-bootstrap').Nav
const NavItem = require('react-bootstrap').NavItem

module.exports = class LanguageListPage extends React.Component {
  render() {
    const languages = [
      {
        title: 'Altaic'
      },
      {
        title: 'Indo-European'
      },
      {
        title: 'Finno-Ugric'
      },
      {
        title: 'Sino-Tibetan'
      }
    ]
    let languageList = languages.map((branch) => {
      return <NavItem key={branch.title}><h1>{branch.title}</h1></NavItem>
    })

    return (
      <Nav bsStyle='pills' stacked className='language-list'>
        {languageList}
      </Nav>
    )
  }
}
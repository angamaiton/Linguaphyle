const React = require('react')

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
      return <li key={branch.title}><h1>{branch.title}</h1></li>
    })

    return (
      <ul className='language-list'>
        {languageList}
      </ul>
    )
  }
}
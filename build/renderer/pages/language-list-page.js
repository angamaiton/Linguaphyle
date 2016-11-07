var React = require('react')

module.exports = (function (superclass) {
  function LanguageListPage () {
    superclass.apply(this, arguments);
  }

  if ( superclass ) LanguageListPage.__proto__ = superclass;
  LanguageListPage.prototype = Object.create( superclass && superclass.prototype );
  LanguageListPage.prototype.constructor = LanguageListPage;

  LanguageListPage.prototype.render = function render () {
    var languages = [
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
    var languageList = languages.map(function (branch) {
      return React.createElement( 'li', { key: branch.title }, React.createElement( 'h1', null, branch.title ))
    })

    return (
      React.createElement( 'ul', { className: 'language-list' },
        languageList
      )
    )
  };

  return LanguageListPage;
}(React.Component))
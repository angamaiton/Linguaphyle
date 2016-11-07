var React = require('react')

module.exports = (function (superclass) {
  function LanguageListPage () {
    superclass.apply(this, arguments);
  }

  if ( superclass ) LanguageListPage.__proto__ = superclass;
  LanguageListPage.prototype = Object.create( superclass && superclass.prototype );
  LanguageListPage.prototype.constructor = LanguageListPage;

  LanguageListPage.prototype.render = function render () {
    var contents = []

    return (
      React.createElement( 'div', { className: 'language-list' }, "most wew lad of all")
    )
  };

  return LanguageListPage;
}(React.Component))
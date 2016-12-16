var section = {
  bindings: {
    heading: '@',
    recipes: '<',
    cardSize: '@'
  },
  templateUrl: 'views/components/Section.template.html'
}

angular.module('recipeBox')
  .component('section', section)

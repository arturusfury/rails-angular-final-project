var section = {
  bindings: {
    heading: '@',
    recipes: '<'
  },
  templateUrl: 'views/components/Section.template.html',
  controller: function() {

  }
}

angular.module('recipeBox')
  .component('section', section)

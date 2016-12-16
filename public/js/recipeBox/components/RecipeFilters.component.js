var recipeFilters = {
  bindings: {
    heading: '@',
    recipes: '<'
  },
  require: {
    section: '^section'
  },
  templateUrl: 'views/components/RecipeFilters.template.html'
}

angular.module('recipeBox')
  .component('recipeFilters', recipeFilters)

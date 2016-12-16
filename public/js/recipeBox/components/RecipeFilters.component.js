var recipeFilters = {
  bindings: {
    heading: '@',
    recipes: '<'
  },
  templateUrl: 'views/components/RecipeListFilters.template.html'
}

angular.module('recipeBox')
  .component('recipeFilters', recipeFilters)

var recipeList = {
  bindings: {
    heading: '@',
    recipes: '<',
    cardSize: '<'
  },
  templateUrl: 'views/components/RecipeList.template.html'
}

angular.module('recipeBox')
  .component('recipeList', recipeList)

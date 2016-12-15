var recipeList = {
  bindings: {
    heading: '@',
    recipes: '<'
  },
  templateUrl: 'views/components/RecipeList.template.html'
}

angular.module('recipeBox')
  .component('recipeList', recipeList)

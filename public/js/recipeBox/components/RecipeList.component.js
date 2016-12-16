var recipeList = {
  bindings: {
    heading: '@',
    recipes: '<',
    cardSize: '<',
    dishType: '<',
    rating: '<',
    servings: '<'
  },
  templateUrl: 'views/components/RecipeList.template.html'
}

angular.module('recipeBox')
  .component('recipeList', recipeList)

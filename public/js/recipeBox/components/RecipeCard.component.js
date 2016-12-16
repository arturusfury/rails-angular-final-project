var recipeCard = {
  bindings: {
    recipe: '<',
    cardSize: '<'
  },
  templateUrl: 'views/components/RecipeCard.template.html'
}

angular.module('recipeBox')
  .component('recipeCard', recipeCard)

var recipeCard = {
  bindings: {
    recipe: '<'
  },
  templateUrl: 'views/components/RecipeCard.template.html',
}

angular.module('recipeBox')
  .component('recipeCard', recipeCard)

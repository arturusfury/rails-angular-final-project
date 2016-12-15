var RecipeCardComponent = {
  bindings: {
    recipe: '<'
  },
  templateUrl: 'views/components/RecipeCard.template.html',
}

angular.module('recipeBox')
  .component('RecipeCardComponent', RecipeCardComponent)

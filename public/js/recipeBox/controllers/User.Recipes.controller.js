function UserRecipesController(recipes) {
  var ctrl = this;

  ctrl.recipes = recipes.data
}

angular
  .module('recipeBox')
  .controller('UserRecipesController', UserRecipesController)

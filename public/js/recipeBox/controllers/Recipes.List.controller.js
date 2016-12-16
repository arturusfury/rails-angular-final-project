function RecipesListController(recipes) {
  var ctrl = this;

  ctrl.recipes = recipes.data
}

angular
  .module('recipeBox')
  .controller('RecipesListController', RecipesListController)

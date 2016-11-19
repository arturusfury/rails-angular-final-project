function RecipesListController(recipes) {
  var ctrl = this;

  ctrl.data = recipes.data
}

angular
  .module('recipeBox')
  .controller('RecipesListController', RecipesListController)

function MainRecipesController(topRecipes, latestRecipes) {
  var ctrl = this;

  ctrl.topRecipes = topRecipes.data;
  ctrl.latestRecipes = latestRecipes.data;
}

angular
  .module('recipeBox')
  .controller('MainRecipesController', MainRecipesController)

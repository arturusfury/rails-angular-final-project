function MainRecipesController(recipes) {
  var ctrl = this;

  ctrl.data = recipes.data;

  console.log(recipes.data);
}

angular
  .module('recipeBox')
  .controller('MainRecipesController', MainController)

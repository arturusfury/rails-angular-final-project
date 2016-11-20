function RecipeDetailsController(recipe) {
  var ctrl = this;

  ctrl.data = recipe.data;
}

angular
  .module('recipeBox')
  .controller('RecipeDetailsController', RecipeDetailsController)

var RecipeListComponent = {
  bindings: {
    heading: '<heading',
  },
  templateUrl: 'views/components/RecipeList.template.html',
  controller: RecipeListController
}

function RecipeListController(RecipeService) {
  var ctrl = this;

  ctrl.recipes = RecipeService.getTopRecipes;
}

angular.module('recipeBox')
  .component('RecipeListComponent', RecipeListComponent)

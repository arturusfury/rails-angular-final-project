var recipeList = {
  bindings: {
    heading: '<heading',
    recipes: '<recipes'
  },
  templateUrl: 'views/components/RecipeList.template.html',
  controller: RecipeListController
}

function RecipeListController(RecipeService) {
  var ctrl = this;
}

angular.module('recipeBox')
  .component('recipeList', recipeList)

var userRecipes = {
  bindings: {
    recipes: '<'
  },
  templateUrl: 'views/components/UserRecipes.template.html'
}

angular.module('recipeBox')
  .component('userRecipes', userRecipes)

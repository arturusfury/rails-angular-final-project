var RecipeListComponent = {
  bindings: {
    heading: '<heading',
  },
  templateUrl: 'views/components/RecipeList.template.html',
}

angular.module('recipeBox')
  .component('RecipeListComponent', RecipeListComponent)

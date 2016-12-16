var recipeBrowser = {
  bindings: {
    recipes: '<'
  },
  templateUrl: 'views/components/RecipeBrowser.template.html'
}

angular.module('recipeBox')
  .component('recipeBrowser', recipeBrowser)

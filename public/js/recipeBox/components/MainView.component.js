var mainView = {
  bindings: {
    topRecipes: '<',
    latestRecipes: '<'
  },
  templateUrl: 'views/components/MainView.template.html'
}

angular.module('recipeBox')
  .component('mainView', mainView)

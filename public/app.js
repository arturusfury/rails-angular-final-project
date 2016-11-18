var app = angular.module('recipeBox', [
  'ui.router'
]);

app.config(['$stateProvider', function($stateProvider) {
  $stateProvider
    .state('/', {
      url: '/',
      templateUrl: 'index.html',
      controller: 'RecipeMainController',
      controllerAs: 'MainCtrl',
      resolve: {

      }
    })
    .state('recipes', {
      url: '/recipes',
      templateUrl: 'views/Recipes.controller.html',
      controller: 'RecipesController',
      controllerAs: 'RecipesCtrl',
      resolve: {
        recipe: function ($http, $stateParams) {
          return $http.get('http://localhost:3000/api/v1/recipes/')
        }
      }
    })
    .state('recipe', {
      url: '/recipes/:id',
      templateUrl: 'views/RecipeDetails.controller.html',
      controller: 'RecipeDetailsController',
      controllerAs: 'RecipeCtrl',
      resolve: {
        recipe: function ($http, $stateParams) {
          return $http.get('http://localhost:3000/api/v1/recipes/' + $stateParams.id)
        }
      }
    })
    .otherwise({
      redirectTo: '/';
    });
}]);

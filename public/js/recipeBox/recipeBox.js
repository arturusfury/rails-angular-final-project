angular
  .module('recipeBox', ['ui.router', 'ui.materialize'])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('main', {
      url: '/',
      templateUrl: 'views/Main.controller.html',
      controller: 'MainRecipesController',
      resolve: {
        recipes: function ($http) {
          return $http.get('http://localhost:3000/api/v1/recipes/')
        }
      }
    })
    .state('recipes', {
      templateUrl: 'views/Recipes.controller.html'
    })
    .state('recipes.list', {
      url: '/recipes',
      templateUrl: 'views/recipes/Recipes.List.controller.html',
      controller: 'RecipesListController as recipes',
      resolve: {
        recipes: function ($http) {
          return $http.get('http://localhost:3000/api/v1/recipes/')
        }
      }
    })
    .state('recipes.add', {
      url: 'add',
      templateUrl: 'views/recipes/Recipe.Add.controller.html',
      controller: 'RecipeAddController'
    })
    .state('recipes.detail', {
      url: ':id',
      templateUrl: 'views/recipes/Recipe.Details.controller.html',
      controller: 'RecipeDetailsController as recipe',
      resolve: {
        recipe: function ($http, $stateParams) {
          return $http.get('http://localhost:3000/api/v1/recipes/' + $stateParams.id)
        }
      }
    })
    .state('recipes.edit', {
      url: ':id/edit',
      templateUrl: 'views/recipes/Recipe.Edit.controller.html',
      controller: 'RecipeEditController',
      resolve: {
        recipe: function ($http, $stateParams) {
          // return $http.get('http://localhost:3000/api/v1/recipes/' + $stateParams.id)
        }
      }
    });
}]);

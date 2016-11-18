angular
  .module('recipeBox', ['ui.router'])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('main', {
      url: '/',
      templateUrl: 'views/Main.controller.html',
      controller: 'MainController',
      resolve: {
        recipes: function ($http) {
          // return $http.get('http://localhost:3000/api/v1/recipes/')
        }
      }
    })
    .state('recipes', {
      url: '/recipes',
      templateUrl: 'views/recipes/Recipes.List.controller.html',
      controller: 'RecipesListController',
      resolve: {
        recipes: function ($http) {
          // return $http.get('http://localhost:3000/api/v1/recipes/')
        }
      }
    })
    .state('recipe_add', {
      url: '/recipes/add',
      templateUrl: 'views/recipes/Recipe.Add.controller.html',
      controller: 'RecipeAddController',
      resolve: {
        recipes: function ($http) {
          // return $http.get('http://localhost:3000/api/v1/recipes/')
        }
      }
    })
    .state('recipe', {
      url: '/recipes/:id',
      templateUrl: 'views/recipes/Recipe.Details.controller.html',
      controller: 'RecipeDetailsController',
      resolve: {
        recipe: function ($http, $stateParams) {
          // return $http.get('http://localhost:3000/api/v1/recipes/' + $stateParams.id)
        }
      }
    });

    $urlRouterProvider.otherwise('/');
}]);

angular
  .module('recipeBox', ['ui.router', 'ui.materialize'])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {

  $urlRouterProvider.otherwise('/main');

  $stateProvider
    .state('main', {
      url: '/',
      templateUrl: 'views/Main.controller.html'
    })
    .state('main.list', {
      url: 'main',
      templateUrl: 'views/Main.Recipes.controller.html',
      controller: 'MainRecipesController',
      resolve: {
        recipes: function ($http) {
          return $http.get('http://localhost:3000/api/v1/recipes/')
        }
      }
    })
    .state('main.recipes', {
      url: 'recipes',
      templateUrl: 'views/recipes/Recipes.List.controller.html',
      controller: 'RecipesListController as recipes',
      resolve: {
        recipes: function ($http) {
          return $http.get('http://localhost:3000/api/v1/recipes/')
        }
      }
    })
    .state('main.recipe_add', {
      url: 'recipes/add',
      templateUrl: 'views/recipes/Recipe.Add.controller.html',
      controller: 'RecipeAddController'
    })
    .state('main.recipe', {
      url: 'recipes/:id',
      templateUrl: 'views/recipes/Recipe.Details.controller.html',
      controller: 'RecipeDetailsController as recipe',
      resolve: {
        recipe: function ($http, $stateParams) {
          return $http.get('http://localhost:3000/api/v1/recipes/' + $stateParams.id)
        }
      }
    })
    .state('main.recipe_edit', {
      url: 'recipes/:id/edit',
      templateUrl: 'views/recipes/Recipe.Edit.controller.html',
      controller: 'RecipeEditController',
      resolve: {
        recipe: function ($http, $stateParams) {
          // return $http.get('http://localhost:3000/api/v1/recipes/' + $stateParams.id)
        }
      }
    });
}]);

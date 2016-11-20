angular
  .module('recipeBox', ['ui.router', 'ui.materialize', 'ipCookie', 'ng-token-auth'])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('main', {
      url: '/',
      templateUrl: 'views/Main.template.html',
      controller: 'MainRecipesController',
      resolve: {
        recipes: function ($http) {
          return $http.get('http://localhost:3000/api/v1/recipes/')
        }
      }
    })
    // User Routes
    .state('user', {
      url: '/user',
      abstract: true,
      templateUrl: 'views/User.template.html'
    })
    .state('user.login', {
      url: '/login',
      templateUrl: 'views/user/SignIn.template.html',
      controller: 'UserSessionsController'
    })
    .state('user.create', {
      url: '/create',
      templateUrl: 'views/user/Create.template.html',
      controller: 'UserRegistrationsController'
    })
    // Recipe Routes
    .state('recipes', {
      url: '/recipes',
      abstract: true,
      templateUrl: 'views/Recipes.template.html'
    })
    .state('recipes.list', {
      url: '',
      templateUrl: 'views/recipes/Recipes.List.template.html',
      controller: 'RecipesListController as recipes',
      resolve: {
        recipes: function ($http) {
          return $http.get('http://localhost:3000/api/v1/recipes/')
        }
      }
    })
    .state('recipes.add', {
      url: '/add',
      templateUrl: 'views/recipes/Recipe.Add.template.html',
      controller: 'RecipeAddController',
      resolve: {
        auth: ['$auth', function($auth) {
          return $auth.validateUser();
        }]
      }
    })
    .state('recipes.edit', {
      url: '/:id/edit',
      templateUrl: 'views/recipes/Recipe.Edit.template.html',
      controller: 'RecipeEditController',
      resolve: {
        recipe: function ($http, $stateParams) {
          return $http.get('http://localhost:3000/api/v1/recipes/' + $stateParams.id)
        }
      }
    })
    .state('recipes.detail', {
      url: '/:id',
      templateUrl: 'views/recipes/Recipe.Details.template.html',
      controller: 'RecipeDetailsController as recipe',
      resolve: {
        recipe: function ($http, $stateParams) {
          return $http.get('http://localhost:3000/api/v1/recipes/' + $stateParams.id)
        }
      }
    });
  }])
  // Redirect after a successful login
  .run(['$rootScope', '$location', function($rootScope, $location) {
    $rootScope.$on('auth:login-success', function() {
      $location.path('/');
    });

    $rootScope.$on('auth:logout-success', function() {
      $location.path('/');
    });
  }]);

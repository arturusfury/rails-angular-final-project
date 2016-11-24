angular
  .module('recipeBox',
    [
      'ui.router',
      'ui.materialize',
      'ipCookie',
      'ng-token-auth',
      'truncate',
      'ngInflection',
      'ngMessages',
      'ngPassword'
    ]
  )
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('main', {
      url: '/',
      templateUrl: 'views/Main.template.html',
      controller: 'MainRecipesController as mainCtrl',
      resolve: {
        topRecipes: function ($http) {
          return $http.get('/api/v1/recipes/top')
        },
        latestRecipes: function ($http) {
          return $http.get('/api/v1/recipes/latest')
        }
      }
    })
    .state('contact', {
      url: '/contact',
      templateUrl: 'views/Contact.template.html'
    })
    .state('search', {
      url: '/search',
      templateUrl: 'views/Search.template.html',
      controller: 'SearchResultsController as ctrl',
      resolve: {
        recipes: function ($http) {
          return $http.get('/api/v1/recipes/')
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
    .state('user.settings', {
      url: '/settings',
      templateUrl: 'views/user/Settings.template.html',
      controller: 'UserSettingsController as user'
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
          return $http.get('/api/v1/recipes/')
        }
      }
    })
    .state('recipes.add', {
      url: '/add',
      templateUrl: 'views/recipes/Recipe.Add.template.html',
      controller: 'RecipeAddController as RecipeAddCtrl',
      resolve: {
        auth: ['$auth', function($auth) {
          return $auth.validateUser();
        }]
      }
    })
    .state('recipes.edit', {
      url: '/:id/edit',
      templateUrl: 'views/recipes/Recipe.Edit.template.html',
      controller: 'RecipeEditController as RecipeEditCtrl',
      resolve: {
        auth: ['$auth', function($auth) {
          return $auth.validateUser();
        }],
        recipe: function ($http, $stateParams) {
          return $http.get('/api/v1/recipes/' + $stateParams.id)
        }
      }
    })
    .state('recipes.detail', {
      url: '/:id',
      templateUrl: 'views/recipes/Recipe.Details.template.html',
      controller: 'RecipeDetailsController as recipe',
      resolve: {
        recipe: function ($http, $stateParams) {
          return $http.get('/api/v1/recipes/' + $stateParams.id)
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

    $rootScope.$on('$viewContentLoaded',function(){
      $("html, body").animate({ scrollTop: 0 }, 200);
    });
  }]);

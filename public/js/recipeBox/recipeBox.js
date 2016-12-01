angular
  .module('recipeBox',
    [
      'ui.router',
      'ui.materialize',
      'Devise',
      'truncate',
      'ngInflection',
      'ngMessages',
      'ngPassword'
    ]
  )
  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('main', {
      url: '/',
      templateUrl: 'views/Main.template.html',
      controller: 'MainRecipesController as mainCtrl',
      resolve: {
        topRecipes: function (Recipe) {
          return Recipe.getTop();
        },
        latestRecipes: function (Recipe) {
          return Recipe.getLatest();
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
      controller: 'UserSessionsController as userSessionCtrl'
    })
    .state('user.create', {
      url: '/create',
      templateUrl: 'views/user/Create.template.html',
      controller: 'UserRegistrationsController as userRegCtrl'
    })
    .state('user.settings', {
      url: '/settings',
      templateUrl: 'views/user/Settings.template.html',
      controller: 'UserSettingsController as userSettingsCtrl'
    })
    .state('user.recipes', {
      url: '/recipes',
      templateUrl: 'views/user/Recipes.template.html',
      controller: 'UserRecipesController as user',
      resolve: {
        recipes: function ($http, $rootScope) {
          return $http.get('/api/v1/recipes/user/' + $rootScope.user.name.replace(/ /g,"_"))
        }
      }
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
      controller: 'RecipesListController as RecipesListCtrl',
      resolve: {
        recipes: function ($http) {
          return $http.get('/api/v1/recipes/')
        }
      }
    })
    .state('recipes.add', {
      url: '/add',
      templateUrl: 'views/recipes/Recipe.Add.template.html',
      controller: 'RecipeAddController as RecipeAddCtrl'
    })
    .state('recipes.edit', {
      url: '/:id/edit',
      templateUrl: 'views/recipes/Recipe.Edit.template.html',
      controller: 'RecipeEditController as RecipeEditCtrl',
      resolve: {
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
  // handle our broadcast messages
  .run(['$rootScope', '$location', function($rootScope, $location) {
    $rootScope.$on('devise:new-session', function(event, currentUser) {
      $location.path('/');
    });

    $rootScope.$on('devise:logout', function(event, oldCurrentUser) {
      $rootScope.user = {}
      $location.path('/');
    });

    $rootScope.$on('$viewContentLoaded',function(){
      $("html, body").animate({ scrollTop: 0 }, 200);
    });

    $rootScope.$on('$stateChangeError', function() {
      $location.path('/');
    });
  }]);

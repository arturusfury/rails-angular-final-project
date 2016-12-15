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
        topRecipes: function (RecipeService) {
          return RecipeService.getTopRecipes();
        },
        latestRecipes: function (RecipeService) {
          return RecipeService.getLatestRecipes();
        }
      }
    })
    .state('test', {
      url: '/test',
      templateUrl: 'views/Comp.template.html',
      resolve: {
        topRecipes: function (RecipeService) {
          return RecipeService.getTopRecipes();
        },
        latestRecipes: function (RecipeService) {
          return RecipeService.getLatestRecipes();
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
        recipes: function (RecipeService) {
          return RecipeService.getAllRecipes();
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
        recipes: function (RecipeService) {
          return RecipeService.getUserRecipes();
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
        recipes: function (RecipeService) {
          return RecipeService.getAllRecipes();
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
        recipe: function (RecipeService, $stateParams) {
          return RecipeService.getRecipe($stateParams.id);
        }
      }
    })
    .state('recipes.detail', {
      url: '/:id',
      templateUrl: 'views/recipes/Recipe.Details.template.html',
      controller: 'RecipeDetailsController as recipe',
      resolve: {
        recipe: function (RecipeService, $stateParams) {
          return RecipeService.getRecipe($stateParams.id);
        }
      }
    });
  }])

  // handle our broadcast messages
  .run(['$rootScope', '$location', function($rootScope, $location) {
    $rootScope.$on('devise:new-session', function() {
      $location.path('/');
    });

    $rootScope.$on('devise:new-registration', function() {
      $location.path('/');
    });

    $rootScope.$on('devise:logout', function() {
      $rootScope.user = {}
      $location.path('/');
    });

    $rootScope.$on('$viewContentLoaded',function(){
      $("html, body").animate({ scrollTop: 0 }, 200);
    });

    $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
      $location.path('/');
      console.log(error);
    });
  }]);

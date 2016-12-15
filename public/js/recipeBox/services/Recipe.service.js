angular.module('recipeBox')
  .service('RecipeService', ['$http', '$rootScope', function ($http, $rootScope) {
    var recipesApiPath = '/api/v1/recipes'

    this.getAllRecipes = function() {
      return $http.get(recipesApiPath);
    }

    this.getLatestRecipes = function() {
      return $http.get(recipesApiPath + '/latest');
    }

    this.getTopRecipes = function() {
      return $http.get(recipesApiPath + '/top');
    }

    this.getUserRecipes = function () {
      return $http.get('/api/v1/recipes/user/' + $rootScope.user.username)
    }

    this.getRecipes = function (id) {
      return $http.get('/api/v1/recipes/' + id)
    }
  }]);

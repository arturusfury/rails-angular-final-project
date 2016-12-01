angular.module('recipeBox')
  .service('Recipe', ['$http', '$rootScope', function ($http, $rootScope) {
    var recipesApiPath = '/api/v1/recipes'

    this.getAll = function() {
      return $http.get(recipesApiPath);
    }

    this.getLatest = function() {
      return $http.get(recipesApiPath + '/latest');
    }

    this.getTop = function() {
      return $http.get(recipesApiPath + '/top');
    }

    this.getUserRecipes = function () {
      return $http.get('/api/v1/recipes/user/' + $rootScope.user.username)
    }

    this.get = function (id) {
      return $http.get('/api/v1/recipes/' + id)
    }
  }]);

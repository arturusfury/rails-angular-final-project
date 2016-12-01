angular.module('recipeBox')
  .service('Recipe', ['$http', function ($http) {
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

    this.create = function(onSuccess,onError) {

    }
  }]);

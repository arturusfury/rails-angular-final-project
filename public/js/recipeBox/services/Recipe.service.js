angular.module('recipeBox')
  .service('RecipeService', ['$http', 'UserService', function ($http, UserService) {
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
      return $http.get(recipesApiPath + '/user/' + UserService.getUser().username)
    }

    this.getRecipe = function (id) {
      return $http.get('/api/v1/recipes/' + id)
    }
  }]);

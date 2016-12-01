angular.module('recipeBox')
  .service('User', ['Auth', '$http', function (Auth, $http) {
    this.get = function(onSuccess,onError) {

    }

    this.create = function(onSuccess,onError) {

    }

    this.login = function(userInfo, onSuccess, onFailure) {
      Auth.login(userInfo).then(onSuccess,onFailure);
    }
  }]);

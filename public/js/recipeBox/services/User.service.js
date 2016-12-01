angular.module('recipeBox')
  .service('User', ['Auth', '$http', '$rootScope', function (Auth, $http, $rootScope) {
    this.get = function(onSuccess,onError) {

    }

    this.create = function(onSuccess,onError) {

    }

    this.login = function(userInfo, onSuccess, onFailure) {
      Auth.login(userInfo).then(onSuccess,onFailure);
        // .then(function(user) {
        //   $rootScope.user = user;
        // },function (error) {
        //   ctrl.errors = error.data;
        // });
    }
  }]);

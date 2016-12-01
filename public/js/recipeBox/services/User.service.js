angular.module('recipeBox')
  .service('User', ['Auth', '$http', '$rootScope', function (Auth, $http, $rootScope) {
    this.getUser = function () {
      Auth.currentUser().then(setUser);
    }

    this.login = function(userInfo, onSuccess, onFailure) {
      Auth.login(userInfo).then(onSuccess,onFailure);
    }

    setUser = function(user) {
      $rootScope.user = user;
    }

    this.logout = Auth.logout;
    this.signedIn = Auth.isAuthenticated;
  }]);

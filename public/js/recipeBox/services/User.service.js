angular.module('recipeBox')
  .service('User', ['Auth', '$http', '$rootScope', function (Auth, $http, $rootScope) {
    this.getUser = function () {
      Auth.currentUser().then(setUser);
    }

    this.login = function(userInfo, onFailure) {
      Auth.login(userInfo).then(setUser,onFailure);
    }

    setUser = function(user) {
      $rootScope.user = user;
    }

    this.logout = Auth.logout;
    this.signedIn = Auth.isAuthenticated;
  }]);

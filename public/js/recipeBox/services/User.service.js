angular.module('recipeBox')
  .service('User', ['Auth', '$http', '$rootScope', function (Auth, $http, $rootScope) {
    this.getUser = function () {
      Auth.currentUser().then(setUser);
    }

    this.login = function(userInfo, onFailure) {
      Auth.login(userInfo).then(setUser,onFailure);
    }

    this.register = function (user, onFailure) {
      Auth.register(user).then(setUser,onFailure);
    }

    this.changePassword = function (user, onSuccess, onFailure) {
      $http.patch('/users/password/', {
        email: $rootScope.user.email,
        username: $rootScope.user.username,
        current_password: user.currentPassword,
        password: user.password,
        password_confirmation: user.passwordConfirmation
      }).then(onSuccess, onFailure);
    }

    this.delete = function () {
      var data = $.param({
        email: $rootScope.user.email,
        username: $rootScope.user.username,
        password: $rootScope.user.password
      });

      return $http.delete('/users/', data)
        .then(function (data) {
          $rootScope.user = {};
        });
    }

    setUser = function(user) {
      $rootScope.user = user;
    }

    this.logout = Auth.logout;
    this.signedIn = Auth.isAuthenticated;
  }]);

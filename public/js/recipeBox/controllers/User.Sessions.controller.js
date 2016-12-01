function UserSessionsController($rootScope, User) {
  var ctrl = this;

  ctrl.login = function () {
    User.login(ctrl.user, ctrl.onSuccess, ctrl.onFailure);
  }

  ctrl.onSuccess = function (user) {
    $rootScope.user = user;
  }

  ctrl.onFailure = function (error) {
    ctrl.errors = error.data;
  }
}

angular
  .module('recipeBox')
  .controller('UserSessionsController', UserSessionsController)

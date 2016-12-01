function UserSessionsController($rootScope, User) {
  var ctrl = this;

  ctrl.login = function () {
    User.login(ctrl.user, onFailure);
  }

  function onFailure(error) {
    ctrl.errors = error.data;
  }
}

angular
  .module('recipeBox')
  .controller('UserSessionsController', UserSessionsController)

function UserSessionsController($rootScope, UserService) {
  var ctrl = this;

  ctrl.login = function () {
    UserService.login(ctrl.user, onFailure);
  }

  function onFailure(error) {
    ctrl.errors = error.data;
  }
}

angular
  .module('recipeBox')
  .controller('UserSessionsController', UserSessionsController)

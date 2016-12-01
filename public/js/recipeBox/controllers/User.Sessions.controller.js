function UserSessionsController($rootScope, User) {
  var ctrl = this;

  ctrl.login = User.login(ctrl.user);
}

angular
  .module('recipeBox')
  .controller('UserSessionsController', UserSessionsController)

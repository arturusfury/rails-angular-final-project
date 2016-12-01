function UserRegistrationsController($rootScope, $location, User) {
  var ctrl = this;

  ctrl.isDisabled = false;

  ctrl.register = function() {
    ctrl.isDisabled = true;
    User.register(ctrl.user, onFailure);

    function onFailure (error) {
      ctrl.isDisabled = false;
      ctrl.errors = error.data;
    }
  };
}

angular
  .module('recipeBox')
  .controller('UserRegistrationsController', UserRegistrationsController)

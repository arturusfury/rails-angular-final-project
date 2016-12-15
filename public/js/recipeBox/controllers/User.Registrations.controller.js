function UserRegistrationsController(UserService) {
  var ctrl = this;

  ctrl.isDisabled = false;

  ctrl.register = function() {
    ctrl.isDisabled = true;
    UserService.register(ctrl.user, onFailure);

    function onFailure (error) {
      ctrl.isDisabled = false;
      ctrl.errors = error.data;
    }
  };
}

angular
  .module('recipeBox')
  .controller('UserRegistrationsController', UserRegistrationsController)

function UserSettingsController($location, UserService) {
  var ctrl = this;

  ctrl.confirmDelete = false;
  ctrl.isDisabled = false;
  ctrl.passwordChangeSuccess = false;

  ctrl.changePassword = function () {
    UserService.changePassword(ctrl.user, function () {
      ctrl.passwordForm.password = "";
      ctrl.passwordForm.passwordConfirmation = "";
      ctrl.passwordChangeSuccess = true;
    }, function (resp) {
      console.log(resp);
    });
  }

  ctrl.deleteConfirmation = function () {
    ctrl.confirmDelete = true;
  }

  ctrl.cancelDelete = function () {
    ctrl.confirmDelete = false;
  }

  ctrl.deleteAccount = function () {
    ctrl.confirmDelete = false;
    ctrl.isDisabled = true;

    UserService.delete();
    console.log('User has been deleted');
    $location.path('/');
  }
}

angular
  .module('recipeBox')
  .controller('UserSettingsController', UserSettingsController)

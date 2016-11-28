function UserSettingsController($scope, $location, $http, $auth) {
  var ctrl = this;

  ctrl.confirmDelete = false;
  ctrl.isDisabled = false;
  // ctrl.passwordChangeSuccess = false;
  //
  // ctrl.changePassword = function () {
  //   $auth.updatePassword({
  //     password: ctrl.password,
  //     password_confirmation: ctrl.passwordConfirmation
  //   }).then(function (resp) {
  //     ctrl.password = "";
  //     ctrl.passwordConfirmation = "";
  //     ctrl.passwordChangeSuccess = true;
  //   }).catch(function (resp) {
  //     console.log(resp);
  //   });
  // }

  ctrl.deleteConfirmation = function () {
    ctrl.confirmDelete = true;
  }

  ctrl.cancelDelete = function () {
    ctrl.confirmDelete = false;
  }

  ctrl.deleteAccount = function () {
    ctrl.confirmDelete = false;
    ctrl.isDisabled = true;

    $location.path('/');
  }
}

angular
  .module('recipeBox')
  .controller('UserSettingsController', UserSettingsController)

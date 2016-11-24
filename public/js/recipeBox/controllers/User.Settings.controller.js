function UserSettingsController($scope, $location, $http, $rootScope) {
  var ctrl = this;

  ctrl.confirmDelete = false;
  ctrl.isDisabled = false;
  ctrl.passwordChangeSuccess = false;
  ctrl.passwordChangeFails = false;

  ctrl.changePassword = function () {
    $auth.updatePassword({
      password: ctrl.password,
      password_confirmation: ctrl.passwordConfirmation
    }).then(function (resp) {
      // success
    }).catch(function (resp) {
      $scope.errors = resp.data.errors.full_messages;
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

    $location.path('/');
  }
}

angular
  .module('recipeBox')
  .controller('UserSettingsController', UserSettingsController)

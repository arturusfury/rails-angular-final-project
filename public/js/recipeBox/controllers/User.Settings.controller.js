function UserSettingsController($scope, $location, $http) {
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

    var data = $.param({
      email: $rootScope.user.email,
      username: $rootScope.user.username,
      password: $rootScope.user.password
    });

    $http.delete('/users/', data)
    $location.path('/');
  }
}

angular
  .module('recipeBox')
  .controller('UserSettingsController', UserSettingsController)

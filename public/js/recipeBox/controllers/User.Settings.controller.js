function UserSettingsController($location, $http, $rootScope) {
  var ctrl = this;

  ctrl.confirmDelete = false;
  ctrl.isDisabled = false;
  ctrl.passwordChangeSuccess = false;

  ctrl.changePassword = function () {
    $http.patch('/users/password/',{
      email: $rootScope.user.email,
      username: $rootScope.user.username,
      current_password: ctrl.user.currentPassword,
      password: ctrl.user.password,
      password_confirmation: ctrl.user.passwordConfirmation
    }).then(function (resp) {
      ctrl.passwordForm.password = "";
      ctrl.passwordForm.passwordConfirmation = "";
      ctrl.passwordChangeSuccess = true;
    }).catch(function (resp) {
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

    var data = $.param({
      email: $rootScope.user.email,
      username: $rootScope.user.username,
      password: $rootScope.user.password
    });

    $http.delete('/users/', data)
         .then( function(data) {
           console.log(data)
         }, function (error) {
           console.log(data)
         });
    $rootScope.user = {};
    $location.path('/');
  }
}

angular
  .module('recipeBox')
  .controller('UserSettingsController', UserSettingsController)

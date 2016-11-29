function UserRegistrationsController($scope, $location, $auth) {
  $scope.isDisabled = false;

  $scope.handleRegBtnClick = function() {
    $scope.isDisabled = true;
    $auth.submitRegistration($scope.user.registrationForm)
      .then(function() {
        $auth.submitLogin({
          email: $scope.user.registrationForm.email,
          password: $scope.user.registrationForm.password
        });
      })
      .catch(function(resp) {
        $scope.errors = resp.data.errors.full_messages;
      });
  };
}

angular
  .module('recipeBox')
  .controller('UserRegistrationsController', UserRegistrationsController)

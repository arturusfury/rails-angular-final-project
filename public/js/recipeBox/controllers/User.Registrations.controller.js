function UserRegistrationsController($location, Auth) {
  var ctrl = this;

  ctrl.register = function() {
    Auth.register(ctrl.user)
      .then(function(user){
        $rootScope.user = user;
        console.log(user)
    });
  };

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

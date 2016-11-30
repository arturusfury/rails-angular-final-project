function UserRegistrationsController($rootScope, $location, Auth) {
  var ctrl = this;

  ctrl.isDisabled = false;

  ctrl.register = function() {
    ctrl.isDisabled = true;

    Auth.register(ctrl.user)
      .then(function(user){
        $rootScope.user = user;
        $location.path('/');
      }, function (error) {
        console.log(error);
    });
  };
}

angular
  .module('recipeBox')
  .controller('UserRegistrationsController', UserRegistrationsController)

function UserSessionsController($rootScope, Auth) {
  var ctrl = this;

  ctrl.login = function() {
    Auth.login(ctrl.user)
      .then(function(user){
        $rootScope.user = user;
      }, function (error) {
        ctrl.errors = error.data;
    });
  };
}

angular
  .module('recipeBox')
  .controller('UserSessionsController', UserSessionsController)

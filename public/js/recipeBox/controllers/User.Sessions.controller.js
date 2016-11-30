function UserSessionsController($rootScope, Auth) {
  var ctrl = this;

  ctrl.login = function() {
    Auth.login(ctrl.user)
      .then(function(user){
        $rootScope.user = user;
      }, function (error) {
        console.log(error);
    });
  };
}

angular
  .module('recipeBox')
  .controller('UserSessionsController', UserSessionsController)

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
  // var ctrl = this;
  //
  // ctrl.submitLogin = function (credentials) {
  //   var config = {
  //     headers: {
  //       'X-HTTP-Method-Override': 'POST'
  //     }
  //   }
  //
  //   Auth.login(credentials, config).then(function(user) {
  //     console.log(user);
  //   }, function(error) {
  //     console.log(error);
  //   });
  // }
  //
  // $scope.$on('devise:login', function(event, currentUser) {
  //   // after a login, a hard refresh, a new tab
  // });
  //
  // $scope.$on('devise:new-session', function(event, currentUser) {
  //   // user logged in by Auth.login({...})
  // });
}

angular
  .module('recipeBox')
  .controller('UserSessionsController', UserSessionsController)

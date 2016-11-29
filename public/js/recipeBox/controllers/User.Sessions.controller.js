function UserSessionsController($scope, Auth) {
  var credentials = {
    email: 'tthomas@gmail.com',
    password: 'password'
  };

  var config = {
    headers: {
      'X-HTTP-Method-Override': 'POST'
    }
  }

  Auth.login(credentials, config).then(function(user) {
    console.log(user);
  }, function(error) {
    console.log(error);
  });

  $scope.$on('devise:login', function(event, currentUser) {
    // after a login, a hard refresh, a new tab
  });

  $scope.$on('devise:new-session', function(event, currentUser) {
    // user logged in by Auth.login({...})
  });
}

angular
  .module('recipeBox')
  .controller('UserSessionsController', UserSessionsController)

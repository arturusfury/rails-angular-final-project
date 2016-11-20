function UserSessionsController($scope) {
  $rootScope.$on('auth:login-success', function() {
    $location.path('/');
  });

  $scope.$on('auth:login-error', function(ev, reason) {
    $scope.error = reason.errors[0];
  });
}

angular
  .module('recipeBox')
  .controller('UserSessionsController', UserSessionsController)

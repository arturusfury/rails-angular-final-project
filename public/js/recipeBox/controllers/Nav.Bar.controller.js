function NavBarController(SearchService, $rootScope, $state, $location, Auth) {
  var ctrl = this;

  ctrl.goSearch = function () {
      SearchService.searchParams = ctrl.searchString;
      console.log(SearchService.searchParams);
      $state.reload();
      $location.path('/search');
  }

  ctrl.logout = Auth.logout;

  $rootScope.$on('devise:logout', function(event, oldCurrentUser) {
    $rootScope.user = {}
  });
}

angular
  .module('recipeBox')
  .controller('NavBarController', NavBarController)

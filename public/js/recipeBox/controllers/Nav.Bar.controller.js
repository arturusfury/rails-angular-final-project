function NavBarController(SearchService, $rootScope, $state, $location, Auth) {
  var ctrl = this;

  ctrl.goSearch = function () {
      SearchService.searchParams = ctrl.searchString;
      console.log(SearchService.searchParams);
      $state.reload();
      $location.path('/search');
  }

  ctrl.logout = function () {
    User.logout;
  };
  ctrl.signedIn = Auth.isAuthenticated;

  Auth.currentUser()
    .then(function(user) {
      $rootScope.user = user;
    });
}

angular
  .module('recipeBox')
  .controller('NavBarController', NavBarController)

function NavBarController(SearchService, $rootScope, $state, $location, User) {
  var ctrl = this;

  ctrl.goSearch = function () {
      SearchService.searchParams = ctrl.searchString;
      $state.reload();
      $location.path('/search');
  }

  ctrl.logout = User.logout;
  ctrl.signedIn = User.isAuthenticated;

  User.getUser();
}

angular
  .module('recipeBox')
  .controller('NavBarController', NavBarController)

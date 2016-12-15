function NavBarController(SearchService, $state, $location, UserService) {
  var ctrl = this;

  ctrl.goSearch = function () {
      SearchService.searchParams = ctrl.searchString;
      $state.reload();
      $location.path('/search');
  }

  ctrl.logout = UserService.logout;
  ctrl.signedIn = UserService.isAuthenticated;

  UserService.getUser();
}

angular
  .module('recipeBox')
  .controller('NavBarController', NavBarController)

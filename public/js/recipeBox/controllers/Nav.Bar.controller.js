function NavBarController(SearchService, $state, $location) {
  var ctrl = this;

  ctrl.goSearch = function () {
      SearchService.searchParams = ctrl.searchString;
      console.log(SearchService.searchParams);
      $state.reload();
      $location.path('/search');
  }
}

angular
  .module('recipeBox')
  .controller('NavBarController', NavBarController)

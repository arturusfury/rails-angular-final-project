function SearchResultsController(SearchService, recipes) {
  var ctrl = this;
  ctrl.searchParams = SearchService.searchParams;
  ctrl.recipes = recipes.data;
}

angular
  .module('recipeBox')
  .controller('SearchResultsController', SearchResultsController)

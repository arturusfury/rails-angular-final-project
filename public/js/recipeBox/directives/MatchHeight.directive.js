angular.module('recipeBox')
  .directive('matchHeight', ['$timeout', function ($timeout) {
    var linkFunction = function(scope, element) {
      setTimeout(function() {
        angular.element(element).find('.card-content').matchHeight({
          byRow: false,
          property: 'height'
        });
        angular.element(element).find('.card-action').matchHeight({
          byRow: false,
          property: 'height'
        });
      });
    };

    return {
      restrict: 'A',
      link: linkFunction
    };
}]);

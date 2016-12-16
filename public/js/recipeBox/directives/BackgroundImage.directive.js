angular.module('recipeBox')
  .directive('backgroundImage', function () {
    return function (scope, element, attrs) {
      scope.$watch(attrs.backgroundImage, function (value) {
        element.css({
          'background-image': 'url(' + value + ')'
        })
      })
    }
  });

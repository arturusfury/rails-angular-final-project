angular.module('recipeBox')
  .directive('fractionView', ['$filter', '$compile', function($filter, $compile) {
    return {
      restrict: 'A',
      require: '?ngModel',
      scope: {
        // Bind scope.decimalValue to ngModel attribute
        decimalValue: "=ngModel"
      },
      link: function(scope, element, attrs, modelCtrl) {
        var wrappedElement = angular.element(
          '<input type="' + attrs.type + '" ng-focus=\"enterInputMode()\" ng-blur=\"exitInputMode()\" ng-model=\"displayValue\">'
        );
        element.replaceWith(wrappedElement);
        $compile(wrappedElement)(scope);

        // Display the fractional value by default
        scope.displayValue = $filter('fraction')(scope.decimalValue);

        // on focus: display the decimal value
        scope.enterInputMode = function() {
          scope.displayValue = scope.decimalValue;
        }

        // on blur: save the new decimal value and display the
        // fractional representation
        scope.exitInputMode = function() {
          scope.decimalValue = scope.displayValue;
          scope.displayValue = $filter('fraction')(scope.decimalValue);
          if(!modelCtrl) {
            modelCtrl.$setViewValue(scope.decimalValue);
          }
        }
      }
    };
  }])

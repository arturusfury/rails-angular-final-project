angular.module('recipeBox')
  .directive('fractionView', ['$filter', function($filter) {
    return {
      restrict: 'E',
      require: '?ngModel',
      template: "<input ng-focus=\"enterInputMode()\" ng-blur=\"exitInputMode()\" ng-model=\"displayValue\" />",
      scope: {
        // Bind scope.decimalValue to ngModel attribute
        decimalValue: "=ngModel"
      },
      link: function(scope, element, attrs, modelCtrl) {
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

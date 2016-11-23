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
        // scope.enterInputMode = function() {
        //   scope.displayValue = scope.decimalValue;
        // }

        // We want to be able to convert any fraction's entered into
        scope.exitInputMode = function() {
          if (scope.displayValue && scope.displayValue.toString().includes('/')) {
            if (scope.displayValue.toString().includes(' ')) {
              var wholeNumbers = scope.displayValue.slice(0, scope.displayValue.indexOf(' '));
              var numerator = scope.displayValue.substr(scope.displayValue.indexOf(' ')).split('/')[0];
              var denominator = scope.displayValue.split('/')[1];

              scope.decimalValue = (parseFloat(wholeNumbers) + (parseInt(numerator) / parseInt(denominator))).toFixed(2);
            } else {
              var numerator = scope.displayValue.split('/')[0];
              var denominator = scope.displayValue.split('/')[1];

              scope.decimalValue = (numerator / denominator).toFixed(2);
            }

          } else {
            scope.decimalValue = scope.displayValue;
            scope.displayValue = $filter('fraction')(scope.decimalValue);
          }

          if(!modelCtrl) {
            modelCtrl.$setViewValue(scope.decimalValue);
          }
        }
      }
    };
  }])

angular.module('recipeBox')
  .filter('fraction', function fractionFilter() {
    return function(input) {
      var f = new Fraction(parseFloat(input));
      if (input == null) {
        return null;
      } else if (f.denominator == 1) {
        return f.numerator;
      } else {
        var count = 0;
        while (f.numerator > f.denominator) {
          count++;
          f.numerator -= f.denominator;
        }
        return f.numerator + "/" + f.denominator;
      }
    }
  });

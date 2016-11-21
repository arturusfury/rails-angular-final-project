angular.module('recipeBox')
  .filter('fraction', function fractionFilter() {
    return function(input) {
      var f = new Fraction(parseFloat(input));
      if (input == null) {
        return null;
      } else if (f.denominator == 1) {
        return f.numerator;
      } else if (f.numerator == 33 && f.denominator == 100) {
        return "1/3";
      } else if (f.numerator == 66 && f.denominator == 100) {
        return "2/3";
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

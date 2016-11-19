(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

$(document).ready(function() {
  $('select').material_select();

  $('#ingredient.autocomplete').autocomplete({
    data: {
      "New York Strip": null,
      "Garlic": null,
      "Soy Sauce": null,
      "Worcestershire": null,
      "Basil": null,
    }
  });

  $('#measure.autocomplete').autocomplete({
    data: {
      "Clove(s)": null,
      "Tablespoon": null,
      "Teaspoon": null,
      "Cup": null,
      "Pint": null,
      "Gallon": null,
      "Sprig": null,
      "Pinch": null,
      "Oz": null,
      "Pound(s)": null
    }
  });
});

function RecipeAddController() {
  $('#ingredient.autocomplete').autocomplete({
    // $.get('/api/v1/ingredients', function(data, status) {
    //   console.log(data);
    // })
  });

  $('#measure.autocomplete').autocomplete({
    data: {
      "Clove(s)": null,
      "Tablespoon": null,
      "Teaspoon": null,
      "Cup(s)": null,
      "Pint": null,
      "Gallon": null,
      "Sprig": null,
      "Pinch": null,
      "Oz": null,
      "Pound(s)": null
    }
  });
}

angular
  .module('recipeBox')
  .controller('RecipeAddController', RecipeAddController)

function RecipeAddController($scope) {
  var ctrl = this;

  ctrl.data = {
    title: '',
    prep_time: null,
    cook_time: null,
    total_servings: null,
    description: '',
    image_url: '',
    ingredients: [
      {
        amount: null,
        measure: '',
        name: ''
      }
    ],
    directions: [
      {
        text: ''
      }
    ]
  }

  ctrl.addIngredient = function () {
    ctrl.data.ingredients.push({
      amount: null,
      measure: '',
      name: ''
    })
  }

  ctrl.addDirection = function () {
    ctrl.data.directions.push({
      text: ''
    })
  }

}

angular
  .module('recipeBox')
  .controller('RecipeAddController', RecipeAddController)

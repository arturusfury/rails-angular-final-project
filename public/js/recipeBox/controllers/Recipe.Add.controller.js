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

  ctrl.deleteIngredient = function (index) {
    console.log("Delete: " + index)
    ctrl.data.ingredients.splice(index, 1);
  }

  ctrl.addDirection = function () {
    ctrl.data.directions.push({
      text: ''
    })
  }

  ctrl.deleteDirection = function (index) {
    console.log("Delete: " + index)
    ctrl.data.directions.splice(index, 1);
  }

}

angular
  .module('recipeBox')
  .controller('RecipeAddController', RecipeAddController)

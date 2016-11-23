function RecipeAddController($scope) {
  var ctrl = this;

  // Create a blank set of information for our recipe
  ctrl.recipe = {
    title: '',
    prep_time: null,
    cook_time: null,
    total_servings: null,
    dish_type: 'Main Course',
    description: '',
    image_url: '',
    user_id: 1,
    ingredients: [
      {
        amount: null,
        measure: null,
        name: null
      }
    ],
    directions: [
      {
        text: ''
      }
    ]
  }

  ctrl.dishTypes = [
    'Main Course',
    'Breads, Muffins, Scones & Pancakes',
    'Breakfast',
    'Dinner',
    'Dips, Salad Dressings, Salsas, and Sauces',
    'Drinks',
    'Lunch',
    'One Pot Meal',
    'Salads',
    'Side Dishes',
    'Snacks',
    'Soups, Stews & Chili',
    'Desert',
    'Appitizers & Snacks'
  ]

  ctrl.addIngredient = function () {
    ctrl.recipe.ingredients.push({
      amount: null,
      measure: '',
      name: ''
    })
  }

  ctrl.deleteIngredient = function (index) {
    console.log("Delete: " + index)
    ctrl.recipe.ingredients.splice(index, 1);
  }

  ctrl.addDirection = function () {
    ctrl.recipe.directions.push({
      text: ''
    })
  }

  ctrl.deleteDirection = function (index) {
    console.log("Delete: " + index)
    ctrl.recipe.directions.splice(index, 1);
  }

  ctrl.submitForm = function () {
    console.log("Anything");
  }
}

angular
  .module('recipeBox')
  .controller('RecipeAddController', RecipeAddController)

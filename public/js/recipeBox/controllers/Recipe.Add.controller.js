function RecipeAddController($scope, $http, $location) {
  var ctrl = this;

  // Create a blank set of information for our recipe
  ctrl.recipe = {
    title: 'Fake Recipe',
    prep_time: 2,
    cook_time: 5,
    total_servings: 2,
    total_rating: 0,
    dish_type: 'Main Course',
    description: 'Fake Description for wings!',
    image_url: 'http://images-gmi-pmc.edge-generalmills.com/d5ea92bc-de94-44d4-be68-76db8cc6ce65.jpg',
    user_id: 2,
    ingredients_attributes: [
      {
        amount: 0.5,
        measure: 'Cup',
        name: 'Ranch Dressing'
      }
    ],
    directions_attributes: [
      {
        text: 'Dip Wings in Dressing, Duh!'
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
    ctrl.recipe.ingredients_attributes.push({
      amount: null,
      measure: '',
      name: ''
    })
  }

  ctrl.deleteIngredient = function (index) {
    console.log("Delete: " + index)
    ctrl.recipe.ingredients_attributes.splice(index, 1);
  }

  ctrl.addDirection = function () {
    ctrl.recipe.directions_attributes.push({
      text: ''
    })
  }

  ctrl.deleteDirection = function (index) {
    console.log("Delete: " + index)
    ctrl.recipe.directions_attributes.splice(index, 1);
  }

  ctrl.submitForm = function () {
    $http.post('http://localhost:3000/api/v1/recipes/', {
      recipe: ctrl.recipe
    }).success(function(data, status, headers, config) {
      console.log(data);
      $location.path('/#/recipes/' + data.recipe.id);
    }).error(function(data, status, headers, config) {
      console.log('Failure: ' + JSON.stringify({data: data}));
    });
  }
}

angular
  .module('recipeBox')
  .controller('RecipeAddController', RecipeAddController)

function RecipeAddController($scope, $http, $location, $rootScope) {
  var ctrl = this;

  // Create a blank set of information for our recipe
  ctrl.recipe = {
    title: '',
    prep_time: null,
    cook_time: null,
    total_servings: null,
    total_rating: 0,
    dish_type: 'Main Course',
    description: '',
    image_url: 'http://images-gmi-pmc.edge-generalmills.com/d5ea92bc-de94-44d4-be68-76db8cc6ce65.jpg',
    user_id: $rootScope.user.id,
    ingredients_attributes: [
      {
        amount: null,
        measure: '',
        name: ''
      }
    ],
    directions_attributes: [
      {
        text: ''
      }
    ]
  }

  ctrl.dishTypes = [
    'Appitizers & Snacks',
    'Breads, Muffins, Scones & Pancakes',
    'Breakfast',
    'Desert',
    'Dinner',
    'Dips, Salad Dressings, Salsas, and Sauces',
    'Drinks',
    'Lunch',
    'Main Course',
    'One Pot Meal',
    'Salads',
    'Side Dishes',
    'Snacks',
    'Soups, Stews & Chili'
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
    $http.post('/api/v1/recipes/', {
      recipe: ctrl.recipe
    }).success(function(data, status, headers, config) {
      $location.path('/recipes/' + data.recipe.id);
    }).error(function(data, status, headers, config) {
      console.log('Failure: ' + JSON.stringify({data: data}));
    });
  }
}

angular
  .module('recipeBox')
  .controller('RecipeAddController', RecipeAddController)

function RecipeEditController(recipe, $scope, $http, $location, $rootScope) {
  var ctrl = this;

  ctrl.recipe = recipe.data;

  ctrl.recipe.ingredients_attributes = recipe.data.ingredients;
  ctrl.recipe.directions_attributes = recipe.data.directions;

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
    $http.patch('/api/v1/recipes/' + ctrl.recipe.id, {
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
  .controller('RecipeEditController', RecipeEditController)

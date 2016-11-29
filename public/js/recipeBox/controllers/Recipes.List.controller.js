function RecipesListController(recipes) {
  var ctrl = this;

  ctrl.recipes = recipes.data

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
}

angular
  .module('recipeBox')
  .controller('RecipesListController', RecipesListController)

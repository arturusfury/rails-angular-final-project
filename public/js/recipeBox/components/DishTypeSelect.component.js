var dishTypeSelect = {
  templateUrl: 'views/components/DishTypeSelect.template.html',
  controller: function () {
    var ctrl = this;
    
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
}

angular.module('recipeBox')
  .component('dishTypeSelect', dishTypeSelect)

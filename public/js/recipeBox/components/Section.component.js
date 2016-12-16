var section = {
  bindings: {
    heading: '@',
    recipes: '<',
    cardSize: '@',
    recipeFilters: '<'
  },
  templateUrl: 'views/components/Section.template.html',
  controller: function () {
    var ctrl = this;

    ctrl.changeDishType = function (dishType) {
      ctrl.dishType = dishType;
    }

    ctrl.changeRating = function (rating) {
      ctrl.rating = rating;
    }

    ctrl.changeServings = function (servings) {
      ctrl.servings = servings;
    }
  }
}

angular.module('recipeBox')
  .component('section', section)

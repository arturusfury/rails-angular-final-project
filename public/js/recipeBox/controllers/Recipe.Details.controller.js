function RecipeDetailsController(recipe) {
  var ctrl = this;
  var writingReview = false;

  ctrl.data = recipe.data;

  ctrl.startWritingReview = function () {
    ctrl.writingReview = true;
    $('.rating').addRating({fieldName: 'rating', fieldId: 'rating'});
  }

  ctrl.clearReviewForm = function() {
    ctrl.writingReview = false;
  }

  ctrl.postReview = function() {
    $http.post()
  }
}

angular
  .module('recipeBox')
  .controller('RecipeDetailsController', RecipeDetailsController)

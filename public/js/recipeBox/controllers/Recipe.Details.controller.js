function RecipeDetailsController(recipe, $scope, $rootScope, $http, $stateParams) {
  var ctrl = this;
  var writingReview = false;

  ctrl.data = recipe.data;

  ctrl.startWritingReview = function () {
    ctrl.writingReview = true;
  }

  ctrl.clearReviewForm = function() {
    ctrl.writingReview = false;
    ctrl.reviewForm.$setPristine();
    ctrl.reviewForm.$setUntouched();
  }

  ctrl.postReview = function() {
    var data = $.param({
      user_id: $rootScope.user.id,
    });

    console.log(ctrl.reviewForm);



    // return $http.post('/api/v1/reviews', data, config)
  }
}

angular
  .module('recipeBox')
  .controller('RecipeDetailsController', RecipeDetailsController)

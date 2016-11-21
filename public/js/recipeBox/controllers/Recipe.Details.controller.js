function RecipeDetailsController(recipe, $scope, $rootScope, $http, $stateParams) {
  var ctrl = this;
  var writingReview = false;

  ctrl.data = recipe.data;

  ctrl.startWritingReview = function () {
    ctrl.writingReview = true;
  }

  ctrl.clearReviewForm = function() {
    ctrl.writingReview = false;
  }

  ctrl.postReview = function() {
    var data = {
      user_id: $rootScope.user.id,
      recipe_id: ctrl.data.id,
      rating: $scope.rating,
      content: ctrl.reviewForm.reviewText
    };

    return $http.post('/api/v1/reviews', data)
      .success(function (data, status, headers, config) {
        console.log(data);
      })
      .error(function (data, status, header, config) {
        console.log( 'error' );
      })
  }
}

angular
  .module('recipeBox')
  .controller('RecipeDetailsController', RecipeDetailsController)

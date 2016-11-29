angular.module('recipeBox')
  .filter('rating', function(){
    return function(arr, rating){
        if(!rating){
            return arr;
        }
        var result = [];
        angular.forEach(arr, function(item){
          if (rating == "") {
            result.push(item);
          } else {
            if (rating == "1" && item.total_rating <= 2) {
              result.push(item);
            } else if (rating == "2" && item.total_rating >= 2 && item.total_rating < 3) {
              result.push(item);
            } else if (rating == "3" && item.total_rating >= 3 && item.total_rating < 4) {
              result.push(item);
            } else if (rating == "4" && item.total_rating >= 4 && item.total_rating < 5) {
              result.push(item);
            }
          };
        });
        return result;
    };
});

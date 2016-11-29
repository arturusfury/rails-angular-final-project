angular.module('recipeBox')
  .filter('rating', function(){
    return function(arr, rating){
        if(!rating){
            return arr;
        }
        var result = [];
        angular.forEach(arr, function(item){
          if(item.total_rating == rating){
            result.push(item);
          }
        });
        return result;
    };
});

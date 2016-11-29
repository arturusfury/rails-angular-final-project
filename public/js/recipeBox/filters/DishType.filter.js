angular.module('recipeBox')
  .filter('dishType', function(){
    return function(arr, dishType){
        if(!dishType){
            return arr;
        }
        var result = [];
        angular.forEach(arr, function(item){
          if(item.dish_type == dishType){
            result.push(item);
          }
        });
        return result;
    };
});

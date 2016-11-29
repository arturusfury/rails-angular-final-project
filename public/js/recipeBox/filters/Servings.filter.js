angular.module('recipeBox')
  .filter('servings', function(){
    return function(arr, servings){
        if(!servings){
            return arr;
        }
        var result = [];
        angular.forEach(arr, function(item){
          if(item.total_servings == servings){
            result.push(item);
          }
        });
        return result;
    };
});

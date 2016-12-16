angular.module('recipeBox')
  .filter('servings', function(){
    return function(arr, servings){
        if(!servings){
            return arr;
        }
        var result = [];
        angular.forEach(arr, function(item){
          if (servings == "") {
            result.push(item);
          } else {
            if (servings == "2" && item.total_servings <= 2) {
              result.push(item);
            } else if (servings == "3-8" && item.total_servings > 2 && item.total_servings < 9) {
              result.push(item);
            } else if (servings == "9+" && item.total_servings > 8) {
              result.push(item);
            }
          }
        });
        return result;
    };
});

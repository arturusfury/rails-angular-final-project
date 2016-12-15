var imageBanner = {
  bindings: {
    imageUrl: '@src'
  },
  templateUrl: 'views/components/ImageBanner.template.html'
}

angular.module('recipeBox')
  .component('imageBanner', imageBanner)

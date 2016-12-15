var ImageBannerComponent = {
  bindings: {
    imageUrl: '<'
  },
  templateUrl: 'views/components/ImageBanner.template.html',
}

angular.module('recipeBox')
  .component('ImageBannerComponent', ImageBannerComponent)

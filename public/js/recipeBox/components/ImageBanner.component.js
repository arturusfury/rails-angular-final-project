const imageBanner = {
  bindings: {
    imageUrl: '@src'
  },
  templateUrl: 'views/components/ImageBanner.template.html',
  controller: function () {
    var ctrl = this;

    if (ctrl.imageUrl == null) ctrl.imageUrl = 'img/backgrounds/03.jpg'
  }
}

angular.module('recipeBox')
  .component('imageBanner', imageBanner)

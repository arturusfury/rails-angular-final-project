(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('.recipe-card').matchHeight({
      byRow: true,
      property: 'height'
    });
    

  }); // end of document ready
})(jQuery); // end of jQuery name space

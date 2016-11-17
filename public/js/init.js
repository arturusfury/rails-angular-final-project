(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    // $('.recipe-card').matchHeight({
    //   byRow: false,
    //   property: 'height'
    // });
    $('.card-content').matchHeight({
      byRow: false,
      property: 'height'
    });
 
    $('.card-action').matchHeight({
      byRow: false,
      property: 'height'
    });

  }); // end of document ready
})(jQuery); // end of jQuery name space

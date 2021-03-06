$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items:                 1,
    center:             true,
    nav:                true,
    dots:               true,
    loop:               true,
    margin:                0,
    smartSpeed:         1750,
    autoplay:           true,
    autoplayTimeout:    3000,
    responsiveClass:    true,
    autoWidth:         false,
    responsive: {
      0: {
        items:                 1,
        center:             true,
        nav:               false,
        dots:               true,
        loop:               true,
        margin:                0,
        smartSpeed:         1750,
        autoplay:           true,
        autoplayTimeout:    3000,
        autoWidth:          false,
      },
      1100: {
        items:                 1,
        nav:                true,
        dots:               true,
        loop:               true,
        margin:                0,
        smartSpeed:         1000,
        autoplay:           true,
        autoplayTimeout:    2000,
        autoWidth:          false,
      }
    }
  });
  $(".button-collapse").sideNav();

  if ($(window).width() <= 1024) {
    $('.if').removeClass('col s9 push-s1');
    $('.if').toggleClass('col s12');
  }
});

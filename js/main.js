$(document).ready(function() {

  // http://www.bkosborne.com/jquery-feature-carousel/options
  var carousel = $("#carousel").featureCarousel({
    trackerIndividual: false,
    trackerSummation: false,
    smallFeatureWidth: 0.9,
    smallFeatureHeight: 0.9,
    topPadding: 0,
    sidePadding: 0,
    smallFeatureOffset: 25
  });
  $("#but_prev").click(function (e) {
    e.preventDefault();
    carousel.prev();
  });
  $("#but_next").click(function (e) {
    e.preventDefault();
    carousel.next();
  });

  // https://select2.github.io/
  setTimeout(function(){
    $(".js-basic-single").select2({
      placeholder: "Country*",
      minimumResultsForSearch: -1
    });
  }, 100);

  // http://cssglobe.com/easy-slider-17-numeric-navigation-jquery-slider/
  $("#slider").easySlider({
    auto: true,
    continuous: true,
    nextId: "slider1next",
    prevId: "slider1prev"
  });

  //Scroll to top
  $('#gototop').click(function (e) {
    e.preventDefault();
    $('body,html').animate({
        scrollTop: 0
    }, 400);
    return false;
  });

  //Scroll to support
  $('.gotosupport').click(function (e) {
    e.preventDefault();
    var support = ($('#support').offset().top) - 100;
    $('body,html').animate({
        scrollTop: support
    }, 400);
    return false;
  });

  $('#slides').superslides({
    inherit_width_from: '.first-block',
    inherit_height_from: '.first-block',
    play: 10000
  });


});
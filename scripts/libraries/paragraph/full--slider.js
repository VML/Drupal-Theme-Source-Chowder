(function ($, Drupal) {
  'use strict';

  Drupal.behaviors.componentSlider = {
    attach: function (context, settings) {

      // Only initialize slick-slider if more than 1 slide is present.
      if ($('.component-slider__content').find('figure').length > 1) {
        $('.component-slider__content').once('component-slider').slick({
          adaptiveHeight: false,
          arrows: true,
          centerPadding: '0',
          centerMode: true,
          dots: false,
          focusOnSelect: true,
          infinite: true,
          slidesToShow: 1,
          variableWidth: true,
          responsive: [
            {
              breakpoint: 1023,
              settings: {
                variableWidth: true
              }
            },
            {
              breakpoint: 0,
              settings: {
                variableWidth: false
              }
            }
          ]
        });
      }
    }
  };

})(jQuery, Drupal);

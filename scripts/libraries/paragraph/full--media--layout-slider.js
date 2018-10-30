(function ($, Drupal) {
  'use strict';

  Drupal.behaviors.componentMediaLayoutSlider = {
    attach: function (context, settings) {
      $('.component-media--layout-slider .component-media__content').once('component-media').slick({
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
  };

})(jQuery, Drupal);

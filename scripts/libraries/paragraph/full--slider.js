(function ($, Drupal) {
  'use strict';

  Drupal.behaviors.componentSlider = {
    attach: function (context, settings) {
      $('.component-slider:not(.component-slider--js-initialized)').each(function (index) {
        var $component = $(this);

        // Only initialize slick-slider if more than 1 slide is present.
        if ($component.find('figure').length > 1) {
          $component.find('.component-slider__content').slick({
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

        // Track that this component has been initialized.
        $component.addClass('component-slider--js-initialized');
      });
    }
  };

})(jQuery, Drupal);

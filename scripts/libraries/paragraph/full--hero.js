(function ($, Drupal) {
  'use strict';

  Drupal.behaviors.componentHero = {
    attach: function (context, settings) {
      $('.component-hero:not(.component-hero--js-initialized)').each(function (index) {
        var $component = $(this);

        // If more than one slide, initialize slick slider.
        if ($component.find('article').length > 1) {
          $component.find('.component-hero__content').once('component-slider').slick({
            adaptiveHeight: true,
            autoplay: false,
            autoplaySpeed: 5000,
            arrows: true,
            dots: false,
            focusOnSelect: true,
            infinite: false,
            slidesToShow: 1
          });
        }

        // Track that this component has been initialized.
        $component.addClass('.component-hero--js-initialized');
      });
    }
  };

})(jQuery, Drupal);

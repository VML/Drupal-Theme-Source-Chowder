(function ($, Drupal) {
  'use strict';

  Drupal.behaviors.componentMediaLayoutMasonry = {
    attach: function (context, settings) {
      $('.component-media--layout-masonry .component-media__content').once('component-media').masonry({
        itemSelector: 'figure',
        columnWidth: 'figure',
        percentPosition: true
      });
    }
  };

})(jQuery, Drupal);

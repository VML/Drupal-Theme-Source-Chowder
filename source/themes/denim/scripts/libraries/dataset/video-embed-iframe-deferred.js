(function ($, Drupal) {
  'use strict';

  Drupal.behaviors.videoEmbedIframeDeferred = {
    attach: function (context, settings) {
      $('.video-embed-field-responsive-video:not(.video-embed-field--initialized) iframe').each(function (index) {
        var $iframe = $(this);

        if ($iframe.attr('src').length === 0) {
          $iframe.attr('src', $iframe.attr('data-src'));
          $iframe.parent().addClass('video-embed-field--initialized');
        }
      });
    }
  };
})(jQuery, Drupal);

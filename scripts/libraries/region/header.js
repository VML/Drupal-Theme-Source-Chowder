(function ($, Drupal) {
  'use strict';

  Drupal.behaviors.regionHeader = {
    attach: function (context, settings) {

      var selectorHtml = 'html';
      var selectorBody = 'body';
      var selectorOtherRegions = '.region:not(.region-header)';
      var selectorHeader = '.region-header';
      var selectorHeaderNav = '.region-header .block-system-menu-blockmain';
      var selectorHeaderButton = '.region-header .block-system-menu-blockmain__button';
      var selectorHeaderButtonSvgOne = selectorHeaderButton + ' ' + 'rect:nth-child(1)';
      var selectorHeaderButtonSvgThree = selectorHeaderButton + ' ' + 'rect:nth-child(3)';
      var scrollPosition = 0;

      $(selectorHeaderButton).once('regionHeader').on('click', function () {
        var isOpen = $(selectorHeader).hasClass('region-header--menu-open');
        var toOpen = (!isOpen);

        $(selectorHeaderNav).attr('aria-hidden', isOpen);
        $(selectorHeaderNav).prop('hidden', isOpen);
        $(selectorHeader).toggleClass('region-header--menu-open', toOpen);
        $('body').toggleClass('jsa-body-lock', toOpen);

        var buttonLabel = $(selectorHeaderButton).attr(toOpen ? 'data-aria-label-close' : 'data-aria-label-open');
        $(selectorHeaderButton).attr('aria-label', buttonLabel);
        $(selectorHeaderButton).attr('title', buttonLabel);

        // Hide or show other regions on the page.
        if (toOpen) {
          // Check again whether it's open before hiding the regions.
          isOpen = $(selectorHeader).hasClass('region-header--menu-open');

          if (isOpen) {
            setTimeout(function () {
              $(selectorHeaderButtonSvgOne).attr('transform', 'rotate(45 3 3) scale(1.2)');
              $(selectorHeaderButtonSvgThree).attr('transform', 'rotate(-45 3 23) scale(1.2)');
            }, 300);

            setTimeout(function () {
              // Remember scroll position.
              scrollPosition = $(selectorHtml).scrollTop();

              // Hide all other regions.
              $(selectorOtherRegions).attr('aria-hidden', true);
              $(selectorOtherRegions).prop('hidden', true);
            }, 800);
          }
        }
        else {
          // Unhide regions.
          $(selectorOtherRegions).attr('aria-hidden', false);
          $(selectorOtherRegions).prop('hidden', false);

          // Reset scroll position.
          $(selectorHtml).scrollTop(scrollPosition);

          $(selectorHeaderButtonSvgOne).attr('transform', 'rotate(0 0 0)');
          $(selectorHeaderButtonSvgThree).attr('transform', 'rotate(0 0 0)');
        }
      });

      $(window).once('regionHeader').on('scroll', function () {
        $(selectorBody).toggleClass('header-fixed', ($(this).scrollTop() >= 1));
      });
    }
  };
})(jQuery, Drupal);

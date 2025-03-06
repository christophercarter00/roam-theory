(function ($) {
    "use strict";

  // AOS ANIMATIONS
  if (typeof AOS !== 'undefined') {
    AOS.init();
  }

  // NAVBAR TOGGLE ON LINK CLICK
    $('.navbar-nav .nav-link').click(function () {
        $('.navbar-collapse').collapse('hide');
    });

  // SMOOTH SCROLLING TO SECTIONS
  $('a[href*="#"]').click(function (event) {
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                event.preventDefault();
                $('html, body').animate(
                    {
                        scrollTop: target.offset().top - 66,
                    },
                  1000
                );
            }
        }
  // STICKY NAVBAR
    $(document).ready(function () {
        if ($.fn.sticky) {
            $('.navbar').sticky({ topSpacing: 0 });
        }
    });

  // MAGNIFIC POPUP FOR IMAGES
    $(document).ready(function () {
        if ($.fn.magnificPopup) {
            $('.image-popup').magnificPopup({
                type: 'image',
                removalDelay: 300,
                mainClass: 'mfp-with-zoom',
                gallery: {
                  enabled: true,
                },
                zoom: {
                    enabled: true,
                    duration: 300,
                    easing: 'ease-in-out',
                    opener: function (openerElement) {
                        return openerElement.is('img') ? openerElement : openerElement.find('img');
                  },
              },
            });
        }
    });
  });

})(window.jQuery);
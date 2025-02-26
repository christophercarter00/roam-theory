(function ($) {
    "use strict";

    // Initialize AOS (Animate on Scroll)
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true
    });

    // Navbar Toggle on Link Click
    $('.navbar-nav .nav-link').click(function () {
        $('.navbar-collapse').collapse('hide');
    });

    // Smooth Scrolling
    $('a[href*="#"]').on('click', function (event) {
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
                    800
                );
            }
        }
    });

    // Sticky Navbar
    $(document).ready(function () {
        $('.navbar').sticky({ topSpacing: 0 });
    });

    // Magnific Popup for Images
    $(document).ready(function () {
        $('.image-popup').magnificPopup({
            type: 'image',
            removalDelay: 300,
            mainClass: 'mfp-with-zoom',
            gallery: {
                enabled: true
            },
            zoom: {
                enabled: true,
                duration: 300,
                easing: 'ease-in-out',
                opener: function (openerElement) {
                    return openerElement.is('img') ? openerElement : openerElement.find('img');
                }
            }
        });
    });

    // Scrollspy Activation
    $(document).ready(function () {
        $('body').scrollspy({ target: '#navbarNav', offset: 70 });
    });

})(jQuery);

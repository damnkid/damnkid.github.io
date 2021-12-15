// * Makes sure that whole site is loaded
$(window).on('load', () => {
        $('#status').fadeOut();
        $('#preloader').delay(400).fadeOut('slow');
    });

$(document).ready(() => {
        $('.menu-toggler').on('click', function () {
            $(this).toggleClass('open');
            $('.top-nav').toggleClass('open');
        });

        // * For collapsing the menu toggler
        $('.top-nav .nav-link').on('click', () => {
            $('.menu-toggler').removeClass('open');
            $('.top-nav').removeClass('open');
        });

        // * For scrollling 
        $('nav a[href*="#"]').on('click', function () {
            $('html ,body').animate({
                scrollTop: $($(this).attr('href')).offset().top - 100
            }, 2000);
        });

        // * Up Button
        $('#up').on('click', () => {
            $('html ,body').animate({
                scrollTop: 0
            }, 2000);

        });

        AOS.init({
            easing: 'ease',
            duration: 1800,
            once: true
        });

    });

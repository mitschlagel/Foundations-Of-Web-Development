$(document).ready(function() {
    $(window).scroll(function() {
        $('.small-nav').each(function() {
            let top_of_element = $(this).offset().top;
            let bottom_of_element = $(this).offset().top + $(this).outerHeight();
            let bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
            let top_of_screen = $(window).scrollTop();
    
            if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element) && !$(this).hasClass('is-visible')) {
                $(this).addClass('is-visible');
            }
        });
    });
});
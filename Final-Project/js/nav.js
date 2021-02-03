$(document).ready(function () {


    // Check for small screens 
    if ($(window).width <= 600) {

        $(".small-nav").removeClass("is-visible");


    } else {
        // Fades secondary nav into view on scroll
        $(window).scroll(function () {
            let scroll = $(window).scrollTop();

            if (scroll >= 500) {
                $(".small-nav").addClass("is-visible");
            } else {
                $(".small-nav").removeClass("is-visible");
            }
        });
    }



    // Animates a slow scroll to each section when clicked on the nav
    $("a[href='#home']").click(function () {
        $('html, body').animate({
            scrollTop: $("#home").offset().top
        }, 1500);
    });

    $("a[href='#resume']").click(function () {
        $('html, body').animate({
            scrollTop: $("#resume").offset().top
        }, 1500);
    });

    $("a[href='#portfolio']").click(function () {
        $('html, body').animate({
            scrollTop: $("#portfolio").offset().top
        }, 1500);
    });

    $("a[href='#blog']").click(function () {
        $('html, body').animate({
            scrollTop: $("#blog").offset().top
        }, 1500);
    });

    $("a[href='#music']").click(function () {
        $('html, body').animate({
            scrollTop: $("#music").offset().top
        }, 1500);
    });

    $("a[href='#contact']").click(function () {
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
        }, 1500);
    });
});

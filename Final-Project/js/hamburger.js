$(document).ready(function () {

    // Toggle hamburger menu on click
    $('.single-stripe').click(function () {
        $(this).toggleClass('animate');
        $('.small-nav').toggleClass('open');
    });

    // Close menu when link is clicked
    $('.small-nav').click(function () {
        $('.single-stripe').toggleClass('animate');
        $(this).removeClass('open');
    });


});
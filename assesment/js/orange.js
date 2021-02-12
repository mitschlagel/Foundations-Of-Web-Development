$(document).ready(function() {
    
    // Functions to move pawprint around <nav>
    
    

    // Functions to display content on nav clicks.
    $("a[href='#schedule']").click(function () {   
        $('.schedule').addClass("sched-is-visible"); 
    });

    $('#sched-close-button').click(function() {
        $(':parent').removeClass("sched-is-visible");
    });
    
    $("a[href='#contact']").click(function () {   
        $('.contact').addClass("contact-is-visible"); 
    });
    
    // Button to close sched and contact windows.
    $('#contact-close-button').click(function() {
        $(':parent').removeClass("contact-is-visible");
    });

    // Functions for scrolling between Home and About pages.
    $("a[href='#home']").click(function () {
        $('html, body').animate({
            scrollTop: $(".home").offset().top
        }, 400);
    });

    $("a[href='#about']").click(function () {
        $('html, body').animate({
            scrollTop: $(".about").offset().top
        }, 400);
    });
});

// For each a tag, when mouseenter
    // change position of #pawprint to be directly under it
    // animate transition

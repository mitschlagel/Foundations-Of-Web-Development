$(document).ready(function() {
    
    // Functions to move pawprint around <nav>
    
    $("a[href='#home']").hover(function () {
            // over
            $('#pawprint').addClass('pawprint-home');
        }, function () {
            // out
            $('#pawprint').removeClass('pawprint-home');
        });
    

    // Functions to display content on nav clicks
    $("a[href='#schedule']").click(function () {   
        $('.schedule').addClass("is-visible"); 
    });
    
    
    $('#close-button').click(function() {
        $(':parent').removeClass("is-visible");
    });
});

// For each a tag, when mouseenter
    // change position of #pawprint to be directly under it
    // animate transition

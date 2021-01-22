$(document).ready(function() {
    let i = 0;
    const images = ["url(img/portfolio/1.jpg)", "url(img/portfolio/2.png)", 
                        "url(img/portfolio/3.png)", "url(img/portfolio/4.png)"];

    
    // Allow arrows on container to change bg image
    $(".prev").click(function() {
        if (i !== 0) {
            i -= 1;
        }
        $(".current-slide").css("background-image", images[i]);  
    });
    $(".next").click(function() {
        if (i !== images.length - 1) {
            i += 1;
        }
        $(".current-slide").css("background-image", images[i]);
    });

});
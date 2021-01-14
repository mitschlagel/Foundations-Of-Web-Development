$(document).ready(function() {
    let i = 0;
    const images = ["url(img/background.jpg)", "url(img/background2.jpg)", "url(img/background3.jpg)"];

    // Allow arrows on container to change bg image
    $(".button-left").click(function() {
        if (i !== 0) {
            i -= 1;
        }
        $(".main").css("background-image", images[i]);  
    });
    $(".button-right").click(function() {
        if (i !== images.length - 1) {
            i += 1;
        }
        $(".main").css("background-image", images[i]);
    });

});
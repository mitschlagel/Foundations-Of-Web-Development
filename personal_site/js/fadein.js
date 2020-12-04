$( document ).ready(function() {
 
    $(document).on("scroll", function () {
        var pageTop = $(document).scrollTop()
        var pageBottom = pageTop + $(window).height()
        var tags = $(".row")
    
        for (var i = 0; i < tags.length; i++) {
            var tag = tags[i]
    
            if ($(tag).position().top < pageBottom) {
                $(tag).addClass("visible")
                console.log("PASS")
            } else {
                $(tag).removeClass("visible")
                console.log("FAIL")
            }
        }
    });
 
});


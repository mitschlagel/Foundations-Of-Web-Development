$(function() {
    var display = $("#display");
    var equalWasLast = false;
    var errorWasLast = false;
    $(".number, .operator").click(function() {
        var label = $(this).text().trim();
        if (display.text() === "0" || errorWasLast || (equalWasLast == true && $(this).hasClass("number"))) {
             display.empty();
             errorWasLast = false;
        }
        if (display.text().length < 12) {
            display.append(label);
            equalWasLast = false;
        }
        
      
    });

    $(".clear").click(function() {
        display.empty().append("0");
    });

    $(".equal").click(function() {
        equalWasLast = true;
        try {
            var answer = eval(display.text()).toString();

        display.empty().append(answer);
        
        } catch(error) {
        errorWasLast = true;
        display.empty().append("ERROR");
        }



    });
});

// Click a number - number displays
// Click an operator - operator displays after number
// Click on number - number displays after operator
// Click on equal - display clears and answer displays
    // equalWasLast = true
        // Display is emptied and answer is appended
// Click on operator - operator displays after answer
    // equalWasLast is still true
// Click on number - display clears and number displays
    // equalWasLast is still true
// Move task from text input to appropriate list
    // If button clicked == true
        // capture val in text 
            // display val in appropriate list
            // buttonClicked == flase

// All options are required:
    // task name, list, and priority
    // lack of one will generate an error

$(document).ready(function(){
    // Get value on button click and show alert
    $("#button").click(function(){
        let task = $("#task").val();
        console.log(task);
    });
});
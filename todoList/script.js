// Move task from text input to appropriate list
    // If button clicked == true
        // capture val in text 
            // display val in appropriate list
            // buttonClicked == false

// All options are required:
    // task name, list, and priority
    // lack of one will generate an error

$(document).ready(function(){
    const home = $(".home");
    const work = $(".work");
    

    // Task buttton functionality
    $("button").click(function(){
        let task = $(".task").val();
        let priority = $(".priority[name='priority']:checked").val();
        let list = $(".list").val();

        // Check for valid input
        if (task == undefined || priority == undefined || list == undefined) {
            $(".error").empty().append("Task, list, and priority required.")
        } else {
            // Determine which list to add task and if it has tasks already
            if (list == "Home") {
                $(".error").empty();
                home.append("<p>" + task + " " + "<span>" + priority + "</span>" + "</p>");          
            } else if (list == "Work") {
                $(".error").empty();
                work.append("<p>" + task + " " + "<span>" + priority + "</span>" + "</p>"); 
            }
        }
    });
    
    // trash bin appears on hover, click to delete task
    const taskItem = $(".home p");
    const removeButton = "<img src='img/trash-can.png'>"
    taskItem.mouseenter(function() {
        taskItem.fadeIn(removeButton);
    });
});

// Get value on button click and show alert
// $("#button").click(function(){
//     let task = $("#task").val();
//     alert(task);
// });
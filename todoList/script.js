// Move task from text input to appropriate list
    // If button clicked == true
        // capture val in text 
            // display val in appropriate list
            // buttonClicked == false

// All options are required:
    // task name, list, and priority
    // lack of one will generate an error

$(document).ready(function(){
    let home = $(".home");
    let work = $(".work");

    $("button").click(function(){
        let task = $(".task").val();
        let priority = $(".priority[name='priority']:checked").val();
        let list = $(".list").val();

        // Check for valid input
        if (task == undefined || priority == undefined || list == undefined) {
            $(".error").append("ERROR: task, list, and priority required.")
        } else {
            // Determine which list to add task
            if (list == "Home") {
                home.empty().append(task + " " + priority);
                
            } else if (list == "Work") {
                work.empty().append(task + " " + priority);
            }
        }
        
        
         
        
        
        // if list == home
            // .append(task) to home
            // .append(priority)
        // else if list == work
            // .append(task) to work
            // .append(prioriy)
        // clear input
        // reset list

    });
    
});

// Get value on button click and show alert
// $("#button").click(function(){
//     let task = $("#task").val();
//     alert(task);
// });
// Move task from text input to appropriate list
    // If button clicked == true
        // capture val in text 
            // display val in appropriate list
            // buttonClicked == false

// All options are required:
    // task name, list, and priority
    // lack of one will generate an error

$(document).ready(function(){
    const home = $('.home');
    const work = $('.work');
    const removeButton = "<img class='removeButton' src='img/trash-can.png'>"
    

    // Task buttton functionality
    $('button').click(function(){
        let task = $('.task').val();
        let priority = $(".priority[name='priority']:checked").val();
        let list = $('.list').val();
        
        // Check for valid input
        if (task == "" || priority == undefined || list == undefined) {
            $('.error').empty().append('Task, list, and priority required.')
        } else {
            console.log(task + priority + list);
            // Determine which list to add task and if it has tasks already
            if (list == "Home") {
                $('.error').empty();
                home.append("<p class='taskItem'>" + task + " " + "<span>" + priority + "</span>" + removeButton + "</p>");          
            } else if (list == "Work") {
                $('.error').empty();
                work.append("<p class='taskItem'>" + task + " " + "<span>" + priority + "</span>" + removeButton + "</p>"); 
            }
        }
    });
    
    // click removeButton to remove taskItem (the parent element)
    // I don't understand why this doesn't work.
    $('.removeButton').click(function(){
        $(this).parent().remove();
    });
});

// rewrite things as individual functions

(document).ready(function(){

    // Global variables
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
            
            // Determine which list to add task and if it has tasks already
            if (list == "Home") {
                $('.error').empty();
                home.append("<p class='taskItem'>" + task + " " + "<span>" + priority + "</span>" + removeButton + "</p>");
                $('.task').val("");         
            } else if (list == "Work") {
                $('.error').empty();
                work.append("<p class='taskItem'>" + task + " " + "<span>" + priority + "</span>" + removeButton + "</p>"); 
                $('.task').val("");  
            }
        }
    });
    
    // .on() method listens for events and takes 3 parameters, event, element, and function
    console.log("Test this function!");
    $('body').on('click', '.removeButton', function() {
        $(this).parent().remove();
    });
    
    
    
});

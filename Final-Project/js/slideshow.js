// Object for project urls
const links = {
    blanka: '/Users/spencerjones/Desktop/code/aim/Foundations-Of-Web-Development/Class-12/index.html',
    chipotle: '/Users/spencerjones/Desktop/code/aim/Foundations-Of-Web-Development/Chipotle/index.html',
    dsc: '/Users/spencerjones/Desktop/code/aim/Foundations-Of-Web-Development/DSC_2020/index.html',
    wombat: '/Users/spencerjones/Desktop/code/aim/Foundations-Of-Web-Development/WombatCoffee/index.html',
    interface: '/Users/spencerjones/Desktop/code/aim/Foundations-Of-Web-Development/Interface-Online-Courses/index.html',
    todo: '/Users/spencerjones/Desktop/code/aim/Foundations-Of-Web-Development/todoList/index.html',
    calc: '/Users/spencerjones/Desktop/code/aim/Foundations-Of-Web-Development/calculator/index.html'
}

$(document).ready(function() {
    
    // Change slide background-image when thumbnail is clicked
    $('.thumbnails img').on('click', function() {
        
        // Var to hold selected item src
        const item = $(this).prop('src');
        const caption = $(this).prop('alt');
        const id = $(this).prop('id');


        // Change background image to item src
        $('.current-slide').empty().css('background-image', 'url(' + item + ')');

        // Change caption to image alt text
        $('.caption').empty().append("<span>" + caption + "</span>");

        // Wrap slide in a tag with link to project
        $('.current-slide').wrap("<a href='" + links[id] + "' target='blank'></a>");


    });
});


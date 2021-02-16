// Object for project urls
const links = {
    blanka: '#',
    chipotle: '#',
    dsc: '#',
    wombat: '#',
    interface: '#',
    todo: '#',
    calc: '#'
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


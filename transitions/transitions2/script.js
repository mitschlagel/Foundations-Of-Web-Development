$(function() {
    $("#move").click(function() {
        console.log("move button clicked");
        $("#block1").toggleClass("move");
    });
    $("#size").click(function() {
        console.log("size button clicked");
        $("#block1").toggleClass("size");
    });
    $("#opacity").click(function() {
        console.log("opacity button clicked");
        $("#block1").toggleClass("opacity");
    });
    $("#color").click(function() {
        console.log("color button clicked");
        $("#block1").toggleClass("color");
    });
})
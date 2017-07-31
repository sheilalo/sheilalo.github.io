/* Resize homecontainer div to fill width of screen */
$(window).on('resize', function(){
    var width = $(".container").width();
    $("#homecontainer").width(width);
}).resize();

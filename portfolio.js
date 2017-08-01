
/*window.onload = function() {

$('.portfolio-caption').each(function () {
    /*$(this).parent().css({
        'height': $(this).height(),
        'width': $(this).width(),
        'display': 'inline-block'
    })*//*
}).css({
    'top': 125-77/2,
    'left': 0
});
}*/

$(document).ready(function() {
    $(".portfolio-item > a").hover(function() {
        $(this).children('.portfolio-caption').animate({opacity: 1}, 300);
        $(this).children('.portfolio-img-container').animate({opacity: 0.7}, 300);
    }, function() {
        $(this).children('.portfolio-caption').animate({opacity: 0}, 300);
        $(this).children('.portfolio-img-container').animate({opacity: 1}, 300);
    });
    
});
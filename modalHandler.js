$(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox({always_show_close: false});
});

$(document).ready(function() {

$('.contentImg').each(function () {
    $(this).parent().css({
        'height': $(this).height(),
        'width': $(this).width(),
        'display': 'inline-block'
    })
}).css({
    'max-height': '100%',
    'max-width': '100%'
});
});

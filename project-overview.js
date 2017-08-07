/* Sets project overview block margins/width/height */
$(window).load(function() {
    $(window).on('resize', function(){

        if (window.innerWidth > 991) {
            /* On non-mobile, make second column same height as first */
            $("#project-overview-text").css({
                'height': $('#project-overview-picture').height(),
                'width': '',
                'text-align': '',
                'margin-left': 0
            });
        } else {
            /* On mobile, make the width of the grey block the same as the picture */
            var picture_margin = $('#project-overview-picture').css('margin-left');
            if (typeof picture_margin == "undefined") {
                    $('#project-overview-text').css('margin-left','0px');
                } else {
                    $('#project-overview-text').css('margin-left',picture_margin);
                }
            $('#project-overview-text').css({
                'height': '',
                'width': $('#project-overview-picture').width(),
                'text-align': 'center'
            });
        }
        
    }).resize();
});
 (function($) {
     $(function() {
         $('body').running();
         $(".fixed-top").autoHidingNavbar();
         $('[data-toggle="tooltip"]').tooltip();
         $('.to-top').click(function(event){
         	$('.to-top').addClass('fly').addClass('transition');
         	 event.preventDefault();
            $('body,html').animate({
                scrollTop: 0 ,
                }, scroll_top_duration
            );
         });
         var offset = 100,
        offset_opacity = 1200,
        scroll_top_duration = 700,
        $back_to_top = $('.to-top');
        $(window).scroll(function(){
            ( $(this).scrollTop() > offset ) ? '': $back_to_top.removeClass('fly transition');
            if( $(this).scrollTop() > offset_opacity ) {
                $back_to_top.addClass('cd-fade-out');
            }
        });
     })
 })(jQuery);
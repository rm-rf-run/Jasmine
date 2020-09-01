 (function($) {
     $(function() {
        // console.log("%c ", "background: url(https://s1.ax1x.com/2020/05/23/Yjguu9.jpg) no-repeat center;padding-left:908px;padding-bottom: 511px;background-position: 50% 50%;background-size: cover")
         //滚动数字
         $('body').running();
         //导航栏回到顶部
         $(".fixed-top").autoHidingNavbar();
         //显示icon-badge的名称
         $('[data-toggle="tooltip"]').tooltip();
         //点击回到顶部
         $('.to-top').click(function(event) {
             $('.to-top').addClass('fly').addClass('transition');
             event.preventDefault();
             $('body,html').animate({
                 scrollTop: 0,
             }, scroll_top_duration);
         });
         //公告字体特效
         $(".jasmine-notice-span").animatext({
             speed: 100,
             effect: 'bounceIn',
             infinite: false
         });
         var offset = 100,
             offset_opacity = 1200,
             scroll_top_duration = 700,
             $back_to_top = $('.to-top');
         $(window).scroll(function() {
             ($(this).scrollTop() > offset) ? '' : $back_to_top.removeClass('fly transition');
             if ($(this).scrollTop() > offset_opacity) {
                 $back_to_top.addClass('cd-fade-out');
             }
         });

         //二维码收钱
         $('[data-toggle="tooltip"]').tooltip();

         //pajx
         // $(document).pjax('a', '#pjax-container');
        //  tocbot.init({
        //   // Where to render the table of contents.
        //   tocSelector: '.js-toc',
        //   // Where to grab the headings to build the table of contents.
        //   contentSelector: '.js-toc-content',
        //   // Which headings to grab inside of the contentSelector element.
        //   headingSelector: 'h1, h2, h3',
        //   // For headings inside relative or absolute positioned containers within content.
        //   hasInnerContainers: true,
        // });
     })
 })(jQuery);
 (function($) {
     $(function() {
        console.log("%c ", "background: url(https://s1.ax1x.com/2020/05/23/Yjguu9.jpg) no-repeat center;padding-left:908px;padding-bottom: 511px;background-position: 50% 50%;background-size: cover")
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
         //恋爱时间
         function setTime() {
             //Date.UTC(year,month,day,hours,minutes,seconds,ms)
             var create_time = Math.round(new Date(Date.UTC(2018, 01, 18, 00, 00, 0)).getTime() / 1000);
             var timestamp = Math.round((new Date().getTime() + 8 * 60 * 60 * 1000) / 1000);
             currentTime = secondToDate((timestamp - create_time));
             currentTimeHtml = currentTime[0] + ' 年 ' + currentTime[1] + ' 天 ' + currentTime[2] + ' 时 ' + currentTime[3] + ' 分 ' + currentTime[4] + ' 秒';
             document.getElementById('htmer_time').innerHTML = currentTimeHtml;
         }

         function secondToDate(second) {
             if (!second) {
                 return 0;
             }
             var time = new Array(0, 0, 0, 0, 0);
             if (second >= 365 * 24 * 3600) {
                 time[0] = parseInt(second / (365 * 24 * 3600));
                 second %= 365 * 24 * 3600;
             }
             if (second >= 24 * 3600) {
                 time[1] = parseInt(second / (24 * 3600));
                 second %= 24 * 3600;
             }
             if (second >= 3600) {
                 time[2] = parseInt(second / 3600);
                 second %= 3600;
             }
             if (second >= 60) {
                 time[3] = parseInt(second / 60);
                 second %= 60;
             }
             if (second > 0) {
                 time[4] = second;
             }
             return time;
         }
         setInterval(setTime, 1000);

         $('.datepicker').datepicker();
     })
 })(jQuery);
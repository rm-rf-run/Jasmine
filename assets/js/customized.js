 (function($) {
     $(function() {
        if (!!window.ActiveXObject || "ActiveXObject" in window) { //is IE?
          alert('朋友，IE浏览器未适配哦~（QQ、360浏览器请关闭 IE 模式访问~）');
        }
         // console.log("%c ", "background: url(https://s1.ax1x.com/2020/05/23/Yjguu9.jpg) no-repeat center;padding-left:908px;padding-bottom: 511px;background-position: 50% 50%;background-size: cover")
        console.log("%c Jasmine %c", "background:#24272A; color:#ffffff", "", "https://www.prettywordpress.com");
        console.log("%c Github %c", "background:#24272A; color:#ffffff", "", "https://github.com/rm-rf-run");
         //滚动数字
         $('body').running();
         //导航栏回到顶部
         $(".fixed-top").autoHidingNavbar();
         //显示icon-badge的名称
         $('[data-toggle="tooltip"]').tooltip();

         var t = $(window).height(),
             e = $(".to-top"),
             n = this;
         n.keyframes = 0;
         n.isVisible = false;
         n.isClick = false;
         $(window).off("scroll.toTop").on("scroll.toTop", (function() {
             // debugger;
             var i = $(window).scrollTop();
             i - n.lastTrace > 0 ? (n.isClick && e.removeClass("transition"), e.removeClass("fly"), i >= t / 2 && (!n.isVisible && e.stop().fadeIn(100), n.isVisible = !0,
                     n.keyframes = 0,
                     e.css("background-position-x", "-40px")),
                 n.isClick = !1) : i < t / 2 && (n.isVisible && e.stop().fadeOut(100),
                 n.isVisible = !1);
             n.lastTrace = i
         }))

         //点击回到顶部
         $('.to-top').click(function(event) {
             var t = 0,
                 e = $(".to-top");
             Mt = setInterval((function() {
                 t++,
                 e.css({
                         "background-position-x": -(143 * t + 40) + "px"
                     }),
                     5 === t && (e.addClass("transition"),
                         e.addClass("fly")
                     ),
                     6 === t && (t = 0,
                         clearInterval(Mt),
                         $("html, body").stop().animate({
                             scrollTop: 0
                         }, "fast"))
             }), 50)
         });
         //公告字体特效
         $(".jasmine-notice-span").animatext({
             speed: 100,
             effect: 'bounceIn',
             infinite: false
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

         //建站日期
         function startTime() {
             function show_date_time() {
                 window.setTimeout(function() {
                     show_date_time();
                 }, 1000);
                 var blogStartTime = jasmineConfig.siteStartTime;
                 var date = new Date(blogStartTime.replace(/-/g, '/'));
                 var today = new Date();
                 var timeold = (today.getTime() - date.getTime());
                 var msPerDay = 24 * 60 * 60 * 1000;
                 var e_daysold = timeold / msPerDay;
                 var daysold = Math.floor(e_daysold);
                 var e_hrsold = (e_daysold - daysold) * 24;
                 var hrsold = Math.floor(e_hrsold);
                 var e_minsold = (e_hrsold - hrsold) * 60;
                 var minsold = Math.floor((e_hrsold - hrsold) * 60);
                 var seconds = Math.floor((e_minsold - minsold) * 60);
                 $('#run_time').html(daysold + "天" + hrsold + "小时" + minsold + "分" + seconds + "秒");

                 //恋爱日期
                 var loveStartTime = jasmineConfig.loveStartTime;
                 var date = new Date(loveStartTime.replace(/-/g, '/'));
                 var today = new Date();
                 runTime = parseInt((today.getTime() - date.getTime()) / 1000);
                 var year = Math.floor(runTime / 86400 / 365);
                 runTime = runTime % (86400 * 365);
                 var month = Math.floor(runTime / 86400 / 30);
                 runTime = runTime % (86400 * 30);
                 var day = Math.floor(runTime / 86400);
                 runTime = runTime % 86400;
                 var hour = Math.floor(runTime / 3600);
                 runTime = runTime % 3600;
                 var minute = Math.floor(runTime / 60);
                 runTime = runTime % 60;
                 var second = runTime;
                 $('#love_time').html(year + "年" + month + "月" + day + "天" + hour + "小时" + minute + "分" + second + "秒");
             }
             show_date_time();
         }
         //运行方法
         startTime();

         function add_copyright() {
            document.body.addEventListener("copy", function (e) {
                if (window.getSelection().toString().length > 30 && jasmineConfig.clipboardCopyright) {
                    setClipboardText(e);
                }
                $('.toast').toast("show")
            });

            function setClipboardText(event) {
                event.preventDefault();
                var htmlData = "# 商业转载请联系作者获得授权，非商业转载请注明出处。<br>" + "# For commercial use, please contact the author for authorization. For non-commercial use, please indicate the source.<br>" + "# 协议(License)：署名-非商业性使用-相同方式共享 4.0 国际 (CC BY-NC-SA 4.0)<br>" + "# 作者(Author)：" + jasmineConfig.author_name + "<br>" + "# 链接(URL)：" + window.location.href + "<br>" + "# 来源(Source)：" + jasmineConfig.site_name + "<br><br>" + window.getSelection().toString().replace(/\r\n/g, "<br>");;
                var textData = "# 商业转载请联系作者获得授权，非商业转载请注明出处。\n" + "# For commercial use, please contact the author for authorization. For non-commercial use, please indicate the source.\n" + "# 协议(License)：署名-非商业性使用-相同方式共享 4.0 国际 (CC BY-NC-SA 4.0)\n" + "# 作者(Author)：" + jasmineConfig.author_name + "\n" + "# 链接(URL)：" + window.location.href + "\n" + "# 来源(Source)：" + jasmineConfig.site_name + "\n\n" + window.getSelection().toString().replace(/\r\n/g, "\n");
                if (event.clipboardData) {
                    event.clipboardData.setData("text/html", htmlData);
                    event.clipboardData.setData("text/plain", textData);
                } else if (window.clipboardData) {
                    return window.clipboardData.setData("text", textData);
                }
            }
        }
        //剪贴板版权标识
        add_copyright();


     })
 })(jQuery);
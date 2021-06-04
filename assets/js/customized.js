(function ($) {
    $(function () {
        if (!!window.ActiveXObject || "ActiveXObject" in window) { //is IE?
            alert('朋友，IE浏览器未适配哦~（QQ、360浏览器请关闭 IE 模式访问~）');
        }
        // console.clear(); // 清屏
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
        $(window).off("scroll.toTop").on("scroll.toTop", (function () {
            var i = $(window).scrollTop();
            i - n.lastTrace > 0 ? (n.isClick && e.removeClass("transition"), e.removeClass("fly"), i >= t / 2 && (!n.isVisible && e.stop().fadeIn(100), n.isVisible = !0, n.keyframes = 0, e.css("background-position-x", "-40px")), n.isClick = !1) : i < t / 2 && (n.isVisible && e.stop().fadeOut(100), n.isVisible = !1);
            n.lastTrace = i
        }))
        //点击回到顶部
        $('.to-top').click(function (event) {
            var t = 0,
                e = $(".to-top");
            Mt = setInterval((function () {
                t++,
                    e.css({
                        "background-position-x": -(143 * t + 40) + "px"
                    }),
                5 === t && (e.addClass("transition"), e.addClass("fly")),
                6 === t && (t = 0, clearInterval(Mt), $("html, body").stop().animate({
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

        //建站日期
        function startTime() {
            function show_date_time() {
                window.setTimeout(function () {
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
                if (window.getSelection().toString().length > 30 && jasmineConfig.clipboardCopyright == "1") {
                    setClipboardText(e);
                }
                $('.jasmine-toast').toast("show")
            });

            function setClipboardText(event) {
                event.preventDefault();
                var htmlData = "# 商业转载请联系作者获得授权，非商业转载请注明出处。<br>" + "# For commercial use, please contact the author for authorization. For non-commercial use, please indicate the source.<br>" + "# 协议(License)：署名-非商业性使用-相同方式共享 4.0 国际 (CC BY-NC-SA 4.0)<br>" + "# 作者(Author)：" + jasmineConfig.author_name + "<br>" + "# 链接(URL)：" + window.location.href + "<br>" + "# 来源(Source)：" + jasmineConfig.site_name + "<br><br>" + window.getSelection().toString().replace(/\r\n/g, "<br>");
                ;
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

        //随机添加标签样式
        function getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max));
        }

        let labelData = ['badge badge-primary', 'badge badge-secondary', 'badge badge-success', 'badge badge-danger', 'badge badge-warning', 'badge badge-info', 'badge badge-dark'];
        $(".jasmine-label a").each(function (index, element) {
            $(this).addClass(labelData[getRandomInt(7)]);
        });

        //标签随机获取十六进制颜色
        function randomColor() {
            var color = "";
            for (var i = 0; i < 6; i++) {
                color += (Math.random() * 16 | 0).toString(16);
            }
            return "#" + color;
        }

        $(".jasmine-tag-cloud a").each(function (index, element) {
            $(this).css('background', randomColor());
        });
        //输入框打字冒光特效
        POWERMODE.colorful = true; // 冒光特效
        POWERMODE.shake = false; // 抖动特效
        document.body.addEventListener('input', POWERMODE); // 为所有 input 标签都加上特效
        //页面切换标题效果
        document.addEventListener('visibilitychange', function () {
            if (document.visibilityState == 'hidden') {
                normal_title = document.title;
                document.title = '去哪了你~';
            } else document.title = normal_title;
        });

        // 设置cookie
        function setCookie(a, c) {
            var b = 30;
            var d = new Date();
            d.setTime(d.getTime() + b * 24 * 60 * 60 * 1000);
            document.cookie = a + "=" + escape(c) + ";expires=" + d.toGMTString()
        }

        // 获取cookie
        function getCookie(b) {
            var a, c = new RegExp("(^| )" + b + "=([^;]*)(;|$)");
            if (a = document.cookie.match(c)) {
                return unescape(a[2])
            } else {
                return null
            }
        }

        jasmine_js_getqqinfo();

        // 核心函数
        function jasmine_js_getqqinfo() {
            // 获取cookie
            if (getCookie('user_avatar') && getCookie('user_qq')) {
                $('#author_img').attr('src', getCookie('user_avatar'));
                $('#author_qq').val(getCookie('user_qq'));
            }
            $('#author_qq').on('blur', function () {
                var qq = $('#author_qq').val();
                $reg = /^[1-9]\d{4,9}$/;
                if ($reg.test(qq)) {
                    $('#email').val($.trim(qq) + '@qq.com');
                    // ajax方法获取昵称
                    $.ajax({
                        type: 'get',
                        //本地调试使用绝对路径
                        url: jasmineConfig.siteUrl + '/wp-content/themes/Jasmine/inc/get_qqInfo.php?type=getqqnickname&qq=' + qq, // func_getqqinfo.php是后端处理文件，注意路径
                        dataType: 'jsonp',
                        jsonp: 'callback',
                        jsonpCallback: 'portraitCallBack',
                        success: function (data) {
                            $('#author').val(data[qq][6]); // 将返回的qq昵称填入到昵称input表单上
                            createMessage('已获取昵称！'); // 弹出警告
                            setCookie('user_qq', qq); // 设置cookie
                        },
                        error: function () {
                            setCookie('user_qq', '', 30);
                            $('#author_qq,#author,#email').val(''); // 如果获取失败则清空表单
                            createMessage('糟糕，昵称获取失败！请重新填写。');
                        }
                    });
                    // 获取头像
                    $.ajax({
                        type: 'get',
                        url: jasmineConfig.siteUrl + '/wp-content/themes/Jasmine/inc/get_qqInfo.php?type=getqqavatar&qq=' + qq, // func_getqqinfo.php是后端处理文件，注意路径，127.0.0.1 改成你自己的域名！
                        dataType: 'jsonp',
                        jsonp: 'callback',
                        jsonpCallback: 'qqavatarCallBack',
                        success: function (data) {
                            $('#author_img').attr('src', data[qq]); // 将返回的qq头像设置到你评论表单区域显示头像的节点上
                            createMessage('已获取头像！'); // 弹出警告
                            setCookie('user_avatar', data[qq]); // 设置cookie
                        },
                        error: function () {
                            createMessage('糟糕，获取头像失败了！请重新填写。');
                            setCookie('user_avatar', '');
                            $('#author_qq,#author,#email').val(''); // 清空表单
                        }
                    });
                }
            });
        };
        //点击登录
        $('#menu-login.have-login').click(function (e) {
            var theEvent = window.event || e;
            theEvent.stopPropagation();
            $('#personal-menu').fadeToggle(250);
        });
        $('body').on('click', function () {
            $('#personal-menu').fadeOut(250);
        });

        // 消息弹窗
        function createMessage(message, time = 5000) {
            if ($(".message").length > 0) {
                $(".message").remove();
            }
            var html = '';
            html += '<div class="message"><div data-delay="' + time + '" class="toast toast-message" style="position: fixed; bottom: 0; right: 0;">';
            html += '<div class="toast-body"><span>' + message + '</span></div></div></div>';
            $("body").append(html);
            $('.toast-message').toast('show');
            setTimeout("$('.message').remove()", time);
        }

        //h标签添加id
        function titleAddId() {
            var id = 1;
            if ($("#jasmine-post-main").find("h1,h2,h3,h4,h5").length > 0) {
                $('.catalog').removeClass('hide-block');
                $("#jasmine-post-main").find("h1,h2,h3,h4,h5").each(function () {
                    var hyphenated = "jasmine-" + id;
                    $(this).attr('id', hyphenated);
                    id++;
                });
                tocbot.init({
                    // 显示目录的位置。
                    tocSelector: '.toc',
                    // 获取标题以构建目录的位置。
                    contentSelector: '#jasmine-post-main',
                    // 要在contentSelector元素内部获取哪些标题。
                    headingSelector: 'h1, h2, h3, h4, h5',
                    // 对于内容中相对或绝对位置容器内的标题。
                    hasInnerContainers: true,
                });
            } else {
                $('.catalog').addClass('hide-block');
                if ($('.toc').length) tocbot.destroy();
            }
        }

        titleAddId();

        //还原样式
        function contentDisplay() {
            //点击字体增大
            $('.jasmine-post-help-font').click(function () {
                $('#jasmine-post-main').toggleClass("add-fontsize");
            })
            //点击增大文章内容宽度
            $('.jasmine-post-help-width').click(function () {
                var bool = $('#hide-column').hasClass("hide-block");
                if (bool) {
                    $('#pjax-container').removeClass("col-md-9").addClass("col-md-6");
                    $('#hide-column').removeClass("hide-block");
                    $('.jasmine-appreciation-img').css("left", "22%");
                    var width = $('.jasmine-post-h1').width();
                    var height = $('.jasmine-post-h1').height();
                    $('.jasmine-post-content h1 canvas').css("width", width);
                    $('.jasmine-post-content h1 canvas').css("height", height);
                    $('#post-password-input').css("width", "300px");
                } else {
                    $('#pjax-container').removeClass("col-md-6").addClass("col-md-9");
                    $('#hide-column').addClass("hide-block");
                    $('.jasmine-appreciation-img').css("left", "32%");
                    var width = $('.jasmine-post-h1').width();
                    var height = $('.jasmine-post-h1').height();
                    $('.jasmine-post-content h1 canvas').css("width", width);
                    $('.jasmine-post-content h1 canvas').css("height", height);
                    $('#post-password-input').css("width", "495px");
                }
            })
        }

        contentDisplay();
        /***pjax开始***/
        $(document).pjax('a', '#pjax-container', {
            fragment: '#pjax-container',
            timeout: 8000,
            type: 'GET'
        });
        //进度条
        $(document).on('pjax:start', function () {
            NProgress.start();
        });
        $(document).on('pjax:end', function () {
            NProgress.done();
        });
        //ready pjax:end方法是在pjax请求之后重新初始化插件
        $(document).on('ready pjax:end', function (event) {
            titleAddId();
            $(".jasmine-post-content h1").sparkleh({
                count: 80,
                color: ["#ff0080", "#ff0080", "#0000FF"]
            });
            jasmine_js_getqqinfo();
            contentDisplay();
            initOwO();
            hljs.highlightAll('Atom One Dark');
        })
        //还原文章样式
        $(document).on('pjax:click', function () {
            $('#hide-column').removeClass("hide-block");
            $('#pjax-container').removeClass("col-md-9").addClass("col-md-6");
            $('.jasmine-appreciation-img').css("left", "22%");
            var width = $('.jasmine-post-h1').width();
            var height = $('.jasmine-post-h1').height();
            $('.jasmine-post-content h1 canvas').css("width", width);
            $('.jasmine-post-content h1 canvas').css("height", height);
        });
        /***pjax结束***/
        // 点赞
        $(document).on('click', '.post-like a', function () {
            if ($(this).hasClass('have-like')) {
                createMessage('你已经点过赞啦(･∀･)！');
                return false;
            } else {
                $(this).addClass('have-like');
                var id = $(this).data("id"),
                    action = $(this).data('action'),
                    rateHolder = $(this).children('.like-count');
                var ajax_data = {
                    action: action,
                    jasmine_id: id,
                    jasmine_action: action
                };
                $.post(jasmineConfig.ajaxUrl, ajax_data, function (data) {
                    $(rateHolder).html('<i class="fa fa-thumbs-o-up"></i>' + data);
                    createMessage('୧(๑•̀⌄•́๑)૭感谢你的小心心！');
                });
                return false;
            }
        });

        // toc拖拽
        function dragFunc(id) {
            var Drag = document.getElementById(id);
            if (Drag) {
                Drag.onmousedown = function (event) {
                    var ev = event || window.event;
                    event.stopPropagation();
                    var disX = ev.clientX - Drag.offsetLeft;
                    var disY = ev.clientY - Drag.offsetTop;
                    document.onmousemove = function (event) {
                        var ev = event || window.event;
                        Drag.style.left = ev.clientX - disX + "px";
                        Drag.style.top = ev.clientY - disY + "px";
                        Drag.style.cursor = "move";
                    };
                };
                Drag.onmouseup = function () {
                    document.onmousemove = null;
                    this.style.cursor = "default";
                };
            }
        };
        dragFunc("toc-catalog");

        // OwO
        function initOwO() {
            let owo = document.getElementsByClassName('OwO')[0];
            if (undefined != owo) {
                var s = new OwO({
                    logo: 'OωO表情',
                    container: owo,  //获取表情标签
                    target: document.getElementsByClassName('OwO-textarea')[0], //获取评论输入区
                    position: 'down',
                    width: '100%',
                    maxHeight: '210px',
                    api: jasmineConfig.siteUrl+'/wp-content/themes/Jasmine/inc/OwO/OwO.min.json'
                });
            }
        }

        initOwO();
        hljs.highlightAll();
    })
})(jQuery);
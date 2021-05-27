(function($) {
     $(function() {
     	// 点击显示手机侧边导航栏
     	$(document).on('click', '#nav-bars', function() {
     		$(".fixed-top").addClass('show');
     		$("#main").addClass('show');
     		$("#footer").addClass('show');
     		$("#mobile-header").addClass('show');
     		$("#mobile-shade").addClass('show');
     		$("#mobile-shade").css("z-index","999");
         });
     	// 点击隐藏侧边导航栏
     	$(document).on('click', '#mobile-shade', function() {
     		$(".fixed-top").removeClass('show');
     		$("#main").removeClass('show');
     		$("#footer").removeClass('show');
     		$("#mobile-header").removeClass('show');
     		$("#mobile-shade").removeClass('show');
     		$("#mobile-shade").css("z-index","unset");
         });
     })
 })(jQuery);
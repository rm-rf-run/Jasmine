<?php
function font_end_js_control()
{?>
<script>
/*Initial Variables*/
var jasmineConfig = new Object();
jasmineConfig.loveStartTime = "<?php echo jasmine_option('jasmine_lovedate') ? jasmine_option('jasmine_lovedate') : null; ?>";
jasmineConfig.siteStartTime = "<?php echo jasmine_option('jasmine_startdate') ? jasmine_option('jasmine_startdate') : null; ?>";

jasmineConfig.author_data = "<?php echo jasmine_option('jasmine_author_data') ? jasmine_option('jasmine_author_data') : null; ?>";

jasmineConfig.siteUrl = "<?php echo get_bloginfo('url'); ?>";

jasmineConfig.site_name = "<?php echo get_bloginfo('name'); ?>";

jasmineConfig.ajaxUrl = "<?php echo admin_url('admin-ajax.php'); ?>";
//默认为站点名称
jasmineConfig.author_name = "<?php if(is_singular('post')){
	echo get_the_author_meta('user_nicename');
}else{echo get_bloginfo('name');}?>";

jasmineConfig.clipboardCopyright = "<?php echo esc_attr(jasmine_option('jasmine_copyright')); ?>";

jasmineConfig.qq_api_url = "<?php echo rest_url('qqinfo'); ?>";
jasmineConfig.cookie_version_control = "1";
console.log("SQL  请求数：", "<?php echo get_num_queries()?>");
console.log("页面生成耗时", "<?php echo timer_stop(0)?>");
console.log("%c Jasmine %c", "background:#24272A; color:#ffffff", "", "https://www.prettywordpress.com");
console.log("%c Github %c", "background:#24272A; color:#ffffff", "", "https://github.com/rm-rf-run");
/*End of Initial Variables*/
</script>
<?php
// 打印sql
// global $wpdb; "<pre>".print_r($wpdb->queries)."</pre>";
}
add_action('wp_head', 'font_end_js_control');

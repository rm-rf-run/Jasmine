<?php
function font_end_js_control()
{?>
<script>
/*Initial Variables*/
var jasmineConfig = new Object();
jasmineConfig.loveStartTime = "<?php echo jasmine_option('jasmine_loveDate') ? jasmine_option('jasmine_loveDate') : null;?>";

jasmineConfig.siteStartTime = "<?php echo jasmine_option('jasmine_startDate') ? jasmine_option('jasmine_startDate') : null;?>";

jasmineConfig.author_data = "<?php echo jasmine_option('jasmine_author_data') ? jasmine_option('jasmine_author_data') : null;?>";

jasmineConfig.siteUrl = "<?php echo get_bloginfo('url'); ?>";

jasmineConfig.site_name = "<?php echo get_bloginfo('name');?>";

jasmineConfig.author_name = jasmineConfig.site_name; //默认为站点名称

jasmineConfig.clipboardCopyright = "<?php echo esc_attr(jasmine_option('jasmine_copyright')) == 'checked' ? 'true' : 'false';?>";

if ("<?php echo is_singular('post')?>") {
        $author_name = "<?php get_the_author_meta('user_nicename');?>";
}

jasmineConfig.qq_api_url = "<?php echo rest_url('qqinfo'); ?>";
jasmineConfig.cookie_version_control = "1";
/*End of Initial Variables*/
</script>
<?php }
add_action('wp_head', 'font_end_js_control');

<?php
	// 优化代码
    //去除头部冗余代码
    remove_action('wp_head', 'feed_links_extra', 3);
    remove_action('wp_head', 'rsd_link');
    remove_action('wp_head', 'wlwmanifest_link');
    remove_action('wp_head', 'index_rel_link');
    remove_action('wp_head', 'start_post_rel_link', 10, 0);
    remove_action('wp_head', 'wp_generator');
    remove_action('wp_head', 'wp_generator'); //隐藏wordpress版本
    remove_filter('the_content', 'wptexturize'); //取消标点符号转义

	/**
	*禁用表情
	*/
        function disable_emojis()
    {
	    remove_action('wp_head', 'print_emoji_detection_script', 7);
	    remove_action('admin_print_scripts', 'print_emoji_detection_script');
	    remove_action('wp_print_styles', 'print_emoji_styles');
	    remove_action('admin_print_styles', 'print_emoji_styles');
	    remove_filter('the_content_feed', 'wp_staticize_emoji');
	    remove_filter('comment_text_rss', 'wp_staticize_emoji');
	    remove_filter('wp_mail', 'wp_staticize_emoji_for_email');
	    add_filter('tiny_mce_plugins', 'disable_emojis_tinymce');
    }
        add_action('init', 'disable_emojis');
    /**
    * Filter function used to remove the tinymce emoji plugin.
    *
    * @param    array  $plugins
    * @return   array             Difference betwen the two arrays
    */
        function disable_emojis_tinymce($plugins)
    {
            if (is_array($plugins)) {
                return array_diff($plugins, array('wpemoji'));
            } else {
                return array();
            }
    }

    // 后台禁用Google Open Sans字体，加速网站
	add_filter( 'gettext_with_context', 'wpdx_disable_open_sans', 888, 4 );
	function wpdx_disable_open_sans( $translations, $text, $context, $domain ) {
	  if ( 'Open Sans font: on or off' == $context && 'on' == $text ) {
	    $translations = 'off';
	  }
	  return $translations;
	}

	//移除左上角W
	function annointed_admin_bar_remove() {
	global $wp_admin_bar;
	/* Remove their stuff */
	$wp_admin_bar->remove_menu('wp-logo');
	}
	add_action('wp_before_admin_bar_render', 'annointed_admin_bar_remove', 0);

	//移除Wordpress后台“感谢使用wordpress创作”
	function my_admin_footer_text(){
	return "";
	}
	function my_update_footer()
	{
	return "";
	}
	add_filter( 'admin_footer_text', 'my_admin_footer_text', 10 );
	add_filter( 'update_footer', 'my_update_footer', 50 );

	//去除分类标志代码
	add_action( 'load-themes.php',  'no_category_base_refresh_rules');
	add_action('created_category', 'no_category_base_refresh_rules');
	add_action('edited_category', 'no_category_base_refresh_rules');
	add_action('delete_category', 'no_category_base_refresh_rules');
	function no_category_base_refresh_rules() {
	    global $wp_rewrite;
	    $wp_rewrite -> flush_rules();
	}
	// register_deactivation_hook(__FILE__, 'no_category_base_deactivate');
	// function no_category_base_deactivate() {
	//  remove_filter('category_rewrite_rules', 'no_category_base_rewrite_rules');
	//  // We don't want to insert our custom rules again
	//  no_category_base_refresh_rules();
	// }
	// Remove category base
	add_action('init', 'no_category_base_permastruct');
	function no_category_base_permastruct() {
	    global $wp_rewrite, $wp_version;
	    if (version_compare($wp_version, '3.4', '<')) {
	        // For pre-3.4 support
	        $wp_rewrite -> extra_permastructs['category'][0] = '%category%';
	    } else {
	        $wp_rewrite -> extra_permastructs['category']['struct'] = '%category%';
	    }
	}
	// Add our custom category rewrite rules
	add_filter('category_rewrite_rules', 'no_category_base_rewrite_rules');
	function no_category_base_rewrite_rules($category_rewrite) {
	    //var_dump($category_rewrite); // For Debugging
	    $category_rewrite = array();
	    $categories = get_categories(array('hide_empty' => false));
	    foreach ($categories as $category) {
	        $category_nicename = $category -> slug;
	        if ($category -> parent == $category -> cat_ID)// recursive recursion
	            $category -> parent = 0;
	        elseif ($category -> parent != 0)
	            $category_nicename = get_category_parents($category -> parent, false, '/', true) . $category_nicename;
	        $category_rewrite['(' . $category_nicename . ')/(?:feed/)?(feed|rdf|rss|rss2|atom)/?$'] = 'index.php?category_name=$matches[1]&feed=$matches[2]';
	        $category_rewrite['(' . $category_nicename . ')/page/?([0-9]{1,})/?$'] = 'index.php?category_name=$matches[1]&paged=$matches[2]';
	        $category_rewrite['(' . $category_nicename . ')/?$'] = 'index.php?category_name=$matches[1]';
	    }
	    // Redirect support from Old Category Base
	    global $wp_rewrite;
	    $old_category_base = get_option('category_base') ? get_option('category_base') : 'category';
	    $old_category_base = trim($old_category_base, '/');
	    $category_rewrite[$old_category_base . '/(.*)$'] = 'index.php?category_redirect=$matches[1]';
	    //var_dump($category_rewrite); // For Debugging
	    return $category_rewrite;
	}
	// Add 'category_redirect' query variable
	add_filter('query_vars', 'no_category_base_query_vars');
	function no_category_base_query_vars($public_query_vars) {
	    $public_query_vars[] = 'category_redirect';
	    return $public_query_vars;
	}
	// Redirect if 'category_redirect' is set
	add_filter('request', 'no_category_base_request');
	function no_category_base_request($query_vars) {
	    //print_r($query_vars); // For Debugging
	    if (isset($query_vars['category_redirect'])) {
	        $catlink = trailingslashit(get_option('home')) . user_trailingslashit($query_vars['category_redirect'], 'category');
	        status_header(301);
	        header("Location: $catlink");
	        exit();
	    }
	    return $query_vars;
	}

	//通过前台不加载语言包来提高博客速度
	add_filter('locale', function($locale) {
	    $locale = ( is_admin() ) ? $locale : 'zh_CN';
	    return $locale;
	});
	//移除wp-json链接
	add_filter('rest_enabled', '_return_false');
	add_filter('rest_jsonp_enabled', '_return_false');
	remove_action( 'wp_head', 'rest_output_link_wp_head', 10 );
	remove_action( 'wp_head', 'wp_oembed_add_discovery_links', 10 );    
?>
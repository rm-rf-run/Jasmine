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
add_filter('gettext_with_context', 'wpdx_disable_open_sans', 888, 4);
function wpdx_disable_open_sans($translations, $text, $context, $domain)
{
    if ('Open Sans font: on or off' == $context && 'on' == $text) {
        $translations = 'off';
    }
    return $translations;
}

//移除左上角W
function annointed_admin_bar_remove()
{
    global $wp_admin_bar;
    /* Remove their stuff */
    $wp_admin_bar->remove_menu('wp-logo');
}
add_action('wp_before_admin_bar_render', 'annointed_admin_bar_remove', 0);

//移除Wordpress后台“感谢使用wordpress创作”
function my_admin_footer_text()
{
    return "";
}
function my_update_footer()
{
    return "";
}
add_filter('admin_footer_text', 'my_admin_footer_text', 10);
add_filter('update_footer', 'my_update_footer', 50);

//去除分类标志代码
add_action('load-themes.php', 'no_category_base_refresh_rules');
add_action('created_category', 'no_category_base_refresh_rules');
add_action('edited_category', 'no_category_base_refresh_rules');
add_action('delete_category', 'no_category_base_refresh_rules');
function no_category_base_refresh_rules()
{
    global $wp_rewrite;
    $wp_rewrite->flush_rules();
}
// register_deactivation_hook(__FILE__, 'no_category_base_deactivate');
// function no_category_base_deactivate() {
//  remove_filter('category_rewrite_rules', 'no_category_base_rewrite_rules');
//  // We don't want to insert our custom rules again
//  no_category_base_refresh_rules();
// }
// Remove category base
add_action('init', 'no_category_base_permastruct');
function no_category_base_permastruct()
{
    global $wp_rewrite, $wp_version;
    if (version_compare($wp_version, '3.4', '<')) {
        // For pre-3.4 support
        $wp_rewrite->extra_permastructs['category'][0] = '%category%';
    } else {
        $wp_rewrite->extra_permastructs['category']['struct'] = '%category%';
    }
}
// Add our custom category rewrite rules
add_filter('category_rewrite_rules', 'no_category_base_rewrite_rules');
function no_category_base_rewrite_rules($category_rewrite)
{
    //var_dump($category_rewrite); // For Debugging
    $category_rewrite = array();
    $categories       = get_categories(array('hide_empty' => false));
    foreach ($categories as $category) {
        $category_nicename = $category->slug;
        if ($category->parent == $category->cat_ID) // recursive recursion
        {
            $category->parent = 0;
        } elseif ($category->parent != 0) {
            $category_nicename = get_category_parents($category->parent, false, '/', true) . $category_nicename;
        }

        $category_rewrite['(' . $category_nicename . ')/(?:feed/)?(feed|rdf|rss|rss2|atom)/?$'] = 'index.php?category_name=$matches[1]&feed=$matches[2]';
        $category_rewrite['(' . $category_nicename . ')/page/?([0-9]{1,})/?$']                  = 'index.php?category_name=$matches[1]&paged=$matches[2]';
        $category_rewrite['(' . $category_nicename . ')/?$']                                    = 'index.php?category_name=$matches[1]';
    }
    // Redirect support from Old Category Base
    global $wp_rewrite;
    $old_category_base                               = get_option('category_base') ? get_option('category_base') : 'category';
    $old_category_base                               = trim($old_category_base, '/');
    $category_rewrite[$old_category_base . '/(.*)$'] = 'index.php?category_redirect=$matches[1]';
    //var_dump($category_rewrite); // For Debugging
    return $category_rewrite;
}
// Add 'category_redirect' query variable
add_filter('query_vars', 'no_category_base_query_vars');
function no_category_base_query_vars($public_query_vars)
{
    $public_query_vars[] = 'category_redirect';
    return $public_query_vars;
}
// Redirect if 'category_redirect' is set
add_filter('request', 'no_category_base_request');
function no_category_base_request($query_vars)
{
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
add_filter('locale', function ($locale) {
    $locale = (is_admin()) ? $locale : 'zh_CN';
    return $locale;
});
//移除wp-json链接
add_filter('rest_enabled', '_return_false');
add_filter('rest_jsonp_enabled', '_return_false');
remove_action('wp_head', 'rest_output_link_wp_head', 10);
remove_action('wp_head', 'wp_oembed_add_discovery_links', 10);

//去掉Wordpres挂件
function disable_dashboard_widgets()
{
    //remove_meta_box('dashboard_recent_comments', 'dashboard', 'normal');//近期评论
    //remove_meta_box('dashboard_recent_drafts', 'dashboard', 'normal');//近期草稿
    remove_meta_box('dashboard_primary', 'dashboard', 'core'); //wordpress博客
    remove_meta_box('dashboard_secondary', 'dashboard', 'core'); //wordpress其它新闻
    remove_meta_box('dashboard_right_now', 'dashboard', 'core'); //wordpress概况
    //remove_meta_box('dashboard_incoming_links', 'dashboard', 'core');//wordresss链入链接
    //remove_meta_box('dashboard_plugins', 'dashboard', 'core');//wordpress链入插件
    //remove_meta_box('dashboard_quick_press', 'dashboard', 'core');//wordpress快速发布
}
add_action('admin_menu', 'disable_dashboard_widgets');

//禁用embeds功能
function disable_embeds_init()
{
    /* @var WP $wp */
    global $wp;
    $wp->public_query_vars = array_diff($wp->public_query_vars, array(
        'embed',
    ));
    remove_action('rest_api_init', 'wp_oembed_register_route');
    add_filter('embed_oembed_discover', '__return_false');
    remove_filter('oembed_dataparse', 'wp_filter_oembed_result', 10);
    remove_action('wp_head', 'wp_oembed_add_discovery_links');
    remove_action('wp_head', 'wp_oembed_add_host_js');
    add_filter('tiny_mce_plugins', 'disable_embeds_tiny_mce_plugin');
    add_filter('rewrite_rules_array', 'disable_embeds_rewrites');
}
add_action('init', 'disable_embeds_init', 9999);
function disable_embeds_tiny_mce_plugin($plugins)
{
    return array_diff($plugins, array('wpembed'));
}
function disable_embeds_rewrites($rules)
{
    foreach ($rules as $rule => $rewrite) {
        if (false !== strpos($rewrite, 'embed = true')) {
            unset($rules[$rule]);
        }
    }
    return $rules;
}
function disable_embeds_remove_rewrite_rules()
{
    add_filter('rewrite_rules_array', 'disable_embeds_rewrites');
    flush_rewrite_rules();
}
register_activation_hook(__FILE__, 'disable_embeds_remove_rewrite_rules');
function disable_embeds_flush_rewrite_rules()
{
    remove_filter('rewrite_rules_array', 'disable_embeds_rewrites');
    flush_rewrite_rules();
}
register_deactivation_hook(__FILE__, 'disable_embeds_flush_rewrite_rules');

//移除头部的s.w.org，s.w.org预获取表情和头像国内无法访问
function remove_dns_prefetch( $hints, $relation_type ) {
if ( 'dns-prefetch' === $relation_type ) {
return array_diff( wp_dependencies_unique_hosts(), $hints );
}
return $hints;
}
add_filter( 'wp_resource_hints', 'remove_dns_prefetch', 10, 2 );

//完全禁用Gutenberg编辑器。
add_filter('use_block_editor_for_post_type', '__return_false', 10);
//不要加载与Gutenberg相关的样式表。
add_action( 'wp_enqueue_scripts', 'remove_block_css', 100 );
function remove_block_css() {
wp_dequeue_style( 'wp-block-library' ); // WordPress core
wp_dequeue_style( 'wp-block-library-theme' ); // WordPress core
wp_dequeue_style( 'wc-block-style' ); // WooCommerce
wp_dequeue_style( 'storefront-gutenberg-blocks' ); // Storefront theme
}

//禁用文章修订版
define('WP_POST_REVISIONS', false);

//禁止自动保存
//找到下面两个文件
//wp-admin/post-new.php
//wp-admin/post.php
//注释wp_enqueue_script( 'autosave' );

//关闭版本管理  需要删除之前的版本执行SQL
//DELETE FROM wp_posts WHERE post_type = "revision";
define('WP_POST_REVISIONS', false);


//给wordpress添加关键词与描述
add_action ( 'wp_head', 'wp_keywords' ); // 添加关键字
add_action ( 'wp_head', 'wp_description' ); // 添加页面描述

/**
 +----------------------------------------------------------
 * 站点关键字
 +----------------------------------------------------------
 * @return string
 +----------------------------------------------------------
 */
function wp_keywords() {
    global $s, $post;
    $keywords = '';
    if (is_single ()) {  //如果是文章页，关键词则是：标签+分类ID
        if (get_the_tags ( $post->ID )) {
            foreach ( get_the_tags ( $post->ID ) as $tag )
                $keywords .= $tag->name . ', ';
        }
        foreach ( get_the_category ( $post->ID ) as $category )
            $keywords .= $category->cat_name . ', ';
        $keywords = substr_replace ( $keywords, '', - 2 );
    } elseif (is_home ()) {
        $keywords = '我是主页关键词';  //主页关键词设置
    } elseif (is_tag ()) {  //标签页关键词设置
        $keywords = single_tag_title ( '', false );
    } elseif (is_category ()) {//分类页关键词设置
        $keywords = single_cat_title ( '', false );
    } elseif (is_search ()) {//搜索页关键词设置
        $keywords = esc_html ( $s, 1 );
    } else {//默认页关键词设置
        $keywords = trim ( wp_title ( '', false ) );
    }
    if ($keywords) {  //输出关键词
        echo "<meta name=\"keywords\" content=\"$keywords\" />\n";
    }
}


/**
 +----------------------------------------------------------
 * 站点描述
 +----------------------------------------------------------
 * @return string
 +----------------------------------------------------------
 */
function wp_description() {
    global $s, $post;
    $description = '';
    $blog_name = get_bloginfo ( 'name' );
    if (is_singular ()) {  //文章页如果存在描述字段，则显示描述，否则截取文章内容
        if (! empty ( $post->post_excerpt )) {
            $text = $post->post_excerpt;
        } else {
            $text = $post->post_content;
        }
        $description = trim ( str_replace ( array (
                "\r\n",
                "\r",
                "\n",
                "　",
                " "
        ), " ", str_replace ( "\"", "'", strip_tags ( $text ) ) ) );
        if (! ($description))
            $description = $blog_name . "-" . trim ( wp_title ( '', false ) );
    } elseif (is_home ()) {//首页显示描述设置
        $description = $blog_name . "-".'首页要显示的描述'; // 首頁要自己加
    } elseif (is_tag ()) {//标签页显示描述设置
        $description = $blog_name . "有关 '" . single_tag_title ( '', false ) . "' 的文章";
    } elseif (is_category ()) {//分类页显示描述设置
        $description = $blog_name . "有关 '" . single_cat_title ( '', false ) . "' 的文章";
    } elseif (is_archive ()) {//文档页显示描述设置
        $description = $blog_name . "在: '" . trim ( wp_title ( '', false ) ) . "' 的文章";
    } elseif (is_search ()) {//搜索页显示描述设置
        $description = $blog_name . ": '" . esc_html ( $s, 1 ) . "' 的搜索結果";
    } else {//默认其他页显示描述设置
        $description = $blog_name . "有关 '" . trim ( wp_title ( '', false ) ) . "' 的文章";
    }
    //输出描述
    $description = mb_substr ( $description, 0, 220, 'utf-8' ) . '..';
    echo "<meta name=\"description\" content=\"$description\" />\n";
}
<?php
//用户自定义头像功能
require get_template_directory() . '/inc/author-avatars.php';
//优化网站代码
require get_template_directory() . '/inc/optimization-speed.php';
//主题自带插件
require get_template_directory() . '/inc/customized-plugin.php';
//底部音乐
require get_template_directory() . '/inc/api.php';

//注册菜单的名称
function register_my_menus() {
	register_nav_menus(
		array('header-menu' => __('首页'))
	);
}
add_action('init', 'register_my_menus'); //初始化的时候启用

//为指定菜单的li标签设置样式
function wpdocs_channel_nav_class($classes, $item, $args) {
	//在进行涉及变量的逻辑比较时，始终将变量放在右侧，将常量，文字或函数调用放在左侧。如果双方都不是变量，则顺序并不重要。
	//除非绝对必要，否则不应使用松散的比较，因为它们的行为可能会产生误导。
	if ('header-menu' === $args->theme_location) {
		unset($classes); //将数组清空
		$classes = array('nav-item');
	}

	return $classes;
}
add_filter('nav_menu_css_class', 'wpdocs_channel_nav_class', 10, 4);

//删除
function sonliss_menu_link_atts($atts, $item, $args) {
	$atts['class'] = 'nav-link';
	return $atts;
}
add_filter('nav_menu_link_attributes', 'sonliss_menu_link_atts', 10, 3);

//自定义头像
// add_filter( 'avatar_defaults', 'newgravatar' );

function newgravatar($avatar_defaults) {
	$myavatar = get_bloginfo('template_directory') . '/assets/images/gravatar.jpg';
	$avatar_defaults[$myavatar] = "Jasmine默认头像";
	return $avatar_defaults;
}
/**
 * 说明：直接去掉函数 comment_class() 和 body_class() 中输出的 "comment-author-" 和 "author-"
 */
function lxtx_comment_body_class($content) {
	$pattern = "/(.*?)([^>]*)author-([^>]*)(.*?)/i";
	$replacement = '$1$4';
	$content = preg_replace($pattern, $replacement, $content);
	return $content;
}
// add_filter('comment_class', 'lxtx_comment_body_class');
// add_filter('body_class', 'lxtx_comment_body_class');

add_theme_support('post-thumbnails', array('post')); // 给日志启用日志缩略图
add_theme_support('post-thumbnails', array('page')); // 给页面启用日志缩略图

//将摘要长度更改为20个字
function wpdocs_custom_excerpt_length($length) {
	return 20;
}
add_filter('excerpt_length', 'wpdocs_custom_excerpt_length', 999);

//添加一个自定义背景
//选择填满屏幕
add_theme_support('custom-background');

//随机文章
function random_posts($posts_num = 5, $before = '<li>', $after = '</li>') {
	global $wpdb;
	$sql = "SELECT ID, post_title,guid
            FROM $wpdb->posts
            WHERE post_status = 'publish' ";
	$sql .= "AND post_title != '' ";
	$sql .= "AND post_password ='' ";
	$sql .= "AND post_type = 'post' ";
	$sql .= "ORDER BY RAND() LIMIT 0 , $posts_num ";
	$randposts = $wpdb->get_results($sql);
	$output = '';
	foreach ($randposts as $randpost) {
		$post_title = stripslashes($randpost->post_title);
		$lenth = mb_strlen($post_title, 'utf-8');
		if ($lenth >= 10) {
			$post_title_short = mb_substr($post_title, 0, 10, 'utf-8') . "...";
		} else {
			$post_title_short = $post_title;
		}
		$permalink = get_permalink($randpost->ID);
		$output .= $before . '<a href="'
			. $permalink . '"  rel="bookmark" title="';
		$output .= $post_title . '">' . $post_title_short . '</a>';
		$output .= $after;
	}
	echo $output;
}

//添加友情链接
add_filter('pre_option_link_manager_enabled', '__return_true');

/*
 * 删除自带小工具
 */
function unregister_default_widgets() {
	unregister_widget("WP_Widget_Pages");
	unregister_widget("WP_Widget_Calendar");
	unregister_widget("WP_Widget_Archives");
	unregister_widget("WP_Widget_Links");
	unregister_widget("WP_Widget_Meta");
	unregister_widget("WP_Widget_Search");
	//unregister_widget("WP_Widget_Text");
	unregister_widget("WP_Widget_Categories");
	unregister_widget("WP_Widget_Recent_Posts");
	//unregister_widget("WP_Widget_Recent_Comments");
	//unregister_widget("WP_Widget_RSS");
	//unregister_widget("WP_Widget_Tag_Cloud");
	unregister_widget("WP_Nav_Menu_Widget");
}
add_action("widgets_init", "unregister_default_widgets", 11);

//恋爱时间
function echo_love_time() {
	$love_data = (get_option('jasmine_loveDate')) ? get_option('jasmine_loveDate') : null;
	$start_data = (get_option('jasmine_startDate')) ? get_option('jasmine_startDate') : null;
	$author_data = (get_option('jasmine_author_data')) ? get_option('jasmine_author_data') : null;
	$siteUrl = get_bloginfo('url');
	$site_name = get_bloginfo('name');
	$author_name = $site_name; //默认为站点名称
	$clipboardCopyright = esc_attr(get_option('jasmine_copyright')) == 'checked' ? 'true' : 'false';
	if (is_singular('post')) {
		$author_name = get_the_author_meta('user_nicename');
	}
	?>
    <script type="text/javascript">
        var jasmineConfig = {"siteUrl":"<?php echo $site_name ?>","siteStartTime":"<?php echo $start_data; ?>","loveStartTime":"<?php echo $love_data; ?>","ajaxUrl":"","commentEditAgain":"1","loadPjax":"","version":"5.2.5","clipboardCopyright":"<?php echo $clipboardCopyright; ?>","author_name":"<?php echo $author_name; ?>","site_name":"<?php echo $site_name ?>","author_data":"<?php echo $author_data ?>"};
    </script>
    <?php
}
add_action("wp_footer", "echo_love_time");

// 文章浏览量
function restyle_text($number) {
	if ($number >= 1000) {
		return round($number / 1000, 2) . 'k';
	} else {
		return $number;
	}
}
function getPostViews($postID) {
	$count_key = 'post_views_count';
	$count = get_post_meta($postID, $count_key, true);
	if ($count == '') {
		delete_post_meta($postID, $count_key);
		add_post_meta($postID, $count_key, '0');
		return "0";
	}
	return restyle_text($count);
}
//为文章或者页面添加
function setPostViews($postID) {
	$count_key = 'post_views_count';
	$count = get_post_meta($postID, $count_key, true);
	if ($count == '') {
		$count = 0;
		delete_post_meta($postID, $count_key);
		add_post_meta($postID, $count_key, '0');
	} else {
		$count++;
		update_post_meta($postID, $count_key, $count);
	}
}
//计算浏览量总和
function getCountViews() {
	global $wpdb;
	$sum = $wpdb->get_var ("SELECT sum(meta_value) FROM wp_postmeta WHERE meta_key = 'post_views_count'");
	echo $sum;
}

// 激活主题创建页面
function memory_add_page($title,$slug,$page_template=''){
    $allPages = get_pages();//获取所有页面
    $exists = false;
    foreach( $allPages as $page ){
        //通过页面别名来判断页面是否已经存在
        if( strtolower( $page->post_name ) == strtolower( $slug ) ){
            $exists = true;
        }
    }
    if( $exists == false ) {
        $new_page_id = wp_insert_post(
            array(
                'post_title' => $title,
                'post_type'     => 'page',
                'post_name'  => $slug,
                'comment_status' => 'open',
                'ping_status' => 'closed',
                'post_content' => '',
                'post_status' => 'publish',
                'post_author' => 1,
                'menu_order' => 0
            )
        );
        //如果插入成功 且设置了模板
        if($new_page_id && $page_template!=''){
            //保存页面模板信息
            update_post_meta($new_page_id, '_wp_page_template',  $page_template);
        }
    }
}
function memory_add_pages() {
    global $pagenow;
    //判断是否为激活主题页面
    if ( 'themes.php' == $pagenow && isset( $_GET['activated'] ) ){
        //memory_add_page('归档','post-archives','post-archives.php');//页面标题、别名、页面模板
        memory_add_page('友情链接','friend-link','friend-link.php');
    }
}
add_action( 'load-themes.php', 'memory_add_pages' );
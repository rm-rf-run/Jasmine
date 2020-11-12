<?php
//用户自定义头像功能
require get_template_directory() . '/inc/author-avatars.php';
//优化网站代码
require get_template_directory() . '/inc/optimization-speed.php';
//主题自带插件
require get_template_directory() . '/inc/customized-plugin.php';
//网站SEO
require get_template_directory() . '/inc/seo.php';
//导入OwO表情
require get_template_directory() . '/inc/OwO.php';
//定义数据
require get_template_directory() . '/inc/jasmineConfig.php';

//markdown
require get_template_directory() . '/inc/markdown/MarkdownInterface.php';
require get_template_directory() . '/inc/markdown/Markdown.php';
require get_template_directory() . '/inc/markdown/MarkdownExtra.php';


//注册菜单的名称
function register_my_menus()
{
    register_nav_menus(
        array('header-menu' => __('首页'))
    );
}
add_action('init', 'register_my_menus'); //初始化的时候启用

//为指定菜单的li标签设置样式
function wpdocs_channel_nav_class($classes, $item, $args)
{
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
function sonliss_menu_link_atts($atts, $item, $args)
{
    $atts['class'] = 'nav-link';
    return $atts;
}
add_filter('nav_menu_link_attributes', 'sonliss_menu_link_atts', 10, 3);

//自定义头像
// add_filter( 'avatar_defaults', 'newgravatar' );

function newgravatar($avatar_defaults)
{
    $myavatar                   = get_bloginfo('template_directory') . '/assets/images/gravatar.jpg';
    $avatar_defaults[$myavatar] = "Jasmine默认头像";
    return $avatar_defaults;
}
/**
 * 说明：直接去掉函数 comment_class() 和 body_class() 中输出的 "comment-author-" 和 "author-"
 */
function lxtx_comment_body_class($content)
{
    $pattern     = "/(.*?)([^>]*)author-([^>]*)(.*?)/i";
    $replacement = '$1$4';
    $content     = preg_replace($pattern, $replacement, $content);
    return $content;
}
// add_filter('comment_class', 'lxtx_comment_body_class');
// add_filter('body_class', 'lxtx_comment_body_class');

add_theme_support('post-thumbnails', array('post')); // 给日志启用日志缩略图
add_theme_support('post-thumbnails', array('page')); // 给页面启用日志缩略图

//将摘要长度更改为20个字
function wpdocs_custom_excerpt_length($length)
{
    return 20;
}
add_filter('excerpt_length', 'wpdocs_custom_excerpt_length', 999);

//添加一个自定义背景
//选择填满屏幕
// add_theme_support('custom-background');

//随机文章
function random_posts($posts_num = 5, $before = '<li>', $after = '</li>')
{
    global $wpdb;
    $sql = "SELECT ID, post_title,guid
            FROM $wpdb->posts
            WHERE post_status = 'publish' ";
    $sql .= "AND post_title != '' ";
    $sql .= "AND post_password ='' ";
    $sql .= "AND post_type = 'post' ";
    $sql .= "ORDER BY RAND() LIMIT 0 , $posts_num ";
    $randposts = $wpdb->get_results($sql);
    $output    = '';
    foreach ($randposts as $randpost) {
        $post_title = stripslashes($randpost->post_title);
        $lenth      = mb_strlen($post_title, 'utf-8');
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

// 文章浏览量
function restyle_text($number)
{
    if ($number >= 1000) {
        return round($number / 1000, 2) . 'k';
    } else {
        return $number;
    }
}
function getPostViews($postID)
{
    $count_key = 'post_views_count';
    $count     = get_post_meta($postID, $count_key, true);
    if ($count == '') {
        delete_post_meta($postID, $count_key);
        add_post_meta($postID, $count_key, '0');
        return "0";
    }
    return restyle_text($count);
}
//为文章或者页面添加
function setPostViews($postID)
{
    $count_key = 'post_views_count';
    $count     = get_post_meta($postID, $count_key, true);
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
function getCountViews()
{
    global $wpdb;
    $sum = $wpdb->get_var("SELECT sum(meta_value) FROM wp_postmeta WHERE meta_key = 'post_views_count'");
    echo $sum;
}

// 激活主题创建页面
function memory_add_page($title, $slug, $page_template = '')
{
    $allPages = get_pages(); //获取所有页面
    $exists   = false;
    foreach ($allPages as $page) {
        //通过页面别名来判断页面是否已经存在
        if (strtolower($page->post_name) == strtolower($slug)) {
            $exists = true;
        }
    }
    if ($exists == false) {
        $new_page_id = wp_insert_post(
            array(
                'post_title'     => $title,
                'post_type'      => 'page',
                'post_name'      => $slug,
                'comment_status' => 'open',
                'ping_status'    => 'closed',
                'post_content'   => '',
                'post_status'    => 'publish',
                'post_author'    => 1,
                'menu_order'     => 0,
            )
        );
        //如果插入成功 且设置了模板
        if ($new_page_id && $page_template != '') {
            //保存页面模板信息
            update_post_meta($new_page_id, '_wp_page_template', $page_template);
        }
    }
}
function memory_add_pages()
{
    global $pagenow;
    //判断是否为激活主题页面
    if ('themes.php' == $pagenow && isset($_GET['activated'])) {
        memory_add_page('归档', 'post-archives', 'post-archives.php'); //页面标题、别名、页面模板
        memory_add_page('友情链接', 'friend-link', 'friend-link.php');
    }
}
add_action('load-themes.php', 'memory_add_pages');

//禁用默认小工具
add_action('widgets_init', 'xintheme_unregisterWidgets');
function xintheme_unregisterWidgets()
{
    unregister_widget('WP_Widget_Archives');
    unregister_widget('WP_Widget_Calendar');
    unregister_widget('WP_Widget_Categories');
    unregister_widget('WP_Widget_Links');
    unregister_widget('WP_Widget_Media_Audio');
    unregister_widget('WP_Widget_Media_Video');
    unregister_widget('WP_Widget_Media_Gallery');
    unregister_widget('WP_Widget_Custom_HTML');
    unregister_widget('WP_Widget_Media_Image');
    unregister_widget('WP_Widget_Text');
    unregister_widget('WP_Widget_Meta');
    unregister_widget('WP_Widget_Pages');
    unregister_widget('WP_Widget_Recent_Comments');
    unregister_widget('WP_Widget_Recent_Posts');
    unregister_widget('WP_Widget_RSS');
    unregister_widget('WP_Widget_Search');
    unregister_widget('WP_Widget_Tag_Cloud');
    unregister_widget('WP_Nav_Menu_Widget');
}

// 文章归档
function archives_list()
{
    if (!$output = get_option('archives_list')) {
        $output    = '<div class="archives-content">';
        $the_query = new WP_Query('posts_per_page=-1&ignore_sticky_posts=1&post_type=post');
        $year      = 0;
        $mon       = 0;
        $i         = 0;
        $j         = 0;
        while ($the_query->have_posts()): $the_query->the_post();
            $year_tmp = get_the_time('Y');
            $mon_tmp  = get_the_time('M');
            $y        = $year;
            $m        = $mon;
            if ($mon != $mon_tmp && $mon > 0) {
                $output .= '</ul></li>';
            }

            if ($year != $year_tmp && $year > 0) {
                $output .= '</ul>';
            }

            if ($year != $year_tmp) {
                $year = $year_tmp;
                $output .= '<h3 class="archives_year">' . $year . ' 年</h3><ul class="archives_mon_list">'; //输出年份
            }
            if ($mon != $mon_tmp) {
                $mon = $mon_tmp;
                $output .= '<li><span class="archives_mon">' . $mon . '</span><ul class="archives_post_list">'; //输出月份
            }
            $output .= '<li>' . '<a class="no-des" href="' . get_permalink() . '">' . get_the_time('j日: ') . get_the_title() . '(' . get_comments_number('0', '1', '%') . '条评论)</a></li>'; //输出文章日期和标题
        endwhile;
        wp_reset_postdata();
        $output .= '</ul></li></ul></div>';
        update_option('archives_list', $output);
    }
    echo $output;
}
function clear_archives_list_cache()
{
    update_option('archives_list', ''); // 清空 archives_list
}
add_action('save_post', 'clear_archives_list_cache'); // 新发表文章/修改文章时

//评论支持Markdown
use \Michelf\MarkdownExtra;
add_filter('pre_comment_content', 'markdownify_comment');
function markdownify_comment($comment_content)
{

    return MarkdownExtra::defaultTransform($comment_content);

}

//评论框字段顺序
//Comment Field Order
add_filter( 'comment_form_fields', 'mo_comment_fields_custom_order' );
function mo_comment_fields_custom_order( $fields ) {
    $comment_field = $fields['comment'];
    $author_field = $fields['author'];
    $email_field = $fields['email'];
    $url_field = $fields['url'];
    $cookies_field = $fields['cookies'];
    unset( $fields['comment'] );
    unset( $fields['author'] );
    unset( $fields['email'] );
    unset( $fields['url'] );
    unset( $fields['cookies'] );
    // the order of fields is the order below, change it as needed:
    $fields['author'] = $author_field;
    $fields['email'] = $email_field;
    $fields['url'] = $url_field;
    $fields['comment'] = $comment_field;
    $fields['cookies'] = $cookies_field;
    // done ordering, now return the fields:
    return $fields;
}

// 数据库插入评论表单的qq字段
add_action('wp_insert_comment','jasmine_sql_insert_qq_field',10,2);
function jasmine_sql_insert_qq_field($comment_ID,$commmentdata) {
    $qq = isset($_POST['author_qq']) ? $_POST['author_qq'] : false;
    update_comment_meta($comment_ID,'author_qq',$qq); // author_qq 是表单name值，也是存储在数据库里的字段名字
}
// 后台评论中显示qq字段
add_filter( 'manage_edit-comments_columns', 'add_comments_columns' );
add_action( 'manage_comments_custom_column', 'output_comments_qq_columns', 10, 2 );
function add_comments_columns( $columns ){
    $columns[ 'author_qq' ] = __( 'QQ号' );        // 新增列名称
    return $columns;
}
function output_comments_qq_columns( $column_name, $comment_id ){
    switch( $column_name ) {
        case "author_qq" :
         // 这是输出值，可以拿来在前端输出，这里已经在钩子manage_comments_custom_column上输出了
        echo get_comment_meta( $comment_id, 'author_qq', true );
        break;
    }
}
/**
 * 修改后台头像
 * 若有qq字段则显示qq头像，若没有则显示gravatar
 */

add_filter( 'get_avatar', 'jasmine_change_avatar', 10, 3 );
function jasmine_change_avatar($avatar){
    global $comment;
    if( get_comment_meta( $comment->comment_ID, 'author_qq', true ) ){
        $qq_number =  get_comment_meta( $comment->comment_ID, 'author_qq', true );
        $qqavatar = file_get_contents('http://ptlogin2.qq.com/getface?appid=1006102&imgtype=3&uin=' . $qq_number);
                preg_match('/:\"([^\"]*)\"/i', $qqavatar, $matches); // 匹配 http: 和 &t 之间的字符串
        return '<img src="'.$matches[1].'" class="avatar avatar-40 photo" width="40" height="40"  alt="qq_avatar" />';
    }else{
        return $avatar ;
    }
}

/**
 * Router
 */
add_action('rest_api_init', function () {
    register_rest_route('qqinfo', '/qqinfo', array(
        'methods' => 'GET',
        'callback' => 'portraitCallBack',
    ));
    // register_rest_route('qqinfo', '/qqinfo', array(
    //     'methods' => 'GET',
    //     'callback' => 'qqavatarCallBack',
    // ));
});

function portraitCallBack(){
    error_log("portraitCallBack");
}

function qqavatarCallBack(){
    error_log("qqavatarCallBack");
    $qq = $_GET['qq'];
}
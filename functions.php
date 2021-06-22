<?php
define('JASMINE_VERSION', wp_get_theme()->get('Version'));
//注册菜单的名称
function register_my_menus()
{
    register_nav_menus(
        array('header-menu' => __('首页', 'jasmine'))
    );
}

add_action('init', 'register_my_menus'); //初始化的时候启用

/**
 * 为指定菜单的li标签设置样式
 * @param $classes
 * @param $item
 * @param $args
 * @return string[]
 */
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

/**
 * 删除菜单一些link的attributes
 *
 * @param $atts
 * @param $item
 * @param $args
 * @return mixed
 */
function sonliss_menu_link_atts($atts, $item, $args)
{
    $atts['class'] = 'nav-link';
    return $atts;
}

add_filter('nav_menu_link_attributes', 'sonliss_menu_link_atts', 10, 3);

// add_filter( 'avatar_defaults', 'newgravatar' );

/**
 * 自定义头像
 * @param $avatar_defaults
 * @return mixed
 */
function newgravatar($avatar_defaults)
{
    $myavatar = get_bloginfo('template_directory') . '/assets/images/gravatar.jpg';
    $avatar_defaults[$myavatar] = "Jasmine默认头像";
    return $avatar_defaults;
}

/**
 * 说明：直接去掉函数 comment_class() 和 body_class() 中输出的 "comment-author-" 和 "author-"
 *
 * @param $content
 * @return string|string[]|null
 */
function lxtx_comment_body_class($content)
{
    $pattern = "/(.*?)([^>]*)author-([^>]*)(.*?)/i";
    $replacement = '$1$4';
    $content = preg_replace($pattern, $replacement, $content);
    return $content;
}

// add_filter('comment_class', 'lxtx_comment_body_class');
// add_filter('body_class', 'lxtx_comment_body_class');

add_theme_support('post-thumbnails', array('post')); // 给日志启用日志缩略图
add_theme_support('post-thumbnails', array('page')); // 给页面启用日志缩略图

// 去除顶部工具栏
show_admin_bar(false);

/**
 * 将摘要长度更改为20个字
 *
 * @param $length
 * @return int
 */
function wpdocs_custom_excerpt_length($length)
{
    return 20;
}

add_filter('excerpt_length', 'wpdocs_custom_excerpt_length', 999);

/**
 * 热门文章 缓存五分钟 默认展示5条
 *
 * @param int $posts_num
 * @param string $before
 * @param string $after
 */
function popular_posts($posts_num = 5, $before = '<li>', $after = '</li>')
{
    if ($cache = wp_cache_get('right_popular_posts', 'popular_posts')) {
        echo $cache;
    } else {
        global $wpdb;
        $sql = "SELECT t1.ID, t1.post_title, t1.guid, t2.meta_value as postView
            FROM $wpdb->posts t1 left join $wpdb->postmeta t2 on t1.id = t2.post_id and t2.`meta_key`='post_views_count'
            WHERE post_status = 'publish' ";
        $sql .= "AND t1.post_title != '' ";
        $sql .= "AND t1.post_password ='' ";
        $sql .= "AND t1.post_type = 'post' ORDER BY CAST(t2.meta_value AS DECIMAL) DESC LIMIT 0, $posts_num";
        $popularPosts = $wpdb->get_results($sql);
        $output = '';
        foreach ($popularPosts as $popularPost) {
            $post_title = stripslashes($popularPost->post_title);
            $length = mb_strlen($post_title, 'utf-8');
            if ($length >= 10) {
                $post_title_short = mb_substr($post_title, 0, 10, 'utf-8') . "...";
            } else {
                $post_title_short = $post_title;
            }
            $permalink = get_permalink($popularPost->ID);
            $output .= $before . '<a href="'
                . $permalink . '"  rel="bookmark" title="';
            $output .= $post_title . '">' . $post_title_short . '<i class="fa fa-fire popular-posts" aria-hidden="true"></i><span class="popular-posts-view">' . $popularPost->postView . '</span>' . '</a>';
            $output .= $after;
        }
        echo $output;
        wp_cache_add('right_popular_posts', $output, 'popular_posts', 5 * MINUTE_IN_SECONDS);
    }
}

//添加友情链接
add_filter('pre_option_link_manager_enabled', '__return_true');

/**
 * 文章浏览量
 *
 * @param $number
 * @return string
 */
function restyle_text($number)
{
    if ($number >= 1000) {
        return round($number / 1000, 2) . 'k';
    } else {
        return $number;
    }
}

/**
 * 通过文章id获取文章浏览量
 *
 * @param $postID
 * @return string
 */
function getPostViews($postID)
{
    $count_key = 'post_views_count';
    $count = get_post_meta($postID, $count_key, true);
    if ($count == '') {
        delete_post_meta($postID, $count_key);
        add_post_meta($postID, $count_key, '0');
        return "0";
    }
    return restyle_text($count);
}

/**
 * 为文章或者页面添加浏览量
 *
 * @param $postID
 */
function setPostViews($postID)
{
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

/**
 * 激活主题创建页面
 *
 * @param $title
 * @param $slug
 * @param string $page_template
 */
function jasmine_add_page($title, $slug, $page_template = '')
{
    $allPages = get_pages(); //获取所有页面
    $exists = false;
    foreach ($allPages as $page) {
        //通过页面别名来判断页面是否已经存在
        if (strtolower($page->post_name) == strtolower($slug)) {
            $exists = true;
        }
    }
    if ($exists == false) {
        $new_page_id = wp_insert_post(
            array(
                'post_title' => $title,
                'post_type' => 'page',
                'post_name' => $slug,
                'comment_status' => 'open',
                'ping_status' => 'closed',
                'post_content' => '',
                'post_status' => 'publish',
                'post_author' => 1,
                'menu_order' => 0,
            )
        );
        //如果插入成功 且设置了模板
        if ($new_page_id && $page_template != '') {
            //保存页面模板信息
            update_post_meta($new_page_id, '_wp_page_template', $page_template);
        }
    }
}


function jasmine_add_pages()
{
    global $pagenow;
    //判断是否为激活主题页面
    if ('themes.php' == $pagenow && isset($_GET['activated'])) {
        jasmine_add_page('归档', 'post-archives', 'post-archives.php'); //页面标题、别名、页面模板
        jasmine_add_page('友情链接', 'friend-link', 'friend-link.php');
    }
}

add_action('after_switch_theme ', 'jasmine_add_pages');

//禁用默认小工具
add_action('widgets_init', 'theme_unregisterWidgets');
function theme_unregisterWidgets()
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

/**
 * 文章归档
 */
function archives_list()
{
    if (!$output = get_option('archives_list')) {
        $output = '<div class="archives-content">';
        $the_query = new WP_Query('posts_per_page=-1&ignore_sticky_posts=1&post_type=post');
        $year = 0;
        $mon = 0;
        $i = 0;
        $j = 0;
        while ($the_query->have_posts()): $the_query->the_post();
            $year_tmp = get_the_time('Y');
            $mon_tmp = get_the_time('M');
            $y = $year;
            $m = $mon;
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

add_filter('comment_form_fields', 'mo_comment_fields_custom_order');
/**
 * 评论框字段顺序
 *
 * @param $fields
 * @return mixed
 */
function mo_comment_fields_custom_order($fields)
{
    $comment_field = $fields['comment'];
    $author_field = $fields['author'];
    $email_field = $fields['email'];
    $url_field = $fields['url'];
    $cookies_field = $fields['cookies'];
    unset($fields['comment']);
    unset($fields['author']);
    unset($fields['email']);
    unset($fields['url']);
    unset($fields['cookies']);
    // the order of fields is the order below, change it as needed:
    $fields['author'] = $author_field;
    $fields['email'] = $email_field;
    $fields['url'] = $url_field;
    $fields['comment'] = $comment_field;
    $fields['cookies'] = $cookies_field;
    // done ordering, now return the fields:
    return $fields;
}

add_action('wp_insert_comment', 'jasmine_sql_insert_qq_field', 10, 2);
/**
 * 数据库插入评论表单的qq字段
 *
 * @param $comment_ID
 * @param $commmentdata
 */
function jasmine_sql_insert_qq_field($comment_ID, $commmentdata)
{
    $qq = isset($_POST['author_qq']) ? $_POST['author_qq'] : false;
    update_comment_meta($comment_ID, 'author_qq', $qq); // author_qq 是表单name值，也是存储在数据库里的字段名字
}

// 后台评论中显示qq字段
add_filter('manage_edit-comments_columns', 'add_comments_columns');
add_action('manage_comments_custom_column', 'output_comments_qq_columns', 10, 2);
function add_comments_columns($columns)
{
    $columns['author_qq'] = __('QQ号'); // 新增列名称
    return $columns;
}

function output_comments_qq_columns($column_name, $comment_id)
{
    switch ($column_name) {
        case "author_qq":
            // 这是输出值，可以拿来在前端输出，这里已经在钩子manage_comments_custom_column上输出了
            echo get_comment_meta($comment_id, 'author_qq', true);
            break;
    }
}

add_filter('get_avatar', 'jasmine_change_avatar', 10, 3);

/**
 * 修改后台头像
 * 若有qq字段则显示qq头像，若没有则显示gravatar
 *
 * @param $avatar
 * @return string
 */
function jasmine_change_avatar($avatar)
{
    global $comment;
    if ($comment) {
        $qq_number = get_comment_meta($comment->comment_ID, 'author_qq', true);
        if ($qq_number) {
            $cacheKey = "admin_avatar" . $qq_number;
            if ($cache = wp_cache_get($cacheKey, 'qq_avatar')) {
                echo __($cache);
            }else{
                $qqavatar = file_get_contents('https://ptlogin2.qq.com/getface?appid=1006102&imgtype=3&uin=' . $qq_number);
                // preg_match 匹配 http: 和 &t 之间的字符串
                // 如果提供了参数matches，它将被填充为搜索结果。
                // $matches[0]将包含完整模式匹配到的文本,
                // $matches[1]将包含第一个捕获子组匹配到的文本，以此类推。
                preg_match('/:\"([^\"]*)\"/i', $qqavatar, $matches);
                $gravatar = 'data:image/jpg;base64,' . chunk_split(base64_encode(file_get_contents($matches[1])));
                $img = '<img src="' . $gravatar . '" data-src="' . $gravatar . '" class="avatar avatar-40 photo lazyload" width="40" height="40"  alt="qq_avatar" />';
                wp_cache_add($cacheKey, $img, 'qq_avatar', 12 * HOUR_IN_SECONDS);
                return $img;
            }
        } else {
            $randomAvatar = 'https://cdn.jsdelivr.net/gh/rm-rf-run/jasmine/assets/images/random/ic_avatar'.mt_rand(1,11).'.jpg';
            $img = "<img src='{$randomAvatar}' data-src='{$randomAvatar}' class='avatar avatar-40 photo lazyload' width='40' height='40'  alt='qq_avatar' />";
            return $img;
        }
    }
}

define('OPTIONS_FRAMEWORK_DIRECTORY', get_template_directory_uri() . '/inc/');

require_once dirname(__FILE__) . '/inc/options-framework.php';

$optionsfile = locate_template('options.php');
load_template($optionsfile);

function prefix_options_menu_filter($menu)
{
    $menu['mode'] = 'menu';
    $menu['page_title'] = __('jasmine主题设置', 'textdomain');
    $menu['menu_title'] = __('jasmine主题设置', 'textdomain');
    $menu['menu_slug'] = 'jasmine主题设置';
    return $menu;
}

add_filter('optionsframework_menu', 'prefix_options_menu_filter');

add_action('bilbil_action', 'add_bilbil_data');
do_action('bilbil_action');
// 定时任务里面设置每天更新一次数据
function add_bilbil_data()
{
    if (jasmine_option('jasmine_bilbil_uid')) {
        $bilbil_uid = jasmine_option('jasmine_bilbil_uid');
        //使用file_get_contents需要将extension=php_openssl.dll前面的;去掉
        /**
         * openSSL是一个用C++写开源的SSL加密库，https=http+SSL，所有当你打开这个模块*就可以使用在URL前缀https的请求了。去掉; *注释后，重新启动Apache服务器，再访问，就不会有这个错误了。
         *
         */
        if ($bilbil_uid == get_option('jasmine_bilbil_uid')) {
            return;
        }
        $b1 = file_get_contents("compress.zlib://https://api.bilibili.com/x/space/acc/info?mid=" . $bilbil_uid . "&jsonp=jsonp");
        $b2 = file_get_contents("compress.zlib://https://api.bilibili.com/x/relation/stat?vmid=" . $bilbil_uid . "&jsonp=jsonp");
        $results1 = json_decode($b1, true);
        $results = json_decode($b2, true);
        $gravatar = 'data:image/jpg;base64,' . chunk_split(base64_encode(file_get_contents($results1['data']['face'])));
        $topPhoto = 'data:image/jpg;base64,' . chunk_split(base64_encode(file_get_contents($results1['data']['top_photo'])));
        update_option('jasmine_bilbil_uid', $bilbil_uid);
        update_option('jasmine_bilbil_following', $results['data']['following']);
        update_option('jasmine_bilbil_follower', $results['data']['follower']);
        update_option('jasmine_bilbil_gravatar', $gravatar);
        update_option('jasmine_bilbil_name', $results1['data']['name']);
        update_option('jasmine_bilbil_level', $results1['data']['level']);
        update_option('jasmine_bilbil_type', $results1['data']['vip']['type']);
        update_option('jasmine_bilbil_describe', $results1['data']['sign']);
        update_option('jasmine_bilbil_top_photo', $topPhoto);
    }
}

function echo_extraCss()
{
    if (jasmine_option('jasmine_extracss')) {
        echo '<style type="text/css">' . jasmine_option('jasmine_extracss') . '</style>';
    }
}

//额外css
add_action('wp_head', 'echo_extraCss');

//添加背景图片样式
add_filter('body_class', function ($classes) {
    return array_merge($classes, array('jasmine-background'));
});

//添加短代码
add_action('init', 'wpdocs_add_custom_shortcode');
function wpdocs_add_custom_shortcode()
{
    add_shortcode('counPost', 'count_post');
    add_shortcode('countShuoshuo', 'count_shuoshuo');
    add_shortcode('countComments', 'count_comments');
    add_shortcode('footData', 'echo_footData');
    add_shortcode('countViews', 'getCountViews');
}

function count_shuoshuo()
{
    $count_posts = wp_count_posts($post_type = 'shuoshuo');
    if (!$count_posts->publish || !is_numeric($count_posts->publish)) {
        echo "0";
    } else {
        echo $published_posts = $count_posts->publish;
    }
}

function count_comments()
{
    global $wpdb;
    $comments = $wpdb->get_var("SELECT COUNT(*) FROM $wpdb->comments");
    if (!$comments || !is_numeric($comments)) {
        echo "0";
    } else {
        echo $comments;
    }
}

function count_post()
{
    $count_posts = wp_count_posts();
    if (!$count_posts->publish || !is_numeric($count_posts->publish)) {
        echo "0";
    } else {
        echo $published_posts = $count_posts->publish;
    }
}

function getCountViews()
{
    global $wpdb;
    $sum = $wpdb->get_var("SELECT sum(meta_value) FROM wp_postmeta WHERE meta_key = 'post_views_count'");
    if (!$sum || !is_numeric($sum)) {
        echo "0";
    } else {
        echo $sum;
    }
}

function echo_footData()
{
    $date = esc_attr(explode("/", jasmine_option('jasmine_startdate'))[0]);
    $this_year = date('Y');
    $blog_name = get_bloginfo('name');
    $bolg_href = get_bloginfo('url');
    $beian = jasmine_option('jasmine_record');
    $police_beian = jasmine_option('jasmine_police_record');
    $police_beian_href = jasmine_option('jasmine_police_href');
    $police_beian_exit = "未备案";
    $startDate = "";
    if (jasmine_option('jasmine_police_record')) {
        $police_beian_exit = "<br/> <img class='lazyload' src='https://cdn.jsdelivr.net/gh/rm-rf-run/Jasmine/assets/images/
beian.png' data-src='https://cdn.jsdelivr.net/gh/rm-rf-run/Jasmine/assets/images/
beian.png' data-was-processed='true'> <a href='" . esc_url($police_beian_href) . "' rel='external nofollow' target='_blank'>" . esc_html($police_beian) . " </a>";
    }
    if (jasmine_option('jasmine_startdate')) {
        $startDate = "本博客已萌萌哒<span class='my-face'>╭(●｀∀´●)╯╰(●’◡’●)╮</span>运行了<span id='run_time'></span>";
    }
    if ($date == $this_year) {
        $date = "";
    } else {
        $date = $date . '-';
    }
    echo "版权所有 © " . $date . $this_year . " <a href='" . esc_url($bolg_href) . "'>" . esc_html($blog_name) . "</a> " . $police_beian_exit . " | <a href='http://www.beian.miit.gov.cn/' rel='external nofollow' target='_blank'>" . $beian . "</a><br/>Theme <a href='https://github.com/rm-rf-run/Jasmine'><span id='rm-rf-run'>Jasmine</span><a/> By <a href='https://prettywordpress.com' target='_blank' ><span id='rm-rf-run'>rm-rf-run</span></a> With  | All Rights Reserved<br/>" . $startDate;
}

// 删除WordPress私密文章标题前的提示文字
function title_format($content)
{
    return '%s';
}

add_filter('private_title_format', 'title_format');
add_filter('protected_title_format', 'title_format');

// RSS 中添加查看全文链接防采集
function feed_read_more($content)
{
    return $content . '<p><a rel="bookmark" href="' . get_permalink() . '" target="_blank">查看全文</a></p>';
}

add_filter('the_excerpt_rss', 'feed_read_more');

// 阻止站内文章互相Pingback
function jasmine_noself_ping(&$links)
{
    $home = get_option('home');
    foreach ($links as $l => $link) {
        if (0 === strpos($link, $home)) {
            unset($links[$l]);
        }
    }

}

add_action('pre_ping', 'jasmine_noself_ping');

// 点赞功能
add_action('wp_ajax_nopriv_jasmine_like', 'jasmine_like');
add_action('wp_ajax_jasmine_like', 'jasmine_like');
function jasmine_like()
{
    global $wpdb, $post;
    $id = $_POST["jasmine_id"];
    $action = $_POST["jasmine_action"];
    if ($action == 'jasmine_like') {
        $jasmine_raters = get_post_meta($id, 'jasmine_like', true);
        $expire = time() + 99999999;
        $domain = ($_SERVER['HTTP_HOST'] != 'localhost') ? $_SERVER['HTTP_HOST'] : false; // make cookies work with localhost
        setcookie('jasmine_like_' . $id, $id, $expire, '/', $domain, false);
        if (!$jasmine_raters || !is_numeric($jasmine_raters)) {
            update_post_meta($id, 'jasmine_like', 1);
        } else {
            update_post_meta($id, 'jasmine_like', ($jasmine_raters + 1));
        }
        echo get_post_meta($id, 'jasmine_like', true);
    }
    die;
}

// 主循环中显示文章类型
function jasmine_posts_per_page($query)
{
    if ((is_home() || is_search() || is_tag()) && $query->is_main_query()) {
        $query->set('post_type', array('post', 'shuoshuo'));
    }
    return $query;
}

// 说说
function create_shuoshuo()
{
    $labels = array(
        'name' => __('说说', 'jasmine'),
        'singular_name' => __('说说', 'jasmine'),
        'add_new' => __('新建说说', 'jasmine'),
        'add_new_item' => __('新建一个说说', 'jasmine'),
        'edit_item' => __('编辑说说', 'jasmine'),
        'new_item' => __('新说说', 'jasmine'),
        'all_items' => __('所有说说', 'jasmine'),
        'view_item' => __('查看说说', 'jasmine'),
        'search_items' => __('搜索说说', 'jasmine'),
        'not_found' => __('没有找到有关说说', 'jasmine'),
        'not_found_in_trash' => __('回收站里面没有相关说说', 'jasmine'),
        'parent_item_colon' => '',
        'menu_name' => '说说',
    );
    $args = array(
        'labels' => $labels,
        'description' => '写条说说',
        'public' => true,
        'menu_position' => 5,
        'menu_icon' => 'dashicons-format-status',
        'supports' => array('title', 'editor', 'author', 'comments', 'thumbnail'),
        'taxonomies' => array('shuoshuo', 'post_tag'),
        'has_archive' => true,
    );
    register_post_type('shuoshuo', $args);
}

add_action('init', 'create_shuoshuo');
add_action('add_meta_boxes', 'jasmine_add_shuoshuo_box');
function jasmine_add_shuoshuo_box()
{
    add_meta_box('jasmine_shuoshuo_sticky', '置顶', 'jasmine_shuoshuo_sticky', 'shuoshuo', 'side', 'high');
}

function jasmine_shuoshuo_sticky()
{
    ?>
    <input id="super-sticky" name="sticky" type="checkbox" value="sticky" <?php checked(is_sticky()); ?> /><label
        for="super-sticky" class="selectit">置顶本条说说</label>
    <?php
}

add_action('pre_get_posts', 'jasmine_posts_per_page');

/*
 * Ajax评论
 */
if (version_compare($GLOBALS['wp_version'], '4.4-alpha', '<')) {
    wp_die(__('请升级到4.4以上版本', 'jasmine'));
}
// 提示
if (!function_exists('siren_ajax_comment_err')) {
    function siren_ajax_comment_err($t)
    {
        header('HTTP/1.0 500 Internal Server Error');
        header('Content-Type: text/plain;charset=UTF-8');
        echo $t;
        exit;
    }
}

// 评论Markdown解析
function markdown_parser($incoming_comment)
{
    global $wpdb, $comment_markdown_content;
    $re = '/```([\s\S]*?)```[\s]*|`{1,2}[^`](.*?)`{1,2}|\[.*?\]\([\s\S]*?\)/m';
    if (preg_replace($re, 'temp', $incoming_comment['comment_content']) != strip_tags(preg_replace($re, 'temp', $incoming_comment['comment_content']))) {
        siren_ajax_comment_err('评论只支持Markdown啦，见谅╮(￣▽￣)╭<br>Markdown Supported while <i class="fa fa-code" aria-hidden="true"></i> Forbidden');
        return ($incoming_comment);
    }
    $myCustomer = $wpdb->get_row("SELECT * FROM wp_comments");
    //Add column if not present.
    if (!isset($myCustomer->comment_markdown)) {
        $wpdb->query("ALTER TABLE wp_comments ADD comment_markdown text");
    }
    $comment_markdown_content = $incoming_comment['comment_content'];
    include 'inc/Parsedown.php';
    $Parsedown = new Parsedown();
    $incoming_comment['comment_content'] = $Parsedown->setUrlsLinked(false)->text($incoming_comment['comment_content']);
    return $incoming_comment;
}

add_filter('preprocess_comment', 'markdown_parser');
remove_filter('comment_text', 'make_clickable', 9);

//保存Markdown评论
function save_markdown_comment($comment_ID, $comment_approved)
{
    global $wpdb, $comment_markdown_content;
    $comment = get_comment($comment_ID);
    $comment_content = $comment_markdown_content;
    //store markdow content
    $wpdb->query("UPDATE wp_comments SET comment_markdown='" . $comment_content . "' WHERE comment_ID='" . $comment_ID . "';");
}

add_action('comment_post', 'save_markdown_comment', 10, 2);

/**
 * Enqueue scripts and styles.
 */
function jasmine_scripts()
{
    wp_enqueue_style('jasmine_css', get_stylesheet_uri(), array(), JASMINE_VERSION);
}

add_action('admin_enqueue_scripts', 'jasmine_scripts');

// 修改受保护文章的提示文案
function password_protected_change($content)
{
    global $post;
    if (!empty($post->post_password) && stripslashes(@$_COOKIE['wp-postpass_' . COOKIEHASH]) != $post->post_password) {
        $output = '
        <form action="' . esc_url(site_url('wp-login.php?action=postpass', 'login_post')) . '" method="post">
        <div id="post-password-content">
            <img class="lazyload" src="' . esc_url(jasmine_option('jasmine_post_password_img')) . '" data-src="' . esc_url(jasmine_option('jasmine_post_password_img')) . '">
            <div class="post-pass-word">这是一篇受保护的密码，请输入访问密码！</div><br>
            <div class="input-group mb-2" id="post-password-input">
                <div class="input-group-prepend">
                  <div class="input-group-text" style="height: 38px;"><i class="fa fa-unlock-alt" aria-hidden="true"></i></div>
                </div>
                <input class="form-control" name="post_password" class="input" type="password" />
            </div><br>
            <div id="post-password-submit">
                 <input type="submit" name="Submit" class="btn btn-primary" value="' . __("点击访问") . '" />
            </div>  
        </div>
        </form>
        ';
        return $output;
    } else {
        return $content;
    }
}

add_filter('the_password_form', 'password_protected_change');

function author_skill()
{
    $all_skills = array('java', 'javascript', 'c', 'swift', 'solidity', 'rust', 'typescript', 'python', 'kotlin', 'haskell', 'scala', 'matlab', 'lua', 'perl', 'go');
    $pre_data = 'jasmine_skill_';
    $output = '';
    foreach ($all_skills as $all_skill) {
        $skill = jasmine_option($pre_data . $all_skill);
        if ($skill > 0) {
            $color = '#' . str_pad(dechex(mt_rand(0, 0xFFFFFF)), 6, '0', STR_PAD_LEFT);
            $output .= '
            <div class="skill-list-prograss">
                <div class="text-bold"><span>' . $all_skill . '</span></div>
                <div class="prograss prograss-list">
                    <div class="bar animateBar" data-animatetarget="' . $skill . '" style="background: ' . $color . '"></div>
                </div>
                <span class="prograss-font-list">' . $skill . '%</span>
            </div>
            ';
        }
    }
    echo $output;
}

//用户自定义头像功能
require get_template_directory() . '/inc/author-avatars.php';
//优化网站代码
require get_template_directory() . '/inc/optimization-speed.php';
//网站SEO
require get_template_directory() . '/inc/seo.php';
//导入OwO表情
require get_template_directory() . '/inc/OwO.php';
//定义数据
require get_template_directory() . '/inc/jasmineConfig.php';
//引入API
require get_template_directory() . '/inc/api.php';
//引入定时任务
require get_template_directory() . '/inc/optimization_timed_task.php';

//检测主题更新
// require get_template_directory() . '/inc/theme-update-checker.php';

// $example_update_checker = new ThemeUpdateChecker(
//     'Jasmine',
//     'http://yigujin.cn/ info.json '
// );
<?php
//用户自定义头像功能
require get_template_directory() . '/inc/author-avatars.php';
//优化网站代码
require get_template_directory() . '/inc/optimization-speed.php';
//主题自带插件
require get_template_directory() . '/inc/customized-plugin.php';
//网站SEO
require get_template_directory() . '/inc/seo.php';

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

/*
 * 删除自带小工具
 */
function unregister_default_widgets()
{
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
function echo_love_time()
{
    $love_data          = (get_option('jasmine_loveDate')) ? get_option('jasmine_loveDate') : null;
    $start_data         = (get_option('jasmine_startDate')) ? get_option('jasmine_startDate') : null;
    $author_data        = (get_option('jasmine_author_data')) ? get_option('jasmine_author_data') : null;
    $siteUrl            = get_bloginfo('url');
    $site_name          = get_bloginfo('name');
    $author_name        = $site_name; //默认为站点名称
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

//评论OwO表情
function my_load_scripts($hook) {

    wp_enqueue_style( 'owo', '//cdn.jsdelivr.net/gh/rm-rf-run/Jasmine/inc/OwO/OwO.min.css', array(), '1.1.0', 'all' );

}
add_action('wp_enqueue_scripts', 'my_load_scripts');

//定义OwO json，图片地址
//define( 'OwO_API', get_bloginfo('template_directory').'/OwO/OwO.min.json' );
define( 'OwO_API', 'https://cdn.jsdelivr.net/gh/rm-rf-run/Jasmine/inc/OwO/OwO.min.json' );
define( 'OwO_alu', 'https://cdn.jsdelivr.net/gh/rm-rf-run/Jasmine/inc/OwO/alu' );
define( 'OwO_paopao', 'https://cdn.jsdelivr.net/gh/rm-rf-run/Jasmine/inc/OwO/paopao' );
define( 'OwO_bili', 'https://cdn.jsdelivr.net/gh/rm-rf-run/Jasmine/inc/OwO/bili' );

function comment_add_owo($comment_text) {
    $data_OwO = array(
        '@(暗地观察)' => '<img src="'.OwO_alu.'/暗地观察.png" alt="暗地观察" style="vertical-align: middle;">',
        '@(便便)' => '<img src="'.OwO_alu.'/便便.png" alt="便便" style="vertical-align: middle;">',
        '@(不出所料)' => '<img src="'.OwO_alu.'/不出所料.png" alt="不出所料" style="vertical-align: middle;">',
        '@(不高兴)' => '<img src="'.OwO_alu.'/不高兴.png" alt="不高兴" style="vertical-align: middle;">',
        '@(不说话)' => '<img src="'.OwO_alu.'/不说话.png" alt="不说话" style="vertical-align: middle;">',
        '@(抽烟)' => '<img src="'.OwO_alu.'/抽烟.png" alt="抽烟" style="vertical-align: middle;">',
        '@(呲牙)' => '<img src="'.OwO_alu.'/呲牙.png" alt="呲牙" style="vertical-align: middle;">',
        '@(大囧)' => '<img src="'.OwO_alu.'/大囧.png" alt="大囧" style="vertical-align: middle;">',
        '@(得意)' => '<img src="'.OwO_alu.'/alu/得意.png" alt="得意" style="vertical-align: middle;">',
        '@(愤怒)' => '<img src="'.OwO_alu.'/愤怒.png" alt="愤怒" style="vertical-align: middle;">',
        '@(尴尬)' => '<img src="'.OwO_alu.'/尴尬.png" alt="尴尬" style="vertical-align: middle;">',
        '@(高兴)' => '<img src="'.OwO_alu.'/高兴.png" alt="高兴" style="vertical-align: middle;">',
        '@(鼓掌)' => '<img src="'.OwO_alu.'/鼓掌.png" alt="鼓掌" style="vertical-align: middle;">',
        '@(观察)' => '<img src="'.OwO_alu.'/观察.png" alt="观察" style="vertical-align: middle;">',
        '@(害羞)' => '<img src="'.OwO_alu.'/害羞.png" alt="害羞" style="vertical-align: middle;">',
        '@(汗)' => '  <img src="'.OwO_alu.'/汗.png" alt="汗" style="vertical-align: middle;">',
        '@(黑线)' => '<img src="'.OwO_alu.'/黑线.png" alt="黑线" style="vertical-align: middle;">',
        '@(欢呼)' => '<img src="'.OwO_alu.'/欢呼.png" alt="欢呼" style="vertical-align: middle;">',
        '@(击掌)' => '<img src="'.OwO_alu.'/击掌.png" alt="击掌" style="vertical-align: middle;">',
        '@(惊喜)' => '<img src="'.OwO_alu.'/惊喜.png" alt="惊喜" style="vertical-align: middle;">',
        '@(看不见)' => '<img src="'.OwO_alu.'/看不见.png" alt="看不见" style="vertical-align: middle;">',
        '@(看热闹)' => '<img src="'.OwO_alu.'/看热闹.png" alt="看热闹" style="vertical-align: middle;">',
        '@(抠鼻)' => '<img src="'.OwO_alu.'/抠鼻.png" alt="抠鼻" style="vertical-align: middle;">',
        '@(口水)' => '<img src="'.OwO_alu.'/口水.png" alt="口水" style="vertical-align: middle;">',
        '@(哭泣)' => '<img src="'.OwO_alu.'/哭泣.png" alt="哭泣" style="vertical-align: middle;">',
        '@(狂汗)' => '<img src="'.OwO_alu.'/狂汗.png" alt="狂汗" style="vertical-align: middle;">',
        '@(蜡烛)' => '<img src="'.OwO_alu.'/蜡烛.png" alt="蜡烛" style="vertical-align: middle;">',
        '@(脸红)' => '<img src="'.OwO_alu.'/脸红.png" alt="脸红" style="vertical-align: middle;">',
        '@(内伤)' => '<img src="'.OwO_alu.'/内伤.png" alt="内伤" style="vertical-align: middle;">',
        '@(喷水)' => '<img src="'.OwO_alu.'/喷水.png" alt="喷水" style="vertical-align: middle;">',
        '@(喷血)' => '<img src="'.OwO_alu.'/喷血.png" alt="喷血" style="vertical-align: middle;">',
        '@(期待)' => '<img src="'.OwO_alu.'/期待.png" alt="期待" style="vertical-align: middle;">',
        '@(亲亲)' => '<img src="'.OwO_alu.'/亲亲.png" alt="亲亲" style="vertical-align: middle;">',
        '@(傻笑)' => '<img src="'.OwO_alu.'/傻笑.png" alt="傻笑" style="vertical-align: middle;">',
        '@(扇耳光)' => '<img src="'.OwO_alu.'/扇耳光.png" alt="扇耳光" style="vertical-align: middle;">',
        '@(深思)' => '<img src="'.OwO_alu.'/深思.png" alt="深思" style="vertical-align: middle;">',
        '@(锁眉)' => '<img src="'.OwO_alu.'/锁眉.png" alt="锁眉" style="vertical-align: middle;">',
        '@(投降)' => '<img src="'.OwO_alu.'/投降.png" alt="投降" style="vertical-align: middle;">',
        '@(吐)' => '<img src="'.OwO_alu.'/吐.png" alt="吐" style="vertical-align: middle;">',
        '@(吐舌)' => '<img src="'.OwO_alu.'/吐舌.png" alt="吐舌" style="vertical-align: middle;">',
        '@(吐血倒地)' => '<img src="'.OwO_alu.'/吐血倒地.png" alt="吐血倒地" style="vertical-align: middle;">',
        '@(无奈)' => '<img src="'.OwO_alu.'/无奈.png" alt="无奈" style="vertical-align: middle;">',
        '@(无所谓)' => '<img src="'.OwO_alu.'/无所谓.png" alt="无所谓" style="vertical-align: middle;">',
        '@(无语)' => '<img src="'.OwO_alu.'/无语.png" alt="无语" style="vertical-align: middle;">',
        '@(喜极而泣)' => '<img src="'.OwO_alu.'/喜极而泣.png" alt="喜极而泣" style="vertical-align: middle;">',
        '@(献花)' => '<img src="'.OwO_alu.'/献花.png" alt="献花" style="vertical-align: middle;">',
        '@(献黄瓜)' => '<img src="'.OwO_alu.'/献黄瓜.png" alt="献黄瓜" style="vertical-align: middle;">',
        '@(想一想)' => '<img src="'.OwO_alu.'/想一想.png" alt="想一想" style="vertical-align: middle;">',
        '@(小怒)' => '<img src="'.OwO_alu.'/小怒.png" alt="小怒" style="vertical-align: middle;">',
        '@(小眼睛)' => '<img src="'.OwO_alu.'/小眼睛.png" alt="小眼睛" style="vertical-align: middle;">',
        '@(邪恶)' => '<img src="'.OwO_alu.'/邪恶.png" alt="邪恶" style="vertical-align: middle;">',
        '@(咽气)' => '<img src="'.OwO_alu.'/咽气.png" alt="咽气" style="vertical-align: middle;">',
        '@(阴暗)' => '<img src="'.OwO_alu.'/阴暗.png" alt="阴暗" style="vertical-align: middle;">',
        '@(赞一个)' => '<img src="'.OwO_alu.'/赞一个.png" alt="赞一个" style="vertical-align: middle;">',
        '@(长草)' => '<img src="'.OwO_alu.'/长草.png" alt="长草" style="vertical-align: middle;">',
        '@(中刀)' => '<img src="'.OwO_alu.'/中刀.png" alt="中刀" style="vertical-align: middle;">',
        '@(中枪)' => '<img src="'.OwO_alu.'/中枪.png" alt="中枪" style="vertical-align: middle;">',
        '@(中指)' => '<img src="'.OwO_alu.'/中指.png" alt="中指" style="vertical-align: middle;">',
        '@(肿包)' => '<img src="'.OwO_alu.'/肿包.png" alt="肿包" style="vertical-align: middle;">',
        '@(皱眉)' => '<img src="'.OwO_alu.'/皱眉.png" alt="皱眉" style="vertical-align: middle;">',
        '@(装大款)' => '<img src="'.OwO_alu.'/装大款.png" alt="装大款" style="vertical-align: middle;">',
        '@(坐等)' => '<img src="'.OwO_alu.'/坐等.png" alt="坐等" style="vertical-align: middle;">',
        '@[啊]' => '<img src="'.OwO_paopao.'/啊.png" alt="啊" style="vertical-align: middle;">',
        '@[爱心]' => '<img src="'.OwO_paopao.'/爱心.png" alt="爱心" style="vertical-align: middle;">',
        '@[鄙视]' => '<img src="'.OwO_paopao.'/鄙视.png" alt="鄙视" style="vertical-align: middle;">',
        '@[便便]' => '<img src="'.OwO_paopao.'/便便.png" alt="便便" style="vertical-align: middle;">',
        '@[不高兴]' => '<img src="'.OwO_paopao.'/不高兴.png" alt="不高兴" style="vertical-align: middle;">',
        '@[彩虹]' => '<img src="'.OwO_paopao.'/彩虹.png" alt="彩虹" style="vertical-align: middle;">',
        '@[茶杯]' => '<img src="'.OwO_paopao.'/茶杯.png" alt="茶杯" style="vertical-align: middle;">',
        '@[吃瓜]' => '<img src="'.OwO_paopao.'/吃瓜.png" alt="吃瓜" style="vertical-align: middle;">',
        '@[吃翔]' => '<img src="'.OwO_paopao.'/吃翔.png" alt="吃翔" style="vertical-align: middle;">',
        '@[大拇指]' => '<img src="'.OwO_paopao.'/大拇指.png" alt="大拇指" style="vertical-align: middle;">',
        '@[蛋糕]' => '<img src="'.OwO_paopao.'/蛋糕.png" alt="蛋糕" style="vertical-align: middle;">',
        '@[嘚瑟]' => '<img src="'.OwO_paopao.'/嘚瑟.png" alt="嘚瑟" style="vertical-align: middle;">',
        '@[灯泡]' => '<img src="'.OwO_paopao.'/灯泡.png" alt="灯泡" style="vertical-align: middle;">',
        '@[乖]' => '<img src="'.OwO_paopao.'/乖.png" alt="乖" style="vertical-align: middle;">',
        '@[哈哈]' => '<img src="'.OwO_paopao.'/哈哈.png" alt="哈哈" style="vertical-align: middle;">',
        '@[汗]' => '<img src="'.OwO_paopao.'/汗.png" alt="汗" style="vertical-align: middle;">',
        '@[呵呵]' => '<img src="'.OwO_paopao.'/呵呵.png" alt="呵呵" style="vertical-align: middle;">',
        '@[黑线]' => '<img src="'.OwO_paopao.'/黑线.png" alt="黑线" style="vertical-align: middle;">',
        '@[红领巾]' => '<img src="'.OwO_paopao.'/红领巾.png" alt="红领巾" style="vertical-align: middle;">',
        '@[呼]' => '<img src="'.OwO_paopao.'/呼.png" alt="呼" style="vertical-align: middle;">',
        '@[花心]' => '<img src="'.OwO_paopao.'/花心.png" alt="花心" style="vertical-align: middle;">',
        '@[滑稽]' => '<img src="'.OwO_paopao.'/滑稽.png" alt="滑稽" style="vertical-align: middle;">',
        '@[惊恐]' => '<img src="'.OwO_paopao.'/惊恐.png" alt="惊恐" style="vertical-align: middle;">',
        '@[惊哭]' => '<img src="'.OwO_paopao.'/惊哭.png" alt="惊哭" style="vertical-align: middle;">',
        '@[惊讶]' => '<img src="'.OwO_paopao.'/惊讶.png" alt="惊讶" style="vertical-align: middle;">',
        '@[开心]' => '<img src="'.OwO_paopao.'/开心.png" alt="开心" style="vertical-align: middle;">',
        '@[酷]' => '<img src="'.OwO_paopao.'/酷.png" alt="酷" style="vertical-align: middle;">',
        '@[狂汗]' => '<img src="'.OwO_paopao.'/狂汗.png" alt="狂汗" style="vertical-align: middle;">',
        '@[蜡烛]' => '<img src="'.OwO_paopao.'/蜡烛.png" alt="蜡烛" style="vertical-align: middle;">',
        '@[懒得理]' => '<img src="'.OwO_paopao.'/懒得理.png" alt="懒得理" style="vertical-align: middle;">',
        '@[泪]' => '<img src="'.OwO_paopao.'/泪.png" alt="泪" style="vertical-align: middle;">',
        '@[冷]' => '<img src="'.OwO_paopao.'/冷.png" alt="冷" style="vertical-align: middle;">',
        '@[礼物]' => '<img src="'.OwO_paopao.'/礼物.png" alt="礼物" style="vertical-align: middle;">',
        '@[玫瑰]' => '<img src="'.OwO_paopao.'/玫瑰.png" alt="玫瑰" style="vertical-align: middle;">',
        '@[勉强]' => '<img src="'.OwO_paopao.'/勉强.png" alt="勉强" style="vertical-align: middle;">',
        '@[你懂的]' => '<img src="'.OwO_paopao.'/你懂的.png" alt="你懂的" style="vertical-align: middle;">',
        '@[怒]' => '<img src="'.OwO_paopao.'/怒.png" alt="怒" style="vertical-align: middle;">',
        '@[喷]' => '<img src="'.OwO_paopao.'/喷.png" alt="喷" style="vertical-align: middle;">',
        '@[钱]' => '<img src="'.OwO_paopao.'/钱.png" alt="钱" style="vertical-align: middle;">',
        '@[钱币]' => '<img src="'.OwO_paopao.'/钱币.png" alt="钱币" style="vertical-align: middle;">',
        '@[弱]' => '<img src="'.OwO_paopao.'/弱.png" alt="弱" style="vertical-align: middle;">',
        '@[三道杠]' => '<img src="'.OwO_paopao.'/三道杠.png" alt="三道杠" style="vertical-align: middle;">',
        '@[沙发]' => '<img src="'.OwO_paopao.'/沙发.png" alt="沙发" style="vertical-align: middle;">',
        '@[生气]' => '<img src="'.OwO_paopao.'/生气.png" alt="生气" style="vertical-align: middle;">',
        '@[胜利]' => '<img src="'.OwO_paopao.'/胜利.png" alt="胜利" style="vertical-align: middle;">',
        '@[手纸]' => '<img src="'.OwO_paopao.'/手纸.png" alt="手纸" style="vertical-align: middle;">',
        '@[睡觉]' => '<img src="'.OwO_paopao.'/睡觉.png" alt="睡觉" style="vertical-align: middle;">',
        '@[酸爽]' => '<img src="'.OwO_paopao.'/酸爽.png" alt="酸爽" style="vertical-align: middle;">',
        '@[太开心]' => '<img src="'.OwO_paopao.'/太开心.png" alt="太开心" style="vertical-align: middle;">',
        '@[太阳]' => '<img src="'.OwO_paopao.'/太阳.png" alt="太阳" style="vertical-align: middle;">',
        '@[吐]' => '<img src="'.OwO_paopao.'/吐.png" alt="吐" style="vertical-align: middle;">',
        '@[吐舌]' => '<img src="'.OwO_paopao.'/吐舌.png" alt="吐舌" style="vertical-align: middle;">',
        '@[挖鼻]' => '<img src="'.OwO_paopao.'/挖鼻.png" alt="挖鼻" style="vertical-align: middle;">',
        '@[委屈]' => '<img src="'.OwO_paopao.'/委屈.png" alt="委屈" style="vertical-align: middle;">',
        '@[捂嘴笑]' => '<img src="'.OwO_paopao.'/捂嘴笑.png" alt="捂嘴笑" style="vertical-align: middle;">',
        '@[犀利]' => '<img src="'.OwO_paopao.'/犀利.png" alt="犀利" style="vertical-align: middle;">',
        '@[香蕉]' => '<img src="'.OwO_paopao.'/香蕉.png" alt="香蕉" style="vertical-align: middle;">',
        '@[小乖]' => '<img src="'.OwO_paopao.'/小乖.png" alt="小乖" style="vertical-align: middle;">',
        '@[小红脸]' => '<img src="'.OwO_paopao.'/小红脸.png" alt="小红脸" style="vertical-align: middle;">',
        '@[笑尿]' => '<img src="'.OwO_paopao.'/笑尿.png" alt="笑尿" style="vertical-align: middle;">',
        '@[笑眼]' => '<img src="'.OwO_paopao.'/笑眼.png" alt="笑眼" style="vertical-align: middle;">',
        '@[心碎]' => '<img src="'.OwO_paopao.'/心碎.png" alt="心碎" style="vertical-align: middle;">',
        '@[星星月亮]' => '<img src="'.OwO_paopao.'/星星月亮.png" alt="星星月亮" style="vertical-align: middle;">',
        '@[呀咩爹]' => '<img src="'.OwO_paopao.'/呀咩爹.png" alt="呀咩爹" style="vertical-align: middle;">',
        '@[药丸]' => '<img src="'.OwO_paopao.'/药丸.png" alt="药丸" style="vertical-align: middle;">',
        '@[咦]' => '<img src="'.OwO_paopao.'/咦.png" alt="咦" style="vertical-align: middle;">',
        '@[疑问]' => '<img src="'.OwO_paopao.'/疑问.png" alt="疑问" style="vertical-align: middle;">',
        '@[阴险]' => '<img src="'.OwO_paopao.'/阴险.png" alt="阴险" style="vertical-align: middle;">',
        '@[音乐]' => '<img src="'.OwO_paopao.'/音乐.png" alt="音乐" style="vertical-align: middle;">',
        '@[真棒]' => '<img src="'.OwO_paopao.'/真棒.png" alt="真棒" style="vertical-align: middle;">',
        '@[nico]' => '<img src="'.OwO_paopao.'/nico.png" alt="nico" style="vertical-align: middle;">',
        '@[OK]' => '<img src="'.OwO_paopao.'/OK.png" alt="OK" style="vertical-align: middle;">',
        '@[what]' => '<img src="'.OwO_paopao.'/what.png" alt="what" style="vertical-align: middle;">',
        '@[baiyan]' => '<img src="'.OwO_bili.'/baiyan.png" alt="baiyan" style="vertical-align: middle;">',
    );
    return strtr($comment_text,$data_OwO);
}
add_filter( 'comment_text' , 'comment_add_owo', 20, 2);

// bilibili smiles
// $bilismiliestrans = array();
// function push_bili_smilies()
// {
//     global $bilismiliestrans;
//     $smiles_path = __DIR__ . "/images/smilies/bili/";
//     $name = array('baiyan', 'fadai', 'koubi', 'qinqin', 'weiqu', 'bishi', 'fanu', 'kun', 'se', 'weixiao', 'bizui', 'ganga', 'lengmo', 'shengbing', 'wunai', 'chan', 'guilian', 'liubixue', 'shengqi', 'xiaoku', 'daku', 'guzhang', 'liuhan', 'shuizhao', 'xieyanxiao', 'dalao', 'haixiu', 'liulei', 'sikao', 'yiwen', 'dalian', 'heirenwenhao', 'miantian', 'tiaokan', 'yun', 'dianzan', 'huaixiao', 'mudengkoudai', 'tiaopi', 'zaijian', 'doge', 'jingxia', 'nanguo', 'touxiao', 'zhoumei', 'facai', 'keai', 'outu', 'tuxue', 'zhuakuang');
//     $return_smiles = '';
//     for ($i = 0; $i < count($name); $i++) {
//         $img_size = getimagesize($smiles_path . $name[$i] . ".png");
//         $img_height = $img_size["1"];
        
//     }
//     return $return_smiles;
// }
// push_bili_smilies();
<?php
/**
 *  ::::::'##::::'###:::::'######::'##::::'##:'####:'##::: ##:'########:
 *  :::::: ##:::'## ##:::'##... ##: ###::'###:. ##:: ###:: ##: ##.....::
 *  :::::: ##::'##:. ##:: ##:::..:: ####'####:: ##:: ####: ##: ##:::::::
 *  :::::: ##:'##:::. ##:. ######:: ## ### ##:: ##:: ## ## ##: ######:::
 *  '##::: ##: #########::..... ##: ##. #: ##:: ##:: ##. ####: ##...::::
 *   ##::: ##: ##.... ##:'##::: ##: ##:.:: ##:: ##:: ##:. ###: ##:::::::
 *  . ######:: ##:::: ##:. ######:: ##:::: ##:'####: ##::. ##: ########:
 *  :......:::..:::::..:::......:::..:::::..::....::..::::..::........::
 *
 * @package WordPress
 * @Theme jasmine
 *
 * @author admin@prettywordpress.com
 * @link https://www.prettywordpress.com
 * Template Name: 文章归档
 * Template Post Type: page
 */
get_header();
?>
  <main role="main" id="main" aria-live="polite" aria-atomic="true">
    <div class="container">
      <div class="row clearfix">
        <!--左边栏-->
        <div class="col-md-3 column">
          <?php get_template_part('template-parts/sidebar/left-sidebar');?>
        </div>
        <!--中间栏-->
        <div class="col-md-6 column" id="pjax-container">
          <?php if (is_home() && is_front_page()):
    //导入主页的面包屑导航
    get_template_part('template-parts/nav/nav-home');
else:
    //导入文章或者页面的面包屑导航
    get_template_part('template-parts/nav/nav-post');
endif;
?>
      <?php
global $wp_query;
if (isset($_GET['order'])) {
    switch ($_GET['order']) {
        case 'rand':$orderby = 'rand';
            break;
        case 'commented':$orderby = 'comment_count';
            break;
        case 'alpha':$orderby = 'title';
            break;
        default:$orderby = 'title';
    }
    $args = array('orderby' => $orderby, 'order' => 'DESC');
    $arms = array_merge($args, $wp_query->query);
    query_posts($arms);
}

if (isset($_GET['post'])) {
    switch ($_GET['post']) {
        case 'post':$postType = 'post';
            break;
        case 'shuoshuo':$postType = 'shuoshuo';
            break;
        default:$postType = array('post', 'shuoshuo');
    }
    $args = array('post_type' => $postType, 'order' => 'DESC');
    $arms = array_merge($args, $wp_query->query);
    query_posts($arms);
}

$i = 0;
if (have_posts()):

    // 开始循环(Loop).
    while (have_posts()): the_post();
        // error_log(get_the_ID(),3,"D:\wamp\www\prettywordpress\wordpress\wp-content/debug.log");
        if (strcmp("shuoshuo", get_post_type()) == 0) {
            set_query_var('i', $i++);
            get_template_part('template-parts/post/shuoshuo', get_post_format());
        } else {
            /*
             *包含内容的帖子格式特定模板。
             *如果您想在子主题中覆盖它，那么就选择一个文件
             *称为content-___.php（其中___是Post格式名），并且将被替代。
             */
            set_query_var('i', $i++); //为需要导入的模板传参数i
            get_template_part('template-parts/post/content', get_post_format());
        }
    endwhile;

    //分页
    the_posts_pagination(
        array(
            'mid_size'           => 2,
            'aria_current'       => __('page'),
            'screen_reader_text' => __(' '),
            'aria_label'         => __('Page navigation'),
            'class'              => 'pagination',
            'prev_text'          => __('上一页', 'textdomain'),
            'next_text'          => __('下一页', 'textdomain'),
        )
    );

else:
    _e('Sorry, no posts matched your criteria.', 'textdomain');
endif;
?>
        </div>
        <!--右边栏-->
        <div class="col-md-3 column" id="hide-column">
          <?php get_template_part('template-parts/sidebar/right-sidebar');?>
        </div>
      </div>
      <div class="row clearfix">
        <div class="col-md-12 column">

        </div>
      </div>
    </div>
  </main>

<?php get_footer();?>
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
 * Template Name: 首页文章内容
 */
?>

<article id="post-<?php the_ID(); ?>" class="jasmine-article" <?php post_class(); ?>>
    <div class="jasmine-panel">
        <div class="lazyload jasmine-article-img" style="background-image: url(<?php
        $image = explode(",", jasmine_option("jasmine_post_api"));
        if (has_post_thumbnail()) {
            //当前日志有缩略图
            $img_src = wp_get_attachment_image_src(get_post_thumbnail_id($post->ID), "Full");
            echo $img_src[0];
        } else {
            $i = get_query_var('i');//获取传过来的i
            echo esc_url($image[$i]);
        }
        ?>);">
        </div>
    </div>
    <div class="jasmine-content">
        <h2><a href="<?php esc_url(the_permalink()); ?>" title="<?php the_title(); ?>"><?php the_title(); ?></a></h2>
        <p class="jasmine-content-foot">
            <?php
            if (post_password_required()) {
                echo _e('文章已加密','jasmine');
            } else {
                echo get_the_excerpt();
            }
            ?>
        </p>
        <div>
                  <span class="jasmine-content-foot">
                    <?php printf(__('<i class="fa fa-calendar"></i> %s', 'textdomain'), get_the_time('Y-M-j')); ?>
                  </span>
            <span class="jasmine-content-foot">
                    <i class="fa fa-comments"></i>
                    <?php echo get_comment_count(get_the_ID())['approved']; ?>
                  </span>
            <span class="jasmine-content-foot">
                    <i class="fa fa-eye"></i>
                    <?php echo getPostViews(get_the_ID()); ?>
                  </span>
            <span class="jasmine-content-foot">
                    <i class="fa fa-thumbs-o-up"></i>
                  <?php if (get_post_meta($post->ID, 'jasmine_like', true)) {
                      echo get_post_meta($post->ID, 'jasmine_like', true);
                  } else {
                      echo '0';
                  } ?>
                  </span>
            <span class="jasmine-content-foot">
                    <i class="fa fa-user"></i>
                    <?php the_author(); ?>
                  </span>
            <span class="jasmine-content-foot">
                    <?php edit_post_link('编辑', '', ''); ?><!--只有在登陆后才可见到，对日志进行编辑的链接-->
                  </span>
        </div>
    </div>
</article>
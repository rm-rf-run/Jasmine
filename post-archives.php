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
setPostViews(get_the_ID());?>
<main role="main" id="main">
    <div class="container">
      <div class="row clearfix">
        <!--左边栏-->
        <div class="col-md-3 column">
          <?php get_template_part('template-parts/sidebar/left-sidebar');?>
        </div>
        <!--中间栏-->
        <div class="col-md-6 column" id="pjax-container">
        <!--导航栏-->
        <?php get_template_part('template-parts/nav/nav-post');?>
        <div class="jasmine-post-archives">
        	<div class="thumbnail-shadow" style="background-image: url(<?php
                    $image[1] = "https://api.ixiaowai.cn/gqapi/gqapi.php";
                    $image[2] = "https://api.ixiaowai.cn/api/api.php";
                    $image[3] = "http://api.btstu.cn/sjbz/?lx=dongman";
                    $image[4] = "http://api.btstu.cn/sjbz/?lx=suiji";
                    $image[5] = "https://img.xjh.me/random_img.php?type=bg&ctype=nature&return=302";
                    $image[6] = "https://api.loli.rocks/tianshijianglindaowoshenbian/index.php";
                    $image[7] = "https://api.ixiaowai.cn/gqapi/gqapi.php";
                    $image[8] = "https://random.52ecy.cn/randbg.php";
                    $image[9] = "https://uploadbeta.com/api/pictures/random/?key=BingEverydayWallpaperPicture";
                    $image[10] = "http://www.dmoe.cc/random.php";
                    $image[11] = "https://acg.yanwz.cn/api.php";
                    $image[12] = "https://img.paulzzh.tech/touhou/random";
                    if (has_post_thumbnail()) {
                        //当前日志有缩略图
                        $img_src = wp_get_attachment_image_src(get_post_thumbnail_id($post->ID), "Full");
                        echo $img_src[0];
                    } else {
                        $id = mt_rand(1, 12);
                        echo esc_url($image[$id]);
                    }
                    ?>);">
        		<h1 class="post-title">归档</h1>
	        	<div class="post-info">
		        	<span class="post-view">
		        		<i class="fa fa-eye"></i>&nbsp;
                    <?php echo getPostViews(get_the_ID()); ?>
		        	</span>&nbsp;•&nbsp;
		        	<span class="post-comments">
		        		<i class="fa fa-comments"></i>&nbsp;
                    <?php echo get_comment_count(get_the_ID())['approved']; ?>
		        	</span>
                    <?php
                        if (is_user_logged_in()) {
                           ?>
                                <span class="post-edit">&nbsp;•&nbsp;
                                    <i class="fa fa-pencil-square-o"></i>&nbsp;
                                    <?php edit_post_link('编辑', '', '');?>
                                </span>
                           <?php
                        }
                    ?>
		        </div>
		    </div>
            <div class="jasmine-archives-content">
                <?php if (have_posts()) : the_post(); ?>
                    <?php archives_list();the_content(); ?>
                <?php endif; ?>
            </div>
        </div>
        <?php comments_template();?>
        </div>
        <!--右边栏-->
        <div class="col-md-3 column">
          <?php get_template_part('template-parts/sidebar/right-sidebar');?>
        </div>
      </div>
    </div>
</main>
<?php get_footer();
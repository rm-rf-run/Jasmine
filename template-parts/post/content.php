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

<article id="post-<?php the_ID();?>" class="jasmine-article" <?php post_class();?>>
              <div class="jasmine-panel">
                <div class="lazyload jasmine-article-img" style="background-image: url(<?php
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
                      $i = get_query_var('i');//获取传过来的i
                    	echo esc_url($image[$i]);
                    }
                    ?>);">
                </div>
              </div>
              <div class="jasmine-content">
                <h2><a href="<?php esc_url(the_permalink());?>"><?php the_title();?></a></h2>
                <p class="jasmine-content-foot">
                  <?php echo get_the_excerpt(); ?>
                </p>
                <div>
                  <span class="jasmine-content-foot">
                    <?php printf(__('<i class="fa fa-calendar"></i> %s', 'textdomain'), get_the_time('Y-M-j'));?>
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
                  1k
                  </span>
                  <span class="jasmine-content-foot">
                    <i class="fa fa-user"></i>
                    <?php the_author();?>
                  </span>
                  <span class="jasmine-content-foot">
                    <?php edit_post_link('编辑', '', '');?><!--只有在登陆后才可见到，对日志进行编辑的链接-->
                  </span>
                </div>
              </div>
						</article>
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
 * Template Name: 首页说说内容
 */
?>
<article id="post-<?php the_ID();?>" class="jasmine-shuoshuo-article" <?php post_class();?>>
	<div class="shuoshuo-head-img" style="background-image: url(<?php
$image = explode(",", jasmine_option("jasmine_post_api"));
if (has_post_thumbnail()) {
    //当前日志有缩略图
    $img_src = wp_get_attachment_image_src(get_post_thumbnail_id($post->ID), "Full");
    echo $img_src[0];
} else {
    $i = get_query_var('i'); //获取传过来的i
    echo esc_url($image[$i]);
}?>);"></div>
	<div class="shuoshuo-main">
		<?php echo get_avatar(get_the_author_meta('ID'), 48); ?>
		<span class="shuoshuo-author" style="margin-left: 6px;">
			<?php echo the_author_posts_link(); ?>
			<i class="fa fa-certificate" style="color: #ffba50!important" aria-hidden="true"></i>
		</span>
		<span style="color: #999;font-size: 14px;">
		- <?php echo human_time_diff(get_the_time('U'), current_time('timestamp'));
_e('前'); ?>
		</span>
		<span style="display: block;margin-left: 54px;">发布了一条说说&nbsp;&nbsp;<?php edit_post_link('编辑', '', '');?><!--只有在登陆后才可见到，对日志进行编辑的链接--></span>
		<div class="shuoshuo-content">
           <?php the_tags('', ' ', '');
the_content();?>
        </div>
	</div>
	<div class="shuoshuo-footer">
      <span class="shuoshuo-span">
        <i class="fa fa-eye"></i>
        <?php echo getPostViews(get_the_ID()); ?>
      </span>
      <span class="shuoshuo-span">
        <i class="fa fa-comments"></i>
        <?php echo get_comment_count(get_the_ID())['approved']; ?>
      </span>
      <span class="post-like shuoshuo-span">
        <a href="javascript:;" data-action="jasmine_like" data-id="<?php the_ID(); ?>" class="like<?php if(isset($_COOKIE['jasmine_like_'.$post->ID])) echo ' have-like';?>">
      <span class="like-count">
        <i class="fa fa-thumbs-o-up"></i>
        <?php if( get_post_meta($post->ID,'jasmine_like',true) ){ echo get_post_meta($post->ID,'jasmine_like',true); } else { echo '0'; }?>
      </span>
      </a>
      </span>
      <span class="shuoshuo-span">
          <a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>">
              <i class="fa fa-ellipsis-h" aria-hidden="true"></i> 阅读
          </a>
      </span>
	</div>
</article>
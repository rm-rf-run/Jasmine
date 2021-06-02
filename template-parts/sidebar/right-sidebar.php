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
 * Template Name: 右边栏
 */
?>

<?php
if (jasmine_option('jasmine_notice')) {
	?>
<div class="jasmine-notice">
  <div class="jasmine-notice-title">
  	<title>今日公告</title>
  </div>
  <div class="jasmine-notice-div">
  	<span class="jasmine-notice-span">
	  	<?php echo esc_attr(jasmine_option('jasmine_notice')); ?>
  	</span>
  </div>
</div>
	<?php
}
?>
<div class="jasmine-random-articles">
	<span class="jasmine-item-title"><i class="fa fa-bookmark"></i>    随机文章</span>
	<ul>
		<?php random_posts(); ?>
	</ul>
</div>

<div class="jasmine-tag-cloud">
    <span class="jasmine-item-title"><i class="fa fa-tags"></i>    热门标签</span>
	 <?php wp_tag_cloud('smallest=12&largest=18&unit=px&number=20');?>
</div>


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
	<div class="jasmine-random-articles-div">
		<div>
			<i class="fa fa-bookmark"></i>
		</div>
		<div>
			<title>随机文章</title>
		</div>
	</div>
	<ul>
		<?php random_posts(); ?>
	</ul>
</div>

<div class="jasmine-tag-cloud">
	 <?php wp_tag_cloud('smallest=12&largest=18&unit=px&number=20');?>
</div>
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
    <span class="jasmine-item-title"><i class="fa fa-bookmark"></i>    热门文章</span>
    <ul>
        <?php popular_posts(); ?>
    </ul>
</div>

<?php if (1 == jasmine_option('jasmine_skill_show')) {
    ?>
    <div class="jasmine-prograss">
        <span class="jasmine-item-title"><i class="fa fa-tree"></i>    技能点</span>
        <div class="author-skill">
            <?php author_skill();?>
        </div>
    </div>
    <?php
}
?>
<!--<div class="jasmine-github-card">-->
<!--    <img src="https://github-readme-stats.vercel.app/api/pin/?username=rm-rf-run&repo=Jasmine&show_icons=true&card_width=255px&theme=vue&show_owner=true">-->
<!--</div>-->
<!---->
<!--<div class="jasmine-github-card">-->
<!--    <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=rm-rf-run&card_width=255px">-->
<!--</div>-->

<div class="jasmine-tag-cloud">
    <span class="jasmine-item-title"><i class="fa fa-tags"></i>    热门标签</span>
    <?php wp_tag_cloud('smallest=12&largest=18&unit=px&number=20'); ?>
</div>

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

<?php
$qrcode = jasmine_option('jasmine_wechat_official_account');
if(!empty($qrcode)){
    echo '<div class="jasmine-tag-cloud">
            <span class="jasmine-item-title"><i class="fa fa-weixin"></i>    公众号</span>
            <img style="max-width:235px" src="'.$qrcode.'"/>
        </div>';
}?>

<div class="jasmine-tag-cloud">
    <span class="jasmine-item-title"><i class="fa fa-tags"></i>    热门标签</span>
    <?php wp_tag_cloud('smallest=12&largest=18&unit=px&number=20'); ?>
</div>

<?php $linkcats = $wpdb->get_results("SELECT T1.name AS name FROM $wpdb->terms T1, $wpdb->term_taxonomy T2 WHERE T1.term_id = T2.term_id AND T2.taxonomy = 'link_category'");
if($linkcats) : foreach($linkcats as $linkcat) :
if("首页友链" == $linkcat->name){
?>
<div class="jasmine-home-friend-chain">
    <span class="jasmine-item-title"><i class="fa fa-child"></i>    首页友链</span>
    <?php
    $bookmarks = get_bookmarks('orderby=rand&category_name=' . $linkcat->name);
    if ( !empty($bookmarks) ) {
        foreach ($bookmarks as $bookmark) {
            $friend_link = '<a class="home-friend-link-a" target="_blank" href="' . $bookmark->link_url . '" data-toggle="tooltip" data-placement="top" title="" data-original-title="' . $bookmark->link_description . '">'.$bookmark->link_name.'</a><br>';
            echo $friend_link;
        }
    }?>
</div><?php
}
 endforeach; endif; ?>



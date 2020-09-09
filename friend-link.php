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
 * Template Name: 友情链接
 * Template Post Type: page
 */
get_header();
setPostViews(get_the_ID()); ?>
<main role="main" id="main">
    <div class="container">
      <div class="row clearfix">
        <!--左边栏-->
        <div class="col-md-3 column">
          <?php get_template_part('template-parts/sidebar/left-sidebar');?>
        </div>
        <!--中间栏-->
        <div class="col-md-6 column" id="pjax-container">
        	<?php get_template_part('template-parts/nav/nav-post');?>
        	<div class="jasmine-post-content">
        		<div class="friend-ps"><span>友链每次随机刷新位置</span></div>
	        	<?php if (have_posts()) : the_post(); ?><!--缺一个更新缓存-->
	        	<?php $linkcats = $wpdb->get_results("SELECT T1.name AS name FROM $wpdb->terms T1, $wpdb->term_taxonomy T2 WHERE T1.term_id = T2.term_id AND T2.taxonomy = 'link_category'");
					if($linkcats) : foreach($linkcats as $linkcat) : ?>
					<h3><?php echo $linkcat->name; ?></h3>
					<div class="jasmine-division">
						<div class="jasmine-division-center" >
							<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-heart" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
							  <path fill-rule="evenodd" d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
							</svg>
						</div>
					</div>
					<ul style="display: inline-block;">
	        		<?php $bookmarks = get_bookmarks('orderby=rand&category_name=' . $linkcat->name);
						if ( !empty($bookmarks) ) {
							foreach ($bookmarks as $bookmark) {
								?>
									<li class="friend-link">
					        			<a class="friend-link-a" target="_blank" <?php echo 'href="' . $bookmark->link_url . '" title="' . $bookmark->link_url . '"';?> >
					        				<?php if($bookmark->link_notes!=null && $bookmark->link_notes!='') 
												echo '<img src="'.get_avatar_url($bookmark->link_notes).'" alt="'.$bookmark->link_name.'" class="avatar friend-img"  / >';
											else
												echo '<img src="https://api.ixiaowai.cn/api/api.php" alt="'.$bookmark->link_name.'" class="avatar friend-img"  / >';
											echo '<h4>'.$bookmark->link_name.'</h4>';
											echo'<p class="link-description">'.$bookmark->link_description.'</p>';
											?>
					        			</a>
					        		</li>
								<?php
							}
						} ?>
					</ul>	
				<?php endforeach; endif; ?>		
				<?php endif; ?>
			</div>
		</div>	
        <!--右边栏-->
        <div class="col-md-3 column">
          <?php get_template_part('template-parts/sidebar/right-sidebar');?>
        </div>
      </div>
    </div>
</main>
<?php get_footer();
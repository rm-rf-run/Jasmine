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
							<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-hourglass-split" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
							  <path fill-rule="evenodd" d="M2.5 15a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11zm2-13v1c0 .537.12 1.045.337 1.5h6.326c.216-.455.337-.963.337-1.5V2h-7zm3 6.35c0 .701-.478 1.236-1.011 1.492A3.5 3.5 0 0 0 4.5 13s.866-1.299 3-1.48V8.35zm1 0c0 .701.478 1.236 1.011 1.492A3.5 3.5 0 0 1 11.5 13s-.866-1.299-3-1.48V8.35z"></path>
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
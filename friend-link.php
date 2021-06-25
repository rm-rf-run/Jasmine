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
	        	<?php $linkcats = $wpdb->get_results("SELECT T1.name AS name FROM $wpdb->terms T1, $wpdb->term_taxonomy T2 WHERE T1.term_id = T2.term_id AND T2.taxonomy = 'link_category'");
					if($linkcats) : foreach($linkcats as $linkcat) : ?>
					<h3><?php echo $linkcat->name; ?></h3>
					<div class="jasmine-division">
						<div class="jasmine-division-center" >
							<i class="fa fa-cog fa-spin"></i>
						</div>
					</div>
					<ul style="display: inline-block;">
	        		<?php $bookmarks = get_bookmarks('orderby=rand&category_name=' . $linkcat->name);
						if ( !empty($bookmarks) ) {
							foreach ($bookmarks as $bookmark) {
								?>
									<li class="friend-link">
					        			<a class="friend-link-a" target="_blank" <?php echo 'href="' . $bookmark->link_url . '" title="' . $bookmark->link_url . '"';?> >
					        				<?php if($bookmark->link_image!=null && $bookmark->link_image!='')
												echo '<img src="'.$bookmark->link_image.'" data-src="'.$bookmark->link_image.'" alt="'.$bookmark->link_name.'" class="avatar friend-img lazyload"  / >';
											else
												echo '<img src="https://api.ixiaowai.cn/api/api.php" data-src="https://api.ixiaowai.cn/api/api.php" alt="'.$bookmark->link_name.'" class="avatar friend-img lazyload"  / >';
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
			</div>
			<div class="jasmine-site-information">
				<div class="site-information-content">
					<h5>站点信息</h5>
					<ul>
					  <li><h6>名称 <code><?php echo jasmine_option('jasmine_sitename')==true?jasmine_option('jasmine_sitename'):get_bloginfo('name');?></code></h6></li>
					  <li><h6>链接 <code><?php echo jasmine_option('jasmine_sitehref')==true?jasmine_option('jasmine_sitehref'):get_bloginfo('url');?></code></h6></li>
					  <li><h6>logo <code><?php echo jasmine_option('jasmine_sitelogo')==true?jasmine_option('jasmine_sitelogo'):"master还没设置我呢QAQ";?></code></h6></li>
					  <li><h6>描述 <code><?php echo jasmine_option('jasmine_sitedescription')==true?jasmine_option('jasmine_sitedescription'):get_bloginfo('description');?></code></h6></li>
					</ul>
					<h5>友链申请要求</h5>
					<ul class="site-information-requirement">
					  <li><h6>申请时请先加上本站的连接 (o°ω°o)</h6></li>
					  <li><h6>原创博客，非采集站，全站 HTTPS 优先</h6></li>
					  <li><h6>请勿提交 ico 或 分辨率小于 100x100 的图标</h6></li>
					  <li><h6>网站内容遵守国家法律法规</h6></li>
					</ul>
					<h5>申请方式</h5>
					<ul>
						<li><h6>站长邮箱：<code><?php echo jasmine_option('jasmine_siteemail')==true?jasmine_option('jasmine_siteemail'):get_bloginfo('admin_email');?></code></h6></li>
						<li>
							<h6>主题：申请友链</h6>
							<p>
								<a href="https://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=<?php echo jasmine_option('jasmine_sitekey')==true?jasmine_option('jasmine_sitekey'):get_bloginfo('admin_email')?>" target="_blank">
									<button type="button" class="btn btn-primary">一键发送</button>
								</a>
							</p>
						</li>
					</ul>
				</div>
			</div>
			<?php comments_template();?>
		</div>
        <!--右边栏-->
        <div class="col-md-3 column" id="hide-column">
          <?php get_template_part('template-parts/sidebar/right-sidebar');?>
        </div>
      </div>
    </div>
</main>
<?php get_footer();
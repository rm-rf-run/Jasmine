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
        	<div class="thumbnail-shadow">
        		<h1 class="post-title">归档</h1>
	        	<div class="post-info">
		        	<span class="post-view">
		        		<i class="memory memory-view"></i>&nbsp;19
		        	</span>&nbsp;•&nbsp;
		        	<span class="post-comments">
		        		<i class="memory memory-comment"></i>&nbsp;<a href="http://localhost/wordpress/post-archives/#respond">0</a>
		        	</span>
		        	<span class="post-edit">&nbsp;•&nbsp;<i class="memory memory-edit"></i>&nbsp;<a class="post-edit-link" href="http://localhost/wordpress/wp-admin/post.php?post=21&amp;action=edit">编辑</a>
		        	</span>
		        </div>
		    </div>
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
<?php
/**
 * 
 */

?>
<?php get_header()?>
<main role="main" id="main" style="height: 800px;">
    <div class="container">
      <div class="row clearfix">
        <!--左边栏-->
        <div class="col-md-3 column">
          <?php get_template_part( 'template-parts/sidebar/left-sidebar');?>
        </div>
        <!--中间栏-->
        <div class="col-md-6 column" id="pjax-container">
        	<?php get_template_part( 'template-parts/nav/nav-post');?>
        	<div>
        		<?php if( have_posts() ) : ?>
				<?php while( have_posts() ) : the_post(); ?>
					<?php the_content()?>
				<?php endwhile; ?>
				<?php endif; ?>
        	</div>
        </div>
        <!--右边栏-->
        <div class="col-md-3 column">
          <?php get_template_part( 'template-parts/sidebar/right-sidebar');?>
        </div>
      </div>
      <div class="row clearfix">
        <div class="col-md-12 column">

        </div>
      </div>
    </div>
</main>
<?php get_footer(); ?>
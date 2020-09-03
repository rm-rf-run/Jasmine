<?php /**
 * Jasmine index file
 *
 * @category WordPress
 * @package  Jasmine
 * @author   吃饭用大碗的程序猿 <2671412803@qq.com>
 * @license  http://www.gnu.org/copyleft/gpl.html GNU General Public License
 * @link     https://github.com/rm-rf-run/Jasmine
 * */
get_header();
?>
  <main role="main" id="main">
    <div class="container">
      <div class="row clearfix">
        <!--左边栏-->
        <div class="col-md-3 column">
          <?php get_template_part( 'template-parts/sidebar/left-sidebar');?>
        </div>
        <!--中间栏-->
        <div class="col-md-6 column" id="pjax-container">
        	<?php if ( is_home() && is_front_page() ) :
            //导入主页的面包屑导航
            get_template_part( 'template-parts/nav/nav-home');
			     else :
            //导入文章或者页面的面包屑导航
            get_template_part( 'template-parts/nav/nav-post');
           endif;
           ?>
			<?php
				if ( have_posts() ) :

            // 开始循环(Loop).
				    while ( have_posts() ) : the_post();
                /*
                *包含内容的帖子格式特定模板。
                *如果您想在子主题中覆盖它，那么就选择一个文件
                *称为content-___.php（其中___是Post格式名），并且将被替代。
                */
                get_template_part( 'template-parts/post/content', get_post_format() );
				    endwhile;

            //分页
            the_posts_pagination(
                array(
                  'mid_size'           => 2,
                  'aria_current'       => __( 'page' ),
                  'screen_reader_text' => __( ' ' ),
                  'aria_label'         => __( 'Page navigation' ),
                  'class'              => 'pagination',
                  'prev_text'          => __( '上一页', 'textdomain' ),
                  'next_text'          => __( '下一页', 'textdomain' )
                )
              );

        else :
    _e( 'Sorry, no posts matched your criteria.', 'textdomain' );
				endif;
			?>
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

<?php get_footer();?>
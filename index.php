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
<body>
  <header class="fixed-top">
    <nav class="navbar navbar-expand-lg navbar-white head-nav ">
      <a class="navbar-brand" href="<?php bloginfo('url');?>"><?php bloginfo('name');?></a>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <?php if (has_nav_menu('header-menu')) {
    wp_nav_menu(
        array(
            // 'menu' => '首页',//(int|string|WP_Term) 所需菜单。接受菜单ID、slug、name或object。
            'menu_class'     => 'navbar-nav mr-auto', //(string)用于构成菜单的ul元素的CSS类。默认“menu”。
            'menu_id'        => '', //(string)应用于构成菜单的ul元素的ID。默认为menu-menu-1 ，递增。
            'container'      => false, //(string)是否包装ul，以及包装什么。默认为“ div”。
            // 'container_class' => '',//(string)应用于容器的类。默认的“menu-{menu slug}-container”。
            // 'container_id' => '',//(string)应用于容器的ID。
            'fallback_cb'    => false, //(callable|bool)如果菜单不存在，则会触发一个回调函数。默认为“wp_page_menu”。设置为false表示没有回退。
            // 'before' => '',//(string)链接标记之前的文本。
            // 'after' => '',//(string)链接标记之后的文本。
            // 'link_before' => '',//(string)链接文本之前的文本。
            // 'link_after' => '',//(string)链接文本之后的文本。
            // 'echo' => '',//(bool)是回显菜单还是返回菜单。默认为true。
            // 'depth' => '',//(int)要包含多少个层次结构。0表示全部。默认值0。
            // 'walker' => '',//(object)自定义walker类的实例。
            'theme_location' => 'header-menu', //(string)要使用的主题位置。必须向register_nav_menu（）注册，以便用户选择。
            // 'items_wrap' => '',//(string)应该如何包装列表项。默认值为带有ID和类的ul。使用带编号占位符的printf（）格式。
            // 'item_spacing' => '',//(string)是否在菜单的HTML中保留空格。接受“保留”或“丢弃”。默认为“保留”。默认值：array（）
        )
    );
}?>
      </div>
    </nav>
  </header>

  <main role="main" id="main" style="height: 800px;">
    <div class="container">
      <div class="row clearfix">
        <!--左边栏-->
        <div class="col-md-3 column">
          <!--个人信息-->
          <div id="about-me">
            <div id="about-me-1" class="d-flex">
              <div id="avatar" class="flex-column">
                <a href="<?php bloginfo('url');?>">
                  <?php echo get_simple_local_avatar(get_bloginfo('admin_email'), '50'); ?>
                </a>
              </div>
              <div id="user-info" class="flex-column">
                <div>
                  <a href="<?php bloginfo('url');?>">
                    <?php $author_obj = get_user_by('email', get_bloginfo('admin_email'));
the_author_meta('nickname', $author_obj->ID);?>
                  </a>
                </div>
                <div>

                </div>
              </div>
            </div>
            <div id="about-me-2" class="d-flex">
              <!-- <span class="animateNum" data-animatetarget="999.9">999.9</span>万
              <span class="animateNum" data-animatetype="num" data-animatetarget="2140" style="">2140</span> -->
              <dl class="text-center">
                <dt class="text-center">
                  <span class="animateNum" data-animatetype="num" data-animatetarget="2140" style="">2140</span>
                </dt>
                <dd class="text-center">
                  文章
                </dd>
              </dl>
              <dl class="text-center">
                <dt class="text-center">
                  <span class="animateNum" data-animatetype="num" data-animatetarget="2140" style="">2140</span>
                </dt>
                <dd class="text-center">
                  获赞
                </dd>
              </dl>
              <dl class="text-center">
                <dt class="text-center">
                  <span class="animateNum" data-animatetype="num" data-animatetarget="2140" style="">2140</span>
                </dt>
                <dd class="text-center">
                  评论
                </dd>
              </dl>
              <dl class="text-center">
                <dt class="text-center">
                  <span class="animateNum" data-animatetype="num" data-animatetarget="2140" style="">2140</span>
                </dt>
                <dd class="text-center">
                  访问
                </dd>
              </dl>
            </div>
            <div class="item-rank"></div>
            <div id="about-me-3">
              <div class="d-flex">
				<div class="icon-badge">
					<img src="https://github.com/fluidicon.png" alt="GitHub">
				</div>
				<div class="icon-badge">
					<img src="https://github.com/fluidicon.png" alt="GitHub">
				</div>
				<div class="icon-badge">
					<img src="https://github.com/fluidicon.png" alt="GitHub">
				</div>
				<div class="icon-badge">
					<img src="https://github.com/fluidicon.png" alt="GitHub">
				</div>
				<div class="">
					<img src="https://github.com/fluidicon.png" alt="GitHub">
				</div>
				<div class="icon-badge">
					<img src="https://github.com/fluidicon.png" alt="GitHub">
				</div>
              </div>
            </div>
          </div>
        </div>
        <!--中间栏-->
        <div class="col-md-7 column">
        	<?php if ( is_home() && is_front_page() ) : ?>
				<ul class="nav jasmine-nav">
				  <li class="nav-item">
				    <a class="nav-link active" href="#">全部</a>
				  </li>
				  <li class="nav-item">
				    <a class="nav-link" href="#">文章</a>
				  </li>
				  <li class="nav-item">
				    <a class="nav-link" href="#">说说</a>
				  </li>
				</ul>
			<?php else : ?>
				<nav aria-label="breadcrumb">
				  <ol class="breadcrumb">
				    <li class="breadcrumb-item"><a href="#">Home</a></li>
				    <li class="breadcrumb-item"><a href="#">Library</a></li>
				    <li class="breadcrumb-item active" aria-current="page">Data</li>
				  </ol>
				</nav>
			<?php endif; ?>
			<?php
				if ( have_posts() ) :
				    while ( have_posts() ) : the_post();
				        ?>
						<article class="jasmine-article lazyload" style="background-image: url(<?php $img_src = wp_get_attachment_image_src( get_post_thumbnail_id( $post->ID ), "Full");
echo $img_src[0];?>);">
							<div class="post-thumb">
								<!-- <a href="<?php echo get_permalink($ID); ?>"><?php $image_id = get_post_thumbnail_id(); $image = get_the_post_thumbnail( $post->ID, 'thumbnail', array( 'class' => 'lazyload' )); echo $image;?></a> -->
							</div>
							<div class="post-content-wrap">
								<div class="post-content">
									<?php the_title()?>
									<?php $author_obj = get_user_by('email', get_bloginfo('admin_email'));
the_author_meta('nickname', $author_obj->ID);?>
								</div>
							</div>
						</article>
				        <?php
				    endwhile;
				endif;
			?>
        </div>
        <!--右边栏-->
        <div class="col-md-2 column">

        </div>
      </div>
      <div class="row clearfix">
        <div class="col-md-12 column">

        </div>
      </div>
    </div>
  </main>

<?php get_footer();?>
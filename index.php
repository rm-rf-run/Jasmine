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
						<article class="jasmine-article">
              <div class="jasmine-panel">
                <div class="lazyload jasmine-article-img" style="background-image: url(<?php
                  if ( has_post_thumbnail() ) {
                    //当前日志有缩略图
                    $img_src = wp_get_attachment_image_src( get_post_thumbnail_id( $post->ID ), "Full");echo $img_src[0];
                  } else {
                    //当前日志没有设置缩略图则随机上图片，有概率重复
                    $id = rand(1,12);
                    $image[1] = "https://api.ixiaowai.cn/gqapi/gqapi.php";
                    $image[2] = "https://api.ixiaowai.cn/api/api.php";
                    $image[3] = "http://api.btstu.cn/sjbz/?lx=dongman";
                    $image[4] = "http://api.btstu.cn/sjbz/?lx=suiji";
                    $image[5] = "https://img.xjh.me/random_img.php?type=bg&ctype=nature&return=302";
                    $image[6] = "https://api.loli.rocks/tianshijianglindaowoshenbian/index.php";
                    $image[7] = "https://api.ixiaowai.cn/gqapi/gqapi.php";
                    $image[8] = "https://random.52ecy.cn/randbg.php";
                    $image[9] = "https://uploadbeta.com/api/pictures/random/?key=BingEverydayWallpaperPicture";
                    $image[10] = "http://www.dmoe.cc/random.php";
                    $image[11] = "https://acg.yanwz.cn/api.php";
                    $image[12] = "https://img.paulzzh.tech/touhou/random";
                    print($image[$id]);
                  }
                  ?>);">
                  </div>
              </div>
              <div class="jasmine-content">
                <h2><a href="<?php echo get_permalink(); ?>"><?php the_title();?></a></h2>
                <p class="jasmine-content-foot">
                  <?php echo get_the_excerpt();?>
                </p>
                <div>
                  <span class="jasmine-content-foot">
                    <?php printf( __( '<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-calendar-date" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M6.445 11.688V6.354h-.633A12.6 12.6 0 0 0 4.5 7.16v.695c.375-.257.969-.62 1.258-.777h.012v4.61h.675zm1.188-1.305c.047.64.594 1.406 1.703 1.406 1.258 0 2-1.066 2-2.871 0-1.934-.781-2.668-1.953-2.668-.926 0-1.797.672-1.797 1.809 0 1.16.824 1.77 1.676 1.77.746 0 1.23-.376 1.383-.79h.027c-.004 1.316-.461 2.164-1.305 2.164-.664 0-1.008-.45-1.05-.82h-.684zm2.953-2.317c0 .696-.559 1.18-1.184 1.18-.601 0-1.144-.383-1.144-1.2 0-.823.582-1.21 1.168-1.21.633 0 1.16.398 1.16 1.23z"/>
  <path fill-rule="evenodd" d="M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1zm1-3a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2z"/>
  <path fill-rule="evenodd" d="M3.5 0a.5.5 0 0 1 .5.5V1a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 .5-.5zm9 0a.5.5 0 0 1 .5.5V1a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 .5-.5z"/>
</svg>: %s', 'textdomain' ), get_the_modified_date('Y-M-j') ); ?>
                  </span>
                  <span class="jasmine-content-foot">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chat-dots" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/>
                      <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                    </svg>
                    <?php echo get_comment_count(get_the_ID())['approved'];?>
                  </span>
                  <span class="jasmine-content-foot">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-eye" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.134 13.134 0 0 0 1.66 2.043C4.12 11.332 5.88 12.5 8 12.5c2.12 0 3.879-1.168 5.168-2.457A13.134 13.134 0 0 0 14.828 8a13.133 13.133 0 0 0-1.66-2.043C11.879 4.668 10.119 3.5 8 3.5c-2.12 0-3.879 1.168-5.168 2.457A13.133 13.133 0 0 0 1.172 8z"/>
                      <path fill-rule="evenodd" d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                    </svg>
                    1k
                  </span>
                  <span class="jasmine-content-foot">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-hand-thumbs-up" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16v-1c.563 0 .901-.272 1.066-.56a.865.865 0 0 0 .121-.416c0-.12-.035-.165-.04-.17l-.354-.354.353-.354c.202-.201.407-.511.505-.804.104-.312.043-.441-.005-.488l-.353-.354.353-.354c.043-.042.105-.14.154-.315.048-.167.075-.37.075-.581 0-.211-.027-.414-.075-.581-.05-.174-.111-.273-.154-.315L12.793 9l.353-.354c.353-.352.373-.713.267-1.02-.122-.35-.396-.593-.571-.652-.653-.217-1.447-.224-2.11-.164a8.907 8.907 0 0 0-1.094.171l-.014.003-.003.001a.5.5 0 0 1-.595-.643 8.34 8.34 0 0 0 .145-4.726c-.03-.111-.128-.215-.288-.255l-.262-.065c-.306-.077-.642.156-.667.518-.075 1.082-.239 2.15-.482 2.85-.174.502-.603 1.268-1.238 1.977-.637.712-1.519 1.41-2.614 1.708-.394.108-.62.396-.62.65v4.002c0 .26.22.515.553.55 1.293.137 1.936.53 2.491.868l.04.025c.27.164.495.296.776.393.277.095.63.163 1.14.163h3.5v1H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z"/>
                  </svg>
                  1k
                  </span>
                  <span class="jasmine-content-foot">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-person-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                    </svg>
                    <?php the_author(); ?>
                  </span>
                  <span class="jasmine-content-foot">
                    <?php edit_post_link('编辑','','');?><!--只有在登陆后才可见到，对日志进行编辑的链接-->
                  </span>
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
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
  <header>
    <nav class="navbar navbar-expand-lg navbar-white bg-white head-nav ">
      <a class="navbar-brand" href=""><?php bloginfo('name'); ?></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <?php if (has_nav_menu('header-menu')) {
                    wp_nav_menu(
                        array(
                        // 'menu' => '首页',//(int|string|WP_Term) 所需菜单。接受菜单ID、slug、name或object。
                        'menu_class' => 'navbar-nav mr-auto',//(string)用于构成菜单的ul元素的CSS类。默认“menu”。
                        'menu_id' => '',//(string)应用于构成菜单的ul元素的ID。默认为menu-menu-1 ，递增。
                        'container' => false,//(string)是否包装ul，以及包装什么。默认为“ div”。
                        // 'container_class' => '',//(string)应用于容器的类。默认的“menu-{menu slug}-container”。
                        // 'container_id' => '',//(string)应用于容器的ID。
                        'fallback_cb' => false,//(callable|bool)如果菜单不存在，则会触发一个回调函数。默认为“wp_page_menu”。设置为false表示没有回退。
                        // 'before' => '',//(string)链接标记之前的文本。
                        // 'after' => '',//(string)链接标记之后的文本。
                        // 'link_before' => '',//(string)链接文本之前的文本。
                        // 'link_after' => '',//(string)链接文本之后的文本。
                        // 'echo' => '',//(bool)是回显菜单还是返回菜单。默认为true。
                        // 'depth' => '',//(int)要包含多少个层次结构。0表示全部。默认值0。
                        // 'walker' => '',//(object)自定义walker类的实例。
                        'theme_location' => 'header-menu',//(string)要使用的主题位置。必须向register_nav_menu（）注册，以便用户选择。
                         // 'items_wrap' => '',//(string)应该如何包装列表项。默认值为带有ID和类的ul。使用带编号占位符的printf（）格式。
                        // 'item_spacing' => '',//(string)是否在菜单的HTML中保留空格。接受“保留”或“丢弃”。默认为“保留”。默认值：array（）
                        )
                    );
                }?>
      </div>
    </nav>
  </header>
  
  <main role="main" id="main">
    <div class="container">
      <div class="row clearfix">
        <!--左边栏-->
        <div class="col-md-2 column">
          <!--个人信息-->
          <div id="about-me">
            <div id="about-me-1">
              <div id="avatar">
                <!-- <?php echo get_avatar(get_the_author_meta('email'), 50); ?> -->
                <?php echo get_bloginfo('template_directory') . '/assets/images/gravatar.jpg';?>
              </div>
            </div>
          </div>
        </div>
        <!--中间栏-->
        <div class="col-md-8 column">
          
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

<?php get_footer(); ?>    
<!--
    ::::::'##::::'###:::::'######::'##::::'##:'####:'##::: ##:'########:
    :::::: ##:::'## ##:::'##... ##: ###::'###:. ##:: ###:: ##: ##.....::
    :::::: ##::'##:. ##:: ##:::..:: ####'####:: ##:: ####: ##: ##:::::::
    :::::: ##:'##:::. ##:. ######:: ## ### ##:: ##:: ## ## ##: ######:::
    '##::: ##: #########::..... ##: ##. #: ##:: ##:: ##. ####: ##...::::
     ##::: ##: ##.... ##:'##::: ##: ##:.:: ##:: ##:: ##:. ###: ##:::::::
    . ######:: ##:::: ##:. ######:: ##:::: ##:'####: ##::. ##: ########:
    :......:::..:::::..:::......:::..:::::..::....::..::::..::........::
-->
<!doctype html>
<html lang="zh-CN">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.0/dist/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
    <!-- Optional CSS -->
    <link href="<?php bloginfo('template_directory');?>/style.css" rel="stylesheet">
    <link rel="stylesheet" href="<?php bloginfo('template_directory');?>/assets/js/runningJs/css/jquery.running.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tocbot/4.11.1/tocbot.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.min.css">
    <!-- end -->
    <title>
        <?php $title = wp_title('', false);
if ($title == ""): echo bloginfo('name');else:echo $title;endif;?>
    </title>
    <?php wp_head();?>
    <style type="text/css">
      .jasmine-background{
          background-image: url(<?php echo jasmine_option('jasmine_bg'); ?>);
          background-size: cover;
          background-repeat: no-repeat;
          background-attachment: fixed;
      }
    </style>
  </head>
  <body <?php body_class();?>>
  <header class="fixed-top">
    <div id="jasmine-pc-menu">
      <nav class="navbar navbar-expand-lg navbar-white head-nav ">
      <a class="navbar-brand link link--kukuri" href="<?php bloginfo('url');?>" style="color: #c5c2b8;" data-letters="<?php bloginfo('name');?>"><span><?php bloginfo('name');?></span></a>
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
        ));
    ?>
    <form role="search" method="get" id="searchform" action="<?php echo home_url("/"); ?>" autocomplete="off">
        <i class="fa fa-search" aria-hidden="true"></i>
        <input type="text" value="<?php the_search_query();?>" name="s" id="s" placeholder="搜索..."/>
    </form>
    <a id="menu-login" class="menu-login <?php if (!is_user_logged_in()) {echo 'not-login"' . 'href="' . get_option('home') . '/wp-admin"';} else {echo 'have-login"';}?> >
            <?php if (is_user_logged_in()) {
        echo get_simple_local_avatar(get_bloginfo('admin_email'), 38);
    } else {
        echo "<i data-toggle='tooltip' data-placement='right' title='点击登录' class='fa fa-user fa-2x' aria-hidden='true'></i>";
    }?>
    </a>
      <?php if (is_user_logged_in()) {?>
      <div id="personal-menu">
        <ul id="personal-menu-ul">
          <li><a href="<?php echo get_option('home'); ?>/wp-admin">后台&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-tachometer" aria-hidden="true"></i></a></li>
          <li><a href="<?php echo get_option('home'); ?>/wp-login.php?action=logout">登出&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-sign-out" aria-hidden="true"></i> </a></li>
        </ul>
      </div>
  <?php }}?>
      </div>
    </nav>
    </div>
  </header>
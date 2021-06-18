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

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/rm-rf-run/jasmine/inc/css/support-font.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/rm-rf-run/jasmine/inc/css/support.css">
    <link href="https://cdn.jsdelivr.net/gh/rm-rf-run/jasmine/style.css" rel="stylesheet" media="screen">
    <title>
		<?php $title = wp_title( '', false );
		if ( $title == "" ): echo bloginfo( 'name' );
		else:echo $title;endif; ?>
    </title>
	<?php wp_head(); ?>
    <style type="text/css">
        .jasmine-background {
            background-image: url(<?php echo jasmine_option('jasmine_bg'); ?>);
            background-size: cover;
            background-repeat: no-repeat;
            background-attachment: fixed;
        }

        #mobile-header {
            top: 0;
            background-image: url(<?php echo jasmine_option('jasmine_mobile_bg'); ?>);
            background-position: center top;
            background-repeat: no-repeat;
            background-attachment: scroll;
            background-size: cover;
        }
    </style>
</head>
<body <?php body_class(); ?>>
<header class="fixed-top">
    <div id="jasmine-pc-menu">
        <nav class="navbar navbar-expand-lg navbar-white head-nav ">
            <span id="nav-bars"><i class="fa fa-bars fa-lg" aria-hidden="true"></i></span>
            <a class="navbar-brand link link--kukuri" href="<?php bloginfo( 'url' ); ?>" style="color: #c5c2b8;"
               id="site-name" data-letters="<?php bloginfo( 'name' ); ?>"><span><?php bloginfo( 'name' ); ?></span></a>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
				<?php if ( has_nav_menu( 'header-menu' ) ) {
				wp_nav_menu(
					array(
						'menu_class'     => 'navbar-nav mr-auto',
						'menu_id'        => '',
						'container'      => false,
						'fallback_cb'    => false,
						'theme_location' => 'header-menu',
					) );
				?>
                <form role="search" method="get" id="searchform" action="<?php echo home_url( "/" ); ?>"
                      autocomplete="off">
                    <i class="fa fa-search" aria-hidden="true"></i>
                    <input type="text" value="<?php the_search_query(); ?>" name="s" id="s" placeholder="搜索..."/>
                </form>
                <a id="menu-login" class="menu-login <?php if ( ! is_user_logged_in() ) {
					echo 'not-login"' . 'href="' . get_option( 'home' ) . '/wp-admin"';
				} else {
					echo 'have-login"';
				} ?> >
            <?php if ( is_user_logged_in() ) {
					echo get_simple_local_avatar( get_bloginfo( 'admin_email' ), 38 );
				} else {
					echo "<i data-toggle='tooltip' data-placement='right' title='点击登录' class='fa fa-user fa-2x' aria-hidden='true'></i>";
				} ?>
    </a>
      <?php if ( is_user_logged_in() ) { ?>
      <div id=" personal-menu">
                <ul id="personal-menu-ul">
                    <li><a href="<?php echo get_option( 'home' ); ?>/wp-admin">后台&nbsp;<i
                                    class="fa fa-tachometer" aria-hidden="true"></i></a></li>
                    <li><a href="<?php echo get_option( 'home' ); ?>/wp-login.php?action=logout">登出&nbsp;<i
                                    class="fa fa-sign-out" aria-hidden="true"></i> </a></li>
                </ul>
            </div>
			<?php }
			} ?>
    </div>
    </nav>
    </div>
</header>

<header id="mobile-header">
    <div id="mobile-user-info">
		<?php echo get_simple_local_avatar( get_bloginfo( 'admin_email' ), 100 ); ?>
        <h3><?php echo jasmine_option( 'author_name' ); ?></h3>
		<?php if ( has_nav_menu( 'header-menu' ) ) {
			wp_nav_menu(
				array(
					'menu_id'        => 'mobile-header-ul',
					'fallback_cb'    => false,
					'theme_location' => 'header-menu',
					'container_id'   => 'mobile-nav',
				) );
		}
		?>
    </div>
    <div class="mobile-menu-plur"></div>
</header>
<div id="mobile-shade"></div>
<!DOCTYPE html>
<html>

<head>
    <title>
        <?php $title = wp_title( '', false );
        if ( $title == "" ): echo bloginfo( 'name' );
        else:echo $title.'-'.get_bloginfo( 'name' );endif; ?>
    </title>
    <?php wp_head(); ?>
    <link type="text/css" rel="stylesheet" href="<?php echo get_template_directory_uri() . '/assets/css/404.css';?>" />
</head>

<body class="permission_denied">
<div id="tsparticles"></div>
<div class="denied__wrapper">
    <h1>404</h1>
    <h3>抱歉 <span>迷路了?</span> 这是啥呀? emmm，看起来那个页面不存在。</h3>
    <img id="astronaut" src="<?php echo get_template_directory_uri() . '/assets/images/astronaut.svg';?>" />
    <img id="planet" src="<?php echo get_template_directory_uri() . '/assets/images/planet.svg';?>" />
    <a href="<?php echo home_url("/"); ?>"><button class="denied__link">Go Home</button></a>
</div>

<script type="text/javascript"
        src="https://cdn.jsdelivr.net/npm/tsparticles@1.18.11/dist/tsparticles.min.js"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri() . '/assets/js/404.js';?>"></script>

</html>
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
    <!-- end -->
    <title>
        <?php $title = wp_title('',false);
        if ( $title == "" ) : echo bloginfo('name'); else : echo $title; endif;?>
    </title>
    <?php wp_head();?>
  </head>
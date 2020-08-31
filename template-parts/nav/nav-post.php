<?php
/**
 * Template part for displaying post Breadcrumb
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package WordPress
 * @subpackage Jasmine
 * @since Jasmine 1.0
 * @version 1.0
 */

?>

<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    当前位置：
    <li><a href="<?php bloginfo('url');?>">首页</a></li>
    <li><a href="">&nbsp;>&nbsp;<?php the_category(', ') ?></a></li>
    <?php if (is_singular('post')){?>
    <li><a href="">&nbsp;>&nbsp;<?php the_title();}?></a></li>
  </ol>
</nav>
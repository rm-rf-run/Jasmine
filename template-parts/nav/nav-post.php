<?php
/**
 *  ::::::'##::::'###:::::'######::'##::::'##:'####:'##::: ##:'########:
 *  :::::: ##:::'## ##:::'##... ##: ###::'###:. ##:: ###:: ##: ##.....::
 *  :::::: ##::'##:. ##:: ##:::..:: ####'####:: ##:: ####: ##: ##:::::::
 *  :::::: ##:'##:::. ##:. ######:: ## ### ##:: ##:: ## ## ##: ######:::
 *  '##::: ##: #########::..... ##: ##. #: ##:: ##:: ##. ####: ##...::::
 *   ##::: ##: ##.... ##:'##::: ##: ##:.:: ##:: ##:: ##:. ###: ##:::::::
 *  . ######:: ##:::: ##:. ######:: ##:::: ##:'####: ##::. ##: ########:
 *  :......:::..:::::..:::......:::..:::::..::....::..::::..::........::
 *
 * @package WordPress
 * @Theme jasmine
 *
 * @author admin@prettywordpress.com
 * @link https://www.prettywordpress.com
 * Template Name: 文章导航
 */

?>

<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    当前位置：
    <li><a href="<?php bloginfo('url');?>" rel="bookmark">首页</a></li>
    <?php $category = get_the_category();if ($category) {?>
    <li>&nbsp;>&nbsp;<a href="<?php echo esc_url(get_category_link($category[0]->term_id)); ?>" rel="bookmark"><?php the_category(', ');}?></a></li>
    <?php if (is_singular()) {?>
    <li>&nbsp;>&nbsp;<a href="<?php esc_url(the_permalink());?>" rel="bookmark"><?php the_title();}?></a></li>
  </ol>
</nav>
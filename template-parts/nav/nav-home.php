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
 * Template Name: 首页导航
 */

?>

<ul class="nav jasmine-nav">
  <li class="nav-item">
    <a class="nav-link <?php if (!isset($_GET['post']) && !isset($_GET['order'])) {
    echo 'class="current"';
}
?>" href="<?php echo get_option('home'); ?>">全部</a>
  </li>
  <li class="nav-item">
    <a class="nav-link <?php if (isset($_GET['post']) && ($_GET['post'] == 'post')) {
    echo 'class="current"';
}
?>" href="<?php echo get_option('home'); ?>/?post=post">文章</a>
  </li>
  <li class="nav-item">
    <a class="nav-link <?php if (isset($_GET['post']) && ($_GET['post'] == 'shuoshuo')) {
    echo 'class="current"';
}
?>" href="<?php echo get_option('home'); ?>/?post=shuoshuo">说说</a>
  </li>
  <li class="nav-item"><a class="nav-link <?php if (isset($_GET['order']) && ($_GET['order'] == 'rand')) {
    echo 'class="current"';
}
?>" href="<?php echo get_option('home'); ?>/?order=rand" rel="nofollow">随机阅读</a></li>
	<li class="nav-item"><a class="nav-link <?php if (isset($_GET['order']) && ($_GET['order'] == 'commented')) {
    echo 'class="current"';
}
?>"  href="<?php echo get_option('home'); ?>/?order=commented" rel="nofollow">评论最多</a></li>
	<li class="nav-item"><a class="nav-link <?php if (isset($_GET['order']) && ($_GET['order'] == 'alpha')) {
    echo 'class="current"';
}
?>"  href="<?php echo get_option('home'); ?>/?order=alpha" rel="nofollow">标题排序</a></li>
</ul>

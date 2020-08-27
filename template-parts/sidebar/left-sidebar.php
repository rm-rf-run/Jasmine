<?php
/**
 * 左边栏
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package WordPress
 * @subpackage Jasmine
 * @since Jasmine 1.0
 * @version 1.0
 */

?>

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
  		<a href="https://github.com/rm-rf-run/Jasmine">
          <img src="https://images.weserv.nl/?url=https://profile.csdnimg.cn/D/A/A/3_rm_and_rf" alt="GitHub" data-toggle="tooltip" data-placement="top" title="CSDN">
      </a>
  	</div>
  	<div class="icon-badge">
      <a href="https://github.com/rm-rf-run/Jasmine">
          <img src="https://weibo.com/favicon.ico" alt="GitHub" data-toggle="tooltip" data-placement="top" title="weibo">
      </a>
    </div>
    <div class="icon-badge">
      <a href="https://github.com/rm-rf-run/Jasmine">
          <img src="https://github.com/fluidicon.png" alt="GitHub" data-toggle="tooltip" data-placement="top" title="GitHub">
      </a>
    </div>
    <div class="icon-badge">
      <a href="https://github.com/rm-rf-run/Jasmine">
          <img src="https://github.com/fluidicon.png" alt="GitHub" data-toggle="tooltip" data-placement="top" title="GitHub">
      </a>
    </div>
    <div class="icon-badge">
      <a href="https://github.com/rm-rf-run/Jasmine">
          <img src="https://github.com/fluidicon.png" alt="GitHub" data-toggle="tooltip" data-placement="top" title="GitHub">
      </a>
    </div>
    <div class="icon-badge">
      <a href="https://github.com/rm-rf-run/Jasmine">
          <img src="https://github.com/fluidicon.png" alt="GitHub" data-toggle="tooltip" data-placement="top" title="GitHub">
      </a>
    </div>
  </div>
</div>
</div>

<div class="jasmine-love">
  <img src="http://q1.qlogo.cn/g?b=qq&nk=2671412803&s=100" class="jasmine-love-me" /><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-heart-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
</svg><img src="http://q1.qlogo.cn/g?b=qq&nk=2448490959&s=100" class="jasmine-love-she" /><br/>
  <span id="htmer_time"></span>
</div>

<div class="jasmine-bilbil">
  
</div>
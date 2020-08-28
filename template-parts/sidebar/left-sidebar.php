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
      说说
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
      <a href="tencent://message/?uin=2671412803&Site=&Menu=yes">
          <img src="https://im.qq.com/favicon.ico" alt="QQ" data-toggle="tooltip" data-placement="top" title="QQ">
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
  <div class="jasmine-bilbil-gradient"></div>
  <div class="jasmine-bilbil-me">
    <div class="h-info clearfix">
      <div class="h-avatar">
        <a href="https://space.bilibili.com/113314236">
          <img src="https://images.weserv.nl/?url=https://i2.hdslb.com/bfs/face/890cc0201dc473a238a788fb116a1750e0d8c65a.jpg_64x64.jpg" id="h-avatar">
        </a>
      </div>
      <div class="h-basic">
        <div>
          <a href="https://space.bilibili.com/113314236">
            <span id="h-name">Chuir-</span>
          </a>
          <a href="//www.bilibili.com/html/help.html#k" target="_blank" lvl="2" class="h-level m-level"></a>
          <a href="//account.bilibili.com/account/big" target="_blank" class="h-vipType">没有大会员</a><!---->
        </div>
        <div class="h-basic-spacing">
          <h4 title="个人博客：www.prettywordpress.com" class="h-sign">博客:www.prettywordpress.com</h4>
        </div>
      </div>
    </div>
  </div>
  <div class="jasmine-bilbil-btn">
    <div class="jasmine-bilbil-btn-add">
      <a href="https://space.bilibili.com/113314236">
        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-plus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z"/>
        <path fill-rule="evenodd" d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z"/>
        </svg>
        <span>关注</span>
      </a>
    </div>
    <div class="jasmine-bilbil-message">
      <a href="https://message.bilibili.com/#/whisper/mid113314236">
        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-cursor" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103zM2.25 8.184l3.897 1.67a.5.5 0 0 1 .262.263l1.67 3.897L12.743 3.52 2.25 8.184z"/>
        </svg>
        <span>发消息</span>
      </a>
    </div>
  </div>
</div>

<div class="jasmine-bilbil-statistics">
      <a href="https://space.bilibili.com/113314236/fans/follow" class="jasmine-bilbil-statistics-a">
        <p class="statistics-data">
          关注数
        </p>
        <p class="statistics-data-num">
          <?php echo do_shortcode('[bilbil uid="113314236" option="follow"]'); ?>
        </p>
      </a>
      <a href="https://space.bilibili.com/113314236/fans/fans" class="jasmine-bilbil-statistics-a">
        <p class="statistics-data">
          粉丝数
        </p>
        <p class="statistics-data-num">
          <?php echo do_shortcode('[bilbil uid="113314236" option="fans"]'); ?>
        </p>
      </a>
    </div>
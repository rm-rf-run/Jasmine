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
 * Template Name: 左边栏
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
      <span class="animateNum" data-animatetype="num" data-animatetarget="<?php do_shortcode('[counPost]')?>" style=""><?php do_shortcode('[counPost]')?></span>
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
      <span class="animateNum" data-animatetype="num" data-animatetarget="<?php do_shortcode('[countComments]')?>" style=""><?php do_shortcode('[countComments]')?></span>
    </dt>
    <dd class="text-center">
      评论
    </dd>
  </dl>
  <dl class="text-center">
    <dt class="text-center">
      <span class="animateNum" data-animatetype="num" data-animatetarget="<?php do_shortcode('[countViews]')?>" style=""><?php do_shortcode('[countViews]')?></span>
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
      <a href="<?php if(!empty(jasmine_option('jasmine_bilbil'))){echo esc_attr(jasmine_option('jasmine_bilbil'));}?>">
          <img src="https://cdn.jsdelivr.net/gh/rm-rf-run/Jasmine/assets/images/bilbil.ico" alt="B站" data-toggle="tooltip" data-placement="top" title="B站">
      </a>
    </div>
  	<div class="icon-badge">
  		<a href="<?php if(!empty(jasmine_option('jasmine_CSND'))){echo esc_attr(jasmine_option('jasmine_CSND'));}?>">
          <img src="https://cdn.jsdelivr.net/gh/rm-rf-run/Jasmine/assets/images/csdn.ico" alt="CSDN" data-toggle="tooltip" data-placement="top" title="CSDN">
      </a>
  	</div>
    <div class="icon-badge">
      <a href="tencent://message/?uin=<?php if(!empty(jasmine_option('jasmine_QQ'))){echo esc_attr(jasmine_option('jasmine_QQ'));}?>&Site=&Menu=yes">
          <img src="https://cdn.jsdelivr.net/gh/rm-rf-run/Jasmine/assets/images/qq.png" alt="QQ" data-toggle="tooltip" data-placement="top" title="QQ">
      </a>
    </div>
    <div class="icon-badge">
      <a href="<?php if(!empty(jasmine_option('jasmine_GitHub'))){echo esc_attr(jasmine_option('jasmine_GitHub'));}?>">
          <img src="https://cdn.jsdelivr.net/gh/rm-rf-run/Jasmine/assets/images/github.ico" alt="GitHub" data-toggle="tooltip" data-placement="top" title="GitHub">
      </a>
    </div>
    <div class="icon-badge">
      <a href="<?php if(!empty(jasmine_option('jasmine_zhihu'))){echo esc_attr(jasmine_option('jasmine_zhihu'));}?>">
          <img src="https://cdn.jsdelivr.net/gh/rm-rf-run/Jasmine/assets/images/zhihu.ico" alt="知乎" data-toggle="tooltip" data-placement="top" title="知乎">
      </a>
    </div>
    <div class="icon-badge">
      <a href="<?php if(!empty(jasmine_option('jasmine_weibo'))){echo esc_attr(jasmine_option('jasmine_weibo'));}?>">
          <img src="https://cdn.jsdelivr.net/gh/rm-rf-run/Jasmine/assets/images/weibo.ico" alt="weibo" data-toggle="tooltip" data-placement="top" title="weibo">
      </a>
    </div>
  </div>
</div>
</div>

<?php
  if (jasmine_option('jasmine_loveDate')) {
   ?>
    <div class="jasmine-love">
      <img src="http://q1.qlogo.cn/g?b=qq&nk=<?php if(!empty(jasmine_option('jasmine_qq_he'))){echo esc_attr(jasmine_option('jasmine_qq_he'));}?>&s=100" class="jasmine-love-me" /><i class="fa fa-heart"></i><img src="http://q1.qlogo.cn/g?b=qq&nk=<?php if(!empty(jasmine_option('jasmine_qq_she'))){echo esc_attr(jasmine_option('jasmine_qq_she'));}?>&s=100" class="jasmine-love-she" /><br/>
      <span id="love_time"></span>
    </div>
   <?php
  }
?>

<?php 
  if (jasmine_option('jasmine_bilbil_uid')) {
?>
<div class="jasmine-bilbil">
  <div class="jasmine-bilbil-gradient"></div>
  <div class="jasmine-bilbil-me">
    <div class="h-info clearfix">
      <div class="h-avatar">
        <a href="<?php if(!empty(jasmine_option('jasmine_bilbil'))){echo esc_attr(jasmine_option('jasmine_bilbil'));}?>">
          <img src="https://images.weserv.nl/?url=<?php if(!empty(jasmine_option('jasmine_bilbil_gravatar'))){echo esc_attr(jasmine_option('jasmine_bilbil_gravatar'));}?>" id="h-avatar">
        </a>
      </div>
      <div class="h-basic">
        <div>
          <a href="<?php if(!empty(jasmine_option('jasmine_bilbil'))){echo esc_attr(jasmine_option('jasmine_bilbil'));}?>" title="<?php if(!empty(jasmine_option('jasmine_bilbil_name'))){echo esc_attr(jasmine_option('jasmine_bilbil_name'));}?>">
            <span id="h-name"><?php if(!empty(jasmine_option('jasmine_bilbil_name'))){echo esc_attr(jasmine_option('jasmine_bilbil_name'));}?></span>
          </a>
          <a href="//www.bilibili.com/html/help.html#k" target="_blank" lvl="<?php if(!empty(jasmine_option('jasmine_bilbil_level'))){echo esc_attr(jasmine_option('jasmine_bilbil_level'));}?>" class="h-level m-level"></a>
          <a href="//account.bilibili.com/account/big" target="_blank" class="h-vipType">
            <?php if(jasmine_option('jasmine_bilbil_type') !== false){
                  $type = jasmine_option('jasmine_bilbil_type');
                  if ($type === "0" ) {
                    echo "没有大会员";
                  }elseif ($type === "2" ) {
                    echo "年度大会员";
                  }elseif ($type === "1" ) {
                    echo "大会员";
                  }
                }
            ?>
          </a>
          <!---->
        </div>
        <div class="h-basic-spacing">
          <h4 title="<?php if(!empty(jasmine_option('jasmine_bilbil_describe'))){echo jasmine_option('jasmine_bilbil_describe');}?>" class="h-sign"><?php if(!empty(jasmine_option('jasmine_bilbil_describe'))){echo jasmine_option('jasmine_bilbil_describe');}?></h4>
        </div>
      </div>
    </div>
  </div>
  <div class="jasmine-bilbil-btn">
    <div class="jasmine-bilbil-btn-add">
      <a href="<?php if(!empty(jasmine_option('jasmine_bilbil'))){echo esc_attr(jasmine_option('jasmine_bilbil'));}?>">
        <i class="fa fa-plus"></i>
        <span>关注</span>
      </a>
    </div>
    <div class="jasmine-bilbil-message">
      <a href="<?php if(!empty(jasmine_option('jasmine_bilbil_uid'))){echo 'https://message.bilibili.com/#/whisper/mid'.esc_attr(jasmine_option('jasmine_bilbil_uid'));}?>">
        <i class="fa fa-paper-plane"></i>
        <span>发消息</span>
      </a>
    </div>
  </div>
</div>

<div class="jasmine-bilbil-statistics">
  <a href="<?php if(!empty(jasmine_option('jasmine_bilbil_uid'))){echo 'https://space.bilibili.com/'.esc_attr(jasmine_option('jasmine_bilbil_uid')).'/fans/follow';}?>" class="jasmine-bilbil-statistics-a">
    <p class="statistics-data">
      关注数
    </p>
    <p class="statistics-data-num">
     <?php if(!empty(jasmine_option('jasmine_bilbil_following'))){echo jasmine_option('jasmine_bilbil_following');}?>
    </p>
  </a>
  <a href="<?php if(!empty(jasmine_option('jasmine_bilbil_uid'))){echo 'https://space.bilibili.com/'.esc_attr(jasmine_option('jasmine_bilbil_uid')).'/fans/fans';}?>" class="jasmine-bilbil-statistics-a">
    <p class="statistics-data">
      粉丝数
    </p>
    <p class="statistics-data-num">
      <?php if(!empty(jasmine_option('jasmine_bilbil_follower'))){echo jasmine_option('jasmine_bilbil_follower');}?>
    </p>
  </a>
</div>

<?php 
  }
?>
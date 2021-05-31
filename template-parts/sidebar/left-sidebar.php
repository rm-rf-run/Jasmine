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
      <?php echo get_simple_local_avatar(get_bloginfo('admin_email')); ?>
    </a>
  </div>
  <div id="user-info" class="flex-column">
    <div>
      <a href="<?php bloginfo('url');?>">
        <?php echo jasmine_option('author_name');?>
      </a>
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
      <span class="animateNum" data-animatetype="num" data-animatetarget="<?php do_shortcode('[countShuoshuo]')?>" style=""><?php do_shortcode('[countShuoshuo]')?></span>
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
<div id="about-me-3 carouselExampleInterval">
  <div class="d-flex ">
    <div class="">
      <a href="<?php if(!empty(jasmine_option('jasmine_bilbil'))){echo esc_attr(jasmine_option('jasmine_bilbil'));}?>">
          <img src="https://cdn.jsdelivr.net/gh/rm-rf-run/Jasmine/assets/images/bilbil.ico" width="22" height="22" alt="B站" data-toggle="tooltip" data-placement="top" title="B站">
      </a>
      <a href="<?php if(!empty(jasmine_option('jasmine_csdn'))){echo esc_attr(jasmine_option('jasmine_csdn'));}?>">
          <img src="https://cdn.jsdelivr.net/gh/rm-rf-run/Jasmine/assets/images/csdn.ico" width="22" height="22" alt="CSDN" data-toggle="tooltip" data-placement="top" title="CSDN">
      </a>
      <a href="tencent://message/?uin=<?php if(!empty(jasmine_option('jasmine_qq'))){echo esc_attr(jasmine_option('jasmine_qq'));}?>&Site=&Menu=yes">
          <img src="https://cdn.jsdelivr.net/gh/rm-rf-run/Jasmine/assets/images/qq.png" width="22" height="22" alt="QQ" data-toggle="tooltip" data-placement="top" title="QQ">
      </a>
      <a href="<?php if(!empty(jasmine_option('jasmine_gitHub'))){echo esc_attr(jasmine_option('jasmine_gitHub'));}?>">
          <img src="https://cdn.jsdelivr.net/gh/rm-rf-run/Jasmine/assets/images/github.ico" width="22" height="22" alt="GitHub" data-toggle="tooltip" data-placement="top" title="GitHub">
      </a>
      <a href="<?php if(!empty(jasmine_option('jasmine_zhihu'))){echo esc_attr(jasmine_option('jasmine_zhihu'));}?>">
          <img src="https://cdn.jsdelivr.net/gh/rm-rf-run/Jasmine/assets/images/zhihu.ico" width="22" height="22" alt="知乎" data-toggle="tooltip" data-placement="top" title="知乎">
      </a>
      <a href="<?php if(!empty(jasmine_option('jasmine_weibo'))){echo esc_attr(jasmine_option('jasmine_weibo'));}?>">
          <img src="https://cdn.jsdelivr.net/gh/rm-rf-run/Jasmine/assets/images/weibo.ico" width="22" height="22" alt="weibo" data-toggle="tooltip" data-placement="top" title="weibo">
      </a>
      <a href="<?php if(!empty(jasmine_option('wangyiyun'))){echo esc_attr(jasmine_option('wangyiyun'));}?>">
          <img src="https://cdn.jsdelivr.net/gh/rm-rf-run/Jasmine/assets/images/wyy.ico" width="22" height="22" alt="网易云" data-toggle="tooltip" data-placement="top" title="网易云">
      </a>
      <a href="<?php if(!empty(jasmine_option('jasmine_twitter'))){echo esc_attr(jasmine_option('jasmine_twitter'));}?>">
          <img src="https://cdn.jsdelivr.net/gh/rm-rf-run/Jasmine/assets/images/twitter.ico" width="22" height="22" alt="twitter" data-toggle="tooltip" data-placement="top" title="twitter">
      </a>
      <a href="<?php echo get_bloginfo('rss2_url'); ?>">
        <img src="https://cdn.jsdelivr.net/gh/rm-rf-run/Jasmine/assets/images/rss.png" width="15" height="15" alt="Rss" data-toggle="tooltip" data-placement="top" title="Rss"></img>
      </a>
    </div>
  </div>
</div>
</div>

<?php
  if (jasmine_option('jasmine_lovedate')) {
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
        <a href="<?php if(!empty(get_option('jasmine_bilbil'))){echo esc_attr(get_option('jasmine_bilbil'));}?>">
          <img src="<?php if(!empty(get_option('jasmine_bilbil_gravatar'))){echo esc_attr(get_option('jasmine_bilbil_gravatar'));}?>" id="h-avatar">
        </a>
      </div>
      <div class="h-basic">
        <div>
          <a href="<?php if(!empty(get_option('jasmine_bilbil'))){echo esc_attr(get_option('jasmine_bilbil'));}?>" title="<?php if(!empty(get_option('jasmine_bilbil_name'))){echo esc_attr(jasmine_option('jasmine_bilbil_name'));}?>">
            <span id="h-name"><?php if(!empty(get_option('jasmine_bilbil_name'))){echo esc_attr(get_option('jasmine_bilbil_name'));}?></span>
          </a>
          <a href="//www.bilibili.com/html/help.html#k" target="_blank" lvl="<?php if(!empty(get_option('jasmine_bilbil_level'))){echo esc_attr(get_option('jasmine_bilbil_level'));}?>" class="h-level m-level"></a>
          <a href="//account.bilibili.com/account/big" target="_blank" class="h-vipType">
            <?php if(get_option('jasmine_bilbil_type') !== false){
                  $type = get_option('jasmine_bilbil_type');
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
          <h4 title="<?php if(!empty(get_option('jasmine_bilbil_describe'))){echo get_option('jasmine_bilbil_describe');}?>" class="h-sign"><?php if(!empty(get_option('jasmine_bilbil_describe'))){echo get_option('jasmine_bilbil_describe');}?></h4>
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
     <?php if(!empty(get_option('jasmine_bilbil_following'))){echo get_option('jasmine_bilbil_following');}?>
    </p>
  </a>
  <a href="<?php if(!empty(get_option('jasmine_bilbil_uid'))){echo 'https://space.bilibili.com/'.esc_attr(get_option('jasmine_bilbil_uid')).'/fans/fans';}?>" class="jasmine-bilbil-statistics-a">
    <p class="statistics-data">
      粉丝数
    </p>
    <p class="statistics-data-num">
      <?php if(!empty(get_option('jasmine_bilbil_follower'))){echo get_option('jasmine_bilbil_follower');}?>
    </p>
  </a>
</div>

<div class="jasmine-left-comment-part">
  <span class="jasmine-item-title"><i class="fa fa-commenting-o" aria-hidden="true"></i>    最新评论</span>
  <?php 
$user_ids = get_users(array('fields' => 'ID'));
  $args = array(
    'status' => 'approve',
    'number'  => '5',
    'author__not_in' => $user_ids,
);
 
$comments = get_comments( $args );
foreach ( $comments as $comment ) {
  ?><div class="jasmine-left-comment-list"><a href="<?php echo get_comment_link($comment->comment_ID);?>"><?php
  $qq_number = get_comment_meta($comment->comment_ID, 'author_qq', true);
  if ($qq_number) {
            $qqavatar  = file_get_contents('http://ptlogin2.qq.com/getface?appid=1006102&imgtype=3&uin=' . $qq_number);
            preg_match('/:\"([^\"]*)\"/i', $qqavatar, $matches);
            echo '<img src="' . $matches[1] . '" class="avatar avatar-40 photo" width="40" height="40"  alt="qq_avatar" />';
        } else {
            echo get_avatar($comment->comment_author_email,40);
        }
    ?><div class="jasmine-left-comment-item"><?php
    echo $comment->post_title."<br>";
    echo "<span class='left-post-comment'>".$comment->comment_author."：".$comment->comment_content."</span><br>";
    ?></div></a></div><?php
}?>
</div>

<?php
  }
?>
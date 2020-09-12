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
 * Template Name: 文章页
 * Template Post Type: page
 */
setPostViews(get_the_ID());
?>
<?php get_header()?>
<main role="main" id="main">
    <div class="container">
      <div class="row clearfix">
        <!--左边栏-->
        <div class="col-md-3 column">
          <?php get_template_part('template-parts/sidebar/left-sidebar');?>
        </div>
        <!--中间栏-->
        <div class="col-md-6 column" id="pjax-container">
          <?php get_template_part('template-parts/nav/nav-post');?>
          <div class="jasmine-post-content">
            <?php if (have_posts()): ?>
            <?php while (have_posts()): the_post();?>
							      <h1 class="jasmine-post-h1"><?php the_title()?></h1>
                    <div class="post-meta-info">
                      <div class="author-img">
                        <!-- <img src="https://acg.yanwz.cn/api.php" class="author-img"> -->
                        <?php echo get_simple_local_avatar(get_bloginfo('admin_email'), '50'); ?>
                      </div>
                      <div class="jasmine-writingTime">
                        <span>
                          <i class="fa fa-clock-o" aria-hidden="true"></i>
                          <?php echo human_time_diff(get_the_time('U'), current_time('timestamp')); _e('前');?><!--确定两个时间戳之间的差异。-->
                        </span>
                        <div class="jasmine-article-info">
                          <span>
                            <i class="fa fa-user" aria-hidden="true"></i>
                            <?php echo 'By '.get_the_author();?>
                          </span>
                          <span>
                            |&nbsp;&nbsp;<i class="fa fa-eye" aria-hidden="true"></i>
                            <?php echo '浏览('.getPostViews(get_the_ID()).')';?>
                          </span>
                          <span>
                            |&nbsp;&nbsp;<i class="fa fa-comments" aria-hidden="true"></i>
                            <?php echo '评论('.get_comment_count(get_the_ID())['approved'].')';?>
                          </span>
                        </div>
                      </div>
                    </div>
							      <p class="jasmine-label">
							        <span>
							          <i class="fa fa-tags"></i>
							          <?php
                        $data = get_the_tag_list('<span>标签: ', '&nbsp;', '</span>');
                        if ($data) {
                           echo $data;
                        }else{
                          echo '没有标签噢~';
                        }
                          ?>
				              </span>
				              <span style="float: right;">
				                最后编辑：<?php the_modified_time('Y年n月j日');?>
				              </span>
				            </p>
							            <?php the_content()?>
							          <?php endwhile;?>
            <?php endif;?>
            <div class="jasmine-appreciation">
                <div>
                  <i class="fa fa-qrcode fa-4x"></i>
                  <div class="jasmine-appreciation-img">
                    <ul class="jasmine-appreciation-ul">
                      <li class="jasmine-alipay">
                        <img src="https://cdn.jsdelivr.net/gh/moezx/cdn@3.3.3/img/other/AliPayQR.jpg" style="width: 130px;max-width: 130px;">
                      </li>
                      <li class="jasmine-wechat">
                        <img src="https://cdn.jsdelivr.net/gh/moezx/cdn@3.3.3/img/other/WeChanQR.png" style="width: 130px;max-width: 130px;">
                      </li>
                    </ul>
                  </div>
                </div>
            </div>
              <div class="jasmine-post-content-foot">
                <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh" target="_blank" rel="nofollow">
                  <div>
                    <i class="fa fa-cc"></i>
                  </div>
                  <div>
                    知识共享署名-非商业性使用-相同方式共享 4.0 国际许可协议
                  </div>
                </a>
            </div>
          </div>
          <div class="jasmine-comment-part">
            <h3>评论</h3>
          </div>
          <!-- toasts -->
          <div class="toast jasmine-toast" class="d-flex justify-content-center align-items-center" style="position: absolute;top: 10%;right: 30%;" data-delay="2000">
            <div class="toast-header">
              <img src="https://cdn.jsdelivr.net/gh/rm-rf-run/Jasmine/assets/images/tips.png" class="rounded mr-2" alt="...">
              <strong class="mr-auto">友情提示</strong>
              <small style="margin-left: 10px;">请保留版权标识</small>
              <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="toast-body">
             复制成功！
            </div>
          </div>
          <!-- end-->
        </div>
        <!--右边栏-->
        <div class="col-md-3 column">
          <?php get_template_part('template-parts/sidebar/right-sidebar');?>
        </div>
      </div>
      <div class="row clearfix">
        <div class="col-md-12 column">

        </div>
      </div>
    </div>
</main>
<?php get_footer();?>
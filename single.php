<?php
/**
 *
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
							      <p style="color: #9d9d9d;font-size: 14px;">
							        <span>
							          <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-tags-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
							            <path fill-rule="evenodd" d="M3 1a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l4.586-4.586a1 1 0 0 0 0-1.414l-7-7A1 1 0 0 0 7.586 1H3zm4 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
							            <path d="M1 7.086a1 1 0 0 0 .293.707L8.75 15.25l-.043.043a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 0 7.586V3a1 1 0 0 1 1-1v5.086z"/>
							          </svg>
							          <?php echo get_the_tag_list('<span>标签: ', ', ', '</span>'); ?>
				              </span>
				              <span>
				                最后编辑：<?php the_modified_time('Y年n月j日');?>
				              </span>
				            </p>
							            <?php the_content()?>
							          <?php endwhile;?>
            <?php endif;?>
            <div class="jasmine-appreciation">
                <div>
                  <svg width="3em" height="3em" viewBox="0 0 16 16" class="bi bi-upc-scan jasmine-appreciation-icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1h-3zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5zM.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5z"/>
                  <path d="M3 4.5a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-7zm3 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7z"/>
                </svg>
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
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-badge-cc" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.708 7.755c0-1.111.488-1.753 1.319-1.753.681 0 1.138.47 1.186 1.107H7.36V7c-.052-1.186-1.024-2-2.342-2C3.414 5 2.5 6.05 2.5 7.751v.747c0 1.7.905 2.73 2.518 2.73 1.314 0 2.285-.792 2.342-1.939v-.114H6.213c-.048.615-.496 1.05-1.186 1.05-.84 0-1.319-.62-1.319-1.727v-.743zm6.14 0c0-1.111.488-1.753 1.318-1.753.682 0 1.139.47 1.187 1.107H13.5V7c-.053-1.186-1.024-2-2.342-2C9.554 5 8.64 6.05 8.64 7.751v.747c0 1.7.905 2.73 2.518 2.73 1.314 0 2.285-.792 2.342-1.939v-.114h-1.147c-.048.615-.497 1.05-1.187 1.05-.839 0-1.318-.62-1.318-1.727v-.743z"/>
                    <path fill-rule="evenodd" d="M14 3H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z"/>
                  </svg>
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
          <div class="toast" class="d-flex justify-content-center align-items-center" style="position: absolute;top: -3%;right: 30%;" data-delay="2000">
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
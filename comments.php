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
 * Template Name: 评论模块
 */
if (post_password_required()) {
    return;
}
?>
<div class="jasmine-comment-part">
    <?php
//声明变量
$comment_send      = '发表评论';
$comment_reply     = '发表一下你的评论呗';
$comment_reply_to  = '回复 %s';
$comment_author    = '昵称';
$comment_email     = 'E-Mail';
$comment_body      = '评论支持Markdown语法，期待大佬的精彩发言~';
$comment_url       = 'Website';
$comment_cookies_1 = ' 回复评论代表你同意网站的';
$comment_cookies_2 = ' 隐私政策';
$comment_before    = '';
$comment_cancel    = '取消回复';
$comment_bird      = '<div style="float:left;padding-top: 10px;"><img id="author_img" src="' . get_template_directory_uri() . '/assets/images/avatarBird.png" height="48" width="48" border-radius: 8px;></div>';
//Array
$comments_args = array(
    //Define Fields
    'fields'               => array(
        //Author field
        'qq' => '<div class="input-group mb-3 input-comment1"><div class="input-group-prepend" ><span class="input-group-text" id="basic-addon1"><i class="fa fa-television" aria-hidden="true"></i></span>
  </div>
  <input type="text" class="form-control" placeholder="QQ号" name="author_qq" id="author_qq"></div>',
        //Author field
        'author'    => '<div class="input-group mb-3 input-comment1"><div class="input-group-prepend" ><span class="input-group-text" id="basic-addon1"><i class="fa fa-user" aria-hidden="true"></i></span>
  </div>
  <input type="text" class="form-control" placeholder="' . $comment_author . '" name="author" id="author"></div>',
        //Email Field
        'email'     => '<div class="input-group mb-3 input-comment1"><div class="input-group-prepend" ><span class="input-group-text" id="basic-addon1"><i class="fa fa-envelope-o" aria-hidden="true"></i></span>
  </div>
  <input type="text" class="form-control" placeholder="' . $comment_email . '" name="email" id="email"></div>',
        //URL Field
        'url'       => '<div class="input-group mb-3 input-comment1"><div class="input-group-prepend" ><span class="input-group-text" id="basic-addon1"><i class="fa fa-globe " aria-hidden="true"></i></span>
  </div>
  <input type="text" class="form-control" placeholder="' . $comment_url . '" name="url" id="url"></div>',
        //Cookies
        'cookies'   => '<div style="padding-left: 10px;"><input type="checkbox" required>' . $comment_cookies_1 . '<a href="' . get_privacy_policy_url() . '">' . $comment_cookies_2 . '</a></div>',
    ),
    // Change the title of send button
    'label_submit'         => __($comment_send),
    // Change the title of the reply section
    'title_reply'          => __($comment_reply),
    // Change the title of the reply section
    'title_reply_to'       => __($comment_reply_to),
    //Cancel Reply Text
    'cancel_reply_link'    => __($comment_cancel),
    // Redefine your own textarea (the comment body).
    'comment_field'        => '<div class="form-group" style="padding-left: 10px;"><textarea class="form-control OwO-textarea" id="comment" name="comment" aria-required="true" placeholder="' . $comment_body . '" maxlength="1000"></textarea></div>',
    //Message Before Comment
    'comment_notes_before' => __($comment_before),
    // Remove "Text or HTML to be displayed after the set of comment fields".
    'comment_notes_after'  => '<div class="OwO" style="padding-left: 10px;"></div>',
    //Submit Button ID
    'id_submit'            => __('comment-submit'),
    'class_submit'         => __('btn btn-primary'),
    'title_reply_after'    => '</h3>' . $comment_bird,
    //表单的id属性
    'id_form'              => __('comment-form'),
);
comment_form($comments_args);
?>
    <?php if (have_comments()): ?>
        <ol class="comment-list">
            <?php
wp_list_comments(array(
    'style'       => 'ol',
    'short_ping'  => true,
    'avatar_size' => 42,
));
?>
        </ol><!-- .comment-list -->

        <?php
// Are there comments to navigate through?
if (get_comment_pages_count() > 1 && get_option('page_comments')):
?>
        <nav class="navigation comment-navigation" role="navigation" style="height: 20px;">
            <?php if (!comments_open() && get_comments_number()): ?>
        <p class="no-comments"><?php _e('抱歉，评论已关闭。', 'jasmine');?></p>
        <?php endif;?>
            <div class="nav-previous" style="float: right;"><?php previous_comments_link(__('下一页', 'jasmine'));?></div>
            <div class="nav-next" style="float: right;margin-right: 20px;"><?php next_comments_link(__('上一页', 'jasmine'));?></div>
        </nav><!-- .comment-navigation -->
        <?php endif; // Check for comment navigation ?>

    <?php endif; // have_comments() ?>

</div><!-- #comments -->
<?php if (comments_open()):?>
<script type="text/javascript" src="<?php bloginfo('template_directory');?>/inc/OwO/OwO.min.js" ?>'></script>
<script>var s = new OwO({
    logo: 'OωO表情',
    container: document.getElementsByClassName('OwO')[0],  //获取表情标签
    target: document.getElementsByClassName('OwO-textarea')[0], //获取评论输入区
    position: 'down',
    width: '100%',
    maxHeight: '210px',
    api:"<?php echo OwO_API ?>"
});
</script>
<?php endif; ?>
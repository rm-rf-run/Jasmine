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
$comment_reply_to  = '回复';
$comment_author    = 'Name';
$comment_email     = 'E-Mail';
$comment_body      = 'Comment';
$comment_url       = 'Website';
$comment_cookies_1 = ' 回复评论代表你同意网站的';
$comment_cookies_2 = ' 隐私政策';
$comment_before    = '';
$comment_cancel    = '取消回复';
$comment_bird      = '<div style="float:left;padding-top: 10px;"><img src="/prettywordpress/wordpress/wp-content/themes/Jasmine/assets/images/avatarBird.png" height="48" width="48"></div>';
//Array
$comments_args = array(
    //Define Fields
    'fields'               => array(
        //Author field
        'author_id' => '<div class="input-group mb-3"><div class="input-group-prepend" style="background-color: white;"><span class="input-group-text" id="basic-addon1" style="
    background-color: white;
    padding-right: 0px;
    border-right: none;
"><i class="fa fa-television" aria-hidden="true"></i></span>
  </div>
  <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="" style="
    border-left: none;
">
</div>',
        //Author field
        'author'    => '<p class="comment-form-author"><br /><input id="author" name="author" aria-required="true" placeholder="' . $comment_author . '"></input></p>',
        //Email Field
        'email'     => '<p class="comment-form-email"><br /><input id="email" name="email" placeholder="' . $comment_email . '"></input></p>',
        //URL Field
        'url'       => '<p class="comment-form-url"><br /><input id="url" name="url" placeholder="' . $comment_url . '"></input></p>',
        //Cookies
        'cookies'   => '<input type="checkbox" required>' . $comment_cookies_1 . '<a href="' . get_privacy_policy_url() . '">' . $comment_cookies_2 . '</a>',
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
    'comment_field'        => '<p class="comment-form-comment"><br /><textarea id="comment" name="comment" aria-required="true" placeholder="' . $comment_body . '"></textarea></p>',
    //Message Before Comment
    'comment_notes_before' => __($comment_before),
    // Remove "Text or HTML to be displayed after the set of comment fields".
    'comment_notes_after'  => '',
    //Submit Button ID
    'id_submit'            => __('comment-submit'),
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
    'avatar_size' => 54,
));
?>
        </ol><!-- .comment-list -->

        <?php
// Are there comments to navigate through?
if (get_comment_pages_count() > 1 && get_option('page_comments')):
?>
        <nav class="navigation comment-navigation" role="navigation">
            <h1 class="screen-reader-text section-heading"><?php _e('Comment navigation', 'twentythirteen');?></h1>
            <div class="nav-previous"><?php previous_comments_link(__('&amp;larr; Older Comments', 'twentythirteen'));?></div>
            <div class="nav-next"><?php next_comments_link(__('Newer Comments &amp;rarr;', 'twentythirteen'));?></div>
        </nav><!-- .comment-navigation -->
        <?php endif; // Check for comment navigation ?>

        <?php if (!comments_open() && get_comments_number()): ?>
        <p class="no-comments"><?php _e('Comments are closed.', 'twentythirteen');?></p>
        <?php endif;?>

    <?php endif; // have_comments() ?>


</div><!-- #comments -->
<?php
/**
 * 定义了一个唯一的标识符来存储数据库中的选项并从主题中引用它们。
 */
function optionsframework_option_name()
{
    $optionsframework_settings = get_option('optionsframework');
    $optionsframework_settings['id'] = 'jasmine';
    update_option('optionsframework', $optionsframework_settings);
    // Change this to use your theme slug
    return 'jasmine';
}

/**
 * 定义将用于生成设置页并保存在数据库中的选项数组。
 * 创建“id”字段时，请确保使用所有小写字母，并且不使用空格。
 *
 * 如果要使主题可翻译，则应替换“theme textdomain”
 * 主题的实际文本域。阅读更多：
 * http://codex.wordpress.org/Function_Reference/load_theme_textdomain
 */

function optionsframework_options()
{

    // 测试数据
    $test_array = array(
        'one' => __('1', 'jasmine'),
        'two' => __('2', 'jasmine'),
        'three' => __('3', 'jasmine'),
        'four' => __('4', 'jasmine'),
        'five' => __('5', 'jasmine'),
    );

    // 多检查阵列
    $multicheck_array = array(
        'one' => __('French Toast', 'jasmine'),
        'two' => __('Pancake', 'jasmine'),
        'three' => __('Omelette', 'jasmine'),
        'four' => __('Crepe', 'jasmine'),
        'five' => __('Waffle', 'jasmine'),
    );

    // 多重检查默认值
    $multicheck_defaults = array(
        'one' => '1',
        'five' => '1',
    );

    // 背景默认值
    $background_defaults = array(
        'color' => '',
        'image' => 'https://view.moezx.cc/images/2018/12/23/knights-of-the-frozen-throne-8k-qa.jpg',
        'repeat' => 'repeat',
        'position' => 'top center',
        'attachment' => 'scroll');

    // 版式默认值
    $typography_defaults = array(
        'size' => '15px',
        'face' => 'georgia',
        'style' => 'bold',
        'color' => '#bada55');

    // 排版选项
    $typography_options = array(
        'sizes' => array('6', '12', '14', '16', '20'),
        'faces' => array('Helvetica Neue' => 'Helvetica Neue', 'Arial' => 'Arial'),
        'styles' => array('normal' => 'Normal', 'bold' => 'Bold'),
        'color' => false,
    );

    // 将所有类别拉到一个数组中
    // $options_categories     = array();
    // $options_categories_obj = get_categories();
    // foreach ($options_categories_obj as $category) {
    //     $options_categories[$category->cat_ID] = $category->cat_name;
    // }

    // 将所有标记拉入数组
    // $options_tags     = array();
    // $options_tags_obj = get_tags();
    // foreach ($options_tags_obj as $tag) {
    //     $options_tags[$tag->term_id] = $tag->name;
    // }

    // 将所有页面放入数组中
    // $options_pages     = array();
    // $options_pages_obj = get_pages('sort_column=post_parent,menu_order');
    // $options_pages[''] = 'Select a page:';
    // foreach ($options_pages_obj as $page) {
    //     $options_pages[$page->ID] = $page->post_title;
    // }

    // 如果使用图像单选按钮，请定义目录路径
    // $imagepath = get_template_directory_uri() . '/images/';

    $options = array();

    $options[] = array(
        'name' => __('基础设置', 'jasmine'),
        'type' => 'heading',
    );

    $options[] = array(
        'name' => __('站点名称', 'jasmine'),
        'desc' => __('jasmineThemeBlog', 'jasmine'),
        'id' => 'site_name',
        'std' => '',
        'type' => 'text');

    $options[] = array(
        'name' => __('作者', 'jasmine'),
        'desc' => __('rm-rf-run', 'jasmine'),
        'id' => 'author_name',
        'std' => 'rm-rf-run',
        'type' => 'text');

    $options[] = array(
        'name' => __('博主描述', 'jasmine'),
        'desc' => __('一段自我描述的话', 'jasmine'),
        'id' => 'admin_des',
        'std' => '吃饭用大碗的程序猿',
        'type' => 'text');

    $options[] = array(
        'name' => __('个人头像', 'jasmine'),
        'desc' => __('最佳尺寸我还没测过', 'jasmine'),
        'std' => get_template_directory_uri() . '/assets/images/dog.png',
        'id' => 'focus_logo',
        'type' => 'upload');

    $options[] = array(
        'name' => __('建站日期', 'jasmine'),
        'desc' => __('格式2018/1/18', 'jasmine'),
        'id' => 'jasmine_startdate',
        'std' => '',
        'type' => 'text');

    $options[] = array(
        'name' => __('自定义关键词和描述', 'jasmine'),
        'desc' => __('开启之后可自定义填写关键词和描述', 'jasmine'),
        'id' => 'jasmine_meta',
        'std' => '0',
        'type' => 'checkbox');

    $options[] = array(
        'name' => __('网站关键词', 'jasmine'),
        'desc' => __('各关键字间用半角逗号","分割，数量在5个以内最佳。', 'jasmine'),
        'id' => 'jasmine_meta_keywords',
        'std' => '',
        'type' => 'text');

    $options[] = array(
        'name' => __('网站描述', 'jasmine'),
        'desc' => __('用简洁的文字描述本站点，字数建议在120个字以内。', 'jasmine'),
        'id' => 'jasmine_meta_description',
        'std' => '',
        'type' => 'text');

    $options[] = array(
        'name' => __('站点背景图片', 'jasmine'),
        'desc' => __('首页的背景图片', 'jasmine'),
        'std' => get_template_directory_uri() . '/assets/images/default_bg.jpg',
        'id' => 'jasmine_bg',
        'type' => 'upload',
    );

    $options[] = array(
        'name' => __('手机端导航栏背景图片', 'jasmine'),
        'desc' => __('手机端导航栏背景图片', 'jasmine'),
        'std' => get_template_directory_uri() . '/assets/images/mobile_bg.jpg',
        'id' => 'jasmine_mobile_bg',
        'type' => 'upload',
    );

    $options[] = array(
        'name' => __('站点公告', 'jasmine'),
        'desc' => __('今日公告信息', 'jasmine'),
        'id' => 'jasmine_notice',
        'std' => '站长还没想好写什么呢',
        'type' => 'textarea',
    );

    $options[] = array(
        'name' => __('备案号', 'jasmine'),
        'desc' => __('列如黔ICP备 20000000号', 'jasmine'),
        'id' => 'jasmine_record',
        'std' => '',
        'type' => 'text');

    $options[] = array(
        'name' => __('公安备案号', 'jasmine'),
        'desc' => __('列如贵公网安备 2000000号', 'jasmine'),
        'id' => 'jasmine_police_record',
        'std' => '',
        'type' => 'text');

    $options[] = array(
        'name' => __('公安备案跳转地址', 'jasmine'),
        'desc' => __('公安备案跳转地址', 'jasmine'),
        'id' => 'jasmine_police_href',
        'std' => '',
        'type' => 'text');

    $options[] = array(
        'name' => __('支付宝收款码', 'jasmine'),
        'desc' => __('在媒体中选择支付宝收款码'),
        'id' => 'jasmine_zfb',
        'type' => 'upload',
    );

    $options[] = array(
        'name' => __('微信收款码', 'jasmine'),
        'desc' => __('在媒体中选择微信收款码'),
        'id' => 'jasmine_wx',
        'type' => 'upload',
    );

    $options[] = array(
        'name' => __('公众号二维码', 'jasmine'),
        'desc' => __('在媒体中选择公众号二维码'),
        'id' => 'jasmine_woa',
        'type' => 'upload',
    );

    $options[] = array(
        'name' => __('额外CSS', 'jasmine'),
        'desc' => __('duck不必加style标签', 'jasmine'),
        'id' => 'jasmine_extracss',
        'std' => '',
        'type' => 'textarea',
    );

    $options[] = array(
        'name' => __('文章设置', 'jasmine'),
        'type' => 'heading',
    );

    $options[] = array(
        'name' => __('剪贴板版权标识', 'jasmine'),
        'desc' => __('复制超过30个字节时自动向剪贴板添加版权标识，默认开启', 'jasmine'),
        'id' => 'jasmine_copyright',
        'std' => '1',
        'type' => 'checkbox',
    );

    $options[] = array(
        'name' => __('加密文章的显示图', 'jasmine'),
        'desc' => __('加密文章的显示图', 'jasmine'),
        'std' => get_template_directory_uri() . '/assets/images/lolisister.gif',
        'id' => 'jasmine_post_password_img',
        'type' => 'upload',
    );

    $options[] = array(
        'name' => __('技能水平', 'jasmine'),
        'type' => 'heading',
    );

    $options[] = array(
        'name' => __('前台是否显示技能树', 'jasmine'),
        'desc' => __('默认不显示,选中显示', 'jasmine'),
        'id' => 'jasmine_skill_show',
        'std' => '0',
        'type' => 'checkbox',
    );

    $options[] = array(
        'name' => __('Java', 'jasmine'),
        'desc' => __('0-100%,默认0不显示', 'jasmine'),
        'id' => 'jasmine_skill_java',
        'std' => '0',
        'type' => 'text',
    );

    $options[] = array(
        'name' => __('Javascript', 'jasmine'),
        'desc' => __('0-100%,默认0不显示', 'jasmine'),
        'id' => 'jasmine_skill_javascript',
        'std' => '0',
        'type' => 'text',
    );

    $options[] = array(
        'name' => __('C/C++/C#', 'jasmine'),
        'desc' => __('0-100%,默认0不显示', 'jasmine'),
        'id' => 'jasmine_skill_c',
        'std' => '0',
        'type' => 'text',
    );

    $options[] = array(
        'name' => __('Swift', 'jasmine'),
        'desc' => __('0-100%,默认0不显示', 'jasmine'),
        'id' => 'jasmine_skill_swift',
        'std' => '0',
        'type' => 'text',
    );

    $options[] = array(
        'name' => __('Solidity', 'jasmine'),
        'desc' => __('0-100%,默认0不显示', 'jasmine'),
        'id' => 'jasmine_skill_solidity',
        'std' => '0',
        'type' => 'text',
    );

    $options[] = array(
        'name' => __('Rust', 'jasmine'),
        'desc' => __('0-100%,默认0不显示', 'jasmine'),
        'id' => 'jasmine_skill_rust',
        'std' => '0',
        'type' => 'text',
    );

    $options[] = array(
        'name' => __('TypeScript', 'jasmine'),
        'desc' => __('0-100%,默认0不显示', 'jasmine'),
        'id' => 'jasmine_skill_typescript',
        'std' => '0',
        'type' => 'text',
    );

    $options[] = array(
        'name' => __('Python', 'jasmine'),
        'desc' => __('0-100%,默认0不显示', 'jasmine'),
        'id' => 'jasmine_skill_python',
        'std' => '0',
        'type' => 'text',
    );

    $options[] = array(
        'name' => __('Kotlin', 'jasmine'),
        'desc' => __('0-100%,默认0不显示', 'jasmine'),
        'id' => 'jasmine_skill_kotlin',
        'std' => '0',
        'type' => 'text',
    );

    $options[] = array(
        'name' => __('haskell', 'jasmine'),
        'desc' => __('0-100%,默认0不显示', 'jasmine'),
        'id' => 'jasmine_skill_haskell',
        'std' => '0',
        'type' => 'text',
    );

    $options[] = array(
        'name' => __('scala', 'jasmine'),
        'desc' => __('0-100%,默认0不显示', 'jasmine'),
        'id' => 'jasmine_skill_scala',
        'std' => '0',
        'type' => 'text',
    );

    $options[] = array(
        'name' => __('matlab', 'jasmine'),
        'desc' => __('0-100%,默认0不显示', 'jasmine'),
        'id' => 'jasmine_skill_matlab',
        'std' => '0',
        'type' => 'text',
    );

    $options[] = array(
        'name' => __('lua', 'jasmine'),
        'desc' => __('0-100%,默认0不显示', 'jasmine'),
        'id' => 'jasmine_skill_lua',
        'std' => '0',
        'type' => 'text',
    );

    $options[] = array(
        'name' => __('perl', 'jasmine'),
        'desc' => __('0-100%,默认0不显示', 'jasmine'),
        'id' => 'jasmine_skill_perl',
        'std' => '0',
        'type' => 'text',
    );

    $options[] = array(
        'name' => __('Go', 'jasmine'),
        'desc' => __('0-100%,默认0不显示', 'jasmine'),
        'id' => 'jasmine_skill_go',
        'std' => '0',
        'type' => 'text',
    );

    $options[] = array(
        'name' => __('友情链接', 'jasmine'),
        'type' => 'heading',
    );

    $options[] = array(
        'name' => __('友链名称', 'jasmine'),
        'desc' => __('默认为站点名称', 'jasmine'),
        'id' => 'jasmine_sitename',
        'std' => '',
        'type' => 'text');

    $options[] = array(
        'name' => __('友链链接', 'jasmine'),
        'desc' => __('默认就是站点首页', 'jasmine'),
        'id' => 'jasmine_sitehref',
        'std' => '',
        'type' => 'text');

    $options[] = array(
        'name' => __('友链LOGO', 'jasmine'),
        'desc' => __('图片地址', 'jasmine'),
        'id' => 'jasmine_sitelogo',
        'std' => '',
        'type' => 'text');

    $options[] = array(
        'name' => __('友链站点描述', 'jasmine'),
        'desc' => __('默认为站点描述', 'jasmine'),
        'id' => 'jasmine_sitedescription',
        'std' => '',
        'type' => 'text');

    $options[] = array(
        'name' => __('站长邮箱', 'jasmine'),
        'desc' => __('默认为注册的邮箱', 'jasmine'),
        'id' => 'jasmine_siteemail',
        'std' => '',
        'type' => 'text');

    $options[] = array(
        'name' => __('邮箱主题', 'jasmine'),
        'desc' => __('默认为申请友链', 'jasmine'),
        'id' => 'jasmine_sitekey',
        'std' => '',
        'type' => 'text');

    $options[] = array(
        'name' => __('社交信息', 'jasmine'),
        'type' => 'heading',
    );

    $options[] = array(
        'name' => __('B站UID', 'jasmine'),
        'desc' => __('113314236', 'jasmine'),
        'id' => 'jasmine_bilbil_uid',
        'std' => '',
        'type' => 'text');

    $options[] = array(
        'name' => __('bilibili', 'jasmine'),
        'desc' => __('B站地址', 'jasmine'),
        'id' => 'jasmine_bilbil',
        'std' => '',
        'type' => 'text');

    $options[] = array(
        'name' => __('CSDN', 'jasmine'),
        'desc' => __('CSND社区地址', 'jasmine'),
        'id' => 'jasmine_csdn',
        'std' => '',
        'type' => 'text');

    $options[] = array(
        'name' => __('GitHub', 'jasmine'),
        'desc' => __('GitHub地址', 'jasmine'),
        'id' => 'jasmine_gitHub',
        'std' => '',
        'type' => 'text');

    $options[] = array(
        'name' => __('微博', 'jasmine'),
        'desc' => __('微博地址', 'jasmine'),
        'id' => 'jasmine_weibo',
        'std' => '',
        'type' => 'text');

    $options[] = array(
        'name' => __('腾讯QQ', 'jasmine'),
        'desc' => __('QQ号', 'jasmine'),
        'id' => 'jasmine_qq',
        'std' => '',
        'type' => 'text');

    $options[] = array(
        'name' => __('知乎', 'jasmine'),
        'desc' => __('知乎地址', 'jasmine'),
        'id' => 'jasmine_zhihu',
        'std' => '',
        'type' => 'text');

    $options[] = array(
        'name' => __('网易云音乐', 'jasmine'),
        'desc' => __('网易云音乐地址', 'jasmine'),
        'id' => 'wangyiyun',
        'std' => '',
        'type' => 'text');

    $options[] = array(
        'name' => __('Twitter', 'jasmine'),
        'desc' => __('推特地址', 'jasmine'),
        'id' => 'jasmine_twitter',
        'std' => '',
        'type' => 'text');

    $options[] = array(
        'name' => __('恋爱信息', 'jasmine'),
        'type' => 'heading',
    );

    $options[] = array(
        'name' => __('温馨提示', 'jasmine'),
        'desc' => __('单身的朋友可以快进到下一项了', 'jasmine'),
        'type' => 'info',
    );

    $options[] = array(
        'name' => __('QQ号', 'jasmine'),
        'desc' => __('男生QQ', 'jasmine'),
        'id' => 'jasmine_qq_he',
        'std' => '',
        'type' => 'text');

    $options[] = array(
        'name' => __('QQ号', 'jasmine'),
        'desc' => __('女生QQ', 'jasmine'),
        'id' => 'jasmine_qq_she',
        'std' => '',
        'type' => 'text');

    $options[] = array(
        'name' => __('恋爱日期', 'jasmine'),
        'desc' => __('格式2018/1/18。PS:如果你还是单身，抱歉打扰了:)', 'jasmine'),
        'id' => 'jasmine_lovedate',
        'std' => "",
        'type' => 'text');

    $options[] = array(
        'name' => __('高级设置', 'jasmine'),
        'type' => 'heading',
    );

    $options[] = array(
        'name' => __('首页文章随机图', 'jasmine'),
        'desc' => __('文章有略缩图则显示略缩图，没有则根据文章显示下标获取对应api的图片，api使用英文逗号分隔', 'jasmine'),
        'id' => 'jasmine_post_api',
        'std' => 'https://api.ixiaowai.cn/gqapi/gqapi.php,https://api.ixiaowai.cn/api/api.php,https://api.btstu.cn/sjbz/?lx=dongman,https://api.btstu.cn/sjbz/?lx=suiji,https://img.xjh.me/random_img.php?type=bg&ctype=nature&return=302,https://api.ixiaowai.cn/gqapi/gqapi.php,https://random.52ecy.cn/randbg.php,https://www.dmoe.cc/random.php,https://img.paulzzh.tech/touhou/random,https://api.ixiaowai.cn/api/api.php',
        'type' => 'textarea',
    );

    // $options[] = array(
    //     'name' => __('Check to Show a Hidden Text Input', 'jasmine'),
    //     'desc' => __('Click here and see what happens.', 'jasmine'),
    //     'id'   => 'example_showhidden',
    //     'type' => 'checkbox',
    // );

    // $options[] = array(
    //     'name'  => __('Hidden Text Input', 'jasmine'),
    //     'desc'  => __('This option is hidden unless activated by a checkbox click.', 'jasmine'),
    //     'id'    => 'example_text_hidden',
    //     'std'   => 'Hello',
    //     'class' => 'hidden',
    //     'type'  => 'text',
    // );

    // $options[] = array(
    //     'name'    => "Example Image Selector",
    //     'desc'    => "Images for layout.",
    //     'id'      => "example_images",
    //     'std'     => "2c-l-fixed",
    //     'type'    => "images",
    //     'options' => array(
    //         '1col-fixed' => $imagepath . '1col.png',
    //         '2c-l-fixed' => $imagepath . '2cl.png',
    //         '2c-r-fixed' => $imagepath . '2cr.png',
    //     ),
    // );

    // $options[] = array(
    //     'name'    => __('Multicheck', 'jasmine'),
    //     'desc'    => __('Multicheck description.', 'jasmine'),
    //     'id'      => 'example_multicheck',
    //     'std'     => $multicheck_defaults, // These items get checked by default
    //     'type'    => 'multicheck',
    //     'options' => $multicheck_array,
    // );

    // $options[] = array('name' => __('Typography', 'jasmine'),
    //     'desc'                    => __('Example typography.', 'jasmine'),
    //     'id'                      => "example_typography",
    //     'std'                     => $typography_defaults,
    //     'type'                    => 'typography',
    // );

    // $options[] = array(
    //     'name'    => __('Custom Typography', 'jasmine'),
    //     'desc'    => __('Custom typography options.', 'jasmine'),
    //     'id'      => "custom_typography",
    //     'std'     => $typography_defaults,
    //     'type'    => 'typography',
    //     'options' => $typography_options,
    // );

//    $options[] = array(
//        'name' => __('文本编辑器', 'jasmine'),
//        'type' => 'heading',
//    );

    /**
     * For $settings options see:
     * http://codex.wordpress.org/Function_Reference/wp_editor
     *
     * 'media_buttons' are not supported as there is no post to attach items to
     * 'textarea_name' is set by the 'id' you choose
     */

//    $wp_editor_settings = array(
//        'wpautop' => true, // Default
//        'textarea_rows' => 5,
//        'tinymce' => array('plugins' => 'wordpress,wplink'),
//    );
//
//    $options[] = array(
//        'name' => __('Default Text Editor', 'jasmine'),
//        'desc' => sprintf(__('You can also pass settings to the editor.  Read more about wp_editor in <a href="%1$s" target="_blank">the WordPress codex</a>', 'jasmine'), 'http://codex.wordpress.org/Function_Reference/wp_editor'),
//        'id' => 'example_editor',
//        'type' => 'editor',
//        'settings' => $wp_editor_settings,
//    );

    return $options;
}

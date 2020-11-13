<?php
//启动主题钩子,创建jasmine表
// add_action('after_setup_theme', 'create_jasmine_table');

function create_jasmine_table() {
	global $wpdb;
	$table_name = $wpdb->prefix . "jasmine";
	$sql = "CREATE TABLE IF NOT EXISTS `" . $table_name . "` (
    `id` varchar(255)  NOT  NULL,
    `backgroundImg` varchar(255) DEFAULT  NULL,
    `csdn` varchar(255)  DEFAULT  NULL,
    `gitHub` varchar(255)  DEFAULT  NULL,
    `weibo` varchar(255)  DEFAULT  NULL,
    `qq` varchar(255)  DEFAULT  NULL,
    `zhihu` varchar(255)  DEFAULT  NULL,
    `bilbil` varchar(255)  DEFAULT  NULL,
    `bilbil_face` varchar(255)  DEFAULT  NULL,
    `bilbil_top_photo` varchar(255)  DEFAULT  NULL,
    `bilbil_name` varchar(255)  DEFAULT  NULL,
    `bilbil_sign` varchar(255)  DEFAULT  NULL,
    `bilbil_level` varchar(255)  DEFAULT  NULL,
    `bilbil_vip_type` varchar(255)  DEFAULT  NULL,
    `bilbil_following` varchar(255)  DEFAULT  NULL,
    `bilbil_follower` varchar(255)  DEFAULT  NULL,
    `notice` varchar(255)  DEFAULT  NULL,
    `extraCss` varchar(255)  DEFAULT  NULL,
    `startDate` varchar(255) DEFAULT   NULL,
    `alipay` varchar(255) DEFAULT   NULL,
    `weChat` varchar(255) DEFAULT   NULL,
    PRIMARY KEY (`id`)
  )ENGINE=InnoDB  DEFAULT CHARSET=utf8;";
	require_once ABSPATH . "wp-admin/includes/upgrade.php";
	dbDelta($sql);
}
/**
 * 停用主题时删除所创建的表和数据
 * @param  [type] $new_theme [description]
 * @return [type]            [description]
 */
function deactivate_my_theme($new_theme) {
	global $wpdb;
	$table_name = $wpdb->prefix . "jasmine";
	$sql = 'DROP TABLE ' . $table_name . '';
	flush_rewrite_rules(false);
}
// add_action('switch_theme', 'deactivate_my_theme');

//判断管理员
if (is_admin()) {
	// admin actions
	/**
	 *添加菜单
	 */
	add_action('admin_menu', 'wpdocs_register_my_custom_menu_page');
	add_action('admin_init', 'register_jasmine_settings');
	add_action('bilbil_action', 'add_bilbil_data');
} else {
	// non-admin enqueues, actions, and filters
}

/**
 *add_menu_page注册菜单
 *参数：页面标题、菜单名称、权限、注册自定义菜单页（或者单独的一个PHP页面）、调用函数、图标、位置
 * @return [type] [description]
 */
function wpdocs_register_my_custom_menu_page() {
	add_menu_page(
		__('Jasmine配置', 'textdomain'),
		'Jasmine',
		'manage_options',
		'JasminePage',
		'my_options',
		'dashicons-buddicons-activity',
		6
	);
}

function register_jasmine_settings() {
	//注册jasmine的参数
	//jasmine_group必须和settings_fields函数中使用的名称匹配。
	register_setting('jasmine_group', 'jasmine_notice');
	register_setting('jasmine_group', 'jasmine_startDate');
	register_setting('jasmine_group', 'jasmine_bilbil_uid');
  register_setting('jasmine_group', 'jasmine_zfb');
  register_setting('jasmine_group', 'jasmine_wx');
	register_setting('jasmine_group', 'jasmine_CSND');
	register_setting('jasmine_group', 'jasmine_GitHub');
	register_setting('jasmine_group', 'jasmine_weibo');
	register_setting('jasmine_group', 'jasmine_QQ');
	register_setting('jasmine_group', 'jasmine_zhihu');
	register_setting('jasmine_group', 'jasmine_bilbil');
	register_setting('jasmine_group', 'jasmine_qq_he');
	register_setting('jasmine_group', 'jasmine_qq_she');
	register_setting('jasmine_group', 'jasmine_loveDate');
	register_setting('jasmine_group', 'jasmine_record');
	register_setting('jasmine_group', 'jasmine_police_record');
	register_setting('jasmine_group', 'jasmine_police_href');
	register_setting('jasmine_group', 'jasmine_extraCss');
	register_setting('jasmine_group', 'jasmine_bilbil_following');
	register_setting('jasmine_group', 'jasmine_bilbil_follower');
	register_setting('jasmine_group', 'jasmine_bilbil_gravatar');
	register_setting('jasmine_group', 'jasmine_bilbil_name');
	register_setting('jasmine_group', 'jasmine_bilbil_level');
	register_setting('jasmine_group', 'jasmine_bilbil_type');
	register_setting('jasmine_group', 'jasmine_bilbil_describe');
	register_setting('jasmine_group', 'jasmine_bilbil_top_photo');

	//默认数据
	register_setting('jasmine_default', 'jasmine_author_data', array('default' => "checked"));
	register_setting('jasmine_default', 'jasmine_copyright', array('default' => "checked"));
  register_setting('jasmine_default', 'jasmine_siteName');
  register_setting('jasmine_default', 'jasmine_siteHref');
  register_setting('jasmine_default', 'jasmine_siteLogo');
  register_setting('jasmine_default', 'jasmine_siteDescription');
  register_setting('jasmine_default', 'jasmine_siteEmail');
  register_setting('jasmine_default', 'jasmine_siteKey');
  register_setting('jasmine_default', 'jasmine_bg', array('default' => get_template_directory_uri() .'/assets/images/default_bg.jpg'));

  //seo数据
  register_setting('jasmine_seo', 'jasmine_home_keywords');
  register_setting('jasmine_seo', 'jasmine_home_description');
}

function add_bilbil_data() {
	if (get_option('jasmine_bilbil_uid') !== false) {
		$bilbil_uid = get_option('jasmine_bilbil_uid');
		if (!empty($bilbil_uid)) {
			//使用file_get_contents需要将extension=php_openssl.dll前面的;去掉
			/**
			 * openSSL是一个用C++写开源的SSL加密库，https=http+SSL，所有当你打开这个模块*就可以使用在URL前缀https的请求了。去掉; *注释后，重新启动Apache服务器，再访问，就不会有这个错误了。
			 *
			 */
			$b1 = file_get_contents("compress.zlib://https://api.bilibili.com/x/space/acc/info?mid=" . $bilbil_uid . "&jsonp=jsonp");
			$b2 = file_get_contents("compress.zlib://https://api.bilibili.com/x/relation/stat?vmid=" . $bilbil_uid . "&jsonp=jsonp");
			$results1 = json_decode($b1, true);
			$results = json_decode($b2, true);
			update_option('jasmine_bilbil_following', $results['data']['following']);
			update_option('jasmine_bilbil_follower', $results['data']['follower']);
			update_option('jasmine_bilbil_gravatar', $results1['data']['face']);
			update_option('jasmine_bilbil_name', $results1['data']['name']);
			update_option('jasmine_bilbil_level', $results1['data']['level']);
			update_option('jasmine_bilbil_type', $results1['data']['vip']['type']);
			update_option('jasmine_bilbil_describe', $results1['data']['sign']);
			update_option('jasmine_bilbil_top_photo', $results1['data']['top_photo']);
		}
	}
}

function myAdminScripts($hook) {
  if ( 'toplevel_page_JasminePage' != $hook ) {
        return;
    }
  //队列不应特定于协议，请删除https
	wp_enqueue_style('bootstrapCss', '//cdn.jsdelivr.net/npm/bootstrap@4.5.0/dist/css/bootstrap.min.css', '', '4.5.0', false);
	wp_enqueue_style('bootstrap_datepicker_css', '//cdn.jsdelivr.net/npm/bootstrap-datepicker@1.9.0/dist/css/bootstrap-datepicker3.css', '', '1.9.0', false);
	//会和低版本jQuery冲突,duck不必 wp_enqueue_script('JS3.5.1', 'https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js', '', '3.5.1', true);
	wp_enqueue_script('popper1.16.0', '//cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js', '', '1.16.0', true);
	wp_enqueue_script('bootstrap4.5.0', '//cdn.jsdelivr.net/npm/bootstrap@4.5.0/dist/js/bootstrap.min.js', '', '4.5.0', true);
	wp_enqueue_script('bootstrap-datepicker1.9.0', '//cdn.jsdelivr.net/npm/bootstrap-datepicker@1.9.0/dist/js/bootstrap-datepicker.min.js', '', '1.9.0', true);
	wp_enqueue_script('datepicker_cn', '//cdn.jsdelivr.net/npm/bootstrap-datepicker@1.9.0/dist/locales/bootstrap-datepicker.zh-CN.min.js', '', '1.9.0', true);

}
add_action('admin_enqueue_scripts', 'myAdminScripts');
/**
 * 页面输出方法
 * 使用wp_enqueue_style在后台导入css
 * wp_enqueue_script导入js
 * @return [type] [description]
 */
function my_options() {
	//检测是否有权限
	if (!current_user_can('manage_options')) {
		wp_die(__('You do not have sufficient permissions to access this page.'));
	}
	//jasmine页面加载自定义js
	wp_register_script('jasmine-theme-js', get_template_directory_uri() . '/assets/js/jasmine-js.js', false, '', true);
	wp_enqueue_script('jasmine-theme-js');
	//下面是主题自带表单，按需设置
	?>
  <style type="text/css">
    .row{
      margin-bottom: 15px;
    }
  </style>
    <div class="container" style="margin-top: 50px">
      <div class="py-5 text-center">
        <h2>Jasmine主题设置</h2>
        <p class="lead">感谢使用吃饭用大碗的程序猿制作的Jasmine主题，本页面同样采用bootstrap与jquery制作</p>
      </div>
      <div class="row">
        <div class="col-md-12 accordion" id="accordionExample">
          <p>
            <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
              前端样式
            </button>
            <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample2">
              默认选项
            </button>
            <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample3" aria-expanded="false" aria-controls="collapseExample3">
              SEO选项
            </button>
          </p>
          <!--第一个表单-->
            <div class="collapse" id="collapseExample" data-parent="#accordionExample">
              <div class="card card-body col-md-12">
                <form class="needs-validation" method="post"  action ="options.php" name="form1">
                  <?php settings_fields('jasmine_group');?>
                  <?php do_settings_sections('jasmine_group');?>
                  <div class="row">
                    <div class="col-md-12 bm-12">
                      <label for="notice">今日公告</label>
                      <textarea  class="form-control" name="jasmine_notice" id="notice" placeholder="没有值则前台不显示公告块" ><?php echo esc_attr(get_option('jasmine_notice')); ?></textarea>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6 bm-6">
                      <label for="startDate">建站日期</label>
                      <input type="text" class="form-control" name="jasmine_startDate" id="startDate" data-provide="datepicker" data-date-format="yyyy/mm/dd" data-date-autoclose='true' data-date-language='zh-CN' placeholder="" value="<?php echo esc_attr(get_option('jasmine_startDate')); ?>" >
                    </div>
                    <div class="col-md-6 bm-6">
                      <label for="bilbil_uid">B站UID</label>
                      <input type="text" class="form-control" name="jasmine_bilbil_uid" id="bilbil_uid" placeholder="B站UID" value="<?php echo esc_attr(get_option('jasmine_bilbil_uid')); ?>" >
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12 bm-12">
                      <label for="jasmine_zfb">支付宝收款二维码</label>
                      <input type="text" size="60" value="<?php echo esc_attr(get_option('jasmine_zfb')); ?>" name="jasmine_zfb" id="jasmine_zfb"/> <a id="jasmine_zfb" class="upload btn btn-primary" href="#">上传</a>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12 bm-12">
                      <label for="jasmine_wx" style="margin-right: 16px;">微信收款二维码</label>
                      <input type="text" size="60" value="<?php echo esc_attr(get_option('jasmine_wx')); ?>" name="jasmine_wx" id="jasmine_wx"/> <a id="jasmine_wx" class="upload btn btn-primary" href="#">上传</a>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-2 bm-2">
                      <label for="CSND">CSND</label>
                      <input type="text" class="form-control" name="jasmine_CSND" id="CSND" placeholder="填网址" value="<?php echo esc_attr(get_option('jasmine_CSND')); ?>" >
                    </div>
                    <div class="col-md-2 bm-2">
                      <label for="GitHub">GitHub</label>
                      <input type="text" class="form-control" name="jasmine_GitHub" id="GitHub" placeholder="填网址" value="<?php echo esc_attr(get_option('jasmine_GitHub')); ?>">
                    </div>
                    <div class="col-md-2 bm-2">
                      <label for="weibo">微博</label>
                      <input type="text" class="form-control" name="jasmine_weibo" id="weibo" placeholder="填网址" value="<?php echo esc_attr(get_option('jasmine_weibo')); ?>" >
                    </div>
                    <div class="col-md-2 bm-2">
                      <label for="QQ">QQ</label>
                      <input type="text" class="form-control" name="jasmine_QQ" id="QQ" placeholder="只需要填QQ号" value="<?php echo esc_attr(get_option('jasmine_QQ')); ?>" >
                    </div>
                    <div class="col-md-2 bm-2">
                      <label for="zhihu">知乎</label>
                      <input type="text" class="form-control" name="jasmine_zhihu" id="zhihu" placeholder="填网址" value="<?php echo esc_attr(get_option('jasmine_zhihu')); ?>" >
                    </div>
                    <div class="col-md-2 bm-2">
                      <label for="bilbil">B站</label>
                      <input type="text" class="form-control" name="jasmine_bilbil" id="bilbil" placeholder="填网址" value="<?php echo esc_attr(get_option('jasmine_bilbil')); ?>" >
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-4 bm-4">
                      <label for="qq_he">男生的QQ号</label>
                      <input type="text" class="form-control" name="jasmine_qq_he" id="qq_he" placeholder="男生的QQ号" value="<?php echo esc_attr(get_option('jasmine_qq_he')); ?>" >
                    </div>
                    <div class="col-md-4 bm-4">
                      <label for="qq_she">女生的QQ号</label>
                      <input type="text" class="form-control" name="jasmine_qq_she" id="qq_she" placeholder="女生的QQ号" value="<?php echo esc_attr(get_option('jasmine_qq_she')); ?>" >
                    </div>
                    <div class="col-md-4 bm-4">
                      <label for="qq_she">恋爱日期</label>
                      <input type="text" class="form-control" name="jasmine_loveDate" id="loveDate" data-provide="datepicker" data-date-format="yyyy/mm/dd" data-date-autoclose='true' data-date-language='zh-CN' placeholder="不填前段不显示恋爱卡片" value="<?php echo esc_attr(get_option('jasmine_loveDate')); ?>" >
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-4 bm-4">
                      <label for="record">备案信息</label>
                      <input type="text" class="form-control" name="jasmine_record" id="record" placeholder="" value="<?php echo esc_attr(get_option('jasmine_record')); ?>" >
                      <div class="invalid-feedback">
                        Valid first name is required.
                      </div>
                    </div>
                    <div class="col-md-4 bm-4">
                      <label for="police_record">公安备案信息</label>
                      <input type="text" class="form-control" name="jasmine_police_record" id="police_record" placeholder="" value="<?php echo esc_attr(get_option('jasmine_police_record')); ?>" >
                    </div>
                    <div class="col-md-4 bm-4">
                      <label for="police_href">公安备案跳转地址</label>
                      <input type="text" class="form-control" name="jasmine_police_href" id="police_href" placeholder="列如:https://api.bilibili.com" value="<?php echo esc_attr(get_option('jasmine_police_href')); ?>" >
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12 bm-12">
                      <label for="extraCss">额外CSS</label>
                      <textarea  class="form-control" name="jasmine_extraCss" id="extraCss" placeholder="不用加<style></style>标签" ><?php echo esc_attr(get_option('jasmine_extraCss')); ?></textarea>
                    </div>
                  </div>
                  <hr class="mb-4">
                  <?php submit_button(__('确定', 'textdomain'), 'btn btn-primary btn-lg btn-block', '', false);?>
                  <?php do_action('bilbil_action');?>
                </form>
              </div>
            </div>
          <!--第二个表单-->
          <div class="collapse" id="collapseExample2" data-parent="#accordionExample">
              <div class="card card-body col-md-12">
                <form class="needs-validation" method="post"  action ="options.php" name="form2">
                  <?php settings_fields('jasmine_default');?>
                  <?php do_settings_sections('jasmine_default');?>
                  <div class="row">
                    <div class="col-md-6 bm-6">
                      <div class="custom-control custom-switch">
                        <input type="checkbox" class="custom-control-input" value="<?php echo esc_attr(get_option('jasmine_author_data')); ?>" <?php echo esc_attr(get_option('jasmine_author_data')); ?> name="jasmine_author_data" id="author_data">
                        <label class="custom-control-label" for="author_data">
                          文章底部是否显示作者信息
                        </label>
                      </div>
                    </div>
                    <div class="col-md-6 bm-6">
                      <div class="custom-control custom-switch">
                        <input type="checkbox" class="custom-control-input" value="<?php echo esc_attr(get_option('jasmine_copyright')); ?>" <?php echo esc_attr(get_option('jasmine_copyright')); ?> name="jasmine_copyright" id="copyright">
                        <label class="custom-control-label" for="copyright">
                          是否开启剪贴板版权标识
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-2 bm-2">
                      <label for="jasmine_siteName">友链名称</label>
                      <input type="text" class="form-control" name="jasmine_siteName" id="jasmine_siteName" placeholder="默认为站点名称" value="<?php echo esc_attr(get_option('jasmine_siteName')); ?>" >
                    </div>
                    <div class="col-md-2 bm-2">
                      <label for="jasmine_siteHref">友链链接</label>
                      <input type="text" class="form-control" name="jasmine_siteHref" id="jasmine_siteHref" placeholder="默认就是站点首页" value="<?php echo esc_attr(get_option('jasmine_siteHref')); ?>">
                    </div>
                    <div class="col-md-2 bm-2">
                      <label for="jasmine_siteLogo">友链LOGO</label>
                      <input type="text" class="form-control" name="jasmine_siteLogo" id="jasmine_siteLogo" placeholder="图片地址" value="<?php echo esc_attr(get_option('jasmine_siteLogo')); ?>" >
                    </div>
                    <div class="col-md-2 bm-2">
                      <label for="jasmine_siteDescription">友链站点描述</label>
                      <input type="text" class="form-control" name="jasmine_siteDescription" id="jasmine_siteDescription" placeholder="默认为站点描述" value="<?php echo esc_attr(get_option('jasmine_siteDescription')); ?>" >
                    </div>
                    <div class="col-md-2 bm-2">
                      <label for="jasmine_siteEmail">站长邮箱</label>
                      <input type="text" class="form-control" name="jasmine_siteEmail" id="jasmine_siteEmail" placeholder="默认为注册的邮箱" value="<?php echo esc_attr(get_option('jasmine_siteEmail')); ?>" >
                    </div>
                    <div class="col-md-2 bm-2">
                      <label for="jasmine_siteKey">邮箱主题</label>
                      <input type="text" class="form-control" name="jasmine_siteKey" id="jasmine_siteKey" placeholder="默认为申请友链" value="<?php echo esc_attr(get_option('jasmine_siteKey')); ?>" >
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12 bm-12">
                      <label for="jasmine_bg">背景图片</label>
                      <input type="text" size="60" value="<?php echo esc_attr(get_option('jasmine_bg')); ?>" name="jasmine_bg" id="jasmine_bg"/> <a id="jasmine_bg" class="upload btn btn-primary" href="#">上传</a>
                    </div>
                  </div>
                  <hr class="mb-4">
                  <?php submit_button(__('确定', 'textdomain'), 'btn btn-primary btn-lg btn-block', '', false);?>
                </form>
              </div>
            </div>
            <!--第三个表单-->
            <div class="collapse" id="collapseExample3" data-parent="#accordionExample">
              <div class="card card-body col-md-12">
                <form class="needs-validation" method="post"  action ="options.php" name="form2">
                  <?php settings_fields('jasmine_seo');?>
                  <?php do_settings_sections('jasmine_seo');?>
                  <div class="row">
                    <div class="col-md-6 bm-6">
                      <label for="jasmine_home_keywords">主页关键词</label>
                      <input type="text" class="form-control" name="jasmine_home_keywords" id="jasmine_home_keywords" value="<?php echo esc_attr(get_option('jasmine_home_keywords')); ?>" >
                    </div>
                     <div class="col-md-6 bm-6">
                      <label for="jasmine_home_description">主页描述</label>
                      <input type="text" class="form-control" name="jasmine_home_description" id="jasmine_home_description" value="<?php echo esc_attr(get_option('jasmine_home_description')); ?>" >
                    </div>
                  </div>
                  <div class="alert alert-primary" role="alert">
                    seo详细内容请移步到seo.php中查看
                  </div>
                  <hr class="mb-4">
                  <?php submit_button(__('确定', 'textdomain'), 'btn btn-primary btn-lg btn-block', '', false);?>
                </form>
              </div>
            </div>
        <!--所有表单结束-->
        </div>
      </div>
    </div>
    <?php
}

//添加短代码
add_action('init', 'wpdocs_add_custom_shortcode');

function wpdocs_add_custom_shortcode() {
	add_shortcode('bilbil', 'jasmine_bilbil');
	add_shortcode('footData', 'echo_footData');
	add_shortcode('counPost', 'count_post');
	add_shortcode('countComments', 'count_comments');
  add_shortcode('countViews', 'getCountViews');
	// add_shortcode('lastChange','last_change');
}

function last_change() {
	global $wpdb;
	$last = $wpdb->get_results("SELECT MAX(post_modified) AS MAX_m FROM
$wpdb->posts WHERE (post_type = 'post' OR post_type = 'page') AND
(post_status = 'publish' OR post_status = 'private')");
	$last = date(‘Y - n - j’, strtotime($last[0]->MAX_m));
	echo $last;
}

function count_comments() {
	global $wpdb;
	echo $wpdb->get_var("SELECT COUNT(*) FROM $wpdb->comments");
}

function count_post() {
	$count_posts = wp_count_posts();
	echo $published_posts = $count_posts->publish;
}

function jasmine_bilbil($atts) {
	if (get_option($atts['option']) !== false) {
		if (!empty(get_option($atts['option']))) {
			echo esc_attr(get_option($atts['option']));
		}
	} else {
		echo "";
	}
}

function echo_footData() {
	$date = esc_attr(explode("/", get_option('jasmine_startDate'))[0]);
	$this_year = date('Y');
	$blog_name = get_bloginfo('name');
	$bolg_href = get_bloginfo('url');
	$beian = get_option('jasmine_record');
	$police_beian = get_option('jasmine_police_record');
	$police_beian_href = get_option('jasmine_police_href');
	$police_beian_exit = "未备案";
	$startDate = "";
	if (get_option('jasmine_police_record')) {
		$police_beian_exit = "<br/> <img class='lazy loaded' src='https://cdn.jsdelivr.net/gh/rm-rf-run/Jasmine/assets/images/
beian.png' data-src='' data-was-processed='true'> <a href='" . esc_url($police_beian_href) . "' rel='external nofollow' target='_blank'>" . esc_html($police_beian) . " </a>";
	}
	if (get_option('jasmine_startDate')) {
		$startDate = "本博客已萌萌哒<span class='my-face'>╭(●｀∀´●)╯╰(●’◡’●)╮</span>运行了<span id='run_time'></span>";
	}
	if ($date == $this_year) {
		$date = "";
	} else {
		$date = $date . '-';
	}
	echo "版权所有 © " . $date . $this_year . " <a href='" . esc_url($bolg_href) . "'>" . esc_html($blog_name) . "</a> " . $police_beian_exit . " | <a href='http://www.beian.miit.gov.cn/' rel='external nofollow' target='_blank'>" . $beian . "</a><br/>Theme Jasmine By <a href='https://prettywordpress.com' target='_blank' ><span id='rm-rf-run'>rm-rf-run</span></a> With  | All Rights Reserved<br/>" . $startDate;
}

function echo_extraCss(){
  if (get_option('jasmine_extraCss')) {
    echo '<style>'.get_option('jasmine_extraCss').'</style>';
  }
}

//额外css
add_action('wp_head','echo_extraCss');

//添加背景图片样式
add_filter( 'body_class', function( $classes ) {
    return array_merge( $classes, array( 'jasmine-background' ) );
} );

?>


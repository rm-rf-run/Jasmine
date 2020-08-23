<?php
//启动主题钩子,创建jasmine表
add_action('after_setup_theme', 'create_jasmine_table'); 

function create_jasmine_table()
{
    global $wpdb;
    $table_name = $wpdb->prefix . "jasmine";
	$sql ="CREATE TABLE IF NOT EXISTS `" . $table_name . "` (
	  `id` varchar(255)  NOT  NULL,
	  `backgroundImg` varchar(255) DEFAULT  NULL,
	  `csdn` varchar(255)  DEFAULT  NULL,
	  `gitHub` varchar(255)  DEFAULT  NULL,
	  `weibo` varchar(255)  DEFAULT  NULL,
	  `qq` varchar(255)  DEFAULT  NULL,
	  `zhihu` varchar(255)  DEFAULT  NULL,
	  `bililbilil` varchar(255)  DEFAULT  NULL,
	  `personalMessage` varchar(255)  DEFAULT  NULL,
	  `extraCss` varchar(255)  DEFAULT  NULL,
	  `startDate` varchar(255) DEFAULT   NULL,
	  `alipay` varchar(255) DEFAULT   NULL,
	  `weChat` varchar(255) DEFAULT   NULL,
	  PRIMARY KEY (`id`)
	)ENGINE=InnoDB  DEFAULT CHARSET=utf8;";
	require_once (ABSPATH . "wp-admin/includes/upgrade.php");
    dbDelta($sql);
}
/**
 * 停用主题时删除所创建的表和数据
 * @param  [type] $new_theme [description]
 * @return [type]            [description]
 */
function deactivate_my_theme($new_theme)
{
    global $wpdb;
    $table_name = $wpdb->prefix . "jasmine";
    $sql        = 'DROP TABLE ' . $table_name . '';
    flush_rewrite_rules(false);
}
// add_action('switch_theme', 'deactivate_my_theme');
/**
 *添加菜单
 */
add_action('admin_menu', 'wpdocs_register_my_custom_menu_page');
/**
 *add_menu_page注册菜单
 *参数：页面标题、菜单名称、权限、注册自定义菜单页（或者单独的一个PHP页面）、调用函数、图标、位置
 * @return [type] [description]
 */
function wpdocs_register_my_custom_menu_page()
{
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
/**
 * 页面输出方法
 * 使用wp_enqueue_style在后台导入css
 * wp_enqueue_script导入js
 * @return [type] [description]
 */
function my_options()
{
    //检测是否有权限
    if (!current_user_can('manage_options')) {
        wp_die(__('You do not have sufficient permissions to access this page.'));
    }
    wp_enqueue_style('bootstrapCss', 'https://cdn.jsdelivr.net/npm/bootstrap@4.5.0/dist/css/bootstrap.min.css', '', '4.5.0', false);
    wp_enqueue_script('JS3.5.1', 'https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js', '', '3.5.1', true);
    wp_enqueue_script('popper1.16.0', 'https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js', '', '1.16.0', true);
    wp_enqueue_script('bootstrap4.5.0', 'https://cdn.jsdelivr.net/npm/bootstrap@4.5.0/dist/js/bootstrap.min.js', '', '4.5.0', true);
    ?>
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
              其他样式
            </button>
          </p>
          <!--第一个表单-->
            <div class="collapse" id="collapseExample" data-parent="#accordionExample">
              <div class="card card-body col-md-12">
                <form class="needs-validation" name="form1">
                  <div class="row">
                    <div class="col-md-12 bm-12">
                      <label for="background-img">网站背景图片地址</label>
                      <input type="text" class="form-control" id="background-img" placeholder="" value="" required="">
                      <div class="invalid-feedback">
                        Valid first name is required.
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-2 bm-2">
                      <label for="CSND">CSND</label>
                      <input type="text" class="form-control" id="CSND" placeholder="" value="" required="">
                      <div class="invalid-feedback">
                        Valid first name is required.
                      </div>
                    </div>
                    <div class="col-md-2 bm-2">
                      <label for="GitHub">GitHub</label>
                      <input type="text" class="form-control" id="GitHub" placeholder="" value="" required="">
                      <div class="invalid-feedback">
                        Valid first name is required.
                      </div>
                    </div>
                    <div class="col-md-2 bm-2">
                      <label for="weibo">微博</label>
                      <input type="text" class="form-control" id="weibo" placeholder="" value="" required="">
                      <div class="invalid-feedback">
                        Valid first name is required.
                      </div>
                    </div>
                    <div class="col-md-2 bm-2">
                      <label for="QQ">QQ</label>
                      <input type="text" class="form-control" id="QQ" placeholder="" value="" required="">
                      <div class="invalid-feedback">
                        Valid first name is required.
                      </div>
                    </div>
                    <div class="col-md-2 bm-2">
                      <label for="zhihu">知乎</label>
                      <input type="text" class="form-control" id="zhihu" placeholder="" value="" required="">
                      <div class="invalid-feedback">
                        Valid first name is required.
                      </div>
                    </div>
                    <div class="col-md-2 bm-2">
                      <label for="bililbilil">B站</label>
                      <input type="text" class="form-control" id="bililbilil" placeholder="" value="" required="">
                      <div class="invalid-feedback">
                        Valid first name is required.
                      </div>
                    </div>
                  </div>
                  <hr class="mb-4">
                  <button class="btn btn-primary btn-lg btn-block" type="submit">确定</button>
                </form>
              </div>
            </div>
          <!--第二个表单-->
          <div class="collapse" id="collapseExample2" data-parent="#accordionExample">
              <div class="card card-body col-md-12">
                <form class="needs-validation" name="form2">
                  <div class="row">
                    <div class="col-md-6 bm-6">
                      <label for="firstName">First name</label>
                      <input type="text" class="form-control" id="firstName" placeholder="" value="" required="">
                      <div class="invalid-feedback">
                        Valid first name is required.
                      </div>
                    </div>
                    <div class="col-md-6 bm-6">
                      <label for="firstName">First name</label>
                      <input type="text" class="form-control" id="firstName" placeholder="" value="" required="">
                      <div class="invalid-feedback">
                        Valid first name is required.
                      </div>
                    </div>
                  </div>
                  <hr class="mb-4">
                  <button class="btn btn-primary btn-lg btn-block" type="submit">确定</button>
                </form>
              </div>
            </div>
        </div>
      </div>
    </div>
    <?php
}
function echoDate( $postID ){
  $content = sprintf( esc_html__( '<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-calendar-date" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M6.445 11.688V6.354h-.633A12.6 12.6 0 0 0 4.5 7.16v.695c.375-.257.969-.62 1.258-.777h.012v4.61h.675zm1.188-1.305c.047.64.594 1.406 1.703 1.406 1.258 0 2-1.066 2-2.871 0-1.934-.781-2.668-1.953-2.668-.926 0-1.797.672-1.797 1.809 0 1.16.824 1.77 1.676 1.77.746 0 1.23-.376 1.383-.79h.027c-.004 1.316-.461 2.164-1.305 2.164-.664 0-1.008-.45-1.05-.82h-.684zm2.953-2.317c0 .696-.559 1.18-1.184 1.18-.601 0-1.144-.383-1.144-1.2 0-.823.582-1.21 1.168-1.21.633 0 1.16.398 1.16 1.23z"/>
  <path fill-rule="evenodd" d="M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1zm1-3a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2z"/>
  <path fill-rule="evenodd" d="M3.5 0a.5.5 0 0 1 .5.5V1a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 .5-.5zm9 0a.5.5 0 0 1 .5.5V1a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 .5-.5z"/>
</svg>: %s', 'textdomain' ), get_the_modified_date('Y-M-j',$postID) );
  return $content;
}
add_action( 'echo_date', 'echoDate' );
?>
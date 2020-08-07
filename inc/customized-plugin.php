<?php
//启动主题钩子,创建jasmine表
do_action( 'after_setup_theme', 'create_jasmine_table');

function create_jasmine_table()
{
    global $wpdb;
    $table_name = $wpdb->prefix . "jasmine";
    require_once ABSPATH . "wp-admin/includes/upgrade.php";
    dbDelta('CREATE TABLE if not exists `'.$table_name.'`  (
  `id` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `backgroundImg` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `csdn` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `gitHub` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `weibo` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `qq` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `zhihu` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `bililbilil` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `personalMessage` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `extraCss` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `startDate` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `alipay` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `weChat` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;');
}
/**
 * 停用主题时删除所创建的表和数据
 * @param  [type] $new_theme [description]
 * @return [type]            [description]
 */
function deactivate_my_theme( $new_theme ) {
    global $wpdb;
    $table_name = $wpdb->prefix . "jasmine";
    $sql        = 'DROP TABLE '.$table_name.'';
    flush_rewrite_rules(false);
}
add_action( 'switch_theme', 'deactivate_my_theme' );
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

?>
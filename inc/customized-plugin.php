<?php
	//启动主题钩子
	// do_action( 'after_switch_theme', 'create_plaugin_table' );

	function create_plaugin_table(){
		global $wpdb;
		$table_name =$wpdb->prefix ."jasmine"; 
		require_once(ABSPATH . "wp-admin/includes/upgrade.php");
		dbDelta($sql);
	}

	function wpdocs_register_my_custom_menu_page() {
    add_menu_page(
        __( 'Custom Menu Title', 'textdomain' ),
        'Jasmine',
        'manage_options',
        'myplugin/myplugin-admin.php',
        '',
        'dashicons-buddicons-activity',
        6
    );
	}
	add_action( 'admin_menu', 'wpdocs_register_my_custom_menu_page' );
?>
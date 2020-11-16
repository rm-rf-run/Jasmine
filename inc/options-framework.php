<?php
/**
 * Options Framework
 *
 * @package   Options Framework
 * @author    Devin Price <devin@wptheming.com>
 * @license   GPL-2.0+
 * @link      http://wptheming.com
 * @copyright 2010-2014 WP Theming
 *
 * @wordpress-plugin
 * Plugin Name: Options Framework
 * Plugin URI:  http://wptheming.com
 * Description: A framework for building theme options.
 * Version:     1.9.1
 * Author:      Devin Price
 * Author URI:  http://wptheming.com
 * License:     GPL-2.0+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain: optionsframework
 * Domain Path: /languages
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

// Don't load if optionsframework_init is already defined
if (is_admin() && ! function_exists( 'optionsframework_init' ) ) :

function optionsframework_init() {

	//  If user can't edit theme options, exit
	if ( ! current_user_can( 'edit_theme_options' ) ) {
		return;
	}

	// Loads the required Options Framework classes.
	require plugin_dir_path( __FILE__ ) . 'includes/class-options-framework.php';
	require plugin_dir_path( __FILE__ ) . 'includes/class-options-framework-admin.php';
	require plugin_dir_path( __FILE__ ) . 'includes/class-options-interface.php';
	require plugin_dir_path( __FILE__ ) . 'includes/class-options-media-uploader.php';
	require plugin_dir_path( __FILE__ ) . 'includes/class-options-sanitization.php';

	// Instantiate the options page.
	$options_framework_admin = new Options_Framework_Admin;
	$options_framework_admin->init();

	// Instantiate the media uploader class
	$options_framework_media_uploader = new Options_Framework_Media_Uploader;
	$options_framework_media_uploader->init();

	// Load settings
	$optionsframework_settings = get_option('optionsframework' );
	// If the option has no saved data, load the defaults
	if ( ! get_option( $optionsframework_settings['id'] ) ) {
		optionsframework_setdefaults();
	}

}

add_action( 'init', 'optionsframework_init', 20 );

endif;


function optionsframework_setdefaults() {

	$optionsframework_settings = get_option( 'optionsframework' );

	// Gets the unique option id
	$option_name = $optionsframework_settings['id'];

	/*
	 * Each theme will hopefully have a unique id, and all of its options saved
	 * as a separate option set.  We need to track all of these option sets so
	 * it can be easily deleted if someone wishes to remove the plugin and
	 * its associated data.  No need to clutter the database.
	 *
	 */

	if ( isset( $optionsframework_settings['knownoptions'] ) ) {
		$knownoptions =  $optionsframework_settings['knownoptions'];
		if ( !in_array( $option_name, $knownoptions ) ) {
			array_push( $knownoptions, $option_name );
			$optionsframework_settings['knownoptions'] = $knownoptions;
			update_option( 'optionsframework', $optionsframework_settings );
		}
	} else {
		$newoptionname = array( $option_name );
		$optionsframework_settings['knownoptions'] = $newoptionname;
		update_option( 'optionsframework', $optionsframework_settings );
	}

	// Gets the default options data from the array in options.php
	$options =& _optionsframework_options();

	// If the options haven't been added to the database yet, they are added now
	$values = of_get_default_values();

	if ( isset( $values ) ) {
		add_option( $option_name, $values ); // Add option with default settings
	}
}

function &_optionsframework_options() {
	static $options = null;

	if ( !$options ) {
		// Load options from options.php file (if it exists)
		$location = apply_filters( 'options_framework_location', array('options.php') );
		if ( $optionsfile = locate_template( $location ) ) {
			$maybe_options = require_once $optionsfile;
			if ( is_array($maybe_options) ) {
				$options = $maybe_options;
			} else if ( function_exists( 'optionsframework_options' ) ) {
				$options = optionsframework_options();
			}
		}

		// Allow setting/manipulating options via filters
		$options = apply_filters('of_options', $options);
	}

	return $options;
}

function of_get_default_values() {
	$output = array();
	$config =& _optionsframework_options();
	foreach ( (array) $config as $option ) {
		if ( ! isset( $option['id'] ) ) {
			continue;
		}
		if ( ! isset( $option['std'] ) ) {
			continue;
		}
		if ( ! isset( $option['type'] ) ) {
			continue;
		}
		if ( has_filter( 'of_sanitize_' . $option['type'] ) ) {
			$output[$option['id']] = apply_filters( 'of_sanitize_' . $option['type'], $option['std'], $option );
		}
	}
	return $output;
}

/**
 * Helper function to return the theme option value.
 * If no value has been saved, it returns $default.
 * Needed because options are saved as serialized strings.
 *
 * Not in a class to support backwards compatibility in themes.
 */
if ( ! function_exists( 'jasmine_option' ) ) :
function jasmine_option( $name, $default = false ) {

	$option_name = '';

	// Gets option name as defined in the theme
	if ( function_exists( 'optionsframework_option_name' ) ) {
		$option_name = optionsframework_option_name();
	}

	// Fallback option name
	if ( '' == $option_name ) {
		$option_name = get_option( 'stylesheet' );
		$option_name = preg_replace( "/\W/", "_", strtolower( $option_name ) );
	}

	// Get option settings from database
	$options = get_option( $option_name );

	// Return specific option
	if ( isset( $options[$name] ) ) {
		return $options[$name];
	}

	return $default;
}
endif;
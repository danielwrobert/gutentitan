<?php
/**
 * Plugin Name: Gutentitan
 * Plugin URI: https://github.com/WordPress/gutenberg-examples
 * Description: This is a plugin experiment testing out registering a basic custom block
 * Version: 0.1.0
 * Author: Daniel W. Robert
 *
 * @package gutentitan
 */

defined( 'ABSPATH' ) || exit;

function gutentitan_enqueue_block_editor_assets() {
	wp_enqueue_script(
		'gutentitan-static',
		plugins_url( 'build/block.js', __FILE__ ),
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'underscore' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'build/block.js' )
	);
	wp_localize_script( 'gutentitan-static', 'plugindata', array(
		'url' => plugins_url( 'build', __FILE__ ),
	) );
}
add_action( 'enqueue_block_editor_assets', 'gutentitan_enqueue_block_editor_assets' );

function gutenberg_enqueue_block_assets() {
	wp_enqueue_style(
		'gutentitan-static',
		plugins_url( 'build/style.css', __FILE__ ),
		array( 'wp-blocks' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'build/style.css' )
	);
}
add_action( 'enqueue_block_assets', 'gutenberg_enqueue_block_assets' );

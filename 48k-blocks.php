<?php
/*
    Plugin Name: 48k blocks
*/

require_once('registerBlockStyles/index.php');

function c_48kblocks_register_block() {
    wp_register_script(
        '48kblocks-block-script',
        plugins_url( 'build/48kblocks.build.js', __FILE__ ),
        array( 'wp-blocks', 'wp-element', 'wp-editor', 'wp-components', 'wp-data' )
    );

    wp_register_script(
        '48kblocks-block-script-frontend',
        plugins_url( '48kblocks.frontend.js', __FILE__ ),
        array( 'jQuery' )
    );

    wp_register_style(
        '48kblocks-block-style-editor',
        plugins_url( '48kblocks.editor.css', __FILE__ ),
        array( 'wp-edit-blocks' ),
        filemtime( plugin_dir_path( __FILE__ ) . '48kblocks.editor.css' )
    );

    wp_register_style(
        '48kblocks-block-style',
        plugins_url( '48kblocks.css', __FILE__ ),
        array(),
        filemtime( plugin_dir_path( __FILE__ ) . '48kblocks.css' )
    );

    register_block_type( 'c48kblocks/block-1', array(
        'editor_script' => '48kblocks-block-script',
        'editor_style' => '48kblocks-block-style-editor',
        'style' => '48kblocks-block-style',
        //'script' => 
    ) );

    register_block_type( 'c48kblocks/block-2', array(
        // server rendered as it has render callback
        'render_callback' => 'c_48kblocks_render_block_2',
        'editor_script' => '48kblocks-block-script',
        'editor_style' => '48kblocks-block-style-editor',
        'style' => '48kblocks-block-style',
        //'script' => 
    ) );
}
add_action( 'init', 'c_48kblocks_register_block' );


function c_48kblocks_render_block_2( $attributes, $content ) {
    return '<h2>You selected: ' . $attributes['sector'] . '</h2>';
}

?>
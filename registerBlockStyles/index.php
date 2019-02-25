<?php

function c_48kblocks_enqueue() {
    wp_enqueue_script(
        '48kblocks-rbs-script',
        plugins_url( 'registerBlockStyles.js', __FILE__ ),
        array( 'wp-blocks' )
    );
}
add_action( 'enqueue_block_editor_assets', 'c_48kblocks_enqueue' );

function c_48kblocks_stylesheet() {
    wp_enqueue_style( '48kblocks-rbs-style', plugins_url( 'style.css', __FILE__ ) );
}
add_action( 'enqueue_block_assets', 'c_48kblocks_stylesheet' );

?>
<?php
// Remove all default WP template redirects/lookups
remove_action('template_redirect', 'redirect_canonical');

// Redirect all requests to index.php so the Vue app is loaded and 404s aren't thrown
function remove_redirects()
{
    add_rewrite_rule('^/(.+)/?', 'index.php', 'top');
}
add_action('init', 'remove_redirects');

// Load scripts
function load_vue_scripts()
{
    wp_enqueue_script(
        'vuejs-wordpress-theme-starter-js',
        get_stylesheet_directory_uri() . '/dist/scripts/index.min.bundle.js',
        array( 'jquery' ),
        filemtime(get_stylesheet_directory() . '/dist/scripts/index.min.bundle.js'),
        true
    );

    wp_enqueue_style(
        'vuejs-wordpress-theme-starter-css',
        get_stylesheet_directory_uri() . '/dist/styles.css',
        null,
        filemtime(get_stylesheet_directory() . '/dist/styles.css')
    );
}
add_action('wp_enqueue_scripts', 'load_vue_scripts', 100);

// Add featured image support for posts
add_theme_support('post-thumbnails', array( 'post' ));

// Add primary menu to reveal Appearance > Menu
add_theme_support('menus');
add_action('init', 'register_my_menu');
function register_my_menu()
{
    register_nav_menu('header-menu', __('Navigation Menu'));
}

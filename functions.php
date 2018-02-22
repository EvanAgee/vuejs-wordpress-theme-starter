<?php
// Remove all default WP template redirects/lookups
remove_action('template_redirect', 'redirect_canonical');

// Redirect all requests to index.php so the Vue app is loaded and 404s aren't thrown
function remove_redirects() {
    add_rewrite_rule('^/(.+)/?', 'index.php', 'top');
}
add_action('init', 'remove_redirects');

// Load scripts
function load_vue_scripts() {
    wp_enqueue_style('blankslate/app.css', get_template_directory_uri() . '/dist/styles/app.css', false, null);
    wp_enqueue_script('blankslate/manifest.js', get_template_directory_uri() . '/dist/scripts/manifest.js', null, null, true);
    wp_enqueue_script('blankslate/vendor.js', get_template_directory_uri() . '/dist/scripts/vendor.js', null, null, true);
    wp_enqueue_script('blankslate/app.js', get_template_directory_uri() . '/dist/scripts/app.js', null, null, true);
    
    if( $wpvue_settings = get_option('wpvue_settings') ) {
    	if( isset( $wpvue_settings['wpvue_basic_token'] ) ) {
	    	wp_localize_script( 'blankslate/app.js', 'bsApp', array(
		    	'nonce' => wp_create_nonce( 'wp_rest' ),
		    	'basic'	=> 'Basic '.$wpvue_settings['wpvue_basic_token'],
		    	'root' 	=> esc_url_raw( rest_url() )
		    ) );
	    }
    }

}
add_action('wp_enqueue_scripts', 'load_vue_scripts', 100);



//Auth
add_action( 'admin_menu', 'wpvue_add_admin_menu' );
add_action( 'admin_init', 'wpvue_settings_init' );

function wpvue_add_admin_menu(  ) { 
	add_options_page( 'wp+vue', 'wp+vue', 'manage_options', 'wp-vue', 'wpvue_options_page' );
}


function wpvue_settings_init(  ) { 
	register_setting( 'pluginPage', 'wpvue_settings' );

	add_settings_section(
		'wpvue_pluginPage_section', 
		__( 'Settings', 'wpvue' ), 
		'wpvue_settings_section_callback', 
		'pluginPage'
	);

	add_settings_field( 
		'wpvue_basic_token', 
		__( 'Authorization token', 'wpvue' ), 
		'wpvue_basic_token_render', 
		'pluginPage', 
		'wpvue_pluginPage_section' 
	);

}


function wpvue_basic_token_render(  ) { 
	$options = get_option( 'wpvue_settings' );
	?>
	<ol>
		<?php if( ! class_exists( 'Application_Passwords' ) ) { ?>
		<li><?php printf( __('Install/activate %s', 'wpvue' ), '<a href="https://wordpress.org/plugins/application-passwords/" target="_blank">Application Passwords</a>' ); ?></li>
		<?php } else { ?>
		<li>
			<?php printf( __('Generate an <a href="%s">application password</a>', 'wpvue'), get_edit_user_link() . '#application-passwords' ); ?>		
		</li>
		<li>
			<?php _e( 'Paste it here:', 'wpvue' ); ?>
			<br />
			<input type='text' size="60" name='wpvue_settings[wpvue_basic_token]' value='<?php echo $options['wpvue_basic_token']; ?>'>
		</li>
		<li><?php _e( 'Save', 'wpvue' ); ?></li>
		<?php } ?>
	</ol>
	<?php

}


function wpvue_settings_section_callback(  ) { 
	echo __( 'This section description', 'wpvue' );
}


function wpvue_options_page(  ) { 
	?>
	<form action='options.php' method='post'>

		<h2>wp+vue</h2>

		<?php
		settings_fields( 'pluginPage' );
		do_settings_sections( 'pluginPage' );
		submit_button();
		?>

	</form>
	<?php

}
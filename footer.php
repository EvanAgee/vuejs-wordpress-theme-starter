<?php wp_footer(); ?>
<?php if ( preg_match("/(.*.local|.*.loc|localhost:.*)/i", $_SERVER['HTTP_HOST']) ) : ?>
	<!-- HMR Reloader -->
	<script id="__bs_script__">
		//<![CDATA[
      document.write("<script async src='http://HOST:3000/browser-sync/browser-sync-client.js?v=2.26.5'><\/script>".replace("HOST", location.hostname));
		//]]>
	</script>
<?php endif; ?>
</body>

</html>

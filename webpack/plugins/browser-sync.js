const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = new BrowserSyncPlugin({
  files: ['*.php', 'dist'],
  reloadDelay: 0,
  notify: {
    styles: {
      top: 'auto',
      bottom: '1rem',
      right: '1rem',
      left: 'auto',
      width: '200px',
      borderBottomLeftRadius: '0',
      borderBottomRightRadius: '0',
      border: 'none',
      fontSize: '0.8rem',
      color: 'white',
      background: 'linear-gradient(to right, #92025f, #3b1e58)',
      boxShadow: '0 0 1rem rgba(0,0,0,0.5)',
    },
  },
});

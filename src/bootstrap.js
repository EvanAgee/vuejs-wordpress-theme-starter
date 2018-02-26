try {
  window._ = require('lodash');
  window.$ = window.jQuery = require('jquery');
  window.axios = require('axios');
  window.axios.defaults.headers.common = {
    'X-CSRF-TOKEN': window.WordPress.csrfToken,
    'X-Requested-With': 'XMLHttpRequest'
  };
} catch (e) {}

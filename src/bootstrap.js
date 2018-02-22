import axios from 'axios';

axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    if(bsApp.basic) {
	    config.headers['Authorization'] = bsApp.basic;
	}
	
    return config;

  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);


try {
  window._ = require('lodash');
  window.$ = window.jQuery = require('jquery');

  window.axios = axios;

  window.axios.defaults.headers.common = {
    'X-CSRF-TOKEN': window.WordPress.csrfToken
  };

} catch (e) {}


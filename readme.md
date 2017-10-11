# vuejs-wordpress-theme-starter
A true WordPress theme with the guts ripped out and replaced with Vue. Based on the [BlankSlate](https://github.com/tidythemes/blankslate) WP starter theme.

**Who's this for?** When I started diving into using Vue in WordPress I found plenty of great starters for headless WordPress, but I had the added constraint of needing to run the front and backend on the same host, thus this project was created.

## Features
- [VueRouter](https://github.com/vuejs/vue-router) integrated
- [Vuex](https://github.com/vuejs/vuex) integrated (with sample WordPress-centric modules)
- jQuery integrated, if that's your thing
- [Firebase](https://firebase.google.com/) support and sample config
- [Axios](https://github.com/axios/axios) for API requests
- Follows the development guidelines/structure set forth by Vuejs
- Bare essentials needed for a functional WordPress theme
- All requests are redirected back to the index.php so your Vue routing is respected.
- SCSS support
- Bootstrap 4 Beta

## Getting started
- Clone the repo inside of your `wp-content/themes/` directory
- Navigate to the theme directory and run  
    `npm install`  
    `npm run watch` for development  
    `npm run production` when you're ready to deploy the theme.

## Code Organization
All of the code you're going to edit is located in `/src/`. From there it's broken into a few logical directories. 

- `/src`
  - `/api` for API requests
  - `/assets` for images mostly
  - `/components` Vue components
  - `/router` vue-router directives
  - `/store` vuex store and modules
  - `/styles` SCSS styles
  - `/vendor` 3rd party scripts and libraries

All scripts and styles in `/src` are compiled down to the `/dist` directory, which is what you will deploy. **When you're ready to deploy don't deploy the src/ directory.**

## External References
- [Creating Vuex Modules](https://vuex.vuejs.org/en/modules.html)
- [vue-router](https://github.com/vuejs/vue-router)
- [WordPress REST API](http://v2.wp-api.org/)
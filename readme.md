[![image](https://res.cloudinary.com/evanagee/image/upload/c_scale,w_700/v1580244758/VueWP/VWP-hero.png)](https://vuewordpress.com)

[![Tweet](https://img.shields.io/twitter/url/https/github.com/tterb/hyde.svg?style=social)](https://twitter.com/intent/tweet?text=Check%20out%20Hyde!%20%E2%9C%A8%20An%20accessible,%20open-source%20markdown%20editor%20for%20any%20user%20E2%9C%A8%20https://github.com/tterb/hyde%20%F0%9F%A4%97) [![Twitter Follow](https://img.shields.io/twitter/follow/VueWord.svg?style=social)](https://twitter.com/VueWord)

- [VueWordPress Theme Starter](#vuewordpress-theme-starter)
  - [Features](#features)
  - [Getting started](#getting-started)
  - [Video Training](#video-training)
  - [Code Organization](#code-organization)
  - [New to Vue?](#new-to-vue)
  - [External References](#external-references)
  - [Features coming soon:](#features-coming-soon)
- [Changelog](#changelog)

# VueWordPress Theme Starter

A true WordPress theme with the guts ripped out and replaced with Vue. **Looking to create a Vue-powered WordPress plugin? [I've got a starter for that too!](https://github.com/EvanAgee/vuejs-wordpress-plugin-starter)**

**Who's this for?** When I started diving into using Vue in WordPress I found plenty of great starters for headless WordPress, but I had the added constraint of needing to run the front and backend on the same host, thus this project was created.

**Need help? [Join the VueWordPress Slack](https://join.slack.com/t/vuewordpress/shared_invite/enQtMjg5NzAzMzY5Mzk0LTk2YjljNmIxZDk2Y2IzNDc2NzI3M2M3M2FhNjJkZjE5YWNhNmU5OWExZjI5YjRiMjcwYzk3ZWViMWIyMWE1MDY).**

## Features

- [Tailwind](https://tailwindcss.com/) is built in! If you don't want Tailwindcss in your project you can easily disable it by removing the import statement in `styles.css`.
- **Hot reloading/browsersync** for local development.
- [VueRouter](https://github.com/vuejs/vue-router) integrated
- [Vuex](https://github.com/vuejs/vuex) integrated (with sample WordPress-centric modules)
- [Axios](https://github.com/axios/axios) for API requests
- Follows the development guidelines/structure set forth by Vuejs
- Bare essentials needed for a functional WordPress theme
- All requests are redirected back to the index.php so your Vue routing is respected.
- PostCSS baby

## Getting started

[![Watch the getting started video](https://res.cloudinary.com/evanagee/image/upload/c_scale,w_1000/v1580251167/VueWP/getting-started-youtube2.jpg)](https://www.youtube.com/watch?v=xF-ZVrk7N5g)

1. **Clone the repo** inside of your `wp-content/themes/` directory
2. **Navigate to the theme directory in your terminal** and run
   `npm install`
   `npm run watch` for development
   `npm run build` when you're ready to deploy the theme.
3. **Activate the theme** in your WordPress instance.
4. **Update your permalink settings** `(Settings -> Permalinks)` to be **"Day and name"**. If you don't want to use this setting you'll need to update the Vue router so it can find your content correctly. Please note that if you want to use a different permalink structure you'll need to update `./src/router/index.js` so it looks for the correct path.
5. Boom.com!

Since by default Tailwind completely resets all styles/spacing, there are a few initial styles I've provided in `src/assets/css/_tailwind.css` to make things appear more like you'd expect. Modify to your liking!

## Video Training

- [Subscribe on YouTube](https://www.youtube.com/channel/UCg8pbW81_DtpPZGiZMpJRyw)
- [Getting Started](https://www.youtube.com/watch?v=xF-ZVrk7N5g)
- [How to add WordPress menu support](https://www.youtube.com/watch?v=sCT7jQEbXxc)

## Code Organization

All of the code you're going to edit is located in `/src/`. From there it's broken into a few logical directories.

- `/src`
  - `/api` for API requests
  - `/assets` for images mostly
  - `/components` Vue components
  - `/router` vue-router directives
  - `/store` vuex store and modules
  - `/assets/css` CSS styles
  - `/vendor` 3rd party scripts and libraries

All scripts and styles in `/src` are compiled down to the `/dist` directory, which is what you will deploy. **When you're ready to deploy don't deploy the src/ directory.**

## New to Vue?

Not sure where to begin? The [Vuejs documentation](https://vuejs.org/v2/guide/) is actually amazing, but if you're looking for video training I highly recommend the free [Learn Vue 2: Step By Step](https://laracasts.com/series/learn-vue-2-step-by-step) course over at Laracasts. There's also a [great playlist by Academind](https://www.youtube.com/watch?v=FXY1UyQfSFw&list=PL55RiY5tL51qxUbODJG9cgrsVd7ZHbPrt) available on YouTube that covers pretty much everything you'd want to know about building a fully-featured Vue app.

I've created a couple of example components in `src/components/widgets` to give you an idea of how to work with the Vuex store data.

If you're new to Vue/Vuex I would do the following:

- Open up `src/app.js` this is the main JS file for the app and will give you a glimpse into what's going on behind the scenes.
- Next open up `src/App.vue` this is the primary app component, a page wrapper of sorts. It contains the header/footer and the `<router-view>` component which is what loads in all of the other screens as you navigate around the app. Note that by default `src/components/Home.vue` is loaded into the `router-view` initially.
- Next open up `src/routes/index.js` and notice how the routes are setup by default. Out of the box there is only one route, the `/` or home view. For more information on setting up routing within your app checkout [Vue-Router](https://router.vuejs.org/).
- Next is the Vuex store. I won't cover how that works here as it's a tiny bit more advanced. Check out all files in `src/store` and start to familiarize yourself with what's going on. It's based on the official Vuex example project setup and uses Vuex modules. By default I've included a couple of modules I thought you might need.

The first thing you're probably going to want to do is start editing and components in `src/components/`.

## External References

- [Creating Vuex Modules](https://vuex.vuejs.org/en/modules.html)
- [vue-router](https://github.com/vuejs/vue-router)
- [WordPress REST API](http://v2.wp-api.org/)
- [WordPress REST API Handbook](https://developer.wordpress.org/rest-api/)
- [Expose ACF fields to REST API](https://github.com/airesvsg/acf-to-rest-api/)

## Features coming soon:

- More documentation

# Changelog

**2020-01-29**

- Removed some legacy CSS, further integrated Tailwind.
- Added browser-sync!
- Reorganized and updated the webpack config and files.
- Updated many npm packages including webpack
- Updated webpack production minification/optimization settings.

---

**2020-01-28**

- Updated npm packages
- New theme screenshot
- Updated README
- Updated Home component

---

**2020-01-28**

- Added [tailwindcss](https://tailwindcss.com/docs/installation#using-tailwind-with-postcss) support.
- npm module updates
- updated to latest version of Vuejs

---

**2019-02-05**
**Added**

- Support for postcss
- New css style examples
- Cache busters for js and css

**Changed**

- Updated outdated npm packages
- Recent post and Page widgets to use router-link
- Removed Laravel Mix and replaced with standard webpack config

**Removed**

- Example Firebase integration
- jQuery
- Several unused npm dependencies
- Bootstrap / Bootstrap Vue
- Several variables that were stored on the window object
- Support for sass styling (switched to postcss)

---

**2018-08-20**
**Added**

- Default routing for posts and pages. @EvanAgee
- Views for posts and pages. @EvanAgee
- getters for pages. @EvanAgee
- Examples for fetching pages/posts with either Vuex actions OR in component. @EvanAgee
- Activated LocalStorage plugin in store. @EvanAgee
- Loader component. @EvanAgee

**Removed**

- UglifyJS. @EvanAgee

---

**2017-10-24**
**Added**

- status_header(200) to keep Wordpress from returning 404 for vue-router paths.

**2017-10-21**
**Removed**

- vue-slick dependency
- vue2-google-maps dependency
- unnecessary header/footer php files
- the-tailor dependency
- font-awesome dependency

**Changed**

- Updated webpack (Larevel Mix) config
- Switched from Bootstrap to [Bootstrap-Vue](https://bootstrap-vue.js.org)

**Fixed**

- Fixed index.php

---

**2017-10-17**
**Added**

- More documnentation. @EvanAgee
- Post module. @EvanAgee
- A few code comments. @EvanAgee
- Example widgets for posts and pages. @EvanAgee

**Changed**

- Home page to display the posts and pages widgets. @EvanAgee

---

**2017-10-11**
Initial commit

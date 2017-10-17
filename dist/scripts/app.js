webpackJsonp([1],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\",\"transform-object-rest-spread\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./src/App.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_partials_Header__ = __webpack_require__("./src/components/partials/Header.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_partials_Header___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_partials_Header__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_partials_Footer__ = __webpack_require__("./src/components/partials/Footer.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_partials_Footer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_partials_Footer__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      showLoader: true
    };
  },

  computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["b" /* mapGetters */])({
    isLoading: 'isLoading',
    loadingProgress: 'loadingProgress'
  }), {
    loaderStyle: function loaderStyle() {
      return 'width: ' + this.loadingProgress + '%; ';
    }
  }),

  components: {
    appHeader: __WEBPACK_IMPORTED_MODULE_1__components_partials_Header___default.a,
    appFooter: __WEBPACK_IMPORTED_MODULE_2__components_partials_Footer___default.a
  },

  watch: {
    // watch the value of isLoading and once it's false hide the loader
    isLoading: function isLoading(val) {
      if (val == false) {
        var self = this;
        setTimeout(function () {
          self.showLoader = false;
        }, 1000);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\",\"transform-object-rest-spread\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./src/components/Home.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__widgets_RecentPosts__ = __webpack_require__("./src/components/widgets/RecentPosts.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__widgets_RecentPosts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__widgets_RecentPosts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__widgets_Pages__ = __webpack_require__("./src/components/widgets/Pages.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__widgets_Pages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__widgets_Pages__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
    components: {
        RecentPostsWidget: __WEBPACK_IMPORTED_MODULE_0__widgets_RecentPosts___default.a,
        PagesWidget: __WEBPACK_IMPORTED_MODULE_1__widgets_Pages___default.a
    }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\",\"transform-object-rest-spread\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./src/components/widgets/Pages.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["limit"],
  computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["b" /* mapGetters */])({
    somePages: 'somePages',
    allPagesLoaded: 'allPagesLoaded'
  })),

  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\",\"transform-object-rest-spread\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./src/components/widgets/RecentPosts.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["limit"],
  computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["b" /* mapGetters */])({
    recentPosts: 'recentPosts',
    recentPostsLoaded: 'recentPostsLoaded'
  })),

  mounted: function mounted() {
    this.$store.dispatch('getPosts', { limit: this.limit });
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/animate.css/animate.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n\n/*!\n * animate.css -http://daneden.me/animate\n * Version - 3.5.1\n * Licensed under the MIT license - http://opensource.org/licenses/MIT\n *\n * Copyright (c) 2016 Daniel Eden\n */\n\n.animated {\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n\n.animated.infinite {\n  -webkit-animation-iteration-count: infinite;\n  animation-iteration-count: infinite;\n}\n\n.animated.hinge {\n  -webkit-animation-duration: 2s;\n  animation-duration: 2s;\n}\n\n.animated.flipOutX,\n.animated.flipOutY,\n.animated.bounceIn,\n.animated.bounceOut {\n  -webkit-animation-duration: .75s;\n  animation-duration: .75s;\n}\n\n@-webkit-keyframes bounce {\n  from, 20%, 53%, 80%, to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    -webkit-transform: translate3d(0,0,0);\n    transform: translate3d(0,0,0);\n  }\n\n  40%, 43% {\n    -webkit-animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);\n    animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);\n    -webkit-transform: translate3d(0, -30px, 0);\n    transform: translate3d(0, -30px, 0);\n  }\n\n  70% {\n    -webkit-animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);\n    animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);\n    -webkit-transform: translate3d(0, -15px, 0);\n    transform: translate3d(0, -15px, 0);\n  }\n\n  90% {\n    -webkit-transform: translate3d(0,-4px,0);\n    transform: translate3d(0,-4px,0);\n  }\n}\n\n@keyframes bounce {\n  from, 20%, 53%, 80%, to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    -webkit-transform: translate3d(0,0,0);\n    transform: translate3d(0,0,0);\n  }\n\n  40%, 43% {\n    -webkit-animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);\n    animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);\n    -webkit-transform: translate3d(0, -30px, 0);\n    transform: translate3d(0, -30px, 0);\n  }\n\n  70% {\n    -webkit-animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);\n    animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);\n    -webkit-transform: translate3d(0, -15px, 0);\n    transform: translate3d(0, -15px, 0);\n  }\n\n  90% {\n    -webkit-transform: translate3d(0,-4px,0);\n    transform: translate3d(0,-4px,0);\n  }\n}\n\n.bounce {\n  -webkit-animation-name: bounce;\n  animation-name: bounce;\n  -webkit-transform-origin: center bottom;\n  transform-origin: center bottom;\n}\n\n@-webkit-keyframes flash {\n  from, 50%, to {\n    opacity: 1;\n  }\n\n  25%, 75% {\n    opacity: 0;\n  }\n}\n\n@keyframes flash {\n  from, 50%, to {\n    opacity: 1;\n  }\n\n  25%, 75% {\n    opacity: 0;\n  }\n}\n\n.flash {\n  -webkit-animation-name: flash;\n  animation-name: flash;\n}\n\n/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\n\n@-webkit-keyframes pulse {\n  from {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n\n  50% {\n    -webkit-transform: scale3d(1.05, 1.05, 1.05);\n    transform: scale3d(1.05, 1.05, 1.05);\n  }\n\n  to {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n}\n\n@keyframes pulse {\n  from {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n\n  50% {\n    -webkit-transform: scale3d(1.05, 1.05, 1.05);\n    transform: scale3d(1.05, 1.05, 1.05);\n  }\n\n  to {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n}\n\n.pulse {\n  -webkit-animation-name: pulse;\n  animation-name: pulse;\n}\n\n@-webkit-keyframes rubberBand {\n  from {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n\n  30% {\n    -webkit-transform: scale3d(1.25, 0.75, 1);\n    transform: scale3d(1.25, 0.75, 1);\n  }\n\n  40% {\n    -webkit-transform: scale3d(0.75, 1.25, 1);\n    transform: scale3d(0.75, 1.25, 1);\n  }\n\n  50% {\n    -webkit-transform: scale3d(1.15, 0.85, 1);\n    transform: scale3d(1.15, 0.85, 1);\n  }\n\n  65% {\n    -webkit-transform: scale3d(.95, 1.05, 1);\n    transform: scale3d(.95, 1.05, 1);\n  }\n\n  75% {\n    -webkit-transform: scale3d(1.05, .95, 1);\n    transform: scale3d(1.05, .95, 1);\n  }\n\n  to {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n}\n\n@keyframes rubberBand {\n  from {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n\n  30% {\n    -webkit-transform: scale3d(1.25, 0.75, 1);\n    transform: scale3d(1.25, 0.75, 1);\n  }\n\n  40% {\n    -webkit-transform: scale3d(0.75, 1.25, 1);\n    transform: scale3d(0.75, 1.25, 1);\n  }\n\n  50% {\n    -webkit-transform: scale3d(1.15, 0.85, 1);\n    transform: scale3d(1.15, 0.85, 1);\n  }\n\n  65% {\n    -webkit-transform: scale3d(.95, 1.05, 1);\n    transform: scale3d(.95, 1.05, 1);\n  }\n\n  75% {\n    -webkit-transform: scale3d(1.05, .95, 1);\n    transform: scale3d(1.05, .95, 1);\n  }\n\n  to {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n}\n\n.rubberBand {\n  -webkit-animation-name: rubberBand;\n  animation-name: rubberBand;\n}\n\n@-webkit-keyframes shake {\n  from, to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n\n  10%, 30%, 50%, 70%, 90% {\n    -webkit-transform: translate3d(-10px, 0, 0);\n    transform: translate3d(-10px, 0, 0);\n  }\n\n  20%, 40%, 60%, 80% {\n    -webkit-transform: translate3d(10px, 0, 0);\n    transform: translate3d(10px, 0, 0);\n  }\n}\n\n@keyframes shake {\n  from, to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n\n  10%, 30%, 50%, 70%, 90% {\n    -webkit-transform: translate3d(-10px, 0, 0);\n    transform: translate3d(-10px, 0, 0);\n  }\n\n  20%, 40%, 60%, 80% {\n    -webkit-transform: translate3d(10px, 0, 0);\n    transform: translate3d(10px, 0, 0);\n  }\n}\n\n.shake {\n  -webkit-animation-name: shake;\n  animation-name: shake;\n}\n\n@-webkit-keyframes headShake {\n  0% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n\n  6.5% {\n    -webkit-transform: translateX(-6px) rotateY(-9deg);\n    transform: translateX(-6px) rotateY(-9deg);\n  }\n\n  18.5% {\n    -webkit-transform: translateX(5px) rotateY(7deg);\n    transform: translateX(5px) rotateY(7deg);\n  }\n\n  31.5% {\n    -webkit-transform: translateX(-3px) rotateY(-5deg);\n    transform: translateX(-3px) rotateY(-5deg);\n  }\n\n  43.5% {\n    -webkit-transform: translateX(2px) rotateY(3deg);\n    transform: translateX(2px) rotateY(3deg);\n  }\n\n  50% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n}\n\n@keyframes headShake {\n  0% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n\n  6.5% {\n    -webkit-transform: translateX(-6px) rotateY(-9deg);\n    transform: translateX(-6px) rotateY(-9deg);\n  }\n\n  18.5% {\n    -webkit-transform: translateX(5px) rotateY(7deg);\n    transform: translateX(5px) rotateY(7deg);\n  }\n\n  31.5% {\n    -webkit-transform: translateX(-3px) rotateY(-5deg);\n    transform: translateX(-3px) rotateY(-5deg);\n  }\n\n  43.5% {\n    -webkit-transform: translateX(2px) rotateY(3deg);\n    transform: translateX(2px) rotateY(3deg);\n  }\n\n  50% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n}\n\n.headShake {\n  -webkit-animation-timing-function: ease-in-out;\n  animation-timing-function: ease-in-out;\n  -webkit-animation-name: headShake;\n  animation-name: headShake;\n}\n\n@-webkit-keyframes swing {\n  20% {\n    -webkit-transform: rotate3d(0, 0, 1, 15deg);\n    transform: rotate3d(0, 0, 1, 15deg);\n  }\n\n  40% {\n    -webkit-transform: rotate3d(0, 0, 1, -10deg);\n    transform: rotate3d(0, 0, 1, -10deg);\n  }\n\n  60% {\n    -webkit-transform: rotate3d(0, 0, 1, 5deg);\n    transform: rotate3d(0, 0, 1, 5deg);\n  }\n\n  80% {\n    -webkit-transform: rotate3d(0, 0, 1, -5deg);\n    transform: rotate3d(0, 0, 1, -5deg);\n  }\n\n  to {\n    -webkit-transform: rotate3d(0, 0, 1, 0deg);\n    transform: rotate3d(0, 0, 1, 0deg);\n  }\n}\n\n@keyframes swing {\n  20% {\n    -webkit-transform: rotate3d(0, 0, 1, 15deg);\n    transform: rotate3d(0, 0, 1, 15deg);\n  }\n\n  40% {\n    -webkit-transform: rotate3d(0, 0, 1, -10deg);\n    transform: rotate3d(0, 0, 1, -10deg);\n  }\n\n  60% {\n    -webkit-transform: rotate3d(0, 0, 1, 5deg);\n    transform: rotate3d(0, 0, 1, 5deg);\n  }\n\n  80% {\n    -webkit-transform: rotate3d(0, 0, 1, -5deg);\n    transform: rotate3d(0, 0, 1, -5deg);\n  }\n\n  to {\n    -webkit-transform: rotate3d(0, 0, 1, 0deg);\n    transform: rotate3d(0, 0, 1, 0deg);\n  }\n}\n\n.swing {\n  -webkit-transform-origin: top center;\n  transform-origin: top center;\n  -webkit-animation-name: swing;\n  animation-name: swing;\n}\n\n@-webkit-keyframes tada {\n  from {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n\n  10%, 20% {\n    -webkit-transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);\n    transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);\n  }\n\n  30%, 50%, 70%, 90% {\n    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);\n    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);\n  }\n\n  40%, 60%, 80% {\n    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);\n    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);\n  }\n\n  to {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n}\n\n@keyframes tada {\n  from {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n\n  10%, 20% {\n    -webkit-transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);\n    transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);\n  }\n\n  30%, 50%, 70%, 90% {\n    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);\n    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);\n  }\n\n  40%, 60%, 80% {\n    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);\n    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);\n  }\n\n  to {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n}\n\n.tada {\n  -webkit-animation-name: tada;\n  animation-name: tada;\n}\n\n/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\n\n@-webkit-keyframes wobble {\n  from {\n    -webkit-transform: none;\n    transform: none;\n  }\n\n  15% {\n    -webkit-transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);\n    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);\n  }\n\n  30% {\n    -webkit-transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);\n    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);\n  }\n\n  45% {\n    -webkit-transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);\n    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);\n  }\n\n  60% {\n    -webkit-transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);\n    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);\n  }\n\n  75% {\n    -webkit-transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);\n    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);\n  }\n\n  to {\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes wobble {\n  from {\n    -webkit-transform: none;\n    transform: none;\n  }\n\n  15% {\n    -webkit-transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);\n    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);\n  }\n\n  30% {\n    -webkit-transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);\n    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);\n  }\n\n  45% {\n    -webkit-transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);\n    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);\n  }\n\n  60% {\n    -webkit-transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);\n    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);\n  }\n\n  75% {\n    -webkit-transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);\n    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);\n  }\n\n  to {\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n.wobble {\n  -webkit-animation-name: wobble;\n  animation-name: wobble;\n}\n\n@-webkit-keyframes jello {\n  from, 11.1%, to {\n    -webkit-transform: none;\n    transform: none;\n  }\n\n  22.2% {\n    -webkit-transform: skewX(-12.5deg) skewY(-12.5deg);\n    transform: skewX(-12.5deg) skewY(-12.5deg);\n  }\n\n  33.3% {\n    -webkit-transform: skewX(6.25deg) skewY(6.25deg);\n    transform: skewX(6.25deg) skewY(6.25deg);\n  }\n\n  44.4% {\n    -webkit-transform: skewX(-3.125deg) skewY(-3.125deg);\n    transform: skewX(-3.125deg) skewY(-3.125deg);\n  }\n\n  55.5% {\n    -webkit-transform: skewX(1.5625deg) skewY(1.5625deg);\n    transform: skewX(1.5625deg) skewY(1.5625deg);\n  }\n\n  66.6% {\n    -webkit-transform: skewX(-0.78125deg) skewY(-0.78125deg);\n    transform: skewX(-0.78125deg) skewY(-0.78125deg);\n  }\n\n  77.7% {\n    -webkit-transform: skewX(0.390625deg) skewY(0.390625deg);\n    transform: skewX(0.390625deg) skewY(0.390625deg);\n  }\n\n  88.8% {\n    -webkit-transform: skewX(-0.1953125deg) skewY(-0.1953125deg);\n    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);\n  }\n}\n\n@keyframes jello {\n  from, 11.1%, to {\n    -webkit-transform: none;\n    transform: none;\n  }\n\n  22.2% {\n    -webkit-transform: skewX(-12.5deg) skewY(-12.5deg);\n    transform: skewX(-12.5deg) skewY(-12.5deg);\n  }\n\n  33.3% {\n    -webkit-transform: skewX(6.25deg) skewY(6.25deg);\n    transform: skewX(6.25deg) skewY(6.25deg);\n  }\n\n  44.4% {\n    -webkit-transform: skewX(-3.125deg) skewY(-3.125deg);\n    transform: skewX(-3.125deg) skewY(-3.125deg);\n  }\n\n  55.5% {\n    -webkit-transform: skewX(1.5625deg) skewY(1.5625deg);\n    transform: skewX(1.5625deg) skewY(1.5625deg);\n  }\n\n  66.6% {\n    -webkit-transform: skewX(-0.78125deg) skewY(-0.78125deg);\n    transform: skewX(-0.78125deg) skewY(-0.78125deg);\n  }\n\n  77.7% {\n    -webkit-transform: skewX(0.390625deg) skewY(0.390625deg);\n    transform: skewX(0.390625deg) skewY(0.390625deg);\n  }\n\n  88.8% {\n    -webkit-transform: skewX(-0.1953125deg) skewY(-0.1953125deg);\n    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);\n  }\n}\n\n.jello {\n  -webkit-animation-name: jello;\n  animation-name: jello;\n  -webkit-transform-origin: center;\n  transform-origin: center;\n}\n\n@-webkit-keyframes bounceIn {\n  from, 20%, 40%, 60%, 80%, to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n  }\n\n  0% {\n    opacity: 0;\n    -webkit-transform: scale3d(.3, .3, .3);\n    transform: scale3d(.3, .3, .3);\n  }\n\n  20% {\n    -webkit-transform: scale3d(1.1, 1.1, 1.1);\n    transform: scale3d(1.1, 1.1, 1.1);\n  }\n\n  40% {\n    -webkit-transform: scale3d(.9, .9, .9);\n    transform: scale3d(.9, .9, .9);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(1.03, 1.03, 1.03);\n    transform: scale3d(1.03, 1.03, 1.03);\n  }\n\n  80% {\n    -webkit-transform: scale3d(.97, .97, .97);\n    transform: scale3d(.97, .97, .97);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n}\n\n@keyframes bounceIn {\n  from, 20%, 40%, 60%, 80%, to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n  }\n\n  0% {\n    opacity: 0;\n    -webkit-transform: scale3d(.3, .3, .3);\n    transform: scale3d(.3, .3, .3);\n  }\n\n  20% {\n    -webkit-transform: scale3d(1.1, 1.1, 1.1);\n    transform: scale3d(1.1, 1.1, 1.1);\n  }\n\n  40% {\n    -webkit-transform: scale3d(.9, .9, .9);\n    transform: scale3d(.9, .9, .9);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(1.03, 1.03, 1.03);\n    transform: scale3d(1.03, 1.03, 1.03);\n  }\n\n  80% {\n    -webkit-transform: scale3d(.97, .97, .97);\n    transform: scale3d(.97, .97, .97);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n}\n\n.bounceIn {\n  -webkit-animation-name: bounceIn;\n  animation-name: bounceIn;\n}\n\n@-webkit-keyframes bounceInDown {\n  from, 60%, 75%, 90%, to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n  }\n\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -3000px, 0);\n    transform: translate3d(0, -3000px, 0);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 25px, 0);\n    transform: translate3d(0, 25px, 0);\n  }\n\n  75% {\n    -webkit-transform: translate3d(0, -10px, 0);\n    transform: translate3d(0, -10px, 0);\n  }\n\n  90% {\n    -webkit-transform: translate3d(0, 5px, 0);\n    transform: translate3d(0, 5px, 0);\n  }\n\n  to {\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes bounceInDown {\n  from, 60%, 75%, 90%, to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n  }\n\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -3000px, 0);\n    transform: translate3d(0, -3000px, 0);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 25px, 0);\n    transform: translate3d(0, 25px, 0);\n  }\n\n  75% {\n    -webkit-transform: translate3d(0, -10px, 0);\n    transform: translate3d(0, -10px, 0);\n  }\n\n  90% {\n    -webkit-transform: translate3d(0, 5px, 0);\n    transform: translate3d(0, 5px, 0);\n  }\n\n  to {\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n.bounceInDown {\n  -webkit-animation-name: bounceInDown;\n  animation-name: bounceInDown;\n}\n\n@-webkit-keyframes bounceInLeft {\n  from, 60%, 75%, 90%, to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n  }\n\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(-3000px, 0, 0);\n    transform: translate3d(-3000px, 0, 0);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(25px, 0, 0);\n    transform: translate3d(25px, 0, 0);\n  }\n\n  75% {\n    -webkit-transform: translate3d(-10px, 0, 0);\n    transform: translate3d(-10px, 0, 0);\n  }\n\n  90% {\n    -webkit-transform: translate3d(5px, 0, 0);\n    transform: translate3d(5px, 0, 0);\n  }\n\n  to {\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes bounceInLeft {\n  from, 60%, 75%, 90%, to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n  }\n\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(-3000px, 0, 0);\n    transform: translate3d(-3000px, 0, 0);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(25px, 0, 0);\n    transform: translate3d(25px, 0, 0);\n  }\n\n  75% {\n    -webkit-transform: translate3d(-10px, 0, 0);\n    transform: translate3d(-10px, 0, 0);\n  }\n\n  90% {\n    -webkit-transform: translate3d(5px, 0, 0);\n    transform: translate3d(5px, 0, 0);\n  }\n\n  to {\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n.bounceInLeft {\n  -webkit-animation-name: bounceInLeft;\n  animation-name: bounceInLeft;\n}\n\n@-webkit-keyframes bounceInRight {\n  from, 60%, 75%, 90%, to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n  }\n\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(3000px, 0, 0);\n    transform: translate3d(3000px, 0, 0);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(-25px, 0, 0);\n    transform: translate3d(-25px, 0, 0);\n  }\n\n  75% {\n    -webkit-transform: translate3d(10px, 0, 0);\n    transform: translate3d(10px, 0, 0);\n  }\n\n  90% {\n    -webkit-transform: translate3d(-5px, 0, 0);\n    transform: translate3d(-5px, 0, 0);\n  }\n\n  to {\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes bounceInRight {\n  from, 60%, 75%, 90%, to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n  }\n\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(3000px, 0, 0);\n    transform: translate3d(3000px, 0, 0);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(-25px, 0, 0);\n    transform: translate3d(-25px, 0, 0);\n  }\n\n  75% {\n    -webkit-transform: translate3d(10px, 0, 0);\n    transform: translate3d(10px, 0, 0);\n  }\n\n  90% {\n    -webkit-transform: translate3d(-5px, 0, 0);\n    transform: translate3d(-5px, 0, 0);\n  }\n\n  to {\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n.bounceInRight {\n  -webkit-animation-name: bounceInRight;\n  animation-name: bounceInRight;\n}\n\n@-webkit-keyframes bounceInUp {\n  from, 60%, 75%, 90%, to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n  }\n\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 3000px, 0);\n    transform: translate3d(0, 3000px, 0);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, -20px, 0);\n    transform: translate3d(0, -20px, 0);\n  }\n\n  75% {\n    -webkit-transform: translate3d(0, 10px, 0);\n    transform: translate3d(0, 10px, 0);\n  }\n\n  90% {\n    -webkit-transform: translate3d(0, -5px, 0);\n    transform: translate3d(0, -5px, 0);\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n@keyframes bounceInUp {\n  from, 60%, 75%, 90%, to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n  }\n\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 3000px, 0);\n    transform: translate3d(0, 3000px, 0);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, -20px, 0);\n    transform: translate3d(0, -20px, 0);\n  }\n\n  75% {\n    -webkit-transform: translate3d(0, 10px, 0);\n    transform: translate3d(0, 10px, 0);\n  }\n\n  90% {\n    -webkit-transform: translate3d(0, -5px, 0);\n    transform: translate3d(0, -5px, 0);\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n.bounceInUp {\n  -webkit-animation-name: bounceInUp;\n  animation-name: bounceInUp;\n}\n\n@-webkit-keyframes bounceOut {\n  20% {\n    -webkit-transform: scale3d(.9, .9, .9);\n    transform: scale3d(.9, .9, .9);\n  }\n\n  50%, 55% {\n    opacity: 1;\n    -webkit-transform: scale3d(1.1, 1.1, 1.1);\n    transform: scale3d(1.1, 1.1, 1.1);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: scale3d(.3, .3, .3);\n    transform: scale3d(.3, .3, .3);\n  }\n}\n\n@keyframes bounceOut {\n  20% {\n    -webkit-transform: scale3d(.9, .9, .9);\n    transform: scale3d(.9, .9, .9);\n  }\n\n  50%, 55% {\n    opacity: 1;\n    -webkit-transform: scale3d(1.1, 1.1, 1.1);\n    transform: scale3d(1.1, 1.1, 1.1);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: scale3d(.3, .3, .3);\n    transform: scale3d(.3, .3, .3);\n  }\n}\n\n.bounceOut {\n  -webkit-animation-name: bounceOut;\n  animation-name: bounceOut;\n}\n\n@-webkit-keyframes bounceOutDown {\n  20% {\n    -webkit-transform: translate3d(0, 10px, 0);\n    transform: translate3d(0, 10px, 0);\n  }\n\n  40%, 45% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, -20px, 0);\n    transform: translate3d(0, -20px, 0);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 2000px, 0);\n    transform: translate3d(0, 2000px, 0);\n  }\n}\n\n@keyframes bounceOutDown {\n  20% {\n    -webkit-transform: translate3d(0, 10px, 0);\n    transform: translate3d(0, 10px, 0);\n  }\n\n  40%, 45% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, -20px, 0);\n    transform: translate3d(0, -20px, 0);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 2000px, 0);\n    transform: translate3d(0, 2000px, 0);\n  }\n}\n\n.bounceOutDown {\n  -webkit-animation-name: bounceOutDown;\n  animation-name: bounceOutDown;\n}\n\n@-webkit-keyframes bounceOutLeft {\n  20% {\n    opacity: 1;\n    -webkit-transform: translate3d(20px, 0, 0);\n    transform: translate3d(20px, 0, 0);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(-2000px, 0, 0);\n    transform: translate3d(-2000px, 0, 0);\n  }\n}\n\n@keyframes bounceOutLeft {\n  20% {\n    opacity: 1;\n    -webkit-transform: translate3d(20px, 0, 0);\n    transform: translate3d(20px, 0, 0);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(-2000px, 0, 0);\n    transform: translate3d(-2000px, 0, 0);\n  }\n}\n\n.bounceOutLeft {\n  -webkit-animation-name: bounceOutLeft;\n  animation-name: bounceOutLeft;\n}\n\n@-webkit-keyframes bounceOutRight {\n  20% {\n    opacity: 1;\n    -webkit-transform: translate3d(-20px, 0, 0);\n    transform: translate3d(-20px, 0, 0);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(2000px, 0, 0);\n    transform: translate3d(2000px, 0, 0);\n  }\n}\n\n@keyframes bounceOutRight {\n  20% {\n    opacity: 1;\n    -webkit-transform: translate3d(-20px, 0, 0);\n    transform: translate3d(-20px, 0, 0);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(2000px, 0, 0);\n    transform: translate3d(2000px, 0, 0);\n  }\n}\n\n.bounceOutRight {\n  -webkit-animation-name: bounceOutRight;\n  animation-name: bounceOutRight;\n}\n\n@-webkit-keyframes bounceOutUp {\n  20% {\n    -webkit-transform: translate3d(0, -10px, 0);\n    transform: translate3d(0, -10px, 0);\n  }\n\n  40%, 45% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 20px, 0);\n    transform: translate3d(0, 20px, 0);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -2000px, 0);\n    transform: translate3d(0, -2000px, 0);\n  }\n}\n\n@keyframes bounceOutUp {\n  20% {\n    -webkit-transform: translate3d(0, -10px, 0);\n    transform: translate3d(0, -10px, 0);\n  }\n\n  40%, 45% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 20px, 0);\n    transform: translate3d(0, 20px, 0);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -2000px, 0);\n    transform: translate3d(0, -2000px, 0);\n  }\n}\n\n.bounceOutUp {\n  -webkit-animation-name: bounceOutUp;\n  animation-name: bounceOutUp;\n}\n\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n}\n\n.fadeIn {\n  -webkit-animation-name: fadeIn;\n  animation-name: fadeIn;\n}\n\n@-webkit-keyframes fadeInDown {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes fadeInDown {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n.fadeInDown {\n  -webkit-animation-name: fadeInDown;\n  animation-name: fadeInDown;\n}\n\n@-webkit-keyframes fadeInDownBig {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -2000px, 0);\n    transform: translate3d(0, -2000px, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes fadeInDownBig {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -2000px, 0);\n    transform: translate3d(0, -2000px, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n.fadeInDownBig {\n  -webkit-animation-name: fadeInDownBig;\n  animation-name: fadeInDownBig;\n}\n\n@-webkit-keyframes fadeInLeft {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes fadeInLeft {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n.fadeInLeft {\n  -webkit-animation-name: fadeInLeft;\n  animation-name: fadeInLeft;\n}\n\n@-webkit-keyframes fadeInLeftBig {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(-2000px, 0, 0);\n    transform: translate3d(-2000px, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes fadeInLeftBig {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(-2000px, 0, 0);\n    transform: translate3d(-2000px, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n.fadeInLeftBig {\n  -webkit-animation-name: fadeInLeftBig;\n  animation-name: fadeInLeftBig;\n}\n\n@-webkit-keyframes fadeInRight {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes fadeInRight {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n.fadeInRight {\n  -webkit-animation-name: fadeInRight;\n  animation-name: fadeInRight;\n}\n\n@-webkit-keyframes fadeInRightBig {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(2000px, 0, 0);\n    transform: translate3d(2000px, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes fadeInRightBig {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(2000px, 0, 0);\n    transform: translate3d(2000px, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n.fadeInRightBig {\n  -webkit-animation-name: fadeInRightBig;\n  animation-name: fadeInRightBig;\n}\n\n@-webkit-keyframes fadeInUp {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes fadeInUp {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n.fadeInUp {\n  -webkit-animation-name: fadeInUp;\n  animation-name: fadeInUp;\n}\n\n@-webkit-keyframes fadeInUpBig {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 2000px, 0);\n    transform: translate3d(0, 2000px, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes fadeInUpBig {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 2000px, 0);\n    transform: translate3d(0, 2000px, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n.fadeInUpBig {\n  -webkit-animation-name: fadeInUpBig;\n  animation-name: fadeInUpBig;\n}\n\n@-webkit-keyframes fadeOut {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n  }\n}\n\n@keyframes fadeOut {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n  }\n}\n\n.fadeOut {\n  -webkit-animation-name: fadeOut;\n  animation-name: fadeOut;\n}\n\n@-webkit-keyframes fadeOutDown {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0);\n  }\n}\n\n@keyframes fadeOutDown {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0);\n  }\n}\n\n.fadeOutDown {\n  -webkit-animation-name: fadeOutDown;\n  animation-name: fadeOutDown;\n}\n\n@-webkit-keyframes fadeOutDownBig {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 2000px, 0);\n    transform: translate3d(0, 2000px, 0);\n  }\n}\n\n@keyframes fadeOutDownBig {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 2000px, 0);\n    transform: translate3d(0, 2000px, 0);\n  }\n}\n\n.fadeOutDownBig {\n  -webkit-animation-name: fadeOutDownBig;\n  animation-name: fadeOutDownBig;\n}\n\n@-webkit-keyframes fadeOutLeft {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n  }\n}\n\n@keyframes fadeOutLeft {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n  }\n}\n\n.fadeOutLeft {\n  -webkit-animation-name: fadeOutLeft;\n  animation-name: fadeOutLeft;\n}\n\n@-webkit-keyframes fadeOutLeftBig {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(-2000px, 0, 0);\n    transform: translate3d(-2000px, 0, 0);\n  }\n}\n\n@keyframes fadeOutLeftBig {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(-2000px, 0, 0);\n    transform: translate3d(-2000px, 0, 0);\n  }\n}\n\n.fadeOutLeftBig {\n  -webkit-animation-name: fadeOutLeftBig;\n  animation-name: fadeOutLeftBig;\n}\n\n@-webkit-keyframes fadeOutRight {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n  }\n}\n\n@keyframes fadeOutRight {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n  }\n}\n\n.fadeOutRight {\n  -webkit-animation-name: fadeOutRight;\n  animation-name: fadeOutRight;\n}\n\n@-webkit-keyframes fadeOutRightBig {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(2000px, 0, 0);\n    transform: translate3d(2000px, 0, 0);\n  }\n}\n\n@keyframes fadeOutRightBig {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(2000px, 0, 0);\n    transform: translate3d(2000px, 0, 0);\n  }\n}\n\n.fadeOutRightBig {\n  -webkit-animation-name: fadeOutRightBig;\n  animation-name: fadeOutRightBig;\n}\n\n@-webkit-keyframes fadeOutUp {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n  }\n}\n\n@keyframes fadeOutUp {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n  }\n}\n\n.fadeOutUp {\n  -webkit-animation-name: fadeOutUp;\n  animation-name: fadeOutUp;\n}\n\n@-webkit-keyframes fadeOutUpBig {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -2000px, 0);\n    transform: translate3d(0, -2000px, 0);\n  }\n}\n\n@keyframes fadeOutUpBig {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -2000px, 0);\n    transform: translate3d(0, -2000px, 0);\n  }\n}\n\n.fadeOutUpBig {\n  -webkit-animation-name: fadeOutUpBig;\n  animation-name: fadeOutUpBig;\n}\n\n@-webkit-keyframes flip {\n  from {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -360deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, -360deg);\n    -webkit-animation-timing-function: ease-out;\n    animation-timing-function: ease-out;\n  }\n\n  40% {\n    -webkit-transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);\n    transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);\n    -webkit-animation-timing-function: ease-out;\n    animation-timing-function: ease-out;\n  }\n\n  50% {\n    -webkit-transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);\n    transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n\n  80% {\n    -webkit-transform: perspective(400px) scale3d(.95, .95, .95);\n    transform: perspective(400px) scale3d(.95, .95, .95);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n\n  to {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n}\n\n@keyframes flip {\n  from {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -360deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, -360deg);\n    -webkit-animation-timing-function: ease-out;\n    animation-timing-function: ease-out;\n  }\n\n  40% {\n    -webkit-transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);\n    transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);\n    -webkit-animation-timing-function: ease-out;\n    animation-timing-function: ease-out;\n  }\n\n  50% {\n    -webkit-transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);\n    transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n\n  80% {\n    -webkit-transform: perspective(400px) scale3d(.95, .95, .95);\n    transform: perspective(400px) scale3d(.95, .95, .95);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n\n  to {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n}\n\n.animated.flip {\n  -webkit-backface-visibility: visible;\n  backface-visibility: visible;\n  -webkit-animation-name: flip;\n  animation-name: flip;\n}\n\n@-webkit-keyframes flipInX {\n  from {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n    opacity: 0;\n  }\n\n  40% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n\n  60% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 10deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);\n    opacity: 1;\n  }\n\n  80% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -5deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);\n  }\n\n  to {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px);\n  }\n}\n\n@keyframes flipInX {\n  from {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n    opacity: 0;\n  }\n\n  40% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n\n  60% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 10deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);\n    opacity: 1;\n  }\n\n  80% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -5deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);\n  }\n\n  to {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px);\n  }\n}\n\n.flipInX {\n  -webkit-backface-visibility: visible !important;\n  backface-visibility: visible !important;\n  -webkit-animation-name: flipInX;\n  animation-name: flipInX;\n}\n\n@-webkit-keyframes flipInY {\n  from {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n    opacity: 0;\n  }\n\n  40% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -20deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n\n  60% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 10deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);\n    opacity: 1;\n  }\n\n  80% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -5deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);\n  }\n\n  to {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px);\n  }\n}\n\n@keyframes flipInY {\n  from {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n    opacity: 0;\n  }\n\n  40% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -20deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n\n  60% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 10deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);\n    opacity: 1;\n  }\n\n  80% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -5deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);\n  }\n\n  to {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px);\n  }\n}\n\n.flipInY {\n  -webkit-backface-visibility: visible !important;\n  backface-visibility: visible !important;\n  -webkit-animation-name: flipInY;\n  animation-name: flipInY;\n}\n\n@-webkit-keyframes flipOutX {\n  from {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px);\n  }\n\n  30% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    opacity: 0;\n  }\n}\n\n@keyframes flipOutX {\n  from {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px);\n  }\n\n  30% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    opacity: 0;\n  }\n}\n\n.flipOutX {\n  -webkit-animation-name: flipOutX;\n  animation-name: flipOutX;\n  -webkit-backface-visibility: visible !important;\n  backface-visibility: visible !important;\n}\n\n@-webkit-keyframes flipOutY {\n  from {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px);\n  }\n\n  30% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -15deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    opacity: 0;\n  }\n}\n\n@keyframes flipOutY {\n  from {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px);\n  }\n\n  30% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -15deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    opacity: 0;\n  }\n}\n\n.flipOutY {\n  -webkit-backface-visibility: visible !important;\n  backface-visibility: visible !important;\n  -webkit-animation-name: flipOutY;\n  animation-name: flipOutY;\n}\n\n@-webkit-keyframes lightSpeedIn {\n  from {\n    -webkit-transform: translate3d(100%, 0, 0) skewX(-30deg);\n    transform: translate3d(100%, 0, 0) skewX(-30deg);\n    opacity: 0;\n  }\n\n  60% {\n    -webkit-transform: skewX(20deg);\n    transform: skewX(20deg);\n    opacity: 1;\n  }\n\n  80% {\n    -webkit-transform: skewX(-5deg);\n    transform: skewX(-5deg);\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1;\n  }\n}\n\n@keyframes lightSpeedIn {\n  from {\n    -webkit-transform: translate3d(100%, 0, 0) skewX(-30deg);\n    transform: translate3d(100%, 0, 0) skewX(-30deg);\n    opacity: 0;\n  }\n\n  60% {\n    -webkit-transform: skewX(20deg);\n    transform: skewX(20deg);\n    opacity: 1;\n  }\n\n  80% {\n    -webkit-transform: skewX(-5deg);\n    transform: skewX(-5deg);\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1;\n  }\n}\n\n.lightSpeedIn {\n  -webkit-animation-name: lightSpeedIn;\n  animation-name: lightSpeedIn;\n  -webkit-animation-timing-function: ease-out;\n  animation-timing-function: ease-out;\n}\n\n@-webkit-keyframes lightSpeedOut {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform: translate3d(100%, 0, 0) skewX(30deg);\n    transform: translate3d(100%, 0, 0) skewX(30deg);\n    opacity: 0;\n  }\n}\n\n@keyframes lightSpeedOut {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform: translate3d(100%, 0, 0) skewX(30deg);\n    transform: translate3d(100%, 0, 0) skewX(30deg);\n    opacity: 0;\n  }\n}\n\n.lightSpeedOut {\n  -webkit-animation-name: lightSpeedOut;\n  animation-name: lightSpeedOut;\n  -webkit-animation-timing-function: ease-in;\n  animation-timing-function: ease-in;\n}\n\n@-webkit-keyframes rotateIn {\n  from {\n    -webkit-transform-origin: center;\n    transform-origin: center;\n    -webkit-transform: rotate3d(0, 0, 1, -200deg);\n    transform: rotate3d(0, 0, 1, -200deg);\n    opacity: 0;\n  }\n\n  to {\n    -webkit-transform-origin: center;\n    transform-origin: center;\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1;\n  }\n}\n\n@keyframes rotateIn {\n  from {\n    -webkit-transform-origin: center;\n    transform-origin: center;\n    -webkit-transform: rotate3d(0, 0, 1, -200deg);\n    transform: rotate3d(0, 0, 1, -200deg);\n    opacity: 0;\n  }\n\n  to {\n    -webkit-transform-origin: center;\n    transform-origin: center;\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1;\n  }\n}\n\n.rotateIn {\n  -webkit-animation-name: rotateIn;\n  animation-name: rotateIn;\n}\n\n@-webkit-keyframes rotateInDownLeft {\n  from {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate3d(0, 0, 1, -45deg);\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0;\n  }\n\n  to {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1;\n  }\n}\n\n@keyframes rotateInDownLeft {\n  from {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate3d(0, 0, 1, -45deg);\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0;\n  }\n\n  to {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1;\n  }\n}\n\n.rotateInDownLeft {\n  -webkit-animation-name: rotateInDownLeft;\n  animation-name: rotateInDownLeft;\n}\n\n@-webkit-keyframes rotateInDownRight {\n  from {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate3d(0, 0, 1, 45deg);\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0;\n  }\n\n  to {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1;\n  }\n}\n\n@keyframes rotateInDownRight {\n  from {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate3d(0, 0, 1, 45deg);\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0;\n  }\n\n  to {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1;\n  }\n}\n\n.rotateInDownRight {\n  -webkit-animation-name: rotateInDownRight;\n  animation-name: rotateInDownRight;\n}\n\n@-webkit-keyframes rotateInUpLeft {\n  from {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate3d(0, 0, 1, 45deg);\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0;\n  }\n\n  to {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1;\n  }\n}\n\n@keyframes rotateInUpLeft {\n  from {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate3d(0, 0, 1, 45deg);\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0;\n  }\n\n  to {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1;\n  }\n}\n\n.rotateInUpLeft {\n  -webkit-animation-name: rotateInUpLeft;\n  animation-name: rotateInUpLeft;\n}\n\n@-webkit-keyframes rotateInUpRight {\n  from {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate3d(0, 0, 1, -90deg);\n    transform: rotate3d(0, 0, 1, -90deg);\n    opacity: 0;\n  }\n\n  to {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1;\n  }\n}\n\n@keyframes rotateInUpRight {\n  from {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate3d(0, 0, 1, -90deg);\n    transform: rotate3d(0, 0, 1, -90deg);\n    opacity: 0;\n  }\n\n  to {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1;\n  }\n}\n\n.rotateInUpRight {\n  -webkit-animation-name: rotateInUpRight;\n  animation-name: rotateInUpRight;\n}\n\n@-webkit-keyframes rotateOut {\n  from {\n    -webkit-transform-origin: center;\n    transform-origin: center;\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform-origin: center;\n    transform-origin: center;\n    -webkit-transform: rotate3d(0, 0, 1, 200deg);\n    transform: rotate3d(0, 0, 1, 200deg);\n    opacity: 0;\n  }\n}\n\n@keyframes rotateOut {\n  from {\n    -webkit-transform-origin: center;\n    transform-origin: center;\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform-origin: center;\n    transform-origin: center;\n    -webkit-transform: rotate3d(0, 0, 1, 200deg);\n    transform: rotate3d(0, 0, 1, 200deg);\n    opacity: 0;\n  }\n}\n\n.rotateOut {\n  -webkit-animation-name: rotateOut;\n  animation-name: rotateOut;\n}\n\n@-webkit-keyframes rotateOutDownLeft {\n  from {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate3d(0, 0, 1, 45deg);\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0;\n  }\n}\n\n@keyframes rotateOutDownLeft {\n  from {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate3d(0, 0, 1, 45deg);\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0;\n  }\n}\n\n.rotateOutDownLeft {\n  -webkit-animation-name: rotateOutDownLeft;\n  animation-name: rotateOutDownLeft;\n}\n\n@-webkit-keyframes rotateOutDownRight {\n  from {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate3d(0, 0, 1, -45deg);\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0;\n  }\n}\n\n@keyframes rotateOutDownRight {\n  from {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate3d(0, 0, 1, -45deg);\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0;\n  }\n}\n\n.rotateOutDownRight {\n  -webkit-animation-name: rotateOutDownRight;\n  animation-name: rotateOutDownRight;\n}\n\n@-webkit-keyframes rotateOutUpLeft {\n  from {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate3d(0, 0, 1, -45deg);\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0;\n  }\n}\n\n@keyframes rotateOutUpLeft {\n  from {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate3d(0, 0, 1, -45deg);\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0;\n  }\n}\n\n.rotateOutUpLeft {\n  -webkit-animation-name: rotateOutUpLeft;\n  animation-name: rotateOutUpLeft;\n}\n\n@-webkit-keyframes rotateOutUpRight {\n  from {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate3d(0, 0, 1, 90deg);\n    transform: rotate3d(0, 0, 1, 90deg);\n    opacity: 0;\n  }\n}\n\n@keyframes rotateOutUpRight {\n  from {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate3d(0, 0, 1, 90deg);\n    transform: rotate3d(0, 0, 1, 90deg);\n    opacity: 0;\n  }\n}\n\n.rotateOutUpRight {\n  -webkit-animation-name: rotateOutUpRight;\n  animation-name: rotateOutUpRight;\n}\n\n@-webkit-keyframes hinge {\n  0% {\n    -webkit-transform-origin: top left;\n    transform-origin: top left;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out;\n  }\n\n  20%, 60% {\n    -webkit-transform: rotate3d(0, 0, 1, 80deg);\n    transform: rotate3d(0, 0, 1, 80deg);\n    -webkit-transform-origin: top left;\n    transform-origin: top left;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out;\n  }\n\n  40%, 80% {\n    -webkit-transform: rotate3d(0, 0, 1, 60deg);\n    transform: rotate3d(0, 0, 1, 60deg);\n    -webkit-transform-origin: top left;\n    transform-origin: top left;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out;\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 700px, 0);\n    transform: translate3d(0, 700px, 0);\n    opacity: 0;\n  }\n}\n\n@keyframes hinge {\n  0% {\n    -webkit-transform-origin: top left;\n    transform-origin: top left;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out;\n  }\n\n  20%, 60% {\n    -webkit-transform: rotate3d(0, 0, 1, 80deg);\n    transform: rotate3d(0, 0, 1, 80deg);\n    -webkit-transform-origin: top left;\n    transform-origin: top left;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out;\n  }\n\n  40%, 80% {\n    -webkit-transform: rotate3d(0, 0, 1, 60deg);\n    transform: rotate3d(0, 0, 1, 60deg);\n    -webkit-transform-origin: top left;\n    transform-origin: top left;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out;\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 700px, 0);\n    transform: translate3d(0, 700px, 0);\n    opacity: 0;\n  }\n}\n\n.hinge {\n  -webkit-animation-name: hinge;\n  animation-name: hinge;\n}\n\n/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\n\n@-webkit-keyframes rollIn {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);\n    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes rollIn {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);\n    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n.rollIn {\n  -webkit-animation-name: rollIn;\n  animation-name: rollIn;\n}\n\n/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\n\n@-webkit-keyframes rollOut {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);\n    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);\n  }\n}\n\n@keyframes rollOut {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);\n    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);\n  }\n}\n\n.rollOut {\n  -webkit-animation-name: rollOut;\n  animation-name: rollOut;\n}\n\n@-webkit-keyframes zoomIn {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(.3, .3, .3);\n    transform: scale3d(.3, .3, .3);\n  }\n\n  50% {\n    opacity: 1;\n  }\n}\n\n@keyframes zoomIn {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(.3, .3, .3);\n    transform: scale3d(.3, .3, .3);\n  }\n\n  50% {\n    opacity: 1;\n  }\n}\n\n.zoomIn {\n  -webkit-animation-name: zoomIn;\n  animation-name: zoomIn;\n}\n\n@-webkit-keyframes zoomInDown {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);\n    transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);\n    transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n}\n\n@keyframes zoomInDown {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);\n    transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);\n    transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n}\n\n.zoomInDown {\n  -webkit-animation-name: zoomInDown;\n  animation-name: zoomInDown;\n}\n\n@-webkit-keyframes zoomInLeft {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(.1, .1, .1) translate3d(-1000px, 0, 0);\n    transform: scale3d(.1, .1, .1) translate3d(-1000px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(10px, 0, 0);\n    transform: scale3d(.475, .475, .475) translate3d(10px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n}\n\n@keyframes zoomInLeft {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(.1, .1, .1) translate3d(-1000px, 0, 0);\n    transform: scale3d(.1, .1, .1) translate3d(-1000px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(10px, 0, 0);\n    transform: scale3d(.475, .475, .475) translate3d(10px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n}\n\n.zoomInLeft {\n  -webkit-animation-name: zoomInLeft;\n  animation-name: zoomInLeft;\n}\n\n@-webkit-keyframes zoomInRight {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(.1, .1, .1) translate3d(1000px, 0, 0);\n    transform: scale3d(.1, .1, .1) translate3d(1000px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(-10px, 0, 0);\n    transform: scale3d(.475, .475, .475) translate3d(-10px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n}\n\n@keyframes zoomInRight {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(.1, .1, .1) translate3d(1000px, 0, 0);\n    transform: scale3d(.1, .1, .1) translate3d(1000px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(-10px, 0, 0);\n    transform: scale3d(.475, .475, .475) translate3d(-10px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n}\n\n.zoomInRight {\n  -webkit-animation-name: zoomInRight;\n  animation-name: zoomInRight;\n}\n\n@-webkit-keyframes zoomInUp {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(.1, .1, .1) translate3d(0, 1000px, 0);\n    transform: scale3d(.1, .1, .1) translate3d(0, 1000px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);\n    transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n}\n\n@keyframes zoomInUp {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(.1, .1, .1) translate3d(0, 1000px, 0);\n    transform: scale3d(.1, .1, .1) translate3d(0, 1000px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);\n    transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n}\n\n.zoomInUp {\n  -webkit-animation-name: zoomInUp;\n  animation-name: zoomInUp;\n}\n\n@-webkit-keyframes zoomOut {\n  from {\n    opacity: 1;\n  }\n\n  50% {\n    opacity: 0;\n    -webkit-transform: scale3d(.3, .3, .3);\n    transform: scale3d(.3, .3, .3);\n  }\n\n  to {\n    opacity: 0;\n  }\n}\n\n@keyframes zoomOut {\n  from {\n    opacity: 1;\n  }\n\n  50% {\n    opacity: 0;\n    -webkit-transform: scale3d(.3, .3, .3);\n    transform: scale3d(.3, .3, .3);\n  }\n\n  to {\n    opacity: 0;\n  }\n}\n\n.zoomOut {\n  -webkit-animation-name: zoomOut;\n  animation-name: zoomOut;\n}\n\n@-webkit-keyframes zoomOutDown {\n  40% {\n    opacity: 1;\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);\n    transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: scale3d(.1, .1, .1) translate3d(0, 2000px, 0);\n    transform: scale3d(.1, .1, .1) translate3d(0, 2000px, 0);\n    -webkit-transform-origin: center bottom;\n    transform-origin: center bottom;\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n}\n\n@keyframes zoomOutDown {\n  40% {\n    opacity: 1;\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);\n    transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: scale3d(.1, .1, .1) translate3d(0, 2000px, 0);\n    transform: scale3d(.1, .1, .1) translate3d(0, 2000px, 0);\n    -webkit-transform-origin: center bottom;\n    transform-origin: center bottom;\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n}\n\n.zoomOutDown {\n  -webkit-animation-name: zoomOutDown;\n  animation-name: zoomOutDown;\n}\n\n@-webkit-keyframes zoomOutLeft {\n  40% {\n    opacity: 1;\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(42px, 0, 0);\n    transform: scale3d(.475, .475, .475) translate3d(42px, 0, 0);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: scale(.1) translate3d(-2000px, 0, 0);\n    transform: scale(.1) translate3d(-2000px, 0, 0);\n    -webkit-transform-origin: left center;\n    transform-origin: left center;\n  }\n}\n\n@keyframes zoomOutLeft {\n  40% {\n    opacity: 1;\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(42px, 0, 0);\n    transform: scale3d(.475, .475, .475) translate3d(42px, 0, 0);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: scale(.1) translate3d(-2000px, 0, 0);\n    transform: scale(.1) translate3d(-2000px, 0, 0);\n    -webkit-transform-origin: left center;\n    transform-origin: left center;\n  }\n}\n\n.zoomOutLeft {\n  -webkit-animation-name: zoomOutLeft;\n  animation-name: zoomOutLeft;\n}\n\n@-webkit-keyframes zoomOutRight {\n  40% {\n    opacity: 1;\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(-42px, 0, 0);\n    transform: scale3d(.475, .475, .475) translate3d(-42px, 0, 0);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: scale(.1) translate3d(2000px, 0, 0);\n    transform: scale(.1) translate3d(2000px, 0, 0);\n    -webkit-transform-origin: right center;\n    transform-origin: right center;\n  }\n}\n\n@keyframes zoomOutRight {\n  40% {\n    opacity: 1;\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(-42px, 0, 0);\n    transform: scale3d(.475, .475, .475) translate3d(-42px, 0, 0);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: scale(.1) translate3d(2000px, 0, 0);\n    transform: scale(.1) translate3d(2000px, 0, 0);\n    -webkit-transform-origin: right center;\n    transform-origin: right center;\n  }\n}\n\n.zoomOutRight {\n  -webkit-animation-name: zoomOutRight;\n  animation-name: zoomOutRight;\n}\n\n@-webkit-keyframes zoomOutUp {\n  40% {\n    opacity: 1;\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);\n    transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: scale3d(.1, .1, .1) translate3d(0, -2000px, 0);\n    transform: scale3d(.1, .1, .1) translate3d(0, -2000px, 0);\n    -webkit-transform-origin: center bottom;\n    transform-origin: center bottom;\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n}\n\n@keyframes zoomOutUp {\n  40% {\n    opacity: 1;\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);\n    transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: scale3d(.1, .1, .1) translate3d(0, -2000px, 0);\n    transform: scale3d(.1, .1, .1) translate3d(0, -2000px, 0);\n    -webkit-transform-origin: center bottom;\n    transform-origin: center bottom;\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n}\n\n.zoomOutUp {\n  -webkit-animation-name: zoomOutUp;\n  animation-name: zoomOutUp;\n}\n\n@-webkit-keyframes slideInDown {\n  from {\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n    visibility: visible;\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n@keyframes slideInDown {\n  from {\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n    visibility: visible;\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n.slideInDown {\n  -webkit-animation-name: slideInDown;\n  animation-name: slideInDown;\n}\n\n@-webkit-keyframes slideInLeft {\n  from {\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n    visibility: visible;\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n@keyframes slideInLeft {\n  from {\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n    visibility: visible;\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n.slideInLeft {\n  -webkit-animation-name: slideInLeft;\n  animation-name: slideInLeft;\n}\n\n@-webkit-keyframes slideInRight {\n  from {\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n    visibility: visible;\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n@keyframes slideInRight {\n  from {\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n    visibility: visible;\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n.slideInRight {\n  -webkit-animation-name: slideInRight;\n  animation-name: slideInRight;\n}\n\n@-webkit-keyframes slideInUp {\n  from {\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0);\n    visibility: visible;\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n@keyframes slideInUp {\n  from {\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0);\n    visibility: visible;\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n.slideInUp {\n  -webkit-animation-name: slideInUp;\n  animation-name: slideInUp;\n}\n\n@-webkit-keyframes slideOutDown {\n  from {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0);\n  }\n}\n\n@keyframes slideOutDown {\n  from {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0);\n  }\n}\n\n.slideOutDown {\n  -webkit-animation-name: slideOutDown;\n  animation-name: slideOutDown;\n}\n\n@-webkit-keyframes slideOutLeft {\n  from {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n  }\n}\n\n@keyframes slideOutLeft {\n  from {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n  }\n}\n\n.slideOutLeft {\n  -webkit-animation-name: slideOutLeft;\n  animation-name: slideOutLeft;\n}\n\n@-webkit-keyframes slideOutRight {\n  from {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n  }\n}\n\n@keyframes slideOutRight {\n  from {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n  }\n}\n\n.slideOutRight {\n  -webkit-animation-name: slideOutRight;\n  animation-name: slideOutRight;\n}\n\n@-webkit-keyframes slideOutUp {\n  from {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n  }\n}\n\n@keyframes slideOutUp {\n  from {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n  }\n}\n\n.slideOutUp {\n  -webkit-animation-name: slideOutUp;\n  animation-name: slideOutUp;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2c78453c\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./src/App.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(undefined);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Open+Sans:300,400,400i,600,700|Roboto+Slab:400,700);", ""]);
exports.i(__webpack_require__("./node_modules/css-loader/index.js!./node_modules/animate.css/animate.css"), "");

// module
exports.push([module.i, "\n.fixed {\n  position: fixed;\n}\n\n/* http://meyerweb.com/eric/tools/css/reset/\n   v2.0 | 20110126\n   License: none (public domain)\n*/\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n* {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\n/*\n * Base styles\n */\nbody {\n  font-size: 16px;\n  font-size: 1rem;\n  line-height: 1.6;\n  font-family: \"Open Sans\";\n  font-weight: 400;\n}\n\n/*\n * Typography\n */\n.monospace, pre, code {\n  font-family: \"Andale Mono\";\n  font-weight: 400;\n}\nh1, h2, h3, h4, h5, h6 {\n  font-family: \"Open Sans\";\n  font-weight: 200;\n  margin: 1em 0 0.5em;\n}\nh1, h2 {\n  line-height: 1.1;\n}\nh3, h4 {\n  line-height: 1.3;\n}\nh1 {\n  font-size: 400%;\n  letter-spacing: -2px;\n}\nh2 {\n  font-size: 250%;\n  letter-spacing: -1px;\n}\nh3 {\n  font-size: 200%;\n}\nh4 {\n  font-size: 180%;\n}\nh5 {\n  font-size: 130%;\n}\nh6 {\n  font-size: 100%;\n}\n.block-margins, p, ul, ol, pre {\n  margin: 1em 0;\n}\n.unordered-list, ul {\n  list-style-type: disc;\n}\n.ordered-list, ol {\n  list-style: decimal;\n}\na {\n  text-decoration: none;\n}\na:hover, a:visited:hover {\n    text-decoration: underline;\n}\ni, em {\n  font-style: italic;\n}\nb, strong {\n  font-weight: 700;\n}\n.container-fluid, .container {\n  margin-right: auto;\n  margin-left: auto;\n}\n.container-fluid {\n  padding-right: 2rem;\n  padding-left: 2rem;\n}\n.container {\n  max-width: 75rem;\n}\n@media only screen and (min-width: 75rem) {\n.container {\n      max-width: 100%;\n}\n}\n@media only screen and (min-width: lg) {\n.container {\n      max-width: 100%;\n}\n}\n.row {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  margin-right: -0.5rem;\n  margin-left: -0.5rem;\n}\n.row.reverse {\n    -ms-flex-direction: row-reverse;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: reverse;\n    flex-direction: row-reverse;\n}\n.row.around {\n    -ms-flex-pack: distribute;\n    justify-content: space-around;\n}\n.row.between {\n    -ms-flex-pack: justify;\n    -webkit-box-pack: justify;\n    justify-content: space-between;\n}\n.col.reverse {\n  -ms-flex-direction: column-reverse;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: reverse;\n  flex-direction: column-reverse;\n}\n@media only screen and (max-width: 30rem) {\n.hidden-xs {\n    display: none;\n}\n}\n.col-xs,\n.col-xs-1,\n.col-xs-2,\n.col-xs-3,\n.col-xs-4,\n.col-xs-5,\n.col-xs-6,\n.col-xs-7,\n.col-xs-8,\n.col-xs-9,\n.col-xs-10,\n.col-xs-11,\n.col-xs-12,\n.col-xs-1-5,\n.col-xs-offset-1,\n.col-xs-offset-2,\n.col-xs-offset-3,\n.col-xs-offset-4,\n.col-xs-offset-5,\n.col-xs-offset-6,\n.col-xs-offset-7,\n.col-xs-offset-8,\n.col-xs-offset-9,\n.col-xs-offset-10,\n.col-xs-offset-11,\n.col-xs-offset-12 {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -ms-flex: 0 0 auto;\n  -webkit-box-flex: 0;\n  display: block;\n  flex: 0 0 auto;\n  padding-right: 0.5rem;\n  padding-left: 0.5rem;\n}\n.col-xs {\n  -webkit-box-flex: 1;\n  -ms-flex-positive: 1;\n  flex-grow: 1;\n  -ms-flex-preferred-size: 0;\n  flex-basis: 0;\n  max-width: 100%;\n}\n.start-xs {\n  -webkit-box-pack: start;\n  -ms-flex-pack: start;\n  justify-content: flex-start;\n  text-align: start;\n}\n.center-xs {\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  text-align: center;\n}\n.end-xs {\n  -webkit-box-pack: end;\n  -ms-flex-pack: end;\n  justify-content: flex-end;\n  text-align: end;\n}\n.top-xs {\n  -webkit-box-align: start;\n  -ms-flex-align: start;\n  align-items: flex-start;\n}\n.middle-xs {\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n}\n.bottom-xs {\n  -webkit-box-align: end;\n  -ms-flex-align: end;\n  align-items: flex-end;\n}\n.around-xs {\n  -ms-flex-pack: distribute;\n  justify-content: space-around;\n}\n.between-xs {\n  -webkit-box-pack: justify;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n}\n.first-xs {\n  -webkit-box-ordinal-group: 0;\n  -ms-flex-order: -1;\n  order: -1;\n}\n.last-xs {\n  -webkit-box-ordinal-group: 2;\n  -ms-flex-order: 1;\n  order: 1;\n}\n.col-xs-1 {\n  -ms-flex-preferred-size: 8.33333%;\n  flex-basis: 8.33333%;\n  max-width: 8.33333%;\n}\n.col-xs-offset-1 {\n  margin-left: 8.33333%;\n}\n.col-xs-2 {\n  -ms-flex-preferred-size: 16.66667%;\n  flex-basis: 16.66667%;\n  max-width: 16.66667%;\n}\n.col-xs-offset-2 {\n  margin-left: 16.66667%;\n}\n.col-xs-3 {\n  -ms-flex-preferred-size: 25%;\n  flex-basis: 25%;\n  max-width: 25%;\n}\n.col-xs-offset-3 {\n  margin-left: 25%;\n}\n.col-xs-4 {\n  -ms-flex-preferred-size: 33.33333%;\n  flex-basis: 33.33333%;\n  max-width: 33.33333%;\n}\n.col-xs-offset-4 {\n  margin-left: 33.33333%;\n}\n.col-xs-5 {\n  -ms-flex-preferred-size: 41.66667%;\n  flex-basis: 41.66667%;\n  max-width: 41.66667%;\n}\n.col-xs-offset-5 {\n  margin-left: 41.66667%;\n}\n.col-xs-6 {\n  -ms-flex-preferred-size: 50%;\n  flex-basis: 50%;\n  max-width: 50%;\n}\n.col-xs-offset-6 {\n  margin-left: 50%;\n}\n.col-xs-7 {\n  -ms-flex-preferred-size: 58.33333%;\n  flex-basis: 58.33333%;\n  max-width: 58.33333%;\n}\n.col-xs-offset-7 {\n  margin-left: 58.33333%;\n}\n.col-xs-8 {\n  -ms-flex-preferred-size: 66.66667%;\n  flex-basis: 66.66667%;\n  max-width: 66.66667%;\n}\n.col-xs-offset-8 {\n  margin-left: 66.66667%;\n}\n.col-xs-9 {\n  -ms-flex-preferred-size: 75%;\n  flex-basis: 75%;\n  max-width: 75%;\n}\n.col-xs-offset-9 {\n  margin-left: 75%;\n}\n.col-xs-10 {\n  -ms-flex-preferred-size: 83.33333%;\n  flex-basis: 83.33333%;\n  max-width: 83.33333%;\n}\n.col-xs-offset-10 {\n  margin-left: 83.33333%;\n}\n.col-xs-11 {\n  -ms-flex-preferred-size: 91.66667%;\n  flex-basis: 91.66667%;\n  max-width: 91.66667%;\n}\n.col-xs-offset-11 {\n  margin-left: 91.66667%;\n}\n.col-xs-12 {\n  -ms-flex-preferred-size: 100%;\n  flex-basis: 100%;\n  max-width: 100%;\n}\n.col-xs-offset-12 {\n  margin-left: 100%;\n}\n.col-xs-1-5 {\n  -ms-flex-preferred-size: 20%;\n  flex-basis: 20%;\n  max-width: 20%;\n}\n@media only screen and (max-width: 48rem) {\n.hidden-sm {\n    display: none;\n}\n}\n@media only screen and (max-width: sm) {\n.hidden-sm {\n    display: none;\n}\n}\n@media only screen and (min-width: 48rem) {\n.container {\n    width: 48rem;\n}\n.col-sm,\n  .col-sm-1,\n  .col-sm-2,\n  .col-sm-3,\n  .col-sm-4,\n  .col-sm-5,\n  .col-sm-6,\n  .col-sm-7,\n  .col-sm-8,\n  .col-sm-9,\n  .col-sm-10,\n  .col-sm-11,\n  .col-sm-12,\n  .col-sm-1-5,\n  .col-sm-offset-1,\n  .col-sm-offset-2,\n  .col-sm-offset-3,\n  .col-sm-offset-4,\n  .col-sm-offset-5,\n  .col-sm-offset-6,\n  .col-sm-offset-7,\n  .col-sm-offset-8,\n  .col-sm-offset-9,\n  .col-sm-offset-10,\n  .col-sm-offset-11,\n  .col-sm-offset-12 {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    -ms-flex: 0 0 auto;\n    -webkit-box-flex: 0;\n    display: block;\n    flex: 0 0 auto;\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n}\n.col-sm {\n    -webkit-box-flex: 1;\n    -ms-flex-positive: 1;\n    flex-grow: 1;\n    -ms-flex-preferred-size: 0;\n    flex-basis: 0;\n    max-width: 100%;\n}\n.start-sm {\n    -webkit-box-pack: start;\n    -ms-flex-pack: start;\n    justify-content: flex-start;\n    text-align: start;\n}\n.center-sm {\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    text-align: center;\n}\n.end-sm {\n    -webkit-box-pack: end;\n    -ms-flex-pack: end;\n    justify-content: flex-end;\n    text-align: end;\n}\n.top-sm {\n    -webkit-box-align: start;\n    -ms-flex-align: start;\n    align-items: flex-start;\n}\n.middle-sm {\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n}\n.bottom-sm {\n    -webkit-box-align: end;\n    -ms-flex-align: end;\n    align-items: flex-end;\n}\n.around-sm {\n    -ms-flex-pack: distribute;\n    justify-content: space-around;\n}\n.between-sm {\n    -webkit-box-pack: justify;\n    -ms-flex-pack: justify;\n    justify-content: space-between;\n}\n.first-sm {\n    -webkit-box-ordinal-group: 0;\n    -ms-flex-order: -1;\n    order: -1;\n}\n.last-sm {\n    -webkit-box-ordinal-group: 2;\n    -ms-flex-order: 1;\n    order: 1;\n}\n.col-sm-1 {\n    -ms-flex-preferred-size: 8.33333%;\n    flex-basis: 8.33333%;\n    max-width: 8.33333%;\n}\n.col-sm-offset-1 {\n    margin-left: 8.33333%;\n}\n.col-sm-2 {\n    -ms-flex-preferred-size: 16.66667%;\n    flex-basis: 16.66667%;\n    max-width: 16.66667%;\n}\n.col-sm-offset-2 {\n    margin-left: 16.66667%;\n}\n.col-sm-3 {\n    -ms-flex-preferred-size: 25%;\n    flex-basis: 25%;\n    max-width: 25%;\n}\n.col-sm-offset-3 {\n    margin-left: 25%;\n}\n.col-sm-4 {\n    -ms-flex-preferred-size: 33.33333%;\n    flex-basis: 33.33333%;\n    max-width: 33.33333%;\n}\n.col-sm-offset-4 {\n    margin-left: 33.33333%;\n}\n.col-sm-5 {\n    -ms-flex-preferred-size: 41.66667%;\n    flex-basis: 41.66667%;\n    max-width: 41.66667%;\n}\n.col-sm-offset-5 {\n    margin-left: 41.66667%;\n}\n.col-sm-6 {\n    -ms-flex-preferred-size: 50%;\n    flex-basis: 50%;\n    max-width: 50%;\n}\n.col-sm-offset-6 {\n    margin-left: 50%;\n}\n.col-sm-7 {\n    -ms-flex-preferred-size: 58.33333%;\n    flex-basis: 58.33333%;\n    max-width: 58.33333%;\n}\n.col-sm-offset-7 {\n    margin-left: 58.33333%;\n}\n.col-sm-8 {\n    -ms-flex-preferred-size: 66.66667%;\n    flex-basis: 66.66667%;\n    max-width: 66.66667%;\n}\n.col-sm-offset-8 {\n    margin-left: 66.66667%;\n}\n.col-sm-9 {\n    -ms-flex-preferred-size: 75%;\n    flex-basis: 75%;\n    max-width: 75%;\n}\n.col-sm-offset-9 {\n    margin-left: 75%;\n}\n.col-sm-10 {\n    -ms-flex-preferred-size: 83.33333%;\n    flex-basis: 83.33333%;\n    max-width: 83.33333%;\n}\n.col-sm-offset-10 {\n    margin-left: 83.33333%;\n}\n.col-sm-11 {\n    -ms-flex-preferred-size: 91.66667%;\n    flex-basis: 91.66667%;\n    max-width: 91.66667%;\n}\n.col-sm-offset-11 {\n    margin-left: 91.66667%;\n}\n.col-sm-12 {\n    -ms-flex-preferred-size: 100%;\n    flex-basis: 100%;\n    max-width: 100%;\n}\n.col-sm-offset-12 {\n    margin-left: 100%;\n}\n.col-sm-1-5 {\n    -ms-flex-preferred-size: 20%;\n    flex-basis: 20%;\n    max-width: 20%;\n}\n}\n@media only screen and (min-width: sm) {\n.container {\n    width: 48rem;\n}\n.col-sm,\n  .col-sm-1,\n  .col-sm-2,\n  .col-sm-3,\n  .col-sm-4,\n  .col-sm-5,\n  .col-sm-6,\n  .col-sm-7,\n  .col-sm-8,\n  .col-sm-9,\n  .col-sm-10,\n  .col-sm-11,\n  .col-sm-12,\n  .col-sm-1-5,\n  .col-sm-offset-1,\n  .col-sm-offset-2,\n  .col-sm-offset-3,\n  .col-sm-offset-4,\n  .col-sm-offset-5,\n  .col-sm-offset-6,\n  .col-sm-offset-7,\n  .col-sm-offset-8,\n  .col-sm-offset-9,\n  .col-sm-offset-10,\n  .col-sm-offset-11,\n  .col-sm-offset-12 {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    -ms-flex: 0 0 auto;\n    -webkit-box-flex: 0;\n    display: block;\n    flex: 0 0 auto;\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n}\n.col-sm {\n    -webkit-box-flex: 1;\n    -ms-flex-positive: 1;\n    flex-grow: 1;\n    -ms-flex-preferred-size: 0;\n    flex-basis: 0;\n    max-width: 100%;\n}\n.start-sm {\n    -webkit-box-pack: start;\n    -ms-flex-pack: start;\n    justify-content: flex-start;\n    text-align: start;\n}\n.center-sm {\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    text-align: center;\n}\n.end-sm {\n    -webkit-box-pack: end;\n    -ms-flex-pack: end;\n    justify-content: flex-end;\n    text-align: end;\n}\n.top-sm {\n    -webkit-box-align: start;\n    -ms-flex-align: start;\n    align-items: flex-start;\n}\n.middle-sm {\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n}\n.bottom-sm {\n    -webkit-box-align: end;\n    -ms-flex-align: end;\n    align-items: flex-end;\n}\n.around-sm {\n    -ms-flex-pack: distribute;\n    justify-content: space-around;\n}\n.between-sm {\n    -webkit-box-pack: justify;\n    -ms-flex-pack: justify;\n    justify-content: space-between;\n}\n.first-sm {\n    -webkit-box-ordinal-group: 0;\n    -ms-flex-order: -1;\n    order: -1;\n}\n.last-sm {\n    -webkit-box-ordinal-group: 2;\n    -ms-flex-order: 1;\n    order: 1;\n}\n.col-sm-1 {\n    -ms-flex-preferred-size: 8.33333%;\n    flex-basis: 8.33333%;\n    max-width: 8.33333%;\n}\n.col-sm-offset-1 {\n    margin-left: 8.33333%;\n}\n.col-sm-2 {\n    -ms-flex-preferred-size: 16.66667%;\n    flex-basis: 16.66667%;\n    max-width: 16.66667%;\n}\n.col-sm-offset-2 {\n    margin-left: 16.66667%;\n}\n.col-sm-3 {\n    -ms-flex-preferred-size: 25%;\n    flex-basis: 25%;\n    max-width: 25%;\n}\n.col-sm-offset-3 {\n    margin-left: 25%;\n}\n.col-sm-4 {\n    -ms-flex-preferred-size: 33.33333%;\n    flex-basis: 33.33333%;\n    max-width: 33.33333%;\n}\n.col-sm-offset-4 {\n    margin-left: 33.33333%;\n}\n.col-sm-5 {\n    -ms-flex-preferred-size: 41.66667%;\n    flex-basis: 41.66667%;\n    max-width: 41.66667%;\n}\n.col-sm-offset-5 {\n    margin-left: 41.66667%;\n}\n.col-sm-6 {\n    -ms-flex-preferred-size: 50%;\n    flex-basis: 50%;\n    max-width: 50%;\n}\n.col-sm-offset-6 {\n    margin-left: 50%;\n}\n.col-sm-7 {\n    -ms-flex-preferred-size: 58.33333%;\n    flex-basis: 58.33333%;\n    max-width: 58.33333%;\n}\n.col-sm-offset-7 {\n    margin-left: 58.33333%;\n}\n.col-sm-8 {\n    -ms-flex-preferred-size: 66.66667%;\n    flex-basis: 66.66667%;\n    max-width: 66.66667%;\n}\n.col-sm-offset-8 {\n    margin-left: 66.66667%;\n}\n.col-sm-9 {\n    -ms-flex-preferred-size: 75%;\n    flex-basis: 75%;\n    max-width: 75%;\n}\n.col-sm-offset-9 {\n    margin-left: 75%;\n}\n.col-sm-10 {\n    -ms-flex-preferred-size: 83.33333%;\n    flex-basis: 83.33333%;\n    max-width: 83.33333%;\n}\n.col-sm-offset-10 {\n    margin-left: 83.33333%;\n}\n.col-sm-11 {\n    -ms-flex-preferred-size: 91.66667%;\n    flex-basis: 91.66667%;\n    max-width: 91.66667%;\n}\n.col-sm-offset-11 {\n    margin-left: 91.66667%;\n}\n.col-sm-12 {\n    -ms-flex-preferred-size: 100%;\n    flex-basis: 100%;\n    max-width: 100%;\n}\n.col-sm-offset-12 {\n    margin-left: 100%;\n}\n.col-sm-1-5 {\n    -ms-flex-preferred-size: 20%;\n    flex-basis: 20%;\n    max-width: 20%;\n}\n}\n@media only screen and (max-width: 64rem) {\n.hidden-md {\n    display: none;\n}\n}\n@media only screen and (max-width: md) {\n.hidden-md {\n    display: none;\n}\n}\n@media only screen and (min-width: 64rem) {\n.container {\n    width: 64rem;\n}\n.col-md,\n  .col-md-1,\n  .col-md-2,\n  .col-md-3,\n  .col-md-4,\n  .col-md-5,\n  .col-md-6,\n  .col-md-7,\n  .col-md-8,\n  .col-md-9,\n  .col-md-10,\n  .col-md-11,\n  .col-md-12,\n  .col-md-1-5,\n  .col-md-offset-1,\n  .col-md-offset-2,\n  .col-md-offset-3,\n  .col-md-offset-4,\n  .col-md-offset-5,\n  .col-md-offset-6,\n  .col-md-offset-7,\n  .col-md-offset-8,\n  .col-md-offset-9,\n  .col-md-offset-10,\n  .col-md-offset-11,\n  .col-md-offset-12 {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    -ms-flex: 0 0 auto;\n    -webkit-box-flex: 0;\n    display: block;\n    flex: 0 0 auto;\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n}\n.col-md {\n    -webkit-box-flex: 1;\n    -ms-flex-positive: 1;\n    flex-grow: 1;\n    -ms-flex-preferred-size: 0;\n    flex-basis: 0;\n    max-width: 100%;\n}\n.start-md {\n    -webkit-box-pack: start;\n    -ms-flex-pack: start;\n    justify-content: flex-start;\n    text-align: start;\n}\n.center-md {\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    text-align: center;\n}\n.end-md {\n    -webkit-box-pack: end;\n    -ms-flex-pack: end;\n    justify-content: flex-end;\n    text-align: end;\n}\n.top-md {\n    -webkit-box-align: start;\n    -ms-flex-align: start;\n    align-items: flex-start;\n}\n.middle-md {\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n}\n.bottom-md {\n    -webkit-box-align: end;\n    -ms-flex-align: end;\n    align-items: flex-end;\n}\n.around-md {\n    -ms-flex-pack: distribute;\n    justify-content: space-around;\n}\n.between-md {\n    -webkit-box-pack: justify;\n    -ms-flex-pack: justify;\n    justify-content: space-between;\n}\n.first-md {\n    -webkit-box-ordinal-group: 0;\n    -ms-flex-order: -1;\n    order: -1;\n}\n.last-md {\n    -webkit-box-ordinal-group: 2;\n    -ms-flex-order: 1;\n    order: 1;\n}\n.col-md-1 {\n    -ms-flex-preferred-size: 8.33333%;\n    flex-basis: 8.33333%;\n    max-width: 8.33333%;\n}\n.col-md-offset-1 {\n    margin-left: 8.33333%;\n}\n.col-md-2 {\n    -ms-flex-preferred-size: 16.66667%;\n    flex-basis: 16.66667%;\n    max-width: 16.66667%;\n}\n.col-md-offset-2 {\n    margin-left: 16.66667%;\n}\n.col-md-3 {\n    -ms-flex-preferred-size: 25%;\n    flex-basis: 25%;\n    max-width: 25%;\n}\n.col-md-offset-3 {\n    margin-left: 25%;\n}\n.col-md-4 {\n    -ms-flex-preferred-size: 33.33333%;\n    flex-basis: 33.33333%;\n    max-width: 33.33333%;\n}\n.col-md-offset-4 {\n    margin-left: 33.33333%;\n}\n.col-md-5 {\n    -ms-flex-preferred-size: 41.66667%;\n    flex-basis: 41.66667%;\n    max-width: 41.66667%;\n}\n.col-md-offset-5 {\n    margin-left: 41.66667%;\n}\n.col-md-6 {\n    -ms-flex-preferred-size: 50%;\n    flex-basis: 50%;\n    max-width: 50%;\n}\n.col-md-offset-6 {\n    margin-left: 50%;\n}\n.col-md-7 {\n    -ms-flex-preferred-size: 58.33333%;\n    flex-basis: 58.33333%;\n    max-width: 58.33333%;\n}\n.col-md-offset-7 {\n    margin-left: 58.33333%;\n}\n.col-md-8 {\n    -ms-flex-preferred-size: 66.66667%;\n    flex-basis: 66.66667%;\n    max-width: 66.66667%;\n}\n.col-md-offset-8 {\n    margin-left: 66.66667%;\n}\n.col-md-9 {\n    -ms-flex-preferred-size: 75%;\n    flex-basis: 75%;\n    max-width: 75%;\n}\n.col-md-offset-9 {\n    margin-left: 75%;\n}\n.col-md-10 {\n    -ms-flex-preferred-size: 83.33333%;\n    flex-basis: 83.33333%;\n    max-width: 83.33333%;\n}\n.col-md-offset-10 {\n    margin-left: 83.33333%;\n}\n.col-md-11 {\n    -ms-flex-preferred-size: 91.66667%;\n    flex-basis: 91.66667%;\n    max-width: 91.66667%;\n}\n.col-md-offset-11 {\n    margin-left: 91.66667%;\n}\n.col-md-12 {\n    -ms-flex-preferred-size: 100%;\n    flex-basis: 100%;\n    max-width: 100%;\n}\n.col-md-offset-12 {\n    margin-left: 100%;\n}\n.col-md-1-5 {\n    -ms-flex-preferred-size: 20%;\n    flex-basis: 20%;\n    max-width: 20%;\n}\n}\n@media only screen and (min-width: md) {\n.container {\n    width: 64rem;\n}\n.col-md,\n  .col-md-1,\n  .col-md-2,\n  .col-md-3,\n  .col-md-4,\n  .col-md-5,\n  .col-md-6,\n  .col-md-7,\n  .col-md-8,\n  .col-md-9,\n  .col-md-10,\n  .col-md-11,\n  .col-md-12,\n  .col-md-1-5,\n  .col-md-offset-1,\n  .col-md-offset-2,\n  .col-md-offset-3,\n  .col-md-offset-4,\n  .col-md-offset-5,\n  .col-md-offset-6,\n  .col-md-offset-7,\n  .col-md-offset-8,\n  .col-md-offset-9,\n  .col-md-offset-10,\n  .col-md-offset-11,\n  .col-md-offset-12 {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    -ms-flex: 0 0 auto;\n    -webkit-box-flex: 0;\n    display: block;\n    flex: 0 0 auto;\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n}\n.col-md {\n    -webkit-box-flex: 1;\n    -ms-flex-positive: 1;\n    flex-grow: 1;\n    -ms-flex-preferred-size: 0;\n    flex-basis: 0;\n    max-width: 100%;\n}\n.start-md {\n    -webkit-box-pack: start;\n    -ms-flex-pack: start;\n    justify-content: flex-start;\n    text-align: start;\n}\n.center-md {\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    text-align: center;\n}\n.end-md {\n    -webkit-box-pack: end;\n    -ms-flex-pack: end;\n    justify-content: flex-end;\n    text-align: end;\n}\n.top-md {\n    -webkit-box-align: start;\n    -ms-flex-align: start;\n    align-items: flex-start;\n}\n.middle-md {\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n}\n.bottom-md {\n    -webkit-box-align: end;\n    -ms-flex-align: end;\n    align-items: flex-end;\n}\n.around-md {\n    -ms-flex-pack: distribute;\n    justify-content: space-around;\n}\n.between-md {\n    -webkit-box-pack: justify;\n    -ms-flex-pack: justify;\n    justify-content: space-between;\n}\n.first-md {\n    -webkit-box-ordinal-group: 0;\n    -ms-flex-order: -1;\n    order: -1;\n}\n.last-md {\n    -webkit-box-ordinal-group: 2;\n    -ms-flex-order: 1;\n    order: 1;\n}\n.col-md-1 {\n    -ms-flex-preferred-size: 8.33333%;\n    flex-basis: 8.33333%;\n    max-width: 8.33333%;\n}\n.col-md-offset-1 {\n    margin-left: 8.33333%;\n}\n.col-md-2 {\n    -ms-flex-preferred-size: 16.66667%;\n    flex-basis: 16.66667%;\n    max-width: 16.66667%;\n}\n.col-md-offset-2 {\n    margin-left: 16.66667%;\n}\n.col-md-3 {\n    -ms-flex-preferred-size: 25%;\n    flex-basis: 25%;\n    max-width: 25%;\n}\n.col-md-offset-3 {\n    margin-left: 25%;\n}\n.col-md-4 {\n    -ms-flex-preferred-size: 33.33333%;\n    flex-basis: 33.33333%;\n    max-width: 33.33333%;\n}\n.col-md-offset-4 {\n    margin-left: 33.33333%;\n}\n.col-md-5 {\n    -ms-flex-preferred-size: 41.66667%;\n    flex-basis: 41.66667%;\n    max-width: 41.66667%;\n}\n.col-md-offset-5 {\n    margin-left: 41.66667%;\n}\n.col-md-6 {\n    -ms-flex-preferred-size: 50%;\n    flex-basis: 50%;\n    max-width: 50%;\n}\n.col-md-offset-6 {\n    margin-left: 50%;\n}\n.col-md-7 {\n    -ms-flex-preferred-size: 58.33333%;\n    flex-basis: 58.33333%;\n    max-width: 58.33333%;\n}\n.col-md-offset-7 {\n    margin-left: 58.33333%;\n}\n.col-md-8 {\n    -ms-flex-preferred-size: 66.66667%;\n    flex-basis: 66.66667%;\n    max-width: 66.66667%;\n}\n.col-md-offset-8 {\n    margin-left: 66.66667%;\n}\n.col-md-9 {\n    -ms-flex-preferred-size: 75%;\n    flex-basis: 75%;\n    max-width: 75%;\n}\n.col-md-offset-9 {\n    margin-left: 75%;\n}\n.col-md-10 {\n    -ms-flex-preferred-size: 83.33333%;\n    flex-basis: 83.33333%;\n    max-width: 83.33333%;\n}\n.col-md-offset-10 {\n    margin-left: 83.33333%;\n}\n.col-md-11 {\n    -ms-flex-preferred-size: 91.66667%;\n    flex-basis: 91.66667%;\n    max-width: 91.66667%;\n}\n.col-md-offset-11 {\n    margin-left: 91.66667%;\n}\n.col-md-12 {\n    -ms-flex-preferred-size: 100%;\n    flex-basis: 100%;\n    max-width: 100%;\n}\n.col-md-offset-12 {\n    margin-left: 100%;\n}\n.col-md-1-5 {\n    -ms-flex-preferred-size: 20%;\n    flex-basis: 20%;\n    max-width: 20%;\n}\n}\n@media only screen and (max-width: 75rem) {\n.hidden-lg {\n    display: none;\n}\n}\n@media only screen and (max-width: lg) {\n.hidden-lg {\n    display: none;\n}\n}\n@media only screen and (min-width: 75rem) {\n.container {\n    width: 75rem;\n}\n.col-lg,\n  .col-lg-1,\n  .col-lg-2,\n  .col-lg-3,\n  .col-lg-4,\n  .col-lg-5,\n  .col-lg-6,\n  .col-lg-7,\n  .col-lg-8,\n  .col-lg-9,\n  .col-lg-10,\n  .col-lg-11,\n  .col-lg-12,\n  .col-lg-1-5,\n  .col-lg-offset-1,\n  .col-lg-offset-2,\n  .col-lg-offset-3,\n  .col-lg-offset-4,\n  .col-lg-offset-5,\n  .col-lg-offset-6,\n  .col-lg-offset-7,\n  .col-lg-offset-8,\n  .col-lg-offset-9,\n  .col-lg-offset-10,\n  .col-lg-offset-11,\n  .col-lg-offset-12 {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    -ms-flex: 0 0 auto;\n    -webkit-box-flex: 0;\n    display: block;\n    flex: 0 0 auto;\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n}\n.col-lg {\n    -webkit-box-flex: 1;\n    -ms-flex-positive: 1;\n    flex-grow: 1;\n    -ms-flex-preferred-size: 0;\n    flex-basis: 0;\n    max-width: 100%;\n}\n.start-lg {\n    -webkit-box-pack: start;\n    -ms-flex-pack: start;\n    justify-content: flex-start;\n    text-align: start;\n}\n.center-lg {\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    text-align: center;\n}\n.end-lg {\n    -webkit-box-pack: end;\n    -ms-flex-pack: end;\n    justify-content: flex-end;\n    text-align: end;\n}\n.top-lg {\n    -webkit-box-align: start;\n    -ms-flex-align: start;\n    align-items: flex-start;\n}\n.middle-lg {\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n}\n.bottom-lg {\n    -webkit-box-align: end;\n    -ms-flex-align: end;\n    align-items: flex-end;\n}\n.around-lg {\n    -ms-flex-pack: distribute;\n    justify-content: space-around;\n}\n.between-lg {\n    -webkit-box-pack: justify;\n    -ms-flex-pack: justify;\n    justify-content: space-between;\n}\n.first-lg {\n    -webkit-box-ordinal-group: 0;\n    -ms-flex-order: -1;\n    order: -1;\n}\n.last-lg {\n    -webkit-box-ordinal-group: 2;\n    -ms-flex-order: 1;\n    order: 1;\n}\n.col-lg-1 {\n    -ms-flex-preferred-size: 8.33333%;\n    flex-basis: 8.33333%;\n    max-width: 8.33333%;\n}\n.col-lg-offset-1 {\n    margin-left: 8.33333%;\n}\n.col-lg-2 {\n    -ms-flex-preferred-size: 16.66667%;\n    flex-basis: 16.66667%;\n    max-width: 16.66667%;\n}\n.col-lg-offset-2 {\n    margin-left: 16.66667%;\n}\n.col-lg-3 {\n    -ms-flex-preferred-size: 25%;\n    flex-basis: 25%;\n    max-width: 25%;\n}\n.col-lg-offset-3 {\n    margin-left: 25%;\n}\n.col-lg-4 {\n    -ms-flex-preferred-size: 33.33333%;\n    flex-basis: 33.33333%;\n    max-width: 33.33333%;\n}\n.col-lg-offset-4 {\n    margin-left: 33.33333%;\n}\n.col-lg-5 {\n    -ms-flex-preferred-size: 41.66667%;\n    flex-basis: 41.66667%;\n    max-width: 41.66667%;\n}\n.col-lg-offset-5 {\n    margin-left: 41.66667%;\n}\n.col-lg-6 {\n    -ms-flex-preferred-size: 50%;\n    flex-basis: 50%;\n    max-width: 50%;\n}\n.col-lg-offset-6 {\n    margin-left: 50%;\n}\n.col-lg-7 {\n    -ms-flex-preferred-size: 58.33333%;\n    flex-basis: 58.33333%;\n    max-width: 58.33333%;\n}\n.col-lg-offset-7 {\n    margin-left: 58.33333%;\n}\n.col-lg-8 {\n    -ms-flex-preferred-size: 66.66667%;\n    flex-basis: 66.66667%;\n    max-width: 66.66667%;\n}\n.col-lg-offset-8 {\n    margin-left: 66.66667%;\n}\n.col-lg-9 {\n    -ms-flex-preferred-size: 75%;\n    flex-basis: 75%;\n    max-width: 75%;\n}\n.col-lg-offset-9 {\n    margin-left: 75%;\n}\n.col-lg-10 {\n    -ms-flex-preferred-size: 83.33333%;\n    flex-basis: 83.33333%;\n    max-width: 83.33333%;\n}\n.col-lg-offset-10 {\n    margin-left: 83.33333%;\n}\n.col-lg-11 {\n    -ms-flex-preferred-size: 91.66667%;\n    flex-basis: 91.66667%;\n    max-width: 91.66667%;\n}\n.col-lg-offset-11 {\n    margin-left: 91.66667%;\n}\n.col-lg-12 {\n    -ms-flex-preferred-size: 100%;\n    flex-basis: 100%;\n    max-width: 100%;\n}\n.col-lg-offset-12 {\n    margin-left: 100%;\n}\n.col-lg-1-5 {\n    -ms-flex-preferred-size: 20%;\n    flex-basis: 20%;\n    max-width: 20%;\n}\n}\n@media only screen and (min-width: lg) {\n.container {\n    width: 75rem;\n}\n.col-lg,\n  .col-lg-1,\n  .col-lg-2,\n  .col-lg-3,\n  .col-lg-4,\n  .col-lg-5,\n  .col-lg-6,\n  .col-lg-7,\n  .col-lg-8,\n  .col-lg-9,\n  .col-lg-10,\n  .col-lg-11,\n  .col-lg-12,\n  .col-lg-1-5,\n  .col-lg-offset-1,\n  .col-lg-offset-2,\n  .col-lg-offset-3,\n  .col-lg-offset-4,\n  .col-lg-offset-5,\n  .col-lg-offset-6,\n  .col-lg-offset-7,\n  .col-lg-offset-8,\n  .col-lg-offset-9,\n  .col-lg-offset-10,\n  .col-lg-offset-11,\n  .col-lg-offset-12 {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    -ms-flex: 0 0 auto;\n    -webkit-box-flex: 0;\n    display: block;\n    flex: 0 0 auto;\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n}\n.col-lg {\n    -webkit-box-flex: 1;\n    -ms-flex-positive: 1;\n    flex-grow: 1;\n    -ms-flex-preferred-size: 0;\n    flex-basis: 0;\n    max-width: 100%;\n}\n.start-lg {\n    -webkit-box-pack: start;\n    -ms-flex-pack: start;\n    justify-content: flex-start;\n    text-align: start;\n}\n.center-lg {\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    text-align: center;\n}\n.end-lg {\n    -webkit-box-pack: end;\n    -ms-flex-pack: end;\n    justify-content: flex-end;\n    text-align: end;\n}\n.top-lg {\n    -webkit-box-align: start;\n    -ms-flex-align: start;\n    align-items: flex-start;\n}\n.middle-lg {\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n}\n.bottom-lg {\n    -webkit-box-align: end;\n    -ms-flex-align: end;\n    align-items: flex-end;\n}\n.around-lg {\n    -ms-flex-pack: distribute;\n    justify-content: space-around;\n}\n.between-lg {\n    -webkit-box-pack: justify;\n    -ms-flex-pack: justify;\n    justify-content: space-between;\n}\n.first-lg {\n    -webkit-box-ordinal-group: 0;\n    -ms-flex-order: -1;\n    order: -1;\n}\n.last-lg {\n    -webkit-box-ordinal-group: 2;\n    -ms-flex-order: 1;\n    order: 1;\n}\n.col-lg-1 {\n    -ms-flex-preferred-size: 8.33333%;\n    flex-basis: 8.33333%;\n    max-width: 8.33333%;\n}\n.col-lg-offset-1 {\n    margin-left: 8.33333%;\n}\n.col-lg-2 {\n    -ms-flex-preferred-size: 16.66667%;\n    flex-basis: 16.66667%;\n    max-width: 16.66667%;\n}\n.col-lg-offset-2 {\n    margin-left: 16.66667%;\n}\n.col-lg-3 {\n    -ms-flex-preferred-size: 25%;\n    flex-basis: 25%;\n    max-width: 25%;\n}\n.col-lg-offset-3 {\n    margin-left: 25%;\n}\n.col-lg-4 {\n    -ms-flex-preferred-size: 33.33333%;\n    flex-basis: 33.33333%;\n    max-width: 33.33333%;\n}\n.col-lg-offset-4 {\n    margin-left: 33.33333%;\n}\n.col-lg-5 {\n    -ms-flex-preferred-size: 41.66667%;\n    flex-basis: 41.66667%;\n    max-width: 41.66667%;\n}\n.col-lg-offset-5 {\n    margin-left: 41.66667%;\n}\n.col-lg-6 {\n    -ms-flex-preferred-size: 50%;\n    flex-basis: 50%;\n    max-width: 50%;\n}\n.col-lg-offset-6 {\n    margin-left: 50%;\n}\n.col-lg-7 {\n    -ms-flex-preferred-size: 58.33333%;\n    flex-basis: 58.33333%;\n    max-width: 58.33333%;\n}\n.col-lg-offset-7 {\n    margin-left: 58.33333%;\n}\n.col-lg-8 {\n    -ms-flex-preferred-size: 66.66667%;\n    flex-basis: 66.66667%;\n    max-width: 66.66667%;\n}\n.col-lg-offset-8 {\n    margin-left: 66.66667%;\n}\n.col-lg-9 {\n    -ms-flex-preferred-size: 75%;\n    flex-basis: 75%;\n    max-width: 75%;\n}\n.col-lg-offset-9 {\n    margin-left: 75%;\n}\n.col-lg-10 {\n    -ms-flex-preferred-size: 83.33333%;\n    flex-basis: 83.33333%;\n    max-width: 83.33333%;\n}\n.col-lg-offset-10 {\n    margin-left: 83.33333%;\n}\n.col-lg-11 {\n    -ms-flex-preferred-size: 91.66667%;\n    flex-basis: 91.66667%;\n    max-width: 91.66667%;\n}\n.col-lg-offset-11 {\n    margin-left: 91.66667%;\n}\n.col-lg-12 {\n    -ms-flex-preferred-size: 100%;\n    flex-basis: 100%;\n    max-width: 100%;\n}\n.col-lg-offset-12 {\n    margin-left: 100%;\n}\n.col-lg-1-5 {\n    -ms-flex-preferred-size: 20%;\n    flex-basis: 20%;\n    max-width: 20%;\n}\n}\n\n/*!\n * Bootstrap v4.0.0-beta (https://getbootstrap.com)\n * Copyright 2011-2017 The Bootstrap Authors\n * Copyright 2011-2017 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n */\n@media print {\n*,\n  *::before,\n  *::after {\n    text-shadow: none !important;\n    -webkit-box-shadow: none !important;\n            box-shadow: none !important;\n}\na,\n  a:visited {\n    text-decoration: underline;\n}\nabbr[title]::after {\n    content: \" (\" attr(title) \")\";\n}\npre {\n    white-space: pre-wrap !important;\n}\npre,\n  blockquote {\n    border: 1px solid #999;\n    page-break-inside: avoid;\n}\nthead {\n    display: table-header-group;\n}\ntr,\n  img {\n    page-break-inside: avoid;\n}\np,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3;\n}\nh2,\n  h3 {\n    page-break-after: avoid;\n}\n.navbar {\n    display: none;\n}\n.badge {\n    border: 1px solid #000;\n}\n.table {\n    border-collapse: collapse !important;\n}\n.table td,\n    .table th {\n      background-color: #fff !important;\n}\n.table-bordered th,\n  .table-bordered td {\n    border: 1px solid #ddd !important;\n}\n}\n*,\n*::before,\n*::after {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\nhtml {\n  font-family: sans-serif;\n  line-height: 1.15;\n  -webkit-text-size-adjust: 100%;\n  -ms-text-size-adjust: 100%;\n  -ms-overflow-style: scrollbar;\n  -webkit-tap-highlight-color: transparent;\n}\n@-ms-viewport {\n  width: device-width;\n}\narticle, aside, dialog, figcaption, figure, footer, header, hgroup, main, nav, section {\n  display: block;\n}\nbody {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-size: 1rem;\n  font-weight: normal;\n  line-height: 1.5;\n  color: #212529;\n  text-align: left;\n  background-color: #fff;\n}\n[tabindex=\"-1\"]:focus {\n  outline: none !important;\n}\nhr {\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box;\n  height: 0;\n  overflow: visible;\n}\nh1, h2, h3, h4, h5, h6 {\n  margin-top: 0;\n  margin-bottom: .5rem;\n}\np {\n  margin-top: 0;\n  margin-bottom: 1rem;\n}\nabbr[title],\nabbr[data-original-title] {\n  text-decoration: underline;\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n  cursor: help;\n  border-bottom: 0;\n}\naddress {\n  margin-bottom: 1rem;\n  font-style: normal;\n  line-height: inherit;\n}\nol,\nul,\ndl {\n  margin-top: 0;\n  margin-bottom: 1rem;\n}\nol ol,\nul ul,\nol ul,\nul ol {\n  margin-bottom: 0;\n}\ndt {\n  font-weight: bold;\n}\ndd {\n  margin-bottom: .5rem;\n  margin-left: 0;\n}\nblockquote {\n  margin: 0 0 1rem;\n}\ndfn {\n  font-style: italic;\n}\nb,\nstrong {\n  font-weight: bolder;\n}\nsmall {\n  font-size: 80%;\n}\nsub,\nsup {\n  position: relative;\n  font-size: 75%;\n  line-height: 0;\n  vertical-align: baseline;\n}\nsub {\n  bottom: -.25em;\n}\nsup {\n  top: -.5em;\n}\na {\n  color: #007bff;\n  text-decoration: none;\n  background-color: transparent;\n  -webkit-text-decoration-skip: objects;\n}\na:hover {\n    color: #0056b3;\n    text-decoration: underline;\n}\na:not([href]):not([tabindex]) {\n  color: inherit;\n  text-decoration: none;\n}\na:not([href]):not([tabindex]):focus, a:not([href]):not([tabindex]):hover {\n    color: inherit;\n    text-decoration: none;\n}\na:not([href]):not([tabindex]):focus {\n    outline: 0;\n}\npre,\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\npre {\n  margin-top: 0;\n  margin-bottom: 1rem;\n  overflow: auto;\n}\nfigure {\n  margin: 0 0 1rem;\n}\nimg {\n  vertical-align: middle;\n  border-style: none;\n}\nsvg:not(:root) {\n  overflow: hidden;\n}\na,\narea,\nbutton,\n[role=\"button\"],\ninput,\nlabel,\nselect,\nsummary,\ntextarea {\n  -ms-touch-action: manipulation;\n      touch-action: manipulation;\n}\ntable {\n  border-collapse: collapse;\n}\ncaption {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n  color: #868e96;\n  text-align: left;\n  caption-side: bottom;\n}\nth {\n  text-align: inherit;\n}\nlabel {\n  display: inline-block;\n  margin-bottom: .5rem;\n}\nbutton:focus {\n  outline: 1px dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n}\ninput,\nbutton,\nselect,\noptgroup,\ntextarea {\n  margin: 0;\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\nbutton,\ninput {\n  overflow: visible;\n}\nbutton,\nselect {\n  text-transform: none;\n}\nbutton,\nhtml [type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  padding: 0;\n  border-style: none;\n}\ninput[type=\"radio\"],\ninput[type=\"checkbox\"] {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding: 0;\n}\ninput[type=\"date\"],\ninput[type=\"time\"],\ninput[type=\"datetime-local\"],\ninput[type=\"month\"] {\n  -webkit-appearance: listbox;\n}\ntextarea {\n  overflow: auto;\n  resize: vertical;\n}\nfieldset {\n  min-width: 0;\n  padding: 0;\n  margin: 0;\n  border: 0;\n}\nlegend {\n  display: block;\n  width: 100%;\n  max-width: 100%;\n  padding: 0;\n  margin-bottom: .5rem;\n  font-size: 1.5rem;\n  line-height: inherit;\n  color: inherit;\n  white-space: normal;\n}\nprogress {\n  vertical-align: baseline;\n}\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n[type=\"search\"] {\n  outline-offset: -2px;\n  -webkit-appearance: none;\n}\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n::-webkit-file-upload-button {\n  font: inherit;\n  -webkit-appearance: button;\n}\noutput {\n  display: inline-block;\n}\nsummary {\n  display: list-item;\n}\ntemplate {\n  display: none;\n}\n[hidden] {\n  display: none !important;\n}\nh1, h2, h3, h4, h5, h6,\n.h1, .h2, .h3, .h4, .h5, .h6 {\n  margin-bottom: 0.5rem;\n  font-family: inherit;\n  font-weight: 500;\n  line-height: 1.1;\n  color: inherit;\n}\nh1, .h1 {\n  font-size: 2.5rem;\n}\nh2, .h2 {\n  font-size: 2rem;\n}\nh3, .h3 {\n  font-size: 1.75rem;\n}\nh4, .h4 {\n  font-size: 1.5rem;\n}\nh5, .h5 {\n  font-size: 1.25rem;\n}\nh6, .h6 {\n  font-size: 1rem;\n}\n.lead {\n  font-size: 1.25rem;\n  font-weight: 300;\n}\n.display-1 {\n  font-size: 6rem;\n  font-weight: 300;\n  line-height: 1.1;\n}\n.display-2 {\n  font-size: 5.5rem;\n  font-weight: 300;\n  line-height: 1.1;\n}\n.display-3 {\n  font-size: 4.5rem;\n  font-weight: 300;\n  line-height: 1.1;\n}\n.display-4 {\n  font-size: 3.5rem;\n  font-weight: 300;\n  line-height: 1.1;\n}\nhr {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  border: 0;\n  border-top: 1px solid rgba(0, 0, 0, 0.1);\n}\nsmall,\n.small {\n  font-size: 80%;\n  font-weight: normal;\n}\nmark,\n.mark {\n  padding: 0.2em;\n  background-color: #fcf8e3;\n}\n.list-unstyled {\n  padding-left: 0;\n  list-style: none;\n}\n.list-inline {\n  padding-left: 0;\n  list-style: none;\n}\n.list-inline-item {\n  display: inline-block;\n}\n.list-inline-item:not(:last-child) {\n    margin-right: 5px;\n}\n.initialism {\n  font-size: 90%;\n  text-transform: uppercase;\n}\n.blockquote {\n  margin-bottom: 1rem;\n  font-size: 1.25rem;\n}\n.blockquote-footer {\n  display: block;\n  font-size: 80%;\n  color: #868e96;\n}\n.blockquote-footer::before {\n    content: \"\\2014   \\A0\";\n}\n.img-fluid {\n  max-width: 100%;\n  height: auto;\n}\n.img-thumbnail {\n  padding: 0.25rem;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 0.25rem;\n  -webkit-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n  max-width: 100%;\n  height: auto;\n}\n.figure {\n  display: inline-block;\n}\n.figure-img {\n  margin-bottom: 0.5rem;\n  line-height: 1;\n}\n.figure-caption {\n  font-size: 90%;\n  color: #868e96;\n}\ncode,\nkbd,\npre,\nsamp {\n  font-family: \"SFMono-Regular\", Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n}\ncode {\n  padding: 0.2rem 0.4rem;\n  font-size: 90%;\n  color: #bd4147;\n  background-color: #f8f9fa;\n  border-radius: 0.25rem;\n}\na > code {\n    padding: 0;\n    color: inherit;\n    background-color: inherit;\n}\nkbd {\n  padding: 0.2rem 0.4rem;\n  font-size: 90%;\n  color: #fff;\n  background-color: #212529;\n  border-radius: 0.2rem;\n}\nkbd kbd {\n    padding: 0;\n    font-size: 100%;\n    font-weight: bold;\n}\npre {\n  display: block;\n  margin-top: 0;\n  margin-bottom: 1rem;\n  font-size: 90%;\n  color: #212529;\n}\npre code {\n    padding: 0;\n    font-size: inherit;\n    color: inherit;\n    background-color: transparent;\n    border-radius: 0;\n}\n.pre-scrollable {\n  max-height: 340px;\n  overflow-y: scroll;\n}\n.container {\n  margin-right: auto;\n  margin-left: auto;\n  padding-right: 15px;\n  padding-left: 15px;\n  width: 100%;\n}\n@media (min-width: 576px) {\n.container {\n      max-width: 540px;\n}\n}\n@media (min-width: 768px) {\n.container {\n      max-width: 720px;\n}\n}\n@media (min-width: 992px) {\n.container {\n      max-width: 960px;\n}\n}\n@media (min-width: 1200px) {\n.container {\n      max-width: 1140px;\n}\n}\n.container-fluid {\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n  padding-right: 15px;\n  padding-left: 15px;\n  width: 100%;\n}\n.row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px;\n}\n.no-gutters {\n  margin-right: 0;\n  margin-left: 0;\n}\n.no-gutters > .col,\n  .no-gutters > [class*=\"col-\"] {\n    padding-right: 0;\n    padding-left: 0;\n}\n.col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col,\n.col-auto, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm,\n.col-sm-auto, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md,\n.col-md-auto, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg,\n.col-lg-auto, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl,\n.col-xl-auto {\n  position: relative;\n  width: 100%;\n  min-height: 1px;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n.col {\n  -ms-flex-preferred-size: 0;\n      flex-basis: 0;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  max-width: 100%;\n}\n.col-auto {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  width: auto;\n  max-width: none;\n}\n.col-1 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 8.33333%;\n          flex: 0 0 8.33333%;\n  max-width: 8.33333%;\n}\n.col-2 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 16.66667%;\n          flex: 0 0 16.66667%;\n  max-width: 16.66667%;\n}\n.col-3 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 25%;\n          flex: 0 0 25%;\n  max-width: 25%;\n}\n.col-4 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 33.33333%;\n          flex: 0 0 33.33333%;\n  max-width: 33.33333%;\n}\n.col-5 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 41.66667%;\n          flex: 0 0 41.66667%;\n  max-width: 41.66667%;\n}\n.col-6 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 50%;\n          flex: 0 0 50%;\n  max-width: 50%;\n}\n.col-7 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 58.33333%;\n          flex: 0 0 58.33333%;\n  max-width: 58.33333%;\n}\n.col-8 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 66.66667%;\n          flex: 0 0 66.66667%;\n  max-width: 66.66667%;\n}\n.col-9 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 75%;\n          flex: 0 0 75%;\n  max-width: 75%;\n}\n.col-10 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 83.33333%;\n          flex: 0 0 83.33333%;\n  max-width: 83.33333%;\n}\n.col-11 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 91.66667%;\n          flex: 0 0 91.66667%;\n  max-width: 91.66667%;\n}\n.col-12 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 100%;\n          flex: 0 0 100%;\n  max-width: 100%;\n}\n.order-1 {\n  -webkit-box-ordinal-group: 2;\n      -ms-flex-order: 1;\n          order: 1;\n}\n.order-2 {\n  -webkit-box-ordinal-group: 3;\n      -ms-flex-order: 2;\n          order: 2;\n}\n.order-3 {\n  -webkit-box-ordinal-group: 4;\n      -ms-flex-order: 3;\n          order: 3;\n}\n.order-4 {\n  -webkit-box-ordinal-group: 5;\n      -ms-flex-order: 4;\n          order: 4;\n}\n.order-5 {\n  -webkit-box-ordinal-group: 6;\n      -ms-flex-order: 5;\n          order: 5;\n}\n.order-6 {\n  -webkit-box-ordinal-group: 7;\n      -ms-flex-order: 6;\n          order: 6;\n}\n.order-7 {\n  -webkit-box-ordinal-group: 8;\n      -ms-flex-order: 7;\n          order: 7;\n}\n.order-8 {\n  -webkit-box-ordinal-group: 9;\n      -ms-flex-order: 8;\n          order: 8;\n}\n.order-9 {\n  -webkit-box-ordinal-group: 10;\n      -ms-flex-order: 9;\n          order: 9;\n}\n.order-10 {\n  -webkit-box-ordinal-group: 11;\n      -ms-flex-order: 10;\n          order: 10;\n}\n.order-11 {\n  -webkit-box-ordinal-group: 12;\n      -ms-flex-order: 11;\n          order: 11;\n}\n.order-12 {\n  -webkit-box-ordinal-group: 13;\n      -ms-flex-order: 12;\n          order: 12;\n}\n@media (min-width: 576px) {\n.col-sm {\n    -ms-flex-preferred-size: 0;\n        flex-basis: 0;\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    max-width: 100%;\n}\n.col-sm-auto {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: auto;\n    max-width: none;\n}\n.col-sm-1 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 8.33333%;\n            flex: 0 0 8.33333%;\n    max-width: 8.33333%;\n}\n.col-sm-2 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 16.66667%;\n            flex: 0 0 16.66667%;\n    max-width: 16.66667%;\n}\n.col-sm-3 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 25%;\n            flex: 0 0 25%;\n    max-width: 25%;\n}\n.col-sm-4 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 33.33333%;\n            flex: 0 0 33.33333%;\n    max-width: 33.33333%;\n}\n.col-sm-5 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 41.66667%;\n            flex: 0 0 41.66667%;\n    max-width: 41.66667%;\n}\n.col-sm-6 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 50%;\n            flex: 0 0 50%;\n    max-width: 50%;\n}\n.col-sm-7 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 58.33333%;\n            flex: 0 0 58.33333%;\n    max-width: 58.33333%;\n}\n.col-sm-8 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 66.66667%;\n            flex: 0 0 66.66667%;\n    max-width: 66.66667%;\n}\n.col-sm-9 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 75%;\n            flex: 0 0 75%;\n    max-width: 75%;\n}\n.col-sm-10 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 83.33333%;\n            flex: 0 0 83.33333%;\n    max-width: 83.33333%;\n}\n.col-sm-11 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 91.66667%;\n            flex: 0 0 91.66667%;\n    max-width: 91.66667%;\n}\n.col-sm-12 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 100%;\n            flex: 0 0 100%;\n    max-width: 100%;\n}\n.order-sm-1 {\n    -webkit-box-ordinal-group: 2;\n        -ms-flex-order: 1;\n            order: 1;\n}\n.order-sm-2 {\n    -webkit-box-ordinal-group: 3;\n        -ms-flex-order: 2;\n            order: 2;\n}\n.order-sm-3 {\n    -webkit-box-ordinal-group: 4;\n        -ms-flex-order: 3;\n            order: 3;\n}\n.order-sm-4 {\n    -webkit-box-ordinal-group: 5;\n        -ms-flex-order: 4;\n            order: 4;\n}\n.order-sm-5 {\n    -webkit-box-ordinal-group: 6;\n        -ms-flex-order: 5;\n            order: 5;\n}\n.order-sm-6 {\n    -webkit-box-ordinal-group: 7;\n        -ms-flex-order: 6;\n            order: 6;\n}\n.order-sm-7 {\n    -webkit-box-ordinal-group: 8;\n        -ms-flex-order: 7;\n            order: 7;\n}\n.order-sm-8 {\n    -webkit-box-ordinal-group: 9;\n        -ms-flex-order: 8;\n            order: 8;\n}\n.order-sm-9 {\n    -webkit-box-ordinal-group: 10;\n        -ms-flex-order: 9;\n            order: 9;\n}\n.order-sm-10 {\n    -webkit-box-ordinal-group: 11;\n        -ms-flex-order: 10;\n            order: 10;\n}\n.order-sm-11 {\n    -webkit-box-ordinal-group: 12;\n        -ms-flex-order: 11;\n            order: 11;\n}\n.order-sm-12 {\n    -webkit-box-ordinal-group: 13;\n        -ms-flex-order: 12;\n            order: 12;\n}\n}\n@media (min-width: 768px) {\n.col-md {\n    -ms-flex-preferred-size: 0;\n        flex-basis: 0;\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    max-width: 100%;\n}\n.col-md-auto {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: auto;\n    max-width: none;\n}\n.col-md-1 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 8.33333%;\n            flex: 0 0 8.33333%;\n    max-width: 8.33333%;\n}\n.col-md-2 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 16.66667%;\n            flex: 0 0 16.66667%;\n    max-width: 16.66667%;\n}\n.col-md-3 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 25%;\n            flex: 0 0 25%;\n    max-width: 25%;\n}\n.col-md-4 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 33.33333%;\n            flex: 0 0 33.33333%;\n    max-width: 33.33333%;\n}\n.col-md-5 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 41.66667%;\n            flex: 0 0 41.66667%;\n    max-width: 41.66667%;\n}\n.col-md-6 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 50%;\n            flex: 0 0 50%;\n    max-width: 50%;\n}\n.col-md-7 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 58.33333%;\n            flex: 0 0 58.33333%;\n    max-width: 58.33333%;\n}\n.col-md-8 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 66.66667%;\n            flex: 0 0 66.66667%;\n    max-width: 66.66667%;\n}\n.col-md-9 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 75%;\n            flex: 0 0 75%;\n    max-width: 75%;\n}\n.col-md-10 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 83.33333%;\n            flex: 0 0 83.33333%;\n    max-width: 83.33333%;\n}\n.col-md-11 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 91.66667%;\n            flex: 0 0 91.66667%;\n    max-width: 91.66667%;\n}\n.col-md-12 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 100%;\n            flex: 0 0 100%;\n    max-width: 100%;\n}\n.order-md-1 {\n    -webkit-box-ordinal-group: 2;\n        -ms-flex-order: 1;\n            order: 1;\n}\n.order-md-2 {\n    -webkit-box-ordinal-group: 3;\n        -ms-flex-order: 2;\n            order: 2;\n}\n.order-md-3 {\n    -webkit-box-ordinal-group: 4;\n        -ms-flex-order: 3;\n            order: 3;\n}\n.order-md-4 {\n    -webkit-box-ordinal-group: 5;\n        -ms-flex-order: 4;\n            order: 4;\n}\n.order-md-5 {\n    -webkit-box-ordinal-group: 6;\n        -ms-flex-order: 5;\n            order: 5;\n}\n.order-md-6 {\n    -webkit-box-ordinal-group: 7;\n        -ms-flex-order: 6;\n            order: 6;\n}\n.order-md-7 {\n    -webkit-box-ordinal-group: 8;\n        -ms-flex-order: 7;\n            order: 7;\n}\n.order-md-8 {\n    -webkit-box-ordinal-group: 9;\n        -ms-flex-order: 8;\n            order: 8;\n}\n.order-md-9 {\n    -webkit-box-ordinal-group: 10;\n        -ms-flex-order: 9;\n            order: 9;\n}\n.order-md-10 {\n    -webkit-box-ordinal-group: 11;\n        -ms-flex-order: 10;\n            order: 10;\n}\n.order-md-11 {\n    -webkit-box-ordinal-group: 12;\n        -ms-flex-order: 11;\n            order: 11;\n}\n.order-md-12 {\n    -webkit-box-ordinal-group: 13;\n        -ms-flex-order: 12;\n            order: 12;\n}\n}\n@media (min-width: 992px) {\n.col-lg {\n    -ms-flex-preferred-size: 0;\n        flex-basis: 0;\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    max-width: 100%;\n}\n.col-lg-auto {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: auto;\n    max-width: none;\n}\n.col-lg-1 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 8.33333%;\n            flex: 0 0 8.33333%;\n    max-width: 8.33333%;\n}\n.col-lg-2 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 16.66667%;\n            flex: 0 0 16.66667%;\n    max-width: 16.66667%;\n}\n.col-lg-3 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 25%;\n            flex: 0 0 25%;\n    max-width: 25%;\n}\n.col-lg-4 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 33.33333%;\n            flex: 0 0 33.33333%;\n    max-width: 33.33333%;\n}\n.col-lg-5 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 41.66667%;\n            flex: 0 0 41.66667%;\n    max-width: 41.66667%;\n}\n.col-lg-6 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 50%;\n            flex: 0 0 50%;\n    max-width: 50%;\n}\n.col-lg-7 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 58.33333%;\n            flex: 0 0 58.33333%;\n    max-width: 58.33333%;\n}\n.col-lg-8 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 66.66667%;\n            flex: 0 0 66.66667%;\n    max-width: 66.66667%;\n}\n.col-lg-9 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 75%;\n            flex: 0 0 75%;\n    max-width: 75%;\n}\n.col-lg-10 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 83.33333%;\n            flex: 0 0 83.33333%;\n    max-width: 83.33333%;\n}\n.col-lg-11 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 91.66667%;\n            flex: 0 0 91.66667%;\n    max-width: 91.66667%;\n}\n.col-lg-12 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 100%;\n            flex: 0 0 100%;\n    max-width: 100%;\n}\n.order-lg-1 {\n    -webkit-box-ordinal-group: 2;\n        -ms-flex-order: 1;\n            order: 1;\n}\n.order-lg-2 {\n    -webkit-box-ordinal-group: 3;\n        -ms-flex-order: 2;\n            order: 2;\n}\n.order-lg-3 {\n    -webkit-box-ordinal-group: 4;\n        -ms-flex-order: 3;\n            order: 3;\n}\n.order-lg-4 {\n    -webkit-box-ordinal-group: 5;\n        -ms-flex-order: 4;\n            order: 4;\n}\n.order-lg-5 {\n    -webkit-box-ordinal-group: 6;\n        -ms-flex-order: 5;\n            order: 5;\n}\n.order-lg-6 {\n    -webkit-box-ordinal-group: 7;\n        -ms-flex-order: 6;\n            order: 6;\n}\n.order-lg-7 {\n    -webkit-box-ordinal-group: 8;\n        -ms-flex-order: 7;\n            order: 7;\n}\n.order-lg-8 {\n    -webkit-box-ordinal-group: 9;\n        -ms-flex-order: 8;\n            order: 8;\n}\n.order-lg-9 {\n    -webkit-box-ordinal-group: 10;\n        -ms-flex-order: 9;\n            order: 9;\n}\n.order-lg-10 {\n    -webkit-box-ordinal-group: 11;\n        -ms-flex-order: 10;\n            order: 10;\n}\n.order-lg-11 {\n    -webkit-box-ordinal-group: 12;\n        -ms-flex-order: 11;\n            order: 11;\n}\n.order-lg-12 {\n    -webkit-box-ordinal-group: 13;\n        -ms-flex-order: 12;\n            order: 12;\n}\n}\n@media (min-width: 1200px) {\n.col-xl {\n    -ms-flex-preferred-size: 0;\n        flex-basis: 0;\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    max-width: 100%;\n}\n.col-xl-auto {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: auto;\n    max-width: none;\n}\n.col-xl-1 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 8.33333%;\n            flex: 0 0 8.33333%;\n    max-width: 8.33333%;\n}\n.col-xl-2 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 16.66667%;\n            flex: 0 0 16.66667%;\n    max-width: 16.66667%;\n}\n.col-xl-3 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 25%;\n            flex: 0 0 25%;\n    max-width: 25%;\n}\n.col-xl-4 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 33.33333%;\n            flex: 0 0 33.33333%;\n    max-width: 33.33333%;\n}\n.col-xl-5 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 41.66667%;\n            flex: 0 0 41.66667%;\n    max-width: 41.66667%;\n}\n.col-xl-6 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 50%;\n            flex: 0 0 50%;\n    max-width: 50%;\n}\n.col-xl-7 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 58.33333%;\n            flex: 0 0 58.33333%;\n    max-width: 58.33333%;\n}\n.col-xl-8 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 66.66667%;\n            flex: 0 0 66.66667%;\n    max-width: 66.66667%;\n}\n.col-xl-9 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 75%;\n            flex: 0 0 75%;\n    max-width: 75%;\n}\n.col-xl-10 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 83.33333%;\n            flex: 0 0 83.33333%;\n    max-width: 83.33333%;\n}\n.col-xl-11 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 91.66667%;\n            flex: 0 0 91.66667%;\n    max-width: 91.66667%;\n}\n.col-xl-12 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 100%;\n            flex: 0 0 100%;\n    max-width: 100%;\n}\n.order-xl-1 {\n    -webkit-box-ordinal-group: 2;\n        -ms-flex-order: 1;\n            order: 1;\n}\n.order-xl-2 {\n    -webkit-box-ordinal-group: 3;\n        -ms-flex-order: 2;\n            order: 2;\n}\n.order-xl-3 {\n    -webkit-box-ordinal-group: 4;\n        -ms-flex-order: 3;\n            order: 3;\n}\n.order-xl-4 {\n    -webkit-box-ordinal-group: 5;\n        -ms-flex-order: 4;\n            order: 4;\n}\n.order-xl-5 {\n    -webkit-box-ordinal-group: 6;\n        -ms-flex-order: 5;\n            order: 5;\n}\n.order-xl-6 {\n    -webkit-box-ordinal-group: 7;\n        -ms-flex-order: 6;\n            order: 6;\n}\n.order-xl-7 {\n    -webkit-box-ordinal-group: 8;\n        -ms-flex-order: 7;\n            order: 7;\n}\n.order-xl-8 {\n    -webkit-box-ordinal-group: 9;\n        -ms-flex-order: 8;\n            order: 8;\n}\n.order-xl-9 {\n    -webkit-box-ordinal-group: 10;\n        -ms-flex-order: 9;\n            order: 9;\n}\n.order-xl-10 {\n    -webkit-box-ordinal-group: 11;\n        -ms-flex-order: 10;\n            order: 10;\n}\n.order-xl-11 {\n    -webkit-box-ordinal-group: 12;\n        -ms-flex-order: 11;\n            order: 11;\n}\n.order-xl-12 {\n    -webkit-box-ordinal-group: 13;\n        -ms-flex-order: 12;\n            order: 12;\n}\n}\n.table {\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: 1rem;\n  background-color: transparent;\n}\n.table th,\n  .table td {\n    padding: 0.75rem;\n    vertical-align: top;\n    border-top: 1px solid #e9ecef;\n}\n.table thead th {\n    vertical-align: bottom;\n    border-bottom: 2px solid #e9ecef;\n}\n.table tbody + tbody {\n    border-top: 2px solid #e9ecef;\n}\n.table .table {\n    background-color: #fff;\n}\n.table-sm th,\n.table-sm td {\n  padding: 0.3rem;\n}\n.table-bordered {\n  border: 1px solid #e9ecef;\n}\n.table-bordered th,\n  .table-bordered td {\n    border: 1px solid #e9ecef;\n}\n.table-bordered thead th,\n  .table-bordered thead td {\n    border-bottom-width: 2px;\n}\n.table-striped tbody tr:nth-of-type(odd) {\n  background-color: rgba(0, 0, 0, 0.05);\n}\n.table-hover tbody tr:hover {\n  background-color: rgba(0, 0, 0, 0.075);\n}\n.table-primary,\n.table-primary > th,\n.table-primary > td {\n  background-color: #b8daff;\n}\n.table-hover .table-primary:hover {\n  background-color: #9fcdff;\n}\n.table-hover .table-primary:hover > td,\n  .table-hover .table-primary:hover > th {\n    background-color: #9fcdff;\n}\n.table-secondary,\n.table-secondary > th,\n.table-secondary > td {\n  background-color: #dddfe2;\n}\n.table-hover .table-secondary:hover {\n  background-color: #cfd2d6;\n}\n.table-hover .table-secondary:hover > td,\n  .table-hover .table-secondary:hover > th {\n    background-color: #cfd2d6;\n}\n.table-success,\n.table-success > th,\n.table-success > td {\n  background-color: #c3e6cb;\n}\n.table-hover .table-success:hover {\n  background-color: #b1dfbb;\n}\n.table-hover .table-success:hover > td,\n  .table-hover .table-success:hover > th {\n    background-color: #b1dfbb;\n}\n.table-info,\n.table-info > th,\n.table-info > td {\n  background-color: #bee5eb;\n}\n.table-hover .table-info:hover {\n  background-color: #abdde5;\n}\n.table-hover .table-info:hover > td,\n  .table-hover .table-info:hover > th {\n    background-color: #abdde5;\n}\n.table-warning,\n.table-warning > th,\n.table-warning > td {\n  background-color: #ffeeba;\n}\n.table-hover .table-warning:hover {\n  background-color: #ffe8a1;\n}\n.table-hover .table-warning:hover > td,\n  .table-hover .table-warning:hover > th {\n    background-color: #ffe8a1;\n}\n.table-danger,\n.table-danger > th,\n.table-danger > td {\n  background-color: #f5c6cb;\n}\n.table-hover .table-danger:hover {\n  background-color: #f1b0b7;\n}\n.table-hover .table-danger:hover > td,\n  .table-hover .table-danger:hover > th {\n    background-color: #f1b0b7;\n}\n.table-light,\n.table-light > th,\n.table-light > td {\n  background-color: #fdfdfe;\n}\n.table-hover .table-light:hover {\n  background-color: #ececf6;\n}\n.table-hover .table-light:hover > td,\n  .table-hover .table-light:hover > th {\n    background-color: #ececf6;\n}\n.table-dark,\n.table-dark > th,\n.table-dark > td {\n  background-color: #c6c8ca;\n}\n.table-hover .table-dark:hover {\n  background-color: #b9bbbe;\n}\n.table-hover .table-dark:hover > td,\n  .table-hover .table-dark:hover > th {\n    background-color: #b9bbbe;\n}\n.table-active,\n.table-active > th,\n.table-active > td {\n  background-color: rgba(0, 0, 0, 0.075);\n}\n.table-hover .table-active:hover {\n  background-color: rgba(0, 0, 0, 0.075);\n}\n.table-hover .table-active:hover > td,\n  .table-hover .table-active:hover > th {\n    background-color: rgba(0, 0, 0, 0.075);\n}\n.thead-inverse th {\n  color: #fff;\n  background-color: #212529;\n}\n.thead-default th {\n  color: #495057;\n  background-color: #e9ecef;\n}\n.table-inverse {\n  color: #fff;\n  background-color: #212529;\n}\n.table-inverse th,\n  .table-inverse td,\n  .table-inverse thead th {\n    border-color: #32383e;\n}\n.table-inverse.table-bordered {\n    border: 0;\n}\n.table-inverse.table-striped tbody tr:nth-of-type(odd) {\n    background-color: rgba(255, 255, 255, 0.05);\n}\n.table-inverse.table-hover tbody tr:hover {\n    background-color: rgba(255, 255, 255, 0.075);\n}\n@media (max-width: 991px) {\n.table-responsive {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -ms-overflow-style: -ms-autohiding-scrollbar;\n}\n.table-responsive.table-bordered {\n      border: 0;\n}\n}\n.form-control {\n  display: block;\n  width: 100%;\n  padding: 0.5rem 0.75rem;\n  font-size: 1rem;\n  line-height: 1.25;\n  color: #495057;\n  background-color: #fff;\n  background-image: none;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  border-radius: 0.25rem;\n  -webkit-transition: border-color ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;\n  transition: border-color ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;\n}\n.form-control::-ms-expand {\n    background-color: transparent;\n    border: 0;\n}\n.form-control:focus {\n    color: #495057;\n    background-color: #fff;\n    border-color: #80bdff;\n    outline: none;\n}\n.form-control::-webkit-input-placeholder {\n    color: #868e96;\n    opacity: 1;\n}\n.form-control:-ms-input-placeholder {\n    color: #868e96;\n    opacity: 1;\n}\n.form-control::-ms-input-placeholder {\n    color: #868e96;\n    opacity: 1;\n}\n.form-control::placeholder {\n    color: #868e96;\n    opacity: 1;\n}\n.form-control:disabled, .form-control[readonly] {\n    background-color: #e9ecef;\n    opacity: 1;\n}\nselect.form-control:not([size]):not([multiple]) {\n  height: calc(2.25rem + 2px);\n}\nselect.form-control:focus::-ms-value {\n  color: #495057;\n  background-color: #fff;\n}\n.form-control-file,\n.form-control-range {\n  display: block;\n}\n.col-form-label {\n  padding-top: calc(0.5rem - 1px * 2);\n  padding-bottom: calc(0.5rem - 1px * 2);\n  margin-bottom: 0;\n}\n.col-form-label-lg {\n  padding-top: calc(0.5rem - 1px * 2);\n  padding-bottom: calc(0.5rem - 1px * 2);\n  font-size: 1.25rem;\n}\n.col-form-label-sm {\n  padding-top: calc(0.25rem - 1px * 2);\n  padding-bottom: calc(0.25rem - 1px * 2);\n  font-size: 0.875rem;\n}\n.col-form-legend {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  margin-bottom: 0;\n  font-size: 1rem;\n}\n.form-control-plaintext {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  margin-bottom: 0;\n  line-height: 1.25;\n  border: solid transparent;\n  border-width: 1px 0;\n}\n.form-control-plaintext.form-control-sm, .input-group-sm > .form-control-plaintext.form-control,\n  .input-group-sm > .form-control-plaintext.input-group-addon,\n  .input-group-sm > .input-group-btn > .form-control-plaintext.btn, .form-control-plaintext.form-control-lg, .input-group-lg > .form-control-plaintext.form-control,\n  .input-group-lg > .form-control-plaintext.input-group-addon,\n  .input-group-lg > .input-group-btn > .form-control-plaintext.btn {\n    padding-right: 0;\n    padding-left: 0;\n}\n.form-control-sm, .input-group-sm > .form-control,\n.input-group-sm > .input-group-addon,\n.input-group-sm > .input-group-btn > .btn {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  border-radius: 0.2rem;\n}\nselect.form-control-sm:not([size]):not([multiple]), .input-group-sm > select.form-control:not([size]):not([multiple]),\n.input-group-sm > select.input-group-addon:not([size]):not([multiple]),\n.input-group-sm > .input-group-btn > select.btn:not([size]):not([multiple]) {\n  height: calc(1.8125rem + 2px);\n}\n.form-control-lg, .input-group-lg > .form-control,\n.input-group-lg > .input-group-addon,\n.input-group-lg > .input-group-btn > .btn {\n  padding: 0.5rem 1rem;\n  font-size: 1.25rem;\n  line-height: 1.5;\n  border-radius: 0.3rem;\n}\nselect.form-control-lg:not([size]):not([multiple]), .input-group-lg > select.form-control:not([size]):not([multiple]),\n.input-group-lg > select.input-group-addon:not([size]):not([multiple]),\n.input-group-lg > .input-group-btn > select.btn:not([size]):not([multiple]) {\n  height: calc(2.875rem + 2px);\n}\n.form-group {\n  margin-bottom: 1rem;\n}\n.form-text {\n  display: block;\n  margin-top: 0.25rem;\n}\n.form-row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  margin-right: -5px;\n  margin-left: -5px;\n}\n.form-row > .col,\n  .form-row > [class*=\"col-\"] {\n    padding-right: 5px;\n    padding-left: 5px;\n}\n.form-check {\n  position: relative;\n  display: block;\n  margin-bottom: 0.5rem;\n}\n.form-check.disabled .form-check-label {\n    color: #868e96;\n}\n.form-check-label {\n  padding-left: 1.25rem;\n  margin-bottom: 0;\n}\n.form-check-input {\n  position: absolute;\n  margin-top: 0.25rem;\n  margin-left: -1.25rem;\n}\n.form-check-inline {\n  display: inline-block;\n}\n.form-check-inline .form-check-label {\n    vertical-align: middle;\n}\n.form-check-inline + .form-check-inline {\n    margin-left: 0.75rem;\n}\n.invalid-feedback {\n  display: none;\n  margin-top: .25rem;\n  font-size: .875rem;\n  color: #dc3545;\n}\n.invalid-tooltip {\n  position: absolute;\n  top: 100%;\n  z-index: 5;\n  display: none;\n  width: 250px;\n  padding: .5rem;\n  margin-top: .1rem;\n  font-size: .875rem;\n  line-height: 1;\n  color: #fff;\n  background-color: rgba(220, 53, 69, 0.8);\n  border-radius: .2rem;\n}\n.was-validated .form-control:valid, .form-control.is-valid, .was-validated\n.custom-select:valid,\n.custom-select.is-valid {\n  border-color: #28a745;\n}\n.was-validated .form-control:valid:focus, .form-control.is-valid:focus, .was-validated\n  .custom-select:valid:focus,\n  .custom-select.is-valid:focus {\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);\n            box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);\n}\n.was-validated .form-control:valid ~ .invalid-feedback,\n  .was-validated .form-control:valid ~ .invalid-tooltip, .form-control.is-valid ~ .invalid-feedback,\n  .form-control.is-valid ~ .invalid-tooltip, .was-validated\n  .custom-select:valid ~ .invalid-feedback,\n  .was-validated\n  .custom-select:valid ~ .invalid-tooltip,\n  .custom-select.is-valid ~ .invalid-feedback,\n  .custom-select.is-valid ~ .invalid-tooltip {\n    display: block;\n}\n.was-validated .form-check-input:valid + .form-check-label, .form-check-input.is-valid + .form-check-label {\n  color: #28a745;\n}\n.was-validated .custom-control-input:valid ~ .custom-control-indicator, .custom-control-input.is-valid ~ .custom-control-indicator {\n  background-color: rgba(40, 167, 69, 0.25);\n}\n.was-validated .custom-control-input:valid ~ .custom-control-description, .custom-control-input.is-valid ~ .custom-control-description {\n  color: #28a745;\n}\n.was-validated .custom-file-input:valid ~ .custom-file-control, .custom-file-input.is-valid ~ .custom-file-control {\n  border-color: #28a745;\n}\n.was-validated .custom-file-input:valid ~ .custom-file-control::before, .custom-file-input.is-valid ~ .custom-file-control::before {\n    border-color: inherit;\n}\n.was-validated .custom-file-input:valid:focus, .custom-file-input.is-valid:focus {\n  -webkit-box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);\n          box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);\n}\n.was-validated .form-control:invalid, .form-control.is-invalid, .was-validated\n.custom-select:invalid,\n.custom-select.is-invalid {\n  border-color: #dc3545;\n}\n.was-validated .form-control:invalid:focus, .form-control.is-invalid:focus, .was-validated\n  .custom-select:invalid:focus,\n  .custom-select.is-invalid:focus {\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\n            box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\n}\n.was-validated .form-control:invalid ~ .invalid-feedback,\n  .was-validated .form-control:invalid ~ .invalid-tooltip, .form-control.is-invalid ~ .invalid-feedback,\n  .form-control.is-invalid ~ .invalid-tooltip, .was-validated\n  .custom-select:invalid ~ .invalid-feedback,\n  .was-validated\n  .custom-select:invalid ~ .invalid-tooltip,\n  .custom-select.is-invalid ~ .invalid-feedback,\n  .custom-select.is-invalid ~ .invalid-tooltip {\n    display: block;\n}\n.was-validated .form-check-input:invalid + .form-check-label, .form-check-input.is-invalid + .form-check-label {\n  color: #dc3545;\n}\n.was-validated .custom-control-input:invalid ~ .custom-control-indicator, .custom-control-input.is-invalid ~ .custom-control-indicator {\n  background-color: rgba(220, 53, 69, 0.25);\n}\n.was-validated .custom-control-input:invalid ~ .custom-control-description, .custom-control-input.is-invalid ~ .custom-control-description {\n  color: #dc3545;\n}\n.was-validated .custom-file-input:invalid ~ .custom-file-control, .custom-file-input.is-invalid ~ .custom-file-control {\n  border-color: #dc3545;\n}\n.was-validated .custom-file-input:invalid ~ .custom-file-control::before, .custom-file-input.is-invalid ~ .custom-file-control::before {\n    border-color: inherit;\n}\n.was-validated .custom-file-input:invalid:focus, .custom-file-input.is-invalid:focus {\n  -webkit-box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\n          box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\n}\n.form-inline {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row wrap;\n          flex-flow: row wrap;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.form-inline .form-check {\n    width: 100%;\n}\n@media (min-width: 576px) {\n.form-inline label {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      margin-bottom: 0;\n}\n.form-inline .form-group {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-flex: 0;\n          -ms-flex: 0 0 auto;\n              flex: 0 0 auto;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-flow: row wrap;\n              flex-flow: row wrap;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      margin-bottom: 0;\n}\n.form-inline .form-control {\n      display: inline-block;\n      width: auto;\n      vertical-align: middle;\n}\n.form-inline .form-control-plaintext {\n      display: inline-block;\n}\n.form-inline .input-group {\n      width: auto;\n}\n.form-inline .form-control-label {\n      margin-bottom: 0;\n      vertical-align: middle;\n}\n.form-inline .form-check {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      width: auto;\n      margin-top: 0;\n      margin-bottom: 0;\n}\n.form-inline .form-check-label {\n      padding-left: 0;\n}\n.form-inline .form-check-input {\n      position: relative;\n      margin-top: 0;\n      margin-right: 0.25rem;\n      margin-left: 0;\n}\n.form-inline .custom-control {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      padding-left: 0;\n}\n.form-inline .custom-control-indicator {\n      position: static;\n      display: inline-block;\n      margin-right: 0.25rem;\n      vertical-align: text-bottom;\n}\n.form-inline .has-feedback .form-control-feedback {\n      top: 0;\n}\n}\n.btn {\n  display: inline-block;\n  font-weight: normal;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  border: 1px solid transparent;\n  padding: 0.5rem 0.75rem;\n  font-size: 1rem;\n  line-height: 1.25;\n  border-radius: 0.25rem;\n  -webkit-transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n}\n.btn:focus, .btn:hover {\n    text-decoration: none;\n}\n.btn:focus, .btn.focus {\n    outline: 0;\n    -webkit-box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);\n            box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);\n}\n.btn.disabled, .btn:disabled {\n    opacity: .65;\n}\n.btn:active, .btn.active {\n    background-image: none;\n}\na.btn.disabled,\nfieldset[disabled] a.btn {\n  pointer-events: none;\n}\n.btn-primary {\n  color: #fff;\n  background-color: #007bff;\n  border-color: #007bff;\n}\n.btn-primary:hover {\n    color: #fff;\n    background-color: #0069d9;\n    border-color: #0062cc;\n}\n.btn-primary:focus, .btn-primary.focus {\n    -webkit-box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5);\n            box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5);\n}\n.btn-primary.disabled, .btn-primary:disabled {\n    background-color: #007bff;\n    border-color: #007bff;\n}\n.btn-primary:active, .btn-primary.active,\n  .show > .btn-primary.dropdown-toggle {\n    background-color: #0069d9;\n    background-image: none;\n    border-color: #0062cc;\n}\n.btn-secondary {\n  color: #fff;\n  background-color: #868e96;\n  border-color: #868e96;\n}\n.btn-secondary:hover {\n    color: #fff;\n    background-color: #727b84;\n    border-color: #6c757d;\n}\n.btn-secondary:focus, .btn-secondary.focus {\n    -webkit-box-shadow: 0 0 0 3px rgba(134, 142, 150, 0.5);\n            box-shadow: 0 0 0 3px rgba(134, 142, 150, 0.5);\n}\n.btn-secondary.disabled, .btn-secondary:disabled {\n    background-color: #868e96;\n    border-color: #868e96;\n}\n.btn-secondary:active, .btn-secondary.active,\n  .show > .btn-secondary.dropdown-toggle {\n    background-color: #727b84;\n    background-image: none;\n    border-color: #6c757d;\n}\n.btn-success {\n  color: #fff;\n  background-color: #28a745;\n  border-color: #28a745;\n}\n.btn-success:hover {\n    color: #fff;\n    background-color: #218838;\n    border-color: #1e7e34;\n}\n.btn-success:focus, .btn-success.focus {\n    -webkit-box-shadow: 0 0 0 3px rgba(40, 167, 69, 0.5);\n            box-shadow: 0 0 0 3px rgba(40, 167, 69, 0.5);\n}\n.btn-success.disabled, .btn-success:disabled {\n    background-color: #28a745;\n    border-color: #28a745;\n}\n.btn-success:active, .btn-success.active,\n  .show > .btn-success.dropdown-toggle {\n    background-color: #218838;\n    background-image: none;\n    border-color: #1e7e34;\n}\n.btn-info {\n  color: #fff;\n  background-color: #17a2b8;\n  border-color: #17a2b8;\n}\n.btn-info:hover {\n    color: #fff;\n    background-color: #138496;\n    border-color: #117a8b;\n}\n.btn-info:focus, .btn-info.focus {\n    -webkit-box-shadow: 0 0 0 3px rgba(23, 162, 184, 0.5);\n            box-shadow: 0 0 0 3px rgba(23, 162, 184, 0.5);\n}\n.btn-info.disabled, .btn-info:disabled {\n    background-color: #17a2b8;\n    border-color: #17a2b8;\n}\n.btn-info:active, .btn-info.active,\n  .show > .btn-info.dropdown-toggle {\n    background-color: #138496;\n    background-image: none;\n    border-color: #117a8b;\n}\n.btn-warning {\n  color: #111;\n  background-color: #ffc107;\n  border-color: #ffc107;\n}\n.btn-warning:hover {\n    color: #111;\n    background-color: #e0a800;\n    border-color: #d39e00;\n}\n.btn-warning:focus, .btn-warning.focus {\n    -webkit-box-shadow: 0 0 0 3px rgba(255, 193, 7, 0.5);\n            box-shadow: 0 0 0 3px rgba(255, 193, 7, 0.5);\n}\n.btn-warning.disabled, .btn-warning:disabled {\n    background-color: #ffc107;\n    border-color: #ffc107;\n}\n.btn-warning:active, .btn-warning.active,\n  .show > .btn-warning.dropdown-toggle {\n    background-color: #e0a800;\n    background-image: none;\n    border-color: #d39e00;\n}\n.btn-danger {\n  color: #fff;\n  background-color: #dc3545;\n  border-color: #dc3545;\n}\n.btn-danger:hover {\n    color: #fff;\n    background-color: #c82333;\n    border-color: #bd2130;\n}\n.btn-danger:focus, .btn-danger.focus {\n    -webkit-box-shadow: 0 0 0 3px rgba(220, 53, 69, 0.5);\n            box-shadow: 0 0 0 3px rgba(220, 53, 69, 0.5);\n}\n.btn-danger.disabled, .btn-danger:disabled {\n    background-color: #dc3545;\n    border-color: #dc3545;\n}\n.btn-danger:active, .btn-danger.active,\n  .show > .btn-danger.dropdown-toggle {\n    background-color: #c82333;\n    background-image: none;\n    border-color: #bd2130;\n}\n.btn-light {\n  color: #111;\n  background-color: #f8f9fa;\n  border-color: #f8f9fa;\n}\n.btn-light:hover {\n    color: #111;\n    background-color: #e2e6ea;\n    border-color: #dae0e5;\n}\n.btn-light:focus, .btn-light.focus {\n    -webkit-box-shadow: 0 0 0 3px rgba(248, 249, 250, 0.5);\n            box-shadow: 0 0 0 3px rgba(248, 249, 250, 0.5);\n}\n.btn-light.disabled, .btn-light:disabled {\n    background-color: #f8f9fa;\n    border-color: #f8f9fa;\n}\n.btn-light:active, .btn-light.active,\n  .show > .btn-light.dropdown-toggle {\n    background-color: #e2e6ea;\n    background-image: none;\n    border-color: #dae0e5;\n}\n.btn-dark {\n  color: #fff;\n  background-color: #343a40;\n  border-color: #343a40;\n}\n.btn-dark:hover {\n    color: #fff;\n    background-color: #23272b;\n    border-color: #1d2124;\n}\n.btn-dark:focus, .btn-dark.focus {\n    -webkit-box-shadow: 0 0 0 3px rgba(52, 58, 64, 0.5);\n            box-shadow: 0 0 0 3px rgba(52, 58, 64, 0.5);\n}\n.btn-dark.disabled, .btn-dark:disabled {\n    background-color: #343a40;\n    border-color: #343a40;\n}\n.btn-dark:active, .btn-dark.active,\n  .show > .btn-dark.dropdown-toggle {\n    background-color: #23272b;\n    background-image: none;\n    border-color: #1d2124;\n}\n.btn-outline-primary {\n  color: #007bff;\n  background-color: transparent;\n  background-image: none;\n  border-color: #007bff;\n}\n.btn-outline-primary:hover {\n    color: #fff;\n    background-color: #007bff;\n    border-color: #007bff;\n}\n.btn-outline-primary:focus, .btn-outline-primary.focus {\n    -webkit-box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5);\n            box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5);\n}\n.btn-outline-primary.disabled, .btn-outline-primary:disabled {\n    color: #007bff;\n    background-color: transparent;\n}\n.btn-outline-primary:active, .btn-outline-primary.active,\n  .show > .btn-outline-primary.dropdown-toggle {\n    color: #fff;\n    background-color: #007bff;\n    border-color: #007bff;\n}\n.btn-outline-secondary {\n  color: #868e96;\n  background-color: transparent;\n  background-image: none;\n  border-color: #868e96;\n}\n.btn-outline-secondary:hover {\n    color: #fff;\n    background-color: #868e96;\n    border-color: #868e96;\n}\n.btn-outline-secondary:focus, .btn-outline-secondary.focus {\n    -webkit-box-shadow: 0 0 0 3px rgba(134, 142, 150, 0.5);\n            box-shadow: 0 0 0 3px rgba(134, 142, 150, 0.5);\n}\n.btn-outline-secondary.disabled, .btn-outline-secondary:disabled {\n    color: #868e96;\n    background-color: transparent;\n}\n.btn-outline-secondary:active, .btn-outline-secondary.active,\n  .show > .btn-outline-secondary.dropdown-toggle {\n    color: #fff;\n    background-color: #868e96;\n    border-color: #868e96;\n}\n.btn-outline-success {\n  color: #28a745;\n  background-color: transparent;\n  background-image: none;\n  border-color: #28a745;\n}\n.btn-outline-success:hover {\n    color: #fff;\n    background-color: #28a745;\n    border-color: #28a745;\n}\n.btn-outline-success:focus, .btn-outline-success.focus {\n    -webkit-box-shadow: 0 0 0 3px rgba(40, 167, 69, 0.5);\n            box-shadow: 0 0 0 3px rgba(40, 167, 69, 0.5);\n}\n.btn-outline-success.disabled, .btn-outline-success:disabled {\n    color: #28a745;\n    background-color: transparent;\n}\n.btn-outline-success:active, .btn-outline-success.active,\n  .show > .btn-outline-success.dropdown-toggle {\n    color: #fff;\n    background-color: #28a745;\n    border-color: #28a745;\n}\n.btn-outline-info {\n  color: #17a2b8;\n  background-color: transparent;\n  background-image: none;\n  border-color: #17a2b8;\n}\n.btn-outline-info:hover {\n    color: #fff;\n    background-color: #17a2b8;\n    border-color: #17a2b8;\n}\n.btn-outline-info:focus, .btn-outline-info.focus {\n    -webkit-box-shadow: 0 0 0 3px rgba(23, 162, 184, 0.5);\n            box-shadow: 0 0 0 3px rgba(23, 162, 184, 0.5);\n}\n.btn-outline-info.disabled, .btn-outline-info:disabled {\n    color: #17a2b8;\n    background-color: transparent;\n}\n.btn-outline-info:active, .btn-outline-info.active,\n  .show > .btn-outline-info.dropdown-toggle {\n    color: #fff;\n    background-color: #17a2b8;\n    border-color: #17a2b8;\n}\n.btn-outline-warning {\n  color: #ffc107;\n  background-color: transparent;\n  background-image: none;\n  border-color: #ffc107;\n}\n.btn-outline-warning:hover {\n    color: #fff;\n    background-color: #ffc107;\n    border-color: #ffc107;\n}\n.btn-outline-warning:focus, .btn-outline-warning.focus {\n    -webkit-box-shadow: 0 0 0 3px rgba(255, 193, 7, 0.5);\n            box-shadow: 0 0 0 3px rgba(255, 193, 7, 0.5);\n}\n.btn-outline-warning.disabled, .btn-outline-warning:disabled {\n    color: #ffc107;\n    background-color: transparent;\n}\n.btn-outline-warning:active, .btn-outline-warning.active,\n  .show > .btn-outline-warning.dropdown-toggle {\n    color: #fff;\n    background-color: #ffc107;\n    border-color: #ffc107;\n}\n.btn-outline-danger {\n  color: #dc3545;\n  background-color: transparent;\n  background-image: none;\n  border-color: #dc3545;\n}\n.btn-outline-danger:hover {\n    color: #fff;\n    background-color: #dc3545;\n    border-color: #dc3545;\n}\n.btn-outline-danger:focus, .btn-outline-danger.focus {\n    -webkit-box-shadow: 0 0 0 3px rgba(220, 53, 69, 0.5);\n            box-shadow: 0 0 0 3px rgba(220, 53, 69, 0.5);\n}\n.btn-outline-danger.disabled, .btn-outline-danger:disabled {\n    color: #dc3545;\n    background-color: transparent;\n}\n.btn-outline-danger:active, .btn-outline-danger.active,\n  .show > .btn-outline-danger.dropdown-toggle {\n    color: #fff;\n    background-color: #dc3545;\n    border-color: #dc3545;\n}\n.btn-outline-light {\n  color: #f8f9fa;\n  background-color: transparent;\n  background-image: none;\n  border-color: #f8f9fa;\n}\n.btn-outline-light:hover {\n    color: #fff;\n    background-color: #f8f9fa;\n    border-color: #f8f9fa;\n}\n.btn-outline-light:focus, .btn-outline-light.focus {\n    -webkit-box-shadow: 0 0 0 3px rgba(248, 249, 250, 0.5);\n            box-shadow: 0 0 0 3px rgba(248, 249, 250, 0.5);\n}\n.btn-outline-light.disabled, .btn-outline-light:disabled {\n    color: #f8f9fa;\n    background-color: transparent;\n}\n.btn-outline-light:active, .btn-outline-light.active,\n  .show > .btn-outline-light.dropdown-toggle {\n    color: #fff;\n    background-color: #f8f9fa;\n    border-color: #f8f9fa;\n}\n.btn-outline-dark {\n  color: #343a40;\n  background-color: transparent;\n  background-image: none;\n  border-color: #343a40;\n}\n.btn-outline-dark:hover {\n    color: #fff;\n    background-color: #343a40;\n    border-color: #343a40;\n}\n.btn-outline-dark:focus, .btn-outline-dark.focus {\n    -webkit-box-shadow: 0 0 0 3px rgba(52, 58, 64, 0.5);\n            box-shadow: 0 0 0 3px rgba(52, 58, 64, 0.5);\n}\n.btn-outline-dark.disabled, .btn-outline-dark:disabled {\n    color: #343a40;\n    background-color: transparent;\n}\n.btn-outline-dark:active, .btn-outline-dark.active,\n  .show > .btn-outline-dark.dropdown-toggle {\n    color: #fff;\n    background-color: #343a40;\n    border-color: #343a40;\n}\n.btn-link {\n  font-weight: normal;\n  color: #007bff;\n  border-radius: 0;\n}\n.btn-link, .btn-link:active, .btn-link.active, .btn-link:disabled {\n    background-color: transparent;\n}\n.btn-link, .btn-link:focus, .btn-link:active {\n    border-color: transparent;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n}\n.btn-link:hover {\n    border-color: transparent;\n}\n.btn-link:focus, .btn-link:hover {\n    color: #0056b3;\n    text-decoration: underline;\n    background-color: transparent;\n}\n.btn-link:disabled {\n    color: #868e96;\n}\n.btn-link:disabled:focus, .btn-link:disabled:hover {\n      text-decoration: none;\n}\n.btn-lg, .btn-group-lg > .btn {\n  padding: 0.5rem 1rem;\n  font-size: 1.25rem;\n  line-height: 1.5;\n  border-radius: 0.3rem;\n}\n.btn-sm, .btn-group-sm > .btn {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  border-radius: 0.2rem;\n}\n.btn-block {\n  display: block;\n  width: 100%;\n}\n.btn-block + .btn-block {\n  margin-top: 0.5rem;\n}\ninput[type=\"submit\"].btn-block,\ninput[type=\"reset\"].btn-block,\ninput[type=\"button\"].btn-block {\n  width: 100%;\n}\n.fade {\n  opacity: 0;\n  -webkit-transition: opacity 0.15s linear;\n  transition: opacity 0.15s linear;\n}\n.fade.show {\n    opacity: 1;\n}\n.collapse {\n  display: none;\n}\n.collapse.show {\n    display: block;\n}\ntr.collapse.show {\n  display: table-row;\n}\ntbody.collapse.show {\n  display: table-row-group;\n}\n.collapsing {\n  position: relative;\n  height: 0;\n  overflow: hidden;\n  -webkit-transition: height 0.35s ease;\n  transition: height 0.35s ease;\n}\n.dropup,\n.dropdown {\n  position: relative;\n}\n.dropdown-toggle::after {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0.3em solid;\n  border-right: 0.3em solid transparent;\n  border-left: 0.3em solid transparent;\n}\n.dropdown-toggle:empty::after {\n  margin-left: 0;\n}\n.dropup .dropdown-menu {\n  margin-top: 0;\n  margin-bottom: 0.125rem;\n}\n.dropup .dropdown-toggle::after {\n  border-top: 0;\n  border-bottom: 0.3em solid;\n}\n.dropdown-menu {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1000;\n  display: none;\n  float: left;\n  min-width: 10rem;\n  padding: 0.5rem 0;\n  margin: 0.125rem 0 0;\n  font-size: 1rem;\n  color: #212529;\n  text-align: left;\n  list-style: none;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  border-radius: 0.25rem;\n}\n.dropdown-divider {\n  height: 0;\n  margin: 0.5rem 0;\n  overflow: hidden;\n  border-top: 1px solid #e9ecef;\n}\n.dropdown-item {\n  display: block;\n  width: 100%;\n  padding: 0.25rem 1.5rem;\n  clear: both;\n  font-weight: normal;\n  color: #212529;\n  text-align: inherit;\n  white-space: nowrap;\n  background: none;\n  border: 0;\n}\n.dropdown-item:focus, .dropdown-item:hover {\n    color: #16181b;\n    text-decoration: none;\n    background-color: #f8f9fa;\n}\n.dropdown-item.active, .dropdown-item:active {\n    color: #fff;\n    text-decoration: none;\n    background-color: #007bff;\n}\n.dropdown-item.disabled, .dropdown-item:disabled {\n    color: #868e96;\n    background-color: transparent;\n}\n.show > a {\n  outline: 0;\n}\n.dropdown-menu.show {\n  display: block;\n}\n.dropdown-header {\n  display: block;\n  padding: 0.5rem 1.5rem;\n  margin-bottom: 0;\n  font-size: 0.875rem;\n  color: #868e96;\n  white-space: nowrap;\n}\n.btn-group,\n.btn-group-vertical {\n  position: relative;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  vertical-align: middle;\n}\n.btn-group > .btn,\n  .btn-group-vertical > .btn {\n    position: relative;\n    -webkit-box-flex: 0;\n        -ms-flex: 0 1 auto;\n            flex: 0 1 auto;\n    margin-bottom: 0;\n}\n.btn-group > .btn:hover,\n    .btn-group-vertical > .btn:hover {\n      z-index: 2;\n}\n.btn-group > .btn:focus, .btn-group > .btn:active, .btn-group > .btn.active,\n    .btn-group-vertical > .btn:focus,\n    .btn-group-vertical > .btn:active,\n    .btn-group-vertical > .btn.active {\n      z-index: 2;\n}\n.btn-group .btn + .btn,\n  .btn-group .btn + .btn-group,\n  .btn-group .btn-group + .btn,\n  .btn-group .btn-group + .btn-group,\n  .btn-group-vertical .btn + .btn,\n  .btn-group-vertical .btn + .btn-group,\n  .btn-group-vertical .btn-group + .btn,\n  .btn-group-vertical .btn-group + .btn-group {\n    margin-left: -1px;\n}\n.btn-toolbar {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n}\n.btn-toolbar .input-group {\n    width: auto;\n}\n.btn-group > .btn:not(:first-child):not(:last-child):not(.dropdown-toggle) {\n  border-radius: 0;\n}\n.btn-group > .btn:first-child {\n  margin-left: 0;\n}\n.btn-group > .btn:first-child:not(:last-child):not(.dropdown-toggle) {\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n}\n.btn-group > .btn:last-child:not(:first-child),\n.btn-group > .dropdown-toggle:not(:first-child) {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.btn-group > .btn-group {\n  float: left;\n}\n.btn-group > .btn-group:not(:first-child):not(:last-child) > .btn {\n  border-radius: 0;\n}\n.btn-group > .btn-group:first-child:not(:last-child) > .btn:last-child,\n.btn-group > .btn-group:first-child:not(:last-child) > .dropdown-toggle {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.btn-group > .btn-group:last-child:not(:first-child) > .btn:first-child {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.btn + .dropdown-toggle-split {\n  padding-right: 0.5625rem;\n  padding-left: 0.5625rem;\n}\n.btn + .dropdown-toggle-split::after {\n    margin-left: 0;\n}\n.btn-sm + .dropdown-toggle-split, .btn-group-sm > .btn + .dropdown-toggle-split {\n  padding-right: 0.375rem;\n  padding-left: 0.375rem;\n}\n.btn-lg + .dropdown-toggle-split, .btn-group-lg > .btn + .dropdown-toggle-split {\n  padding-right: 0.75rem;\n  padding-left: 0.75rem;\n}\n.btn-group-vertical {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.btn-group-vertical .btn,\n  .btn-group-vertical .btn-group {\n    width: 100%;\n}\n.btn-group-vertical > .btn + .btn,\n  .btn-group-vertical > .btn + .btn-group,\n  .btn-group-vertical > .btn-group + .btn,\n  .btn-group-vertical > .btn-group + .btn-group {\n    margin-top: -1px;\n    margin-left: 0;\n}\n.btn-group-vertical > .btn:not(:first-child):not(:last-child) {\n  border-radius: 0;\n}\n.btn-group-vertical > .btn:first-child:not(:last-child) {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.btn-group-vertical > .btn:last-child:not(:first-child) {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.btn-group-vertical > .btn-group:not(:first-child):not(:last-child) > .btn {\n  border-radius: 0;\n}\n.btn-group-vertical > .btn-group:first-child:not(:last-child) > .btn:last-child,\n.btn-group-vertical > .btn-group:first-child:not(:last-child) > .dropdown-toggle {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.btn-group-vertical > .btn-group:last-child:not(:first-child) > .btn:first-child {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n[data-toggle=\"buttons\"] > .btn input[type=\"radio\"],\n[data-toggle=\"buttons\"] > .btn input[type=\"checkbox\"],\n[data-toggle=\"buttons\"] > .btn-group > .btn input[type=\"radio\"],\n[data-toggle=\"buttons\"] > .btn-group > .btn input[type=\"checkbox\"] {\n  position: absolute;\n  clip: rect(0, 0, 0, 0);\n  pointer-events: none;\n}\n.input-group {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n}\n.input-group .form-control {\n    position: relative;\n    z-index: 2;\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n    width: 1%;\n    margin-bottom: 0;\n}\n.input-group .form-control:focus, .input-group .form-control:active, .input-group .form-control:hover {\n      z-index: 3;\n}\n.input-group-addon,\n.input-group-btn,\n.input-group .form-control {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.input-group-addon:not(:first-child):not(:last-child),\n  .input-group-btn:not(:first-child):not(:last-child),\n  .input-group .form-control:not(:first-child):not(:last-child) {\n    border-radius: 0;\n}\n.input-group-addon,\n.input-group-btn {\n  white-space: nowrap;\n  vertical-align: middle;\n}\n.input-group-addon {\n  padding: 0.5rem 0.75rem;\n  margin-bottom: 0;\n  font-size: 1rem;\n  font-weight: normal;\n  line-height: 1.25;\n  color: #495057;\n  text-align: center;\n  background-color: #e9ecef;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  border-radius: 0.25rem;\n}\n.input-group-addon.form-control-sm,\n  .input-group-sm > .input-group-addon,\n  .input-group-sm > .input-group-btn > .input-group-addon.btn {\n    padding: 0.25rem 0.5rem;\n    font-size: 0.875rem;\n    border-radius: 0.2rem;\n}\n.input-group-addon.form-control-lg,\n  .input-group-lg > .input-group-addon,\n  .input-group-lg > .input-group-btn > .input-group-addon.btn {\n    padding: 0.5rem 1rem;\n    font-size: 1.25rem;\n    border-radius: 0.3rem;\n}\n.input-group-addon input[type=\"radio\"],\n  .input-group-addon input[type=\"checkbox\"] {\n    margin-top: 0;\n}\n.input-group .form-control:not(:last-child),\n.input-group-addon:not(:last-child),\n.input-group-btn:not(:last-child) > .btn,\n.input-group-btn:not(:last-child) > .btn-group > .btn,\n.input-group-btn:not(:last-child) > .dropdown-toggle,\n.input-group-btn:not(:first-child) > .btn:not(:last-child):not(.dropdown-toggle),\n.input-group-btn:not(:first-child) > .btn-group:not(:last-child) > .btn {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.input-group-addon:not(:last-child) {\n  border-right: 0;\n}\n.input-group .form-control:not(:first-child),\n.input-group-addon:not(:first-child),\n.input-group-btn:not(:first-child) > .btn,\n.input-group-btn:not(:first-child) > .btn-group > .btn,\n.input-group-btn:not(:first-child) > .dropdown-toggle,\n.input-group-btn:not(:last-child) > .btn:not(:first-child),\n.input-group-btn:not(:last-child) > .btn-group:not(:first-child) > .btn {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.form-control + .input-group-addon:not(:first-child) {\n  border-left: 0;\n}\n.input-group-btn {\n  position: relative;\n  font-size: 0;\n  white-space: nowrap;\n}\n.input-group-btn > .btn {\n    position: relative;\n    background-clip: padding-box;\n    border: 1px solid rgba(0, 0, 0, 0.15);\n}\n.input-group-btn > .btn + .btn {\n      margin-left: -1px;\n}\n.input-group-btn > .btn:focus, .input-group-btn > .btn:active, .input-group-btn > .btn:hover {\n      z-index: 3;\n}\n.input-group-btn:not(:last-child) > .btn,\n  .input-group-btn:not(:last-child) > .btn-group {\n    margin-right: -1px;\n}\n.input-group-btn:not(:first-child) > .btn,\n  .input-group-btn:not(:first-child) > .btn-group {\n    z-index: 2;\n    margin-left: -1px;\n}\n.input-group-btn:not(:first-child) > .btn:focus, .input-group-btn:not(:first-child) > .btn:active, .input-group-btn:not(:first-child) > .btn:hover,\n    .input-group-btn:not(:first-child) > .btn-group:focus,\n    .input-group-btn:not(:first-child) > .btn-group:active,\n    .input-group-btn:not(:first-child) > .btn-group:hover {\n      z-index: 3;\n}\n.custom-control {\n  position: relative;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  min-height: 1.5rem;\n  padding-left: 1.5rem;\n  margin-right: 1rem;\n}\n.custom-control-input {\n  position: absolute;\n  z-index: -1;\n  opacity: 0;\n}\n.custom-control-input:checked ~ .custom-control-indicator {\n    color: #fff;\n    background-color: #007bff;\n}\n.custom-control-input:focus ~ .custom-control-indicator {\n    -webkit-box-shadow: 0 0 0 1px #fff, 0 0 0 3px #007bff;\n            box-shadow: 0 0 0 1px #fff, 0 0 0 3px #007bff;\n}\n.custom-control-input:active ~ .custom-control-indicator {\n    color: #fff;\n    background-color: #b3d7ff;\n}\n.custom-control-input:disabled ~ .custom-control-indicator {\n    background-color: #e9ecef;\n}\n.custom-control-input:disabled ~ .custom-control-description {\n    color: #868e96;\n}\n.custom-control-indicator {\n  position: absolute;\n  top: 0.25rem;\n  left: 0;\n  display: block;\n  width: 1rem;\n  height: 1rem;\n  pointer-events: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  background-color: #ddd;\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: 50% 50%;\n}\n.custom-checkbox .custom-control-indicator {\n  border-radius: 0.25rem;\n}\n.custom-checkbox .custom-control-input:checked ~ .custom-control-indicator {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E\");\n}\n.custom-checkbox .custom-control-input:indeterminate ~ .custom-control-indicator {\n  background-color: #007bff;\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 4'%3E%3Cpath stroke='%23fff' d='M0 2h4'/%3E%3C/svg%3E\");\n}\n.custom-radio .custom-control-indicator {\n  border-radius: 50%;\n}\n.custom-radio .custom-control-input:checked ~ .custom-control-indicator {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='%23fff'/%3E%3C/svg%3E\");\n}\n.custom-controls-stacked {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n.custom-controls-stacked .custom-control {\n    margin-bottom: 0.25rem;\n}\n.custom-controls-stacked .custom-control + .custom-control {\n      margin-left: 0;\n}\n.custom-select {\n  display: inline-block;\n  max-width: 100%;\n  height: calc(2.25rem + 2px);\n  padding: 0.375rem 1.75rem 0.375rem 0.75rem;\n  line-height: 1.25;\n  color: #495057;\n  vertical-align: middle;\n  background: #fff url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='%23333' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E\") no-repeat right 0.75rem center;\n  background-clip: padding-box;\n  background-size: 8px 10px;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  border-radius: 0.25rem;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n}\n.custom-select:focus {\n    border-color: #80bdff;\n    outline: none;\n}\n.custom-select:focus::-ms-value {\n      color: #495057;\n      background-color: #fff;\n}\n.custom-select:disabled {\n    color: #868e96;\n    background-color: #e9ecef;\n}\n.custom-select::-ms-expand {\n    opacity: 0;\n}\n.custom-select-sm {\n  height: calc(1.8125rem + 2px);\n  padding-top: 0.375rem;\n  padding-bottom: 0.375rem;\n  font-size: 75%;\n}\n.custom-file {\n  position: relative;\n  display: inline-block;\n  max-width: 100%;\n  height: calc(2.25rem + 2px);\n  margin-bottom: 0;\n}\n.custom-file-input {\n  min-width: 14rem;\n  max-width: 100%;\n  height: calc(2.25rem + 2px);\n  margin: 0;\n  opacity: 0;\n}\n.custom-file-input:focus ~ .custom-file-control {\n    -webkit-box-shadow: 0 0 0 0.075rem #fff, 0 0 0 0.2rem #007bff;\n            box-shadow: 0 0 0 0.075rem #fff, 0 0 0 0.2rem #007bff;\n}\n.custom-file-control {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 5;\n  height: calc(2.25rem + 2px);\n  padding: 0.5rem 0.75rem;\n  overflow: hidden;\n  line-height: 1.25;\n  color: #495057;\n  pointer-events: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  border-radius: 0.25rem;\n}\n.custom-file-control:lang(en):empty::after {\n    content: \"Choose file...\";\n}\n.custom-file-control::before {\n    position: absolute;\n    top: 0;\n    right: 0;\n    z-index: 6;\n    display: block;\n    height: calc(2.25rem + 2px);\n    padding: 0.5rem 0.75rem;\n    line-height: 1.25;\n    color: #495057;\n    background-color: #e9ecef;\n    border-left: 1px solid rgba(0, 0, 0, 0.15);\n}\n.custom-file-control:lang(en)::before {\n    content: \"Browse\";\n}\n.nav {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none;\n}\n.nav-link {\n  display: block;\n  padding: 0.5rem 1rem;\n}\n.nav-link:focus, .nav-link:hover {\n    text-decoration: none;\n}\n.nav-link.disabled {\n    color: #868e96;\n}\n.nav-tabs {\n  border-bottom: 1px solid #ddd;\n}\n.nav-tabs .nav-item {\n    margin-bottom: -1px;\n}\n.nav-tabs .nav-link {\n    border: 1px solid transparent;\n    border-top-left-radius: 0.25rem;\n    border-top-right-radius: 0.25rem;\n}\n.nav-tabs .nav-link:focus, .nav-tabs .nav-link:hover {\n      border-color: #e9ecef #e9ecef #ddd;\n}\n.nav-tabs .nav-link.disabled {\n      color: #868e96;\n      background-color: transparent;\n      border-color: transparent;\n}\n.nav-tabs .nav-link.active,\n  .nav-tabs .nav-item.show .nav-link {\n    color: #495057;\n    background-color: #fff;\n    border-color: #ddd #ddd #fff;\n}\n.nav-tabs .dropdown-menu {\n    margin-top: -1px;\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n}\n.nav-pills .nav-link {\n  border-radius: 0.25rem;\n}\n.nav-pills .nav-link.active,\n  .show > .nav-pills .nav-link {\n    color: #fff;\n    background-color: #007bff;\n}\n.nav-fill .nav-item {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  text-align: center;\n}\n.nav-justified .nav-item {\n  -ms-flex-preferred-size: 0;\n      flex-basis: 0;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  text-align: center;\n}\n.tab-content > .tab-pane {\n  display: none;\n}\n.tab-content > .active {\n  display: block;\n}\n.navbar {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding: 0.5rem 1rem;\n}\n.navbar > .container,\n  .navbar > .container-fluid {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n}\n.navbar-brand {\n  display: inline-block;\n  padding-top: 0.3125rem;\n  padding-bottom: 0.3125rem;\n  margin-right: 1rem;\n  font-size: 1.25rem;\n  line-height: inherit;\n  white-space: nowrap;\n}\n.navbar-brand:focus, .navbar-brand:hover {\n    text-decoration: none;\n}\n.navbar-nav {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none;\n}\n.navbar-nav .nav-link {\n    padding-right: 0;\n    padding-left: 0;\n}\n.navbar-nav .dropdown-menu {\n    position: static;\n    float: none;\n}\n.navbar-text {\n  display: inline-block;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n.navbar-collapse {\n  -ms-flex-preferred-size: 100%;\n      flex-basis: 100%;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.navbar-toggler {\n  padding: 0.25rem 0.75rem;\n  font-size: 1.25rem;\n  line-height: 1;\n  background: transparent;\n  border: 1px solid transparent;\n  border-radius: 0.25rem;\n}\n.navbar-toggler:focus, .navbar-toggler:hover {\n    text-decoration: none;\n}\n.navbar-toggler-icon {\n  display: inline-block;\n  width: 1.5em;\n  height: 1.5em;\n  vertical-align: middle;\n  content: \"\";\n  background: no-repeat center center;\n  background-size: 100% 100%;\n}\n@media (max-width: 575px) {\n.navbar-expand-sm > .container,\n  .navbar-expand-sm > .container-fluid {\n    padding-right: 0;\n    padding-left: 0;\n}\n}\n@media (min-width: 576px) {\n.navbar-expand-sm {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -ms-flex-wrap: nowrap;\n        flex-wrap: nowrap;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n}\n.navbar-expand-sm .navbar-nav {\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n}\n.navbar-expand-sm .navbar-nav .dropdown-menu {\n        position: absolute;\n}\n.navbar-expand-sm .navbar-nav .dropdown-menu-right {\n        right: 0;\n        left: auto;\n}\n.navbar-expand-sm .navbar-nav .nav-link {\n        padding-right: .5rem;\n        padding-left: .5rem;\n}\n.navbar-expand-sm > .container,\n    .navbar-expand-sm > .container-fluid {\n      -ms-flex-wrap: nowrap;\n          flex-wrap: nowrap;\n}\n.navbar-expand-sm .navbar-collapse {\n      display: -webkit-box !important;\n      display: -ms-flexbox !important;\n      display: flex !important;\n}\n.navbar-expand-sm .navbar-toggler {\n      display: none;\n}\n}\n@media (max-width: 767px) {\n.navbar-expand-md > .container,\n  .navbar-expand-md > .container-fluid {\n    padding-right: 0;\n    padding-left: 0;\n}\n}\n@media (min-width: 768px) {\n.navbar-expand-md {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -ms-flex-wrap: nowrap;\n        flex-wrap: nowrap;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n}\n.navbar-expand-md .navbar-nav {\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n}\n.navbar-expand-md .navbar-nav .dropdown-menu {\n        position: absolute;\n}\n.navbar-expand-md .navbar-nav .dropdown-menu-right {\n        right: 0;\n        left: auto;\n}\n.navbar-expand-md .navbar-nav .nav-link {\n        padding-right: .5rem;\n        padding-left: .5rem;\n}\n.navbar-expand-md > .container,\n    .navbar-expand-md > .container-fluid {\n      -ms-flex-wrap: nowrap;\n          flex-wrap: nowrap;\n}\n.navbar-expand-md .navbar-collapse {\n      display: -webkit-box !important;\n      display: -ms-flexbox !important;\n      display: flex !important;\n}\n.navbar-expand-md .navbar-toggler {\n      display: none;\n}\n}\n@media (max-width: 991px) {\n.navbar-expand-lg > .container,\n  .navbar-expand-lg > .container-fluid {\n    padding-right: 0;\n    padding-left: 0;\n}\n}\n@media (min-width: 992px) {\n.navbar-expand-lg {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -ms-flex-wrap: nowrap;\n        flex-wrap: nowrap;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n}\n.navbar-expand-lg .navbar-nav {\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n}\n.navbar-expand-lg .navbar-nav .dropdown-menu {\n        position: absolute;\n}\n.navbar-expand-lg .navbar-nav .dropdown-menu-right {\n        right: 0;\n        left: auto;\n}\n.navbar-expand-lg .navbar-nav .nav-link {\n        padding-right: .5rem;\n        padding-left: .5rem;\n}\n.navbar-expand-lg > .container,\n    .navbar-expand-lg > .container-fluid {\n      -ms-flex-wrap: nowrap;\n          flex-wrap: nowrap;\n}\n.navbar-expand-lg .navbar-collapse {\n      display: -webkit-box !important;\n      display: -ms-flexbox !important;\n      display: flex !important;\n}\n.navbar-expand-lg .navbar-toggler {\n      display: none;\n}\n}\n@media (max-width: 1199px) {\n.navbar-expand-xl > .container,\n  .navbar-expand-xl > .container-fluid {\n    padding-right: 0;\n    padding-left: 0;\n}\n}\n@media (min-width: 1200px) {\n.navbar-expand-xl {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -ms-flex-wrap: nowrap;\n        flex-wrap: nowrap;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n}\n.navbar-expand-xl .navbar-nav {\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n}\n.navbar-expand-xl .navbar-nav .dropdown-menu {\n        position: absolute;\n}\n.navbar-expand-xl .navbar-nav .dropdown-menu-right {\n        right: 0;\n        left: auto;\n}\n.navbar-expand-xl .navbar-nav .nav-link {\n        padding-right: .5rem;\n        padding-left: .5rem;\n}\n.navbar-expand-xl > .container,\n    .navbar-expand-xl > .container-fluid {\n      -ms-flex-wrap: nowrap;\n          flex-wrap: nowrap;\n}\n.navbar-expand-xl .navbar-collapse {\n      display: -webkit-box !important;\n      display: -ms-flexbox !important;\n      display: flex !important;\n}\n.navbar-expand-xl .navbar-toggler {\n      display: none;\n}\n}\n.navbar-expand {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n}\n.navbar-expand > .container,\n  .navbar-expand > .container-fluid {\n    padding-right: 0;\n    padding-left: 0;\n}\n.navbar-expand .navbar-nav {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n}\n.navbar-expand .navbar-nav .dropdown-menu {\n      position: absolute;\n}\n.navbar-expand .navbar-nav .dropdown-menu-right {\n      right: 0;\n      left: auto;\n}\n.navbar-expand .navbar-nav .nav-link {\n      padding-right: .5rem;\n      padding-left: .5rem;\n}\n.navbar-expand > .container,\n  .navbar-expand > .container-fluid {\n    -ms-flex-wrap: nowrap;\n        flex-wrap: nowrap;\n}\n.navbar-expand .navbar-collapse {\n    display: -webkit-box !important;\n    display: -ms-flexbox !important;\n    display: flex !important;\n}\n.navbar-expand .navbar-toggler {\n    display: none;\n}\n.navbar-light .navbar-brand {\n  color: rgba(0, 0, 0, 0.9);\n}\n.navbar-light .navbar-brand:focus, .navbar-light .navbar-brand:hover {\n    color: rgba(0, 0, 0, 0.9);\n}\n.navbar-light .navbar-nav .nav-link {\n  color: rgba(0, 0, 0, 0.5);\n}\n.navbar-light .navbar-nav .nav-link:focus, .navbar-light .navbar-nav .nav-link:hover {\n    color: rgba(0, 0, 0, 0.7);\n}\n.navbar-light .navbar-nav .nav-link.disabled {\n    color: rgba(0, 0, 0, 0.3);\n}\n.navbar-light .navbar-nav .show > .nav-link,\n.navbar-light .navbar-nav .active > .nav-link,\n.navbar-light .navbar-nav .nav-link.show,\n.navbar-light .navbar-nav .nav-link.active {\n  color: rgba(0, 0, 0, 0.9);\n}\n.navbar-light .navbar-toggler {\n  color: rgba(0, 0, 0, 0.5);\n  border-color: rgba(0, 0, 0, 0.1);\n}\n.navbar-light .navbar-toggler-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(0, 0, 0, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\");\n}\n.navbar-light .navbar-text {\n  color: rgba(0, 0, 0, 0.5);\n}\n.navbar-dark .navbar-brand {\n  color: white;\n}\n.navbar-dark .navbar-brand:focus, .navbar-dark .navbar-brand:hover {\n    color: white;\n}\n.navbar-dark .navbar-nav .nav-link {\n  color: rgba(255, 255, 255, 0.5);\n}\n.navbar-dark .navbar-nav .nav-link:focus, .navbar-dark .navbar-nav .nav-link:hover {\n    color: rgba(255, 255, 255, 0.75);\n}\n.navbar-dark .navbar-nav .nav-link.disabled {\n    color: rgba(255, 255, 255, 0.25);\n}\n.navbar-dark .navbar-nav .show > .nav-link,\n.navbar-dark .navbar-nav .active > .nav-link,\n.navbar-dark .navbar-nav .nav-link.show,\n.navbar-dark .navbar-nav .nav-link.active {\n  color: white;\n}\n.navbar-dark .navbar-toggler {\n  color: rgba(255, 255, 255, 0.5);\n  border-color: rgba(255, 255, 255, 0.1);\n}\n.navbar-dark .navbar-toggler-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255, 255, 255, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\");\n}\n.navbar-dark .navbar-text {\n  color: rgba(255, 255, 255, 0.5);\n}\n.card {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  min-width: 0;\n  word-wrap: break-word;\n  background-color: #fff;\n  background-clip: border-box;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  border-radius: 0.25rem;\n}\n.card-body {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  padding: 1.25rem;\n}\n.card-title {\n  margin-bottom: 0.75rem;\n}\n.card-subtitle {\n  margin-top: -0.375rem;\n  margin-bottom: 0;\n}\n.card-text:last-child {\n  margin-bottom: 0;\n}\n.card-link:hover {\n  text-decoration: none;\n}\n.card-link + .card-link {\n  margin-left: 1.25rem;\n}\n.card > .list-group:first-child .list-group-item:first-child {\n  border-top-left-radius: 0.25rem;\n  border-top-right-radius: 0.25rem;\n}\n.card > .list-group:last-child .list-group-item:last-child {\n  border-bottom-right-radius: 0.25rem;\n  border-bottom-left-radius: 0.25rem;\n}\n.card-header {\n  padding: 0.75rem 1.25rem;\n  margin-bottom: 0;\n  background-color: rgba(0, 0, 0, 0.03);\n  border-bottom: 1px solid rgba(0, 0, 0, 0.125);\n}\n.card-header:first-child {\n    border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0;\n}\n.card-footer {\n  padding: 0.75rem 1.25rem;\n  background-color: rgba(0, 0, 0, 0.03);\n  border-top: 1px solid rgba(0, 0, 0, 0.125);\n}\n.card-footer:last-child {\n    border-radius: 0 0 calc(0.25rem - 1px) calc(0.25rem - 1px);\n}\n.card-header-tabs {\n  margin-right: -0.625rem;\n  margin-bottom: -0.75rem;\n  margin-left: -0.625rem;\n  border-bottom: 0;\n}\n.card-header-pills {\n  margin-right: -0.625rem;\n  margin-left: -0.625rem;\n}\n.card-img-overlay {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  padding: 1.25rem;\n}\n.card-img {\n  width: 100%;\n  border-radius: calc(0.25rem - 1px);\n}\n.card-img-top {\n  width: 100%;\n  border-top-left-radius: calc(0.25rem - 1px);\n  border-top-right-radius: calc(0.25rem - 1px);\n}\n.card-img-bottom {\n  width: 100%;\n  border-bottom-right-radius: calc(0.25rem - 1px);\n  border-bottom-left-radius: calc(0.25rem - 1px);\n}\n@media (min-width: 576px) {\n.card-deck {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: row wrap;\n            flex-flow: row wrap;\n    margin-right: -15px;\n    margin-left: -15px;\n}\n.card-deck .card {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-flex: 1;\n          -ms-flex: 1 0 0%;\n              flex: 1 0 0%;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      margin-right: 15px;\n      margin-left: 15px;\n}\n}\n@media (min-width: 576px) {\n.card-group {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: row wrap;\n            flex-flow: row wrap;\n}\n.card-group .card {\n      -webkit-box-flex: 1;\n          -ms-flex: 1 0 0%;\n              flex: 1 0 0%;\n}\n.card-group .card + .card {\n        margin-left: 0;\n        border-left: 0;\n}\n.card-group .card:first-child {\n        border-top-right-radius: 0;\n        border-bottom-right-radius: 0;\n}\n.card-group .card:first-child .card-img-top {\n          border-top-right-radius: 0;\n}\n.card-group .card:first-child .card-img-bottom {\n          border-bottom-right-radius: 0;\n}\n.card-group .card:last-child {\n        border-top-left-radius: 0;\n        border-bottom-left-radius: 0;\n}\n.card-group .card:last-child .card-img-top {\n          border-top-left-radius: 0;\n}\n.card-group .card:last-child .card-img-bottom {\n          border-bottom-left-radius: 0;\n}\n.card-group .card:not(:first-child):not(:last-child) {\n        border-radius: 0;\n}\n.card-group .card:not(:first-child):not(:last-child) .card-img-top,\n        .card-group .card:not(:first-child):not(:last-child) .card-img-bottom {\n          border-radius: 0;\n}\n}\n.card-columns .card {\n  margin-bottom: 0.75rem;\n}\n@media (min-width: 576px) {\n.card-columns {\n    -webkit-column-count: 3;\n            column-count: 3;\n    -webkit-column-gap: 1.25rem;\n            column-gap: 1.25rem;\n}\n.card-columns .card {\n      display: inline-block;\n      width: 100%;\n}\n}\n.breadcrumb {\n  padding: 0.75rem 1rem;\n  margin-bottom: 1rem;\n  list-style: none;\n  background-color: #e9ecef;\n  border-radius: 0.25rem;\n}\n.breadcrumb::after {\n    display: block;\n    clear: both;\n    content: \"\";\n}\n.breadcrumb-item {\n  float: left;\n}\n.breadcrumb-item + .breadcrumb-item::before {\n    display: inline-block;\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n    color: #868e96;\n    content: \"/\";\n}\n.breadcrumb-item + .breadcrumb-item:hover::before {\n    text-decoration: underline;\n}\n.breadcrumb-item + .breadcrumb-item:hover::before {\n    text-decoration: none;\n}\n.breadcrumb-item.active {\n    color: #868e96;\n}\n.pagination {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding-left: 0;\n  list-style: none;\n  border-radius: 0.25rem;\n}\n.page-item:first-child .page-link {\n  margin-left: 0;\n  border-top-left-radius: 0.25rem;\n  border-bottom-left-radius: 0.25rem;\n}\n.page-item:last-child .page-link {\n  border-top-right-radius: 0.25rem;\n  border-bottom-right-radius: 0.25rem;\n}\n.page-item.active .page-link {\n  z-index: 2;\n  color: #fff;\n  background-color: #007bff;\n  border-color: #007bff;\n}\n.page-item.disabled .page-link {\n  color: #868e96;\n  pointer-events: none;\n  background-color: #fff;\n  border-color: #ddd;\n}\n.page-link {\n  position: relative;\n  display: block;\n  padding: 0.5rem 0.75rem;\n  margin-left: -1px;\n  line-height: 1.25;\n  color: #007bff;\n  background-color: #fff;\n  border: 1px solid #ddd;\n}\n.page-link:focus, .page-link:hover {\n    color: #0056b3;\n    text-decoration: none;\n    background-color: #e9ecef;\n    border-color: #ddd;\n}\n.pagination-lg .page-link {\n  padding: 0.75rem 1.5rem;\n  font-size: 1.25rem;\n  line-height: 1.5;\n}\n.pagination-lg .page-item:first-child .page-link {\n  border-top-left-radius: 0.3rem;\n  border-bottom-left-radius: 0.3rem;\n}\n.pagination-lg .page-item:last-child .page-link {\n  border-top-right-radius: 0.3rem;\n  border-bottom-right-radius: 0.3rem;\n}\n.pagination-sm .page-link {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n}\n.pagination-sm .page-item:first-child .page-link {\n  border-top-left-radius: 0.2rem;\n  border-bottom-left-radius: 0.2rem;\n}\n.pagination-sm .page-item:last-child .page-link {\n  border-top-right-radius: 0.2rem;\n  border-bottom-right-radius: 0.2rem;\n}\n.badge {\n  display: inline-block;\n  padding: 0.25em 0.4em;\n  font-size: 75%;\n  font-weight: bold;\n  line-height: 1;\n  color: #fff;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  border-radius: 0.25rem;\n}\n.badge:empty {\n    display: none;\n}\n.btn .badge {\n  position: relative;\n  top: -1px;\n}\n.badge-pill {\n  padding-right: 0.6em;\n  padding-left: 0.6em;\n  border-radius: 10rem;\n}\n.badge-primary {\n  color: #fff;\n  background-color: #007bff;\n}\n.badge-primary[href]:focus, .badge-primary[href]:hover {\n    color: #fff;\n    text-decoration: none;\n    background-color: #0062cc;\n}\n.badge-secondary {\n  color: #fff;\n  background-color: #868e96;\n}\n.badge-secondary[href]:focus, .badge-secondary[href]:hover {\n    color: #fff;\n    text-decoration: none;\n    background-color: #6c757d;\n}\n.badge-success {\n  color: #fff;\n  background-color: #28a745;\n}\n.badge-success[href]:focus, .badge-success[href]:hover {\n    color: #fff;\n    text-decoration: none;\n    background-color: #1e7e34;\n}\n.badge-info {\n  color: #fff;\n  background-color: #17a2b8;\n}\n.badge-info[href]:focus, .badge-info[href]:hover {\n    color: #fff;\n    text-decoration: none;\n    background-color: #117a8b;\n}\n.badge-warning {\n  color: #111;\n  background-color: #ffc107;\n}\n.badge-warning[href]:focus, .badge-warning[href]:hover {\n    color: #111;\n    text-decoration: none;\n    background-color: #d39e00;\n}\n.badge-danger {\n  color: #fff;\n  background-color: #dc3545;\n}\n.badge-danger[href]:focus, .badge-danger[href]:hover {\n    color: #fff;\n    text-decoration: none;\n    background-color: #bd2130;\n}\n.badge-light {\n  color: #111;\n  background-color: #f8f9fa;\n}\n.badge-light[href]:focus, .badge-light[href]:hover {\n    color: #111;\n    text-decoration: none;\n    background-color: #dae0e5;\n}\n.badge-dark {\n  color: #fff;\n  background-color: #343a40;\n}\n.badge-dark[href]:focus, .badge-dark[href]:hover {\n    color: #fff;\n    text-decoration: none;\n    background-color: #1d2124;\n}\n.jumbotron {\n  padding: 2rem 1rem;\n  margin-bottom: 2rem;\n  background-color: #e9ecef;\n  border-radius: 0.3rem;\n}\n@media (min-width: 576px) {\n.jumbotron {\n      padding: 4rem 2rem;\n}\n}\n.jumbotron-fluid {\n  padding-right: 0;\n  padding-left: 0;\n  border-radius: 0;\n}\n.alert {\n  padding: 0.75rem 1.25rem;\n  margin-bottom: 1rem;\n  border: 1px solid transparent;\n  border-radius: 0.25rem;\n}\n.alert-heading {\n  color: inherit;\n}\n.alert-link {\n  font-weight: bold;\n}\n.alert-dismissible .close {\n  position: relative;\n  top: -0.75rem;\n  right: -1.25rem;\n  padding: 0.75rem 1.25rem;\n  color: inherit;\n}\n.alert-primary {\n  color: #004085;\n  background-color: #cce5ff;\n  border-color: #b8daff;\n}\n.alert-primary hr {\n    border-top-color: #9fcdff;\n}\n.alert-primary .alert-link {\n    color: #002752;\n}\n.alert-secondary {\n  color: #464a4e;\n  background-color: #e7e8ea;\n  border-color: #dddfe2;\n}\n.alert-secondary hr {\n    border-top-color: #cfd2d6;\n}\n.alert-secondary .alert-link {\n    color: #2e3133;\n}\n.alert-success {\n  color: #155724;\n  background-color: #d4edda;\n  border-color: #c3e6cb;\n}\n.alert-success hr {\n    border-top-color: #b1dfbb;\n}\n.alert-success .alert-link {\n    color: #0b2e13;\n}\n.alert-info {\n  color: #0c5460;\n  background-color: #d1ecf1;\n  border-color: #bee5eb;\n}\n.alert-info hr {\n    border-top-color: #abdde5;\n}\n.alert-info .alert-link {\n    color: #062c33;\n}\n.alert-warning {\n  color: #856404;\n  background-color: #fff3cd;\n  border-color: #ffeeba;\n}\n.alert-warning hr {\n    border-top-color: #ffe8a1;\n}\n.alert-warning .alert-link {\n    color: #533f03;\n}\n.alert-danger {\n  color: #721c24;\n  background-color: #f8d7da;\n  border-color: #f5c6cb;\n}\n.alert-danger hr {\n    border-top-color: #f1b0b7;\n}\n.alert-danger .alert-link {\n    color: #491217;\n}\n.alert-light {\n  color: #818182;\n  background-color: #fefefe;\n  border-color: #fdfdfe;\n}\n.alert-light hr {\n    border-top-color: #ececf6;\n}\n.alert-light .alert-link {\n    color: #686868;\n}\n.alert-dark {\n  color: #1b1e21;\n  background-color: #d6d8d9;\n  border-color: #c6c8ca;\n}\n.alert-dark hr {\n    border-top-color: #b9bbbe;\n}\n.alert-dark .alert-link {\n    color: #040505;\n}\n@-webkit-keyframes progress-bar-stripes {\nfrom {\n    background-position: 1rem 0;\n}\nto {\n    background-position: 0 0;\n}\n}\n@keyframes progress-bar-stripes {\nfrom {\n    background-position: 1rem 0;\n}\nto {\n    background-position: 0 0;\n}\n}\n.progress {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 1rem;\n  overflow: hidden;\n  font-size: 0.75rem;\n  background-color: #e9ecef;\n  border-radius: 0.25rem;\n}\n.progress-bar {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  color: #fff;\n  background-color: #007bff;\n}\n.progress-bar-striped {\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-size: 1rem 1rem;\n}\n.progress-bar-animated {\n  -webkit-animation: progress-bar-stripes 1s linear infinite;\n          animation: progress-bar-stripes 1s linear infinite;\n}\n.media {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n}\n.media-body {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n.list-group {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding-left: 0;\n  margin-bottom: 0;\n}\n.list-group-item-action {\n  width: 100%;\n  color: #495057;\n  text-align: inherit;\n}\n.list-group-item-action:focus, .list-group-item-action:hover {\n    color: #495057;\n    text-decoration: none;\n    background-color: #f8f9fa;\n}\n.list-group-item-action:active {\n    color: #212529;\n    background-color: #e9ecef;\n}\n.list-group-item {\n  position: relative;\n  display: block;\n  padding: 0.75rem 1.25rem;\n  margin-bottom: -1px;\n  background-color: #fff;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n}\n.list-group-item:first-child {\n    border-top-left-radius: 0.25rem;\n    border-top-right-radius: 0.25rem;\n}\n.list-group-item:last-child {\n    margin-bottom: 0;\n    border-bottom-right-radius: 0.25rem;\n    border-bottom-left-radius: 0.25rem;\n}\n.list-group-item:focus, .list-group-item:hover {\n    text-decoration: none;\n}\n.list-group-item.disabled, .list-group-item:disabled {\n    color: #868e96;\n    background-color: #fff;\n}\n.list-group-item.active {\n    z-index: 2;\n    color: #fff;\n    background-color: #007bff;\n    border-color: #007bff;\n}\n.list-group-flush .list-group-item {\n  border-right: 0;\n  border-left: 0;\n  border-radius: 0;\n}\n.list-group-flush:first-child .list-group-item:first-child {\n  border-top: 0;\n}\n.list-group-flush:last-child .list-group-item:last-child {\n  border-bottom: 0;\n}\n.list-group-item-primary {\n  color: #004085;\n  background-color: #b8daff;\n}\na.list-group-item-primary,\nbutton.list-group-item-primary {\n  color: #004085;\n}\na.list-group-item-primary:focus, a.list-group-item-primary:hover,\n  button.list-group-item-primary:focus,\n  button.list-group-item-primary:hover {\n    color: #004085;\n    background-color: #9fcdff;\n}\na.list-group-item-primary.active,\n  button.list-group-item-primary.active {\n    color: #fff;\n    background-color: #004085;\n    border-color: #004085;\n}\n.list-group-item-secondary {\n  color: #464a4e;\n  background-color: #dddfe2;\n}\na.list-group-item-secondary,\nbutton.list-group-item-secondary {\n  color: #464a4e;\n}\na.list-group-item-secondary:focus, a.list-group-item-secondary:hover,\n  button.list-group-item-secondary:focus,\n  button.list-group-item-secondary:hover {\n    color: #464a4e;\n    background-color: #cfd2d6;\n}\na.list-group-item-secondary.active,\n  button.list-group-item-secondary.active {\n    color: #fff;\n    background-color: #464a4e;\n    border-color: #464a4e;\n}\n.list-group-item-success {\n  color: #155724;\n  background-color: #c3e6cb;\n}\na.list-group-item-success,\nbutton.list-group-item-success {\n  color: #155724;\n}\na.list-group-item-success:focus, a.list-group-item-success:hover,\n  button.list-group-item-success:focus,\n  button.list-group-item-success:hover {\n    color: #155724;\n    background-color: #b1dfbb;\n}\na.list-group-item-success.active,\n  button.list-group-item-success.active {\n    color: #fff;\n    background-color: #155724;\n    border-color: #155724;\n}\n.list-group-item-info {\n  color: #0c5460;\n  background-color: #bee5eb;\n}\na.list-group-item-info,\nbutton.list-group-item-info {\n  color: #0c5460;\n}\na.list-group-item-info:focus, a.list-group-item-info:hover,\n  button.list-group-item-info:focus,\n  button.list-group-item-info:hover {\n    color: #0c5460;\n    background-color: #abdde5;\n}\na.list-group-item-info.active,\n  button.list-group-item-info.active {\n    color: #fff;\n    background-color: #0c5460;\n    border-color: #0c5460;\n}\n.list-group-item-warning {\n  color: #856404;\n  background-color: #ffeeba;\n}\na.list-group-item-warning,\nbutton.list-group-item-warning {\n  color: #856404;\n}\na.list-group-item-warning:focus, a.list-group-item-warning:hover,\n  button.list-group-item-warning:focus,\n  button.list-group-item-warning:hover {\n    color: #856404;\n    background-color: #ffe8a1;\n}\na.list-group-item-warning.active,\n  button.list-group-item-warning.active {\n    color: #fff;\n    background-color: #856404;\n    border-color: #856404;\n}\n.list-group-item-danger {\n  color: #721c24;\n  background-color: #f5c6cb;\n}\na.list-group-item-danger,\nbutton.list-group-item-danger {\n  color: #721c24;\n}\na.list-group-item-danger:focus, a.list-group-item-danger:hover,\n  button.list-group-item-danger:focus,\n  button.list-group-item-danger:hover {\n    color: #721c24;\n    background-color: #f1b0b7;\n}\na.list-group-item-danger.active,\n  button.list-group-item-danger.active {\n    color: #fff;\n    background-color: #721c24;\n    border-color: #721c24;\n}\n.list-group-item-light {\n  color: #818182;\n  background-color: #fdfdfe;\n}\na.list-group-item-light,\nbutton.list-group-item-light {\n  color: #818182;\n}\na.list-group-item-light:focus, a.list-group-item-light:hover,\n  button.list-group-item-light:focus,\n  button.list-group-item-light:hover {\n    color: #818182;\n    background-color: #ececf6;\n}\na.list-group-item-light.active,\n  button.list-group-item-light.active {\n    color: #fff;\n    background-color: #818182;\n    border-color: #818182;\n}\n.list-group-item-dark {\n  color: #1b1e21;\n  background-color: #c6c8ca;\n}\na.list-group-item-dark,\nbutton.list-group-item-dark {\n  color: #1b1e21;\n}\na.list-group-item-dark:focus, a.list-group-item-dark:hover,\n  button.list-group-item-dark:focus,\n  button.list-group-item-dark:hover {\n    color: #1b1e21;\n    background-color: #b9bbbe;\n}\na.list-group-item-dark.active,\n  button.list-group-item-dark.active {\n    color: #fff;\n    background-color: #1b1e21;\n    border-color: #1b1e21;\n}\n.close {\n  float: right;\n  font-size: 1.5rem;\n  font-weight: bold;\n  line-height: 1;\n  color: #000;\n  text-shadow: 0 1px 0 #fff;\n  opacity: .5;\n}\n.close:focus, .close:hover {\n    color: #000;\n    text-decoration: none;\n    opacity: .75;\n}\nbutton.close {\n  padding: 0;\n  background: transparent;\n  border: 0;\n  -webkit-appearance: none;\n}\n.modal-open {\n  overflow: hidden;\n}\n.modal {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1050;\n  display: none;\n  overflow: hidden;\n  outline: 0;\n}\n.modal.fade .modal-dialog {\n    -webkit-transition: -webkit-transform 0.3s ease-out;\n    transition: -webkit-transform 0.3s ease-out;\n    transition: transform 0.3s ease-out;\n    transition: transform 0.3s ease-out, -webkit-transform 0.3s ease-out;\n    -webkit-transform: translate(0, -25%);\n            transform: translate(0, -25%);\n}\n.modal.show .modal-dialog {\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0);\n}\n.modal-open .modal {\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n.modal-dialog {\n  position: relative;\n  width: auto;\n  margin: 10px;\n}\n.modal-content {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 0.3rem;\n  outline: 0;\n}\n.modal-backdrop {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1040;\n  background-color: #000;\n}\n.modal-backdrop.fade {\n    opacity: 0;\n}\n.modal-backdrop.show {\n    opacity: 0.5;\n}\n.modal-header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding: 15px;\n  border-bottom: 1px solid #e9ecef;\n}\n.modal-header .close {\n    margin-left: auto;\n}\n.modal-title {\n  margin-bottom: 0;\n  line-height: 1.5;\n}\n.modal-body {\n  position: relative;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  padding: 15px;\n}\n.modal-footer {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  padding: 15px;\n  border-top: 1px solid #e9ecef;\n}\n.modal-footer > :not(:first-child) {\n    margin-left: .25rem;\n}\n.modal-footer > :not(:last-child) {\n    margin-right: .25rem;\n}\n.modal-scrollbar-measure {\n  position: absolute;\n  top: -9999px;\n  width: 50px;\n  height: 50px;\n  overflow: scroll;\n}\n@media (min-width: 576px) {\n.modal-dialog {\n    max-width: 500px;\n    margin: 30px auto;\n}\n.modal-sm {\n    max-width: 300px;\n}\n}\n@media (min-width: 992px) {\n.modal-lg {\n    max-width: 800px;\n}\n}\n.tooltip {\n  position: absolute;\n  z-index: 1070;\n  display: block;\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-style: normal;\n  font-weight: normal;\n  line-height: 1.5;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  letter-spacing: normal;\n  word-break: normal;\n  word-spacing: normal;\n  white-space: normal;\n  line-break: auto;\n  font-size: 0.875rem;\n  word-wrap: break-word;\n  opacity: 0;\n}\n.tooltip.show {\n    opacity: 0.9;\n}\n.tooltip .arrow {\n    position: absolute;\n    display: block;\n    width: 5px;\n    height: 5px;\n}\n.tooltip.bs-tooltip-top, .tooltip.bs-tooltip-auto[x-placement^=\"top\"] {\n    padding: 5px 0;\n}\n.tooltip.bs-tooltip-top .arrow, .tooltip.bs-tooltip-auto[x-placement^=\"top\"] .arrow {\n      bottom: 0;\n}\n.tooltip.bs-tooltip-top .arrow::before, .tooltip.bs-tooltip-auto[x-placement^=\"top\"] .arrow::before {\n      margin-left: -3px;\n      content: \"\";\n      border-width: 5px 5px 0;\n      border-top-color: #000;\n}\n.tooltip.bs-tooltip-right, .tooltip.bs-tooltip-auto[x-placement^=\"right\"] {\n    padding: 0 5px;\n}\n.tooltip.bs-tooltip-right .arrow, .tooltip.bs-tooltip-auto[x-placement^=\"right\"] .arrow {\n      left: 0;\n}\n.tooltip.bs-tooltip-right .arrow::before, .tooltip.bs-tooltip-auto[x-placement^=\"right\"] .arrow::before {\n      margin-top: -3px;\n      content: \"\";\n      border-width: 5px 5px 5px 0;\n      border-right-color: #000;\n}\n.tooltip.bs-tooltip-bottom, .tooltip.bs-tooltip-auto[x-placement^=\"bottom\"] {\n    padding: 5px 0;\n}\n.tooltip.bs-tooltip-bottom .arrow, .tooltip.bs-tooltip-auto[x-placement^=\"bottom\"] .arrow {\n      top: 0;\n}\n.tooltip.bs-tooltip-bottom .arrow::before, .tooltip.bs-tooltip-auto[x-placement^=\"bottom\"] .arrow::before {\n      margin-left: -3px;\n      content: \"\";\n      border-width: 0 5px 5px;\n      border-bottom-color: #000;\n}\n.tooltip.bs-tooltip-left, .tooltip.bs-tooltip-auto[x-placement^=\"left\"] {\n    padding: 0 5px;\n}\n.tooltip.bs-tooltip-left .arrow, .tooltip.bs-tooltip-auto[x-placement^=\"left\"] .arrow {\n      right: 0;\n}\n.tooltip.bs-tooltip-left .arrow::before, .tooltip.bs-tooltip-auto[x-placement^=\"left\"] .arrow::before {\n      right: 0;\n      margin-top: -3px;\n      content: \"\";\n      border-width: 5px 0 5px 5px;\n      border-left-color: #000;\n}\n.tooltip .arrow::before {\n    position: absolute;\n    border-color: transparent;\n    border-style: solid;\n}\n.tooltip-inner {\n  max-width: 200px;\n  padding: 3px 8px;\n  color: #fff;\n  text-align: center;\n  background-color: #000;\n  border-radius: 0.25rem;\n}\n.popover {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1060;\n  display: block;\n  max-width: 276px;\n  padding: 1px;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-style: normal;\n  font-weight: normal;\n  line-height: 1.5;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  letter-spacing: normal;\n  word-break: normal;\n  word-spacing: normal;\n  white-space: normal;\n  line-break: auto;\n  font-size: 0.875rem;\n  word-wrap: break-word;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 0.3rem;\n}\n.popover .arrow {\n    position: absolute;\n    display: block;\n    width: 10px;\n    height: 5px;\n}\n.popover .arrow::before,\n  .popover .arrow::after {\n    position: absolute;\n    display: block;\n    border-color: transparent;\n    border-style: solid;\n}\n.popover .arrow::before {\n    content: \"\";\n    border-width: 11px;\n}\n.popover .arrow::after {\n    content: \"\";\n    border-width: 11px;\n}\n.popover.bs-popover-top, .popover.bs-popover-auto[x-placement^=\"top\"] {\n    margin-bottom: 10px;\n}\n.popover.bs-popover-top .arrow, .popover.bs-popover-auto[x-placement^=\"top\"] .arrow {\n      bottom: 0;\n}\n.popover.bs-popover-top .arrow::before, .popover.bs-popover-auto[x-placement^=\"top\"] .arrow::before,\n    .popover.bs-popover-top .arrow::after, .popover.bs-popover-auto[x-placement^=\"top\"] .arrow::after {\n      border-bottom-width: 0;\n}\n.popover.bs-popover-top .arrow::before, .popover.bs-popover-auto[x-placement^=\"top\"] .arrow::before {\n      bottom: -11px;\n      margin-left: -6px;\n      border-top-color: rgba(0, 0, 0, 0.25);\n}\n.popover.bs-popover-top .arrow::after, .popover.bs-popover-auto[x-placement^=\"top\"] .arrow::after {\n      bottom: -10px;\n      margin-left: -6px;\n      border-top-color: #fff;\n}\n.popover.bs-popover-right, .popover.bs-popover-auto[x-placement^=\"right\"] {\n    margin-left: 10px;\n}\n.popover.bs-popover-right .arrow, .popover.bs-popover-auto[x-placement^=\"right\"] .arrow {\n      left: 0;\n}\n.popover.bs-popover-right .arrow::before, .popover.bs-popover-auto[x-placement^=\"right\"] .arrow::before,\n    .popover.bs-popover-right .arrow::after, .popover.bs-popover-auto[x-placement^=\"right\"] .arrow::after {\n      margin-top: -8px;\n      border-left-width: 0;\n}\n.popover.bs-popover-right .arrow::before, .popover.bs-popover-auto[x-placement^=\"right\"] .arrow::before {\n      left: -11px;\n      border-right-color: rgba(0, 0, 0, 0.25);\n}\n.popover.bs-popover-right .arrow::after, .popover.bs-popover-auto[x-placement^=\"right\"] .arrow::after {\n      left: -10px;\n      border-right-color: #fff;\n}\n.popover.bs-popover-bottom, .popover.bs-popover-auto[x-placement^=\"bottom\"] {\n    margin-top: 10px;\n}\n.popover.bs-popover-bottom .arrow, .popover.bs-popover-auto[x-placement^=\"bottom\"] .arrow {\n      top: 0;\n}\n.popover.bs-popover-bottom .arrow::before, .popover.bs-popover-auto[x-placement^=\"bottom\"] .arrow::before,\n    .popover.bs-popover-bottom .arrow::after, .popover.bs-popover-auto[x-placement^=\"bottom\"] .arrow::after {\n      margin-left: -7px;\n      border-top-width: 0;\n}\n.popover.bs-popover-bottom .arrow::before, .popover.bs-popover-auto[x-placement^=\"bottom\"] .arrow::before {\n      top: -11px;\n      border-bottom-color: rgba(0, 0, 0, 0.25);\n}\n.popover.bs-popover-bottom .arrow::after, .popover.bs-popover-auto[x-placement^=\"bottom\"] .arrow::after {\n      top: -10px;\n      border-bottom-color: #fff;\n}\n.popover.bs-popover-bottom .popover-header::before, .popover.bs-popover-auto[x-placement^=\"bottom\"] .popover-header::before {\n      position: absolute;\n      top: 0;\n      left: 50%;\n      display: block;\n      width: 20px;\n      margin-left: -10px;\n      content: \"\";\n      border-bottom: 1px solid #f7f7f7;\n}\n.popover.bs-popover-left, .popover.bs-popover-auto[x-placement^=\"left\"] {\n    margin-right: 10px;\n}\n.popover.bs-popover-left .arrow, .popover.bs-popover-auto[x-placement^=\"left\"] .arrow {\n      right: 0;\n}\n.popover.bs-popover-left .arrow::before, .popover.bs-popover-auto[x-placement^=\"left\"] .arrow::before,\n    .popover.bs-popover-left .arrow::after, .popover.bs-popover-auto[x-placement^=\"left\"] .arrow::after {\n      margin-top: -8px;\n      border-right-width: 0;\n}\n.popover.bs-popover-left .arrow::before, .popover.bs-popover-auto[x-placement^=\"left\"] .arrow::before {\n      right: -11px;\n      border-left-color: rgba(0, 0, 0, 0.25);\n}\n.popover.bs-popover-left .arrow::after, .popover.bs-popover-auto[x-placement^=\"left\"] .arrow::after {\n      right: -10px;\n      border-left-color: #fff;\n}\n.popover-header {\n  padding: 8px 14px;\n  margin-bottom: 0;\n  font-size: 1rem;\n  color: inherit;\n  background-color: #f7f7f7;\n  border-bottom: 1px solid #ebebeb;\n  border-top-left-radius: calc(0.3rem - 1px);\n  border-top-right-radius: calc(0.3rem - 1px);\n}\n.popover-header:empty {\n    display: none;\n}\n.popover-body {\n  padding: 9px 14px;\n  color: #212529;\n}\n.carousel {\n  position: relative;\n}\n.carousel-inner {\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n}\n.carousel-item {\n  position: relative;\n  display: none;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 100%;\n  -webkit-transition: -webkit-transform 0.6s ease;\n  transition: -webkit-transform 0.6s ease;\n  transition: transform 0.6s ease;\n  transition: transform 0.6s ease, -webkit-transform 0.6s ease;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  -webkit-perspective: 1000px;\n          perspective: 1000px;\n}\n.carousel-item.active,\n.carousel-item-next,\n.carousel-item-prev {\n  display: block;\n}\n.carousel-item-next,\n.carousel-item-prev {\n  position: absolute;\n  top: 0;\n}\n.carousel-item-next.carousel-item-left,\n.carousel-item-prev.carousel-item-right {\n  -webkit-transform: translateX(0);\n          transform: translateX(0);\n}\n@supports ((-webkit-transform-style: preserve-3d) or (transform-style: preserve-3d)) {\n.carousel-item-next.carousel-item-left,\n    .carousel-item-prev.carousel-item-right {\n      -webkit-transform: translate3d(0, 0, 0);\n              transform: translate3d(0, 0, 0);\n}\n}\n.carousel-item-next,\n.active.carousel-item-right {\n  -webkit-transform: translateX(100%);\n          transform: translateX(100%);\n}\n@supports ((-webkit-transform-style: preserve-3d) or (transform-style: preserve-3d)) {\n.carousel-item-next,\n    .active.carousel-item-right {\n      -webkit-transform: translate3d(100%, 0, 0);\n              transform: translate3d(100%, 0, 0);\n}\n}\n.carousel-item-prev,\n.active.carousel-item-left {\n  -webkit-transform: translateX(-100%);\n          transform: translateX(-100%);\n}\n@supports ((-webkit-transform-style: preserve-3d) or (transform-style: preserve-3d)) {\n.carousel-item-prev,\n    .active.carousel-item-left {\n      -webkit-transform: translate3d(-100%, 0, 0);\n              transform: translate3d(-100%, 0, 0);\n}\n}\n.carousel-control-prev,\n.carousel-control-next {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  width: 15%;\n  color: #fff;\n  text-align: center;\n  opacity: 0.5;\n}\n.carousel-control-prev:focus, .carousel-control-prev:hover,\n  .carousel-control-next:focus,\n  .carousel-control-next:hover {\n    color: #fff;\n    text-decoration: none;\n    outline: 0;\n    opacity: .9;\n}\n.carousel-control-prev {\n  left: 0;\n}\n.carousel-control-next {\n  right: 0;\n}\n.carousel-control-prev-icon,\n.carousel-control-next-icon {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  background: transparent no-repeat center center;\n  background-size: 100% 100%;\n}\n.carousel-control-prev-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M4 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E\");\n}\n.carousel-control-next-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M1.5 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E\");\n}\n.carousel-indicators {\n  position: absolute;\n  right: 0;\n  bottom: 10px;\n  left: 0;\n  z-index: 15;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding-left: 0;\n  margin-right: 15%;\n  margin-left: 15%;\n  list-style: none;\n}\n.carousel-indicators li {\n    position: relative;\n    -webkit-box-flex: 0;\n        -ms-flex: 0 1 auto;\n            flex: 0 1 auto;\n    width: 30px;\n    height: 3px;\n    margin-right: 3px;\n    margin-left: 3px;\n    text-indent: -999px;\n    background-color: rgba(255, 255, 255, 0.5);\n}\n.carousel-indicators li::before {\n      position: absolute;\n      top: -10px;\n      left: 0;\n      display: inline-block;\n      width: 100%;\n      height: 10px;\n      content: \"\";\n}\n.carousel-indicators li::after {\n      position: absolute;\n      bottom: -10px;\n      left: 0;\n      display: inline-block;\n      width: 100%;\n      height: 10px;\n      content: \"\";\n}\n.carousel-indicators .active {\n    background-color: #fff;\n}\n.carousel-caption {\n  position: absolute;\n  right: 15%;\n  bottom: 20px;\n  left: 15%;\n  z-index: 10;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  color: #fff;\n  text-align: center;\n}\n.align-baseline {\n  vertical-align: baseline !important;\n}\n.align-top {\n  vertical-align: top !important;\n}\n.align-middle {\n  vertical-align: middle !important;\n}\n.align-bottom {\n  vertical-align: bottom !important;\n}\n.align-text-bottom {\n  vertical-align: text-bottom !important;\n}\n.align-text-top {\n  vertical-align: text-top !important;\n}\n.bg-primary {\n  background-color: #007bff !important;\n}\na.bg-primary:focus, a.bg-primary:hover {\n  background-color: #0062cc !important;\n}\n.bg-secondary {\n  background-color: #868e96 !important;\n}\na.bg-secondary:focus, a.bg-secondary:hover {\n  background-color: #6c757d !important;\n}\n.bg-success {\n  background-color: #28a745 !important;\n}\na.bg-success:focus, a.bg-success:hover {\n  background-color: #1e7e34 !important;\n}\n.bg-info {\n  background-color: #17a2b8 !important;\n}\na.bg-info:focus, a.bg-info:hover {\n  background-color: #117a8b !important;\n}\n.bg-warning {\n  background-color: #ffc107 !important;\n}\na.bg-warning:focus, a.bg-warning:hover {\n  background-color: #d39e00 !important;\n}\n.bg-danger {\n  background-color: #dc3545 !important;\n}\na.bg-danger:focus, a.bg-danger:hover {\n  background-color: #bd2130 !important;\n}\n.bg-light {\n  background-color: #f8f9fa !important;\n}\na.bg-light:focus, a.bg-light:hover {\n  background-color: #dae0e5 !important;\n}\n.bg-dark {\n  background-color: #343a40 !important;\n}\na.bg-dark:focus, a.bg-dark:hover {\n  background-color: #1d2124 !important;\n}\n.bg-white {\n  background-color: #fff !important;\n}\n.bg-transparent {\n  background-color: transparent !important;\n}\n.border {\n  border: 1px solid #e9ecef !important;\n}\n.border-0 {\n  border: 0 !important;\n}\n.border-top-0 {\n  border-top: 0 !important;\n}\n.border-right-0 {\n  border-right: 0 !important;\n}\n.border-bottom-0 {\n  border-bottom: 0 !important;\n}\n.border-left-0 {\n  border-left: 0 !important;\n}\n.border-primary {\n  border-color: #007bff !important;\n}\n.border-secondary {\n  border-color: #868e96 !important;\n}\n.border-success {\n  border-color: #28a745 !important;\n}\n.border-info {\n  border-color: #17a2b8 !important;\n}\n.border-warning {\n  border-color: #ffc107 !important;\n}\n.border-danger {\n  border-color: #dc3545 !important;\n}\n.border-light {\n  border-color: #f8f9fa !important;\n}\n.border-dark {\n  border-color: #343a40 !important;\n}\n.border-white {\n  border-color: #fff !important;\n}\n.rounded {\n  border-radius: 0.25rem !important;\n}\n.rounded-top {\n  border-top-left-radius: 0.25rem !important;\n  border-top-right-radius: 0.25rem !important;\n}\n.rounded-right {\n  border-top-right-radius: 0.25rem !important;\n  border-bottom-right-radius: 0.25rem !important;\n}\n.rounded-bottom {\n  border-bottom-right-radius: 0.25rem !important;\n  border-bottom-left-radius: 0.25rem !important;\n}\n.rounded-left {\n  border-top-left-radius: 0.25rem !important;\n  border-bottom-left-radius: 0.25rem !important;\n}\n.rounded-circle {\n  border-radius: 50%;\n}\n.rounded-0 {\n  border-radius: 0;\n}\n.clearfix::after {\n  display: block;\n  clear: both;\n  content: \"\";\n}\n.d-none {\n  display: none !important;\n}\n.d-inline {\n  display: inline !important;\n}\n.d-inline-block {\n  display: inline-block !important;\n}\n.d-block {\n  display: block !important;\n}\n.d-table {\n  display: table !important;\n}\n.d-table-cell {\n  display: table-cell !important;\n}\n.d-flex {\n  display: -webkit-box !important;\n  display: -ms-flexbox !important;\n  display: flex !important;\n}\n.d-inline-flex {\n  display: -webkit-inline-box !important;\n  display: -ms-inline-flexbox !important;\n  display: inline-flex !important;\n}\n@media (min-width: 576px) {\n.d-sm-none {\n    display: none !important;\n}\n.d-sm-inline {\n    display: inline !important;\n}\n.d-sm-inline-block {\n    display: inline-block !important;\n}\n.d-sm-block {\n    display: block !important;\n}\n.d-sm-table {\n    display: table !important;\n}\n.d-sm-table-cell {\n    display: table-cell !important;\n}\n.d-sm-flex {\n    display: -webkit-box !important;\n    display: -ms-flexbox !important;\n    display: flex !important;\n}\n.d-sm-inline-flex {\n    display: -webkit-inline-box !important;\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important;\n}\n}\n@media (min-width: 768px) {\n.d-md-none {\n    display: none !important;\n}\n.d-md-inline {\n    display: inline !important;\n}\n.d-md-inline-block {\n    display: inline-block !important;\n}\n.d-md-block {\n    display: block !important;\n}\n.d-md-table {\n    display: table !important;\n}\n.d-md-table-cell {\n    display: table-cell !important;\n}\n.d-md-flex {\n    display: -webkit-box !important;\n    display: -ms-flexbox !important;\n    display: flex !important;\n}\n.d-md-inline-flex {\n    display: -webkit-inline-box !important;\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important;\n}\n}\n@media (min-width: 992px) {\n.d-lg-none {\n    display: none !important;\n}\n.d-lg-inline {\n    display: inline !important;\n}\n.d-lg-inline-block {\n    display: inline-block !important;\n}\n.d-lg-block {\n    display: block !important;\n}\n.d-lg-table {\n    display: table !important;\n}\n.d-lg-table-cell {\n    display: table-cell !important;\n}\n.d-lg-flex {\n    display: -webkit-box !important;\n    display: -ms-flexbox !important;\n    display: flex !important;\n}\n.d-lg-inline-flex {\n    display: -webkit-inline-box !important;\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important;\n}\n}\n@media (min-width: 1200px) {\n.d-xl-none {\n    display: none !important;\n}\n.d-xl-inline {\n    display: inline !important;\n}\n.d-xl-inline-block {\n    display: inline-block !important;\n}\n.d-xl-block {\n    display: block !important;\n}\n.d-xl-table {\n    display: table !important;\n}\n.d-xl-table-cell {\n    display: table-cell !important;\n}\n.d-xl-flex {\n    display: -webkit-box !important;\n    display: -ms-flexbox !important;\n    display: flex !important;\n}\n.d-xl-inline-flex {\n    display: -webkit-inline-box !important;\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important;\n}\n}\n.d-print-block {\n  display: none !important;\n}\n@media print {\n.d-print-block {\n      display: block !important;\n}\n}\n.d-print-inline {\n  display: none !important;\n}\n@media print {\n.d-print-inline {\n      display: inline !important;\n}\n}\n.d-print-inline-block {\n  display: none !important;\n}\n@media print {\n.d-print-inline-block {\n      display: inline-block !important;\n}\n}\n@media print {\n.d-print-none {\n    display: none !important;\n}\n}\n.embed-responsive {\n  position: relative;\n  display: block;\n  width: 100%;\n  padding: 0;\n  overflow: hidden;\n}\n.embed-responsive::before {\n    display: block;\n    content: \"\";\n}\n.embed-responsive .embed-responsive-item,\n  .embed-responsive iframe,\n  .embed-responsive embed,\n  .embed-responsive object,\n  .embed-responsive video {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    border: 0;\n}\n.embed-responsive-21by9::before {\n  padding-top: 42.85714%;\n}\n.embed-responsive-16by9::before {\n  padding-top: 56.25%;\n}\n.embed-responsive-4by3::before {\n  padding-top: 75%;\n}\n.embed-responsive-1by1::before {\n  padding-top: 100%;\n}\n.flex-row {\n  -webkit-box-orient: horizontal !important;\n  -webkit-box-direction: normal !important;\n      -ms-flex-direction: row !important;\n          flex-direction: row !important;\n}\n.flex-column {\n  -webkit-box-orient: vertical !important;\n  -webkit-box-direction: normal !important;\n      -ms-flex-direction: column !important;\n          flex-direction: column !important;\n}\n.flex-row-reverse {\n  -webkit-box-orient: horizontal !important;\n  -webkit-box-direction: reverse !important;\n      -ms-flex-direction: row-reverse !important;\n          flex-direction: row-reverse !important;\n}\n.flex-column-reverse {\n  -webkit-box-orient: vertical !important;\n  -webkit-box-direction: reverse !important;\n      -ms-flex-direction: column-reverse !important;\n          flex-direction: column-reverse !important;\n}\n.flex-wrap {\n  -ms-flex-wrap: wrap !important;\n      flex-wrap: wrap !important;\n}\n.flex-nowrap {\n  -ms-flex-wrap: nowrap !important;\n      flex-wrap: nowrap !important;\n}\n.flex-wrap-reverse {\n  -ms-flex-wrap: wrap-reverse !important;\n      flex-wrap: wrap-reverse !important;\n}\n.justify-content-start {\n  -webkit-box-pack: start !important;\n      -ms-flex-pack: start !important;\n          justify-content: flex-start !important;\n}\n.justify-content-end {\n  -webkit-box-pack: end !important;\n      -ms-flex-pack: end !important;\n          justify-content: flex-end !important;\n}\n.justify-content-center {\n  -webkit-box-pack: center !important;\n      -ms-flex-pack: center !important;\n          justify-content: center !important;\n}\n.justify-content-between {\n  -webkit-box-pack: justify !important;\n      -ms-flex-pack: justify !important;\n          justify-content: space-between !important;\n}\n.justify-content-around {\n  -ms-flex-pack: distribute !important;\n      justify-content: space-around !important;\n}\n.align-items-start {\n  -webkit-box-align: start !important;\n      -ms-flex-align: start !important;\n          align-items: flex-start !important;\n}\n.align-items-end {\n  -webkit-box-align: end !important;\n      -ms-flex-align: end !important;\n          align-items: flex-end !important;\n}\n.align-items-center {\n  -webkit-box-align: center !important;\n      -ms-flex-align: center !important;\n          align-items: center !important;\n}\n.align-items-baseline {\n  -webkit-box-align: baseline !important;\n      -ms-flex-align: baseline !important;\n          align-items: baseline !important;\n}\n.align-items-stretch {\n  -webkit-box-align: stretch !important;\n      -ms-flex-align: stretch !important;\n          align-items: stretch !important;\n}\n.align-content-start {\n  -ms-flex-line-pack: start !important;\n      align-content: flex-start !important;\n}\n.align-content-end {\n  -ms-flex-line-pack: end !important;\n      align-content: flex-end !important;\n}\n.align-content-center {\n  -ms-flex-line-pack: center !important;\n      align-content: center !important;\n}\n.align-content-between {\n  -ms-flex-line-pack: justify !important;\n      align-content: space-between !important;\n}\n.align-content-around {\n  -ms-flex-line-pack: distribute !important;\n      align-content: space-around !important;\n}\n.align-content-stretch {\n  -ms-flex-line-pack: stretch !important;\n      align-content: stretch !important;\n}\n.align-self-auto {\n  -ms-flex-item-align: auto !important;\n      align-self: auto !important;\n}\n.align-self-start {\n  -ms-flex-item-align: start !important;\n      align-self: flex-start !important;\n}\n.align-self-end {\n  -ms-flex-item-align: end !important;\n      align-self: flex-end !important;\n}\n.align-self-center {\n  -ms-flex-item-align: center !important;\n      align-self: center !important;\n}\n.align-self-baseline {\n  -ms-flex-item-align: baseline !important;\n      align-self: baseline !important;\n}\n.align-self-stretch {\n  -ms-flex-item-align: stretch !important;\n      align-self: stretch !important;\n}\n@media (min-width: 576px) {\n.flex-sm-row {\n    -webkit-box-orient: horizontal !important;\n    -webkit-box-direction: normal !important;\n        -ms-flex-direction: row !important;\n            flex-direction: row !important;\n}\n.flex-sm-column {\n    -webkit-box-orient: vertical !important;\n    -webkit-box-direction: normal !important;\n        -ms-flex-direction: column !important;\n            flex-direction: column !important;\n}\n.flex-sm-row-reverse {\n    -webkit-box-orient: horizontal !important;\n    -webkit-box-direction: reverse !important;\n        -ms-flex-direction: row-reverse !important;\n            flex-direction: row-reverse !important;\n}\n.flex-sm-column-reverse {\n    -webkit-box-orient: vertical !important;\n    -webkit-box-direction: reverse !important;\n        -ms-flex-direction: column-reverse !important;\n            flex-direction: column-reverse !important;\n}\n.flex-sm-wrap {\n    -ms-flex-wrap: wrap !important;\n        flex-wrap: wrap !important;\n}\n.flex-sm-nowrap {\n    -ms-flex-wrap: nowrap !important;\n        flex-wrap: nowrap !important;\n}\n.flex-sm-wrap-reverse {\n    -ms-flex-wrap: wrap-reverse !important;\n        flex-wrap: wrap-reverse !important;\n}\n.justify-content-sm-start {\n    -webkit-box-pack: start !important;\n        -ms-flex-pack: start !important;\n            justify-content: flex-start !important;\n}\n.justify-content-sm-end {\n    -webkit-box-pack: end !important;\n        -ms-flex-pack: end !important;\n            justify-content: flex-end !important;\n}\n.justify-content-sm-center {\n    -webkit-box-pack: center !important;\n        -ms-flex-pack: center !important;\n            justify-content: center !important;\n}\n.justify-content-sm-between {\n    -webkit-box-pack: justify !important;\n        -ms-flex-pack: justify !important;\n            justify-content: space-between !important;\n}\n.justify-content-sm-around {\n    -ms-flex-pack: distribute !important;\n        justify-content: space-around !important;\n}\n.align-items-sm-start {\n    -webkit-box-align: start !important;\n        -ms-flex-align: start !important;\n            align-items: flex-start !important;\n}\n.align-items-sm-end {\n    -webkit-box-align: end !important;\n        -ms-flex-align: end !important;\n            align-items: flex-end !important;\n}\n.align-items-sm-center {\n    -webkit-box-align: center !important;\n        -ms-flex-align: center !important;\n            align-items: center !important;\n}\n.align-items-sm-baseline {\n    -webkit-box-align: baseline !important;\n        -ms-flex-align: baseline !important;\n            align-items: baseline !important;\n}\n.align-items-sm-stretch {\n    -webkit-box-align: stretch !important;\n        -ms-flex-align: stretch !important;\n            align-items: stretch !important;\n}\n.align-content-sm-start {\n    -ms-flex-line-pack: start !important;\n        align-content: flex-start !important;\n}\n.align-content-sm-end {\n    -ms-flex-line-pack: end !important;\n        align-content: flex-end !important;\n}\n.align-content-sm-center {\n    -ms-flex-line-pack: center !important;\n        align-content: center !important;\n}\n.align-content-sm-between {\n    -ms-flex-line-pack: justify !important;\n        align-content: space-between !important;\n}\n.align-content-sm-around {\n    -ms-flex-line-pack: distribute !important;\n        align-content: space-around !important;\n}\n.align-content-sm-stretch {\n    -ms-flex-line-pack: stretch !important;\n        align-content: stretch !important;\n}\n.align-self-sm-auto {\n    -ms-flex-item-align: auto !important;\n        align-self: auto !important;\n}\n.align-self-sm-start {\n    -ms-flex-item-align: start !important;\n        align-self: flex-start !important;\n}\n.align-self-sm-end {\n    -ms-flex-item-align: end !important;\n        align-self: flex-end !important;\n}\n.align-self-sm-center {\n    -ms-flex-item-align: center !important;\n        align-self: center !important;\n}\n.align-self-sm-baseline {\n    -ms-flex-item-align: baseline !important;\n        align-self: baseline !important;\n}\n.align-self-sm-stretch {\n    -ms-flex-item-align: stretch !important;\n        align-self: stretch !important;\n}\n}\n@media (min-width: 768px) {\n.flex-md-row {\n    -webkit-box-orient: horizontal !important;\n    -webkit-box-direction: normal !important;\n        -ms-flex-direction: row !important;\n            flex-direction: row !important;\n}\n.flex-md-column {\n    -webkit-box-orient: vertical !important;\n    -webkit-box-direction: normal !important;\n        -ms-flex-direction: column !important;\n            flex-direction: column !important;\n}\n.flex-md-row-reverse {\n    -webkit-box-orient: horizontal !important;\n    -webkit-box-direction: reverse !important;\n        -ms-flex-direction: row-reverse !important;\n            flex-direction: row-reverse !important;\n}\n.flex-md-column-reverse {\n    -webkit-box-orient: vertical !important;\n    -webkit-box-direction: reverse !important;\n        -ms-flex-direction: column-reverse !important;\n            flex-direction: column-reverse !important;\n}\n.flex-md-wrap {\n    -ms-flex-wrap: wrap !important;\n        flex-wrap: wrap !important;\n}\n.flex-md-nowrap {\n    -ms-flex-wrap: nowrap !important;\n        flex-wrap: nowrap !important;\n}\n.flex-md-wrap-reverse {\n    -ms-flex-wrap: wrap-reverse !important;\n        flex-wrap: wrap-reverse !important;\n}\n.justify-content-md-start {\n    -webkit-box-pack: start !important;\n        -ms-flex-pack: start !important;\n            justify-content: flex-start !important;\n}\n.justify-content-md-end {\n    -webkit-box-pack: end !important;\n        -ms-flex-pack: end !important;\n            justify-content: flex-end !important;\n}\n.justify-content-md-center {\n    -webkit-box-pack: center !important;\n        -ms-flex-pack: center !important;\n            justify-content: center !important;\n}\n.justify-content-md-between {\n    -webkit-box-pack: justify !important;\n        -ms-flex-pack: justify !important;\n            justify-content: space-between !important;\n}\n.justify-content-md-around {\n    -ms-flex-pack: distribute !important;\n        justify-content: space-around !important;\n}\n.align-items-md-start {\n    -webkit-box-align: start !important;\n        -ms-flex-align: start !important;\n            align-items: flex-start !important;\n}\n.align-items-md-end {\n    -webkit-box-align: end !important;\n        -ms-flex-align: end !important;\n            align-items: flex-end !important;\n}\n.align-items-md-center {\n    -webkit-box-align: center !important;\n        -ms-flex-align: center !important;\n            align-items: center !important;\n}\n.align-items-md-baseline {\n    -webkit-box-align: baseline !important;\n        -ms-flex-align: baseline !important;\n            align-items: baseline !important;\n}\n.align-items-md-stretch {\n    -webkit-box-align: stretch !important;\n        -ms-flex-align: stretch !important;\n            align-items: stretch !important;\n}\n.align-content-md-start {\n    -ms-flex-line-pack: start !important;\n        align-content: flex-start !important;\n}\n.align-content-md-end {\n    -ms-flex-line-pack: end !important;\n        align-content: flex-end !important;\n}\n.align-content-md-center {\n    -ms-flex-line-pack: center !important;\n        align-content: center !important;\n}\n.align-content-md-between {\n    -ms-flex-line-pack: justify !important;\n        align-content: space-between !important;\n}\n.align-content-md-around {\n    -ms-flex-line-pack: distribute !important;\n        align-content: space-around !important;\n}\n.align-content-md-stretch {\n    -ms-flex-line-pack: stretch !important;\n        align-content: stretch !important;\n}\n.align-self-md-auto {\n    -ms-flex-item-align: auto !important;\n        align-self: auto !important;\n}\n.align-self-md-start {\n    -ms-flex-item-align: start !important;\n        align-self: flex-start !important;\n}\n.align-self-md-end {\n    -ms-flex-item-align: end !important;\n        align-self: flex-end !important;\n}\n.align-self-md-center {\n    -ms-flex-item-align: center !important;\n        align-self: center !important;\n}\n.align-self-md-baseline {\n    -ms-flex-item-align: baseline !important;\n        align-self: baseline !important;\n}\n.align-self-md-stretch {\n    -ms-flex-item-align: stretch !important;\n        align-self: stretch !important;\n}\n}\n@media (min-width: 992px) {\n.flex-lg-row {\n    -webkit-box-orient: horizontal !important;\n    -webkit-box-direction: normal !important;\n        -ms-flex-direction: row !important;\n            flex-direction: row !important;\n}\n.flex-lg-column {\n    -webkit-box-orient: vertical !important;\n    -webkit-box-direction: normal !important;\n        -ms-flex-direction: column !important;\n            flex-direction: column !important;\n}\n.flex-lg-row-reverse {\n    -webkit-box-orient: horizontal !important;\n    -webkit-box-direction: reverse !important;\n        -ms-flex-direction: row-reverse !important;\n            flex-direction: row-reverse !important;\n}\n.flex-lg-column-reverse {\n    -webkit-box-orient: vertical !important;\n    -webkit-box-direction: reverse !important;\n        -ms-flex-direction: column-reverse !important;\n            flex-direction: column-reverse !important;\n}\n.flex-lg-wrap {\n    -ms-flex-wrap: wrap !important;\n        flex-wrap: wrap !important;\n}\n.flex-lg-nowrap {\n    -ms-flex-wrap: nowrap !important;\n        flex-wrap: nowrap !important;\n}\n.flex-lg-wrap-reverse {\n    -ms-flex-wrap: wrap-reverse !important;\n        flex-wrap: wrap-reverse !important;\n}\n.justify-content-lg-start {\n    -webkit-box-pack: start !important;\n        -ms-flex-pack: start !important;\n            justify-content: flex-start !important;\n}\n.justify-content-lg-end {\n    -webkit-box-pack: end !important;\n        -ms-flex-pack: end !important;\n            justify-content: flex-end !important;\n}\n.justify-content-lg-center {\n    -webkit-box-pack: center !important;\n        -ms-flex-pack: center !important;\n            justify-content: center !important;\n}\n.justify-content-lg-between {\n    -webkit-box-pack: justify !important;\n        -ms-flex-pack: justify !important;\n            justify-content: space-between !important;\n}\n.justify-content-lg-around {\n    -ms-flex-pack: distribute !important;\n        justify-content: space-around !important;\n}\n.align-items-lg-start {\n    -webkit-box-align: start !important;\n        -ms-flex-align: start !important;\n            align-items: flex-start !important;\n}\n.align-items-lg-end {\n    -webkit-box-align: end !important;\n        -ms-flex-align: end !important;\n            align-items: flex-end !important;\n}\n.align-items-lg-center {\n    -webkit-box-align: center !important;\n        -ms-flex-align: center !important;\n            align-items: center !important;\n}\n.align-items-lg-baseline {\n    -webkit-box-align: baseline !important;\n        -ms-flex-align: baseline !important;\n            align-items: baseline !important;\n}\n.align-items-lg-stretch {\n    -webkit-box-align: stretch !important;\n        -ms-flex-align: stretch !important;\n            align-items: stretch !important;\n}\n.align-content-lg-start {\n    -ms-flex-line-pack: start !important;\n        align-content: flex-start !important;\n}\n.align-content-lg-end {\n    -ms-flex-line-pack: end !important;\n        align-content: flex-end !important;\n}\n.align-content-lg-center {\n    -ms-flex-line-pack: center !important;\n        align-content: center !important;\n}\n.align-content-lg-between {\n    -ms-flex-line-pack: justify !important;\n        align-content: space-between !important;\n}\n.align-content-lg-around {\n    -ms-flex-line-pack: distribute !important;\n        align-content: space-around !important;\n}\n.align-content-lg-stretch {\n    -ms-flex-line-pack: stretch !important;\n        align-content: stretch !important;\n}\n.align-self-lg-auto {\n    -ms-flex-item-align: auto !important;\n        align-self: auto !important;\n}\n.align-self-lg-start {\n    -ms-flex-item-align: start !important;\n        align-self: flex-start !important;\n}\n.align-self-lg-end {\n    -ms-flex-item-align: end !important;\n        align-self: flex-end !important;\n}\n.align-self-lg-center {\n    -ms-flex-item-align: center !important;\n        align-self: center !important;\n}\n.align-self-lg-baseline {\n    -ms-flex-item-align: baseline !important;\n        align-self: baseline !important;\n}\n.align-self-lg-stretch {\n    -ms-flex-item-align: stretch !important;\n        align-self: stretch !important;\n}\n}\n@media (min-width: 1200px) {\n.flex-xl-row {\n    -webkit-box-orient: horizontal !important;\n    -webkit-box-direction: normal !important;\n        -ms-flex-direction: row !important;\n            flex-direction: row !important;\n}\n.flex-xl-column {\n    -webkit-box-orient: vertical !important;\n    -webkit-box-direction: normal !important;\n        -ms-flex-direction: column !important;\n            flex-direction: column !important;\n}\n.flex-xl-row-reverse {\n    -webkit-box-orient: horizontal !important;\n    -webkit-box-direction: reverse !important;\n        -ms-flex-direction: row-reverse !important;\n            flex-direction: row-reverse !important;\n}\n.flex-xl-column-reverse {\n    -webkit-box-orient: vertical !important;\n    -webkit-box-direction: reverse !important;\n        -ms-flex-direction: column-reverse !important;\n            flex-direction: column-reverse !important;\n}\n.flex-xl-wrap {\n    -ms-flex-wrap: wrap !important;\n        flex-wrap: wrap !important;\n}\n.flex-xl-nowrap {\n    -ms-flex-wrap: nowrap !important;\n        flex-wrap: nowrap !important;\n}\n.flex-xl-wrap-reverse {\n    -ms-flex-wrap: wrap-reverse !important;\n        flex-wrap: wrap-reverse !important;\n}\n.justify-content-xl-start {\n    -webkit-box-pack: start !important;\n        -ms-flex-pack: start !important;\n            justify-content: flex-start !important;\n}\n.justify-content-xl-end {\n    -webkit-box-pack: end !important;\n        -ms-flex-pack: end !important;\n            justify-content: flex-end !important;\n}\n.justify-content-xl-center {\n    -webkit-box-pack: center !important;\n        -ms-flex-pack: center !important;\n            justify-content: center !important;\n}\n.justify-content-xl-between {\n    -webkit-box-pack: justify !important;\n        -ms-flex-pack: justify !important;\n            justify-content: space-between !important;\n}\n.justify-content-xl-around {\n    -ms-flex-pack: distribute !important;\n        justify-content: space-around !important;\n}\n.align-items-xl-start {\n    -webkit-box-align: start !important;\n        -ms-flex-align: start !important;\n            align-items: flex-start !important;\n}\n.align-items-xl-end {\n    -webkit-box-align: end !important;\n        -ms-flex-align: end !important;\n            align-items: flex-end !important;\n}\n.align-items-xl-center {\n    -webkit-box-align: center !important;\n        -ms-flex-align: center !important;\n            align-items: center !important;\n}\n.align-items-xl-baseline {\n    -webkit-box-align: baseline !important;\n        -ms-flex-align: baseline !important;\n            align-items: baseline !important;\n}\n.align-items-xl-stretch {\n    -webkit-box-align: stretch !important;\n        -ms-flex-align: stretch !important;\n            align-items: stretch !important;\n}\n.align-content-xl-start {\n    -ms-flex-line-pack: start !important;\n        align-content: flex-start !important;\n}\n.align-content-xl-end {\n    -ms-flex-line-pack: end !important;\n        align-content: flex-end !important;\n}\n.align-content-xl-center {\n    -ms-flex-line-pack: center !important;\n        align-content: center !important;\n}\n.align-content-xl-between {\n    -ms-flex-line-pack: justify !important;\n        align-content: space-between !important;\n}\n.align-content-xl-around {\n    -ms-flex-line-pack: distribute !important;\n        align-content: space-around !important;\n}\n.align-content-xl-stretch {\n    -ms-flex-line-pack: stretch !important;\n        align-content: stretch !important;\n}\n.align-self-xl-auto {\n    -ms-flex-item-align: auto !important;\n        align-self: auto !important;\n}\n.align-self-xl-start {\n    -ms-flex-item-align: start !important;\n        align-self: flex-start !important;\n}\n.align-self-xl-end {\n    -ms-flex-item-align: end !important;\n        align-self: flex-end !important;\n}\n.align-self-xl-center {\n    -ms-flex-item-align: center !important;\n        align-self: center !important;\n}\n.align-self-xl-baseline {\n    -ms-flex-item-align: baseline !important;\n        align-self: baseline !important;\n}\n.align-self-xl-stretch {\n    -ms-flex-item-align: stretch !important;\n        align-self: stretch !important;\n}\n}\n.float-left {\n  float: left !important;\n}\n.float-right {\n  float: right !important;\n}\n.float-none {\n  float: none !important;\n}\n@media (min-width: 576px) {\n.float-sm-left {\n    float: left !important;\n}\n.float-sm-right {\n    float: right !important;\n}\n.float-sm-none {\n    float: none !important;\n}\n}\n@media (min-width: 768px) {\n.float-md-left {\n    float: left !important;\n}\n.float-md-right {\n    float: right !important;\n}\n.float-md-none {\n    float: none !important;\n}\n}\n@media (min-width: 992px) {\n.float-lg-left {\n    float: left !important;\n}\n.float-lg-right {\n    float: right !important;\n}\n.float-lg-none {\n    float: none !important;\n}\n}\n@media (min-width: 1200px) {\n.float-xl-left {\n    float: left !important;\n}\n.float-xl-right {\n    float: right !important;\n}\n.float-xl-none {\n    float: none !important;\n}\n}\n.position-static {\n  position: static !important;\n}\n.position-relative {\n  position: relative !important;\n}\n.position-absolute {\n  position: absolute !important;\n}\n.position-fixed {\n  position: fixed !important;\n}\n.position-sticky {\n  position: -webkit-sticky !important;\n  position: sticky !important;\n}\n.fixed-top {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 1030;\n}\n.fixed-bottom {\n  position: fixed;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1030;\n}\n@supports ((position: -webkit-sticky) or (position: sticky)) {\n.sticky-top {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 0;\n    z-index: 1020;\n}\n}\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  -webkit-clip-path: inset(50%);\n          clip-path: inset(50%);\n  border: 0;\n}\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  position: static;\n  width: auto;\n  height: auto;\n  overflow: visible;\n  clip: auto;\n  white-space: normal;\n  -webkit-clip-path: none;\n          clip-path: none;\n}\n.w-25 {\n  width: 25% !important;\n}\n.w-50 {\n  width: 50% !important;\n}\n.w-75 {\n  width: 75% !important;\n}\n.w-100 {\n  width: 100% !important;\n}\n.h-25 {\n  height: 25% !important;\n}\n.h-50 {\n  height: 50% !important;\n}\n.h-75 {\n  height: 75% !important;\n}\n.h-100 {\n  height: 100% !important;\n}\n.mw-100 {\n  max-width: 100% !important;\n}\n.mh-100 {\n  max-height: 100% !important;\n}\n.m-0 {\n  margin: 0 !important;\n}\n.mt-0,\n.my-0 {\n  margin-top: 0 !important;\n}\n.mr-0,\n.mx-0 {\n  margin-right: 0 !important;\n}\n.mb-0,\n.my-0 {\n  margin-bottom: 0 !important;\n}\n.ml-0,\n.mx-0 {\n  margin-left: 0 !important;\n}\n.m-1 {\n  margin: 0.25rem !important;\n}\n.mt-1,\n.my-1 {\n  margin-top: 0.25rem !important;\n}\n.mr-1,\n.mx-1 {\n  margin-right: 0.25rem !important;\n}\n.mb-1,\n.my-1 {\n  margin-bottom: 0.25rem !important;\n}\n.ml-1,\n.mx-1 {\n  margin-left: 0.25rem !important;\n}\n.m-2 {\n  margin: 0.5rem !important;\n}\n.mt-2,\n.my-2 {\n  margin-top: 0.5rem !important;\n}\n.mr-2,\n.mx-2 {\n  margin-right: 0.5rem !important;\n}\n.mb-2,\n.my-2 {\n  margin-bottom: 0.5rem !important;\n}\n.ml-2,\n.mx-2 {\n  margin-left: 0.5rem !important;\n}\n.m-3 {\n  margin: 1rem !important;\n}\n.mt-3,\n.my-3 {\n  margin-top: 1rem !important;\n}\n.mr-3,\n.mx-3 {\n  margin-right: 1rem !important;\n}\n.mb-3,\n.my-3 {\n  margin-bottom: 1rem !important;\n}\n.ml-3,\n.mx-3 {\n  margin-left: 1rem !important;\n}\n.m-4 {\n  margin: 1.5rem !important;\n}\n.mt-4,\n.my-4 {\n  margin-top: 1.5rem !important;\n}\n.mr-4,\n.mx-4 {\n  margin-right: 1.5rem !important;\n}\n.mb-4,\n.my-4 {\n  margin-bottom: 1.5rem !important;\n}\n.ml-4,\n.mx-4 {\n  margin-left: 1.5rem !important;\n}\n.m-5 {\n  margin: 3rem !important;\n}\n.mt-5,\n.my-5 {\n  margin-top: 3rem !important;\n}\n.mr-5,\n.mx-5 {\n  margin-right: 3rem !important;\n}\n.mb-5,\n.my-5 {\n  margin-bottom: 3rem !important;\n}\n.ml-5,\n.mx-5 {\n  margin-left: 3rem !important;\n}\n.p-0 {\n  padding: 0 !important;\n}\n.pt-0,\n.py-0 {\n  padding-top: 0 !important;\n}\n.pr-0,\n.px-0 {\n  padding-right: 0 !important;\n}\n.pb-0,\n.py-0 {\n  padding-bottom: 0 !important;\n}\n.pl-0,\n.px-0 {\n  padding-left: 0 !important;\n}\n.p-1 {\n  padding: 0.25rem !important;\n}\n.pt-1,\n.py-1 {\n  padding-top: 0.25rem !important;\n}\n.pr-1,\n.px-1 {\n  padding-right: 0.25rem !important;\n}\n.pb-1,\n.py-1 {\n  padding-bottom: 0.25rem !important;\n}\n.pl-1,\n.px-1 {\n  padding-left: 0.25rem !important;\n}\n.p-2 {\n  padding: 0.5rem !important;\n}\n.pt-2,\n.py-2 {\n  padding-top: 0.5rem !important;\n}\n.pr-2,\n.px-2 {\n  padding-right: 0.5rem !important;\n}\n.pb-2,\n.py-2 {\n  padding-bottom: 0.5rem !important;\n}\n.pl-2,\n.px-2 {\n  padding-left: 0.5rem !important;\n}\n.p-3 {\n  padding: 1rem !important;\n}\n.pt-3,\n.py-3 {\n  padding-top: 1rem !important;\n}\n.pr-3,\n.px-3 {\n  padding-right: 1rem !important;\n}\n.pb-3,\n.py-3 {\n  padding-bottom: 1rem !important;\n}\n.pl-3,\n.px-3 {\n  padding-left: 1rem !important;\n}\n.p-4 {\n  padding: 1.5rem !important;\n}\n.pt-4,\n.py-4 {\n  padding-top: 1.5rem !important;\n}\n.pr-4,\n.px-4 {\n  padding-right: 1.5rem !important;\n}\n.pb-4,\n.py-4 {\n  padding-bottom: 1.5rem !important;\n}\n.pl-4,\n.px-4 {\n  padding-left: 1.5rem !important;\n}\n.p-5 {\n  padding: 3rem !important;\n}\n.pt-5,\n.py-5 {\n  padding-top: 3rem !important;\n}\n.pr-5,\n.px-5 {\n  padding-right: 3rem !important;\n}\n.pb-5,\n.py-5 {\n  padding-bottom: 3rem !important;\n}\n.pl-5,\n.px-5 {\n  padding-left: 3rem !important;\n}\n.m-auto {\n  margin: auto !important;\n}\n.mt-auto,\n.my-auto {\n  margin-top: auto !important;\n}\n.mr-auto,\n.mx-auto {\n  margin-right: auto !important;\n}\n.mb-auto,\n.my-auto {\n  margin-bottom: auto !important;\n}\n.ml-auto,\n.mx-auto {\n  margin-left: auto !important;\n}\n@media (min-width: 576px) {\n.m-sm-0 {\n    margin: 0 !important;\n}\n.mt-sm-0,\n  .my-sm-0 {\n    margin-top: 0 !important;\n}\n.mr-sm-0,\n  .mx-sm-0 {\n    margin-right: 0 !important;\n}\n.mb-sm-0,\n  .my-sm-0 {\n    margin-bottom: 0 !important;\n}\n.ml-sm-0,\n  .mx-sm-0 {\n    margin-left: 0 !important;\n}\n.m-sm-1 {\n    margin: 0.25rem !important;\n}\n.mt-sm-1,\n  .my-sm-1 {\n    margin-top: 0.25rem !important;\n}\n.mr-sm-1,\n  .mx-sm-1 {\n    margin-right: 0.25rem !important;\n}\n.mb-sm-1,\n  .my-sm-1 {\n    margin-bottom: 0.25rem !important;\n}\n.ml-sm-1,\n  .mx-sm-1 {\n    margin-left: 0.25rem !important;\n}\n.m-sm-2 {\n    margin: 0.5rem !important;\n}\n.mt-sm-2,\n  .my-sm-2 {\n    margin-top: 0.5rem !important;\n}\n.mr-sm-2,\n  .mx-sm-2 {\n    margin-right: 0.5rem !important;\n}\n.mb-sm-2,\n  .my-sm-2 {\n    margin-bottom: 0.5rem !important;\n}\n.ml-sm-2,\n  .mx-sm-2 {\n    margin-left: 0.5rem !important;\n}\n.m-sm-3 {\n    margin: 1rem !important;\n}\n.mt-sm-3,\n  .my-sm-3 {\n    margin-top: 1rem !important;\n}\n.mr-sm-3,\n  .mx-sm-3 {\n    margin-right: 1rem !important;\n}\n.mb-sm-3,\n  .my-sm-3 {\n    margin-bottom: 1rem !important;\n}\n.ml-sm-3,\n  .mx-sm-3 {\n    margin-left: 1rem !important;\n}\n.m-sm-4 {\n    margin: 1.5rem !important;\n}\n.mt-sm-4,\n  .my-sm-4 {\n    margin-top: 1.5rem !important;\n}\n.mr-sm-4,\n  .mx-sm-4 {\n    margin-right: 1.5rem !important;\n}\n.mb-sm-4,\n  .my-sm-4 {\n    margin-bottom: 1.5rem !important;\n}\n.ml-sm-4,\n  .mx-sm-4 {\n    margin-left: 1.5rem !important;\n}\n.m-sm-5 {\n    margin: 3rem !important;\n}\n.mt-sm-5,\n  .my-sm-5 {\n    margin-top: 3rem !important;\n}\n.mr-sm-5,\n  .mx-sm-5 {\n    margin-right: 3rem !important;\n}\n.mb-sm-5,\n  .my-sm-5 {\n    margin-bottom: 3rem !important;\n}\n.ml-sm-5,\n  .mx-sm-5 {\n    margin-left: 3rem !important;\n}\n.p-sm-0 {\n    padding: 0 !important;\n}\n.pt-sm-0,\n  .py-sm-0 {\n    padding-top: 0 !important;\n}\n.pr-sm-0,\n  .px-sm-0 {\n    padding-right: 0 !important;\n}\n.pb-sm-0,\n  .py-sm-0 {\n    padding-bottom: 0 !important;\n}\n.pl-sm-0,\n  .px-sm-0 {\n    padding-left: 0 !important;\n}\n.p-sm-1 {\n    padding: 0.25rem !important;\n}\n.pt-sm-1,\n  .py-sm-1 {\n    padding-top: 0.25rem !important;\n}\n.pr-sm-1,\n  .px-sm-1 {\n    padding-right: 0.25rem !important;\n}\n.pb-sm-1,\n  .py-sm-1 {\n    padding-bottom: 0.25rem !important;\n}\n.pl-sm-1,\n  .px-sm-1 {\n    padding-left: 0.25rem !important;\n}\n.p-sm-2 {\n    padding: 0.5rem !important;\n}\n.pt-sm-2,\n  .py-sm-2 {\n    padding-top: 0.5rem !important;\n}\n.pr-sm-2,\n  .px-sm-2 {\n    padding-right: 0.5rem !important;\n}\n.pb-sm-2,\n  .py-sm-2 {\n    padding-bottom: 0.5rem !important;\n}\n.pl-sm-2,\n  .px-sm-2 {\n    padding-left: 0.5rem !important;\n}\n.p-sm-3 {\n    padding: 1rem !important;\n}\n.pt-sm-3,\n  .py-sm-3 {\n    padding-top: 1rem !important;\n}\n.pr-sm-3,\n  .px-sm-3 {\n    padding-right: 1rem !important;\n}\n.pb-sm-3,\n  .py-sm-3 {\n    padding-bottom: 1rem !important;\n}\n.pl-sm-3,\n  .px-sm-3 {\n    padding-left: 1rem !important;\n}\n.p-sm-4 {\n    padding: 1.5rem !important;\n}\n.pt-sm-4,\n  .py-sm-4 {\n    padding-top: 1.5rem !important;\n}\n.pr-sm-4,\n  .px-sm-4 {\n    padding-right: 1.5rem !important;\n}\n.pb-sm-4,\n  .py-sm-4 {\n    padding-bottom: 1.5rem !important;\n}\n.pl-sm-4,\n  .px-sm-4 {\n    padding-left: 1.5rem !important;\n}\n.p-sm-5 {\n    padding: 3rem !important;\n}\n.pt-sm-5,\n  .py-sm-5 {\n    padding-top: 3rem !important;\n}\n.pr-sm-5,\n  .px-sm-5 {\n    padding-right: 3rem !important;\n}\n.pb-sm-5,\n  .py-sm-5 {\n    padding-bottom: 3rem !important;\n}\n.pl-sm-5,\n  .px-sm-5 {\n    padding-left: 3rem !important;\n}\n.m-sm-auto {\n    margin: auto !important;\n}\n.mt-sm-auto,\n  .my-sm-auto {\n    margin-top: auto !important;\n}\n.mr-sm-auto,\n  .mx-sm-auto {\n    margin-right: auto !important;\n}\n.mb-sm-auto,\n  .my-sm-auto {\n    margin-bottom: auto !important;\n}\n.ml-sm-auto,\n  .mx-sm-auto {\n    margin-left: auto !important;\n}\n}\n@media (min-width: 768px) {\n.m-md-0 {\n    margin: 0 !important;\n}\n.mt-md-0,\n  .my-md-0 {\n    margin-top: 0 !important;\n}\n.mr-md-0,\n  .mx-md-0 {\n    margin-right: 0 !important;\n}\n.mb-md-0,\n  .my-md-0 {\n    margin-bottom: 0 !important;\n}\n.ml-md-0,\n  .mx-md-0 {\n    margin-left: 0 !important;\n}\n.m-md-1 {\n    margin: 0.25rem !important;\n}\n.mt-md-1,\n  .my-md-1 {\n    margin-top: 0.25rem !important;\n}\n.mr-md-1,\n  .mx-md-1 {\n    margin-right: 0.25rem !important;\n}\n.mb-md-1,\n  .my-md-1 {\n    margin-bottom: 0.25rem !important;\n}\n.ml-md-1,\n  .mx-md-1 {\n    margin-left: 0.25rem !important;\n}\n.m-md-2 {\n    margin: 0.5rem !important;\n}\n.mt-md-2,\n  .my-md-2 {\n    margin-top: 0.5rem !important;\n}\n.mr-md-2,\n  .mx-md-2 {\n    margin-right: 0.5rem !important;\n}\n.mb-md-2,\n  .my-md-2 {\n    margin-bottom: 0.5rem !important;\n}\n.ml-md-2,\n  .mx-md-2 {\n    margin-left: 0.5rem !important;\n}\n.m-md-3 {\n    margin: 1rem !important;\n}\n.mt-md-3,\n  .my-md-3 {\n    margin-top: 1rem !important;\n}\n.mr-md-3,\n  .mx-md-3 {\n    margin-right: 1rem !important;\n}\n.mb-md-3,\n  .my-md-3 {\n    margin-bottom: 1rem !important;\n}\n.ml-md-3,\n  .mx-md-3 {\n    margin-left: 1rem !important;\n}\n.m-md-4 {\n    margin: 1.5rem !important;\n}\n.mt-md-4,\n  .my-md-4 {\n    margin-top: 1.5rem !important;\n}\n.mr-md-4,\n  .mx-md-4 {\n    margin-right: 1.5rem !important;\n}\n.mb-md-4,\n  .my-md-4 {\n    margin-bottom: 1.5rem !important;\n}\n.ml-md-4,\n  .mx-md-4 {\n    margin-left: 1.5rem !important;\n}\n.m-md-5 {\n    margin: 3rem !important;\n}\n.mt-md-5,\n  .my-md-5 {\n    margin-top: 3rem !important;\n}\n.mr-md-5,\n  .mx-md-5 {\n    margin-right: 3rem !important;\n}\n.mb-md-5,\n  .my-md-5 {\n    margin-bottom: 3rem !important;\n}\n.ml-md-5,\n  .mx-md-5 {\n    margin-left: 3rem !important;\n}\n.p-md-0 {\n    padding: 0 !important;\n}\n.pt-md-0,\n  .py-md-0 {\n    padding-top: 0 !important;\n}\n.pr-md-0,\n  .px-md-0 {\n    padding-right: 0 !important;\n}\n.pb-md-0,\n  .py-md-0 {\n    padding-bottom: 0 !important;\n}\n.pl-md-0,\n  .px-md-0 {\n    padding-left: 0 !important;\n}\n.p-md-1 {\n    padding: 0.25rem !important;\n}\n.pt-md-1,\n  .py-md-1 {\n    padding-top: 0.25rem !important;\n}\n.pr-md-1,\n  .px-md-1 {\n    padding-right: 0.25rem !important;\n}\n.pb-md-1,\n  .py-md-1 {\n    padding-bottom: 0.25rem !important;\n}\n.pl-md-1,\n  .px-md-1 {\n    padding-left: 0.25rem !important;\n}\n.p-md-2 {\n    padding: 0.5rem !important;\n}\n.pt-md-2,\n  .py-md-2 {\n    padding-top: 0.5rem !important;\n}\n.pr-md-2,\n  .px-md-2 {\n    padding-right: 0.5rem !important;\n}\n.pb-md-2,\n  .py-md-2 {\n    padding-bottom: 0.5rem !important;\n}\n.pl-md-2,\n  .px-md-2 {\n    padding-left: 0.5rem !important;\n}\n.p-md-3 {\n    padding: 1rem !important;\n}\n.pt-md-3,\n  .py-md-3 {\n    padding-top: 1rem !important;\n}\n.pr-md-3,\n  .px-md-3 {\n    padding-right: 1rem !important;\n}\n.pb-md-3,\n  .py-md-3 {\n    padding-bottom: 1rem !important;\n}\n.pl-md-3,\n  .px-md-3 {\n    padding-left: 1rem !important;\n}\n.p-md-4 {\n    padding: 1.5rem !important;\n}\n.pt-md-4,\n  .py-md-4 {\n    padding-top: 1.5rem !important;\n}\n.pr-md-4,\n  .px-md-4 {\n    padding-right: 1.5rem !important;\n}\n.pb-md-4,\n  .py-md-4 {\n    padding-bottom: 1.5rem !important;\n}\n.pl-md-4,\n  .px-md-4 {\n    padding-left: 1.5rem !important;\n}\n.p-md-5 {\n    padding: 3rem !important;\n}\n.pt-md-5,\n  .py-md-5 {\n    padding-top: 3rem !important;\n}\n.pr-md-5,\n  .px-md-5 {\n    padding-right: 3rem !important;\n}\n.pb-md-5,\n  .py-md-5 {\n    padding-bottom: 3rem !important;\n}\n.pl-md-5,\n  .px-md-5 {\n    padding-left: 3rem !important;\n}\n.m-md-auto {\n    margin: auto !important;\n}\n.mt-md-auto,\n  .my-md-auto {\n    margin-top: auto !important;\n}\n.mr-md-auto,\n  .mx-md-auto {\n    margin-right: auto !important;\n}\n.mb-md-auto,\n  .my-md-auto {\n    margin-bottom: auto !important;\n}\n.ml-md-auto,\n  .mx-md-auto {\n    margin-left: auto !important;\n}\n}\n@media (min-width: 992px) {\n.m-lg-0 {\n    margin: 0 !important;\n}\n.mt-lg-0,\n  .my-lg-0 {\n    margin-top: 0 !important;\n}\n.mr-lg-0,\n  .mx-lg-0 {\n    margin-right: 0 !important;\n}\n.mb-lg-0,\n  .my-lg-0 {\n    margin-bottom: 0 !important;\n}\n.ml-lg-0,\n  .mx-lg-0 {\n    margin-left: 0 !important;\n}\n.m-lg-1 {\n    margin: 0.25rem !important;\n}\n.mt-lg-1,\n  .my-lg-1 {\n    margin-top: 0.25rem !important;\n}\n.mr-lg-1,\n  .mx-lg-1 {\n    margin-right: 0.25rem !important;\n}\n.mb-lg-1,\n  .my-lg-1 {\n    margin-bottom: 0.25rem !important;\n}\n.ml-lg-1,\n  .mx-lg-1 {\n    margin-left: 0.25rem !important;\n}\n.m-lg-2 {\n    margin: 0.5rem !important;\n}\n.mt-lg-2,\n  .my-lg-2 {\n    margin-top: 0.5rem !important;\n}\n.mr-lg-2,\n  .mx-lg-2 {\n    margin-right: 0.5rem !important;\n}\n.mb-lg-2,\n  .my-lg-2 {\n    margin-bottom: 0.5rem !important;\n}\n.ml-lg-2,\n  .mx-lg-2 {\n    margin-left: 0.5rem !important;\n}\n.m-lg-3 {\n    margin: 1rem !important;\n}\n.mt-lg-3,\n  .my-lg-3 {\n    margin-top: 1rem !important;\n}\n.mr-lg-3,\n  .mx-lg-3 {\n    margin-right: 1rem !important;\n}\n.mb-lg-3,\n  .my-lg-3 {\n    margin-bottom: 1rem !important;\n}\n.ml-lg-3,\n  .mx-lg-3 {\n    margin-left: 1rem !important;\n}\n.m-lg-4 {\n    margin: 1.5rem !important;\n}\n.mt-lg-4,\n  .my-lg-4 {\n    margin-top: 1.5rem !important;\n}\n.mr-lg-4,\n  .mx-lg-4 {\n    margin-right: 1.5rem !important;\n}\n.mb-lg-4,\n  .my-lg-4 {\n    margin-bottom: 1.5rem !important;\n}\n.ml-lg-4,\n  .mx-lg-4 {\n    margin-left: 1.5rem !important;\n}\n.m-lg-5 {\n    margin: 3rem !important;\n}\n.mt-lg-5,\n  .my-lg-5 {\n    margin-top: 3rem !important;\n}\n.mr-lg-5,\n  .mx-lg-5 {\n    margin-right: 3rem !important;\n}\n.mb-lg-5,\n  .my-lg-5 {\n    margin-bottom: 3rem !important;\n}\n.ml-lg-5,\n  .mx-lg-5 {\n    margin-left: 3rem !important;\n}\n.p-lg-0 {\n    padding: 0 !important;\n}\n.pt-lg-0,\n  .py-lg-0 {\n    padding-top: 0 !important;\n}\n.pr-lg-0,\n  .px-lg-0 {\n    padding-right: 0 !important;\n}\n.pb-lg-0,\n  .py-lg-0 {\n    padding-bottom: 0 !important;\n}\n.pl-lg-0,\n  .px-lg-0 {\n    padding-left: 0 !important;\n}\n.p-lg-1 {\n    padding: 0.25rem !important;\n}\n.pt-lg-1,\n  .py-lg-1 {\n    padding-top: 0.25rem !important;\n}\n.pr-lg-1,\n  .px-lg-1 {\n    padding-right: 0.25rem !important;\n}\n.pb-lg-1,\n  .py-lg-1 {\n    padding-bottom: 0.25rem !important;\n}\n.pl-lg-1,\n  .px-lg-1 {\n    padding-left: 0.25rem !important;\n}\n.p-lg-2 {\n    padding: 0.5rem !important;\n}\n.pt-lg-2,\n  .py-lg-2 {\n    padding-top: 0.5rem !important;\n}\n.pr-lg-2,\n  .px-lg-2 {\n    padding-right: 0.5rem !important;\n}\n.pb-lg-2,\n  .py-lg-2 {\n    padding-bottom: 0.5rem !important;\n}\n.pl-lg-2,\n  .px-lg-2 {\n    padding-left: 0.5rem !important;\n}\n.p-lg-3 {\n    padding: 1rem !important;\n}\n.pt-lg-3,\n  .py-lg-3 {\n    padding-top: 1rem !important;\n}\n.pr-lg-3,\n  .px-lg-3 {\n    padding-right: 1rem !important;\n}\n.pb-lg-3,\n  .py-lg-3 {\n    padding-bottom: 1rem !important;\n}\n.pl-lg-3,\n  .px-lg-3 {\n    padding-left: 1rem !important;\n}\n.p-lg-4 {\n    padding: 1.5rem !important;\n}\n.pt-lg-4,\n  .py-lg-4 {\n    padding-top: 1.5rem !important;\n}\n.pr-lg-4,\n  .px-lg-4 {\n    padding-right: 1.5rem !important;\n}\n.pb-lg-4,\n  .py-lg-4 {\n    padding-bottom: 1.5rem !important;\n}\n.pl-lg-4,\n  .px-lg-4 {\n    padding-left: 1.5rem !important;\n}\n.p-lg-5 {\n    padding: 3rem !important;\n}\n.pt-lg-5,\n  .py-lg-5 {\n    padding-top: 3rem !important;\n}\n.pr-lg-5,\n  .px-lg-5 {\n    padding-right: 3rem !important;\n}\n.pb-lg-5,\n  .py-lg-5 {\n    padding-bottom: 3rem !important;\n}\n.pl-lg-5,\n  .px-lg-5 {\n    padding-left: 3rem !important;\n}\n.m-lg-auto {\n    margin: auto !important;\n}\n.mt-lg-auto,\n  .my-lg-auto {\n    margin-top: auto !important;\n}\n.mr-lg-auto,\n  .mx-lg-auto {\n    margin-right: auto !important;\n}\n.mb-lg-auto,\n  .my-lg-auto {\n    margin-bottom: auto !important;\n}\n.ml-lg-auto,\n  .mx-lg-auto {\n    margin-left: auto !important;\n}\n}\n@media (min-width: 1200px) {\n.m-xl-0 {\n    margin: 0 !important;\n}\n.mt-xl-0,\n  .my-xl-0 {\n    margin-top: 0 !important;\n}\n.mr-xl-0,\n  .mx-xl-0 {\n    margin-right: 0 !important;\n}\n.mb-xl-0,\n  .my-xl-0 {\n    margin-bottom: 0 !important;\n}\n.ml-xl-0,\n  .mx-xl-0 {\n    margin-left: 0 !important;\n}\n.m-xl-1 {\n    margin: 0.25rem !important;\n}\n.mt-xl-1,\n  .my-xl-1 {\n    margin-top: 0.25rem !important;\n}\n.mr-xl-1,\n  .mx-xl-1 {\n    margin-right: 0.25rem !important;\n}\n.mb-xl-1,\n  .my-xl-1 {\n    margin-bottom: 0.25rem !important;\n}\n.ml-xl-1,\n  .mx-xl-1 {\n    margin-left: 0.25rem !important;\n}\n.m-xl-2 {\n    margin: 0.5rem !important;\n}\n.mt-xl-2,\n  .my-xl-2 {\n    margin-top: 0.5rem !important;\n}\n.mr-xl-2,\n  .mx-xl-2 {\n    margin-right: 0.5rem !important;\n}\n.mb-xl-2,\n  .my-xl-2 {\n    margin-bottom: 0.5rem !important;\n}\n.ml-xl-2,\n  .mx-xl-2 {\n    margin-left: 0.5rem !important;\n}\n.m-xl-3 {\n    margin: 1rem !important;\n}\n.mt-xl-3,\n  .my-xl-3 {\n    margin-top: 1rem !important;\n}\n.mr-xl-3,\n  .mx-xl-3 {\n    margin-right: 1rem !important;\n}\n.mb-xl-3,\n  .my-xl-3 {\n    margin-bottom: 1rem !important;\n}\n.ml-xl-3,\n  .mx-xl-3 {\n    margin-left: 1rem !important;\n}\n.m-xl-4 {\n    margin: 1.5rem !important;\n}\n.mt-xl-4,\n  .my-xl-4 {\n    margin-top: 1.5rem !important;\n}\n.mr-xl-4,\n  .mx-xl-4 {\n    margin-right: 1.5rem !important;\n}\n.mb-xl-4,\n  .my-xl-4 {\n    margin-bottom: 1.5rem !important;\n}\n.ml-xl-4,\n  .mx-xl-4 {\n    margin-left: 1.5rem !important;\n}\n.m-xl-5 {\n    margin: 3rem !important;\n}\n.mt-xl-5,\n  .my-xl-5 {\n    margin-top: 3rem !important;\n}\n.mr-xl-5,\n  .mx-xl-5 {\n    margin-right: 3rem !important;\n}\n.mb-xl-5,\n  .my-xl-5 {\n    margin-bottom: 3rem !important;\n}\n.ml-xl-5,\n  .mx-xl-5 {\n    margin-left: 3rem !important;\n}\n.p-xl-0 {\n    padding: 0 !important;\n}\n.pt-xl-0,\n  .py-xl-0 {\n    padding-top: 0 !important;\n}\n.pr-xl-0,\n  .px-xl-0 {\n    padding-right: 0 !important;\n}\n.pb-xl-0,\n  .py-xl-0 {\n    padding-bottom: 0 !important;\n}\n.pl-xl-0,\n  .px-xl-0 {\n    padding-left: 0 !important;\n}\n.p-xl-1 {\n    padding: 0.25rem !important;\n}\n.pt-xl-1,\n  .py-xl-1 {\n    padding-top: 0.25rem !important;\n}\n.pr-xl-1,\n  .px-xl-1 {\n    padding-right: 0.25rem !important;\n}\n.pb-xl-1,\n  .py-xl-1 {\n    padding-bottom: 0.25rem !important;\n}\n.pl-xl-1,\n  .px-xl-1 {\n    padding-left: 0.25rem !important;\n}\n.p-xl-2 {\n    padding: 0.5rem !important;\n}\n.pt-xl-2,\n  .py-xl-2 {\n    padding-top: 0.5rem !important;\n}\n.pr-xl-2,\n  .px-xl-2 {\n    padding-right: 0.5rem !important;\n}\n.pb-xl-2,\n  .py-xl-2 {\n    padding-bottom: 0.5rem !important;\n}\n.pl-xl-2,\n  .px-xl-2 {\n    padding-left: 0.5rem !important;\n}\n.p-xl-3 {\n    padding: 1rem !important;\n}\n.pt-xl-3,\n  .py-xl-3 {\n    padding-top: 1rem !important;\n}\n.pr-xl-3,\n  .px-xl-3 {\n    padding-right: 1rem !important;\n}\n.pb-xl-3,\n  .py-xl-3 {\n    padding-bottom: 1rem !important;\n}\n.pl-xl-3,\n  .px-xl-3 {\n    padding-left: 1rem !important;\n}\n.p-xl-4 {\n    padding: 1.5rem !important;\n}\n.pt-xl-4,\n  .py-xl-4 {\n    padding-top: 1.5rem !important;\n}\n.pr-xl-4,\n  .px-xl-4 {\n    padding-right: 1.5rem !important;\n}\n.pb-xl-4,\n  .py-xl-4 {\n    padding-bottom: 1.5rem !important;\n}\n.pl-xl-4,\n  .px-xl-4 {\n    padding-left: 1.5rem !important;\n}\n.p-xl-5 {\n    padding: 3rem !important;\n}\n.pt-xl-5,\n  .py-xl-5 {\n    padding-top: 3rem !important;\n}\n.pr-xl-5,\n  .px-xl-5 {\n    padding-right: 3rem !important;\n}\n.pb-xl-5,\n  .py-xl-5 {\n    padding-bottom: 3rem !important;\n}\n.pl-xl-5,\n  .px-xl-5 {\n    padding-left: 3rem !important;\n}\n.m-xl-auto {\n    margin: auto !important;\n}\n.mt-xl-auto,\n  .my-xl-auto {\n    margin-top: auto !important;\n}\n.mr-xl-auto,\n  .mx-xl-auto {\n    margin-right: auto !important;\n}\n.mb-xl-auto,\n  .my-xl-auto {\n    margin-bottom: auto !important;\n}\n.ml-xl-auto,\n  .mx-xl-auto {\n    margin-left: auto !important;\n}\n}\n.text-justify {\n  text-align: justify !important;\n}\n.text-nowrap {\n  white-space: nowrap !important;\n}\n.text-truncate {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.text-left {\n  text-align: left !important;\n}\n.text-right {\n  text-align: right !important;\n}\n.text-center {\n  text-align: center !important;\n}\n@media (min-width: 576px) {\n.text-sm-left {\n    text-align: left !important;\n}\n.text-sm-right {\n    text-align: right !important;\n}\n.text-sm-center {\n    text-align: center !important;\n}\n}\n@media (min-width: 768px) {\n.text-md-left {\n    text-align: left !important;\n}\n.text-md-right {\n    text-align: right !important;\n}\n.text-md-center {\n    text-align: center !important;\n}\n}\n@media (min-width: 992px) {\n.text-lg-left {\n    text-align: left !important;\n}\n.text-lg-right {\n    text-align: right !important;\n}\n.text-lg-center {\n    text-align: center !important;\n}\n}\n@media (min-width: 1200px) {\n.text-xl-left {\n    text-align: left !important;\n}\n.text-xl-right {\n    text-align: right !important;\n}\n.text-xl-center {\n    text-align: center !important;\n}\n}\n.text-lowercase {\n  text-transform: lowercase !important;\n}\n.text-uppercase {\n  text-transform: uppercase !important;\n}\n.text-capitalize {\n  text-transform: capitalize !important;\n}\n.font-weight-light {\n  font-weight: 300 !important;\n}\n.font-weight-normal {\n  font-weight: normal !important;\n}\n.font-weight-bold {\n  font-weight: bold !important;\n}\n.font-italic {\n  font-style: italic !important;\n}\n.text-white {\n  color: #fff !important;\n}\n.text-primary {\n  color: #007bff !important;\n}\na.text-primary:focus, a.text-primary:hover {\n  color: #0062cc !important;\n}\n.text-secondary {\n  color: #868e96 !important;\n}\na.text-secondary:focus, a.text-secondary:hover {\n  color: #6c757d !important;\n}\n.text-success {\n  color: #28a745 !important;\n}\na.text-success:focus, a.text-success:hover {\n  color: #1e7e34 !important;\n}\n.text-info {\n  color: #17a2b8 !important;\n}\na.text-info:focus, a.text-info:hover {\n  color: #117a8b !important;\n}\n.text-warning {\n  color: #ffc107 !important;\n}\na.text-warning:focus, a.text-warning:hover {\n  color: #d39e00 !important;\n}\n.text-danger {\n  color: #dc3545 !important;\n}\na.text-danger:focus, a.text-danger:hover {\n  color: #bd2130 !important;\n}\n.text-light {\n  color: #f8f9fa !important;\n}\na.text-light:focus, a.text-light:hover {\n  color: #dae0e5 !important;\n}\n.text-dark {\n  color: #343a40 !important;\n}\na.text-dark:focus, a.text-dark:hover {\n  color: #1d2124 !important;\n}\n.text-muted {\n  color: #868e96 !important;\n}\n.text-hide {\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0;\n}\n.visible {\n  visibility: visible !important;\n}\n.invisible {\n  visibility: hidden !important;\n}\n.page-wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  min-height: 100vh;\n}\n.page-content-wrapper {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n.widget ul {\n  margin-left: 2rem;\n}\n.loader {\n  position: fixed;\n  top: 0;\n  width: 100%;\n  height: 3px;\n  z-index: 1000000;\n}\n.loader .progress-bar {\n  background: #d9534f;\n  height: 3px;\n  background-color: #d9534f;\n  -webkit-transition: all 0.25s;\n  transition: all 0.25s;\n}\n.loader-animation-leave-active {\n  -webkit-transition: delay 1s;\n  transition: delay 1s;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e803cf0c\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./src/components/widgets/Pages.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, "\n.recent-posts ul[data-v-e803cf0c] {\n  margin-left: 2rem;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ec10328e\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./src/components/Home.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, "\n.jumbotron {\n  margin-top: 5%;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f5ee7324\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./src/components/widgets/RecentPosts.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/vue-lazyload/vue-lazyload.js":
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Vue-Lazyload.js v1.1.3
 * (c) 2017 Awe <hilongjw@gmail.com>
 * Released under the MIT License.
 */
!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):e.VueLazyload=t()}(this,function(){"use strict";function e(e,t){if(e.length){var n=e.indexOf(t);return n>-1?e.splice(n,1):void 0}}function t(e,t){if(!e||!t)return e||{};if(e instanceof Object)for(var n in t)e[n]=t[n];return e}function n(e,t){for(var n=!1,r=0,i=e.length;r<i;r++)if(t(e[r])){n=!0;break}return n}function r(e,t){if("IMG"===e.tagName&&e.getAttribute("data-srcset")){var n=e.getAttribute("data-srcset"),r=[],i=e.parentNode,o=i.offsetWidth*t,s=void 0,a=void 0,u=void 0;n=n.trim().split(","),n.map(function(e){e=e.trim(),s=e.lastIndexOf(" "),s===-1?(a=e,u=999998):(a=e.substr(0,s),u=parseInt(e.substr(s+1,e.length-s-2),10)),r.push([u,a])}),r.sort(function(e,t){if(e[0]<t[0])return-1;if(e[0]>t[0])return 1;if(e[0]===t[0]){if(t[1].indexOf(".webp",t[1].length-5)!==-1)return 1;if(e[1].indexOf(".webp",e[1].length-5)!==-1)return-1}return 0});for(var l="",d=void 0,h=r.length,c=0;c<h;c++)if(d=r[c],d[0]>=o){l=d[1];break}return l}}function i(e,t){for(var n=void 0,r=0,i=e.length;r<i;r++)if(t(e[r])){n=e[r];break}return n}function o(){if(!f)return!1;var e=!0,t=document;try{var n=t.createElement("object");n.type="image/webp",n.style.visibility="hidden",n.innerHTML="!",t.body.appendChild(n),e=!n.offsetWidth,t.body.removeChild(n)}catch(t){e=!1}return e}function s(e,t){var n=null,r=0;return function(){if(!n){var i=Date.now()-r,o=this,s=arguments,a=function(){r=Date.now(),n=!1,e.apply(o,s)};i>=t?a():n=setTimeout(a,t)}}}function a(){if(f){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener("test",null,t)}catch(e){}return e}}function u(e){return null!==e&&"object"===("undefined"==typeof e?"undefined":c(e))}function l(e){if(!(e instanceof Object))return[];if(Object.keys)return Object.keys(e);var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(n);return t}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f="undefined"!=typeof window,v=f&&"IntersectionObserver"in window,p={event:"event",observer:"observer"},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return f&&window.devicePixelRatio||e},b=a(),g={on:function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];b?e.addEventListener(t,n,{capture:r,passive:!0}):e.addEventListener(t,n,r)},off:function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];e.removeEventListener(t,n,r)}},m=function(e,t,n){var r=new Image;r.src=e.src,r.onload=function(){t({naturalHeight:r.naturalHeight,naturalWidth:r.naturalWidth,src:r.src})},r.onerror=function(e){n(e)}},L=function(e,t){return"undefined"!=typeof getComputedStyle?getComputedStyle(e,null).getPropertyValue(t):e.style[t]},w=function(e){return L(e,"overflow")+L(e,"overflow-y")+L(e,"overflow-x")},_=function(e){if(f){if(!(e instanceof HTMLElement))return window;for(var t=e;t&&t!==document.body&&t!==document.documentElement&&t.parentNode;){if(/(scroll|auto)/.test(w(t)))return t;t=t.parentNode}return window}},k=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),E={},T=function(){function e(t){var n=t.el,r=t.src,i=t.error,o=t.loading,s=t.bindType,a=t.$parent,u=t.options,l=t.elRenderer;d(this,e),this.el=n,this.src=r,this.error=i,this.loading=o,this.bindType=s,this.attempt=0,this.naturalHeight=0,this.naturalWidth=0,this.options=u,this.filter(),this.initState(),this.performanceData={init:Date.now(),loadStart:null,loadEnd:null},this.rect=n.getBoundingClientRect(),this.$parent=a,this.elRenderer=l,this.render("loading",!1)}return k(e,[{key:"initState",value:function(){this.state={error:!1,loaded:!1,rendered:!1}}},{key:"record",value:function(e){this.performanceData[e]=Date.now()}},{key:"update",value:function(e){var t=e.src,n=e.loading,r=e.error,i=this.src;this.src=t,this.loading=n,this.error=r,this.filter(),i!==this.src&&(this.attempt=0,this.initState())}},{key:"getRect",value:function(){this.rect=this.el.getBoundingClientRect()}},{key:"checkInView",value:function(){return this.getRect(),this.rect.top<window.innerHeight*this.options.preLoad&&this.rect.bottom>this.options.preLoadTop&&this.rect.left<window.innerWidth*this.options.preLoad&&this.rect.right>0}},{key:"filter",value:function(){var e=this;l(this.options.filter).map(function(t){e.options.filter[t](e,e.options)})}},{key:"renderLoading",value:function(e){var t=this;m({src:this.loading},function(n){t.render("loading",!1),e()})}},{key:"load",value:function(){var e=this;return this.attempt>this.options.attempt-1&&this.state.error?void(this.options.silent||console.log("VueLazyload log: "+this.src+" tried too more than "+this.options.attempt+" times")):this.state.loaded||E[this.src]?this.render("loaded",!0):void this.renderLoading(function(){e.attempt++,e.record("loadStart"),m({src:e.src},function(t){e.naturalHeight=t.naturalHeight,e.naturalWidth=t.naturalWidth,e.state.loaded=!0,e.state.error=!1,e.record("loadEnd"),e.render("loaded",!1),E[e.src]=1},function(t){e.state.error=!0,e.state.loaded=!1,e.render("error",!1)})})}},{key:"render",value:function(e,t){this.elRenderer(this,e,t)}},{key:"performance",value:function(){var e="loading",t=0;return this.state.loaded&&(e="loaded",t=(this.performanceData.loadEnd-this.performanceData.loadStart)/1e3),this.state.error&&(e="error"),{src:this.src,state:e,time:t}}},{key:"destroy",value:function(){this.el=null,this.src=null,this.error=null,this.loading=null,this.bindType=null,this.attempt=0}}]),e}(),A=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),$="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",z=["scroll","wheel","mousewheel","resize","animationend","transitionend","touchmove"],H={rootMargin:"0px",threshold:0},O=function(a){return function(){function l(e){var t=e.preLoad,n=e.error,r=e.throttleWait,i=e.preLoadTop,a=e.dispatchEvent,u=e.loading,d=e.attempt,c=e.silent,f=e.scale,v=e.listenEvents,b=(e.hasbind,e.filter),g=e.adapter,m=e.observer,L=e.observerOptions;h(this,l),this.version="1.1.3",this.mode=p.event,this.ListenerQueue=[],this.TargetIndex=0,this.TargetQueue=[],this.options={silent:c||!0,dispatchEvent:!!a,throttleWait:r||200,preLoad:t||1.3,preLoadTop:i||0,error:n||$,loading:u||$,attempt:d||3,scale:f||y(f),ListenEvents:v||z,hasbind:!1,supportWebp:o(),filter:b||{},adapter:g||{},observer:!!m,observerOptions:L||H},this._initEvent(),this.lazyLoadHandler=s(this._lazyLoadHandler.bind(this),this.options.throttleWait),this.setMode(this.options.observer?p.observer:p.event)}return A(l,[{key:"config",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t(this.options,e)}},{key:"performance",value:function(){var e=[];return this.ListenerQueue.map(function(t){e.push(t.performance())}),e}},{key:"addLazyBox",value:function(e){this.ListenerQueue.push(e),f&&(this._addListenerTarget(window),this._observer&&this._observer.observe(e.el),e.$el&&e.$el.parentNode&&this._addListenerTarget(e.$el.parentNode))}},{key:"add",value:function(e,t,i){var o=this;if(n(this.ListenerQueue,function(t){return t.el===e}))return this.update(e,t),a.nextTick(this.lazyLoadHandler);var s=this._valueFormatter(t.value),u=s.src,l=s.loading,d=s.error;a.nextTick(function(){u=r(e,o.options.scale)||u,o._observer&&o._observer.observe(e);var n=Object.keys(t.modifiers)[0],s=void 0;n&&(s=i.context.$refs[n],s=s?s.$el||s:document.getElementById(n)),s||(s=_(e));var h=new T({bindType:t.arg,$parent:s,el:e,loading:l,error:d,src:u,elRenderer:o._elRenderer.bind(o),options:o.options});o.ListenerQueue.push(h),f&&(o._addListenerTarget(window),o._addListenerTarget(s)),o.lazyLoadHandler(),a.nextTick(function(){return o.lazyLoadHandler()})})}},{key:"update",value:function(e,t){var n=this,o=this._valueFormatter(t.value),s=o.src,u=o.loading,l=o.error;s=r(e,this.options.scale)||s;var d=i(this.ListenerQueue,function(t){return t.el===e});d&&d.update({src:s,loading:u,error:l}),this._observer&&this._observer.observe(e),this.lazyLoadHandler(),a.nextTick(function(){return n.lazyLoadHandler()})}},{key:"remove",value:function(t){if(t){this._observer&&this._observer.unobserve(t);var n=i(this.ListenerQueue,function(e){return e.el===t});n&&(this._removeListenerTarget(n.$parent),this._removeListenerTarget(window),e(this.ListenerQueue,n)&&n.destroy())}}},{key:"removeComponent",value:function(t){t&&(e(this.ListenerQueue,t),this._observer&&this._observer.unobserve(t.el),t.$parent&&t.$el.parentNode&&this._removeListenerTarget(t.$el.parentNode),this._removeListenerTarget(window))}},{key:"setMode",value:function(e){var t=this;v||e!==p.observer||(e=p.event),this.mode=e,e===p.event?(this._observer&&(this.ListenerQueue.forEach(function(e){t._observer.unobserve(e.el)}),this._observer=null),this.TargetQueue.forEach(function(e){t._initListen(e.el,!0)})):(this.TargetQueue.forEach(function(e){t._initListen(e.el,!1)}),this._initIntersectionObserver())}},{key:"_addListenerTarget",value:function(e){if(e){var t=i(this.TargetQueue,function(t){return t.el===e});return t?t.childrenCount++:(t={el:e,id:++this.TargetIndex,childrenCount:1,listened:!0},this.mode===p.event&&this._initListen(t.el,!0),this.TargetQueue.push(t)),this.TargetIndex}}},{key:"_removeListenerTarget",value:function(e){var t=this;this.TargetQueue.forEach(function(n,r){n.el===e&&(n.childrenCount--,n.childrenCount||(t._initListen(n.el,!1),t.TargetQueue.splice(r,1),n=null))})}},{key:"_initListen",value:function(e,t){var n=this;this.options.ListenEvents.forEach(function(r){return g[t?"on":"off"](e,r,n.lazyLoadHandler)})}},{key:"_initEvent",value:function(){var t=this;this.Event={listeners:{loading:[],loaded:[],error:[]}},this.$on=function(e,n){t.Event.listeners[e].push(n)},this.$once=function(e,n){function r(){i.$off(e,r),n.apply(i,arguments)}var i=t;t.$on(e,r)},this.$off=function(n,r){return r?void e(t.Event.listeners[n],r):void(t.Event.listeners[n]=[])},this.$emit=function(e,n,r){t.Event.listeners[e].forEach(function(e){return e(n,r)})}}},{key:"_lazyLoadHandler",value:function(){var e=!1;this.ListenerQueue.forEach(function(t){t.state.loaded||(e=t.checkInView(),e&&t.load())})}},{key:"_initIntersectionObserver",value:function(){var e=this;v&&(this._observer=new IntersectionObserver(this._observerHandler.bind(this),this.options.observerOptions),this.ListenerQueue.length&&this.ListenerQueue.forEach(function(t){e._observer.observe(t.el)}))}},{key:"_observerHandler",value:function(e,t){var n=this;e.forEach(function(e){e.isIntersecting&&n.ListenerQueue.forEach(function(t){if(t.el===e.target){if(t.state.loaded)return n._observer.unobserve(t.el);t.load()}})})}},{key:"_elRenderer",value:function(e,t,n){if(e.el){var r=e.el,i=e.bindType,o=void 0;switch(t){case"loading":o=e.loading;break;case"error":o=e.error;break;default:o=e.src}if(i?r.style[i]="url("+o+")":r.getAttribute("src")!==o&&r.setAttribute("src",o),r.setAttribute("lazy",t),this.$emit(t,e,n),this.options.adapter[t]&&this.options.adapter[t](e,this.options),this.options.dispatchEvent){var s=new CustomEvent(t,{detail:e});r.dispatchEvent(s)}}}},{key:"_valueFormatter",value:function(e){var t=e,n=this.options.loading,r=this.options.error;return u(e)&&(e.src||this.options.silent||console.error("Vue Lazyload warning: miss src with "+e),t=e.src,n=e.loading||this.options.loading,r=e.error||this.options.error),{src:t,loading:n,error:r}}}]),l}()},Q=function(e){return{props:{tag:{type:String,default:"div"}},render:function(e){return this.show===!1?e(this.tag):e(this.tag,null,this.$slots.default)},data:function(){return{el:null,state:{loaded:!1},rect:{},show:!1}},mounted:function(){this.el=this.$el,e.addLazyBox(this),e.lazyLoadHandler()},beforeDestroy:function(){e.removeComponent(this)},methods:{getRect:function(){this.rect=this.$el.getBoundingClientRect()},checkInView:function(){return this.getRect(),f&&this.rect.top<window.innerHeight*e.options.preLoad&&this.rect.bottom>0&&this.rect.left<window.innerWidth*e.options.preLoad&&this.rect.right>0},load:function(){this.show=!0,this.state.loaded=!0,this.$emit("show",this)}}}},x={install:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=O(e),i=new r(n),o="2"===e.version.split(".")[0];e.prototype.$Lazyload=i,n.lazyComponent&&e.component("lazy-component",Q(i)),o?e.directive("lazy",{bind:i.add.bind(i),update:i.update.bind(i),componentUpdated:i.lazyLoadHandler.bind(i),unbind:i.remove.bind(i)}):e.directive("lazy",{bind:i.lazyLoadHandler.bind(i),update:function(e,n){t(this.vm.$refs,this.vm.$els),i.add(this.el,{modifiers:this.modifiers||{},arg:this.arg,value:e,oldValue:n},{context:this.vm})},unbind:function(){i.remove(this.el)}})}};return x});

/***/ }),

/***/ "./node_modules/vue-loader/lib/component-normalizer.js":
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-1604ae0e\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./src/components/partials/Footer.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("footer", { staticClass: "footer" }, [
    _vm._v("\n    This is the footer.\n")
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1604ae0e", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-2c78453c\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./src/App.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "page-wrapper", attrs: { id: "my-app" } },
    [
      _c(
        "transition",
        {
          attrs: {
            name: "loader-animation",
            "enter-active-class": "animated fadeIn",
            "leave-active-class": "animated fadeOut"
          }
        },
        [
          _vm.showLoader
            ? _c("div", { staticClass: "progress loader" }, [
                _c("div", {
                  staticClass: "progress-bar",
                  style: _vm.loaderStyle,
                  attrs: {
                    role: "progressbar",
                    "aria-valuenow": "100",
                    "aria-valuemin": "0",
                    "aria-valuemax": "100"
                  }
                })
              ])
            : _vm._e()
        ]
      ),
      _vm._v(" "),
      _c("app-header"),
      _vm._v(" "),
      _c(
        "transition",
        { attrs: { name: "page-transition", mode: "out-in", appear: "" } },
        [
          _c(
            "div",
            { staticClass: "page-content-wrapper" },
            [_c("router-view")],
            1
          )
        ]
      ),
      _vm._v(" "),
      _c("app-footer")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2c78453c", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-37371200\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./src/components/partials/Header.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("header", { staticClass: "header" }, [
      _c(
        "nav",
        { staticClass: "navbar navbar-expand-lg navbar-light bg-light" },
        [
          _c("a", { staticClass: "navbar-brand", attrs: { href: "#" } }, [
            _vm._v("Vue WordPress Starter")
          ]),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "navbar-toggler",
              attrs: {
                type: "button",
                "data-toggle": "collapse",
                "data-target": "#navbarNavDropdown",
                "aria-controls": "navbarNavDropdown",
                "aria-expanded": "false",
                "aria-label": "Toggle navigation"
              }
            },
            [_c("span", { staticClass: "navbar-toggler-icon" })]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "collapse navbar-collapse",
              attrs: { id: "navbarNavDropdown" }
            },
            [
              _c("ul", { staticClass: "navbar-nav" }, [
                _c("li", { staticClass: "nav-item active" }, [
                  _c("a", { staticClass: "nav-link", attrs: { href: "#" } }, [
                    _vm._v("Home "),
                    _c("span", { staticClass: "sr-only" }, [
                      _vm._v("(current)")
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("li", { staticClass: "nav-item" }, [
                  _c("a", { staticClass: "nav-link", attrs: { href: "#" } }, [
                    _vm._v("Link")
                  ])
                ]),
                _vm._v(" "),
                _c("li", { staticClass: "nav-item" }, [
                  _c("a", { staticClass: "nav-link", attrs: { href: "#" } }, [
                    _vm._v("Link 2")
                  ])
                ]),
                _vm._v(" "),
                _c("li", { staticClass: "nav-item dropdown" }, [
                  _c(
                    "a",
                    {
                      staticClass: "nav-link dropdown-toggle",
                      attrs: {
                        href: "http://example.com",
                        id: "navbarDropdownMenuLink",
                        "data-toggle": "dropdown",
                        "aria-haspopup": "true",
                        "aria-expanded": "false"
                      }
                    },
                    [
                      _vm._v(
                        "\n                Dropdown link\n                "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "dropdown-menu",
                      attrs: { "aria-labelledby": "navbarDropdownMenuLink" }
                    },
                    [
                      _c(
                        "a",
                        { staticClass: "dropdown-item", attrs: { href: "#" } },
                        [_vm._v("Action")]
                      ),
                      _vm._v(" "),
                      _c(
                        "a",
                        { staticClass: "dropdown-item", attrs: { href: "#" } },
                        [_vm._v("Another action")]
                      ),
                      _vm._v(" "),
                      _c(
                        "a",
                        { staticClass: "dropdown-item", attrs: { href: "#" } },
                        [_vm._v("Something else here")]
                      )
                    ]
                  )
                ])
              ])
            ]
          )
        ]
      )
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-37371200", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-e803cf0c\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./src/components/widgets/Pages.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "widget pages" }, [
    _c("h3", [_vm._t("default")], 2),
    _vm._v(" "),
    _vm.allPagesLoaded
      ? _c(
          "ul",
          _vm._l(_vm.somePages(_vm.limit), function(page) {
            return _c("li", [_vm._v(_vm._s(page.title.rendered))])
          })
        )
      : _c("div", [_vm._v("\n    Loading...\n  ")])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-e803cf0c", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-ec10328e\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./src/components/Home.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        { staticClass: "col-xs-12 col-md-4" },
        [
          _c("recent-posts-widget", { attrs: { limit: "5" } }, [
            _vm._v("Recent Posts")
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-xs-12 col-md-4" },
        [_c("pages-widget", { attrs: { limit: "5" } }, [_vm._v("Pages")])],
        1
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "jumbotron" }, [
      _c("h1", { staticClass: "display-3" }, [_vm._v("Hello, world!")]),
      _vm._v(" "),
      _c("p", { staticClass: "lead" }, [
        _vm._v(
          "This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information."
        )
      ]),
      _vm._v(" "),
      _c("hr", { staticClass: "my-4" }),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "It uses utility classes for typography and spacing to space content out within the larger container."
        )
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "lead" }, [
        _c(
          "a",
          {
            staticClass: "btn btn-primary btn-lg",
            attrs: { href: "#", role: "button" }
          },
          [_vm._v("Learn more")]
        )
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-ec10328e", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-f5ee7324\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./src/components/widgets/RecentPosts.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "widget recent-posts" }, [
    _c("h3", [_vm._t("default")], 2),
    _vm._v(" "),
    _vm.recentPostsLoaded
      ? _c(
          "ul",
          _vm._l(_vm.recentPosts(_vm.limit), function(post) {
            return _c("li", [_vm._v(_vm._s(post.title.rendered))])
          })
        )
      : _c("div", [_vm._v("\n    Loading...\n  ")])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-f5ee7324", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-router/dist/vue-router.esm.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
  * vue-router v2.7.0
  * (c) 2017 Evan You
  * @license MIT
  */
/*  */

function assert (condition, message) {
  if (!condition) {
    throw new Error(("[vue-router] " + message))
  }
}

function warn (condition, message) {
  if ("development" !== 'production' && !condition) {
    typeof console !== 'undefined' && console.warn(("[vue-router] " + message));
  }
}

function isError (err) {
  return Object.prototype.toString.call(err).indexOf('Error') > -1
}

var View = {
  name: 'router-view',
  functional: true,
  props: {
    name: {
      type: String,
      default: 'default'
    }
  },
  render: function render (_, ref) {
    var props = ref.props;
    var children = ref.children;
    var parent = ref.parent;
    var data = ref.data;

    data.routerView = true;

    // directly use parent context's createElement() function
    // so that components rendered by router-view can resolve named slots
    var h = parent.$createElement;
    var name = props.name;
    var route = parent.$route;
    var cache = parent._routerViewCache || (parent._routerViewCache = {});

    // determine current view depth, also check to see if the tree
    // has been toggled inactive but kept-alive.
    var depth = 0;
    var inactive = false;
    while (parent && parent._routerRoot !== parent) {
      if (parent.$vnode && parent.$vnode.data.routerView) {
        depth++;
      }
      if (parent._inactive) {
        inactive = true;
      }
      parent = parent.$parent;
    }
    data.routerViewDepth = depth;

    // render previous view if the tree is inactive and kept-alive
    if (inactive) {
      return h(cache[name], data, children)
    }

    var matched = route.matched[depth];
    // render empty node if no matched route
    if (!matched) {
      cache[name] = null;
      return h()
    }

    var component = cache[name] = matched.components[name];

    // attach instance registration hook
    // this will be called in the instance's injected lifecycle hooks
    data.registerRouteInstance = function (vm, val) {
      // val could be undefined for unregistration
      var current = matched.instances[name];
      if (
        (val && current !== vm) ||
        (!val && current === vm)
      ) {
        matched.instances[name] = val;
      }
    }

    // also regiseter instance in prepatch hook
    // in case the same component instance is reused across different routes
    ;(data.hook || (data.hook = {})).prepatch = function (_, vnode) {
      matched.instances[name] = vnode.componentInstance;
    };

    // resolve props
    data.props = resolveProps(route, matched.props && matched.props[name]);

    return h(component, data, children)
  }
};

function resolveProps (route, config) {
  switch (typeof config) {
    case 'undefined':
      return
    case 'object':
      return config
    case 'function':
      return config(route)
    case 'boolean':
      return config ? route.params : undefined
    default:
      if (true) {
        warn(
          false,
          "props in \"" + (route.path) + "\" is a " + (typeof config) + ", " +
          "expecting an object, function or boolean."
        );
      }
  }
}

/*  */

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function (c) { return '%' + c.charCodeAt(0).toString(16); };
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function (str) { return encodeURIComponent(str)
  .replace(encodeReserveRE, encodeReserveReplacer)
  .replace(commaRE, ','); };

var decode = decodeURIComponent;

function resolveQuery (
  query,
  extraQuery,
  _parseQuery
) {
  if ( extraQuery === void 0 ) extraQuery = {};

  var parse = _parseQuery || parseQuery;
  var parsedQuery;
  try {
    parsedQuery = parse(query || '');
  } catch (e) {
    "development" !== 'production' && warn(false, e.message);
    parsedQuery = {};
  }
  for (var key in extraQuery) {
    var val = extraQuery[key];
    parsedQuery[key] = Array.isArray(val) ? val.slice() : val;
  }
  return parsedQuery
}

function parseQuery (query) {
  var res = {};

  query = query.trim().replace(/^(\?|#|&)/, '');

  if (!query) {
    return res
  }

  query.split('&').forEach(function (param) {
    var parts = param.replace(/\+/g, ' ').split('=');
    var key = decode(parts.shift());
    var val = parts.length > 0
      ? decode(parts.join('='))
      : null;

    if (res[key] === undefined) {
      res[key] = val;
    } else if (Array.isArray(res[key])) {
      res[key].push(val);
    } else {
      res[key] = [res[key], val];
    }
  });

  return res
}

function stringifyQuery (obj) {
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return ''
    }

    if (val === null) {
      return encode(key)
    }

    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return
        }
        if (val2 === null) {
          result.push(encode(key));
        } else {
          result.push(encode(key) + '=' + encode(val2));
        }
      });
      return result.join('&')
    }

    return encode(key) + '=' + encode(val)
  }).filter(function (x) { return x.length > 0; }).join('&') : null;
  return res ? ("?" + res) : ''
}

/*  */


var trailingSlashRE = /\/?$/;

function createRoute (
  record,
  location,
  redirectedFrom,
  router
) {
  var stringifyQuery$$1 = router && router.options.stringifyQuery;
  var route = {
    name: location.name || (record && record.name),
    meta: (record && record.meta) || {},
    path: location.path || '/',
    hash: location.hash || '',
    query: location.query || {},
    params: location.params || {},
    fullPath: getFullPath(location, stringifyQuery$$1),
    matched: record ? formatMatch(record) : []
  };
  if (redirectedFrom) {
    route.redirectedFrom = getFullPath(redirectedFrom, stringifyQuery$$1);
  }
  return Object.freeze(route)
}

// the starting route that represents the initial state
var START = createRoute(null, {
  path: '/'
});

function formatMatch (record) {
  var res = [];
  while (record) {
    res.unshift(record);
    record = record.parent;
  }
  return res
}

function getFullPath (
  ref,
  _stringifyQuery
) {
  var path = ref.path;
  var query = ref.query; if ( query === void 0 ) query = {};
  var hash = ref.hash; if ( hash === void 0 ) hash = '';

  var stringify = _stringifyQuery || stringifyQuery;
  return (path || '/') + stringify(query) + hash
}

function isSameRoute (a, b) {
  if (b === START) {
    return a === b
  } else if (!b) {
    return false
  } else if (a.path && b.path) {
    return (
      a.path.replace(trailingSlashRE, '') === b.path.replace(trailingSlashRE, '') &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query)
    )
  } else if (a.name && b.name) {
    return (
      a.name === b.name &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query) &&
      isObjectEqual(a.params, b.params)
    )
  } else {
    return false
  }
}

function isObjectEqual (a, b) {
  if ( a === void 0 ) a = {};
  if ( b === void 0 ) b = {};

  var aKeys = Object.keys(a);
  var bKeys = Object.keys(b);
  if (aKeys.length !== bKeys.length) {
    return false
  }
  return aKeys.every(function (key) {
    var aVal = a[key];
    var bVal = b[key];
    // check nested equality
    if (typeof aVal === 'object' && typeof bVal === 'object') {
      return isObjectEqual(aVal, bVal)
    }
    return String(aVal) === String(bVal)
  })
}

function isIncludedRoute (current, target) {
  return (
    current.path.replace(trailingSlashRE, '/').indexOf(
      target.path.replace(trailingSlashRE, '/')
    ) === 0 &&
    (!target.hash || current.hash === target.hash) &&
    queryIncludes(current.query, target.query)
  )
}

function queryIncludes (current, target) {
  for (var key in target) {
    if (!(key in current)) {
      return false
    }
  }
  return true
}

/*  */

// work around weird flow bug
var toTypes = [String, Object];
var eventTypes = [String, Array];

var Link = {
  name: 'router-link',
  props: {
    to: {
      type: toTypes,
      required: true
    },
    tag: {
      type: String,
      default: 'a'
    },
    exact: Boolean,
    append: Boolean,
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    event: {
      type: eventTypes,
      default: 'click'
    }
  },
  render: function render (h) {
    var this$1 = this;

    var router = this.$router;
    var current = this.$route;
    var ref = router.resolve(this.to, current, this.append);
    var location = ref.location;
    var route = ref.route;
    var href = ref.href;

    var classes = {};
    var globalActiveClass = router.options.linkActiveClass;
    var globalExactActiveClass = router.options.linkExactActiveClass;
    // Support global empty active class
    var activeClassFallback = globalActiveClass == null
            ? 'router-link-active'
            : globalActiveClass;
    var exactActiveClassFallback = globalExactActiveClass == null
            ? 'router-link-exact-active'
            : globalExactActiveClass;
    var activeClass = this.activeClass == null
            ? activeClassFallback
            : this.activeClass;
    var exactActiveClass = this.exactActiveClass == null
            ? exactActiveClassFallback
            : this.exactActiveClass;
    var compareTarget = location.path
      ? createRoute(null, location, null, router)
      : route;

    classes[exactActiveClass] = isSameRoute(current, compareTarget);
    classes[activeClass] = this.exact
      ? classes[exactActiveClass]
      : isIncludedRoute(current, compareTarget);

    var handler = function (e) {
      if (guardEvent(e)) {
        if (this$1.replace) {
          router.replace(location);
        } else {
          router.push(location);
        }
      }
    };

    var on = { click: guardEvent };
    if (Array.isArray(this.event)) {
      this.event.forEach(function (e) { on[e] = handler; });
    } else {
      on[this.event] = handler;
    }

    var data = {
      class: classes
    };

    if (this.tag === 'a') {
      data.on = on;
      data.attrs = { href: href };
    } else {
      // find the first <a> child and apply listener and href
      var a = findAnchor(this.$slots.default);
      if (a) {
        // in case the <a> is a static node
        a.isStatic = false;
        var extend = _Vue.util.extend;
        var aData = a.data = extend({}, a.data);
        aData.on = on;
        var aAttrs = a.data.attrs = extend({}, a.data.attrs);
        aAttrs.href = href;
      } else {
        // doesn't have <a> child, apply listener to self
        data.on = on;
      }
    }

    return h(this.tag, data, this.$slots.default)
  }
};

function guardEvent (e) {
  // don't redirect with control keys
  if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) { return }
  // don't redirect when preventDefault called
  if (e.defaultPrevented) { return }
  // don't redirect on right click
  if (e.button !== undefined && e.button !== 0) { return }
  // don't redirect if `target="_blank"`
  if (e.currentTarget && e.currentTarget.getAttribute) {
    var target = e.currentTarget.getAttribute('target');
    if (/\b_blank\b/i.test(target)) { return }
  }
  // this may be a Weex event which doesn't have this method
  if (e.preventDefault) {
    e.preventDefault();
  }
  return true
}

function findAnchor (children) {
  if (children) {
    var child;
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      if (child.tag === 'a') {
        return child
      }
      if (child.children && (child = findAnchor(child.children))) {
        return child
      }
    }
  }
}

var _Vue;

function install (Vue) {
  if (install.installed) { return }
  install.installed = true;

  _Vue = Vue;

  var isDef = function (v) { return v !== undefined; };

  var registerInstance = function (vm, callVal) {
    var i = vm.$options._parentVnode;
    if (isDef(i) && isDef(i = i.data) && isDef(i = i.registerRouteInstance)) {
      i(vm, callVal);
    }
  };

  Vue.mixin({
    beforeCreate: function beforeCreate () {
      if (isDef(this.$options.router)) {
        this._routerRoot = this;
        this._router = this.$options.router;
        this._router.init(this);
        Vue.util.defineReactive(this, '_route', this._router.history.current);
      } else {
        this._routerRoot = (this.$parent && this.$parent._routerRoot) || this;
      }
      registerInstance(this, this);
    },
    destroyed: function destroyed () {
      registerInstance(this);
    }
  });

  Object.defineProperty(Vue.prototype, '$router', {
    get: function get () { return this._routerRoot._router }
  });

  Object.defineProperty(Vue.prototype, '$route', {
    get: function get () { return this._routerRoot._route }
  });

  Vue.component('router-view', View);
  Vue.component('router-link', Link);

  var strats = Vue.config.optionMergeStrategies;
  // use the same hook merging strategy for route hooks
  strats.beforeRouteEnter = strats.beforeRouteLeave = strats.beforeRouteUpdate = strats.created;
}

/*  */

var inBrowser = typeof window !== 'undefined';

/*  */

function resolvePath (
  relative,
  base,
  append
) {
  var firstChar = relative.charAt(0);
  if (firstChar === '/') {
    return relative
  }

  if (firstChar === '?' || firstChar === '#') {
    return base + relative
  }

  var stack = base.split('/');

  // remove trailing segment if:
  // - not appending
  // - appending to trailing slash (last segment is empty)
  if (!append || !stack[stack.length - 1]) {
    stack.pop();
  }

  // resolve relative path
  var segments = relative.replace(/^\//, '').split('/');
  for (var i = 0; i < segments.length; i++) {
    var segment = segments[i];
    if (segment === '..') {
      stack.pop();
    } else if (segment !== '.') {
      stack.push(segment);
    }
  }

  // ensure leading slash
  if (stack[0] !== '') {
    stack.unshift('');
  }

  return stack.join('/')
}

function parsePath (path) {
  var hash = '';
  var query = '';

  var hashIndex = path.indexOf('#');
  if (hashIndex >= 0) {
    hash = path.slice(hashIndex);
    path = path.slice(0, hashIndex);
  }

  var queryIndex = path.indexOf('?');
  if (queryIndex >= 0) {
    query = path.slice(queryIndex + 1);
    path = path.slice(0, queryIndex);
  }

  return {
    path: path,
    query: query,
    hash: hash
  }
}

function cleanPath (path) {
  return path.replace(/\/\//g, '/')
}

var index$1 = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

/**
 * Expose `pathToRegexp`.
 */
var index = pathToRegexp;
var parse_1 = parse;
var compile_1 = compile;
var tokensToFunction_1 = tokensToFunction;
var tokensToRegExp_1 = tokensToRegExp;

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = '';
  var defaultDelimiter = options && options.delimiter || '/';
  var res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue
    }

    var next = str[index];
    var prefix = res[2];
    var name = res[3];
    var capture = res[4];
    var group = res[5];
    var modifier = res[6];
    var asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }

    var partial = prefix != null && next != null && next !== prefix;
    var repeat = modifier === '+' || modifier === '*';
    var optional = modifier === '?' || modifier === '*';
    var delimiter = res[2] || defaultDelimiter;
    var pattern = capture || group;

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options))
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
    }
  }

  return function (obj, opts) {
    var path = '';
    var data = obj || {};
    var options = opts || {};
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        path += token;

        continue
      }

      var value = data[token.name];
      var segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (index$1(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment;
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys;
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g);

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      });
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = [];

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source);
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!index$1(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  var strict = options.strict;
  var end = options.end !== false;
  var route = '';

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];

    if (typeof token === 'string') {
      route += escapeString(token);
    } else {
      var prefix = escapeString(token.prefix);
      var capture = '(?:' + token.pattern + ')';

      keys.push(token);

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*';
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?';
        } else {
          capture = prefix + '(' + capture + ')?';
        }
      } else {
        capture = prefix + '(' + capture + ')';
      }

      route += capture;
    }
  }

  var delimiter = escapeString(options.delimiter || '/');
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
  }

  if (end) {
    route += '$';
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!index$1(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (index$1(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}

index.parse = parse_1;
index.compile = compile_1;
index.tokensToFunction = tokensToFunction_1;
index.tokensToRegExp = tokensToRegExp_1;

/*  */

var regexpCompileCache = Object.create(null);

function fillParams (
  path,
  params,
  routeMsg
) {
  try {
    var filler =
      regexpCompileCache[path] ||
      (regexpCompileCache[path] = index.compile(path));
    return filler(params || {}, { pretty: true })
  } catch (e) {
    if (true) {
      warn(false, ("missing param for " + routeMsg + ": " + (e.message)));
    }
    return ''
  }
}

/*  */

function createRouteMap (
  routes,
  oldPathList,
  oldPathMap,
  oldNameMap
) {
  // the path list is used to control path matching priority
  var pathList = oldPathList || [];
  var pathMap = oldPathMap || Object.create(null);
  var nameMap = oldNameMap || Object.create(null);

  routes.forEach(function (route) {
    addRouteRecord(pathList, pathMap, nameMap, route);
  });

  // ensure wildcard routes are always at the end
  for (var i = 0, l = pathList.length; i < l; i++) {
    if (pathList[i] === '*') {
      pathList.push(pathList.splice(i, 1)[0]);
      l--;
      i--;
    }
  }

  return {
    pathList: pathList,
    pathMap: pathMap,
    nameMap: nameMap
  }
}

function addRouteRecord (
  pathList,
  pathMap,
  nameMap,
  route,
  parent,
  matchAs
) {
  var path = route.path;
  var name = route.name;
  if (true) {
    assert(path != null, "\"path\" is required in a route configuration.");
    assert(
      typeof route.component !== 'string',
      "route config \"component\" for path: " + (String(path || name)) + " cannot be a " +
      "string id. Use an actual component instead."
    );
  }

  var normalizedPath = normalizePath(path, parent);
  var pathToRegexpOptions = route.pathToRegexpOptions || {};

  if (typeof route.caseSensitive === 'boolean') {
    pathToRegexpOptions.sensitive = route.caseSensitive;
  }

  var record = {
    path: normalizedPath,
    regex: compileRouteRegex(normalizedPath, pathToRegexpOptions),
    components: route.components || { default: route.component },
    instances: {},
    name: name,
    parent: parent,
    matchAs: matchAs,
    redirect: route.redirect,
    beforeEnter: route.beforeEnter,
    meta: route.meta || {},
    props: route.props == null
      ? {}
      : route.components
        ? route.props
        : { default: route.props }
  };

  if (route.children) {
    // Warn if route is named, does not redirect and has a default child route.
    // If users navigate to this route by name, the default child will
    // not be rendered (GH Issue #629)
    if (true) {
      if (route.name && !route.redirect && route.children.some(function (child) { return /^\/?$/.test(child.path); })) {
        warn(
          false,
          "Named Route '" + (route.name) + "' has a default child route. " +
          "When navigating to this named route (:to=\"{name: '" + (route.name) + "'\"), " +
          "the default child route will not be rendered. Remove the name from " +
          "this route and use the name of the default child route for named " +
          "links instead."
        );
      }
    }
    route.children.forEach(function (child) {
      var childMatchAs = matchAs
        ? cleanPath((matchAs + "/" + (child.path)))
        : undefined;
      addRouteRecord(pathList, pathMap, nameMap, child, record, childMatchAs);
    });
  }

  if (route.alias !== undefined) {
    var aliases = Array.isArray(route.alias)
      ? route.alias
      : [route.alias];

    aliases.forEach(function (alias) {
      var aliasRoute = {
        path: alias,
        children: route.children
      };
      addRouteRecord(
        pathList,
        pathMap,
        nameMap,
        aliasRoute,
        parent,
        record.path || '/' // matchAs
      );
    });
  }

  if (!pathMap[record.path]) {
    pathList.push(record.path);
    pathMap[record.path] = record;
  }

  if (name) {
    if (!nameMap[name]) {
      nameMap[name] = record;
    } else if ("development" !== 'production' && !matchAs) {
      warn(
        false,
        "Duplicate named routes definition: " +
        "{ name: \"" + name + "\", path: \"" + (record.path) + "\" }"
      );
    }
  }
}

function compileRouteRegex (path, pathToRegexpOptions) {
  var regex = index(path, [], pathToRegexpOptions);
  if (true) {
    var keys = {};
    regex.keys.forEach(function (key) {
      warn(!keys[key.name], ("Duplicate param keys in route with path: \"" + path + "\""));
      keys[key.name] = true;
    });
  }
  return regex
}

function normalizePath (path, parent) {
  path = path.replace(/\/$/, '');
  if (path[0] === '/') { return path }
  if (parent == null) { return path }
  return cleanPath(((parent.path) + "/" + path))
}

/*  */


function normalizeLocation (
  raw,
  current,
  append,
  router
) {
  var next = typeof raw === 'string' ? { path: raw } : raw;
  // named target
  if (next.name || next._normalized) {
    return next
  }

  // relative params
  if (!next.path && next.params && current) {
    next = assign({}, next);
    next._normalized = true;
    var params = assign(assign({}, current.params), next.params);
    if (current.name) {
      next.name = current.name;
      next.params = params;
    } else if (current.matched.length) {
      var rawPath = current.matched[current.matched.length - 1].path;
      next.path = fillParams(rawPath, params, ("path " + (current.path)));
    } else if (true) {
      warn(false, "relative params navigation requires a current route.");
    }
    return next
  }

  var parsedPath = parsePath(next.path || '');
  var basePath = (current && current.path) || '/';
  var path = parsedPath.path
    ? resolvePath(parsedPath.path, basePath, append || next.append)
    : basePath;

  var query = resolveQuery(
    parsedPath.query,
    next.query,
    router && router.options.parseQuery
  );

  var hash = next.hash || parsedPath.hash;
  if (hash && hash.charAt(0) !== '#') {
    hash = "#" + hash;
  }

  return {
    _normalized: true,
    path: path,
    query: query,
    hash: hash
  }
}

function assign (a, b) {
  for (var key in b) {
    a[key] = b[key];
  }
  return a
}

/*  */


function createMatcher (
  routes,
  router
) {
  var ref = createRouteMap(routes);
  var pathList = ref.pathList;
  var pathMap = ref.pathMap;
  var nameMap = ref.nameMap;

  function addRoutes (routes) {
    createRouteMap(routes, pathList, pathMap, nameMap);
  }

  function match (
    raw,
    currentRoute,
    redirectedFrom
  ) {
    var location = normalizeLocation(raw, currentRoute, false, router);
    var name = location.name;

    if (name) {
      var record = nameMap[name];
      if (true) {
        warn(record, ("Route with name '" + name + "' does not exist"));
      }
      if (!record) { return _createRoute(null, location) }
      var paramNames = record.regex.keys
        .filter(function (key) { return !key.optional; })
        .map(function (key) { return key.name; });

      if (typeof location.params !== 'object') {
        location.params = {};
      }

      if (currentRoute && typeof currentRoute.params === 'object') {
        for (var key in currentRoute.params) {
          if (!(key in location.params) && paramNames.indexOf(key) > -1) {
            location.params[key] = currentRoute.params[key];
          }
        }
      }

      if (record) {
        location.path = fillParams(record.path, location.params, ("named route \"" + name + "\""));
        return _createRoute(record, location, redirectedFrom)
      }
    } else if (location.path) {
      location.params = {};
      for (var i = 0; i < pathList.length; i++) {
        var path = pathList[i];
        var record$1 = pathMap[path];
        if (matchRoute(record$1.regex, location.path, location.params)) {
          return _createRoute(record$1, location, redirectedFrom)
        }
      }
    }
    // no match
    return _createRoute(null, location)
  }

  function redirect (
    record,
    location
  ) {
    var originalRedirect = record.redirect;
    var redirect = typeof originalRedirect === 'function'
        ? originalRedirect(createRoute(record, location, null, router))
        : originalRedirect;

    if (typeof redirect === 'string') {
      redirect = { path: redirect };
    }

    if (!redirect || typeof redirect !== 'object') {
      if (true) {
        warn(
          false, ("invalid redirect option: " + (JSON.stringify(redirect)))
        );
      }
      return _createRoute(null, location)
    }

    var re = redirect;
    var name = re.name;
    var path = re.path;
    var query = location.query;
    var hash = location.hash;
    var params = location.params;
    query = re.hasOwnProperty('query') ? re.query : query;
    hash = re.hasOwnProperty('hash') ? re.hash : hash;
    params = re.hasOwnProperty('params') ? re.params : params;

    if (name) {
      // resolved named direct
      var targetRecord = nameMap[name];
      if (true) {
        assert(targetRecord, ("redirect failed: named route \"" + name + "\" not found."));
      }
      return match({
        _normalized: true,
        name: name,
        query: query,
        hash: hash,
        params: params
      }, undefined, location)
    } else if (path) {
      // 1. resolve relative redirect
      var rawPath = resolveRecordPath(path, record);
      // 2. resolve params
      var resolvedPath = fillParams(rawPath, params, ("redirect route with path \"" + rawPath + "\""));
      // 3. rematch with existing query and hash
      return match({
        _normalized: true,
        path: resolvedPath,
        query: query,
        hash: hash
      }, undefined, location)
    } else {
      if (true) {
        warn(false, ("invalid redirect option: " + (JSON.stringify(redirect))));
      }
      return _createRoute(null, location)
    }
  }

  function alias (
    record,
    location,
    matchAs
  ) {
    var aliasedPath = fillParams(matchAs, location.params, ("aliased route with path \"" + matchAs + "\""));
    var aliasedMatch = match({
      _normalized: true,
      path: aliasedPath
    });
    if (aliasedMatch) {
      var matched = aliasedMatch.matched;
      var aliasedRecord = matched[matched.length - 1];
      location.params = aliasedMatch.params;
      return _createRoute(aliasedRecord, location)
    }
    return _createRoute(null, location)
  }

  function _createRoute (
    record,
    location,
    redirectedFrom
  ) {
    if (record && record.redirect) {
      return redirect(record, redirectedFrom || location)
    }
    if (record && record.matchAs) {
      return alias(record, location, record.matchAs)
    }
    return createRoute(record, location, redirectedFrom, router)
  }

  return {
    match: match,
    addRoutes: addRoutes
  }
}

function matchRoute (
  regex,
  path,
  params
) {
  var m = path.match(regex);

  if (!m) {
    return false
  } else if (!params) {
    return true
  }

  for (var i = 1, len = m.length; i < len; ++i) {
    var key = regex.keys[i - 1];
    var val = typeof m[i] === 'string' ? decodeURIComponent(m[i]) : m[i];
    if (key) {
      params[key.name] = val;
    }
  }

  return true
}

function resolveRecordPath (path, record) {
  return resolvePath(path, record.parent ? record.parent.path : '/', true)
}

/*  */


var positionStore = Object.create(null);

function setupScroll () {
  window.addEventListener('popstate', function (e) {
    saveScrollPosition();
    if (e.state && e.state.key) {
      setStateKey(e.state.key);
    }
  });
}

function handleScroll (
  router,
  to,
  from,
  isPop
) {
  if (!router.app) {
    return
  }

  var behavior = router.options.scrollBehavior;
  if (!behavior) {
    return
  }

  if (true) {
    assert(typeof behavior === 'function', "scrollBehavior must be a function");
  }

  // wait until re-render finishes before scrolling
  router.app.$nextTick(function () {
    var position = getScrollPosition();
    var shouldScroll = behavior(to, from, isPop ? position : null);
    if (!shouldScroll) {
      return
    }
    var isObject = typeof shouldScroll === 'object';
    if (isObject && typeof shouldScroll.selector === 'string') {
      var el = document.querySelector(shouldScroll.selector);
      if (el) {
        var offset = shouldScroll.offset && typeof shouldScroll.offset === 'object' ? shouldScroll.offset : {};
        offset = normalizeOffset(offset);
        position = getElementPosition(el, offset);
      } else if (isValidPosition(shouldScroll)) {
        position = normalizePosition(shouldScroll);
      }
    } else if (isObject && isValidPosition(shouldScroll)) {
      position = normalizePosition(shouldScroll);
    }

    if (position) {
      window.scrollTo(position.x, position.y);
    }
  });
}

function saveScrollPosition () {
  var key = getStateKey();
  if (key) {
    positionStore[key] = {
      x: window.pageXOffset,
      y: window.pageYOffset
    };
  }
}

function getScrollPosition () {
  var key = getStateKey();
  if (key) {
    return positionStore[key]
  }
}

function getElementPosition (el, offset) {
  var docEl = document.documentElement;
  var docRect = docEl.getBoundingClientRect();
  var elRect = el.getBoundingClientRect();
  return {
    x: elRect.left - docRect.left - offset.x,
    y: elRect.top - docRect.top - offset.y
  }
}

function isValidPosition (obj) {
  return isNumber(obj.x) || isNumber(obj.y)
}

function normalizePosition (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : window.pageXOffset,
    y: isNumber(obj.y) ? obj.y : window.pageYOffset
  }
}

function normalizeOffset (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : 0,
    y: isNumber(obj.y) ? obj.y : 0
  }
}

function isNumber (v) {
  return typeof v === 'number'
}

/*  */

var supportsPushState = inBrowser && (function () {
  var ua = window.navigator.userAgent;

  if (
    (ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) &&
    ua.indexOf('Mobile Safari') !== -1 &&
    ua.indexOf('Chrome') === -1 &&
    ua.indexOf('Windows Phone') === -1
  ) {
    return false
  }

  return window.history && 'pushState' in window.history
})();

// use User Timing api (if present) for more accurate key precision
var Time = inBrowser && window.performance && window.performance.now
  ? window.performance
  : Date;

var _key = genKey();

function genKey () {
  return Time.now().toFixed(3)
}

function getStateKey () {
  return _key
}

function setStateKey (key) {
  _key = key;
}

function pushState (url, replace) {
  saveScrollPosition();
  // try...catch the pushState call to get around Safari
  // DOM Exception 18 where it limits to 100 pushState calls
  var history = window.history;
  try {
    if (replace) {
      history.replaceState({ key: _key }, '', url);
    } else {
      _key = genKey();
      history.pushState({ key: _key }, '', url);
    }
  } catch (e) {
    window.location[replace ? 'replace' : 'assign'](url);
  }
}

function replaceState (url) {
  pushState(url, true);
}

/*  */

function runQueue (queue, fn, cb) {
  var step = function (index) {
    if (index >= queue.length) {
      cb();
    } else {
      if (queue[index]) {
        fn(queue[index], function () {
          step(index + 1);
        });
      } else {
        step(index + 1);
      }
    }
  };
  step(0);
}

/*  */

function resolveAsyncComponents (matched) {
  return function (to, from, next) {
    var hasAsync = false;
    var pending = 0;
    var error = null;

    flatMapComponents(matched, function (def, _, match, key) {
      // if it's a function and doesn't have cid attached,
      // assume it's an async component resolve function.
      // we are not using Vue's default async resolving mechanism because
      // we want to halt the navigation until the incoming component has been
      // resolved.
      if (typeof def === 'function' && def.cid === undefined) {
        hasAsync = true;
        pending++;

        var resolve = once(function (resolvedDef) {
          if (resolvedDef.__esModule && resolvedDef.default) {
            resolvedDef = resolvedDef.default;
          }
          // save resolved on async factory in case it's used elsewhere
          def.resolved = typeof resolvedDef === 'function'
            ? resolvedDef
            : _Vue.extend(resolvedDef);
          match.components[key] = resolvedDef;
          pending--;
          if (pending <= 0) {
            next();
          }
        });

        var reject = once(function (reason) {
          var msg = "Failed to resolve async component " + key + ": " + reason;
          "development" !== 'production' && warn(false, msg);
          if (!error) {
            error = isError(reason)
              ? reason
              : new Error(msg);
            next(error);
          }
        });

        var res;
        try {
          res = def(resolve, reject);
        } catch (e) {
          reject(e);
        }
        if (res) {
          if (typeof res.then === 'function') {
            res.then(resolve, reject);
          } else {
            // new syntax in Vue 2.3
            var comp = res.component;
            if (comp && typeof comp.then === 'function') {
              comp.then(resolve, reject);
            }
          }
        }
      }
    });

    if (!hasAsync) { next(); }
  }
}

function flatMapComponents (
  matched,
  fn
) {
  return flatten(matched.map(function (m) {
    return Object.keys(m.components).map(function (key) { return fn(
      m.components[key],
      m.instances[key],
      m, key
    ); })
  }))
}

function flatten (arr) {
  return Array.prototype.concat.apply([], arr)
}

// in Webpack 2, require.ensure now also returns a Promise
// so the resolve/reject functions may get called an extra time
// if the user uses an arrow function shorthand that happens to
// return that Promise.
function once (fn) {
  var called = false;
  return function () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    if (called) { return }
    called = true;
    return fn.apply(this, args)
  }
}

/*  */

var History = function History (router, base) {
  this.router = router;
  this.base = normalizeBase(base);
  // start with a route object that stands for "nowhere"
  this.current = START;
  this.pending = null;
  this.ready = false;
  this.readyCbs = [];
  this.readyErrorCbs = [];
  this.errorCbs = [];
};

History.prototype.listen = function listen (cb) {
  this.cb = cb;
};

History.prototype.onReady = function onReady (cb, errorCb) {
  if (this.ready) {
    cb();
  } else {
    this.readyCbs.push(cb);
    if (errorCb) {
      this.readyErrorCbs.push(errorCb);
    }
  }
};

History.prototype.onError = function onError (errorCb) {
  this.errorCbs.push(errorCb);
};

History.prototype.transitionTo = function transitionTo (location, onComplete, onAbort) {
    var this$1 = this;

  var route = this.router.match(location, this.current);
  this.confirmTransition(route, function () {
    this$1.updateRoute(route);
    onComplete && onComplete(route);
    this$1.ensureURL();

    // fire ready cbs once
    if (!this$1.ready) {
      this$1.ready = true;
      this$1.readyCbs.forEach(function (cb) { cb(route); });
    }
  }, function (err) {
    if (onAbort) {
      onAbort(err);
    }
    if (err && !this$1.ready) {
      this$1.ready = true;
      this$1.readyErrorCbs.forEach(function (cb) { cb(err); });
    }
  });
};

History.prototype.confirmTransition = function confirmTransition (route, onComplete, onAbort) {
    var this$1 = this;

  var current = this.current;
  var abort = function (err) {
    if (isError(err)) {
      if (this$1.errorCbs.length) {
        this$1.errorCbs.forEach(function (cb) { cb(err); });
      } else {
        warn(false, 'uncaught error during route navigation:');
        console.error(err);
      }
    }
    onAbort && onAbort(err);
  };
  if (
    isSameRoute(route, current) &&
    // in the case the route map has been dynamically appended to
    route.matched.length === current.matched.length
  ) {
    this.ensureURL();
    return abort()
  }

  var ref = resolveQueue(this.current.matched, route.matched);
    var updated = ref.updated;
    var deactivated = ref.deactivated;
    var activated = ref.activated;

  var queue = [].concat(
    // in-component leave guards
    extractLeaveGuards(deactivated),
    // global before hooks
    this.router.beforeHooks,
    // in-component update hooks
    extractUpdateHooks(updated),
    // in-config enter guards
    activated.map(function (m) { return m.beforeEnter; }),
    // async components
    resolveAsyncComponents(activated)
  );

  this.pending = route;
  var iterator = function (hook, next) {
    if (this$1.pending !== route) {
      return abort()
    }
    try {
      hook(route, current, function (to) {
        if (to === false || isError(to)) {
          // next(false) -> abort navigation, ensure current URL
          this$1.ensureURL(true);
          abort(to);
        } else if (
          typeof to === 'string' ||
          (typeof to === 'object' && (
            typeof to.path === 'string' ||
            typeof to.name === 'string'
          ))
        ) {
          // next('/') or next({ path: '/' }) -> redirect
          abort();
          if (typeof to === 'object' && to.replace) {
            this$1.replace(to);
          } else {
            this$1.push(to);
          }
        } else {
          // confirm transition and pass on the value
          next(to);
        }
      });
    } catch (e) {
      abort(e);
    }
  };

  runQueue(queue, iterator, function () {
    var postEnterCbs = [];
    var isValid = function () { return this$1.current === route; };
    // wait until async components are resolved before
    // extracting in-component enter guards
    var enterGuards = extractEnterGuards(activated, postEnterCbs, isValid);
    var queue = enterGuards.concat(this$1.router.resolveHooks);
    runQueue(queue, iterator, function () {
      if (this$1.pending !== route) {
        return abort()
      }
      this$1.pending = null;
      onComplete(route);
      if (this$1.router.app) {
        this$1.router.app.$nextTick(function () {
          postEnterCbs.forEach(function (cb) { cb(); });
        });
      }
    });
  });
};

History.prototype.updateRoute = function updateRoute (route) {
  var prev = this.current;
  this.current = route;
  this.cb && this.cb(route);
  this.router.afterHooks.forEach(function (hook) {
    hook && hook(route, prev);
  });
};

function normalizeBase (base) {
  if (!base) {
    if (inBrowser) {
      // respect <base> tag
      var baseEl = document.querySelector('base');
      base = (baseEl && baseEl.getAttribute('href')) || '/';
      // strip full URL origin
      base = base.replace(/^https?:\/\/[^\/]+/, '');
    } else {
      base = '/';
    }
  }
  // make sure there's the starting slash
  if (base.charAt(0) !== '/') {
    base = '/' + base;
  }
  // remove trailing slash
  return base.replace(/\/$/, '')
}

function resolveQueue (
  current,
  next
) {
  var i;
  var max = Math.max(current.length, next.length);
  for (i = 0; i < max; i++) {
    if (current[i] !== next[i]) {
      break
    }
  }
  return {
    updated: next.slice(0, i),
    activated: next.slice(i),
    deactivated: current.slice(i)
  }
}

function extractGuards (
  records,
  name,
  bind,
  reverse
) {
  var guards = flatMapComponents(records, function (def, instance, match, key) {
    var guard = extractGuard(def, name);
    if (guard) {
      return Array.isArray(guard)
        ? guard.map(function (guard) { return bind(guard, instance, match, key); })
        : bind(guard, instance, match, key)
    }
  });
  return flatten(reverse ? guards.reverse() : guards)
}

function extractGuard (
  def,
  key
) {
  if (typeof def !== 'function') {
    // extend now so that global mixins are applied.
    def = _Vue.extend(def);
  }
  return def.options[key]
}

function extractLeaveGuards (deactivated) {
  return extractGuards(deactivated, 'beforeRouteLeave', bindGuard, true)
}

function extractUpdateHooks (updated) {
  return extractGuards(updated, 'beforeRouteUpdate', bindGuard)
}

function bindGuard (guard, instance) {
  if (instance) {
    return function boundRouteGuard () {
      return guard.apply(instance, arguments)
    }
  }
}

function extractEnterGuards (
  activated,
  cbs,
  isValid
) {
  return extractGuards(activated, 'beforeRouteEnter', function (guard, _, match, key) {
    return bindEnterGuard(guard, match, key, cbs, isValid)
  })
}

function bindEnterGuard (
  guard,
  match,
  key,
  cbs,
  isValid
) {
  return function routeEnterGuard (to, from, next) {
    return guard(to, from, function (cb) {
      next(cb);
      if (typeof cb === 'function') {
        cbs.push(function () {
          // #750
          // if a router-view is wrapped with an out-in transition,
          // the instance may not have been registered at this time.
          // we will need to poll for registration until current route
          // is no longer valid.
          poll(cb, match.instances, key, isValid);
        });
      }
    })
  }
}

function poll (
  cb, // somehow flow cannot infer this is a function
  instances,
  key,
  isValid
) {
  if (instances[key]) {
    cb(instances[key]);
  } else if (isValid()) {
    setTimeout(function () {
      poll(cb, instances, key, isValid);
    }, 16);
  }
}

/*  */


var HTML5History = (function (History$$1) {
  function HTML5History (router, base) {
    var this$1 = this;

    History$$1.call(this, router, base);

    var expectScroll = router.options.scrollBehavior;

    if (expectScroll) {
      setupScroll();
    }

    window.addEventListener('popstate', function (e) {
      var current = this$1.current;
      this$1.transitionTo(getLocation(this$1.base), function (route) {
        if (expectScroll) {
          handleScroll(router, route, current, true);
        }
      });
    });
  }

  if ( History$$1 ) HTML5History.__proto__ = History$$1;
  HTML5History.prototype = Object.create( History$$1 && History$$1.prototype );
  HTML5History.prototype.constructor = HTML5History;

  HTML5History.prototype.go = function go (n) {
    window.history.go(n);
  };

  HTML5History.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      pushState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      replaceState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.ensureURL = function ensureURL (push) {
    if (getLocation(this.base) !== this.current.fullPath) {
      var current = cleanPath(this.base + this.current.fullPath);
      push ? pushState(current) : replaceState(current);
    }
  };

  HTML5History.prototype.getCurrentLocation = function getCurrentLocation () {
    return getLocation(this.base)
  };

  return HTML5History;
}(History));

function getLocation (base) {
  var path = window.location.pathname;
  if (base && path.indexOf(base) === 0) {
    path = path.slice(base.length);
  }
  return (path || '/') + window.location.search + window.location.hash
}

/*  */


var HashHistory = (function (History$$1) {
  function HashHistory (router, base, fallback) {
    History$$1.call(this, router, base);
    // check history fallback deeplinking
    if (fallback && checkFallback(this.base)) {
      return
    }
    ensureSlash();
  }

  if ( History$$1 ) HashHistory.__proto__ = History$$1;
  HashHistory.prototype = Object.create( History$$1 && History$$1.prototype );
  HashHistory.prototype.constructor = HashHistory;

  // this is delayed until the app mounts
  // to avoid the hashchange listener being fired too early
  HashHistory.prototype.setupListeners = function setupListeners () {
    var this$1 = this;

    window.addEventListener('hashchange', function () {
      if (!ensureSlash()) {
        return
      }
      this$1.transitionTo(getHash(), function (route) {
        replaceHash(route.fullPath);
      });
    });
  };

  HashHistory.prototype.push = function push (location, onComplete, onAbort) {
    this.transitionTo(location, function (route) {
      pushHash(route.fullPath);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    this.transitionTo(location, function (route) {
      replaceHash(route.fullPath);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.go = function go (n) {
    window.history.go(n);
  };

  HashHistory.prototype.ensureURL = function ensureURL (push) {
    var current = this.current.fullPath;
    if (getHash() !== current) {
      push ? pushHash(current) : replaceHash(current);
    }
  };

  HashHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    return getHash()
  };

  return HashHistory;
}(History));

function checkFallback (base) {
  var location = getLocation(base);
  if (!/^\/#/.test(location)) {
    window.location.replace(
      cleanPath(base + '/#' + location)
    );
    return true
  }
}

function ensureSlash () {
  var path = getHash();
  if (path.charAt(0) === '/') {
    return true
  }
  replaceHash('/' + path);
  return false
}

function getHash () {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var index = href.indexOf('#');
  return index === -1 ? '' : href.slice(index + 1)
}

function pushHash (path) {
  window.location.hash = path;
}

function replaceHash (path) {
  var href = window.location.href;
  var i = href.indexOf('#');
  var base = i >= 0 ? href.slice(0, i) : href;
  window.location.replace((base + "#" + path));
}

/*  */


var AbstractHistory = (function (History$$1) {
  function AbstractHistory (router, base) {
    History$$1.call(this, router, base);
    this.stack = [];
    this.index = -1;
  }

  if ( History$$1 ) AbstractHistory.__proto__ = History$$1;
  AbstractHistory.prototype = Object.create( History$$1 && History$$1.prototype );
  AbstractHistory.prototype.constructor = AbstractHistory;

  AbstractHistory.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index + 1).concat(route);
      this$1.index++;
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index).concat(route);
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.go = function go (n) {
    var this$1 = this;

    var targetIndex = this.index + n;
    if (targetIndex < 0 || targetIndex >= this.stack.length) {
      return
    }
    var route = this.stack[targetIndex];
    this.confirmTransition(route, function () {
      this$1.index = targetIndex;
      this$1.updateRoute(route);
    });
  };

  AbstractHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    var current = this.stack[this.stack.length - 1];
    return current ? current.fullPath : '/'
  };

  AbstractHistory.prototype.ensureURL = function ensureURL () {
    // noop
  };

  return AbstractHistory;
}(History));

/*  */

var VueRouter = function VueRouter (options) {
  if ( options === void 0 ) options = {};

  this.app = null;
  this.apps = [];
  this.options = options;
  this.beforeHooks = [];
  this.resolveHooks = [];
  this.afterHooks = [];
  this.matcher = createMatcher(options.routes || [], this);

  var mode = options.mode || 'hash';
  this.fallback = mode === 'history' && !supportsPushState && options.fallback !== false;
  if (this.fallback) {
    mode = 'hash';
  }
  if (!inBrowser) {
    mode = 'abstract';
  }
  this.mode = mode;

  switch (mode) {
    case 'history':
      this.history = new HTML5History(this, options.base);
      break
    case 'hash':
      this.history = new HashHistory(this, options.base, this.fallback);
      break
    case 'abstract':
      this.history = new AbstractHistory(this, options.base);
      break
    default:
      if (true) {
        assert(false, ("invalid mode: " + mode));
      }
  }
};

var prototypeAccessors = { currentRoute: {} };

VueRouter.prototype.match = function match (
  raw,
  current,
  redirectedFrom
) {
  return this.matcher.match(raw, current, redirectedFrom)
};

prototypeAccessors.currentRoute.get = function () {
  return this.history && this.history.current
};

VueRouter.prototype.init = function init (app /* Vue component instance */) {
    var this$1 = this;

  "development" !== 'production' && assert(
    install.installed,
    "not installed. Make sure to call `Vue.use(VueRouter)` " +
    "before creating root instance."
  );

  this.apps.push(app);

  // main app already initialized.
  if (this.app) {
    return
  }

  this.app = app;

  var history = this.history;

  if (history instanceof HTML5History) {
    history.transitionTo(history.getCurrentLocation());
  } else if (history instanceof HashHistory) {
    var setupHashListener = function () {
      history.setupListeners();
    };
    history.transitionTo(
      history.getCurrentLocation(),
      setupHashListener,
      setupHashListener
    );
  }

  history.listen(function (route) {
    this$1.apps.forEach(function (app) {
      app._route = route;
    });
  });
};

VueRouter.prototype.beforeEach = function beforeEach (fn) {
  return registerHook(this.beforeHooks, fn)
};

VueRouter.prototype.beforeResolve = function beforeResolve (fn) {
  return registerHook(this.resolveHooks, fn)
};

VueRouter.prototype.afterEach = function afterEach (fn) {
  return registerHook(this.afterHooks, fn)
};

VueRouter.prototype.onReady = function onReady (cb, errorCb) {
  this.history.onReady(cb, errorCb);
};

VueRouter.prototype.onError = function onError (errorCb) {
  this.history.onError(errorCb);
};

VueRouter.prototype.push = function push (location, onComplete, onAbort) {
  this.history.push(location, onComplete, onAbort);
};

VueRouter.prototype.replace = function replace (location, onComplete, onAbort) {
  this.history.replace(location, onComplete, onAbort);
};

VueRouter.prototype.go = function go (n) {
  this.history.go(n);
};

VueRouter.prototype.back = function back () {
  this.go(-1);
};

VueRouter.prototype.forward = function forward () {
  this.go(1);
};

VueRouter.prototype.getMatchedComponents = function getMatchedComponents (to) {
  var route = to
    ? to.matched
      ? to
      : this.resolve(to).route
    : this.currentRoute;
  if (!route) {
    return []
  }
  return [].concat.apply([], route.matched.map(function (m) {
    return Object.keys(m.components).map(function (key) {
      return m.components[key]
    })
  }))
};

VueRouter.prototype.resolve = function resolve (
  to,
  current,
  append
) {
  var location = normalizeLocation(
    to,
    current || this.history.current,
    append,
    this
  );
  var route = this.match(location, current);
  var fullPath = route.redirectedFrom || route.fullPath;
  var base = this.history.base;
  var href = createHref(base, fullPath, this.mode);
  return {
    location: location,
    route: route,
    href: href,
    // for backwards compat
    normalizedTo: location,
    resolved: route
  }
};

VueRouter.prototype.addRoutes = function addRoutes (routes) {
  this.matcher.addRoutes(routes);
  if (this.history.current !== START) {
    this.history.transitionTo(this.history.getCurrentLocation());
  }
};

Object.defineProperties( VueRouter.prototype, prototypeAccessors );

function registerHook (list, fn) {
  list.push(fn);
  return function () {
    var i = list.indexOf(fn);
    if (i > -1) { list.splice(i, 1); }
  }
}

function createHref (base, fullPath, mode) {
  var path = mode === 'hash' ? '#' + fullPath : fullPath;
  return base ? cleanPath(base + '/' + path) : path
}

VueRouter.install = install;
VueRouter.version = '2.7.0';

if (inBrowser && window.Vue) {
  window.Vue.use(VueRouter);
}

/* harmony default export */ __webpack_exports__["a"] = (VueRouter);


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2c78453c\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./src/App.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2c78453c\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./src/App.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("5dec9bf2", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2c78453c\",\"scoped\":false,\"hasInlineConfig\":true}!../node_modules/sass-loader/lib/loader.js!../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./App.vue", function() {
     var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2c78453c\",\"scoped\":false,\"hasInlineConfig\":true}!../node_modules/sass-loader/lib/loader.js!../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./App.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e803cf0c\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./src/components/widgets/Pages.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e803cf0c\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./src/components/widgets/Pages.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("2ab7d518", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e803cf0c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./Pages.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e803cf0c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./Pages.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ec10328e\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./src/components/Home.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ec10328e\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./src/components/Home.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("29d5a43f", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ec10328e\",\"scoped\":false,\"hasInlineConfig\":true}!../../node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./Home.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ec10328e\",\"scoped\":false,\"hasInlineConfig\":true}!../../node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./Home.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f5ee7324\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./src/components/widgets/RecentPosts.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f5ee7324\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./src/components/widgets/RecentPosts.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("7f1f8cc1", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f5ee7324\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./RecentPosts.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f5ee7324\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./RecentPosts.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/lib/addStylesClient.js":
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__("./node_modules/vue-style-loader/lib/listToStyles.js")

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "./node_modules/vue-style-loader/lib/listToStyles.js":
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),

/***/ "./node_modules/vuex-localstorage/dist/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * VUEX-LOCALSTORAGE v1.0.0
 * (c) 2017 crossjs
 * Released under the MIT License.
 */


Object.defineProperty(exports, '__esModule', { value: true });

var index = Date.now();

/**
 * createStorage
 *
 * @param  {String} namespace       namespace
 * @param  {Object} [initialState]  初始值/默认值
 * @param  {Object} [config]         自定义 provider/serialize/deserialize/expires
 * @return {Object}                 get/set 方法
 */
function createStorage (ref) {
  if ( ref === void 0 ) ref = {};
  var namespace = ref.namespace;
  var initialState = ref.initialState; if ( initialState === void 0 ) initialState = {};
  var provider = ref.provider; if ( provider === void 0 ) provider = localStorage;
  var serialize = ref.serialize; if ( serialize === void 0 ) serialize = JSON.stringify;
  var deserialize = ref.deserialize; if ( deserialize === void 0 ) deserialize = JSON.parse;
  var expires = ref.expires; if ( expires === void 0 ) expires = 0;
  var merge = ref.merge; if ( merge === void 0 ) merge = defaultMerge;

  if (!namespace) {
    namespace = "vuex-" + (++index);
  }

  return {
    /**
     * get
     *
     * @param  {String} key   key, defaults to 'default'
     * @return {Object}       plain object
     */
    get: function get (key) {
      if ( key === void 0 ) key = 'default';

      var state;

      try {
        var ref = deserialize(provider.getItem((namespace + "-" + key)));
        var value = ref.value;
        var expires = ref.expires;
        if (expires === 0 || expires > Date.now()) {
          // always a plain object
          state = deserialize(value);
        }
      } catch (e) {
        // console.log(e)
      }

      return merge(key === 'default' ? initialState : initialState[key], state)
    },
    /**
     * set
     *
     * @param  {String} key   key
     * @param  {Object} value plain object
     * @return {undifined}
     */
    set: function set (key, value) {
      if (arguments.length === 1) {
        value = key;
        key = 'default';
      }
      try {
        provider.setItem((namespace + "-" + key), serialize({
          value: serialize(value),
          expires: expires ? expires + Date.now() : expires
        }));
      } catch (e) {
        // console.log(e)
      }
    }
  }
}

function createPersist (ref) {
  if ( ref === void 0 ) ref = {};
  var namespace = ref.namespace;
  var initialState = ref.initialState;
  var provider = ref.provider;
  var serialize = ref.serialize;
  var deserialize = ref.deserialize;
  var expires = ref.expires;
  var merge = ref.merge; if ( merge === void 0 ) merge = defaultMerge;
  var reducer = ref.reducer; if ( reducer === void 0 ) reducer = defaultReducer;
  var paths = ref.paths; if ( paths === void 0 ) paths = [];

  return function (store) {
    var storage = createStorage({
      namespace: namespace,
      initialState: initialState,
      provider: provider,
      serialize: serialize,
      deserialize: deserialize,
      merge: merge,
      expires: expires
    });

    store.replaceState(
      merge(store.state, storage.get())
    );

    store.subscribe(function (mutation, state) {
      storage.set(reducer(state, paths));
    });
  }
}

function defaultMerge () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return Object.assign.apply(Object, [ {} ].concat( args ))
}

function defaultReducer (state, paths) {
  return paths.length === 0
  ? state
  : paths.reduce(function (substate, path) {
    if (state.hasOwnProperty(path)) {
      var obj;
      return Object.assign(substate, ( obj = {}, obj[path] = state[path], obj ))
    }
    return substate
  }, {})
}

exports.createStorage = createStorage;
exports['default'] = createPersist;


/***/ }),

/***/ "./node_modules/vuex/dist/vuex.esm.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Store */
/* unused harmony export install */
/* unused harmony export mapState */
/* unused harmony export mapMutations */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return mapGetters; });
/* unused harmony export mapActions */
/* unused harmony export createNamespacedHelpers */
/**
 * vuex v2.4.1
 * (c) 2017 Evan You
 * @license MIT
 */
var applyMixin = function (Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    Vue.mixin({ beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if ( options === void 0 ) options = {};

      options.init = options.init
        ? [vuexInit].concat(options.init)
        : vuexInit;
      _init.call(this, options);
    };
  }

  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function vuexInit () {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function'
        ? options.store()
        : options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
};

var devtoolHook =
  typeof window !== 'undefined' &&
  window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin (store) {
  if (!devtoolHook) { return }

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  });
}

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */


/**
 * forEach for object
 */
function forEachValue (obj, fn) {
  Object.keys(obj).forEach(function (key) { return fn(obj[key], key); });
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isPromise (val) {
  return val && typeof val.then === 'function'
}

function assert (condition, msg) {
  if (!condition) { throw new Error(("[vuex] " + msg)) }
}

var Module = function Module (rawModule, runtime) {
  this.runtime = runtime;
  this._children = Object.create(null);
  this._rawModule = rawModule;
  var rawState = rawModule.state;
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors$1 = { namespaced: { configurable: true } };

prototypeAccessors$1.namespaced.get = function () {
  return !!this._rawModule.namespaced
};

Module.prototype.addChild = function addChild (key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild (key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild (key) {
  return this._children[key]
};

Module.prototype.update = function update (rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild (fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter (fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction (fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation (fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties( Module.prototype, prototypeAccessors$1 );

var ModuleCollection = function ModuleCollection (rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};

ModuleCollection.prototype.get = function get (path) {
  return path.reduce(function (module, key) {
    return module.getChild(key)
  }, this.root)
};

ModuleCollection.prototype.getNamespace = function getNamespace (path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '')
  }, '')
};

ModuleCollection.prototype.update = function update$1 (rawRootModule) {
  update([], this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register (path, rawModule, runtime) {
    var this$1 = this;
    if ( runtime === void 0 ) runtime = true;

  if (true) {
    assertRawModule(path, rawModule);
  }

  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  if (!parent.getChild(key).runtime) { return }

  parent.removeChild(key);
};

function update (path, targetModule, newModule) {
  if (true) {
    assertRawModule(path, newModule);
  }

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if (true) {
          console.warn(
            "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
            'manual reload is needed'
          );
        }
        return
      }
      update(
        path.concat(key),
        targetModule.getChild(key),
        newModule.modules[key]
      );
    }
  }
}

function assertRawModule (path, rawModule) {
  ['getters', 'actions', 'mutations'].forEach(function (key) {
    if (!rawModule[key]) { return }

    forEachValue(rawModule[key], function (value, type) {
      assert(
        typeof value === 'function',
        makeAssertionMessage(path, key, type, value)
      );
    });
  });
}

function makeAssertionMessage (path, key, type, value) {
  var buf = key + " should be function but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + (path.join('.')) + "\"";
  }
  buf += " is " + (JSON.stringify(value)) + ".";

  return buf
}

var Vue; // bind on install

var Store = function Store (options) {
  var this$1 = this;
  if ( options === void 0 ) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #731
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  if (true) {
    assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
    assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
    assert(this instanceof Store, "Store must be called with the new operator.");
  }

  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
  var strict = options.strict; if ( strict === void 0 ) strict = false;

  var state = options.state; if ( state === void 0 ) state = {};
  if (typeof state === 'function') {
    state = state();
  }

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch (type, payload) {
    return dispatch.call(store, type, payload)
  };
  this.commit = function boundCommit (type, payload, options) {
    return commit.call(store, type, payload, options)
  };

  // strict mode
  this.strict = strict;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.forEach(function (plugin) { return plugin(this$1); });

  if (Vue.config.devtools) {
    devtoolPlugin(this);
  }
};

var prototypeAccessors = { state: { configurable: true } };

prototypeAccessors.state.get = function () {
  return this._vm._data.$$state
};

prototypeAccessors.state.set = function (v) {
  if (true) {
    assert(false, "Use store.replaceState() to explicit replace store state.");
  }
};

Store.prototype.commit = function commit (_type, _payload, _options) {
    var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    if (true) {
      console.error(("[vuex] unknown mutation type: " + type));
    }
    return
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator (handler) {
      handler(payload);
    });
  });
  this._subscribers.forEach(function (sub) { return sub(mutation, this$1.state); });

  if (
    "development" !== 'production' &&
    options && options.silent
  ) {
    console.warn(
      "[vuex] mutation type: " + type + ". Silent option has been removed. " +
      'Use the filter functionality in the vue-devtools'
    );
  }
};

Store.prototype.dispatch = function dispatch (_type, _payload) {
  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;

  var entry = this._actions[type];
  if (!entry) {
    if (true) {
      console.error(("[vuex] unknown action type: " + type));
    }
    return
  }
  return entry.length > 1
    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
    : entry[0](payload)
};

Store.prototype.subscribe = function subscribe (fn) {
  var subs = this._subscribers;
  if (subs.indexOf(fn) < 0) {
    subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  }
};

Store.prototype.watch = function watch (getter, cb, options) {
    var this$1 = this;

  if (true) {
    assert(typeof getter === 'function', "store.watch only accepts a function.");
  }
  return this._watcherVM.$watch(function () { return getter(this$1.state, this$1.getters); }, cb, options)
};

Store.prototype.replaceState = function replaceState (state) {
    var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule (path, rawModule) {
  if (typeof path === 'string') { path = [path]; }

  if (true) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
    assert(path.length > 0, 'cannot register the root module by using registerModule.');
  }

  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path));
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule (path) {
    var this$1 = this;

  if (typeof path === 'string') { path = [path]; }

  if (true) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hotUpdate = function hotUpdate (newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit (fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties( Store.prototype, prototypeAccessors );

function resetStore (store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM (store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    computed[key] = function () { return fn(store); };
    Object.defineProperty(store.getters, key, {
      get: function () { return store._vm[key]; },
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state
    },
    computed: computed
  });
  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () { return oldVm.$destroy(); });
  }
}

function installModule (store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var namespacedType = namespace + key;
    registerAction(store, namespacedType, action, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */
function makeLocalContext (store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if ("development" !== 'production' && !store._actions[type]) {
          console.error(("[vuex] unknown local action type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      return store.dispatch(type, payload)
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if ("development" !== 'production' && !store._mutations[type]) {
          console.error(("[vuex] unknown local mutation type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      store.commit(type, payload, options);
    }
  };

  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace
        ? function () { return store.getters; }
        : function () { return makeLocalGetters(store, namespace); }
    },
    state: {
      get: function () { return getNestedState(store.state, path); }
    }
  });

  return local
}

function makeLocalGetters (store, namespace) {
  var gettersProxy = {};

  var splitPos = namespace.length;
  Object.keys(store.getters).forEach(function (type) {
    // skip if the target getter is not match this namespace
    if (type.slice(0, splitPos) !== namespace) { return }

    // extract local getter type
    var localType = type.slice(splitPos);

    // Add a port to the getters proxy.
    // Define as getter property because
    // we do not want to evaluate the getters in this time.
    Object.defineProperty(gettersProxy, localType, {
      get: function () { return store.getters[type]; },
      enumerable: true
    });
  });

  return gettersProxy
}

function registerMutation (store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler (payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction (store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler (payload, cb) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state
    }, payload, cb);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err
      })
    } else {
      return res
    }
  });
}

function registerGetter (store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    if (true) {
      console.error(("[vuex] duplicate getter key: " + type));
    }
    return
  }
  store._wrappedGetters[type] = function wrappedGetter (store) {
    return rawGetter(
      local.state, // local state
      local.getters, // local getters
      store.state, // root state
      store.getters // root getters
    )
  };
}

function enableStrictMode (store) {
  store._vm.$watch(function () { return this._data.$$state }, function () {
    if (true) {
      assert(store._committing, "Do not mutate vuex store state outside mutation handlers.");
    }
  }, { deep: true, sync: true });
}

function getNestedState (state, path) {
  return path.length
    ? path.reduce(function (state, key) { return state[key]; }, state)
    : state
}

function unifyObjectStyle (type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  if (true) {
    assert(typeof type === 'string', ("Expects string as the type, but found " + (typeof type) + "."));
  }

  return { type: type, payload: payload, options: options }
}

function install (_Vue) {
  if (Vue && _Vue === Vue) {
    if (true) {
      console.error(
        '[vuex] already installed. Vue.use(Vuex) should be called only once.'
      );
    }
    return
  }
  Vue = _Vue;
  applyMixin(Vue);
}

var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState () {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function'
        ? val.call(this, state, getters)
        : state[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return
        }
        commit = module.context.commit;
      }
      return typeof val === 'function'
        ? val.apply(this, [commit].concat(args))
        : commit.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    val = namespace + val;
    res[key] = function mappedGetter () {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return
      }
      if ("development" !== 'production' && !(val in this.$store.getters)) {
        console.error(("[vuex] unknown getter: " + val));
        return
      }
      return this.$store.getters[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function'
        ? val.apply(this, [dispatch].concat(args))
        : dispatch.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

var createNamespacedHelpers = function (namespace) { return ({
  mapState: mapState.bind(null, namespace),
  mapGetters: mapGetters.bind(null, namespace),
  mapMutations: mapMutations.bind(null, namespace),
  mapActions: mapActions.bind(null, namespace)
}); };

function normalizeMap (map) {
  return Array.isArray(map)
    ? map.map(function (key) { return ({ key: key, val: key }); })
    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
}

function normalizeNamespace (fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map)
  }
}

function getModuleByNamespace (store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if ("development" !== 'production' && !module) {
    console.error(("[vuex] module namespace not found in " + helper + "(): " + namespace));
  }
  return module
}

var index_esm = {
  Store: Store,
  install: install,
  version: '2.4.1',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers
};


/* harmony default export */ __webpack_exports__["a"] = (index_esm);


/***/ }),

/***/ "./src/App.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2c78453c\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./src/App.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\",\"transform-object-rest-spread\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./src/App.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-2c78453c\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./src/App.vue")
/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/App.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2c78453c", Component.options)
  } else {
    hotAPI.reload("data-v-2c78453c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./src/api/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  getCategories: function getCategories(cb) {
    axios.get(window.SETTINGS.API_BASE_PATH + 'categories?sort=name&hide_empty=true&per_page=50').then(function (response) {
      cb(response.data.filter(function (c) {
        return c.name !== "Uncategorized";
      }));
    }).catch(function (e) {
      cb(e);
    });
  },
  getPages: function getPages(cb) {
    axios.get(window.SETTINGS.API_BASE_PATH + 'pages?per_page=10').then(function (response) {
      cb(response.data);
    }).catch(function (e) {
      cb(e);
    });
  },
  getPage: function getPage(id, cb) {
    if (_.isNull(id) || !_.isNumber(id)) return false;
    axios.get(window.SETTINGS.API_BASE_PATH + 'pages/' + id).then(function (response) {
      cb(response.data);
    }).catch(function (e) {
      cb(e);
    });
  },
  getPosts: function getPosts(limit, cb) {
    if (_.isEmpty(limit)) {
      var _limit = 5;
    }

    axios.get(window.SETTINGS.API_BASE_PATH + 'posts?per_page=' + limit).then(function (response) {
      cb(response.data);
    }).catch(function (e) {
      cb(e);
    });
  }
});

/***/ }),

/***/ "./src/app.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_polyfill__ = __webpack_require__("./node_modules/babel-polyfill/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_polyfill___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_polyfill__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__("./node_modules/vue/dist/vue.common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_router__ = __webpack_require__("./node_modules/vue-router/dist/vue-router.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_lazyload__ = __webpack_require__("./node_modules/vue-lazyload/vue-lazyload.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_lazyload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_vue_lazyload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__router__ = __webpack_require__("./src/router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__App_vue__ = __webpack_require__("./src/App.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__App_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__App_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__store__ = __webpack_require__("./src/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__store_mutation_types__ = __webpack_require__("./src/store/mutation-types.js");
window.SETTINGS = {
  // How many different dispatched actions determine loading progress
  // This is likely determined by how many dispatched actions you have below
  // in the created() method
  LOADING_SEGMENTS: 2,
  API_BASE_PATH: '/wp-json/wp/v2/'
};

__webpack_require__("./src/bootstrap.js");
__webpack_require__("./src/vendor/fontawesome/packs/solid.js");
__webpack_require__("./src/vendor/fontawesome/fontawesome.js");






// import { auth, database } from './firebase.config.js' - Uncomment if you need firebase




__WEBPACK_IMPORTED_MODULE_1_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_3_vue_lazyload___default.a);

__WEBPACK_IMPORTED_MODULE_4__router__["a" /* default */].afterEach(function (to, from) {
  // Add a body class specific to the route we're viewing
  $("body").removeClass(function (index, className) {
    return (className.match(/(^|\s)vue--page--\S+/g) || []).join(' ');
  });
  $("body").addClass("vue--page--" + _.toLower(to.name));
});

new __WEBPACK_IMPORTED_MODULE_1_vue___default.a({
  el: '#app',
  store: __WEBPACK_IMPORTED_MODULE_6__store__["a" /* default */],
  router: __WEBPACK_IMPORTED_MODULE_4__router__["a" /* default */],
  render: function render(h) {
    return h(__WEBPACK_IMPORTED_MODULE_5__App_vue___default.a);
  },
  created: function created() {
    this.$store.commit(__WEBPACK_IMPORTED_MODULE_7__store_mutation_types__["g" /* RESET_LOADING_PROGRESS */]);
    this.$store.dispatch('getAllCategories');
    this.$store.dispatch('getAllPages');

    // Once user is signed in/out, uncomment if you need Firebase authentication
    // auth.onAuthStateChanged(user => {
    //   if (user) {
    //     this.$store.commit(types.LOGIN_USER)
    //     this.$store.commit(types.STORE_FETCHED_USER, user)
    //   } else {
    //     this.$store.commit(types.LOGOUT_USER)
    //   }
    // })
  }
});

/***/ }),

/***/ "./src/bootstrap.js":
/***/ (function(module, exports, __webpack_require__) {

try {
  window._ = __webpack_require__("./node_modules/lodash/lodash.js");
  window.$ = window.jQuery = __webpack_require__("./node_modules/jquery/dist/jquery.js");
  window.axios = __webpack_require__("./node_modules/axios/index.js");
  window.axios.defaults.headers.common = {
    'X-CSRF-TOKEN': window.WordPress.csrfToken,
    'X-Requested-With': 'XMLHttpRequest'
  };
} catch (e) {}

/***/ }),

/***/ "./src/components/Home.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ec10328e\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./src/components/Home.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\",\"transform-object-rest-spread\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./src/components/Home.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-ec10328e\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./src/components/Home.vue")
/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/Home.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ec10328e", Component.options)
  } else {
    hotAPI.reload("data-v-ec10328e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./src/components/partials/Footer.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = null
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-1604ae0e\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./src/components/partials/Footer.vue")
/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/partials/Footer.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1604ae0e", Component.options)
  } else {
    hotAPI.reload("data-v-1604ae0e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./src/components/partials/Header.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = null
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-37371200\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./src/components/partials/Header.vue")
/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/partials/Header.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-37371200", Component.options)
  } else {
    hotAPI.reload("data-v-37371200", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./src/components/widgets/Pages.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e803cf0c\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./src/components/widgets/Pages.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\",\"transform-object-rest-spread\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./src/components/widgets/Pages.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-e803cf0c\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./src/components/widgets/Pages.vue")
/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-e803cf0c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/widgets/Pages.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e803cf0c", Component.options)
  } else {
    hotAPI.reload("data-v-e803cf0c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./src/components/widgets/RecentPosts.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f5ee7324\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./src/components/widgets/RecentPosts.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\",\"transform-object-rest-spread\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./src/components/widgets/RecentPosts.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-f5ee7324\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./src/components/widgets/RecentPosts.vue")
/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-f5ee7324"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/widgets/RecentPosts.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f5ee7324", Component.options)
  } else {
    hotAPI.reload("data-v-f5ee7324", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./src/router/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("./node_modules/vue/dist/vue.common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__("./node_modules/vue-router/dist/vue-router.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Home__ = __webpack_require__("./src/components/Home.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Home___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_Home__);



// Components


__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

var router = new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  routes: [{
    path: '/',
    name: 'Home',
    component: __WEBPACK_IMPORTED_MODULE_2__components_Home___default.a
    // props: { pageContentID: 383 }
  }],
  mode: 'history',
  base: '',
  scrollBehavior: function scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
});

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),

/***/ "./src/store/actions.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginUser", function() { return loginUser; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mutation_types__ = __webpack_require__("./src/store/mutation-types.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api__ = __webpack_require__("./src/api/index.js");



var loginUser = function loginUser(_ref) {
  var commit = _ref.commit;

  auth.signInAnonymously().catch(function (error) {
    // Handle Errors here.
    return false;
  });
};

/***/ }),

/***/ "./src/store/getters.js":
/***/ (function(module, exports) {

// export const cartProducts = state => {
//   return state.cart.added.map(({ id, quantity }) => {
//     const product = state.products.all.find(p => p.id === id)
//     return {
//       title: product.title,
//       price: product.price,
//       quantity
//     }
//   })
// }

/***/ }),

/***/ "./src/store/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("./node_modules/vue/dist/vue.common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex_localstorage__ = __webpack_require__("./node_modules/vuex-localstorage/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex_localstorage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vuex_localstorage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions__ = __webpack_require__("./src/store/actions.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__getters__ = __webpack_require__("./src/store/getters.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__getters___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__getters__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_hub__ = __webpack_require__("./src/store/modules/hub.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_user__ = __webpack_require__("./src/store/modules/user.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_post__ = __webpack_require__("./src/store/modules/post.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__modules_page__ = __webpack_require__("./src/store/modules/page.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__modules_categories__ = __webpack_require__("./src/store/modules/categories.js");











__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */]);

var debug = "development" !== 'production';

var localStorage = __WEBPACK_IMPORTED_MODULE_2_vuex_localstorage___default()({
  namespace: 'YOUR_APP_NAMESPACE',
  initialState: {},
  expires: 1.21e+9 // Two Weeks
});

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */].Store({
  actions: __WEBPACK_IMPORTED_MODULE_3__actions__,
  getters: __WEBPACK_IMPORTED_MODULE_4__getters__,
  modules: {
    hub: __WEBPACK_IMPORTED_MODULE_5__modules_hub__["a" /* default */],
    user: __WEBPACK_IMPORTED_MODULE_6__modules_user__["a" /* default */],
    post: __WEBPACK_IMPORTED_MODULE_7__modules_post__["a" /* default */],
    page: __WEBPACK_IMPORTED_MODULE_8__modules_page__["a" /* default */],
    categories: __WEBPACK_IMPORTED_MODULE_9__modules_categories__["a" /* default */]
  },
  strict: debug,
  plugins: []
}));

/***/ }),

/***/ "./src/store/modules/categories.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api__ = __webpack_require__("./src/api/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mutation_types__ = __webpack_require__("./src/store/mutation-types.js");
var _mutations;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




// initial state
var state = {
  all: [],
  loaded: false

  // getters
};var getters = {
  // Returns an array all categories
  allCategories: function allCategories(state) {
    return state.all;
  },
  allCategoriesLoaded: function allCategoriesLoaded(state) {
    return state.loaded;
  }

  // actions
};var actions = {
  getAllCategories: function getAllCategories(_ref) {
    var commit = _ref.commit;

    __WEBPACK_IMPORTED_MODULE_0__api__["a" /* default */].getCategories(function (categories) {
      commit(__WEBPACK_IMPORTED_MODULE_1__mutation_types__["h" /* STORE_FETCHED_CATEGORIES */], { categories: categories });
      commit(__WEBPACK_IMPORTED_MODULE_1__mutation_types__["a" /* CATEGORIES_LOADED */], true);
      commit(__WEBPACK_IMPORTED_MODULE_1__mutation_types__["b" /* INCREMENT_LOADING_PROGRESS */]);
    });
  }
};

// mutations
var mutations = (_mutations = {}, _defineProperty(_mutations, __WEBPACK_IMPORTED_MODULE_1__mutation_types__["h" /* STORE_FETCHED_CATEGORIES */], function (state, _ref2) {
  var categories = _ref2.categories;

  state.all = categories;
}), _defineProperty(_mutations, __WEBPACK_IMPORTED_MODULE_1__mutation_types__["a" /* CATEGORIES_LOADED */], function (state, bool) {
  state.loaded = bool;
}), _mutations);

/* harmony default export */ __webpack_exports__["a"] = ({
  state: state,
  getters: getters,
  actions: actions,
  mutations: mutations
});

/***/ }),

/***/ "./src/store/modules/hub.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api__ = __webpack_require__("./src/api/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mutation_types__ = __webpack_require__("./src/store/mutation-types.js");
var _mutations;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




// initial state
var state = {
  error: null,
  notice: null,
  loading: true,
  loading_progress: 0

  // getters
};var getters = {
  isLoading: function isLoading(state) {
    return state.loading_progress < 100;
  },
  loadingProgress: function loadingProgress(state) {
    return state.loading_progress;
  },
  loadingIncrement: function loadingIncrement(state) {
    return 100 / SETTINGS.LOADING_SEGMENTS;
  }

  // actions
};var actions = {};

// mutations
var mutations = (_mutations = {}, _defineProperty(_mutations, __WEBPACK_IMPORTED_MODULE_1__mutation_types__["b" /* INCREMENT_LOADING_PROGRESS */], function (state, val) {
  state.loading_progress = Math.min(state.loading_progress + getters.loadingIncrement(), 100);
}), _defineProperty(_mutations, __WEBPACK_IMPORTED_MODULE_1__mutation_types__["g" /* RESET_LOADING_PROGRESS */], function (state) {
  state.loading_progress = 0;
}), _mutations);

/* harmony default export */ __webpack_exports__["a"] = ({
  state: state,
  getters: getters,
  actions: actions,
  mutations: mutations
});

/***/ }),

/***/ "./src/store/modules/page.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api__ = __webpack_require__("./src/api/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mutation_types__ = __webpack_require__("./src/store/mutation-types.js");
var _mutations;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }




// initial state
var state = {
  all: [],
  loaded: false,
  page: null

  // getters
};var getters = {
  allPages: function allPages(state) {
    return state.all;
  },
  allPagesLoaded: function allPagesLoaded(state) {
    return state.loaded;
  },
  pageContent: function pageContent(state) {
    return function (id) {
      var page = state.all.filter(function (page) {
        return page.id === id;
      });
      return !_.isNull(_.first(page).content.rendered) ? _.first(page).content.rendered : false;
    };
  },
  somePages: function somePages(state) {
    return function (limit) {
      if (state.all.length < 1) {
        return false;
      }
      var all = [].concat(_toConsumableArray(state.all));
      console.log(all);
      return all.splice(0, Math.min(limit, state.all.length));
    };
  }

  // actions
};var actions = {
  getAllPages: function getAllPages(_ref) {
    var commit = _ref.commit;

    __WEBPACK_IMPORTED_MODULE_0__api__["a" /* default */].getPages(function (pages) {
      commit(__WEBPACK_IMPORTED_MODULE_1__mutation_types__["i" /* STORE_FETCHED_PAGES */], { pages: pages });
      commit(__WEBPACK_IMPORTED_MODULE_1__mutation_types__["e" /* PAGES_LOADED */], true);
      commit(__WEBPACK_IMPORTED_MODULE_1__mutation_types__["b" /* INCREMENT_LOADING_PROGRESS */]);
    });
  }
};

// mutations
var mutations = (_mutations = {}, _defineProperty(_mutations, __WEBPACK_IMPORTED_MODULE_1__mutation_types__["i" /* STORE_FETCHED_PAGES */], function (state, _ref2) {
  var pages = _ref2.pages;

  state.all = pages;
}), _defineProperty(_mutations, __WEBPACK_IMPORTED_MODULE_1__mutation_types__["e" /* PAGES_LOADED */], function (state, val) {
  state.loaded = val;
}), _mutations);

/* harmony default export */ __webpack_exports__["a"] = ({
  state: state,
  getters: getters,
  actions: actions,
  mutations: mutations
});

/***/ }),

/***/ "./src/store/modules/post.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api__ = __webpack_require__("./src/api/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mutation_types__ = __webpack_require__("./src/store/mutation-types.js");
var _mutations;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




// initial state
var state = {
  recent: [],
  loaded: false

  // getters
};var getters = {
  recentPosts: function recentPosts(state) {
    return function (limit) {
      if (!limit || !_.isNumber(limit) || _.isNull(limit) || typeof limit == 'undefined') {
        return state.recent;
      }
      var recent = state.recent;
      return recent.slice(0, limit);
    };
  },

  recentPostsLoaded: function recentPostsLoaded(state) {
    return state.loaded;
  }

  // actions
};var actions = {
  getPosts: function getPosts(_ref, _ref2) {
    var commit = _ref.commit;
    var limit = _ref2.limit;

    __WEBPACK_IMPORTED_MODULE_0__api__["a" /* default */].getPosts(limit, function (posts) {
      commit(__WEBPACK_IMPORTED_MODULE_1__mutation_types__["j" /* STORE_FETCHED_POSTS */], { posts: posts });
      commit(__WEBPACK_IMPORTED_MODULE_1__mutation_types__["f" /* POSTS_LOADED */], true);
      commit(__WEBPACK_IMPORTED_MODULE_1__mutation_types__["b" /* INCREMENT_LOADING_PROGRESS */]);
    });
  }
};

// mutations
var mutations = (_mutations = {}, _defineProperty(_mutations, __WEBPACK_IMPORTED_MODULE_1__mutation_types__["j" /* STORE_FETCHED_POSTS */], function (state, _ref3) {
  var posts = _ref3.posts;

  state.recent = posts;
}), _defineProperty(_mutations, __WEBPACK_IMPORTED_MODULE_1__mutation_types__["f" /* POSTS_LOADED */], function (state, val) {
  state.loaded = val;
}), _mutations);

/* harmony default export */ __webpack_exports__["a"] = ({
  state: state,
  getters: getters,
  actions: actions,
  mutations: mutations
});

/***/ }),

/***/ "./src/store/modules/user.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api__ = __webpack_require__("./src/api/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mutation_types__ = __webpack_require__("./src/store/mutation-types.js");
var _mutations;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




// initial state
var state = {
  id: '',
  logged_in: false

  // getters
};var getters = {
  userId: function userId(state) {
    return state.id;
  }

  // actions
};var actions = {};

// mutations
var mutations = (_mutations = {}, _defineProperty(_mutations, __WEBPACK_IMPORTED_MODULE_1__mutation_types__["k" /* STORE_FETCHED_USER */], function (state, _ref) {
  var uid = _ref.uid;

  state.id = uid;
}), _defineProperty(_mutations, __WEBPACK_IMPORTED_MODULE_1__mutation_types__["c" /* LOGIN_USER */], function (state) {
  state.logged_in = true;
}), _defineProperty(_mutations, __WEBPACK_IMPORTED_MODULE_1__mutation_types__["d" /* LOGOUT_USER */], function (state) {
  state.logged_in = false;
}), _mutations);

/* harmony default export */ __webpack_exports__["a"] = ({
  state: state,
  getters: getters,
  actions: actions,
  mutations: mutations
});

/***/ }),

/***/ "./src/store/mutation-types.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return STORE_FETCHED_CATEGORIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CATEGORIES_LOADED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return STORE_FETCHED_PAGES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return PAGES_LOADED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return STORE_FETCHED_POSTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return POSTS_LOADED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return STORE_FETCHED_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LOGIN_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return LOGOUT_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return INCREMENT_LOADING_PROGRESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return RESET_LOADING_PROGRESS; });
var STORE_FETCHED_CATEGORIES = 'STORE_FETCHED_CATEGORIES';
var CATEGORIES_LOADED = 'CATEGORIES_LOADED';

var STORE_FETCHED_PAGES = 'STORE_FETCHED_PAGES';
var PAGES_LOADED = 'PAGES_LOADED';

var STORE_FETCHED_POSTS = 'STORE_FETCHED_POSTS';
var POSTS_LOADED = 'POSTS_LOADED';

var STORE_FETCHED_USER = 'STORE_FETCHED_USER';
var LOGIN_USER = 'LOGIN_USER';
var LOGOUT_USER = 'LOGOUT_USER';

var INCREMENT_LOADING_PROGRESS = 'INCREMENT_LOADING_PROGRESS';
var RESET_LOADING_PROGRESS = 'RESET_LOADING_PROGRESS';

/***/ }),

/***/ "./src/styles/app.scss":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/vendor/fontawesome/fontawesome.js":
/***/ (function(module, exports) {

/**
 * Font Awesome 5.0.0-rc2
 */

(function () {
  'use strict';

  function ___$insertStyle(css) {
    if (!css) {
      return;
    }
    if (typeof window === 'undefined') {
      return;
    }

    var style = document.createElement('style');

    style.setAttribute('type', 'text/css');
    style.innerHTML = css;
    document.head.appendChild(style);

    return css;
  }

  var noop = function noop() {};

  var _WINDOW = {};
  var _DOCUMENT = {};
  var _MUTATION_OBSERVER$1 = null;
  var _PERFORMANCE = { mark: noop, measure: noop };

  try {
    if (typeof window !== 'undefined') _WINDOW = window;
    if (typeof document !== 'undefined') _DOCUMENT = document;
    if (typeof MutationObserver !== 'undefined') _MUTATION_OBSERVER$1 = MutationObserver;
    if (typeof performance !== 'undefined') _PERFORMANCE = performance;
  } catch (e) {}

  var _ref = _WINDOW.navigator || {};
  var _ref$userAgent = _ref.userAgent;
  var userAgent = _ref$userAgent === undefined ? '' : _ref$userAgent;

  var WINDOW = _WINDOW;
  var DOCUMENT = _DOCUMENT;
  var MUTATION_OBSERVER = _MUTATION_OBSERVER$1;
  var PERFORMANCE = _PERFORMANCE;
  var IS_BROWSER = !!WINDOW.document;
  var IS_IE = ~userAgent.indexOf('MSIE') || ~userAgent.indexOf('Trident/');

  var NAMESPACE_IDENTIFIER = '___FONT_AWESOME___';
  var UNITS_IN_GRID = 16;
  var DEFAULT_FAMILY_PREFIX = 'fa';
  var DEFAULT_REPLACEMENT_CLASS = 'svg-inline--fa';

  var PRODUCTION = function () {
    try {
      return "production" === 'production';
    } catch (e) {
      return false;
    }
  }();

  var oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var oneToTwenty = oneToTen.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);

  var ATTRIBUTES_WATCHED_FOR_MUTATION = ['data-prefix', 'data-icon', 'data-fa-transform', 'data-fa-compose'];

  var RESERVED_CLASSES = ['xs', 'sm', 'lg', 'fw', 'ul', 'li', 'border', 'pull-left', 'pull-right', 'spin', 'pulse', 'rotate-90', 'rotate-180', 'rotate-270', 'flip-horizontal', 'flip-vertical', 'stack', 'stack-1x', 'stack-2x', 'inverse', 'layers', 'layers-text', 'layers-counter'].concat(oneToTen.map(function (n) {
    return n + 'x';
  })).concat(oneToTwenty.map(function (n) {
    return 'w-' + n;
  }));

  var babelHelpers = {};

  var classCallCheck = function classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  var objectWithoutProperties = function objectWithoutProperties(obj, keys) {
    var target = {};

    for (var i in obj) {
      if (keys.indexOf(i) >= 0) continue;
      if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
      target[i] = obj[i];
    }

    return target;
  };

  var toConsumableArray = function toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }return arr2;
    } else {
      return Array.from(arr);
    }
  };

  babelHelpers;

  var _default = _extends({
    familyPrefix: DEFAULT_FAMILY_PREFIX,
    replacementClass: DEFAULT_REPLACEMENT_CLASS,
    autoReplaceSvg: true,
    autoAddCss: true,
    autoA11y: true,
    observeMutations: true,
    keepOriginalSource: true,
    measurePerformance: false,
    showMissingIcons: true
  }, WINDOW.FontAwesomeConfig || {});

  if (!_default.autoReplaceSvg) _default.observeMutations = false;

  var config = _extends({}, _default);

  WINDOW.FontAwesomeConfig = config;

  function update(newConfig) {
    var validKeys = Object.keys(config);

    Object.keys(newConfig).forEach(function (configKey) {
      if (~validKeys.indexOf(configKey)) {
        config[configKey] = newConfig[configKey];
      }
    });
  }

  var d = UNITS_IN_GRID;

  var meaninglessTransform = {
    size: 16,
    x: 0,
    y: 0,
    rotate: 0,
    flipX: false,
    flipY: false
  };

  function isReserved(name) {
    return ~RESERVED_CLASSES.indexOf(name);
  }

  function bunker(fn) {
    try {
      fn();
    } catch (e) {}
  }

  function insertStyle(css) {
    if (!css) {
      return;
    }

    if (typeof DOCUMENT.createElement === 'undefined') {
      return;
    }

    var style = DOCUMENT.createElement('style');

    style.setAttribute('type', 'text/css');
    style.innerHTML = css;
    DOCUMENT.head.appendChild(style);

    return css;
  }

  var _uniqueId = 0;

  function nextUniqueId() {
    _uniqueId++;

    return _uniqueId;
  }

  function toArray(obj) {
    var array = [];

    for (var i = (obj || []).length >>> 0; i--;) {
      array[i] = obj[i];
    }

    return array;
  }

  function getIconName(familyPrefix, cls) {
    var parts = cls.split('-');
    var prefix = parts[0];
    var iconName = parts.slice(1).join('-');

    if (prefix === familyPrefix && iconName !== '' && !isReserved(iconName)) {
      return iconName;
    } else {
      return null;
    }
  }

  function htmlEscape(str) {
    return ('' + str).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function joinAttributes(attributes) {
    return Object.keys(attributes || {}).reduce(function (acc, attributeName) {
      return acc + (attributeName + '="' + htmlEscape(attributes[attributeName]) + '" ');
    }, '').trim();
  }

  function joinStyles(styles) {
    return Object.keys(styles || {}).reduce(function (acc, styleName) {
      return acc + (styleName + ': ' + styles[styleName] + ';');
    }, '');
  }

  function transformIsMeaningful(transform) {
    return transform.size !== meaninglessTransform.size || transform.x !== meaninglessTransform.x || transform.y !== meaninglessTransform.y || transform.rotate !== meaninglessTransform.rotate || transform.flipX || transform.flipY;
  }

  function transformForSvg(_ref) {
    var transform = _ref.transform,
        containerWidth = _ref.containerWidth,
        iconWidth = _ref.iconWidth;

    var outer = {
      transform: 'translate(' + containerWidth / 2 + ' 256)'
    };
    var innerTranslate = 'translate(' + transform.x * 32 + ', ' + transform.y * 32 + ') ';
    var innerScale = 'scale(' + transform.size / 16 * (transform.flipX ? -1 : 1) + ', ' + transform.size / 16 * (transform.flipY ? -1 : 1) + ') ';
    var innerRotate = 'rotate(' + transform.rotate + ' 0 0)';
    var inner = {
      transform: innerTranslate + ' ' + innerScale + ' ' + innerRotate
    };
    var path = {
      transform: 'translate(' + iconWidth / 2 * -1 + ' -256)'
    };
    return {
      outer: outer,
      inner: inner,
      path: path
    };
  }

  function transformForCss(_ref2) {
    var transform = _ref2.transform,
        _ref2$width = _ref2.width,
        width = _ref2$width === undefined ? UNITS_IN_GRID : _ref2$width,
        _ref2$height = _ref2.height,
        height = _ref2$height === undefined ? UNITS_IN_GRID : _ref2$height,
        _ref2$startCentered = _ref2.startCentered,
        startCentered = _ref2$startCentered === undefined ? false : _ref2$startCentered;

    var val = '';

    if (startCentered && IS_IE) {
      val += 'translate(' + (transform.x / d - width / 2) + 'em, ' + (transform.y / d - height / 2) + 'em) ';
    } else if (startCentered) {
      val += 'translate(calc(-50% + ' + transform.x / d + 'em), calc(-50% + ' + transform.y / d + 'em)) ';
    } else {
      val += 'translate(' + transform.x / d + 'em, ' + transform.y / d + 'em) ';
    }

    val += 'scale(' + transform.size / d * (transform.flipX ? -1 : 1) + ', ' + transform.size / d * (transform.flipY ? -1 : 1) + ') ';
    val += 'rotate(' + transform.rotate + 'deg) ';

    return val;
  }

  var ALL_SPACE = {
    x: 0,
    y: 0,
    width: '100%',
    height: '100%'
  };

  var makeIconComposition = function makeIconComposition(_ref) {
    var children = _ref.children,
        attributes = _ref.attributes,
        main = _ref.main,
        compose = _ref.compose,
        transform = _ref.transform;
    var mainWidth = main.width,
        mainPath = main.icon;
    var composeWidth = compose.width,
        composePath = compose.icon;

    var trans = transformForSvg({ transform: transform, containerWidth: composeWidth, iconWidth: mainWidth });

    var maskRect = {
      tag: 'rect',
      attributes: _extends({}, ALL_SPACE, {
        fill: 'white'
      })
    };
    var maskInnerGroup = {
      tag: 'g',
      attributes: _extends({}, trans.inner),
      children: [{ tag: 'path', attributes: _extends({}, mainPath.attributes, trans.path, { fill: 'black' }) }]
    };
    var maskOuterGroup = {
      tag: 'g',
      attributes: _extends({}, trans.outer),
      children: [maskInnerGroup]
    };
    var maskId = 'mask-' + nextUniqueId();
    var clipId = 'clip-' + nextUniqueId();
    var mask = {
      tag: 'mask',
      attributes: _extends({}, ALL_SPACE, {
        id: maskId,
        maskUnits: 'userSpaceOnUse',
        maskContentUnits: 'userSpaceOnUse'
      }),
      children: [maskRect, maskOuterGroup]
    };
    var defs = {
      tag: 'defs',
      children: [{ tag: 'clipPath', attributes: { id: clipId }, children: [composePath] }, mask]
    };

    children.push(defs, { tag: 'rect', attributes: _extends({ fill: 'currentColor', 'clip-path': 'url(#' + clipId + ')', mask: 'url(#' + maskId + ')' }, ALL_SPACE) });

    return {
      children: children,
      attributes: attributes
    };
  };

  var makeIconStandard = function makeIconStandard(_ref) {
    var attributes = _ref.attributes,
        main = _ref.main,
        transform = _ref.transform,
        styles = _ref.styles;

    var styleString = joinStyles(styles);
    var nextChildren = [];

    if (styleString.length > 0) {
      attributes['style'] = styleString;
    }

    if (transformIsMeaningful(transform)) {
      var trans = transformForSvg({ transform: transform, containerWidth: main.width, iconWidth: main.width });
      nextChildren.push({
        tag: 'g',
        attributes: _extends({}, trans.outer),
        children: [{
          tag: 'g',
          attributes: _extends({}, trans.inner),
          children: [{
            tag: main.icon.tag,
            children: main.icon.children,
            attributes: _extends({}, main.icon.attributes, trans.path)
          }]
        }]
      });
    } else {
      nextChildren.push(main.icon);
    }

    return {
      children: nextChildren,
      attributes: attributes
    };
  };

  var asIcon = function asIcon(_ref) {
    var children = _ref.children,
        main = _ref.main,
        compose = _ref.compose,
        attributes = _ref.attributes,
        styles = _ref.styles,
        transform = _ref.transform;

    if (transformIsMeaningful(transform) && main.found && !compose.found) {
      var width = main.width,
          height = main.height;

      var offset = {
        x: width / height / 2,
        y: 0.5
      };
      attributes['style'] = joinStyles(_extends({}, styles, {
        'transform-origin': offset.x + transform.x / 16 + 'em ' + (offset.y + transform.y / 16) + 'em'
      }));
    }

    return [{
      tag: 'svg',
      attributes: attributes,
      children: children
    }];
  };

  var asSymbol = function asSymbol(_ref) {
    var prefix = _ref.prefix,
        iconName = _ref.iconName,
        children = _ref.children,
        attributes = _ref.attributes;

    return [{
      tag: 'svg',
      attributes: {
        style: 'display: none;'
      },
      children: [{
        tag: 'symbol',
        attributes: _extends({}, attributes, { id: prefix + '-' + config.familyPrefix + '-' + iconName }),
        children: children
      }]
    }];
  };

  function makeInlineSvgAbstract(params) {
    var _params$icons = params.icons,
        main = _params$icons.main,
        compose = _params$icons.compose,
        prefix = params.prefix,
        iconName = params.iconName,
        transform = params.transform,
        title = params.title,
        extra = params.extra;

    var _ref = compose.found ? compose : main,
        width = _ref.width,
        height = _ref.height;

    var widthClass = 'fa-w-' + Math.ceil(width / height * 16);
    var attrClass = [config.replacementClass, iconName ? config.familyPrefix + '-' + iconName : '', widthClass].concat(extra.classes).join(' ');

    var content = {
      children: [],
      attributes: _extends({}, extra.attributes, {
        'data-prefix': prefix,
        'data-icon': iconName,
        'class': attrClass,
        'role': 'img',
        'xmlns': 'http://www.w3.org/2000/svg',
        'viewBox': '0 0 ' + width + ' ' + height
      })
    };

    if (title) content.children.push({ tag: 'title', attributes: { id: content.attributes['aria-labelledby'] || 'title-' + nextUniqueId() }, children: [title] });

    var args = _extends({}, content, {
      prefix: prefix,
      iconName: iconName,
      main: main,
      compose: compose,
      transform: transform,
      styles: extra.styles
    });

    var _ref2 = compose.found && main.found ? makeIconComposition(args) : makeIconStandard(args),
        children = _ref2.children,
        attributes = _ref2.attributes;

    args.children = children;
    args.attributes = attributes;

    if (content.attributes.hasOwnProperty('data-fa-symbol')) {
      return asSymbol(args);
    } else {
      return asIcon(args);
    }
  }

  function makeLayersTextAbstract(params) {
    var content = params.content,
        width = params.width,
        height = params.height,
        transform = params.transform,
        title = params.title,
        extra = params.extra;

    var attributes = _extends({}, extra.attributes, title ? { 'title': title } : {}, {
      'class': extra.classes.join(' ')
    });

    var styles = _extends({}, extra.styles);

    if (transformIsMeaningful(transform)) {
      styles['transform'] = transformForCss({ transform: transform, startCentered: true, width: width, height: height });
      styles['-webkit-transform'] = styles['transform'];
    }

    var styleString = joinStyles(styles);

    if (styleString.length > 0) {
      attributes['style'] = styleString;
    }

    var val = [];

    val.push({
      tag: 'span',
      attributes: attributes,
      children: [content]
    });

    if (title) {
      val.push({ tag: 'span', attributes: { class: 'sr-only' }, children: [title] });
    }

    return val;
  }

  var w = WINDOW || {};

  if (!w[NAMESPACE_IDENTIFIER]) w[NAMESPACE_IDENTIFIER] = {};
  if (!w[NAMESPACE_IDENTIFIER].packs) w[NAMESPACE_IDENTIFIER].packs = {};
  if (!w[NAMESPACE_IDENTIFIER].hooks) w[NAMESPACE_IDENTIFIER].hooks = {};
  if (!w[NAMESPACE_IDENTIFIER].shims) w[NAMESPACE_IDENTIFIER].shims = [];

  var namespace = w[NAMESPACE_IDENTIFIER];

  var noop$1 = function noop() {};
  var p = config.measurePerformance && PERFORMANCE && PERFORMANCE.mark && PERFORMANCE.measure ? PERFORMANCE : { mark: noop$1, measure: noop$1 };
  var preamble = 'FA "5.0.0-rc2"';

  var begin = function begin(name) {
    p.mark(preamble + ' ' + name + ' begins');
    return function () {
      return end(name);
    };
  };

  var end = function end(name) {
    p.mark(preamble + ' ' + name + ' ends');
    p.measure(preamble + ' ' + name, preamble + ' ' + name + ' begins', preamble + ' ' + name + ' ends');
  };

  var perf = { begin: begin, end: end };

  function toHtml(abstractNodes) {
    var tag = abstractNodes.tag,
        _abstractNodes$attrib = abstractNodes.attributes,
        attributes = _abstractNodes$attrib === undefined ? {} : _abstractNodes$attrib,
        _abstractNodes$childr = abstractNodes.children,
        children = _abstractNodes$childr === undefined ? [] : _abstractNodes$childr;

    if (typeof abstractNodes === 'string') {
      return htmlEscape(abstractNodes);
    } else {
      return '<' + tag + ' ' + joinAttributes(attributes) + '>' + children.map(toHtml).join('') + '</' + tag + '>';
    }
  }

  function isReplaced(node) {
    var nodeClass = node.getAttribute ? node.getAttribute('class') : null;

    if (nodeClass) {
      return ~nodeClass.toString().indexOf(config.replacementClass) || ~nodeClass.toString().indexOf('fa-layers-text');
    } else {
      return false;
    }
  }

  function getMutator() {
    if (config.autoReplaceSvg === true) {
      return mutators.replace;
    }

    var mutator = mutators[config.autoReplaceSvg];

    return mutator || mutators.replace;
  }

  var mutators = {
    replace: function replace(mutation) {
      var node = mutation[0];
      var abstract = mutation[1];
      var newOuterHTML = abstract.map(function (a) {
        return toHtml(a);
      }).join('\n');
      if (node.parentNode) node.outerHTML = newOuterHTML + (config.keepOriginalSource && node.tagName.toLowerCase() !== 'svg' ? '<!-- ' + node.outerHTML + ' -->' : '');
    },
    nest: function nest(mutation) {
      var node = mutation[0];
      var abstract = mutation[1];
      var newInnerHTML = abstract.map(function (a) {
        return toHtml(a);
      }).join('\n');
      node.innerHTML = newInnerHTML;
    }
  };

  function perform(mutations, callback) {
    if (!WINDOW.requestAnimationFrame) return;

    WINDOW.requestAnimationFrame(function () {
      var mutator = getMutator();
      var end = perf.begin('mutate');

      mutations.map(mutator);

      if (typeof callback === 'function') {
        callback();
      }

      end();
    });
  }

  function observe(options) {
    if (!MUTATION_OBSERVER) return;

    var treeCallback = options.treeCallback,
        nodeCallback = options.nodeCallback;

    var mo = new MUTATION_OBSERVER(function (objects) {
      toArray(objects).forEach(function (mutationRecord) {
        if (mutationRecord.type === 'childList' && mutationRecord.addedNodes.length > 0 && !isReplaced(mutationRecord.addedNodes[0])) {
          treeCallback(mutationRecord.target);
        }

        if (mutationRecord.type === 'attributes' && isReplaced(mutationRecord.target) && ~ATTRIBUTES_WATCHED_FOR_MUTATION.indexOf(mutationRecord.attributeName)) {
          nodeCallback(mutationRecord.target);
        }
      });
    });

    if (!DOCUMENT.getElementsByTagName) return;

    mo.observe(DOCUMENT.getElementsByTagName('body')[0], {
      childList: true, attributes: true, characterData: true, subtree: true
    });
  }

  var styleParser = function styleParser(node) {
    var style = node.getAttribute('style');

    var val = [];

    if (style) {
      val = style.split(';').reduce(function (acc, style) {
        var styles = style.split(':');
        var prop = styles[0];
        var value = styles.slice(1);

        if (prop && value.length > 0) {
          acc[prop] = value.join(':').trim();
        }

        return acc;
      }, {});
    }

    return val;
  };

  'use strict';

  /**
   * Internal helper to bind a function known to have 4 arguments
   * to a given context.
   */
  var bindInternal4 = function bindInternal4(func, thisContext) {
    return function (a, b, c, d) {
      return func.call(thisContext, a, b, c, d);
    };
  };

  'use strict';

  /**
   * # Reduce
   *
   * A fast object `.reduce()` implementation.
   *
   * @param  {Object}   subject      The object to reduce over.
   * @param  {Function} fn           The reducer function.
   * @param  {mixed}    initialValue The initial value for the reducer, defaults to subject[0].
   * @param  {Object}   thisContext  The context for the reducer.
   * @return {mixed}                 The final result.
   */
  var reduce = function fastReduceObject(subject, fn, initialValue, thisContext) {
    var keys = Object.keys(subject),
        length = keys.length,
        iterator = thisContext !== undefined ? bindInternal4(fn, thisContext) : fn,
        i,
        key,
        result;

    if (initialValue === undefined) {
      i = 1;
      result = subject[keys[0]];
    } else {
      i = 0;
      result = initialValue;
    }

    for (; i < length; i++) {
      key = keys[i];
      result = iterator(result, subject[key], key, subject);
    }

    return result;
  };

  var packs$2 = namespace.packs;
  var shims = namespace.shims;

  var _byUnicode = {};
  var _byLigature = {};
  var _byOldName = {};

  var build = function build() {
    var lookup = function lookup(reducer) {
      return reduce(packs$2, function (o, pack, prefix) {
        o[prefix] = reduce(pack, reducer, {});
        return o;
      }, {});
    };

    _byUnicode = lookup(function (acc, icon, iconName) {
      acc[icon[3]] = iconName;

      return acc;
    });

    _byLigature = lookup(function (acc, icon, iconName) {
      var ligatures = icon[2];

      acc[iconName] = iconName;

      ligatures.forEach(function (ligature) {
        acc[ligature] = iconName;
      });

      return acc;
    });

    var hasRegular = 'far' in packs$2;

    _byOldName = reduce(shims, function (acc, shim) {
      var oldName = shim[0];
      var prefix = shim[1];
      var iconName = shim[2];

      if (prefix === 'far' && !hasRegular) {
        prefix = 'fas';
      }

      acc[oldName] = { prefix: prefix, iconName: iconName };

      return acc;
    }, {});
  };

  build();

  function byUnicode(prefix, unicode) {
    return _byUnicode[prefix][unicode];
  }

  function byLigature(prefix, ligature) {
    return _byLigature[prefix][ligature];
  }

  function byOldName(name) {
    return _byOldName[name] || { prefix: null, iconName: null };
  }

  function toHex(unicode) {
    var result = '';

    for (var i = 0; i < unicode.length; i++) {
      var hex = unicode.charCodeAt(i).toString(16);
      result += ('000' + hex).slice(-4);
    }

    return result;
  }

  var packs$3 = namespace.packs;

  var emptyCanonicalIcon = function emptyCanonicalIcon() {
    return { prefix: null, iconName: null, rest: [] };
  };

  function getCanonicalIcon(values) {
    return values.reduce(function (acc, cls) {
      var iconName = getIconName(config.familyPrefix, cls);

      if (packs$3[cls]) {
        acc.prefix = cls;
      } else if (iconName) {
        var shim = acc.prefix === 'fa' ? byOldName(iconName) : {};

        acc.iconName = shim.iconName || iconName;
        acc.prefix = shim.prefix || acc.prefix;
      } else if (cls !== config.replacementClass && cls.indexOf('fa-w-') !== 0) {
        acc.rest.push(cls);
      }

      return acc;
    }, emptyCanonicalIcon());
  }

  function iconFromMapping(mapping, prefix, iconName) {
    if (mapping && mapping[prefix] && mapping[prefix][iconName]) {
      return {
        prefix: prefix,
        iconName: iconName,
        icon: mapping[prefix][iconName]
      };
    }
  }

  var classParser = function classParser(node) {
    var existingPrefix = node.getAttribute('data-prefix');
    var existingIconName = node.getAttribute('data-icon');

    var val = getCanonicalIcon(toArray(node.classList));

    if (existingPrefix && existingIconName) {
      val.prefix = existingPrefix;
      val.iconName = existingIconName;
    }

    if (val.prefix && node.innerText !== undefined && node.innerText.length > 1) {
      val.iconName = byLigature(val.prefix, node.innerText);
    } else if (val.prefix && node.innerText !== undefined && node.innerText.length === 1) {
      val.iconName = byUnicode(val.prefix, toHex(node.innerText));
    }

    return val;
  };

  var parseTransformString = function parseTransformString(transformString) {
    var transform = {
      size: 16,
      x: 0,
      y: 0,
      flipX: false,
      flipY: false,
      rotate: 0
    };

    if (!transformString) {
      return transform;
    } else {
      return transformString.toLowerCase().split(' ').reduce(function (acc, n) {
        var parts = n.toLowerCase().split('-');
        var first = parts[0];
        var rest = parts.slice(1).join('-');

        if (first && rest === 'h') {
          acc.flipX = true;
          return acc;
        }

        if (first && rest === 'v') {
          acc.flipY = true;
          return acc;
        }

        rest = parseFloat(rest);

        if (isNaN(rest)) {
          return acc;
        }

        switch (first) {
          case 'grow':
            acc.size = acc.size + rest;
            break;
          case 'shrink':
            acc.size = acc.size - rest;
            break;
          case 'left':
            acc.x = acc.x - rest;
            break;
          case 'right':
            acc.x = acc.x + rest;
            break;
          case 'up':
            acc.y = acc.y - rest;
            break;
          case 'down':
            acc.y = acc.y + rest;
            break;
          case 'rotate':
            acc.rotate = acc.rotate + rest;
            break;
        }

        return acc;
      }, transform);
    }
  };

  var transformParser = function transformParser(node) {
    return parseTransformString(node.getAttribute('data-fa-transform'));
  };

  var attributesParser = function attributesParser(node) {
    var extraAttributes = toArray(node.attributes).reduce(function (acc, attr) {
      if (acc.name !== 'class' && acc.name !== 'style') {
        acc[attr.name] = attr.value;
      }
      return acc;
    }, {});

    var title = node.getAttribute('title');

    if (config.autoA11y) {
      if (title) {
        extraAttributes['aria-labelledby'] = config.replacementClass + '-title-' + nextUniqueId();
      } else {
        extraAttributes['aria-hidden'] = 'true';
      }
    }

    return extraAttributes;
  };

  var composeParser = function composeParser(node) {
    var compose = node.getAttribute('data-fa-compose');

    if (!compose) {
      return emptyCanonicalIcon();
    } else {
      return getCanonicalIcon(compose.split(' ').map(function (i) {
        return i.trim();
      }));
    }
  };

  function parseMeta(node) {
    var _classParser = classParser(node),
        iconName = _classParser.iconName,
        prefix = _classParser.prefix,
        extraClasses = _classParser.rest;

    var extraStyles = styleParser(node);
    var transform = transformParser(node);
    var extraAttributes = attributesParser(node);
    var compose = composeParser(node);

    return {
      iconName: iconName,
      title: node.getAttribute('title'),
      prefix: prefix,
      transform: transform,
      compose: compose,
      extra: {
        classes: extraClasses,
        styles: extraStyles,
        attributes: extraAttributes
      }
    };
  }

  function MissingIcon(error) {
    this.name = 'MissingIcon';
    this.message = error || 'Icon unavailable';
    this.stack = new Error().stack;
  }

  MissingIcon.prototype = Object.create(Error.prototype);
  MissingIcon.prototype.constructor = MissingIcon;

  var FILL = { fill: 'currentColor' };
  var ANIMATION_BASE = {
    attributeType: 'XML',
    repeatCount: 'indefinite',
    dur: '2s'
  };
  var RING = {
    tag: 'path',
    attributes: _extends({}, FILL, {
      d: 'M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z'
    })
  };
  var OPACITY_ANIMATE = _extends({}, ANIMATION_BASE, {
    attributeName: 'opacity'
  });
  var DOT = {
    tag: 'circle',
    attributes: _extends({}, FILL, {
      cx: '256',
      cy: '364',
      r: '28'
    }),
    children: [{ tag: 'animate', attributes: _extends({}, ANIMATION_BASE, { attributeName: 'r', values: '28;14;28;28;14;28;' }) }, { tag: 'animate', attributes: _extends({}, OPACITY_ANIMATE, { values: '1;0;1;1;0;1;' }) }]
  };
  var QUESTION = {
    tag: 'path',
    attributes: _extends({}, FILL, {
      opacity: '1',
      d: 'M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z'
    }),
    children: [{ tag: 'animate', attributes: _extends({}, OPACITY_ANIMATE, { values: '1;0;0;0;0;1;' }) }]
  };
  var EXCLAMATION = {
    tag: 'path',
    attributes: _extends({}, FILL, {
      opacity: '0',
      d: 'M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z'
    }),
    children: [{ tag: 'animate', attributes: _extends({}, OPACITY_ANIMATE, { values: '0;0;1;1;0;0;' }) }]
  };

  var missing = { tag: 'g', children: [RING, DOT, QUESTION, EXCLAMATION] };

  var packs = namespace.packs;

  var LAYERS_TEXT_CLASSNAME = 'fa-layers-text';

  function findIcon(iconName, prefix) {
    var val = {
      found: false,
      width: 512,
      height: 512,
      icon: missing
    };

    if (iconName && prefix && packs[prefix] && packs[prefix][iconName]) {
      var icon = packs[prefix][iconName];
      var width = icon[0];
      var height = icon[1];
      var vectorData = icon.slice(4);

      val = {
        found: true,
        width: width,
        height: height,
        icon: { tag: 'path', attributes: { fill: 'currentColor', d: vectorData[0] } }
      };
    } else if (iconName && prefix && !config.showMissingIcons) {
      throw new MissingIcon('Icon is missing for prefix ' + prefix + ' with icon name ' + iconName);
    }

    return val;
  }

  function generateSvgReplacementMutation(node, nodeMeta) {
    var iconName = nodeMeta.iconName,
        title = nodeMeta.title,
        prefix = nodeMeta.prefix,
        transform = nodeMeta.transform,
        compose = nodeMeta.compose,
        extra = nodeMeta.extra;

    return [node, makeInlineSvgAbstract({
      icons: {
        main: findIcon(iconName, prefix),
        compose: findIcon(compose.iconName, compose.prefix)
      },
      prefix: prefix,
      iconName: iconName,
      transform: transform,
      compose: compose,
      title: title,
      extra: extra
    })];
  }

  function generateLayersText(node, nodeMeta) {
    var title = nodeMeta.title,
        transform = nodeMeta.transform,
        extra = nodeMeta.extra;

    var width = null;
    var height = null;

    if (IS_IE) {
      var computedFontSize = parseInt(getComputedStyle(node).fontSize, 10);
      var boundingClientRect = node.getBoundingClientRect();
      width = boundingClientRect.width / computedFontSize;
      height = boundingClientRect.height / computedFontSize;
    }

    if (config.autoA11y && !title) {
      extra.attributes['aria-hidden'] = 'true';
    }

    return [node, makeLayersTextAbstract({
      content: node.innerHTML,
      width: width,
      height: height,
      transform: transform,
      title: title,
      extra: extra
    })];
  }

  function generateMutation(node) {
    var nodeMeta = parseMeta(node);

    if (~nodeMeta.extra.classes.indexOf(LAYERS_TEXT_CLASSNAME)) {
      return generateLayersText(node, nodeMeta);
    } else {
      return generateSvgReplacementMutation(node, nodeMeta);
    }
  }

  function onTree(root) {
    var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    var prefixes = Object.keys(packs);
    var prefixesDomQuery = ['.' + LAYERS_TEXT_CLASSNAME].concat(prefixes.map(function (p) {
      return '.' + p;
    })).join(', ');

    if (prefixesDomQuery.length === 0) {
      return;
    }

    var end = perf.begin('onTree');

    var mutations = toArray(root.querySelectorAll(prefixesDomQuery)).reduce(function (acc, node) {
      try {
        var mutation = generateMutation(node);

        if (mutation) {
          acc.push(mutation);
        }
      } catch (e) {
        if (!PRODUCTION) {
          if (e instanceof MissingIcon) {
            console.error(e);
          }
        }
      }

      return acc;
    }, []);

    end();

    perform(mutations, callback);
  }

  function onNode(node) {
    var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    var mutation = generateMutation(node);

    if (mutation) {
      perform([mutation], callback);
    }
  }

  var functions = [];
  var listener = function listener() {
    DOCUMENT.removeEventListener('DOMContentLoaded', listener);
    loaded = 1;
    functions.map(function (fn) {
      return fn();
    });
  };

  var loaded = (DOCUMENT.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(DOCUMENT.readyState);

  if (!loaded) DOCUMENT.addEventListener('DOMContentLoaded', listener);

  var domready = function domready(fn) {
    if (!DOCUMENT) return;
    loaded ? setTimeout(fn, 0) : functions.push(fn);
  };

  var baseStyles = ___$insertStyle(".svg-inline--fa,svg:not(:root).svg-inline--fa{overflow:visible}.fa-fw,.fa-layers,.fa-li{text-align:center}.fa-layers,.fa-stack,.svg-inline--fa{display:inline-block}.svg-inline--fa{font-size:inherit;height:1em;vertical-align:-12.5%}.svg-inline--fa.fa-lg{vertical-align:-25%}.svg-inline--fa.fa-w-1{width:.0625em}.svg-inline--fa.fa-w-2{width:.125em}.svg-inline--fa.fa-w-3{width:.1875em}.svg-inline--fa.fa-w-4{width:.25em}.svg-inline--fa.fa-w-5{width:.3125em}.svg-inline--fa.fa-w-6{width:.375em}.svg-inline--fa.fa-w-7{width:.4375em}.svg-inline--fa.fa-w-8{width:.5em}.svg-inline--fa.fa-w-9{width:.5625em}.svg-inline--fa.fa-w-10{width:.625em}.svg-inline--fa.fa-w-11{width:.6875em}.svg-inline--fa.fa-w-12{width:.75em}.svg-inline--fa.fa-w-13{width:.8125em}.svg-inline--fa.fa-w-14{width:.875em}.svg-inline--fa.fa-w-15{width:.9375em}.svg-inline--fa.fa-w-16{width:1em}.svg-inline--fa.fa-w-17{width:1.0625em}.svg-inline--fa.fa-w-18{width:1.125em}.svg-inline--fa.fa-w-19{width:1.1875em}.svg-inline--fa.fa-w-20{width:1.25em}.svg-inline--fa.fa-pull-left{margin-right:.3em;width:auto}.svg-inline--fa.fa-pull-right{margin-left:.3em;width:auto}.svg-inline--fa.fa-border{height:1.5em}.svg-inline--fa.fa-li{top:auto;width:1.875em}.svg-inline--fa.fa-fw{width:1.25em}.fa-layers svg.svg-inline--fa{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0;-webkit-transform-origin:center center;transform-origin:center center}.fa-layers{height:1em;position:relative;vertical-align:-12.5%;width:1em}.fa-layers-counter,.fa-layers-text{display:inline-block;position:absolute;text-align:center}.fa-layers-text{left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-transform-origin:center center;transform-origin:center center}.fa-layers-counter{background-color:#ff253a;border-radius:1em;color:#fff;height:1.5em;line-height:1;max-width:5em;min-width:1.5em;overflow:hidden;padding:.25em;right:0;text-overflow:ellipsis;top:0;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:top right;transform-origin:top right}.fa-layers-bottom-right{bottom:0;right:0;top:auto;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:bottom right;transform-origin:bottom right}.fa-layers-bottom-left{bottom:0;left:0;right:auto;top:auto;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:bottom left;transform-origin:bottom left}.fa-layers-top-right{right:0;top:0;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:top right;transform-origin:top right}.fa-layers-top-left{left:0;right:auto;top:0;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:top left;transform-origin:top left}.fa-lg{font-size:1.33333em;line-height:.75em;vertical-align:-15%}.fa-xs{font-size:.75em}.fa-sm{font-size:.875em}.fa-1x{font-size:1em}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-6x{font-size:6em}.fa-7x{font-size:7em}.fa-8x{font-size:8em}.fa-9x{font-size:9em}.fa-10x{font-size:10em}.fa-fw{width:1.25em}.fa-ul{list-style-type:none;margin-left:1.875em;padding-left:0}.fa-ul>li{position:relative}.fa-li{left:-1.875em;position:absolute;top:.14286em;width:1.875em}.fa-li.fa-lg{left:-1.625em}.fa-border{border:.08em solid #eee;border-radius:.1em;padding:.2em .25em .15em}.fa-pull-left{float:left}.fa-pull-right{float:right}.fa.fa-pull-left,.fab.fa-pull-left,.fal.fa-pull-left,.far.fa-pull-left,.fas.fa-pull-left{margin-right:.3em}.fa.fa-pull-right,.fab.fa-pull-right,.fal.fa-pull-right,.far.fa-pull-right,.fas.fa-pull-right{margin-left:.3em}.fa-spin{-webkit-animation:fa-spin 2s infinite linear;animation:fa-spin 2s infinite linear}.fa-pulse{-webkit-animation:fa-spin 1s infinite steps(8);animation:fa-spin 1s infinite steps(8)}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.fa-rotate-90{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";-webkit-transform:rotate(90deg);transform:rotate(90deg)}.fa-rotate-180{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";-webkit-transform:rotate(180deg);transform:rotate(180deg)}.fa-rotate-270{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";-webkit-transform:rotate(270deg);transform:rotate(270deg)}.fa-flip-horizontal{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";-webkit-transform:scale(-1,1);transform:scale(-1,1)}.fa-flip-vertical{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";-webkit-transform:scale(1,-1);transform:scale(1,-1)}.fa-flip-horizontal.fa-flip-vertical{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";-webkit-transform:scale(-1,-1);transform:scale(-1,-1)}:root .fa-flip-horizontal,:root .fa-flip-vertical,:root .fa-rotate-180,:root .fa-rotate-270,:root .fa-rotate-90{-webkit-filter:none;filter:none}.fa-stack{height:2em;position:relative;width:2em}.fa-stack-1x,.fa-stack-2x{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.svg-inline--fa.fa-stack-1x{height:1em;width:1em}.svg-inline--fa.fa-stack-2x{height:2em;width:2em}.fa-inverse{color:#fff}.sr-only{border:0;clip:rect(0,0,0,0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.sr-only-focusable:active,.sr-only-focusable:focus{clip:auto;height:auto;margin:0;overflow:visible;position:static;width:auto}");

  var styles = function styles() {
    var dfp = DEFAULT_FAMILY_PREFIX;
    var drc = DEFAULT_REPLACEMENT_CLASS;
    var fp = config.familyPrefix;
    var rc = config.replacementClass;
    var s = baseStyles;

    if (fp !== dfp || rc !== drc) {
      var dPatt = new RegExp('\\.' + dfp + '\\-', 'g');
      var rPatt = new RegExp('\\.' + drc, 'g');

      s = s.replace(dPatt, '.' + fp + '-').replace(rPatt, '.' + rc);
    }

    return s;
  };

  var Library = function () {
    function Library() {
      classCallCheck(this, Library);

      this.definitions = {};
    }

    createClass(Library, [{
      key: "add",
      value: function add() {
        var _this = this;

        for (var _len = arguments.length, definitions = Array(_len), _key = 0; _key < _len; _key++) {
          definitions[_key] = arguments[_key];
        }

        var additions = definitions.reduce(this._pullDefinitions, {});

        Object.keys(additions).forEach(function (key) {
          _this.definitions[key] = _extends({}, _this.definitions[key] || {}, additions[key]);
        });
      }
    }, {
      key: "reset",
      value: function reset() {
        this.definitions = {};
      }
    }, {
      key: "_pullDefinitions",
      value: function _pullDefinitions(additions, definition) {
        var normalized = definition.prefix && definition.iconName && definition.icon ? { 0: definition } : definition;

        Object.keys(normalized).map(function (key) {
          var _normalized$key = normalized[key],
              prefix = _normalized$key.prefix,
              iconName = _normalized$key.iconName,
              icon = _normalized$key.icon;

          if (!additions[prefix]) additions[prefix] = {};

          additions[prefix][iconName] = icon;
        });

        return additions;
      }
    }]);
    return Library;
  }();

  function prepIcon(icon) {
    var width = icon[0];
    var height = icon[1];
    var vectorData = icon.slice(4);

    return {
      found: true,
      width: width,
      height: height,
      icon: { tag: 'path', attributes: { fill: 'currentColor', d: vectorData[0] } }
    };
  }

  var _stylesInserted = false;

  function ensureStyles() {
    if (!config.autoAddCss) {
      return;
    }

    if (!_stylesInserted) {
      insertStyle(styles());
    }

    _stylesInserted = true;
  }

  function apiObject(val, abstractCreator) {
    Object.defineProperty(val, 'abstract', {
      get: abstractCreator
    });

    Object.defineProperty(val, 'html', {
      get: function get() {
        return val.abstract.map(function (a) {
          return toHtml(a);
        });
      }
    });

    Object.defineProperty(val, 'node', {
      get: function get() {
        if (!DOCUMENT.createElement) return;

        var container = DOCUMENT.createElement('div');
        container.innerHTML = val.html;
        return container.children;
      }
    });

    return val;
  }

  function findIconDefinition(params) {
    var _params$prefix = params.prefix,
        prefix = _params$prefix === undefined ? 'fa' : _params$prefix,
        iconName = params.iconName;

    if (!iconName) return;

    return iconFromMapping(library.definitions, prefix, iconName) || iconFromMapping(namespace.packs, prefix, iconName);
  }

  var library = new Library();

  var api = {
    dom: {
      i2svg: function i2svg() {
        var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        ensureStyles();

        var _params$node = params.node,
            node = _params$node === undefined ? DOCUMENT : _params$node,
            _params$callback = params.callback,
            callback = _params$callback === undefined ? function () {} : _params$callback;

        onTree(node, callback);
      },

      styles: styles,

      insertStyles: function insertStyles() {
        insertStyle(styles());
      }
    },

    library: library,

    parse: {
      transform: function transform(transformString) {
        return parseTransformString(transformString);
      }
    },

    findIconDefinition: findIconDefinition,

    icon: function icon(iconDefinition) {
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var _params$transform = params.transform,
          transform = _params$transform === undefined ? meaninglessTransform : _params$transform,
          _params$compose = params.compose,
          compose = _params$compose === undefined ? null : _params$compose,
          _params$title = params.title,
          title = _params$title === undefined ? null : _params$title,
          _params$classes = params.classes,
          classes = _params$classes === undefined ? [] : _params$classes,
          _params$attributes = params.attributes,
          attributes = _params$attributes === undefined ? {} : _params$attributes,
          _params$style = params.style,
          style = _params$style === undefined ? {} : _params$style;

      var _ref = iconDefinition.icon ? iconDefinition : findIconDefinition(iconDefinition),
          prefix = _ref.prefix,
          iconName = _ref.iconName,
          icon = _ref.icon;

      return apiObject(_extends({ type: 'icon' }, iconDefinition), function () {
        ensureStyles();

        if (config.autoA11y) {
          if (title) {
            attributes['aria-labelledby'] = config.replacementClass + '-title-' + nextUniqueId();
          } else {
            attributes['aria-hidden'] = 'true';
          }
        }

        return makeInlineSvgAbstract({
          icons: {
            main: prepIcon(icon),
            compose: compose ? prepIcon(compose.icon) : { found: false, width: null, height: null, icon: {} }
          },
          prefix: prefix,
          iconName: iconName,
          transform: _extends({}, meaninglessTransform, transform),
          title: title,
          extra: {
            attributes: attributes,
            style: style,
            classes: classes
          }
        });
      });
    },

    text: function text(content) {
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var _params$transform2 = params.transform,
          transform = _params$transform2 === undefined ? meaninglessTransform : _params$transform2,
          _params$title2 = params.title,
          title = _params$title2 === undefined ? null : _params$title2,
          _params$classes2 = params.classes,
          classes = _params$classes2 === undefined ? [] : _params$classes2,
          _params$attributes2 = params.attributes,
          attributes = _params$attributes2 === undefined ? {} : _params$attributes2,
          _params$style2 = params.style,
          style = _params$style2 === undefined ? {} : _params$style2;

      return apiObject({ type: 'text', content: content }, function () {
        ensureStyles();

        return makeLayersTextAbstract({
          content: content,
          transform: _extends({}, meaninglessTransform, transform),
          title: title,
          extra: {
            attributes: attributes,
            style: style,
            classes: [config.familyPrefix + '-layers-text'].concat(toConsumableArray(classes))
          }
        });
      });
    },

    layer: function layer(assembler) {
      return apiObject({ type: 'layer' }, function () {
        ensureStyles();

        var children = [];

        assembler(function (args) {
          Array.isArray(args) ? children = args.map(function (a) {
            children = children.concat(a.abstract);
          }) : children = children.concat(args.abstract);
        });

        return [{
          tag: 'span',
          attributes: { class: config.familyPrefix + '-layers' },
          children: children
        }];
      });
    }
  };

  Object.defineProperty(api, 'config', {
    get: function get() {
      var autoReplaceSvg = config.autoReplaceSvg,
          observeMutations = config.observeMutations,
          showMissingIcons = config.showMissingIcons,
          rest = objectWithoutProperties(config, ['autoReplaceSvg', 'observeMutations', 'showMissingIcons']);

      return rest;
    },

    set: function set(newConfig) {
      update(newConfig);
    }
  });

  function bootstrap() {
    var autoReplace = function autoReplace() {
      if (config.autoReplaceSvg) api.dom.i2svg({ node: DOCUMENT });
    };

    if (IS_BROWSER) {
      if (!WINDOW.FontAwesome) {
        WINDOW.FontAwesome = api;
      }

      domready(function () {
        if (Object.keys(namespace.packs).length > 0) {
          autoReplace();
        }

        if (config.observeMutations && typeof MutationObserver === 'function') {
          observe({ treeCallback: onTree, nodeCallback: onNode });
        }
      });
    }

    namespace.hooks = _extends({}, namespace.hooks, {

      addPack: function addPack(prefix, icons) {
        namespace.packs[prefix] = _extends({}, namespace.packs[prefix] || {}, icons);

        build();
        autoReplace();
      },

      addShims: function addShims(shims) {
        var _namespace$shims;

        (_namespace$shims = namespace.shims).push.apply(_namespace$shims, toConsumableArray(shims));

        build();
        autoReplace();
      }
    });
  }

  bunker(bootstrap);
})();

/***/ }),

/***/ "./src/vendor/fontawesome/packs/solid.js":
/***/ (function(module, exports) {

(function () {
  'use strict';

  var _WINDOW = {};
  try {
    if (typeof window !== 'undefined') _WINDOW = window;
  } catch (e) {}

  var _ref = _WINDOW.navigator || {};
  var _ref$userAgent = _ref.userAgent;
  var userAgent = _ref$userAgent === undefined ? '' : _ref$userAgent;

  var WINDOW = _WINDOW;

  var IS_IE = ~userAgent.indexOf('MSIE') || ~userAgent.indexOf('Trident/');

  var NAMESPACE_IDENTIFIER = '___FONT_AWESOME___';

  var oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var oneToTwenty = oneToTen.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);

  var RESERVED_CLASSES = ['xs', 'sm', 'lg', 'fw', 'ul', 'li', 'border', 'pull-left', 'pull-right', 'spin', 'pulse', 'rotate-90', 'rotate-180', 'rotate-270', 'flip-horizontal', 'flip-vertical', 'stack', 'stack-1x', 'stack-2x', 'inverse', 'layers', 'layers-text', 'layers-counter'].concat(oneToTen.map(function (n) {
    return n + 'x';
  })).concat(oneToTwenty.map(function (n) {
    return 'w-' + n;
  }));

  function bunker(fn) {
    try {
      fn();
    } catch (e) {}
  }

  var icons$1 = {
    "address-book": [448, 512, [], "f2b9", "M436 160c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-20V48c0-26.51-21.49-48-48-48H80C53.49 0 32 21.49 32 48v416c0 26.51 21.49 48 48 48h288c26.51 0 48-21.49 48-48v-48h20c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-20v-64h20c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-20v-64h20zM224 96c53.019 0 96 42.981 96 96s-42.981 96-96 96-96-42.981-96-96 42.981-96 96-96zm128 304c0 26.51-21.49 48-48 48H144c-26.51 0-48-21.49-48-48v-48.711c0-20.994 13.644-39.553 33.683-45.815l22.954-7.173C173.563 312.413 198.198 320 224 320s50.437-7.587 71.363-21.699l22.954 7.173C338.356 311.736 352 330.295 352 351.289V400z"],
    "address-card": [512, 512, [], "f2bb", "M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm-288 64c44.183 0 80 35.817 80 80s-35.817 80-80 80-80-35.817-80-80 35.817-80 80-80zm112 232c0 13.255-10.745 24-24 24H88c-13.255 0-24-10.745-24-24v-29.897a24 24 0 0 1 17.407-23.077l28.938-8.268C129.323 312.549 152.087 320 176 320s46.677-7.451 65.656-21.241l28.938 8.268A23.999 23.999 0 0 1 288 330.103V360zm160-52c0 6.627-5.373 12-12 12H332c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h104c6.627 0 12 5.373 12 12v8zm0-64c0 6.627-5.373 12-12 12H332c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h104c6.627 0 12 5.373 12 12v8zm0-64c0 6.627-5.373 12-12 12H332c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h104c6.627 0 12 5.373 12 12v8z"],
    "adjust": [512, 512, [], "f042", "M8 256c0 136.966 111.033 248 248 248s248-111.034 248-248S392.966 8 256 8 8 119.033 8 256zm248 184V72c101.705 0 184 82.311 184 184 0 101.705-82.311 184-184 184z"],
    "alarm-clock": [512, 512, [], "f34e", "M512 96c0 27.8-11.8 52.8-30.7 70.3C450.8 109.9 399 65.2 335 44.4 352.1 17.7 382 0 416 0c53 0 96 43 96 96zM177 44.4C159.9 17.7 130 0 96 0 43 0 0 43 0 96c0 27.8 11.8 52.8 30.7 70.3C61.2 109.9 113 65.2 177 44.4zm323.3 455.9c-15.7 15.7-41 15.6-56.6 0l-42.1-42.1c-39.2 33.5-90 53.8-145.6 53.8s-106.5-20.3-145.6-53.8l-42.1 42.1c-15.7 15.7-41 15.6-56.6 0-15.6-15.6-15.6-40.9 0-56.6l47.9-47.9C42 363.8 32 327.1 32 288 32 164.3 132.3 64 256 64s224 100.3 224 224c0 39.1-10 75.8-27.6 107.8l47.9 47.9c15.6 15.6 15.6 41 0 56.6zM346.9 324.1l-54.9-40V162.7c0-6.6-5.4-12-12-12h-48c-6.6 0-12 5.4-12 12v152c0 3.8 1.8 7.5 4.9 9.7l79.7 57.9c5.4 3.9 12.9 2.7 16.8-2.6l28.2-38.8c3.9-5.4 2.7-12.9-2.7-16.8z"],
    "align-center": [448, 512, [], "f037", "M352 44v40c0 8.837-7.163 16-16 16H112c-8.837 0-16-7.163-16-16V44c0-8.837 7.163-16 16-16h224c8.837 0 16 7.163 16 16zM16 228h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 256h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm320-200H112c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16h224c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16z"],
    "align-justify": [448, 512, [], "f039", "M0 84V44c0-8.837 7.163-16 16-16h416c8.837 0 16 7.163 16 16v40c0 8.837-7.163 16-16 16H16c-8.837 0-16-7.163-16-16zm16 144h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 256h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0-128h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"],
    "align-left": [448, 512, [], "f036", "M288 44v40c0 8.837-7.163 16-16 16H16c-8.837 0-16-7.163-16-16V44c0-8.837 7.163-16 16-16h256c8.837 0 16 7.163 16 16zM0 172v40c0 8.837 7.163 16 16 16h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16zm16 312h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm256-200H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16h256c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16z"],
    "align-right": [448, 512, [], "f038", "M160 84V44c0-8.837 7.163-16 16-16h256c8.837 0 16 7.163 16 16v40c0 8.837-7.163 16-16 16H176c-8.837 0-16-7.163-16-16zM16 228h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 256h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm160-128h256c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H176c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"],
    "ambulance": [640, 512, [], "f0f9", "M592 0H272c-26.51 0-48 21.49-48 48v48h-44.118a48 48 0 0 0-33.941 14.059l-99.882 99.882A48 48 0 0 0 32 243.882V352h-8c-13.255 0-24 10.745-24 24v16c0 13.255 10.745 24 24 24h40c0 53.019 42.981 96 96 96s96-42.981 96-96h128c0 53.019 42.981 96 96 96s96-42.981 96-96h40c13.255 0 24-10.745 24-24V48c0-26.51-21.49-48-48-48zM160 464c-26.467 0-48-21.533-48-48s21.533-48 48-48 48 21.533 48 48-21.533 48-48 48zm64-208H80v-12.118L179.882 144H224v112zm256 208c-26.467 0-48-21.533-48-48s21.533-48 48-48 48 21.533 48 48-21.533 48-48 48zm32-288v32c0 6.627-5.373 12-12 12h-56v56c0 6.627-5.373 12-12 12h-32c-6.627 0-12-5.373-12-12v-56h-56c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h56v-56c0-6.627 5.373-12 12-12h32c6.627 0 12 5.373 12 12v56h56c6.627 0 12 5.373 12 12z"],
    "american-sign-language-interpreting": [640, 512, [], "f2a3", "M290.547 189.039c-20.295-10.149-44.147-11.199-64.739-3.89 42.606 0 71.208 20.475 85.578 50.576 8.576 17.899-5.148 38.071-23.617 38.071 18.429 0 32.211 20.136 23.617 38.071-14.725 30.846-46.123 50.854-80.298 50.854-.557 0-94.471-8.615-94.471-8.615l-66.406 33.347c-9.384 4.693-19.815.379-23.895-7.781L1.86 290.747c-4.167-8.615-1.111-18.897 6.946-23.621l58.072-33.069L108 159.861c6.39-57.245 34.731-109.767 79.743-146.726 11.391-9.448 28.341-7.781 37.51 3.613 9.446 11.394 7.78 28.067-3.612 37.516-12.503 10.559-23.618 22.509-32.509 35.57 21.672-14.729 46.679-24.732 74.186-28.067 14.725-1.945 28.063 8.336 29.73 23.065 1.945 14.728-8.336 28.067-23.062 29.734-16.116 1.945-31.12 7.503-44.178 15.284 26.114-5.713 58.712-3.138 88.079 11.115 13.336 6.669 18.893 22.509 12.224 35.848-6.389 13.06-22.504 18.617-35.564 12.226zm-27.229 69.472c-6.112-12.505-18.338-20.286-32.231-20.286a35.46 35.46 0 0 0-35.565 35.57c0 21.428 17.808 35.57 35.565 35.57 13.893 0 26.119-7.781 32.231-20.286 4.446-9.449 13.614-15.006 23.339-15.284-9.725-.277-18.893-5.835-23.339-15.284zm374.821-37.237c4.168 8.615 1.111 18.897-6.946 23.621l-58.071 33.069L532 352.16c-6.39 57.245-34.731 109.767-79.743 146.726-10.932 9.112-27.799 8.144-37.51-3.613-9.446-11.394-7.78-28.067 3.613-37.516 12.503-10.559 23.617-22.509 32.508-35.57-21.672 14.729-46.679 24.732-74.186 28.067-10.021 2.506-27.552-5.643-29.73-23.065-1.945-14.728 8.336-28.067 23.062-29.734 16.116-1.946 31.12-7.503 44.178-15.284-26.114 5.713-58.712 3.138-88.079-11.115-13.336-6.669-18.893-22.509-12.224-35.848 6.389-13.061 22.505-18.619 35.565-12.227 20.295 10.149 44.147 11.199 64.739 3.89-42.606 0-71.208-20.475-85.578-50.576-8.576-17.899 5.148-38.071 23.617-38.071-18.429 0-32.211-20.136-23.617-38.071 14.033-29.396 44.039-50.887 81.966-50.854l92.803 8.615 66.406-33.347c9.408-4.704 19.828-.354 23.894 7.781l44.455 88.926zm-229.227-18.618c-13.893 0-26.119 7.781-32.231 20.286-4.446 9.449-13.614 15.006-23.339 15.284 9.725.278 18.893 5.836 23.339 15.284 6.112 12.505 18.338 20.286 32.231 20.286a35.46 35.46 0 0 0 35.565-35.57c0-21.429-17.808-35.57-35.565-35.57z"],
    "anchor": [576, 512, [], "f13d", "M12.971 352h32.394C67.172 454.735 181.944 512 288 512c106.229 0 220.853-57.38 242.635-160h32.394c10.691 0 16.045-12.926 8.485-20.485l-67.029-67.029c-4.686-4.686-12.284-4.686-16.971 0l-67.029 67.029c-7.56 7.56-2.206 20.485 8.485 20.485h35.146c-20.29 54.317-84.963 86.588-144.117 94.015V256h52c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-52v-5.47c37.281-13.178 63.995-48.725 64-90.518C384.005 43.772 341.605.738 289.37.01 235.723-.739 192 42.525 192 96c0 41.798 26.716 77.35 64 90.53V192h-52c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h52v190.015c-58.936-7.399-123.82-39.679-144.117-94.015h35.146c10.691 0 16.045-12.926 8.485-20.485l-67.029-67.029c-4.686-4.686-12.284-4.686-16.971 0L4.485 331.515C-3.074 339.074 2.28 352 12.971 352zM288 64c17.645 0 32 14.355 32 32s-14.355 32-32 32-32-14.355-32-32 14.355-32 32-32z"],
    "angle-double-down": [320, 512, [], "f103", "M143 256.3L7 120.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0L313 86.3c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.4 9.5-24.6 9.5-34 .1zm34 192l136-136c9.4-9.4 9.4-24.6 0-33.9l-22.6-22.6c-9.4-9.4-24.6-9.4-33.9 0L160 352.1l-96.4-96.4c-9.4-9.4-24.6-9.4-33.9 0L7 278.3c-9.4 9.4-9.4 24.6 0 33.9l136 136c9.4 9.5 24.6 9.5 34 .1z"],
    "angle-double-left": [448, 512, [], "f100", "M223.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L319.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L393.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34zm-192 34l136 136c9.4 9.4 24.6 9.4 33.9 0l22.6-22.6c9.4-9.4 9.4-24.6 0-33.9L127.9 256l96.4-96.4c9.4-9.4 9.4-24.6 0-33.9L201.7 103c-9.4-9.4-24.6-9.4-33.9 0l-136 136c-9.5 9.4-9.5 24.6-.1 34z"],
    "angle-double-right": [448, 512, [], "f101", "M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z"],
    "angle-double-up": [320, 512, [], "f102", "M177 255.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 351.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 425.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1zm-34-192L7 199.7c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l96.4-96.4 96.4 96.4c9.4 9.4 24.6 9.4 33.9 0l22.6-22.6c9.4-9.4 9.4-24.6 0-33.9l-136-136c-9.2-9.4-24.4-9.4-33.8 0z"],
    "angle-down": [320, 512, [], "f107", "M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"],
    "angle-left": [256, 512, [], "f104", "M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"],
    "angle-right": [256, 512, [], "f105", "M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"],
    "angle-up": [320, 512, [], "f106", "M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z"],
    "archive": [512, 512, [], "f187", "M488 128H24c-13.255 0-24-10.745-24-24V56c0-13.255 10.745-24 24-24h464c13.255 0 24 10.745 24 24v48c0 13.255-10.745 24-24 24zm-8 328V184c0-13.255-10.745-24-24-24H56c-13.255 0-24 10.745-24 24v272c0 13.255 10.745 24 24 24h400c13.255 0 24-10.745 24-24zM308 256H204c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h104c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12z"],
    "arrow-alt-circle-down": [512, 512, [], "f358", "M504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zM212 140v116h-70.9c-10.7 0-16.1 13-8.5 20.5l114.9 114.3c4.7 4.7 12.2 4.7 16.9 0l114.9-114.3c7.6-7.6 2.2-20.5-8.5-20.5H300V140c0-6.6-5.4-12-12-12h-64c-6.6 0-12 5.4-12 12z"],
    "arrow-alt-circle-left": [512, 512, [], "f359", "M256 504C119 504 8 393 8 256S119 8 256 8s248 111 248 248-111 248-248 248zm116-292H256v-70.9c0-10.7-13-16.1-20.5-8.5L121.2 247.5c-4.7 4.7-4.7 12.2 0 16.9l114.3 114.9c7.6 7.6 20.5 2.2 20.5-8.5V300h116c6.6 0 12-5.4 12-12v-64c0-6.6-5.4-12-12-12z"],
    "arrow-alt-circle-right": [512, 512, [], "f35a", "M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zM140 300h116v70.9c0 10.7 13 16.1 20.5 8.5l114.3-114.9c4.7-4.7 4.7-12.2 0-16.9l-114.3-115c-7.6-7.6-20.5-2.2-20.5 8.5V212H140c-6.6 0-12 5.4-12 12v64c0 6.6 5.4 12 12 12z"],
    "arrow-alt-circle-up": [512, 512, [], "f35b", "M8 256C8 119 119 8 256 8s248 111 248 248-111 248-248 248S8 393 8 256zm292 116V256h70.9c10.7 0 16.1-13 8.5-20.5L264.5 121.2c-4.7-4.7-12.2-4.7-16.9 0l-115 114.3c-7.6 7.6-2.2 20.5 8.5 20.5H212v116c0 6.6 5.4 12 12 12h64c6.6 0 12-5.4 12-12z"],
    "arrow-alt-down": [448, 512, [], "f354", "M176 32h96c13.3 0 24 10.7 24 24v200h103.8c21.4 0 32.1 25.8 17 41L241 473c-9.4 9.4-24.6 9.4-34 0L31.3 297c-15.1-15.1-4.4-41 17-41H152V56c0-13.3 10.7-24 24-24z"],
    "arrow-alt-from-bottom": [384, 512, [], "f346", "M360 480H24c-13.3 0-24-10.7-24-24v-24c0-13.3 10.7-24 24-24h336c13.3 0 24 10.7 24 24v24c0 13.3-10.7 24-24 24zM256 360V224h87.7c17.8 0 26.7-21.5 14.1-34.1L205.7 37.7c-7.5-7.5-19.8-7.5-27.3 0L26.1 189.9C13.5 202.5 22.5 224 40.3 224H128v136c0 13.3 10.7 24 24 24h80c13.3 0 24-10.7 24-24z"],
    "arrow-alt-from-left": [448, 512, [], "f347", "M0 424V88c0-13.3 10.7-24 24-24h24c13.3 0 24 10.7 24 24v336c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24zm120-104h136v87.7c0 17.8 21.5 26.7 34.1 14.1l152.2-152.2c7.5-7.5 7.5-19.8 0-27.3L290.1 90.1c-12.6-12.6-34.1-3.7-34.1 14.1V192H120c-13.3 0-24 10.7-24 24v80c0 13.3 10.7 24 24 24z"],
    "arrow-alt-from-right": [448, 512, [], "f348", "M448 88v336c0 13.3-10.7 24-24 24h-24c-13.3 0-24-10.7-24-24V88c0-13.3 10.7-24 24-24h24c13.3 0 24 10.7 24 24zM328 192H192v-87.7c0-17.8-21.5-26.7-34.1-14.1L5.7 242.3c-7.5 7.5-7.5 19.8 0 27.3l152.2 152.2c12.6 12.6 34.1 3.7 34.1-14.1V320h136c13.3 0 24-10.7 24-24v-80c0-13.3-10.7-24-24-24z"],
    "arrow-alt-from-top": [384, 512, [], "f349", "M24 32h336c13.3 0 24 10.7 24 24v24c0 13.3-10.7 24-24 24H24C10.7 104 0 93.3 0 80V56c0-13.3 10.7-24 24-24zm104 120v136H40.3c-17.8 0-26.7 21.5-14.1 34.1l152.2 152.2c7.5 7.5 19.8 7.5 27.3 0l152.2-152.2c12.6-12.6 3.7-34.1-14.1-34.1H256V152c0-13.3-10.7-24-24-24h-80c-13.3 0-24 10.7-24 24z"],
    "arrow-alt-left": [448, 512, [], "f355", "M448 208v96c0 13.3-10.7 24-24 24H224v103.8c0 21.4-25.8 32.1-41 17L7 273c-9.4-9.4-9.4-24.6 0-34L183 63.3c15.1-15.1 41-4.4 41 17V184h200c13.3 0 24 10.7 24 24z"],
    "arrow-alt-right": [448, 512, [], "f356", "M0 304v-96c0-13.3 10.7-24 24-24h200V80.2c0-21.4 25.8-32.1 41-17L441 239c9.4 9.4 9.4 24.6 0 34L265 448.7c-15.1 15.1-41 4.4-41-17V328H24c-13.3 0-24-10.7-24-24z"],
    "arrow-alt-square-down": [448, 512, [], "f350", "M448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-268 60v116h-70.9c-10.7 0-16.1 13-8.5 20.5l114.9 114.3c4.7 4.7 12.2 4.7 16.9 0l114.9-114.3c7.6-7.6 2.2-20.5-8.5-20.5H268V140c0-6.6-5.4-12-12-12h-64c-6.6 0-12 5.4-12 12z"],
    "arrow-alt-square-left": [448, 512, [], "f351", "M400 480H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm-60-268H224v-70.9c0-10.7-13-16.1-20.5-8.5L89.2 247.5c-4.7 4.7-4.7 12.2 0 16.9l114.3 114.9c7.6 7.6 20.5 2.2 20.5-8.5V300h116c6.6 0 12-5.4 12-12v-64c0-6.6-5.4-12-12-12z"],
    "arrow-alt-square-right": [448, 512, [], "f352", "M48 32h352c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48zm60 268h116v70.9c0 10.7 13 16.1 20.5 8.5l114.3-114.9c4.7-4.7 4.7-12.2 0-16.9l-114.3-115c-7.6-7.6-20.5-2.2-20.5 8.5V212H108c-6.6 0-12 5.4-12 12v64c0 6.6 5.4 12 12 12z"],
    "arrow-alt-square-up": [448, 512, [], "f353", "M0 432V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48zm268-60V256h70.9c10.7 0 16.1-13 8.5-20.5L232.5 121.2c-4.7-4.7-12.2-4.7-16.9 0l-115 114.3C93 243 98.4 256 109.1 256H180v116c0 6.6 5.4 12 12 12h64c6.6 0 12-5.4 12-12z"],
    "arrow-alt-to-bottom": [384, 512, [], "f34a", "M360 480H24c-13.3 0-24-10.7-24-24v-24c0-13.3 10.7-24 24-24h336c13.3 0 24 10.7 24 24v24c0 13.3-10.7 24-24 24zM128 56v136H40.3c-17.8 0-26.7 21.5-14.1 34.1l152.2 152.2c7.5 7.5 19.8 7.5 27.3 0l152.2-152.2c12.6-12.6 3.7-34.1-14.1-34.1H256V56c0-13.3-10.7-24-24-24h-80c-13.3 0-24 10.7-24 24z"],
    "arrow-alt-to-left": [448, 512, [], "f34b", "M0 424V88c0-13.3 10.7-24 24-24h24c13.3 0 24 10.7 24 24v336c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24zm424-232H288v-87.7c0-17.8-21.5-26.7-34.1-14.1L101.7 242.3c-7.5 7.5-7.5 19.8 0 27.3l152.2 152.2c12.6 12.6 34.1 3.7 34.1-14.1V320h136c13.3 0 24-10.7 24-24v-80c0-13.3-10.7-24-24-24z"],
    "arrow-alt-to-right": [448, 512, [], "f34c", "M448 88v336c0 13.3-10.7 24-24 24h-24c-13.3 0-24-10.7-24-24V88c0-13.3 10.7-24 24-24h24c13.3 0 24 10.7 24 24zM24 320h136v87.7c0 17.8 21.5 26.7 34.1 14.1l152.2-152.2c7.5-7.5 7.5-19.8 0-27.3L194.1 90.1c-12.6-12.6-34.1-3.7-34.1 14.1V192H24c-13.3 0-24 10.7-24 24v80c0 13.3 10.7 24 24 24z"],
    "arrow-alt-to-top": [384, 512, [], "f34d", "M24 32h336c13.3 0 24 10.7 24 24v24c0 13.3-10.7 24-24 24H24C10.7 104 0 93.3 0 80V56c0-13.3 10.7-24 24-24zm232 424V320h87.7c17.8 0 26.7-21.5 14.1-34.1L205.7 133.7c-7.5-7.5-19.8-7.5-27.3 0L26.1 285.9C13.5 298.5 22.5 320 40.3 320H128v136c0 13.3 10.7 24 24 24h80c13.3 0 24-10.7 24-24z"],
    "arrow-alt-up": [448, 512, [], "f357", "M272 480h-96c-13.3 0-24-10.7-24-24V256H48.2c-21.4 0-32.1-25.8-17-41L207 39c9.4-9.4 24.6-9.4 34 0l175.8 176c15.1 15.1 4.4 41-17 41H296v200c0 13.3-10.7 24-24 24z"],
    "arrow-circle-down": [512, 512, [], "f0ab", "M504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-143.6-28.9L288 302.6V120c0-13.3-10.7-24-24-24h-16c-13.3 0-24 10.7-24 24v182.6l-72.4-75.5c-9.3-9.7-24.8-9.9-34.3-.4l-10.9 11c-9.4 9.4-9.4 24.6 0 33.9L239 404.3c9.4 9.4 24.6 9.4 33.9 0l132.7-132.7c9.4-9.4 9.4-24.6 0-33.9l-10.9-11c-9.5-9.5-25-9.3-34.3.4z"],
    "arrow-circle-left": [512, 512, [], "f0a8", "M256 504C119 504 8 393 8 256S119 8 256 8s248 111 248 248-111 248-248 248zm28.9-143.6L209.4 288H392c13.3 0 24-10.7 24-24v-16c0-13.3-10.7-24-24-24H209.4l75.5-72.4c9.7-9.3 9.9-24.8.4-34.3l-11-10.9c-9.4-9.4-24.6-9.4-33.9 0L107.7 239c-9.4 9.4-9.4 24.6 0 33.9l132.7 132.7c9.4 9.4 24.6 9.4 33.9 0l11-10.9c9.5-9.5 9.3-25-.4-34.3z"],
    "arrow-circle-right": [512, 512, [], "f0a9", "M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm-28.9 143.6l75.5 72.4H120c-13.3 0-24 10.7-24 24v16c0 13.3 10.7 24 24 24h182.6l-75.5 72.4c-9.7 9.3-9.9 24.8-.4 34.3l11 10.9c9.4 9.4 24.6 9.4 33.9 0L404.3 273c9.4-9.4 9.4-24.6 0-33.9L271.6 106.3c-9.4-9.4-24.6-9.4-33.9 0l-11 10.9c-9.5 9.6-9.3 25.1.4 34.4z"],
    "arrow-circle-up": [512, 512, [], "f0aa", "M8 256C8 119 119 8 256 8s248 111 248 248-111 248-248 248S8 393 8 256zm143.6 28.9l72.4-75.5V392c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24V209.4l72.4 75.5c9.3 9.7 24.8 9.9 34.3.4l10.9-11c9.4-9.4 9.4-24.6 0-33.9L273 107.7c-9.4-9.4-24.6-9.4-33.9 0L106.3 240.4c-9.4 9.4-9.4 24.6 0 33.9l10.9 11c9.6 9.5 25.1 9.3 34.4-.4z"],
    "arrow-down": [448, 512, [], "f063", "M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z"],
    "arrow-from-bottom": [384, 512, [], "f342", "M360 480H24c-13.3 0-24-10.7-24-24v-24c0-13.3 10.7-24 24-24h336c13.3 0 24 10.7 24 24v24c0 13.3-10.7 24-24 24zM90.4 216.5l65.6-65.6V360c0 13.3 10.7 24 24 24h24c13.3 0 24-10.7 24-24V150.9l65.6 65.6c9.4 9.4 24.6 9.4 33.9 0l17-17c9.4-9.4 9.4-24.6 0-33.9L209 30.1c-9.4-9.4-24.6-9.4-33.9 0L39.5 165.6c-9.4 9.4-9.4 24.6 0 33.9l17 17c9.4 9.4 24.6 9.4 33.9 0z"],
    "arrow-from-left": [448, 512, [], "f343", "M0 424V88c0-13.3 10.7-24 24-24h24c13.3 0 24 10.7 24 24v336c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24zm254.5-269.6l65.6 65.6H120c-13.3 0-24 10.7-24 24v24c0 13.3 10.7 24 24 24h200.1l-65.6 65.6c-9.4 9.4-9.4 24.6 0 33.9l17 17c9.4 9.4 24.6 9.4 33.9 0L441 273c9.4-9.4 9.4-24.6 0-33.9L305.5 103.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6-.1 33.9z"],
    "arrow-from-right": [448, 512, [], "f344", "M448 88v336c0 13.3-10.7 24-24 24h-24c-13.3 0-24-10.7-24-24V88c0-13.3 10.7-24 24-24h24c13.3 0 24 10.7 24 24zM193.5 357.6L127.9 292H328c13.3 0 24-10.7 24-24v-24c0-13.3-10.7-24-24-24H127.9l65.6-65.6c9.4-9.4 9.4-24.6 0-33.9l-17-17c-9.4-9.4-24.6-9.4-33.9 0L7 239c-9.4 9.4-9.4 24.6 0 33.9l135.5 135.5c9.4 9.4 24.6 9.4 33.9 0l17-17c9.4-9.3 9.4-24.5.1-33.8z"],
    "arrow-from-top": [384, 512, [], "f345", "M24 32h336c13.3 0 24 10.7 24 24v24c0 13.3-10.7 24-24 24H24C10.7 104 0 93.3 0 80V56c0-13.3 10.7-24 24-24zm269.6 263.5L228 361.1V152c0-13.3-10.7-24-24-24h-24c-13.3 0-24 10.7-24 24v209.1l-65.6-65.6c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9L175 481.9c9.4 9.4 24.6 9.4 33.9 0l135.5-135.5c9.4-9.4 9.4-24.6 0-33.9l-17-17c-9.3-9.4-24.5-9.4-33.8 0z"],
    "arrow-left": [448, 512, [], "f060", "M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"],
    "arrow-right": [448, 512, [], "f061", "M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"],
    "arrow-square-down": [448, 512, [], "f339", "M448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zM328.4 227.1L256 302.6V120c0-13.3-10.7-24-24-24h-16c-13.3 0-24 10.7-24 24v182.6l-72.4-75.5c-9.3-9.7-24.8-9.9-34.3-.4l-10.9 11c-9.4 9.4-9.4 24.6 0 33.9L207 404.3c9.4 9.4 24.6 9.4 33.9 0l132.7-132.7c9.4-9.4 9.4-24.6 0-33.9l-10.9-11c-9.5-9.5-25-9.3-34.3.4z"],
    "arrow-square-left": [448, 512, [], "f33a", "M400 480H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zM252.9 360.4L177.4 288H360c13.3 0 24-10.7 24-24v-16c0-13.3-10.7-24-24-24H177.4l75.5-72.4c9.7-9.3 9.9-24.8.4-34.3l-11-10.9c-9.4-9.4-24.6-9.4-33.9 0L75.7 239c-9.4 9.4-9.4 24.6 0 33.9l132.7 132.7c9.4 9.4 24.6 9.4 33.9 0l11-10.9c9.5-9.5 9.3-25-.4-34.3z"],
    "arrow-square-right": [448, 512, [], "f33b", "M48 32h352c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48zm147.1 119.6l75.5 72.4H88c-13.3 0-24 10.7-24 24v16c0 13.3 10.7 24 24 24h182.6l-75.5 72.4c-9.7 9.3-9.9 24.8-.4 34.3l11 10.9c9.4 9.4 24.6 9.4 33.9 0L372.3 273c9.4-9.4 9.4-24.6 0-33.9L239.6 106.3c-9.4-9.4-24.6-9.4-33.9 0l-11 10.9c-9.5 9.6-9.3 25.1.4 34.4z"],
    "arrow-square-up": [448, 512, [], "f33c", "M0 432V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48zm119.6-147.1l72.4-75.5V392c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24V209.4l72.4 75.5c9.3 9.7 24.8 9.9 34.3.4l10.9-11c9.4-9.4 9.4-24.6 0-33.9L241 107.7c-9.4-9.4-24.6-9.4-33.9 0L74.3 240.4c-9.4 9.4-9.4 24.6 0 33.9l10.9 11c9.6 9.5 25.1 9.3 34.4-.4z"],
    "arrow-to-bottom": [384, 512, [], "f33d", "M360 480H24c-13.3 0-24-10.7-24-24v-24c0-13.3 10.7-24 24-24h336c13.3 0 24 10.7 24 24v24c0 13.3-10.7 24-24 24zm-66.4-280.5L228 265.1V56c0-13.3-10.7-24-24-24h-24c-13.3 0-24 10.7-24 24v209.1l-65.6-65.6c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9L175 385.9c9.4 9.4 24.6 9.4 33.9 0l135.5-135.5c9.4-9.4 9.4-24.6 0-33.9l-17-17c-9.3-9.4-24.5-9.4-33.8 0z"],
    "arrow-to-left": [448, 512, [], "f33e", "M0 424V88c0-13.3 10.7-24 24-24h24c13.3 0 24 10.7 24 24v336c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24zm280.5-66.4L214.9 292H424c13.3 0 24-10.7 24-24v-24c0-13.3-10.7-24-24-24H214.9l65.6-65.6c9.4-9.4 9.4-24.6 0-33.9l-17-17c-9.4-9.4-24.6-9.4-33.9 0L94.1 239c-9.4 9.4-9.4 24.6 0 33.9l135.5 135.5c9.4 9.4 24.6 9.4 33.9 0l17-17c9.4-9.3 9.4-24.5 0-33.8z"],
    "arrow-to-right": [448, 512, [], "f340", "M448 88v336c0 13.3-10.7 24-24 24h-24c-13.3 0-24-10.7-24-24V88c0-13.3 10.7-24 24-24h24c13.3 0 24 10.7 24 24zm-280.5 66.4l65.6 65.6H24c-13.3 0-24 10.7-24 24v24c0 13.3 10.7 24 24 24h209.1l-65.6 65.6c-9.4 9.4-9.4 24.6 0 33.9l17 17c9.4 9.4 24.6 9.4 33.9 0L353.9 273c9.4-9.4 9.4-24.6 0-33.9L218.4 103.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9z"],
    "arrow-to-top": [384, 512, [], "f341", "M24 32h336c13.3 0 24 10.7 24 24v24c0 13.3-10.7 24-24 24H24C10.7 104 0 93.3 0 80V56c0-13.3 10.7-24 24-24zm66.4 280.5l65.6-65.6V456c0 13.3 10.7 24 24 24h24c13.3 0 24-10.7 24-24V246.9l65.6 65.6c9.4 9.4 24.6 9.4 33.9 0l17-17c9.4-9.4 9.4-24.6 0-33.9L209 126.1c-9.4-9.4-24.6-9.4-33.9 0L39.5 261.6c-9.4 9.4-9.4 24.6 0 33.9l17 17c9.4 9.4 24.6 9.4 33.9 0z"],
    "arrow-up": [448, 512, [], "f062", "M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"],
    "arrows": [512, 512, [], "f047", "M352.634 428.621l-74.007 74.007c-12.497 12.497-32.758 12.497-45.255 0l-74.007-74.007c-9.373-9.373-9.373-24.569 0-33.941l10.84-10.84c9.556-9.556 25.113-9.341 34.402.474L228 410.365V284H101.635l26.051 23.392c9.815 9.289 10.03 24.846.474 34.402l-10.84 10.84c-9.373 9.373-24.569 9.373-33.941 0L9.373 278.627c-12.497-12.497-12.497-32.758 0-45.255l74.007-74.007c9.373-9.373 24.569-9.373 33.941 0l10.84 10.84c9.556 9.556 9.341 25.114-.474 34.402L101.635 228H228V101.635l-23.392 26.051c-9.289 9.815-24.846 10.03-34.402.474l-10.84-10.84c-9.373-9.373-9.373-24.569 0-33.941l74.007-74.007c12.497-12.497 32.758-12.497 45.255 0l74.007 74.007c9.373 9.373 9.373 24.569 0 33.941l-10.84 10.84c-9.556 9.556-25.113 9.341-34.402-.474L284 101.635V228h126.365l-26.051-23.392c-9.815-9.289-10.03-24.846-.474-34.402l10.84-10.84c9.373-9.373 24.569-9.373 33.941 0l74.007 74.007c12.497 12.497 12.497 32.758 0 45.255l-74.007 74.007c-9.373 9.373-24.569 9.373-33.941 0l-10.84-10.84c-9.556-9.556-9.341-25.113.474-34.402L410.365 284H284v126.365l23.392-26.051c9.289-9.815 24.846-10.03 34.402-.474l10.84 10.84c9.373 9.372 9.373 24.568 0 33.941z"],
    "arrows-alt": [512, 512, [], "f0b2", "M352.201 425.775l-79.196 79.196c-9.373 9.373-24.568 9.373-33.941 0l-79.196-79.196c-15.119-15.119-4.411-40.971 16.971-40.97h51.162L228 284H127.196v51.162c0 21.382-25.851 32.09-40.971 16.971L7.029 272.937c-9.373-9.373-9.373-24.569 0-33.941L86.225 159.8c15.119-15.119 40.971-4.411 40.971 16.971V228H228V127.196h-51.23c-21.382 0-32.09-25.851-16.971-40.971l79.196-79.196c9.373-9.373 24.568-9.373 33.941 0l79.196 79.196c15.119 15.119 4.411 40.971-16.971 40.971h-51.162V228h100.804v-51.162c0-21.382 25.851-32.09 40.97-16.971l79.196 79.196c9.373 9.373 9.373 24.569 0 33.941L425.773 352.2c-15.119 15.119-40.971 4.411-40.97-16.971V284H284v100.804h51.23c21.382 0 32.09 25.851 16.971 40.971z"],
    "arrows-alt-h": [512, 512, [], "f337", "M377.941 169.941V216H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.568 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296h243.882v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.568 0-33.941l-86.059-86.059c-15.119-15.12-40.971-4.412-40.971 16.97z"],
    "arrows-alt-v": [256, 512, [], "f338", "M214.059 377.941H168V134.059h46.059c21.382 0 32.09-25.851 16.971-40.971L144.971 7.029c-9.373-9.373-24.568-9.373-33.941 0L24.971 93.088c-15.119 15.119-4.411 40.971 16.971 40.971H88v243.882H41.941c-21.382 0-32.09 25.851-16.971 40.971l86.059 86.059c9.373 9.373 24.568 9.373 33.941 0l86.059-86.059c15.12-15.119 4.412-40.971-16.97-40.971z"],
    "arrows-h": [512, 512, [], "f07e", "M105.815 288h300.371l-46.208 43.728c-9.815 9.289-10.03 24.846-.474 34.402l10.84 10.84c9.373 9.373 24.569 9.373 33.941 0l98.343-98.343c12.497-12.497 12.497-32.758 0-45.255l-98.343-98.343c-9.373-9.373-24.569-9.373-33.941 0l-10.84 10.84c-9.556 9.556-9.341 25.113.474 34.402L406.186 224H105.815l46.208-43.728c9.815-9.289 10.03-24.846.474-34.402l-10.84-10.84c-9.373-9.373-24.569-9.373-33.941 0L9.373 233.372c-12.497 12.497-12.497 32.758 0 45.255l98.343 98.343c9.373 9.373 24.569 9.373 33.941 0l10.84-10.84c9.556-9.556 9.341-25.113-.474-34.402L105.815 288z"],
    "arrows-v": [256, 512, [], "f07d", "M160 406.186V105.815l43.728 46.208c9.289 9.815 24.846 10.03 34.402.474l10.84-10.84c9.373-9.373 9.373-24.569 0-33.941L150.627 9.373c-12.497-12.497-32.758-12.497-45.255 0L7.029 107.715c-9.373 9.373-9.373 24.569 0 33.941l10.84 10.84c9.556 9.556 25.113 9.341 34.402-.474L96 105.815v300.371l-43.728-46.208c-9.289-9.815-24.846-10.03-34.402-.474l-10.84 10.84c-9.373 9.373-9.373 24.569 0 33.941l98.343 98.343c12.497 12.497 32.758 12.497 45.255 0l98.343-98.343c9.373-9.373 9.373-24.569 0-33.941l-10.84-10.84c-9.556-9.556-25.113-9.341-34.402.474L160 406.186z"],
    "assistive-listening-systems": [512, 512, [], "f2a2", "M216 260c0 15.464-12.536 28-28 28s-28-12.536-28-28c0-44.112 35.888-80 80-80s80 35.888 80 80c0 15.464-12.536 28-28 28s-28-12.536-28-28c0-13.234-10.767-24-24-24s-24 10.766-24 24zm24-176c-97.047 0-176 78.953-176 176 0 15.464 12.536 28 28 28s28-12.536 28-28c0-66.168 53.832-120 120-120s120 53.832 120 120c0 75.164-71.009 70.311-71.997 143.622L288 404c0 28.673-23.327 52-52 52-15.464 0-28 12.536-28 28s12.536 28 28 28c59.475 0 107.876-48.328 108-107.774.595-34.428 72-48.24 72-144.226 0-97.047-78.953-176-176-176zm-80 236c-17.673 0-32 14.327-32 32s14.327 32 32 32 32-14.327 32-32-14.327-32-32-32zM32 448c-17.673 0-32 14.327-32 32s14.327 32 32 32 32-14.327 32-32-14.327-32-32-32zm480-187.993c0-1.518-.012-3.025-.045-4.531C510.076 140.525 436.157 38.47 327.994 1.511c-14.633-4.998-30.549 2.809-35.55 17.442-5 14.633 2.81 30.549 17.442 35.55 85.906 29.354 144.61 110.513 146.077 201.953l.003.188c.026 1.118.033 2.236.033 3.363 0 15.464 12.536 28 28 28s28.001-12.536 28.001-28zM152.971 439.029l-80-80L39.03 392.97l80 80 33.941-33.941z"],
    "asterisk": [512, 512, [], "f069", "M478.21 334.093L336 256l142.21-78.093c11.795-6.477 15.961-21.384 9.232-33.037l-19.48-33.741c-6.728-11.653-21.72-15.499-33.227-8.523L296 186.718l3.475-162.204C299.763 11.061 288.937 0 275.48 0h-38.96c-13.456 0-24.283 11.061-23.994 24.514L216 186.718 77.265 102.607c-11.506-6.976-26.499-3.13-33.227 8.523l-19.48 33.741c-6.728 11.653-2.562 26.56 9.233 33.037L176 256 33.79 334.093c-11.795 6.477-15.961 21.384-9.232 33.037l19.48 33.741c6.728 11.653 21.721 15.499 33.227 8.523L216 325.282l-3.475 162.204C212.237 500.939 223.064 512 236.52 512h38.961c13.456 0 24.283-11.061 23.995-24.514L296 325.282l138.735 84.111c11.506 6.976 26.499 3.13 33.227-8.523l19.48-33.741c6.728-11.653 2.563-26.559-9.232-33.036z"],
    "at": [512, 512, [], "f1fa", "M256 8C118.941 8 8 118.919 8 256c0 137.059 110.919 248 248 248 48.154 0 95.342-14.14 135.408-40.223 12.005-7.815 14.625-24.288 5.552-35.372l-10.177-12.433c-7.671-9.371-21.179-11.667-31.373-5.129C325.92 429.757 291.314 440 256 440c-101.458 0-184-82.542-184-184S154.542 72 256 72c100.139 0 184 57.619 184 160 0 38.786-21.093 79.742-58.17 83.693-17.349-.454-16.91-12.857-13.476-30.024l23.433-121.11C394.653 149.75 383.308 136 368.225 136h-44.981a13.518 13.518 0 0 0-13.432 11.993l-.01.092c-14.697-17.901-40.448-21.775-59.971-21.775-74.58 0-137.831 62.234-137.831 151.46 0 65.303 36.785 105.87 96 105.87 26.984 0 57.369-15.637 74.991-38.333 9.522 34.104 40.613 34.103 70.71 34.103C462.609 379.41 504 307.798 504 232 504 95.653 394.023 8 256 8zm-21.68 304.43c-22.249 0-36.07-15.623-36.07-40.771 0-44.993 30.779-72.729 58.63-72.729 22.292 0 35.601 15.241 35.601 40.77 0 45.061-33.875 72.73-58.161 72.73z"],
    "audio-description": [512, 512, [], "f29e", "M162.925 238.709l8.822 30.655h-25.606l9.041-30.652c1.277-4.421 2.651-9.994 3.872-15.245 1.22 5.251 2.594 10.823 3.871 15.242zm166.474-32.099h-14.523v98.781h14.523c29.776 0 46.175-17.678 46.175-49.776 0-32.239-17.49-49.005-46.175-49.005zM512 112v288c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h416c26.51 0 48 21.49 48 48zM245.459 336.139l-57.097-168A12.001 12.001 0 0 0 177 160h-35.894a12.001 12.001 0 0 0-11.362 8.139l-57.097 168C70.003 343.922 75.789 352 84.009 352h29.133a12 12 0 0 0 11.535-8.693l8.574-29.906h51.367l8.793 29.977A12 12 0 0 0 204.926 352h29.172c8.22 0 14.006-8.078 11.361-15.861zm184.701-80.525c0-58.977-37.919-95.614-98.96-95.614h-57.366c-6.627 0-12 5.373-12 12v168c0 6.627 5.373 12 12 12H331.2c61.041 0 98.96-36.933 98.96-96.386z"],
    "backward": [512, 512, [], "f04a", "M11.5 280.6l192 160c20.6 17.2 52.5 2.8 52.5-24.6V96c0-27.4-31.9-41.8-52.5-24.6l-192 160c-15.3 12.8-15.3 36.4 0 49.2zm256 0l192 160c20.6 17.2 52.5 2.8 52.5-24.6V96c0-27.4-31.9-41.8-52.5-24.6l-192 160c-15.3 12.8-15.3 36.4 0 49.2z"],
    "badge": [512, 512, [], "f335", "M512 256c0-37.7-23.7-69.9-57.1-82.4 14.7-32.4 8.8-71.9-17.9-98.6-26.7-26.7-66.2-32.6-98.6-17.9C325.9 23.7 293.7 0 256 0s-69.9 23.7-82.4 57.1c-32.4-14.7-72-8.8-98.6 17.9-26.7 26.7-32.6 66.2-17.9 98.6C23.7 186.1 0 218.3 0 256s23.7 69.9 57.1 82.4c-14.7 32.4-8.8 72 17.9 98.6 26.6 26.6 66.1 32.7 98.6 17.9 12.5 33.3 44.7 57.1 82.4 57.1s69.9-23.7 82.4-57.1c32.6 14.8 72 8.7 98.6-17.9 26.7-26.7 32.6-66.2 17.9-98.6 33.4-12.5 57.1-44.7 57.1-82.4z"],
    "badge-check": [512, 512, [], "f336", "M454.928 338.405c14.719 32.428 8.758 71.947-17.909 98.614-26.574 26.574-66.03 32.699-98.614 17.909C325.885 488.27 293.716 512 256 512s-69.885-23.73-82.405-57.072c-32.554 14.776-72.017 8.688-98.614-17.909-26.667-26.667-32.627-66.186-17.909-98.614C23.73 325.885 0 293.716 0 256s23.73-69.885 57.072-82.405c-14.719-32.428-8.758-71.947 17.909-98.614 26.668-26.667 66.187-32.627 98.614-17.909C186.115 23.73 218.284 0 256 0s69.885 23.73 82.405 57.072c32.428-14.719 71.946-8.759 98.614 17.909 26.667 26.667 32.627 66.186 17.909 98.614C488.27 186.115 512 218.284 512 256s-23.73 69.885-57.072 82.405zm-235.614 43.536l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.248-16.379-6.249-22.628 0L208 302.745l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.25 16.38 6.25 22.628.001z"],
    "balance-scale": [640, 512, [], "f24e", "M352 448h168c13.255 0 24 10.745 24 24v16c0 13.255-10.745 24-24 24H120c-13.255 0-24-10.745-24-24v-16c0-13.255 10.745-24 24-24h168V153.324C264.469 143.04 246.836 121.778 241.603 96H120c-13.255 0-24-10.745-24-24V56c0-13.255 10.745-24 24-24h135.999C270.594 12.57 293.828 0 320 0s49.406 12.57 64.001 32H520c13.255 0 24 10.745 24 24v16c0 13.255-10.745 24-24 24H398.397c-5.233 25.778-22.866 47.04-46.397 57.324V448zm287.981-112c.001-16.182 1.342-8.726-85.048-181.506-17.647-35.294-68.186-35.358-85.865 0C381.94 328.75 384.019 320.331 384.019 336H384c0 44.183 57.308 80 128 80s128-35.817 128-80h-.019zM512 176l72 144H440l72-144zM255.981 336c.001-16.182 1.342-8.726-85.048-181.506-17.647-35.294-68.186-35.358-85.865 0C-2.06 328.75.019 320.331.019 336H0c0 44.183 57.308 80 128 80s128-35.817 128-80h-.019zM128 176l72 144H56l72-144z"],
    "ban": [512, 512, [], "f05e", "M256 8C119.034 8 8 119.033 8 256s111.034 248 248 248 248-111.034 248-248S392.967 8 256 8zm130.108 117.892c65.448 65.448 70 165.481 20.677 235.637L150.47 105.216c70.204-49.356 170.226-44.735 235.638 20.676zM125.892 386.108c-65.448-65.448-70-165.481-20.677-235.637L361.53 406.784c-70.203 49.356-170.226 44.736-235.638-20.676z"],
    "barcode": [512, 512, [], "f02a", "M0 448V64h18v384H0zm26.857-.273V64H36v383.727h-9.143zm27.143 0V64h8.857v383.727H54zm44.857 0V64h8.857v383.727h-8.857zm36 0V64h17.714v383.727h-17.714zm44.857 0V64h8.857v383.727h-8.857zm18 0V64h8.857v383.727h-8.857zm18 0V64h8.857v383.727h-8.857zm35.715 0V64h18v383.727h-18zm44.857 0V64h18v383.727h-18zm35.999 0V64h18.001v383.727h-18.001zm36.001 0V64h18.001v383.727h-18.001zm26.857 0V64h18v383.727h-18zm45.143 0V64h26.857v383.727h-26.857zm35.714 0V64h9.143v383.727H476zm18 .273V64h18v384h-18z"],
    "bars": [448, 512, [], "f0c9", "M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"],
    "bath": [512, 512, [], "f2cd", "M488 256H80V112c0-17.645 14.355-32 32-32 11.351 0 21.332 5.945 27.015 14.88-16.492 25.207-14.687 59.576 6.838 83.035-4.176 4.713-4.021 11.916.491 16.428l11.314 11.314c4.686 4.686 12.284 4.686 16.971 0l95.03-95.029c4.686-4.686 4.686-12.284 0-16.971l-11.314-11.314c-4.512-4.512-11.715-4.666-16.428-.491-17.949-16.469-42.294-21.429-64.178-15.365C163.281 45.667 139.212 32 112 32c-44.112 0-80 35.888-80 80v144h-8c-13.255 0-24 10.745-24 24v16c0 13.255 10.745 24 24 24h8v32c0 28.43 12.362 53.969 32 71.547V456c0 13.255 10.745 24 24 24h16c13.255 0 24-10.745 24-24v-8h256v8c0 13.255 10.745 24 24 24h16c13.255 0 24-10.745 24-24v-32.453c19.638-17.578 32-43.117 32-71.547v-32h8c13.255 0 24-10.745 24-24v-16c0-13.255-10.745-24-24-24z"],
    "battery-bolt": [640, 512, [], "f376", "M64 352h178.778l-14.173 64H48c-26.51 0-48-21.49-48-48V144c0-26.51 21.49-48 48-48h115.944l-7.663 64H64v192zm364.778-160h-92.321l27.694-133.589C367.4 45.087 358.205 32 345.6 32H236.8c-9.623 0-17.76 7.792-19.031 18.225L192.171 264c-1.535 12.59 7.432 23.775 19.031 23.775h94.961l-36.847 166.382C266.44 467.443 275.728 480 287.993 480c6.68 0 13.101-3.827 16.623-10.481l140.778-245.997C452.79 209.55 443.564 192 428.778 192zM616 160h-8v-16c0-26.51-21.49-48-48-48H405.38l-9.951 48h33.349c16.112 0 31.233 5.762 43.115 16H544v64h32v64h-32v64H427.174l-36.626 64H560c26.51 0 48-21.49 48-48v-16h8c13.255 0 24-10.745 24-24V184c0-13.255-10.745-24-24-24z"],
    "battery-empty": [640, 512, [], "f244", "M544 160v64h32v64h-32v64H64V160h480m16-64H48c-26.51 0-48 21.49-48 48v224c0 26.51 21.49 48 48 48h512c26.51 0 48-21.49 48-48v-16h8c13.255 0 24-10.745 24-24V184c0-13.255-10.745-24-24-24h-8v-16c0-26.51-21.49-48-48-48z"],
    "battery-full": [640, 512, [], "f240", "M544 160v64h32v64h-32v64H64V160h480m16-64H48c-26.51 0-48 21.49-48 48v224c0 26.51 21.49 48 48 48h512c26.51 0 48-21.49 48-48v-16h8c13.255 0 24-10.745 24-24V184c0-13.255-10.745-24-24-24h-8v-16c0-26.51-21.49-48-48-48zm-48 96H96v128h416V192z"],
    "battery-half": [640, 512, [], "f242", "M544 160v64h32v64h-32v64H64V160h480m16-64H48c-26.51 0-48 21.49-48 48v224c0 26.51 21.49 48 48 48h512c26.51 0 48-21.49 48-48v-16h8c13.255 0 24-10.745 24-24V184c0-13.255-10.745-24-24-24h-8v-16c0-26.51-21.49-48-48-48zm-240 96H96v128h224V192z"],
    "battery-quarter": [640, 512, [], "f243", "M544 160v64h32v64h-32v64H64V160h480m16-64H48c-26.51 0-48 21.49-48 48v224c0 26.51 21.49 48 48 48h512c26.51 0 48-21.49 48-48v-16h8c13.255 0 24-10.745 24-24V184c0-13.255-10.745-24-24-24h-8v-16c0-26.51-21.49-48-48-48zm-336 96H96v128h128V192z"],
    "battery-slash": [640, 512, [], "f377", "M291.843 352l47.483 64H48c-26.51 0-48-21.49-48-48V144c0-26.51 21.49-48 48-48h53.907l47.484 64H64v192h227.843zM640 184v144c0 13.255-10.745 24-24 24h-8v16c0 26.51-21.49 48-48 48h-81.676l35.941 48.442c7.852 10.583 5.638 25.528-4.945 33.38l-12.775 9.479a23.759 23.759 0 0 1-14.199 4.7c-7.297 0-14.5-3.335-19.181-9.645L125.735 47.558c-7.852-10.583-5.638-25.528 4.945-33.38L143.455 4.7A23.759 23.759 0 0 1 157.654 0c7.297 0 14.5 3.335 19.181 9.645L240.905 96H560c26.51 0 48 21.49 48 48v16h8c13.255 0 24 10.745 24 24zm-64 40h-32v-64H288.389L430.84 352H544v-64h32v-64z"],
    "battery-three-quarters": [640, 512, [], "f241", "M544 160v64h32v64h-32v64H64V160h480m16-64H48c-26.51 0-48 21.49-48 48v224c0 26.51 21.49 48 48 48h512c26.51 0 48-21.49 48-48v-16h8c13.255 0 24-10.745 24-24V184c0-13.255-10.745-24-24-24h-8v-16c0-26.51-21.49-48-48-48zm-144 96H96v128h320V192z"],
    "bed": [576, 512, [], "f236", "M552 288c13.255 0 24 10.745 24 24v136h-96v-64H96v64H0V88c0-13.255 10.745-24 24-24h48c13.255 0 24 10.745 24 24v200h456zM192 96c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80zm384 128c0-53.019-42.981-96-96-96H312c-13.255 0-24 10.745-24 24v104h288v-32z"],
    "beer": [448, 512, [], "f0fc", "M368 96h-48V56c0-13.255-10.745-24-24-24H24C10.745 32 0 42.745 0 56v400c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24v-42.11l80.606-35.977C429.396 365.063 448 336.388 448 304.86V176c0-44.112-35.888-80-80-80zm16 208.86a16.018 16.018 0 0 1-9.479 14.611L320 343.805V160h48c8.822 0 16 7.178 16 16v128.86zM208 384c-8.836 0-16-7.164-16-16V144c0-8.836 7.164-16 16-16s16 7.164 16 16v224c0 8.836-7.164 16-16 16zm-96 0c-8.836 0-16-7.164-16-16V144c0-8.836 7.164-16 16-16s16 7.164 16 16v224c0 8.836-7.164 16-16 16z"],
    "bell": [448, 512, [], "f0f3", "M433.884 366.059C411.634 343.809 384 316.118 384 208c0-79.394-57.831-145.269-133.663-157.83A31.845 31.845 0 0 0 256 32c0-17.673-14.327-32-32-32s-32 14.327-32 32c0 6.75 2.095 13.008 5.663 18.17C121.831 62.731 64 128.606 64 208c0 108.118-27.643 135.809-49.893 158.059C-16.042 396.208 5.325 448 48.048 448H160c0 35.346 28.654 64 64 64s64-28.654 64-64h111.943c42.638 0 64.151-51.731 33.941-81.941zM224 472a8 8 0 0 1 0 16c-22.056 0-40-17.944-40-40h16c0 13.234 10.766 24 24 24z"],
    "bell-slash": [576, 512, [], "f1f6", "M78.107 366.059C47.958 396.208 69.325 448 112.048 448H224c0 35.346 28.654 64 64 64 35.346 0 64-28.654 64-64h32.685L127.848 221.379c-2.198 97.078-28.439 123.378-49.741 144.68zM264 448c0 13.234 10.766 24 24 24a8 8 0 0 1 0 16c-22.056 0-40-17.944-40-40h16zm305.896 43.733l-10.762 12.086c-8.915 10.012-24.333 10.967-34.437 2.133L8.256 54.393C-1.848 45.558-2.811 30.28 6.104 20.267L16.865 8.181C25.781-1.831 41.199-2.786 51.303 6.049l113.81 99.512c24.017-28.778 57.946-48.996 96.55-55.39A31.85 31.85 0 0 1 256 32c0-17.673 14.327-32 32-32s32 14.327 32 32c0 6.75-2.095 13.008-5.663 18.17C390.169 62.731 448 128.606 448 208c0 108.118 27.634 135.809 49.884 158.059 12.149 12.149 15.923 27.776 13.33 42.121l56.53 49.427c10.104 8.835 11.067 24.113 2.152 34.126z"],
    "bicycle": [640, 512, [], "f206", "M512.509 192.001c-16.373-.064-32.03 2.955-46.436 8.495l-77.68-125.153A24 24 0 0 0 368.001 64h-64c-8.837 0-16 7.163-16 16v16c0 8.837 7.163 16 16 16h50.649l14.896 24H256.002v-16c0-8.837-7.163-16-16-16h-87.459c-13.441 0-24.777 10.999-24.536 24.437.232 13.044 10.876 23.563 23.995 23.563h48.726l-29.417 47.52c-13.433-4.83-27.904-7.483-42.992-7.52C58.094 191.83.412 249.012.002 319.236-.413 390.279 57.055 448 128.002 448c59.642 0 109.758-40.793 123.967-96h52.033a24 24 0 0 0 20.406-11.367L410.37 201.77l14.938 24.067c-25.455 23.448-41.385 57.081-41.307 94.437.145 68.833 57.899 127.051 126.729 127.719 70.606.685 128.181-55.803 129.255-125.996 1.086-70.941-56.526-129.72-127.476-129.996zM186.75 265.772c9.727 10.529 16.673 23.661 19.642 38.228h-43.306l23.664-38.228zM128.002 400c-44.112 0-80-35.888-80-80s35.888-80 80-80c5.869 0 11.586.653 17.099 1.859l-45.505 73.509C89.715 331.327 101.213 352 120.002 352h81.3c-12.37 28.225-40.562 48-73.3 48zm162.63-96h-35.624c-3.96-31.756-19.556-59.894-42.383-80.026L237.371 184h127.547l-74.286 120zm217.057 95.886c-41.036-2.165-74.049-35.692-75.627-76.755-.812-21.121 6.633-40.518 19.335-55.263l44.433 71.586c4.66 7.508 14.524 9.816 22.032 5.156l13.594-8.437c7.508-4.66 9.817-14.524 5.156-22.032l-44.468-71.643a79.901 79.901 0 0 1 19.858-2.497c44.112 0 80 35.888 80 80-.001 45.54-38.252 82.316-84.313 79.885z"],
    "binoculars": [512, 512, [], "f1e5", "M192 104H96V56c0-13.255 10.745-24 24-24h48c13.255 0 24 10.745 24 24v48zm224-48c0-13.255-10.745-24-24-24h-48c-13.255 0-24 10.745-24 24v48h96V56zM0 456c0 13.255 10.745 24 24 24h120c13.255 0 24-10.745 24-24v-16H0v16zm88-328c-13.255 0-24 10.745-24 24C64 256 0 272 0 416h168V312c0-13.255 10.745-24 24-24V128H88zm256 328c0 13.255 10.745 24 24 24h120c13.255 0 24-10.745 24-24v-16H344v16zM216 128v160h80V128h-80zm128 288h168c0-144-64-160-64-264 0-13.255-10.745-24-24-24H320v160c13.255 0 24 10.745 24 24v104z"],
    "birthday-cake": [448, 512, [], "f1fd", "M448 384c-28.02 0-31.26-32-74.5-32-43.43 0-46.825 32-74.75 32-27.695 0-31.454-32-74.75-32-42.842 0-47.218 32-74.5 32-28.148 0-31.202-32-74.75-32-43.547 0-46.653 32-74.75 32v-80c0-26.5 21.5-48 48-48h16V112h64v144h64V112h64v144h64V112h64v144h16c26.5 0 48 21.5 48 48v80zm0 128H0v-96c43.356 0 46.767-32 74.75-32 27.951 0 31.253 32 74.75 32 42.843 0 47.217-32 74.5-32 28.148 0 31.201 32 74.75 32 43.357 0 46.767-32 74.75-32 27.488 0 31.252 32 74.5 32v96zM96 96c-17.75 0-32-14.25-32-32 0-31 32-23 32-64 12 0 32 29.5 32 56s-14.25 40-32 40zm128 0c-17.75 0-32-14.25-32-32 0-31 32-23 32-64 12 0 32 29.5 32 56s-14.25 40-32 40zm128 0c-17.75 0-32-14.25-32-32 0-31 32-23 32-64 12 0 32 29.5 32 56s-14.25 40-32 40z"],
    "blind": [384, 512, [], "f29d", "M380.15 510.837a8 8 0 0 1-10.989-2.687l-125.33-206.427a31.923 31.923 0 0 0 12.958-9.485l126.048 207.608a8 8 0 0 1-2.687 10.991zM142.803 314.338l-32.54 89.485 36.12 88.285c6.693 16.36 25.377 24.192 41.733 17.501 16.357-6.692 24.193-25.376 17.501-41.734l-62.814-153.537zM96 88c24.301 0 44-19.699 44-44S120.301 0 96 0 52 19.699 52 44s19.699 44 44 44zm154.837 169.128l-120-152c-4.733-5.995-11.75-9.108-18.837-9.112V96H80v.026c-7.146.003-14.217 3.161-18.944 9.24L0 183.766v95.694c0 13.455 11.011 24.791 24.464 24.536C37.505 303.748 48 293.1 48 280v-79.766l16-20.571v140.698L9.927 469.055c-6.04 16.609 2.528 34.969 19.138 41.009 16.602 6.039 34.968-2.524 41.009-19.138L136 309.638V202.441l-31.406-39.816a4 4 0 1 1 6.269-4.971l102.3 129.217c9.145 11.584 24.368 11.339 33.708 3.965 10.41-8.216 12.159-23.334 3.966-33.708z"],
    "bold": [384, 512, [], "f032", "M304.793 243.891c33.639-18.537 53.657-54.16 53.657-95.693 0-48.236-26.25-87.626-68.626-104.179C265.138 34.01 240.849 32 209.661 32H24c-8.837 0-16 7.163-16 16v33.049c0 8.837 7.163 16 16 16h33.113v318.53H24c-8.837 0-16 7.163-16 16V464c0 8.837 7.163 16 16 16h195.69c24.203 0 44.834-1.289 66.866-7.584C337.52 457.193 376 410.647 376 350.014c0-52.168-26.573-91.684-71.207-106.123zM142.217 100.809h67.444c16.294 0 27.536 2.019 37.525 6.717 15.828 8.479 24.906 26.502 24.906 49.446 0 35.029-20.32 56.79-53.029 56.79h-76.846V100.809zm112.642 305.475c-10.14 4.056-22.677 4.907-31.409 4.907h-81.233V281.943h84.367c39.645 0 63.057 25.38 63.057 63.057.001 28.425-13.66 52.483-34.782 61.284z"],
    "bolt": [320, 512, [], "f0e7", "M295.973 160H180.572L215.19 30.184C219.25 14.956 207.756 0 192 0H56C43.971 0 33.8 8.905 32.211 20.828l-31.996 240C-1.704 275.217 9.504 288 24.004 288h118.701L96.646 482.466C93.05 497.649 104.659 512 119.992 512c8.35 0 16.376-4.374 20.778-11.978l175.973-303.997c9.244-15.967-2.288-36.025-20.77-36.025z"],
    "bomb": [512, 512, [], "f1e2", "M440.5 88.5l-52 52L415 167c9.4 9.4 9.4 24.6 0 33.9l-17.4 17.4c11.8 26.1 18.4 55.1 18.4 85.6 0 114.9-93.1 208-208 208S0 418.9 0 304 93.1 96 208 96c30.5 0 59.5 6.6 85.6 18.4L311 97c9.4-9.4 24.6-9.4 33.9 0l26.5 26.5 52-52 17.1 17zM500 60h-24c-6.6 0-12 5.4-12 12s5.4 12 12 12h24c6.6 0 12-5.4 12-12s-5.4-12-12-12zM440 0c-6.6 0-12 5.4-12 12v24c0 6.6 5.4 12 12 12s12-5.4 12-12V12c0-6.6-5.4-12-12-12zm33.9 55l17-17c4.7-4.7 4.7-12.3 0-17-4.7-4.7-12.3-4.7-17 0l-17 17c-4.7 4.7-4.7 12.3 0 17 4.8 4.7 12.4 4.7 17 0zm-67.8 0c4.7 4.7 12.3 4.7 17 0 4.7-4.7 4.7-12.3 0-17l-17-17c-4.7-4.7-12.3-4.7-17 0-4.7 4.7-4.7 12.3 0 17l17 17zm67.8 34c-4.7-4.7-12.3-4.7-17 0-4.7 4.7-4.7 12.3 0 17l17 17c4.7 4.7 12.3 4.7 17 0 4.7-4.7 4.7-12.3 0-17l-17-17zM112 272c0-35.3 28.7-64 64-64 8.8 0 16-7.2 16-16s-7.2-16-16-16c-52.9 0-96 43.1-96 96 0 8.8 7.2 16 16 16s16-7.2 16-16z"],
    "book": [448, 512, [], "f02d", "M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z"],
    "bookmark": [384, 512, [], "f02e", "M0 512V48C0 21.49 21.49 0 48 0h288c26.51 0 48 21.49 48 48v464L192 400 0 512z"],
    "braille": [640, 512, [], "f2a1", "M128 256c0 35.346-28.654 64-64 64S0 291.346 0 256s28.654-64 64-64 64 28.654 64 64zM64 384c-17.673 0-32 14.327-32 32s14.327 32 32 32 32-14.327 32-32-14.327-32-32-32zm0-352C28.654 32 0 60.654 0 96s28.654 64 64 64 64-28.654 64-64-28.654-64-64-64zm160 192c-17.673 0-32 14.327-32 32s14.327 32 32 32 32-14.327 32-32-14.327-32-32-32zm0 160c-17.673 0-32 14.327-32 32s14.327 32 32 32 32-14.327 32-32-14.327-32-32-32zm0-352c-35.346 0-64 28.654-64 64s28.654 64 64 64 64-28.654 64-64-28.654-64-64-64zm224 192c-17.673 0-32 14.327-32 32s14.327 32 32 32 32-14.327 32-32-14.327-32-32-32zm0 160c-17.673 0-32 14.327-32 32s14.327 32 32 32 32-14.327 32-32-14.327-32-32-32zm0-352c-35.346 0-64 28.654-64 64s28.654 64 64 64 64-28.654 64-64-28.654-64-64-64zm160 192c-17.673 0-32 14.327-32 32s14.327 32 32 32 32-14.327 32-32-14.327-32-32-32zm0 160c-17.673 0-32 14.327-32 32s14.327 32 32 32 32-14.327 32-32-14.327-32-32-32zm0-320c-17.673 0-32 14.327-32 32s14.327 32 32 32 32-14.327 32-32-14.327-32-32-32z"],
    "briefcase": [512, 512, [], "f0b1", "M320 288h192v144c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V288h192v20c0 6.627 5.373 12 12 12h104c6.627 0 12-5.373 12-12v-20zm192-112v80H0v-80c0-26.51 21.49-48 48-48h80V80c0-26.51 21.49-48 48-48h160c26.51 0 48 21.49 48 48v48h80c26.51 0 48 21.49 48 48zM320 96H192v32h128V96z"],
    "browser": [512, 512, [], "f37e", "M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM128 148c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm320 0c0 6.6-5.4 12-12 12H188c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h248c6.6 0 12 5.4 12 12v40z"],
    "bug": [512, 512, [], "f188", "M511.988 288.9c-.478 17.43-15.217 31.1-32.653 31.1H424v16c0 21.864-4.882 42.584-13.6 61.145l60.228 60.228c12.496 12.497 12.496 32.758 0 45.255-12.498 12.497-32.759 12.496-45.256 0l-54.736-54.736C345.886 467.965 314.351 480 280 480V236c0-6.627-5.373-12-12-12h-24c-6.627 0-12 5.373-12 12v244c-34.351 0-65.886-12.035-90.636-32.108l-54.736 54.736c-12.498 12.497-32.759 12.496-45.256 0-12.496-12.497-12.496-32.758 0-45.255l60.228-60.228C92.882 378.584 88 357.864 88 336v-16H32.666C15.23 320 .491 306.33.013 288.9-.484 270.816 14.028 256 32 256h56v-58.745l-46.628-46.628c-12.496-12.497-12.496-32.758 0-45.255 12.498-12.497 32.758-12.497 45.256 0L141.255 160h229.489l54.627-54.627c12.498-12.497 32.758-12.497 45.256 0 12.496 12.497 12.496 32.758 0 45.255L424 197.255V256h56c17.972 0 32.484 14.816 31.988 32.9zM257 0c-61.856 0-112 50.144-112 112h224C369 50.144 318.856 0 257 0z"],
    "building": [448, 512, [], "f1ad", "M436 480h-20V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v456H12c-6.627 0-12 5.373-12 12v20h448v-20c0-6.627-5.373-12-12-12zM128 76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76zm0 96c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40zm52 148h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12zm76 160h-64v-84c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v84zm64-172c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40z"],
    "bullhorn": [576, 512, [], "f0a1", "M576 224c0-20.896-13.36-38.666-32-45.258V64c0-35.346-28.654-64-64-64-64.985 56-142.031 128-272 128H48c-26.51 0-48 21.49-48 48v96c0 26.51 21.49 48 48 48h43.263c-18.742 64.65 2.479 116.379 18.814 167.44 1.702 5.32 5.203 9.893 9.922 12.88 20.78 13.155 68.355 15.657 93.773 5.151 16.046-6.633 19.96-27.423 7.522-39.537-18.508-18.026-30.136-36.91-19.795-60.858a12.278 12.278 0 0 0-1.045-11.673c-16.309-24.679-3.581-62.107 28.517-72.752C346.403 327.887 418.591 395.081 480 448c35.346 0 64-28.654 64-64V269.258c18.64-6.592 32-24.362 32-45.258zm-96 139.855c-54.609-44.979-125.033-92.94-224-104.982v-69.747c98.967-12.042 169.391-60.002 224-104.982v279.711z"],
    "bullseye": [512, 512, [], "f140", "M256 72c101.689 0 184 82.295 184 184 0 101.689-82.295 184-184 184-101.689 0-184-82.295-184-184 0-101.689 82.295-184 184-184m0-64C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 184c35.29 0 64 28.71 64 64s-28.71 64-64 64-64-28.71-64-64 28.71-64 64-64m0-64c-70.692 0-128 57.308-128 128s57.308 128 128 128 128-57.308 128-128-57.308-128-128-128z"],
    "bus": [512, 512, [], "f207", "M512 152v80c0 13.255-10.745 24-24 24h-8v168c0 13.255-10.745 24-24 24h-8v40c0 13.255-10.745 24-24 24h-48c-13.255 0-24-10.745-24-24v-40H160v40c0 13.255-10.745 24-24 24H88c-13.255 0-24-10.745-24-24v-40h-8c-13.255 0-24-10.745-24-24V256h-8c-13.255 0-24-10.745-24-24v-80c0-13.255 10.745-24 24-24h8V80C32 35.817 132.288 0 256 0s224 35.817 224 80v48h8c13.255 0 24 10.745 24 24zM112 320c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40zm288 0c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40zm32-56V120c0-13.255-10.745-24-24-24H104c-13.255 0-24 10.745-24 24v144c0 13.255 10.745 24 24 24h304c13.255 0 24-10.745 24-24z"],
    "calculator": [448, 512, [], "f1ec", "M0 464V48C0 21.49 21.49 0 48 0h352c26.51 0 48 21.49 48 48v416c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48zm384-284V76c0-6.627-5.373-12-12-12H76c-6.627 0-12 5.373-12 12v104c0 6.627 5.373 12 12 12h296c6.627 0 12-5.373 12-12zM128 308v-40c0-6.627-5.373-12-12-12H76c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm256 128V268c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v168c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm-256 0v-40c0-6.627-5.373-12-12-12H76c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm128-128v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm0 128v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12z"],
    "calendar": [448, 512, [], "f133", "M12 192h424c6.6 0 12 5.4 12 12v260c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V204c0-6.6 5.4-12 12-12zm436-44v-36c0-26.5-21.5-48-48-48h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v36c0 6.6 5.4 12 12 12h424c6.6 0 12-5.4 12-12z"],
    "calendar-alt": [448, 512, [], "f073", "M436 160H12c-6.6 0-12-5.4-12-12v-36c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48v36c0 6.6-5.4 12-12 12zM12 192h424c6.6 0 12 5.4 12 12v260c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V204c0-6.6 5.4-12 12-12zm116 204c0-6.6-5.4-12-12-12H76c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-40zm0-128c0-6.6-5.4-12-12-12H76c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-40zm128 128c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-40zm0-128c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-40zm128 128c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-40zm0-128c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-40z"],
    "calendar-check": [448, 512, [], "f274", "M436 160H12c-6.627 0-12-5.373-12-12v-36c0-26.51 21.49-48 48-48h48V12c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v52h128V12c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v52h48c26.51 0 48 21.49 48 48v36c0 6.627-5.373 12-12 12zM12 192h424c6.627 0 12 5.373 12 12v260c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V204c0-6.627 5.373-12 12-12zm333.296 95.947l-28.169-28.398c-4.667-4.705-12.265-4.736-16.97-.068L194.12 364.665l-45.98-46.352c-4.667-4.705-12.266-4.736-16.971-.068l-28.397 28.17c-4.705 4.667-4.736 12.265-.068 16.97l82.601 83.269c4.667 4.705 12.265 4.736 16.97.068l142.953-141.805c4.705-4.667 4.736-12.265.068-16.97z"],
    "calendar-edit": [448, 512, [], "f333", "M436 160H12c-6.6 0-12-5.4-12-12v-36c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48v36c0 6.6-5.4 12-12 12zM12 192h424c6.6 0 12 5.4 12 12v260c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V204c0-6.6 5.4-12 12-12zm208.4 109.6l-95 95-5.4 48.2c-.7 6.4 4.7 11.9 11.2 11.2l48.2-5.4 95-95c2-2 2-5.2 0-7.2l-46.8-46.8c-2-2-5.2-2-7.2 0zm109.7-30.3l-25.4-25.4c-7.9-7.9-20.7-7.9-28.6 0l-26 26c-2 2-2 5.2 0 7.2l46.8 46.8c2 2 5.2 2 7.2 0l26-26c7.9-7.9 7.9-20.7 0-28.6z"],
    "calendar-exclamation": [448, 512, [], "f334", "M0 148v-36c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48v36c0 6.6-5.4 12-12 12H12c-6.6 0-12-5.4-12-12zm448 56v260c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V204c0-6.6 5.4-12 12-12h424c6.6 0 12 5.4 12 12zM224 392c-22.1 0-40 17.9-40 40s17.9 40 40 40 40-17.9 40-40-17.9-40-40-40zm-39.2-139.2l7.2 112c.4 6.3 5.6 11.2 12 11.2h40c6.3 0 11.6-4.9 12-11.2l7.2-112c.4-6.9-5-12.8-12-12.8h-54.4c-6.9 0-12.4 5.9-12 12.8z"],
    "calendar-minus": [448, 512, [], "f272", "M436 160H12c-6.6 0-12-5.4-12-12v-36c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48v36c0 6.6-5.4 12-12 12zM12 192h424c6.6 0 12 5.4 12 12v260c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V204c0-6.6 5.4-12 12-12zm304 192c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12H132c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h184z"],
    "calendar-plus": [448, 512, [], "f271", "M436 160H12c-6.6 0-12-5.4-12-12v-36c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48v36c0 6.6-5.4 12-12 12zM12 192h424c6.6 0 12 5.4 12 12v260c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V204c0-6.6 5.4-12 12-12zm316 140c0-6.6-5.4-12-12-12h-60v-60c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v60h-60c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h60v60c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-60h60c6.6 0 12-5.4 12-12v-40z"],
    "calendar-times": [448, 512, [], "f273", "M436 160H12c-6.6 0-12-5.4-12-12v-36c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48v36c0 6.6-5.4 12-12 12zM12 192h424c6.6 0 12 5.4 12 12v260c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V204c0-6.6 5.4-12 12-12zm257.3 160l48.1-48.1c4.7-4.7 4.7-12.3 0-17l-28.3-28.3c-4.7-4.7-12.3-4.7-17 0L224 306.7l-48.1-48.1c-4.7-4.7-12.3-4.7-17 0l-28.3 28.3c-4.7 4.7-4.7 12.3 0 17l48.1 48.1-48.1 48.1c-4.7 4.7-4.7 12.3 0 17l28.3 28.3c4.7 4.7 12.3 4.7 17 0l48.1-48.1 48.1 48.1c4.7 4.7 12.3 4.7 17 0l28.3-28.3c4.7-4.7 4.7-12.3 0-17L269.3 352z"],
    "camera": [512, 512, [], "f030", "M512 144v288c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48h88l12.3-32.9c7-18.7 24.9-31.1 44.9-31.1h125.5c20 0 37.9 12.4 44.9 31.1L376 96h88c26.5 0 48 21.5 48 48zM376 288c0-66.2-53.8-120-120-120s-120 53.8-120 120 53.8 120 120 120 120-53.8 120-120zm-32 0c0 48.5-39.5 88-88 88s-88-39.5-88-88 39.5-88 88-88 88 39.5 88 88z"],
    "camera-alt": [512, 512, [], "f332", "M512 144v288c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48h88l12.3-32.9c7-18.7 24.9-31.1 44.9-31.1h125.5c20 0 37.9 12.4 44.9 31.1L376 96h88c26.5 0 48 21.5 48 48zM376 288c0-66.2-53.8-120-120-120s-120 53.8-120 120 53.8 120 120 120 120-53.8 120-120zm-32 0c0 48.5-39.5 88-88 88s-88-39.5-88-88 39.5-88 88-88 88 39.5 88 88zm-120 0c0-17.6 14.4-32 32-32 8.8 0 16-7.2 16-16s-7.2-16-16-16c-35.3 0-64 28.7-64 64 0 8.8 7.2 16 16 16s16-7.2 16-16z"],
    "camera-retro": [512, 512, [], "f083", "M48 32C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48H48zm0 32h106c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H38c-3.3 0-6-2.7-6-6V80c0-8.8 7.2-16 16-16zm426 96H38c-3.3 0-6-2.7-6-6v-36c0-3.3 2.7-6 6-6h138l30.2-45.3c1.1-1.7 3-2.7 5-2.7H464c8.8 0 16 7.2 16 16v74c0 3.3-2.7 6-6 6zM256 424c-66.2 0-120-53.8-120-120s53.8-120 120-120 120 53.8 120 120-53.8 120-120 120zm0-208c-48.5 0-88 39.5-88 88s39.5 88 88 88 88-39.5 88-88-39.5-88-88-88zm-48 104c-8.8 0-16-7.2-16-16 0-35.3 28.7-64 64-64 8.8 0 16 7.2 16 16s-7.2 16-16 16c-17.6 0-32 14.4-32 32 0 8.8-7.2 16-16 16z"],
    "car": [512, 512, [], "f1b9", "M499.991 168h-54.815l-7.854-20.944c-9.192-24.513-25.425-45.351-46.942-60.263S343.651 64 317.472 64H194.528c-26.18 0-51.391 7.882-72.908 22.793-21.518 14.912-37.75 35.75-46.942 60.263L66.824 168H12.009c-8.191 0-13.974 8.024-11.384 15.795l8 24A12 12 0 0 0 20.009 216h28.815l-.052.14C29.222 227.093 16 247.997 16 272v48c0 16.225 6.049 31.029 16 42.309V424c0 13.255 10.745 24 24 24h48c13.255 0 24-10.745 24-24v-40h256v40c0 13.255 10.745 24 24 24h48c13.255 0 24-10.745 24-24v-61.691c9.951-11.281 16-26.085 16-42.309v-48c0-24.003-13.222-44.907-32.772-55.86l-.052-.14h28.815a12 12 0 0 0 11.384-8.205l8-24c2.59-7.771-3.193-15.795-11.384-15.795zm-365.388 1.528C143.918 144.689 168 128 194.528 128h122.944c26.528 0 50.61 16.689 59.925 41.528L391.824 208H120.176l14.427-38.472zM88 328c-17.673 0-32-14.327-32-32 0-17.673 14.327-32 32-32s48 30.327 48 48-30.327 16-48 16zm336 0c-17.673 0-48 1.673-48-16 0-17.673 30.327-48 48-48s32 14.327 32 32c0 17.673-14.327 32-32 32z"],
    "caret-circle-down": [512, 512, [], "f32d", "M504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-379.5-27.5l123 123c4.7 4.7 12.3 4.7 17 0l123-123c7.6-7.6 2.2-20.5-8.5-20.5H133c-10.7 0-16.1 12.9-8.5 20.5z"],
    "caret-circle-left": [512, 512, [], "f32e", "M256 504C119 504 8 393 8 256S119 8 256 8s248 111 248 248-111 248-248 248zm27.5-379.5l-123 123c-4.7 4.7-4.7 12.3 0 17l123 123c7.6 7.6 20.5 2.2 20.5-8.5V133c0-10.7-12.9-16.1-20.5-8.5z"],
    "caret-circle-right": [512, 512, [], "f330", "M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm-27.5 379.5l123-123c4.7-4.7 4.7-12.3 0-17l-123-123c-7.6-7.6-20.5-2.2-20.5 8.5v246c0 10.7 12.9 16.1 20.5 8.5z"],
    "caret-circle-up": [512, 512, [], "f331", "M8 256C8 119 119 8 256 8s248 111 248 248-111 248-248 248S8 393 8 256zm379.5 27.5l-123-123c-4.7-4.7-12.3-4.7-17 0l-123 123c-7.6 7.6-2.2 20.5 8.5 20.5h246c10.7 0 16.1-12.9 8.5-20.5z"],
    "caret-down": [320, 512, [], "f0d7", "M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"],
    "caret-left": [192, 512, [], "f0d9", "M192 127.338v257.324c0 17.818-21.543 26.741-34.142 14.142L29.196 270.142c-7.81-7.81-7.81-20.474 0-28.284l128.662-128.662c12.599-12.6 34.142-3.676 34.142 14.142z"],
    "caret-right": [192, 512, [], "f0da", "M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"],
    "caret-square-down": [448, 512, [], "f150", "M448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zM92.5 220.5l123 123c4.7 4.7 12.3 4.7 17 0l123-123c7.6-7.6 2.2-20.5-8.5-20.5H101c-10.7 0-16.1 12.9-8.5 20.5z"],
    "caret-square-left": [448, 512, [], "f191", "M400 480H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48zM259.515 124.485l-123.03 123.03c-4.686 4.686-4.686 12.284 0 16.971l123.029 123.029c7.56 7.56 20.485 2.206 20.485-8.485V132.971c.001-10.691-12.925-16.045-20.484-8.486z"],
    "caret-square-right": [448, 512, [], "f152", "M48 32h352c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48zm140.485 355.515l123.029-123.029c4.686-4.686 4.686-12.284 0-16.971l-123.029-123.03c-7.56-7.56-20.485-2.206-20.485 8.485v246.059c0 10.691 12.926 16.045 20.485 8.486z"],
    "caret-square-up": [448, 512, [], "f151", "M0 432V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48zm355.515-140.485l-123.03-123.03c-4.686-4.686-12.284-4.686-16.971 0L92.485 291.515c-7.56 7.56-2.206 20.485 8.485 20.485h246.059c10.691 0 16.045-12.926 8.486-20.485z"],
    "caret-up": [320, 512, [], "f0d8", "M288.662 352H31.338c-17.818 0-26.741-21.543-14.142-34.142l128.662-128.662c7.81-7.81 20.474-7.81 28.284 0l128.662 128.662c12.6 12.599 3.676 34.142-14.142 34.142z"],
    "cart-arrow-down": [576, 512, [], "f218", "M504.717 320H211.572l6.545 32h268.418c15.401 0 26.816 14.301 23.403 29.319l-5.517 24.276C523.112 414.668 536 433.828 536 456c0 31.202-25.519 56.444-56.824 55.994-29.823-.429-54.35-24.631-55.155-54.447-.44-16.287 6.085-31.049 16.803-41.548H231.176C241.553 426.165 248 440.326 248 456c0 31.813-26.528 57.431-58.67 55.938-28.54-1.325-51.751-24.385-53.251-52.917-1.158-22.034 10.436-41.455 28.051-51.586L93.883 64H24C10.745 64 0 53.255 0 40V24C0 10.745 10.745 0 24 0h102.529c11.401 0 21.228 8.021 23.513 19.19L159.208 64H551.99c15.401 0 26.816 14.301 23.403 29.319l-47.273 208C525.637 312.246 515.923 320 504.717 320zM403.029 192H360v-60c0-6.627-5.373-12-12-12h-24c-6.627 0-12 5.373-12 12v60h-43.029c-10.691 0-16.045 12.926-8.485 20.485l67.029 67.029c4.686 4.686 12.284 4.686 16.971 0l67.029-67.029c7.559-7.559 2.205-20.485-8.486-20.485z"],
    "cart-plus": [576, 512, [], "f217", "M504.717 320H211.572l6.545 32h268.418c15.401 0 26.816 14.301 23.403 29.319l-5.517 24.276C523.112 414.668 536 433.828 536 456c0 31.202-25.519 56.444-56.824 55.994-29.823-.429-54.35-24.631-55.155-54.447-.44-16.287 6.085-31.049 16.803-41.548H231.176C241.553 426.165 248 440.326 248 456c0 31.813-26.528 57.431-58.67 55.938-28.54-1.325-51.751-24.385-53.251-52.917-1.158-22.034 10.436-41.455 28.051-51.586L93.883 64H24C10.745 64 0 53.255 0 40V24C0 10.745 10.745 0 24 0h102.529c11.401 0 21.228 8.021 23.513 19.19L159.208 64H551.99c15.401 0 26.816 14.301 23.403 29.319l-47.273 208C525.637 312.246 515.923 320 504.717 320zM408 168h-48v-40c0-8.837-7.163-16-16-16h-16c-8.837 0-16 7.163-16 16v40h-48c-8.837 0-16 7.163-16 16v16c0 8.837 7.163 16 16 16h48v40c0 8.837 7.163 16 16 16h16c8.837 0 16-7.163 16-16v-40h48c8.837 0 16-7.163 16-16v-16c0-8.837-7.163-16-16-16z"],
    "certificate": [512, 512, [], "f0a3", "M458.622 255.92l45.985-45.005c13.708-12.977 7.316-36.039-10.664-40.339l-62.65-15.99 17.661-62.015c4.991-17.838-11.829-34.663-29.661-29.671l-61.994 17.667-15.984-62.671C337.085.197 313.765-6.276 300.99 7.228L256 53.57 211.011 7.229c-12.63-13.351-36.047-7.234-40.325 10.668l-15.984 62.671-61.995-17.667C74.87 57.907 58.056 74.738 63.046 92.572l17.661 62.015-62.65 15.99C.069 174.878-6.31 197.944 7.392 210.915l45.985 45.005-45.985 45.004c-13.708 12.977-7.316 36.039 10.664 40.339l62.65 15.99-17.661 62.015c-4.991 17.838 11.829 34.663 29.661 29.671l61.994-17.667 15.984 62.671c4.439 18.575 27.696 24.018 40.325 10.668L256 458.61l44.989 46.001c12.5 13.488 35.987 7.486 40.325-10.668l15.984-62.671 61.994 17.667c17.836 4.994 34.651-11.837 29.661-29.671l-17.661-62.015 62.65-15.99c17.987-4.302 24.366-27.367 10.664-40.339l-45.984-45.004z"],
    "chart-area": [512, 512, [], "f1fe", "M500 384c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H12c-6.6 0-12-5.4-12-12V76c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v308h436zM372.7 159.5L288 216l-85.3-113.7c-5.1-6.8-15.5-6.3-19.9 1L96 248v104h384l-89.9-187.8c-3.2-6.5-11.4-8.7-17.4-4.7z"],
    "chart-bar": [512, 512, [], "f080", "M500 384c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H12c-6.6 0-12-5.4-12-12V76c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v308h436zm-308-44v-72c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v72c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0V204c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v136c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0V140c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v200c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0V108c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v232c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12z"],
    "chart-line": [512, 512, [], "f201", "M500 384c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H12c-6.6 0-12-5.4-12-12V76c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v308h436zM456 96H344c-21.4 0-32.1 25.9-17 41l32.9 32.9-72 72.9-55.6-55.6c-4.7-4.7-12.2-4.7-16.9 0L96.4 305c-4.7 4.6-4.8 12.2-.2 16.9l28.5 29.4c4.7 4.8 12.4 4.9 17.1.1l82.1-82.1 55.5 55.5c4.7 4.7 12.3 4.7 17 0l109.2-109.2L439 249c15.1 15.1 41 4.4 41-17V120c0-13.3-10.7-24-24-24z"],
    "chart-pie": [576, 512, [], "f200", "M288 12.3V240h227.7c6.9 0 12.3-5.8 12-12.7-6.4-122.4-104.5-220.6-227-227-6.9-.3-12.7 5.1-12.7 12zM552.7 288c6.9 0 12.3 5.8 12 12.7-2.8 53.2-23.2 105.6-61.2 147.8-4.6 5.1-12.6 5.4-17.5.5L325 288h227.7zM401 433c4.8 4.8 4.7 12.8-.4 17.3-42.6 38.4-99 61.7-160.8 61.7C107.6 511.9-.2 403.8 0 271.5.2 143.4 100.8 38.9 227.3 32.3c6.9-.4 12.7 5.1 12.7 12V272l161 161z"],
    "check": [512, 512, [], "f00c", "M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"],
    "check-circle": [512, 512, [], "f058", "M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"],
    "check-square": [448, 512, [], "f14a", "M400 480H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48zm-204.686-98.059l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.248-16.379-6.249-22.628 0L184 302.745l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.25 16.379 6.25 22.628.001z"],
    "chevron-circle-down": [512, 512, [], "f13a", "M504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zM273 369.9l135.5-135.5c9.4-9.4 9.4-24.6 0-33.9l-17-17c-9.4-9.4-24.6-9.4-33.9 0L256 285.1 154.4 183.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9L239 369.9c9.4 9.4 24.6 9.4 34 0z"],
    "chevron-circle-left": [512, 512, [], "f137", "M256 504C119 504 8 393 8 256S119 8 256 8s248 111 248 248-111 248-248 248zM142.1 273l135.5 135.5c9.4 9.4 24.6 9.4 33.9 0l17-17c9.4-9.4 9.4-24.6 0-33.9L226.9 256l101.6-101.6c9.4-9.4 9.4-24.6 0-33.9l-17-17c-9.4-9.4-24.6-9.4-33.9 0L142.1 239c-9.4 9.4-9.4 24.6 0 34z"],
    "chevron-circle-right": [512, 512, [], "f138", "M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm113.9 231L234.4 103.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9L285.1 256 183.5 357.6c-9.4 9.4-9.4 24.6 0 33.9l17 17c9.4 9.4 24.6 9.4 33.9 0L369.9 273c9.4-9.4 9.4-24.6 0-34z"],
    "chevron-circle-up": [512, 512, [], "f139", "M8 256C8 119 119 8 256 8s248 111 248 248-111 248-248 248S8 393 8 256zm231-113.9L103.5 277.6c-9.4 9.4-9.4 24.6 0 33.9l17 17c9.4 9.4 24.6 9.4 33.9 0L256 226.9l101.6 101.6c9.4 9.4 24.6 9.4 33.9 0l17-17c9.4-9.4 9.4-24.6 0-33.9L273 142.1c-9.4-9.4-24.6-9.4-34 0z"],
    "chevron-double-down": [448, 512, [], "f322", "M207 477.5L12.7 283.1c-9.4-9.4-9.4-24.6 0-33.9l22.7-22.7c9.4-9.4 24.5-9.4 33.9 0l154.7 154 154.7-154c9.4-9.3 24.5-9.3 33.9 0l22.7 22.7c9.4 9.4 9.4 24.6 0 33.9L241 477.5c-9.4 9.3-24.6 9.3-34 0zm34-192L435.3 91.1c9.4-9.4 9.4-24.6 0-33.9l-22.7-22.7c-9.4-9.4-24.5-9.4-33.9 0L224 188.5 69.3 34.5c-9.4-9.3-24.5-9.3-33.9 0L12.7 57.2c-9.4 9.4-9.4 24.6 0 33.9L207 285.5c9.4 9.3 24.6 9.3 34 0z"],
    "chevron-double-left": [512, 512, [], "f323", "M34.5 239L228.9 44.7c9.4-9.4 24.6-9.4 33.9 0l22.7 22.7c9.4 9.4 9.4 24.5 0 33.9L131.5 256l154 154.7c9.3 9.4 9.3 24.5 0 33.9l-22.7 22.7c-9.4 9.4-24.6 9.4-33.9 0L34.5 273c-9.3-9.4-9.3-24.6 0-34zm192 34l194.3 194.3c9.4 9.4 24.6 9.4 33.9 0l22.7-22.7c9.4-9.4 9.4-24.5 0-33.9L323.5 256l154-154.7c9.3-9.4 9.3-24.5 0-33.9l-22.7-22.7c-9.4-9.4-24.6-9.4-33.9 0L226.5 239c-9.3 9.4-9.3 24.6 0 34z"],
    "chevron-double-right": [512, 512, [], "f324", "M477.5 273L283.1 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.7-22.7c-9.4-9.4-9.4-24.5 0-33.9l154-154.7-154-154.7c-9.3-9.4-9.3-24.5 0-33.9l22.7-22.7c9.4-9.4 24.6-9.4 33.9 0L477.5 239c9.3 9.4 9.3 24.6 0 34zm-192-34L91.1 44.7c-9.4-9.4-24.6-9.4-33.9 0L34.5 67.4c-9.4 9.4-9.4 24.5 0 33.9l154 154.7-154 154.7c-9.3 9.4-9.3 24.5 0 33.9l22.7 22.7c9.4 9.4 24.6 9.4 33.9 0L285.5 273c9.3-9.4 9.3-24.6 0-34z"],
    "chevron-double-up": [448, 512, [], "f325", "M241 34.5l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9l-22.7 22.7c-9.4 9.4-24.5 9.4-33.9 0L224 131.5l-154.7 154c-9.4 9.3-24.5 9.3-33.9 0l-22.7-22.7c-9.4-9.4-9.4-24.6 0-33.9L207 34.5c9.4-9.3 24.6-9.3 34 0zm-34 192L12.7 420.9c-9.4 9.4-9.4 24.6 0 33.9l22.7 22.7c9.4 9.4 24.5 9.4 33.9 0l154.7-154 154.7 154c9.4 9.3 24.5 9.3 33.9 0l22.7-22.7c9.4-9.4 9.4-24.6 0-33.9L241 226.5c-9.4-9.3-24.6-9.3-34 0z"],
    "chevron-down": [448, 512, [], "f078", "M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"],
    "chevron-left": [320, 512, [], "f053", "M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"],
    "chevron-right": [320, 512, [], "f054", "M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"],
    "chevron-square-down": [448, 512, [], "f329", "M448 80v352c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48zM240.971 361.941l135.515-135.515c9.373-9.373 9.373-24.569 0-33.941l-16.971-16.971c-9.373-9.373-24.569-9.373-33.941 0L224 277.088 122.427 175.515c-9.373-9.373-24.569-9.373-33.941 0l-16.971 16.971c-9.373 9.373-9.373 24.569 0 33.941L207.03 361.942c9.372 9.372 24.568 9.372 33.941-.001z"],
    "chevron-square-left": [448, 512, [], "f32a", "M400 480H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48zM118.059 272.971l135.515 135.515c9.373 9.373 24.569 9.373 33.941 0l16.971-16.971c9.373-9.373 9.373-24.569 0-33.941L202.912 256l101.574-101.573c9.373-9.373 9.373-24.569 0-33.941l-16.971-16.971c-9.373-9.373-24.569-9.373-33.941 0L118.059 239.029c-9.373 9.373-9.373 24.569 0 33.942z"],
    "chevron-square-right": [448, 512, [], "f32b", "M48 32h352c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48zm281.941 207.029L194.427 103.515c-9.373-9.373-24.569-9.373-33.941 0l-16.971 16.971c-9.373 9.373-9.373 24.569 0 33.941L245.088 256 143.515 357.573c-9.373 9.373-9.373 24.569 0 33.941l16.971 16.971c9.373 9.373 24.569 9.373 33.941 0L329.942 272.97c9.372-9.372 9.372-24.568-.001-33.941z"],
    "chevron-square-up": [448, 512, [], "f32c", "M0 432V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48zm207.029-281.941L71.515 285.573c-9.373 9.373-9.373 24.569 0 33.941l16.971 16.971c9.373 9.373 24.569 9.373 33.941 0L224 234.912l101.573 101.574c9.373 9.373 24.569 9.373 33.941 0l16.971-16.971c9.373-9.373 9.373-24.569 0-33.941L240.971 150.059c-9.373-9.373-24.569-9.373-33.942 0z"],
    "chevron-up": [448, 512, [], "f077", "M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"],
    "child": [384, 512, [], "f1ae", "M120 72c0-39.765 32.235-72 72-72s72 32.235 72 72c0 39.764-32.235 72-72 72s-72-32.236-72-72zm254.627 1.373c-12.496-12.497-32.758-12.497-45.254 0L242.745 160H141.254L54.627 73.373c-12.496-12.497-32.758-12.497-45.254 0-12.497 12.497-12.497 32.758 0 45.255L104 213.254V480c0 17.673 14.327 32 32 32h16c17.673 0 32-14.327 32-32V368h16v112c0 17.673 14.327 32 32 32h16c17.673 0 32-14.327 32-32V213.254l94.627-94.627c12.497-12.497 12.497-32.757 0-45.254z"],
    "circle": [512, 512, [], "f111", "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"],
    "circle-notch": [512, 512, [], "f1ce", "M288 39.056v16.659c0 10.804 7.281 20.159 17.686 23.066C383.204 100.434 440 171.518 440 256c0 101.689-82.295 184-184 184-101.689 0-184-82.295-184-184 0-84.47 56.786-155.564 134.312-177.219C216.719 75.874 224 66.517 224 55.712V39.064c0-15.709-14.834-27.153-30.046-23.234C86.603 43.482 7.394 141.206 8.003 257.332c.72 137.052 111.477 246.956 248.531 246.667C393.255 503.711 504 392.788 504 256c0-115.633-79.14-212.779-186.211-240.236C302.678 11.889 288 23.456 288 39.056z"],
    "clipboard": [384, 512, [], "f328", "M384 112v352c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h80c0-35.29 28.71-64 64-64s64 28.71 64 64h80c26.51 0 48 21.49 48 48zM192 40c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24m96 114v-20a6 6 0 0 0-6-6H102a6 6 0 0 0-6 6v20a6 6 0 0 0 6 6h180a6 6 0 0 0 6-6z"],
    "clock": [512, 512, [], "f017", "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm57.1 350.1L224.9 294c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h48c6.6 0 12 5.4 12 12v137.7l63.5 46.2c5.4 3.9 6.5 11.4 2.6 16.8l-28.2 38.8c-3.9 5.3-11.4 6.5-16.8 2.6z"],
    "clone": [512, 512, [], "f24d", "M464 0c26.51 0 48 21.49 48 48v288c0 26.51-21.49 48-48 48H176c-26.51 0-48-21.49-48-48V48c0-26.51 21.49-48 48-48h288M176 416c-44.112 0-80-35.888-80-80V128H48c-26.51 0-48 21.49-48 48v288c0 26.51 21.49 48 48 48h288c26.51 0 48-21.49 48-48v-48H176z"],
    "closed-captioning": [512, 512, [], "f20a", "M464 64H48C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM218.1 287.7c2.8-2.5 7.1-2.1 9.2.9l19.5 27.7c1.7 2.4 1.5 5.6-.5 7.7-53.6 56.8-172.8 32.1-172.8-67.9 0-97.3 121.7-119.5 172.5-70.1 2.1 2 2.5 3.2 1 5.7l-17.5 30.5c-1.9 3.1-6.2 4-9.1 1.7-40.8-32-94.6-14.9-94.6 31.2.1 48 51.1 70.5 92.3 32.6zm190.4 0c2.8-2.5 7.1-2.1 9.2.9l19.5 27.7c1.7 2.4 1.5 5.6-.5 7.7-53.5 56.9-172.7 32.1-172.7-67.9 0-97.3 121.7-119.5 172.5-70.1 2.1 2 2.5 3.2 1 5.7L420 222.2c-1.9 3.1-6.2 4-9.1 1.7-40.8-32-94.6-14.9-94.6 31.2 0 48 51 70.5 92.2 32.6z"],
    "cloud": [640, 512, [], "f0c2", "M537.585 226.56C541.725 215.836 544 204.184 544 192c0-53.019-42.981-96-96-96-19.729 0-38.065 5.954-53.316 16.159C367.042 64.248 315.288 32 256 32c-88.366 0-160 71.634-160 160 0 2.728.07 5.439.204 8.133C40.171 219.845 0 273.227 0 336c0 79.529 64.471 144 144 144h368c70.692 0 128-57.308 128-128 0-61.93-43.983-113.586-102.415-125.44z"],
    "cloud-download": [640, 512, [], "f0ed", "M537.585 226.56C541.725 215.836 544 204.184 544 192c0-53.019-42.981-96-96-96-19.729 0-38.065 5.954-53.316 16.159C367.042 64.248 315.288 32 256 32c-88.366 0-160 71.634-160 160 0 2.728.07 5.439.204 8.133C40.171 219.845 0 273.227 0 336c0 79.529 64.471 144 144 144h368c70.692 0 128-57.308 128-128 0-61.93-43.983-113.586-102.415-125.44zm-139.928 93.038l-92.686 92.686c-9.373 9.372-24.568 9.372-33.941 0l-92.686-92.686c-9.373-9.372-9.373-24.568 0-33.941l10.775-10.775c9.581-9.581 25.187-9.337 34.464.539L256 309.933V184c0-13.255 10.745-24 24-24h16c13.255 0 24 10.745 24 24v125.933l32.419-34.512c9.276-9.875 24.883-10.119 34.464-.539l10.775 10.775c9.372 9.373 9.372 24.569-.001 33.941z"],
    "cloud-download-alt": [640, 512, [], "f381", "M640 352c0 70.692-57.308 128-128 128H144C64.471 480 0 415.529 0 336c0-62.773 40.171-116.155 96.204-135.867A163.68 163.68 0 0 1 96 192c0-88.366 71.634-160 160-160 59.288 0 111.042 32.248 138.684 80.159C409.935 101.954 428.271 96 448 96c53.019 0 96 42.981 96 96 0 12.184-2.275 23.836-6.415 34.56C596.017 238.414 640 290.07 640 352zm-246.627-64H328V176c0-8.837-7.164-16-16-16h-48c-8.836 0-16 7.163-16 16v112h-65.373c-14.254 0-21.393 17.234-11.314 27.314l105.373 105.373c6.248 6.248 16.379 6.248 22.627 0l105.373-105.373c10.08-10.08 2.941-27.314-11.313-27.314z"],
    "cloud-upload": [640, 512, [], "f0ee", "M537.585 226.56C541.725 215.836 544 204.184 544 192c0-53.019-42.981-96-96-96-19.729 0-38.065 5.954-53.316 16.159C367.042 64.248 315.288 32 256 32c-88.365 0-160 71.634-160 160 0 2.728.07 5.439.204 8.133C40.171 219.845 0 273.227 0 336c0 79.529 64.471 144 144 144h368c70.692 0 128-57.308 128-128 0-61.93-43.983-113.586-102.415-125.44zm-139.928 63.783l-10.775 10.775c-9.58 9.581-25.187 9.337-34.464-.539L320 266.067V392c0 13.255-10.745 24-24 24h-16c-13.255 0-24-10.745-24-24V266.067l-32.419 34.512c-9.276 9.875-24.883 10.119-34.464.539l-10.775-10.775c-9.373-9.373-9.372-24.568 0-33.941l92.686-92.686c9.373-9.373 24.568-9.373 33.941 0l92.687 92.686c9.374 9.372 9.374 24.568.001 33.941z"],
    "cloud-upload-alt": [640, 512, [], "f382", "M640 352c0 70.692-57.308 128-128 128H144C64.471 480 0 415.529 0 336c0-62.773 40.171-116.155 96.204-135.867A163.68 163.68 0 0 1 96 192c0-88.366 71.634-160 160-160 59.288 0 111.042 32.248 138.684 80.159C409.935 101.954 428.271 96 448 96c53.019 0 96 42.981 96 96 0 12.184-2.275 23.836-6.415 34.56C596.017 238.414 640 290.07 640 352zm-235.314-91.314L299.314 155.314c-6.248-6.248-16.379-6.248-22.627 0L171.314 260.686c-10.08 10.08-2.941 27.314 11.313 27.314H248v112c0 8.837 7.164 16 16 16h48c8.836 0 16-7.163 16-16V288h65.373c14.254 0 21.393-17.234 11.313-27.314z"],
    "club": [512, 512, [], "f327", "M371.5 169.1C403.1 88.4 343.7 0 256 0c-87.8 0-147 88.5-115.5 169.1C65.7 159.2 0 217.3 0 292c0 68.5 55.5 124 124 124 36.5 0 69.3-15.8 92-40.9-.1 36.7-.8 52.4-53 75.6-13.8 6.1-21.4 21.1-18.3 35.9 3.1 14.8 16.2 25.4 31.3 25.4h160c15.1 0 28.2-10.6 31.3-25.4 3.1-14.8-4.5-29.7-18.3-35.9-51.6-23-52.8-38.1-53-75.6 22.7 25.1 55.5 40.9 92 40.9 68.5 0 124-55.5 124-124 0-74.8-65.8-132.8-140.5-122.9z"],
    "code": [640, 512, [], "f121", "M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"],
    "code-branch": [384, 512, [], "f126", "M384 144c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 36.4 24.3 67.1 57.5 76.8-.6 16.1-4.2 28.5-11 36.9-15.4 19.2-49.3 22.4-85.2 25.7-28.2 2.6-57.4 5.4-81.3 16.9v-144c32.5-10.2 56-40.5 56-76.3 0-44.2-35.8-80-80-80S0 35.8 0 80c0 35.8 23.5 66.1 56 76.3v199.3C23.5 365.9 0 396.2 0 432c0 44.2 35.8 80 80 80s80-35.8 80-80c0-34-21.2-63.1-51.2-74.6 3.1-5.2 7.8-9.8 14.9-13.4 16.2-8.2 40.4-10.4 66.1-12.8 42.2-3.9 90-8.4 118.2-43.4 14-17.4 21.1-39.8 21.6-67.9 31.6-10.8 54.4-40.7 54.4-75.9zM80 64c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16zm0 384c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zm224-320c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16z"],
    "code-commit": [640, 512, [], "f386", "M128 256c0 10.8.9 21.5 2.6 32H12c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h118.6c-1.7 10.5-2.6 21.2-2.6 32zm500-32H509.4c1.8 10.5 2.6 21.2 2.6 32s-.9 21.5-2.6 32H628c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12zm-308-10c-23.2 0-42 18.8-42 42s18.8 42 42 42 42-18.8 42-42-18.8-42-42-42m0-118c88.4 0 160 71.6 160 160s-71.6 160-160 160-160-71.6-160-160S231.6 96 320 96z"],
    "code-merge": [384, 512, [], "f387", "M304 192c-38 0-69.8 26.5-77.9 62-23.9-3.5-58-12.9-83.9-37.6-16.6-15.9-27.9-36.5-33.7-61.6C138.6 143.3 160 114.1 160 80c0-44.2-35.8-80-80-80S0 35.8 0 80c0 35.8 23.5 66.1 56 76.3v199.3C23.5 365.9 0 396.2 0 432c0 44.2 35.8 80 80 80s80-35.8 80-80c0-35.8-23.5-66.1-56-76.3V246.1c1.6 1.7 3.3 3.4 5 5 39.3 37.5 90.4 48.6 121.2 51.8 12.1 28.9 40.6 49.2 73.8 49.2 44.2 0 80-35.8 80-80S348.2 192 304 192zM80 64c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16zm0 384c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zm224-160c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16z"],
    "coffee": [640, 512, [], "f0f4", "M192 384h192c53 0 96-43 96-96h32c70.6 0 128-57.4 128-128S582.6 32 512 32H120c-13.3 0-24 10.7-24 24v232c0 53 43 96 96 96zM512 96c35.3 0 64 28.7 64 64s-28.7 64-64 64h-32V96h32zm47.7 384H48.3c-47.6 0-61-64-36-64h583.3c25 0 11.8 64-35.9 64z"],
    "cog": [512, 512, [], "f013", "M444.788 291.1l42.616 24.599c4.867 2.809 7.126 8.618 5.459 13.985-11.07 35.642-29.97 67.842-54.689 94.586a12.016 12.016 0 0 1-14.832 2.254l-42.584-24.595a191.577 191.577 0 0 1-60.759 35.13v49.182a12.01 12.01 0 0 1-9.377 11.718c-34.956 7.85-72.499 8.256-109.219.007-5.49-1.233-9.403-6.096-9.403-11.723v-49.184a191.555 191.555 0 0 1-60.759-35.13l-42.584 24.595a12.016 12.016 0 0 1-14.832-2.254c-24.718-26.744-43.619-58.944-54.689-94.586-1.667-5.366.592-11.175 5.459-13.985L67.212 291.1a193.48 193.48 0 0 1 0-70.199l-42.616-24.599c-4.867-2.809-7.126-8.618-5.459-13.985 11.07-35.642 29.97-67.842 54.689-94.586a12.016 12.016 0 0 1 14.832-2.254l42.584 24.595a191.577 191.577 0 0 1 60.759-35.13V25.759a12.01 12.01 0 0 1 9.377-11.718c34.956-7.85 72.499-8.256 109.219-.007 5.49 1.233 9.403 6.096 9.403 11.723v49.184a191.555 191.555 0 0 1 60.759 35.13l42.584-24.595a12.016 12.016 0 0 1 14.832 2.254c24.718 26.744 43.619 58.944 54.689 94.586 1.667 5.366-.592 11.175-5.459 13.985L444.788 220.9a193.485 193.485 0 0 1 0 70.2zM336 256c0-44.112-35.888-80-80-80s-80 35.888-80 80 35.888 80 80 80 80-35.888 80-80z"],
    "cogs": [640, 512, [], "f085", "M512.1 191l-8.2 14.3c-3 5.3-9.4 7.5-15.1 5.4-11.8-4.4-22.6-10.7-32.1-18.6-4.6-3.8-5.8-10.5-2.8-15.7l8.2-14.3c-6.9-8-12.3-17.3-15.9-27.4h-16.5c-6 0-11.2-4.3-12.2-10.3-2-12-2.1-24.6 0-37.1 1-6 6.2-10.4 12.2-10.4h16.5c3.6-10.1 9-19.4 15.9-27.4l-8.2-14.3c-3-5.2-1.9-11.9 2.8-15.7 9.5-7.9 20.4-14.2 32.1-18.6 5.7-2.1 12.1.1 15.1 5.4l8.2 14.3c10.5-1.9 21.2-1.9 31.7 0L552 6.3c3-5.3 9.4-7.5 15.1-5.4 11.8 4.4 22.6 10.7 32.1 18.6 4.6 3.8 5.8 10.5 2.8 15.7l-8.2 14.3c6.9 8 12.3 17.3 15.9 27.4h16.5c6 0 11.2 4.3 12.2 10.3 2 12 2.1 24.6 0 37.1-1 6-6.2 10.4-12.2 10.4h-16.5c-3.6 10.1-9 19.4-15.9 27.4l8.2 14.3c3 5.2 1.9 11.9-2.8 15.7-9.5 7.9-20.4 14.2-32.1 18.6-5.7 2.1-12.1-.1-15.1-5.4l-8.2-14.3c-10.4 1.9-21.2 1.9-31.7 0zm-10.5-58.8c38.5 29.6 82.4-14.3 52.8-52.8-38.5-29.7-82.4 14.3-52.8 52.8zM386.3 286.1l33.7 16.8c10.1 5.8 14.5 18.1 10.5 29.1-8.9 24.2-26.4 46.4-42.6 65.8-7.4 8.9-20.2 11.1-30.3 5.3l-29.1-16.8c-16 13.7-34.6 24.6-54.9 31.7v33.6c0 11.6-8.3 21.6-19.7 23.6-24.6 4.2-50.4 4.4-75.9 0-11.5-2-20-11.9-20-23.6V418c-20.3-7.2-38.9-18-54.9-31.7L74 403c-10 5.8-22.9 3.6-30.3-5.3-16.2-19.4-33.3-41.6-42.2-65.7-4-10.9.4-23.2 10.5-29.1l33.3-16.8c-3.9-20.9-3.9-42.4 0-63.4L12 205.8c-10.1-5.8-14.6-18.1-10.5-29 8.9-24.2 26-46.4 42.2-65.8 7.4-8.9 20.2-11.1 30.3-5.3l29.1 16.8c16-13.7 34.6-24.6 54.9-31.7V57.1c0-11.5 8.2-21.5 19.6-23.5 24.6-4.2 50.5-4.4 76-.1 11.5 2 20 11.9 20 23.6v33.6c20.3 7.2 38.9 18 54.9 31.7l29.1-16.8c10-5.8 22.9-3.6 30.3 5.3 16.2 19.4 33.2 41.6 42.1 65.8 4 10.9.1 23.2-10 29.1l-33.7 16.8c3.9 21 3.9 42.5 0 63.5zm-117.6 21.1c59.2-77-28.7-164.9-105.7-105.7-59.2 77 28.7 164.9 105.7 105.7zm243.4 182.7l-8.2 14.3c-3 5.3-9.4 7.5-15.1 5.4-11.8-4.4-22.6-10.7-32.1-18.6-4.6-3.8-5.8-10.5-2.8-15.7l8.2-14.3c-6.9-8-12.3-17.3-15.9-27.4h-16.5c-6 0-11.2-4.3-12.2-10.3-2-12-2.1-24.6 0-37.1 1-6 6.2-10.4 12.2-10.4h16.5c3.6-10.1 9-19.4 15.9-27.4l-8.2-14.3c-3-5.2-1.9-11.9 2.8-15.7 9.5-7.9 20.4-14.2 32.1-18.6 5.7-2.1 12.1.1 15.1 5.4l8.2 14.3c10.5-1.9 21.2-1.9 31.7 0l8.2-14.3c3-5.3 9.4-7.5 15.1-5.4 11.8 4.4 22.6 10.7 32.1 18.6 4.6 3.8 5.8 10.5 2.8 15.7l-8.2 14.3c6.9 8 12.3 17.3 15.9 27.4h16.5c6 0 11.2 4.3 12.2 10.3 2 12 2.1 24.6 0 37.1-1 6-6.2 10.4-12.2 10.4h-16.5c-3.6 10.1-9 19.4-15.9 27.4l8.2 14.3c3 5.2 1.9 11.9-2.8 15.7-9.5 7.9-20.4 14.2-32.1 18.6-5.7 2.1-12.1-.1-15.1-5.4l-8.2-14.3c-10.4 1.9-21.2 1.9-31.7 0zM501.6 431c38.5 29.6 82.4-14.3 52.8-52.8-38.5-29.6-82.4 14.3-52.8 52.8z"],
    "columns": [512, 512, [], "f0db", "M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM224 416H64V160h160v256zm224 0H288V160h160v256z"],
    "comment": [576, 512, [], "f075", "M576 240c0 115-129 208-288 208-48.3 0-93.9-8.6-133.9-23.8-40.3 31.2-89.8 50.3-142.4 55.7-5.2.6-10.2-2.8-11.5-7.7-1.3-5 2.7-8.1 6.6-11.8 19.3-18.4 42.7-32.8 51.9-94.6C21.9 330.9 0 287.3 0 240 0 125.1 129 32 288 32s288 93.1 288 208z"],
    "comment-alt": [576, 512, [], "f27a", "M576 240c0 115-129 208-288 208-48.3 0-93.9-8.6-133.9-23.8-40.3 31.2-89.8 50.3-142.4 55.7-5.2.6-10.2-2.8-11.5-7.7-1.3-5 2.7-8.1 6.6-11.8 19.3-18.4 42.7-32.8 51.9-94.6C21.9 330.9 0 287.3 0 240 0 125.1 129 32 288 32s288 93.1 288 208zm-416-48c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48zm128 0c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48zm128 0c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48z"],
    "comments": [576, 512, [], "f086", "M224 358.857c-37.599 0-73.027-6.763-104.143-18.7-31.375 24.549-69.869 39.508-110.764 43.796a8.632 8.632 0 0 1-.89.047c-3.736 0-7.111-2.498-8.017-6.061-.98-3.961 2.088-6.399 5.126-9.305 15.017-14.439 33.222-25.79 40.342-74.297C17.015 266.886 0 232.622 0 195.429 0 105.16 100.297 32 224 32s224 73.159 224 163.429c-.001 90.332-100.297 163.428-224 163.428zm347.067 107.174c-13.944-13.127-30.849-23.446-37.46-67.543 68.808-64.568 52.171-156.935-37.674-207.065.031 1.334.066 2.667.066 4.006 0 122.493-129.583 216.394-284.252 211.222 38.121 30.961 93.989 50.492 156.252 50.492 34.914 0 67.811-6.148 96.704-17 29.134 22.317 64.878 35.916 102.853 39.814 3.786.395 7.363-1.973 8.27-5.467.911-3.601-1.938-5.817-4.759-8.459z"],
    "compass": [512, 512, [], "f14e", "M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM307.446 120.844l-102.642 97.779a23.997 23.997 0 0 0-6.772 11.729l-33.359 137.779c-5.68 23.459 22.777 39.318 39.88 23.024l102.64-97.779a23.99 23.99 0 0 0 6.772-11.729l33.359-137.779c5.618-23.198-22.591-39.493-39.878-23.024zM256 224c-17.673 0-32 14.327-32 32s14.327 32 32 32 32-14.327 32-32-14.327-32-32-32z"],
    "compress": [448, 512, [], "f066", "M436 192H312c-13.3 0-24-10.7-24-24V44c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v84h84c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm-276-24V44c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v84H12c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h124c13.3 0 24-10.7 24-24zm0 300V344c0-13.3-10.7-24-24-24H12c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h84v84c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-84h84c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12H312c-13.3 0-24 10.7-24 24v124c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12z"],
    "compress-wide": [512, 512, [], "f326", "M500 224H376c-13.3 0-24-10.7-24-24V76c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v84h84c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm-340-24V76c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v84H12c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h124c13.3 0 24-10.7 24-24zm0 236V312c0-13.3-10.7-24-24-24H12c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h84v84c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm256 0v-84h84c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12H376c-13.3 0-24 10.7-24 24v124c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12z"],
    "copy": [448, 512, [], "f0c5", "M320 448v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V120c0-13.255 10.745-24 24-24h72v296c0 30.879 25.121 56 56 56h168zm0-344V0H152c-13.255 0-24 10.745-24 24v368c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24V128H344c-13.2 0-24-10.8-24-24zm120.971-31.029L375.029 7.029A24 24 0 0 0 358.059 0H352v96h96v-6.059a24 24 0 0 0-7.029-16.97z"],
    "copyright": [512, 512, [], "f1f9", "M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm117.134 346.753c-1.592 1.867-39.776 45.731-109.851 45.731-84.692 0-144.484-63.26-144.484-145.567 0-81.303 62.004-143.401 143.762-143.401 66.957 0 101.965 37.315 103.422 38.904a12 12 0 0 1 1.238 14.623l-22.38 34.655c-4.049 6.267-12.774 7.351-18.234 2.295-.233-.214-26.529-23.88-61.88-23.88-46.116 0-73.916 33.575-73.916 76.082 0 39.602 25.514 79.692 74.277 79.692 38.697 0 65.28-28.338 65.544-28.625 5.132-5.565 14.059-5.033 18.508 1.053l24.547 33.572a12.001 12.001 0 0 1-.553 14.866z"],
    "credit-card": [576, 512, [], "f09d", "M0 432c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V256H0v176zm192-68c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H204c-6.6 0-12-5.4-12-12v-40zm-128 0c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM576 80v48H0V80c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48z"],
    "credit-card-blank": [576, 512, [], "f389", "M528 40H48C21.5 40 0 61.5 0 88v352c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V88c0-26.5-21.5-48-48-48zM160 404c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12v40zm192 0c0 6.6-5.4 12-12 12H204c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12v40z"],
    "credit-card-front": [576, 512, [], "f38a", "M528 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM192 268c0-6.6 5.4-12 12-12h64c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-64c-6.6 0-12-5.4-12-12v-40zm-32 136c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12v8zm16-96c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h88c6.6 0 12 5.4 12 12v40zm176 96c0 6.6-5.4 12-12 12H204c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12v8zm32-96c0 6.6-5.4 12-12 12h-64c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h64c6.6 0 12 5.4 12 12v40zm128 0c0 6.6-5.4 12-12 12h-88c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h88c6.6 0 12 5.4 12 12v40zm0-140c0 13.3-10.7 24-24 24h-80c-13.3 0-24-10.7-24-24v-48c0-13.3 10.7-24 24-24h80c13.3 0 24 10.7 24 24v48z"],
    "crop": [512, 512, [], "f125", "M488 352h-40V109.3l57-57c9.4-9.4 9.4-24.6 0-33.9L493.7 7c-9.4-9.4-24.6-9.4-33.9 0l-57 57H160V24c0-13.3-10.7-24-24-24H88C74.7 0 64 10.7 64 24v40H24C10.7 64 0 74.7 0 88v48c0 13.3 10.7 24 24 24h40v264c0 13.3 10.7 24 24 24h264v40c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24v-40h40c13.3 0 24-10.7 24-24v-48c0-13.3-10.7-24-24-24zM306.7 160L160 306.7V160h146.7zM205.3 352L352 205.3V352H205.3z"],
    "crosshairs": [512, 512, [], "f05b", "M500 224h-30.364C455.724 130.325 381.675 56.276 288 42.364V12c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v30.364C130.325 56.276 56.276 130.325 42.364 224H12c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h30.364C56.276 381.675 130.325 455.724 224 469.636V500c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12v-30.364C381.675 455.724 455.724 381.675 469.636 288H500c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12zM288 404.634V364c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40.634C165.826 392.232 119.783 346.243 107.366 288H148c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-40.634C119.768 165.826 165.757 119.783 224 107.366V148c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12v-40.634C346.174 119.768 392.217 165.757 404.634 224H364c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40.634C392.232 346.174 346.243 392.217 288 404.634zM288 256c0 17.673-14.327 32-32 32s-32-14.327-32-32c0-17.673 14.327-32 32-32s32 14.327 32 32z"],
    "cube": [512, 512, [], "f1b2", "M239.1 6.3l-208 78c-18.7 7-31.1 25-31.1 45v225.1c0 18.2 10.3 34.8 26.5 42.9l208 104c13.5 6.8 29.4 6.8 42.9 0l208-104c16.3-8.1 26.5-24.8 26.5-42.9V129.3c0-20-12.4-37.9-31.1-44.9l-208-78C262 2.2 250 2.2 239.1 6.3zM256 68.4l192 72v1.1l-192 78-192-78v-1.1l192-72zm32 356V275.5l160-65v133.9l-160 80z"],
    "cubes": [512, 512, [], "f1b3", "M488.6 250.2L392 214V105.5c0-15-9.3-28.4-23.4-33.7l-100-37.5c-8.1-3.1-17.1-3.1-25.3 0l-100 37.5c-14.1 5.3-23.4 18.7-23.4 33.7V214l-96.6 36.2C9.3 255.5 0 268.9 0 283.9V394c0 13.6 7.7 26.1 19.9 32.2l100 50c10.1 5.1 22.1 5.1 32.2 0l103.9-52 103.9 52c10.1 5.1 22.1 5.1 32.2 0l100-50c12.2-6.1 19.9-18.6 19.9-32.2V283.9c0-15-9.3-28.4-23.4-33.7zM358 214.8l-85 31.9v-68.2l85-37v73.3zM154 104.1l102-38.2 102 38.2v.6l-102 41.4-102-41.4v-.6zm84 291.1l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6zm240 112l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6z"],
    "cut": [448, 512, [], "f0c4", "M444.485 422.426c4.689 4.689 4.684 12.287 0 16.971-32.804 32.804-85.991 32.804-118.795 0L210.176 323.883l-24.859 24.859C189.63 359.657 192 371.552 192 384c0 53.019-42.981 96-96 96S0 437.019 0 384s42.981-96 96-96c4.536 0 8.995.322 13.363.93l32.93-32.93-32.93-32.93c-4.368.608-8.827.93-13.363.93-53.019 0-96-42.981-96-96s42.981-96 96-96 96 42.981 96 96c0 12.448-2.37 24.343-6.682 35.258l24.859 24.859L325.69 72.603c32.804-32.804 85.991-32.804 118.795 0 4.684 4.684 4.689 12.282 0 16.971L278.059 256l166.426 166.426zM96 96c-17.645 0-32 14.355-32 32s14.355 32 32 32 32-14.355 32-32-14.355-32-32-32m0 256c-17.645 0-32 14.355-32 32s14.355 32 32 32 32-14.355 32-32-14.355-32-32-32m112-108c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12z"],
    "database": [448, 512, [], "f1c0", "M448 73.143v45.714C448 159.143 347.667 192 224 192S0 159.143 0 118.857V73.143C0 32.857 100.333 0 224 0s224 32.857 224 73.143zM448 176v102.857C448 319.143 347.667 352 224 352S0 319.143 0 278.857V176c48.125 33.143 136.208 48.572 224 48.572S399.874 209.143 448 176zm0 160v102.857C448 479.143 347.667 512 224 512S0 479.143 0 438.857V336c48.125 33.143 136.208 48.572 224 48.572S399.874 369.143 448 336z"],
    "deaf": [512, 512, [], "f2a4", "M216 260c0 15.464-12.536 28-28 28s-28-12.536-28-28c0-44.112 35.888-80 80-80s80 35.888 80 80c0 15.464-12.536 28-28 28s-28-12.536-28-28c0-13.234-10.767-24-24-24s-24 10.766-24 24zm24-176c-97.047 0-176 78.953-176 176 0 15.464 12.536 28 28 28s28-12.536 28-28c0-66.168 53.832-120 120-120s120 53.832 120 120c0 75.164-71.009 70.311-71.997 143.622L288 404c0 28.673-23.327 52-52 52-15.464 0-28 12.536-28 28s12.536 28 28 28c59.475 0 107.876-48.328 108-107.774.595-34.428 72-48.24 72-144.226 0-97.047-78.953-176-176-176zm268.485-52.201L480.2 3.515c-4.687-4.686-12.284-4.686-16.971 0L376.2 90.544c-4.686 4.686-4.686 12.284 0 16.971l28.285 28.285c4.686 4.686 12.284 4.686 16.97 0l87.03-87.029c4.687-4.688 4.687-12.286 0-16.972zM168.97 314.745c-4.686-4.686-12.284-4.686-16.97 0L3.515 463.23c-4.686 4.686-4.686 12.284 0 16.971L31.8 508.485c4.687 4.686 12.284 4.686 16.971 0L197.256 360c4.686-4.686 4.686-12.284 0-16.971l-28.286-28.284z"],
    "desktop": [576, 512, [], "f108", "M528 0H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h192l-16 48h-72c-13.3 0-24 10.7-24 24s10.7 24 24 24h272c13.3 0 24-10.7 24-24s-10.7-24-24-24h-72l-16-48h192c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-16 352H64V64h448v288z"],
    "desktop-alt": [576, 512, [], "f390", "M528 0H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h192l-16 48h-72c-13.3 0-24 10.7-24 24s10.7 24 24 24h272c13.3 0 24-10.7 24-24s-10.7-24-24-24h-72l-16-48h192c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-16 288H64V64h448v224z"],
    "diamond": [448, 512, [], "f219", "M242.2 8.3c-9.6-11.1-26.8-11.1-36.4 0l-200 232c-7.8 9-7.8 22.3 0 31.3l200 232c9.6 11.1 26.8 11.1 36.4 0l200-232c7.8-9 7.8-22.3 0-31.3l-200-232z"],
    "dollar-sign": [320, 512, [], "f155", "M113.411 169.375c0-23.337 21.536-38.417 54.865-38.417 26.726 0 54.116 12.263 76.461 28.333 5.88 4.229 14.13 2.354 17.575-4.017l23.552-43.549c2.649-4.898 1.596-10.991-2.575-14.68-24.281-21.477-59.135-34.09-91.289-37.806V12c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v49.832c-58.627 13.29-97.299 55.917-97.299 108.639 0 123.533 184.765 110.81 184.765 169.414 0 19.823-16.311 41.158-52.124 41.158-30.751 0-62.932-15.88-87.848-35.887-5.31-4.264-13.082-3.315-17.159 2.14l-30.389 40.667c-3.627 4.854-3.075 11.657 1.302 15.847 24.049 23.02 59.249 41.255 98.751 47.973V500c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12v-47.438c65.72-10.215 106.176-59.186 106.176-116.516.001-119.688-184.764-103.707-184.764-166.671z"],
    "dot-circle": [512, 512, [], "f192", "M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm80 248c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80z"],
    "download": [512, 512, [], "f019", "M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"],
    "edit": [576, 512, [], "f044", "M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"],
    "eject": [448, 512, [], "f052", "M448 384v64c0 17.673-14.327 32-32 32H32c-17.673 0-32-14.327-32-32v-64c0-17.673 14.327-32 32-32h384c17.673 0 32 14.327 32 32zM48.053 320h351.886c41.651 0 63.581-49.674 35.383-80.435L259.383 47.558c-19.014-20.743-51.751-20.744-70.767 0L12.67 239.565C-15.475 270.268 6.324 320 48.053 320z"],
    "ellipsis-h": [512, 512, [], "f141", "M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z"],
    "ellipsis-h-alt": [512, 512, [], "f39b", "M256 242c7.7 0 14 6.3 14 14s-6.3 14-14 14-14-6.3-14-14 6.3-14 14-14m0-58c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm176 58c7.7 0 14 6.3 14 14s-6.3 14-14 14-14-6.3-14-14 6.3-14 14-14m0-58c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zM80 242c7.7 0 14 6.3 14 14s-6.3 14-14 14-14-6.3-14-14 6.3-14 14-14m0-58c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z"],
    "ellipsis-v": [192, 512, [], "f142", "M96 184c39.8 0 72 32.2 72 72s-32.2 72-72 72-72-32.2-72-72 32.2-72 72-72zM24 80c0 39.8 32.2 72 72 72s72-32.2 72-72S135.8 8 96 8 24 40.2 24 80zm0 352c0 39.8 32.2 72 72 72s72-32.2 72-72-32.2-72-72-72-72 32.2-72 72z"],
    "ellipsis-v-alt": [192, 512, [], "f39c", "M96 242c7.7 0 14 6.3 14 14s-6.3 14-14 14-14-6.3-14-14 6.3-14 14-14m0-58c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm0-118c7.7 0 14 6.3 14 14s-6.3 14-14 14-14-6.3-14-14 6.3-14 14-14m0-58C56.2 8 24 40.2 24 80s32.2 72 72 72 72-32.2 72-72S135.8 8 96 8zm0 410c7.7 0 14 6.3 14 14s-6.3 14-14 14-14-6.3-14-14 6.3-14 14-14m0-58c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z"],
    "envelope": [512, 512, [], "f0e0", "M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"],
    "envelope-open": [512, 512, [], "f2b6", "M512 464c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V200.724a48 48 0 0 1 18.387-37.776c24.913-19.529 45.501-35.365 164.2-121.511C199.412 29.17 232.797-.347 256 .003c23.198-.354 56.596 29.172 73.413 41.433 118.687 86.137 139.303 101.995 164.2 121.512A48 48 0 0 1 512 200.724V464zm-65.666-196.605c-2.563-3.728-7.7-4.595-11.339-1.907-22.845 16.873-55.462 40.705-105.582 77.079-16.825 12.266-50.21 41.781-73.413 41.43-23.211.344-56.559-29.143-73.413-41.43-50.114-36.37-82.734-60.204-105.582-77.079-3.639-2.688-8.776-1.821-11.339 1.907l-9.072 13.196a7.998 7.998 0 0 0 1.839 10.967c22.887 16.899 55.454 40.69 105.303 76.868 20.274 14.781 56.524 47.813 92.264 47.573 35.724.242 71.961-32.771 92.263-47.573 49.85-36.179 82.418-59.97 105.303-76.868a7.998 7.998 0 0 0 1.839-10.967l-9.071-13.196z"],
    "envelope-square": [448, 512, [], "f199", "M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM178.117 262.104C87.429 196.287 88.353 196.121 64 177.167V152c0-13.255 10.745-24 24-24h272c13.255 0 24 10.745 24 24v25.167c-24.371 18.969-23.434 19.124-114.117 84.938-10.5 7.655-31.392 26.12-45.883 25.894-14.503.218-35.367-18.227-45.883-25.895zM384 217.775V360c0 13.255-10.745 24-24 24H88c-13.255 0-24-10.745-24-24V217.775c13.958 10.794 33.329 25.236 95.303 70.214 14.162 10.341 37.975 32.145 64.694 32.01 26.887.134 51.037-22.041 64.72-32.025 61.958-44.965 81.325-59.406 95.283-70.199z"],
    "eraser": [512, 512, [], "f12d", "M497.941 273.941c18.745-18.745 18.745-49.137 0-67.882l-160-160c-18.745-18.745-49.136-18.746-67.883 0l-256 256c-18.745 18.745-18.745 49.137 0 67.882l96 96A48.004 48.004 0 0 0 144 480h356c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12H355.883l142.058-142.059zm-302.627-62.627l137.373 137.373L265.373 416H150.628l-80-80 124.686-124.686z"],
    "euro-sign": [320, 512, [], "f153", "M310.706 413.765c-1.314-6.63-7.835-10.872-14.424-9.369-10.692 2.439-27.422 5.413-45.426 5.413-56.763 0-101.929-34.79-121.461-85.449h113.689a12 12 0 0 0 11.708-9.369l6.373-28.36c1.686-7.502-4.019-14.631-11.708-14.631H115.22c-1.21-14.328-1.414-28.287.137-42.245H261.95a12 12 0 0 0 11.723-9.434l6.512-29.755c1.638-7.484-4.061-14.566-11.723-14.566H130.184c20.633-44.991 62.69-75.03 117.619-75.03 14.486 0 28.564 2.25 37.851 4.145 6.216 1.268 12.347-2.498 14.002-8.623l11.991-44.368c1.822-6.741-2.465-13.616-9.326-14.917C290.217 34.912 270.71 32 249.635 32 152.451 32 74.03 92.252 45.075 176H12c-6.627 0-12 5.373-12 12v29.755c0 6.627 5.373 12 12 12h21.569c-1.009 13.607-1.181 29.287-.181 42.245H12c-6.627 0-12 5.373-12 12v28.36c0 6.627 5.373 12 12 12h30.114C67.139 414.692 145.264 480 249.635 480c26.301 0 48.562-4.544 61.101-7.788 6.167-1.595 10.027-7.708 8.788-13.957l-8.818-44.49z"],
    "exchange": [512, 512, [], "f0ec", "M0 168v-16c0-13.255 10.745-24 24-24h381.97l-30.467-27.728c-9.815-9.289-10.03-24.846-.474-34.402l10.84-10.84c9.373-9.373 24.568-9.373 33.941 0l82.817 82.343c12.497 12.497 12.497 32.758 0 45.255l-82.817 82.343c-9.373 9.373-24.569 9.373-33.941 0l-10.84-10.84c-9.556-9.556-9.341-25.114.474-34.402L405.97 192H24c-13.255 0-24-10.745-24-24zm488 152H106.03l30.467-27.728c9.815-9.289 10.03-24.846.474-34.402l-10.84-10.84c-9.373-9.373-24.568-9.373-33.941 0L9.373 329.373c-12.497 12.497-12.497 32.758 0 45.255l82.817 82.343c9.373 9.373 24.569 9.373 33.941 0l10.84-10.84c9.556-9.556 9.341-25.113-.474-34.402L106.03 384H488c13.255 0 24-10.745 24-24v-16c0-13.255-10.745-24-24-24z"],
    "exchange-alt": [512, 512, [], "f362", "M0 168v-16c0-13.255 10.745-24 24-24h360V80c0-21.367 25.899-32.042 40.971-16.971l80 80c9.372 9.373 9.372 24.569 0 33.941l-80 80C409.956 271.982 384 261.456 384 240v-48H24c-13.255 0-24-10.745-24-24zm488 152H128v-48c0-21.314-25.862-32.08-40.971-16.971l-80 80c-9.372 9.373-9.372 24.569 0 33.941l80 80C102.057 463.997 128 453.437 128 432v-48h360c13.255 0 24-10.745 24-24v-16c0-13.255-10.745-24-24-24z"],
    "exclamation": [192, 512, [], "f12a", "M176 432c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80zM25.26 25.199l13.6 272C39.499 309.972 50.041 320 62.83 320h66.34c12.789 0 23.331-10.028 23.97-22.801l13.6-272C167.425 11.49 156.496 0 142.77 0H49.23C35.504 0 24.575 11.49 25.26 25.199z"],
    "exclamation-circle": [512, 512, [], "f06a", "M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"],
    "exclamation-square": [448, 512, [], "f321", "M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm-207.691 96h63.382c6.884 0 12.357 5.78 11.982 12.654l-7.418 136c-.347 6.364-5.609 11.346-11.982 11.346h-48.546c-6.373 0-11.635-4.982-11.982-11.346l-7.418-136c-.375-6.874 5.098-12.654 11.982-12.654zM224 398c-25.405 0-46-20.595-46-46s20.595-46 46-46 46 20.595 46 46-20.595 46-46 46z"],
    "exclamation-triangle": [576, 512, [], "f071", "M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"],
    "expand": [448, 512, [], "f065", "M0 180V56c0-13.3 10.7-24 24-24h124c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H64v84c0 6.6-5.4 12-12 12H12c-6.6 0-12-5.4-12-12zM288 44v40c0 6.6 5.4 12 12 12h84v84c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12V56c0-13.3-10.7-24-24-24H300c-6.6 0-12 5.4-12 12zm148 276h-40c-6.6 0-12 5.4-12 12v84h-84c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h124c13.3 0 24-10.7 24-24V332c0-6.6-5.4-12-12-12zM160 468v-40c0-6.6-5.4-12-12-12H64v-84c0-6.6-5.4-12-12-12H12c-6.6 0-12 5.4-12 12v124c0 13.3 10.7 24 24 24h124c6.6 0 12-5.4 12-12z"],
    "expand-arrows": [448, 512, [], "f31d", "M448 312v136c0 17.7-14.3 32-32 32H280c-13.3 0-24-10.7-24-24v-15.3c0-13.5 11.2-24.4 24.7-24l66.3 1.9-123-123-123 123 66.3-1.9c13.5-.4 24.7 10.5 24.7 24V456c0 13.3-10.7 24-24 24H32c-17.7 0-32-14.3-32-32V312c0-13.3 10.7-24 24-24h15.3c13.5 0 24.4 11.2 24 24.7L61.4 379l123-123-123-123 1.9 66.3c.4 13.5-10.5 24.7-24 24.7H24c-13.3 0-24-10.7-24-24V64c0-17.7 14.3-32 32-32h136c13.3 0 24 10.7 24 24v15.3c0 13.5-11.2 24.4-24.7 24L101 93.4l123 123 123-123-66.3 1.9c-13.5.4-24.7-10.5-24.7-24V56c0-13.3 10.7-24 24-24h136c17.7 0 32 14.3 32 32v136c0 13.3-10.7 24-24 24h-15.3c-13.5 0-24.4-11.2-24-24.7l1.9-66.3-123 123 123 123-1.9-66.3c-.4-13.5 10.5-24.7 24-24.7H424c13.3 0 24 10.7 24 24z"],
    "expand-arrows-alt": [448, 512, [], "f31e", "M448.1 344v112c0 13.3-10.7 24-24 24h-112c-21.4 0-32.1-25.9-17-41l36.2-36.2L224 295.6 116.8 402.9 153 439c15.1 15.1 4.4 41-17 41H24c-13.3 0-24-10.7-24-24V344c0-21.4 25.9-32.1 41-17l36.2 36.2L184.5 256 77.2 148.7 41 185c-15.1 15.1-41 4.4-41-17V56c0-13.3 10.7-24 24-24h112c21.4 0 32.1 25.9 17 41l-36.2 36.2L224 216.4l107.3-107.3L295.1 73c-15.1-15.1-4.4-41 17-41h112c13.3 0 24 10.7 24 24v112c0 21.4-25.9 32.1-41 17l-36.2-36.2L263.6 256l107.3 107.3 36.2-36.2c15.1-15.2 41-4.5 41 16.9z"],
    "expand-wide": [512, 512, [], "f320", "M0 212V88c0-13.3 10.7-24 24-24h124c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H64v84c0 6.6-5.4 12-12 12H12c-6.6 0-12-5.4-12-12zM352 76v40c0 6.6 5.4 12 12 12h84v84c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12V88c0-13.3-10.7-24-24-24H364c-6.6 0-12 5.4-12 12zm148 212h-40c-6.6 0-12 5.4-12 12v84h-84c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h124c13.3 0 24-10.7 24-24V300c0-6.6-5.4-12-12-12zM160 436v-40c0-6.6-5.4-12-12-12H64v-84c0-6.6-5.4-12-12-12H12c-6.6 0-12 5.4-12 12v124c0 13.3 10.7 24 24 24h124c6.6 0 12-5.4 12-12z"],
    "external-link": [576, 512, [], "f08e", "M448 279.196V464c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h248a24 24 0 0 1 16.97 7.029l16 16C344.09 102.149 333.382 128 312 128H64v320h320V295.196c0-6.365 2.529-12.47 7.029-16.971l16-16C422.148 247.106 448 257.814 448 279.196zM576 37.333C576 16.715 559.285 0 538.667 0H380c-15.464 0-28 12.536-28 28v17.885c0 15.766 13.011 28.424 28.772 27.989l67.203-1.906L199.09 319.09c-9.429 9.363-9.457 24.605-.061 34.001l23.879 23.879c9.396 9.396 24.639 9.369 34.001-.06l247.122-248.885-1.906 67.203c-.434 15.76 12.224 28.772 27.99 28.772H548c15.464 0 28-12.536 28-28V37.333z"],
    "external-link-alt": [576, 512, [], "f35d", "M576 24v127.984c0 21.461-25.96 31.98-40.971 16.971l-35.707-35.709-243.523 243.523c-9.373 9.373-24.568 9.373-33.941 0l-22.627-22.627c-9.373-9.373-9.373-24.569 0-33.941L442.756 76.676l-35.703-35.705C391.982 25.9 402.656 0 424.024 0H552c13.255 0 24 10.745 24 24zM407.029 270.794l-16 16A23.999 23.999 0 0 0 384 303.765V448H64V128h264a24.003 24.003 0 0 0 16.97-7.029l16-16C376.089 89.851 365.381 64 344 64H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V287.764c0-21.382-25.852-32.09-40.971-16.97z"],
    "external-link-square": [448, 512, [], "f14c", "M448 80v352c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48zm-64 47.111C384 109.929 370.071 96 352.889 96H220.667c-12.887 0-23.333 10.447-23.333 23.334v14.904c0 13.138 10.843 23.686 23.976 23.324l56.002-1.588L69.908 361.908c-7.858 7.802-7.88 20.504-.05 28.334l19.899 19.899c7.83 7.83 20.532 7.808 28.334-.05l205.935-207.404-1.588 56.003c-.362 13.133 10.186 23.976 23.324 23.976h14.904c12.887 0 23.334-10.447 23.334-23.333V127.111z"],
    "external-link-square-alt": [448, 512, [], "f360", "M448 80v352c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48zm-88 16H248.029c-21.313 0-32.08 25.861-16.971 40.971l31.984 31.987L67.515 364.485c-4.686 4.686-4.686 12.284 0 16.971l31.029 31.029c4.687 4.686 12.285 4.686 16.971 0l195.526-195.526 31.988 31.991C358.058 263.977 384 253.425 384 231.979V120c0-13.255-10.745-24-24-24z"],
    "eye": [576, 512, [], "f06e", "M569.354 231.631C512.969 135.949 407.81 72 288 72 168.14 72 63.004 135.994 6.646 231.631a47.999 47.999 0 0 0 0 48.739C63.031 376.051 168.19 440 288 440c119.86 0 224.996-63.994 281.354-159.631a47.997 47.997 0 0 0 0-48.738zM288 392c-75.162 0-136-60.827-136-136 0-75.162 60.826-136 136-136 75.162 0 136 60.826 136 136 0 75.162-60.826 136-136 136zm104-136c0 57.438-46.562 104-104 104s-104-46.562-104-104c0-17.708 4.431-34.379 12.236-48.973l-.001.032c0 23.651 19.173 42.823 42.824 42.823s42.824-19.173 42.824-42.823c0-23.651-19.173-42.824-42.824-42.824l-.032.001C253.621 156.431 270.292 152 288 152c57.438 0 104 46.562 104 104z"],
    "eye-dropper": [512, 512, [], "f1fb", "M177.38 206.64L39.03 344.97A24.01 24.01 0 0 0 32 361.94V424L0 480l32 32 56-32h62.06c6.36 0 12.47-2.53 16.97-7.03l138.35-138.33-128-128zm225.552 30.47l16.952 16.95c9.37 9.37 9.37 24.57 0 33.94l-40.973 40.97c-9.292 9.312-24.506 9.434-33.94 0L183.028 167.03c-9.37-9.37-9.37-24.57 0-33.94L224 92.12c9.289-9.309 24.502-9.438 33.94 0l16.992 16.99 82.606-82.601c35.19-35.19 92.5-35.5 128 0 40.49 48.08 29.66 98.34 0 128l-82.606 82.601z"],
    "eye-slash": [576, 512, [], "f070", "M286.693 391.984l32.579 46.542A333.958 333.958 0 0 1 288 440C168.19 440 63.031 376.051 6.646 280.369a47.999 47.999 0 0 1 0-48.739c24.023-40.766 56.913-75.775 96.024-102.537l57.077 81.539C154.736 224.82 152 240.087 152 256c0 74.736 60.135 135.282 134.693 135.984zm282.661-111.615c-31.667 53.737-78.747 97.46-135.175 125.475l.011.015 41.47 59.2c7.6 10.86 4.96 25.82-5.9 33.42l-13.11 9.18c-10.86 7.6-25.82 4.96-33.42-5.9L100.34 46.94c-7.6-10.86-4.96-25.82 5.9-33.42l13.11-9.18c10.86-7.6 25.82-4.96 33.42 5.9l51.038 72.617C230.68 75.776 258.905 72 288 72c119.81 0 224.969 63.949 281.354 159.631a48.002 48.002 0 0 1 0 48.738zM424 256c0-75.174-60.838-136-136-136-17.939 0-35.056 3.473-50.729 9.772l19.299 27.058c25.869-8.171 55.044-6.163 80.4 7.41h-.03c-23.65 0-42.82 19.17-42.82 42.82 0 23.626 19.147 42.82 42.82 42.82 23.65 0 42.82-19.17 42.82-42.82v-.03c18.462 34.49 16.312 77.914-8.25 110.95v.01l19.314 27.061C411.496 321.2 424 290.074 424 256zM262.014 356.727l-77.53-110.757c-5.014 52.387 29.314 98.354 77.53 110.757z"],
    "fast-backward": [512, 512, [], "f049", "M0 436V76c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v151.9L235.5 71.4C256.1 54.3 288 68.6 288 96v131.9L459.5 71.4C480.1 54.3 512 68.6 512 96v320c0 27.4-31.9 41.7-52.5 24.6L288 285.3V416c0 27.4-31.9 41.7-52.5 24.6L64 285.3V436c0 6.6-5.4 12-12 12H12c-6.6 0-12-5.4-12-12z"],
    "fast-forward": [512, 512, [], "f050", "M512 76v360c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12V284.1L276.5 440.6c-20.6 17.2-52.5 2.8-52.5-24.6V284.1L52.5 440.6C31.9 457.8 0 443.4 0 416V96c0-27.4 31.9-41.7 52.5-24.6L224 226.8V96c0-27.4 31.9-41.7 52.5-24.6L448 226.8V76c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12z"],
    "fax": [512, 512, [], "f1ac", "M128 144v320c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V144c0-26.51 21.49-48 48-48h32c26.51 0 48 21.49 48 48zm384 64v256c0 26.51-21.49 48-48 48H192c-26.51 0-48-21.49-48-48V40c0-22.091 17.909-40 40-40h207.432a39.996 39.996 0 0 1 28.284 11.716l48.569 48.569A39.999 39.999 0 0 1 480 88.568v74.174c18.641 6.591 32 24.36 32 45.258zm-320-16h240V96h-24c-13.203 0-24-10.797-24-24V48H192v144zm96 204c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12v-40zm0-128c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12v-40zm128 128c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12v-40zm0-128c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12v-40z"],
    "female": [256, 512, [], "f182", "M128 0c35.346 0 64 28.654 64 64s-28.654 64-64 64c-35.346 0-64-28.654-64-64S92.654 0 128 0m119.283 354.179l-48-192A24 24 0 0 0 176 144h-11.36c-22.711 10.443-49.59 10.894-73.28 0H80a24 24 0 0 0-23.283 18.179l-48 192C4.935 369.305 16.383 384 32 384h56v104c0 13.255 10.745 24 24 24h32c13.255 0 24-10.745 24-24V384h56c15.591 0 27.071-14.671 23.283-29.821z"],
    "fighter-jet": [640, 512, [], "f0fb", "M544 224l-128-16-48-16h-24L227.158 44h39.509C278.333 44 288 41.375 288 38s-9.667-6-21.333-6H152v12h16v164h-48l-66.667-80H18.667L8 138.667V208h8v16h48v2.666l-64 8v42.667l64 8V288H16v16H8v69.333L18.667 384h34.667L120 304h48v164h-16v12h114.667c11.667 0 21.333-2.625 21.333-6s-9.667-6-21.333-6h-39.509L344 320h24l48-16 128-16c96-21.333 96-26.583 96-32 0-5.417 0-10.667-96-32z"],
    "file": [384, 512, [], "f15b", "M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm160-14.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z"],
    "file-alt": [384, 512, [], "f15c", "M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm64 236c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-64c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-72v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm96-114.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z"],
    "file-archive": [384, 512, [], "f1c6", "M224 136V0h-63.6v32h-32V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zM95.9 32h32v32h-32V32zm32.3 384c-33.2 0-58-30.4-51.4-62.9L96.4 256v-32h32v-32h-32v-32h32v-32h-32V96h32V64h32v32h-32v32h32v32h-32v32h32v32h-32v32h22.1c5.7 0 10.7 4.1 11.8 9.7l17.3 87.7c6.4 32.4-18.4 62.6-51.4 62.6zm32.7-53c0 14.9-14.5 27-32.4 27S96 378 96 363c0-14.9 14.5-27 32.4-27s32.5 12.1 32.5 27zM384 121.9v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z"],
    "file-audio": [384, 512, [], "f1c7", "M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm-64 268c0 10.7-12.9 16-20.5 8.5L104 376H76c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h28l35.5-36.5c7.6-7.6 20.5-2.2 20.5 8.5v136zm33.2-47.6c9.1-9.3 9.1-24.1 0-33.4-22.1-22.8 12.2-56.2 34.4-33.5 27.2 27.9 27.2 72.4 0 100.4-21.8 22.3-56.9-10.4-34.4-33.5zm86-117.1c54.4 55.9 54.4 144.8 0 200.8-21.8 22.4-57-10.3-34.4-33.5 36.2-37.2 36.3-96.5 0-133.8-22.1-22.8 12.3-56.3 34.4-33.5zM384 121.9v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z"],
    "file-check": [384, 512, [], "f316", "M384 121.941V128H256V0h6.059c6.365 0 12.47 2.529 16.971 7.029l97.941 97.941A24.005 24.005 0 0 1 384 121.941zM248 160h136v328c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V24C0 10.745 10.745 0 24 0h200v136c0 13.2 10.8 24 24 24zm65.296 109.732l-28.169-28.398c-4.667-4.705-12.265-4.736-16.97-.068L162.12 346.45l-45.98-46.352c-4.667-4.705-12.266-4.736-16.971-.068L70.772 328.2c-4.705 4.667-4.736 12.265-.068 16.97l82.601 83.269c4.667 4.705 12.265 4.736 16.97.068l142.953-141.805c4.705-4.667 4.736-12.265.068-16.97z"],
    "file-code": [384, 512, [], "f1c9", "M384 121.941V128H256V0h6.059c6.365 0 12.47 2.529 16.971 7.029l97.941 97.941A24.005 24.005 0 0 1 384 121.941zM248 160c-13.2 0-24-10.8-24-24V0H24C10.745 0 0 10.745 0 24v464c0 13.255 10.745 24 24 24h336c13.255 0 24-10.745 24-24V160H248zM123.206 400.505a5.4 5.4 0 0 1-7.633.246l-64.866-60.812a5.4 5.4 0 0 1 0-7.879l64.866-60.812a5.4 5.4 0 0 1 7.633.246l19.579 20.885a5.4 5.4 0 0 1-.372 7.747L101.65 336l40.763 35.874a5.4 5.4 0 0 1 .372 7.747l-19.579 20.884zm51.295 50.479l-27.453-7.97a5.402 5.402 0 0 1-3.681-6.692l61.44-211.626a5.402 5.402 0 0 1 6.692-3.681l27.452 7.97a5.4 5.4 0 0 1 3.68 6.692l-61.44 211.626a5.397 5.397 0 0 1-6.69 3.681zm160.792-111.045l-64.866 60.812a5.4 5.4 0 0 1-7.633-.246l-19.58-20.885a5.4 5.4 0 0 1 .372-7.747L284.35 336l-40.763-35.874a5.4 5.4 0 0 1-.372-7.747l19.58-20.885a5.4 5.4 0 0 1 7.633-.246l64.866 60.812a5.4 5.4 0 0 1-.001 7.879z"],
    "file-edit": [384, 512, [], "f31c", "M384 121.9v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9zM248 160h136v328c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V24C0 10.7 10.7 0 24 0h200v136c0 13.2 10.8 24 24 24zm-59.6 109.6l-95 95-5.4 48.2c-.7 6.4 4.7 11.9 11.2 11.2l48.2-5.4 95-95c2-2 2-5.2 0-7.2l-46.8-46.8c-2-2-5.2-2-7.2 0zm109.7-30.3l-25.4-25.4c-7.9-7.9-20.7-7.9-28.6 0l-26 26c-2 2-2 5.2 0 7.2l46.8 46.8c2 2 5.2 2 7.2 0l26-26c7.9-7.9 7.9-20.7 0-28.6z"],
    "file-excel": [384, 512, [], "f1c3", "M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm60.1 106.5L224 336l60.1 93.5c5.1 8-.6 18.5-10.1 18.5h-34.9c-4.4 0-8.5-2.4-10.6-6.3C208.9 405.5 192 373 192 373c-6.4 14.8-10 20-36.6 68.8-2.1 3.9-6.1 6.3-10.5 6.3H110c-9.5 0-15.2-10.5-10.1-18.5l60.3-93.5-60.3-93.5c-5.2-8 .6-18.5 10.1-18.5h34.8c4.4 0 8.5 2.4 10.6 6.3 26.1 48.8 20 33.6 36.6 68.5 0 0 6.1-11.7 36.6-68.5 2.1-3.9 6.2-6.3 10.6-6.3H274c9.5-.1 15.2 10.4 10.1 18.4zM384 121.9v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z"],
    "file-exclamation": [384, 512, [], "f31a", "M384 121.9v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9zm0 38.1v328c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V24C0 10.7 10.7 0 24 0h200v136c0 13.2 10.8 24 24 24h136zm-231.2 60.8l7.2 112c.4 6.3 5.6 11.2 12 11.2h40c6.3 0 11.6-4.9 12-11.2l7.2-112c.4-6.9-5-12.8-12-12.8h-54.4c-6.9 0-12.4 5.8-12 12.8zM232 400c0-22.1-17.9-40-40-40s-40 17.9-40 40 17.9 40 40 40 40-17.9 40-40z"],
    "file-image": [384, 512, [], "f1c5", "M384 121.941V128H256V0h6.059a24 24 0 0 1 16.97 7.029l97.941 97.941a24.002 24.002 0 0 1 7.03 16.971zM248 160c-13.2 0-24-10.8-24-24V0H24C10.745 0 0 10.745 0 24v464c0 13.255 10.745 24 24 24h336c13.255 0 24-10.745 24-24V160H248zm-135.455 16c26.51 0 48 21.49 48 48s-21.49 48-48 48-48-21.49-48-48 21.491-48 48-48zm208 240h-256l.485-48.485L104.545 328c4.686-4.686 11.799-4.201 16.485.485L160.545 368 264.06 264.485c4.686-4.686 12.284-4.686 16.971 0L320.545 304v112z"],
    "file-minus": [384, 512, [], "f318", "M384 121.9v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9zM248 160h136v328c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V24C0 10.7 10.7 0 24 0h200v136c0 13.2 10.8 24 24 24zm36 192c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12H100c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h184z"],
    "file-pdf": [384, 512, [], "f1c1", "M181.9 256.1c-5-16-4.9-46.9-2-46.9 8.4 0 7.6 36.9 2 46.9zm-1.7 47.2c-7.7 20.2-17.3 43.3-28.4 62.7 18.3-7 39-17.2 62.9-21.9-12.7-9.6-24.9-23.4-34.5-40.8zM86.1 428.1c0 .8 13.2-5.4 34.9-40.2-6.7 6.3-29.1 24.5-34.9 40.2zM248 160h136v328c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V24C0 10.7 10.7 0 24 0h200v136c0 13.2 10.8 24 24 24zm-8 171.8c-20-12.2-33.3-29-42.7-53.8 4.5-18.5 11.6-46.6 6.2-64.2-4.7-29.4-42.4-26.5-47.8-6.8-5 18.3-.4 44.1 8.1 77-11.6 27.6-28.7 64.6-40.8 85.8-.1 0-.1.1-.2.1-27.1 13.9-73.6 44.5-54.5 68 5.6 6.9 16 10 21.5 10 17.9 0 35.7-18 61.1-61.8 25.8-8.5 54.1-19.1 79-23.2 21.7 11.8 47.1 19.5 64 19.5 29.2 0 31.2-32 19.7-43.4-13.9-13.6-54.3-9.7-73.6-7.2zM377 105L279 7c-4.5-4.5-10.6-7-17-7h-6v128h128v-6.1c0-6.3-2.5-12.4-7-16.9zm-74.1 255.3c4.1-2.7-2.5-11.9-42.8-9 37.1 15.8 42.8 9 42.8 9z"],
    "file-plus": [384, 512, [], "f319", "M384 121.9v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9zM248 160h136v328c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V24C0 10.7 10.7 0 24 0h200v136c0 13.2 10.8 24 24 24zm48 140c0-6.6-5.4-12-12-12h-60v-60c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v60h-60c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h60v60c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-60h60c6.6 0 12-5.4 12-12v-40z"],
    "file-powerpoint": [384, 512, [], "f1c4", "M193.7 271.2c8.8 0 15.5 2.7 20.3 8.1 9.6 10.9 9.8 32.7-.2 44.1-4.9 5.6-11.9 8.5-21.1 8.5h-26.9v-60.7h27.9zM377 105L279 7c-4.5-4.5-10.6-7-17-7h-6v128h128v-6.1c0-6.3-2.5-12.4-7-16.9zm-153 31V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm53 165.2c0 90.3-88.8 77.6-111.1 77.6V436c0 6.6-5.4 12-12 12h-30.8c-6.6 0-12-5.4-12-12V236.2c0-6.6 5.4-12 12-12h81c44.5 0 72.9 32.8 72.9 77z"],
    "file-times": [384, 512, [], "f317", "M384 121.9v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9zM248 160h136v328c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V24C0 10.7 10.7 0 24 0h200v136c0 13.2 10.8 24 24 24zm-10.7 160l48.1-48.1c4.7-4.7 4.7-12.3 0-17l-28.3-28.3c-4.7-4.7-12.3-4.7-17 0L192 274.7l-48.1-48.1c-4.7-4.7-12.3-4.7-17 0l-28.3 28.3c-4.7 4.7-4.7 12.3 0 17l48.1 48.1-48.1 48.1c-4.7 4.7-4.7 12.3 0 17l28.3 28.3c4.7 4.7 12.3 4.7 17 0l48.1-48.1 48.1 48.1c4.7 4.7 12.3 4.7 17 0l28.3-28.3c4.7-4.7 4.7-12.3 0-17L237.3 320z"],
    "file-video": [384, 512, [], "f1c8", "M384 121.941V128H256V0h6.059c6.365 0 12.47 2.529 16.971 7.029l97.941 97.941A24.005 24.005 0 0 1 384 121.941zM224 136V0H24C10.745 0 0 10.745 0 24v464c0 13.255 10.745 24 24 24h336c13.255 0 24-10.745 24-24V160H248c-13.2 0-24-10.8-24-24zm96 144.016v111.963c0 21.445-25.943 31.998-40.971 16.971L224 353.941V392c0 13.255-10.745 24-24 24H88c-13.255 0-24-10.745-24-24V280c0-13.255 10.745-24 24-24h112c13.255 0 24 10.745 24 24v38.059l55.029-55.013c15.011-15.01 40.971-4.491 40.971 16.97z"],
    "file-word": [384, 512, [], "f1c2", "M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm57.1 120H305c7.7 0 13.4 7.1 11.7 14.7l-38 168c-1.2 5.5-6.1 9.3-11.7 9.3h-38c-5.5 0-10.3-3.8-11.6-9.1-25.8-103.5-20.8-81.2-25.6-110.5h-.5c-1.1 14.3-2.4 17.4-25.6 110.5-1.3 5.3-6.1 9.1-11.6 9.1H117c-5.6 0-10.5-3.9-11.7-9.4l-37.8-168c-1.7-7.5 4-14.6 11.7-14.6h24.5c5.7 0 10.7 4 11.8 9.7 15.6 78 20.1 109.5 21 122.2 1.6-10.2 7.3-32.7 29.4-122.7 1.3-5.4 6.1-9.1 11.7-9.1h29.1c5.6 0 10.4 3.8 11.7 9.2 24 100.4 28.8 124 29.6 129.4-.2-11.2-2.6-17.8 21.6-129.2 1-5.6 5.9-9.5 11.5-9.5zM384 121.9v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z"],
    "film": [512, 512, [], "f008", "M488 64h-8v20c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12V64H96v20c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12V64h-8C10.7 64 0 74.7 0 88v336c0 13.3 10.7 24 24 24h8v-20c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v20h320v-20c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v20h8c13.3 0 24-10.7 24-24V88c0-13.3-10.7-24-24-24zM96 372c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm272 208c0 6.6-5.4 12-12 12H156c-6.6 0-12-5.4-12-12v-96c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v96zm0-168c0 6.6-5.4 12-12 12H156c-6.6 0-12-5.4-12-12v-96c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v96zm112 152c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40z"],
    "film-alt": [512, 512, [], "f3a0", "M488 64h-8v20c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12V64H96v20c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12V64h-8C10.7 64 0 74.7 0 88v336c0 13.3 10.7 24 24 24h8v-20c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v20h320v-20c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v20h8c13.3 0 24-10.7 24-24V88c0-13.3-10.7-24-24-24zM96 372c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm384 192c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40z"],
    "filter": [512, 512, [], "f0b0", "M487.976 0H24.028C2.71 0-8.047 25.866 7.058 40.971L192 225.941V432c0 7.831 3.821 15.17 10.237 19.662l80 55.98C298.02 518.69 320 507.493 320 487.98V225.941l184.947-184.97C520.021 25.896 509.338 0 487.976 0z"],
    "fire": [384, 512, [], "f06d", "M216 23.858c0-23.802-30.653-32.765-44.149-13.038C48 191.851 224 200 224 288c0 35.629-29.114 64.458-64.85 63.994C123.98 351.538 96 322.22 96 287.046v-85.51c0-21.703-26.471-32.225-41.432-16.504C27.801 213.158 0 261.332 0 320c0 105.869 86.131 192 192 192s192-86.131 192-192c0-170.29-168-193.003-168-296.142z"],
    "fire-extinguisher": [448, 512, [], "f134", "M434.027 26.329l-168 28C254.693 56.218 256 67.8 256 72h-58.332C208.353 36.108 181.446 0 144 0c-39.435 0-66.368 39.676-52.228 76.203-52.039 13.051-75.381 54.213-90.049 90.884-4.923 12.307 1.063 26.274 13.37 31.197 12.317 4.926 26.279-1.075 31.196-13.37C75.058 112.99 106.964 120 168 120v27.076c-41.543 10.862-72 49.235-72 94.129V488c0 13.255 10.745 24 24 24h144c13.255 0 24-10.745 24-24V240c0-44.731-30.596-82.312-72-92.97V120h40c0 2.974-1.703 15.716 10.027 17.671l168 28C441.342 166.89 448 161.25 448 153.834V38.166c0-7.416-6.658-13.056-13.973-11.837zM144 72c-8.822 0-16-7.178-16-16s7.178-16 16-16 16 7.178 16 16-7.178 16-16 16z"],
    "flag": [512, 512, [], "f024", "M349.565 98.783C295.978 98.783 251.721 64 184.348 64c-24.955 0-47.309 4.384-68.045 12.013a55.947 55.947 0 0 0 3.586-23.562C118.117 24.015 94.806 1.206 66.338.048 34.345-1.254 8 24.296 8 56c0 19.026 9.497 35.825 24 45.945V488c0 13.255 10.745 24 24 24h16c13.255 0 24-10.745 24-24v-94.4c28.311-12.064 63.582-22.122 114.435-22.122 53.588 0 97.844 34.783 165.217 34.783 48.169 0 86.667-16.294 122.505-40.858C506.84 359.452 512 349.571 512 339.045v-243.1c0-23.393-24.269-38.87-45.485-29.016-34.338 15.948-76.454 31.854-116.95 31.854z"],
    "flag-checkered": [512, 512, [], "f11e", "M466.515 66.928C487.731 57.074 512 72.551 512 95.944v243.1c0 10.526-5.161 20.407-13.843 26.358-35.837 24.564-74.335 40.858-122.505 40.858-67.373 0-111.63-34.783-165.217-34.783-50.853 0-86.124 10.058-114.435 22.122V488c0 13.255-10.745 24-24 24H56c-13.255 0-24-10.745-24-24V101.945C17.497 91.825 8 75.026 8 56 8 24.296 34.345-1.254 66.338.048c28.468 1.158 51.779 23.968 53.551 52.404.52 8.342-.81 16.31-3.586 23.562C137.039 68.384 159.393 64 184.348 64c67.373 0 111.63 34.783 165.217 34.783 40.496 0 82.612-15.906 116.95-31.855zM96 134.63v70.49c29-10.67 51.18-17.83 73.6-20.91v-71.57c-23.5 2.17-40.44 9.79-73.6 21.99zm220.8 9.19c-26.417-4.672-49.886-13.979-73.6-21.34v67.42c24.175 6.706 47.566 16.444 73.6 22.31v-68.39zm-147.2 40.39v70.04c32.796-2.978 53.91-.635 73.6 3.8V189.9c-25.247-7.035-46.581-9.423-73.6-5.69zm73.6 142.23c26.338 4.652 49.732 13.927 73.6 21.34v-67.41c-24.277-6.746-47.54-16.45-73.6-22.32v68.39zM96 342.1c23.62-8.39 47.79-13.84 73.6-16.56v-71.29c-26.11 2.35-47.36 8.04-73.6 17.36v70.49zm368-221.6c-21.3 8.85-46.59 17.64-73.6 22.47v71.91c27.31-4.36 50.03-14.1 73.6-23.89V120.5zm0 209.96v-70.49c-22.19 14.2-48.78 22.61-73.6 26.02v71.58c25.07-2.38 48.49-11.04 73.6-27.11zM316.8 212.21v68.16c25.664 7.134 46.616 9.342 73.6 5.62v-71.11c-25.999 4.187-49.943 2.676-73.6-2.67z"],
    "flask": [448, 512, [], "f0c3", "M437.2 403.5L320 215V64h8c13.3 0 24-10.7 24-24V24c0-13.3-10.7-24-24-24H120c-13.3 0-24 10.7-24 24v16c0 13.3 10.7 24 24 24h8v151L10.8 403.5C-18.5 450.6 15.3 512 70.9 512h306.2c55.7 0 89.4-61.5 60.1-108.5zM137.9 320l48.2-77.6c3.7-5.2 5.8-11.6 5.8-18.4V64h64v160c0 6.9 2.2 13.2 5.8 18.4l48.2 77.6h-172z"],
    "folder": [512, 512, [], "f07b", "M464 128H272l-64-64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V176c0-26.51-21.49-48-48-48z"],
    "folder-open": [576, 512, [], "f07c", "M572.694 292.093L500.27 416.248A63.997 63.997 0 0 1 444.989 448H45.025c-18.523 0-30.064-20.093-20.731-36.093l72.424-124.155A64 64 0 0 1 152 256h399.964c18.523 0 30.064 20.093 20.73 36.093zM152 224h328v-48c0-26.51-21.49-48-48-48H272l-64-64H48C21.49 64 0 85.49 0 112v278.046l69.077-118.418C86.214 242.25 117.989 224 152 224z"],
    "font": [448, 512, [], "f031", "M152 416h-24.013l26.586-80.782H292.8L319.386 416H296c-8.837 0-16 7.163-16 16v32c0 8.837 7.163 16 16 16h136c8.837 0 16-7.163 16-16v-32c0-8.837-7.163-16-16-16h-26.739L275.495 42.746A16 16 0 0 0 260.382 32h-72.766a16 16 0 0 0-15.113 10.746L42.739 416H16c-8.837 0-16 7.163-16 16v32c0 8.837 7.163 16 16 16h136c8.837 0 16-7.163 16-16v-32c0-8.837-7.163-16-16-16zm64.353-271.778c4.348-15.216 6.61-28.156 7.586-34.644.839 6.521 2.939 19.476 7.727 34.706l41.335 124.006h-98.619l41.971-124.068z"],
    "forward": [512, 512, [], "f04e", "M500.5 231.4l-192-160C287.9 54.3 256 68.6 256 96v320c0 27.4 31.9 41.8 52.5 24.6l192-160c15.3-12.8 15.3-36.4 0-49.2zm-256 0l-192-160C31.9 54.3 0 68.6 0 96v320c0 27.4 31.9 41.8 52.5 24.6l192-160c15.3-12.8 15.3-36.4 0-49.2z"],
    "frown": [512, 512, [], "f119", "M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zm-396-64c0 37.497 30.503 68 68 68s68-30.503 68-68-30.503-68-68-68-68 30.503-68 68zm160.5 0c0 37.221 30.279 67.5 67.5 67.5s67.5-30.279 67.5-67.5-30.279-67.5-67.5-67.5-67.5 30.279-67.5 67.5zm67.5-48a47.789 47.789 0 0 0-22.603 5.647h.015c10.916 0 19.765 8.849 19.765 19.765s-8.849 19.765-19.765 19.765-19.765-8.849-19.765-19.765v-.015A47.789 47.789 0 0 0 288 192c0 26.51 21.49 48 48 48s48-21.49 48-48-21.49-48-48-48zm-160 0a47.789 47.789 0 0 0-22.603 5.647h.015c10.916 0 19.765 8.849 19.765 19.765s-8.849 19.765-19.765 19.765-19.765-8.849-19.765-19.765v-.015A47.789 47.789 0 0 0 128 192c0 26.51 21.49 48 48 48s48-21.49 48-48-21.49-48-48-48zm192.551 212.66c-59.128-91.455-165.846-91.594-225.064 0-11.502 17.79 15.383 35.148 26.873 17.374 46.626-72.118 124.862-71.855 171.318 0 11.328 17.524 38.548.684 26.873-17.374z"],
    "futbol": [512, 512, [], "f1e3", "M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zm-48 0l-.003-.282-26.064 22.741-62.679-58.5 16.454-84.355 34.303 3.072c-24.889-34.216-60.004-60.089-100.709-73.141l13.651 31.939L256 139l-74.953-41.525 13.651-31.939c-40.631 13.028-75.78 38.87-100.709 73.141l34.565-3.073 16.192 84.355-62.678 58.5-26.064-22.741-.003.282c0 43.015 13.497 83.952 38.472 117.991l7.704-33.897 85.138 10.447 36.301 77.826-29.902 17.786c40.202 13.122 84.29 13.148 124.572 0l-29.902-17.786 36.301-77.826 85.138-10.447 7.704 33.897C442.503 339.952 456 299.015 456 256zm-248.102 69.571l-29.894-91.312L256 177.732l77.996 56.527-29.622 91.312h-96.476z"],
    "gamepad": [640, 512, [], "f11b", "M480 96H160C71.6 96 0 167.6 0 256s71.6 160 160 160c44.8 0 85.2-18.4 114.2-48h91.5c29 29.6 69.5 48 114.2 48 88.4 0 160-71.6 160-160S568.4 96 480 96zM256 276c0 6.6-5.4 12-12 12h-52v52c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-52H76c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h52v-52c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h52c6.6 0 12 5.4 12 12v40zm184 68c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-80c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z"],
    "gavel": [512, 512, [], "f0e3", "M504.971 199.362l-22.627-22.627c-9.373-9.373-24.569-9.373-33.941 0l-5.657 5.657L329.608 69.255l5.657-5.657c9.373-9.373 9.373-24.569 0-33.941L312.638 7.029c-9.373-9.373-24.569-9.373-33.941 0L154.246 131.48c-9.373 9.373-9.373 24.569 0 33.941l22.627 22.627c9.373 9.373 24.569 9.373 33.941 0l5.657-5.657 39.598 39.598-81.04 81.04-5.657-5.657c-12.497-12.497-32.758-12.497-45.255 0L9.373 412.118c-12.497 12.497-12.497 32.758 0 45.255l45.255 45.255c12.497 12.497 32.758 12.497 45.255 0l114.745-114.745c12.497-12.497 12.497-32.758 0-45.255l-5.657-5.657 81.04-81.04 39.598 39.598-5.657 5.657c-9.373 9.373-9.373 24.569 0 33.941l22.627 22.627c9.373 9.373 24.569 9.373 33.941 0l124.451-124.451c9.372-9.372 9.372-24.568 0-33.941z"],
    "gem": [576, 512, [], "f3a5", "M485.5 0L576 160H474.9L405.7 0h79.8zm-128 0l69.2 160H149.3L218.5 0h139zm-267 0h79.8l-69.2 160H0L90.5 0zM0 192h100.7l123 251.7c1.5 3.1-2.7 5.9-5 3.3L0 192zm148.2 0h279.6l-137 318.2c-1 2.4-4.5 2.4-5.5 0L148.2 192zm204.1 251.7l123-251.7H576L357.3 446.9c-2.3 2.7-6.5-.1-5-3.2z"],
    "genderless": [288, 512, [], "f22d", "M144 176c44.1 0 80 35.9 80 80s-35.9 80-80 80-80-35.9-80-80 35.9-80 80-80m0-64C64.5 112 0 176.5 0 256s64.5 144 144 144 144-64.5 144-144-64.5-144-144-144z"],
    "gift": [512, 512, [], "f06b", "M488 192h-64.512C438.72 175.003 448 152.566 448 128c0-52.935-43.065-96-96-96-41.997 0-68.742 20.693-95.992 54.15C226.671 50.192 199.613 32 160 32c-52.935 0-96 43.065-96 96 0 24.566 9.28 47.003 24.512 64H24c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h8v112c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V320h8c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24zm-208-32c24-56 55.324-64 72-64 17.645 0 32 14.355 32 32s-14.355 32-32 32h-72zM160 96c16.676 0 48 8 72 64h-72c-17.645 0-32-14.355-32-32s14.355-32 32-32zm48 128h96v184c0 13.255-10.745 24-24 24h-48c-13.255 0-24-10.745-24-24V224z"],
    "glass-martini": [512, 512, [], "f000", "M507.3 27.3c10-10 2.9-27.3-11.3-27.3H16C1.8 0-5.4 17.2 4.7 27.3L216 238.6V472h-92c-15.5 0-28 12.5-28 28 0 6.6 5.4 12 12 12h296c6.6 0 12-5.4 12-12 0-15.5-12.5-28-28-28h-92V238.6L507.3 27.3z"],
    "globe": [512, 512, [], "f0ac", "M364.215 192h131.43c5.439 20.419 8.354 41.868 8.354 64s-2.915 43.581-8.354 64h-131.43c5.154-43.049 4.939-86.746 0-128zM185.214 352c10.678 53.68 33.173 112.514 70.125 151.992.221.001.44.008.661.008s.44-.008.661-.008c37.012-39.543 59.467-98.414 70.125-151.992H185.214zm174.13-192h125.385C452.802 84.024 384.128 27.305 300.95 12.075c30.238 43.12 48.821 96.332 58.394 147.925zm-27.35 32H180.006c-5.339 41.914-5.345 86.037 0 128h151.989c5.339-41.915 5.345-86.037-.001-128zM152.656 352H27.271c31.926 75.976 100.6 132.695 183.778 147.925-30.246-43.136-48.823-96.35-58.393-147.925zm206.688 0c-9.575 51.605-28.163 104.814-58.394 147.925 83.178-15.23 151.852-71.949 183.778-147.925H359.344zm-32.558-192c-10.678-53.68-33.174-112.514-70.125-151.992-.221 0-.44-.008-.661-.008s-.44.008-.661.008C218.327 47.551 195.872 106.422 185.214 160h141.572zM16.355 192C10.915 212.419 8 233.868 8 256s2.915 43.581 8.355 64h131.43c-4.939-41.254-5.154-84.951 0-128H16.355zm136.301-32c9.575-51.602 28.161-104.81 58.394-147.925C127.872 27.305 59.198 84.024 27.271 160h125.385z"],
    "graduation-cap": [640, 512, [], "f19d", "M622.884 199.005l-275.817 85.1a96 96 0 0 1-54.134 0L92.398 222.232c-8.564 11.438-11.018 23.05-11.918 38.335C89.778 266.165 96 276.355 96 288c0 11.952-6.557 22.366-16.265 27.861l16.197 123.096c.63 4.786-3.1 9.043-7.932 9.043H40c-4.828 0-8.562-4.253-7.932-9.044L48.265 315.86C38.557 310.366 32 299.952 32 288c0-12.034 6.646-22.511 16.465-27.976.947-17.951 3.974-33.231 12.152-47.597l-43.502-13.422c-22.876-6.801-22.766-39.241 0-46.01l275.817-85.1a96 96 0 0 1 54.134 0l275.817 85.1c22.877 6.801 22.767 39.241.001 46.01zM356.503 314.682l-.207.064-.207.061a127.998 127.998 0 0 1-72.177 0l-.207-.061-.207-.064-150.914-46.57L120 352c0 35.346 89.543 64 200 64s200-28.654 200-64l-12.583-83.888-150.914 46.57z"],
    "h-square": [448, 512, [], "f0fd", "M448 80v352c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48zm-112 48h-32c-8.837 0-16 7.163-16 16v80H160v-80c0-8.837-7.163-16-16-16h-32c-8.837 0-16 7.163-16 16v224c0 8.837 7.163 16 16 16h32c8.837 0 16-7.163 16-16v-80h128v80c0 8.837 7.163 16 16 16h32c8.837 0 16-7.163 16-16V144c0-8.837-7.163-16-16-16z"],
    "h1": [640, 512, [], "f313", "M167.675 374.034V400c0 8.837-7.163 16-16 16H38.365c-8.837 0-16-7.163-16-16v-25.966c0-8.837 7.163-16 16-16h20.394v-203.64H38.365c-8.837 0-16-7.163-16-16V112c0-8.837 7.163-16 16-16h113.31c8.837 0 16 7.163 16 16v26.394c0 8.837-7.163 16-16 16h-20.822v71.767h122.29v-71.767h-20.822c-8.837 0-16-7.163-16-16V112c0-8.837 7.163-16 16-16h113.31c8.837 0 16 7.163 16 16v26.394c0 8.837-7.163 16-16 16h-20.393v203.64h20.393c8.837 0 16 7.163 16 16V400c0 8.837-7.163 16-16 16h-113.31c-8.837 0-16-7.163-16-16v-25.966c0-8.837 7.163-16 16-16h20.822v-70.91h-122.29v70.91h20.822c8.837 0 16 7.164 16 16zM534.062 96h-37.166a16.001 16.001 0 0 0-11.085 4.462l-68.156 65.476c-6.347 6.098-6.578 16.177-.515 22.558l21.562 22.698c6.08 6.4 16.195 6.667 22.604.595l18.608-17.629.155-.151.038-.039v158.497H430.17c-8.837 0-16 7.163-16 16V400c0 8.837 7.163 16 16 16H600c8.837 0 16-7.163 16-16v-31.532c0-8.837-7.163-16-16-16h-49.938V112c0-8.837-7.163-16-16-16z"],
    "h2": [640, 512, [], "f314", "M480.776 352.493h124.659c8.837 0 16 7.163 16 16V400c0 8.837-7.163 16-16 16H418.863c-8.053 0-14.853-5.993-15.873-13.981-1.112-8.71-1.708-14.601-1.708-20.982 0-113.106 142.094-134.46 142.094-187.461 0-23.744-19.197-34.372-38.224-34.372-18.898 0-33.069 11.294-43.838 26.397-4.988 6.994-14.706 8.641-21.855 3.878l-28.274-18.837c-7.179-4.783-9.222-14.365-4.74-21.736 22.015-36.198 59.594-57.917 103.415-57.917 59.187 0 106.866 37.127 106.866 97.879.002 95.615-121.174 119.02-135.95 163.625zm-313.101 21.541V400c0 8.837-7.163 16-16 16H38.365c-8.837 0-16-7.163-16-16v-25.966c0-8.837 7.163-16 16-16h20.394v-203.64H38.365c-8.837 0-16-7.163-16-16V112c0-8.837 7.163-16 16-16h113.31c8.837 0 16 7.163 16 16v26.394c0 8.837-7.163 16-16 16h-20.822v71.767h122.29v-71.767h-20.822c-8.837 0-16-7.163-16-16V112c0-8.837 7.163-16 16-16h113.31c8.837 0 16 7.163 16 16v26.394c0 8.837-7.163 16-16 16h-20.393v203.64h20.393c8.837 0 16 7.163 16 16V400c0 8.837-7.163 16-16 16h-113.31c-8.837 0-16-7.163-16-16v-25.966c0-8.837 7.163-16 16-16h20.822v-70.91h-122.29v70.91h20.822c8.837 0 16 7.164 16 16z"],
    "h3": [640, 512, [], "f315", "M548.084 315.553c0-28.593-28.492-39.079-57.056-39.079H475.28a16 16 0 0 1-14.648-9.563l-8.305-18.899a16 16 0 0 1 2.422-16.758l52.422-62.099c3-3.535 5.863-6.752 8.482-9.6-2.309.048-4.81.077-7.505.077h-82.734c-8.837 0-16-7.163-16-16v-31.507c0-8.837 7.163-16 16-16h169.749c8.837 0 16 7.163 16 16v23.686c0 3.846-1.386 7.564-3.903 10.472l-63.567 73.429c43.714 11.56 76.029 45.669 76.029 93.702 0 58.107-44.871 107.722-114.998 107.722-37.029 0-73.657-12.975-100.954-38.086-5.808-5.343-6.878-14.114-2.5-20.68l19.492-29.238c5.279-7.919 16.318-9.573 23.566-3.405 16.306 13.876 35.164 23.195 56.973 23.195 27.108-.001 46.783-15.716 46.783-37.369zm-380.409 58.481V400c0 8.837-7.163 16-16 16H38.365c-8.837 0-16-7.163-16-16v-25.966c0-8.837 7.163-16 16-16h20.394v-203.64H38.365c-8.837 0-16-7.163-16-16V112c0-8.837 7.163-16 16-16h113.31c8.837 0 16 7.163 16 16v26.394c0 8.837-7.163 16-16 16h-20.822v71.767h122.29v-71.767h-20.822c-8.837 0-16-7.163-16-16V112c0-8.837 7.163-16 16-16h113.31c8.837 0 16 7.163 16 16v26.394c0 8.837-7.163 16-16 16h-20.393v203.64h20.393c8.837 0 16 7.163 16 16V400c0 8.837-7.163 16-16 16h-113.31c-8.837 0-16-7.163-16-16v-25.966c0-8.837 7.163-16 16-16h20.822v-70.91h-122.29v70.91h20.822c8.837 0 16 7.164 16 16z"],
    "hand-lizard": [576, 512, [], "f258", "M384 480h192V363.778a95.998 95.998 0 0 0-14.833-51.263L398.127 54.368A48 48 0 0 0 357.544 32H24C10.745 32 0 42.745 0 56v16c0 30.928 25.072 56 56 56h229.981c12.844 0 21.556 13.067 16.615 24.923l-21.41 51.385A32 32 0 0 1 251.648 224H128c-35.346 0-64 28.654-64 64v8c0 13.255 10.745 24 24 24h147.406a47.995 47.995 0 0 1 25.692 7.455l111.748 70.811A24.001 24.001 0 0 1 384 418.539V480z"],
    "hand-paper": [448, 512, [], "f256", "M408.781 128.007C386.356 127.578 368 146.36 368 168.79V256h-8V79.79c0-22.43-18.356-41.212-40.781-40.783C297.488 39.423 280 57.169 280 79v177h-8V40.79C272 18.36 253.644-.422 231.219.007 209.488.423 192 18.169 192 40v216h-8V80.79c0-22.43-18.356-41.212-40.781-40.783C121.488 40.423 104 58.169 104 80v235.992l-31.648-43.519c-12.993-17.866-38.009-21.817-55.877-8.823-17.865 12.994-21.815 38.01-8.822 55.877l125.601 172.705A48 48 0 0 0 172.073 512h197.59c22.274 0 41.622-15.324 46.724-37.006l26.508-112.66a192.011 192.011 0 0 0 5.104-43.975V168c.001-21.831-17.487-39.577-39.218-39.993z"],
    "hand-peace": [448, 512, [], "f25b", "M408 216c-22.092 0-40 17.909-40 40h-8v-32c0-22.091-17.908-40-40-40s-40 17.909-40 40v32h-8V48c0-26.51-21.49-48-48-48s-48 21.49-48 48v208h-13.572L92.688 78.449C82.994 53.774 55.134 41.63 30.461 51.324 5.787 61.017-6.356 88.877 3.337 113.551l74.765 190.342-31.09 24.872c-15.381 12.306-19.515 33.978-9.741 51.081l64 112A39.998 39.998 0 0 0 136 512h240c18.562 0 34.686-12.77 38.937-30.838l32-136A39.97 39.97 0 0 0 448 336v-80c0-22.091-17.908-40-40-40z"],
    "hand-point-down": [384, 512, [], "f0a7", "M91.826 467.2V317.966c-8.248 5.841-16.558 10.57-24.918 14.153C35.098 345.752-.014 322.222 0 288c.008-18.616 10.897-32.203 29.092-40 28.286-12.122 64.329-78.648 77.323-107.534 7.956-17.857 25.479-28.453 43.845-28.464l.001-.002h171.526c11.812 0 21.897 8.596 23.703 20.269 7.25 46.837 38.483 61.76 38.315 123.731-.007 2.724.195 13.254.195 16 0 50.654-22.122 81.574-71.263 72.6-9.297 18.597-39.486 30.738-62.315 16.45-21.177 24.645-53.896 22.639-70.944 6.299V467.2c0 24.15-20.201 44.8-43.826 44.8-23.283 0-43.826-21.35-43.826-44.8zM112 72V24c0-13.255 10.745-24 24-24h192c13.255 0 24 10.745 24 24v48c0 13.255-10.745 24-24 24H136c-13.255 0-24-10.745-24-24zm212-24c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z"],
    "hand-point-left": [512, 512, [], "f0a5", "M44.8 155.826h149.234c-5.841-8.248-10.57-16.558-14.153-24.918C166.248 99.098 189.778 63.986 224 64c18.616.008 32.203 10.897 40 29.092 12.122 28.286 78.648 64.329 107.534 77.323 17.857 7.956 28.453 25.479 28.464 43.845l.002.001v171.526c0 11.812-8.596 21.897-20.269 23.703-46.837 7.25-61.76 38.483-123.731 38.315-2.724-.007-13.254.195-16 .195-50.654 0-81.574-22.122-72.6-71.263-18.597-9.297-30.738-39.486-16.45-62.315-24.645-21.177-22.639-53.896-6.299-70.944H44.8c-24.15 0-44.8-20.201-44.8-43.826 0-23.283 21.35-43.826 44.8-43.826zM440 176h48c13.255 0 24 10.745 24 24v192c0 13.255-10.745 24-24 24h-48c-13.255 0-24-10.745-24-24V200c0-13.255 10.745-24 24-24zm24 212c11.046 0 20-8.954 20-20s-8.954-20-20-20-20 8.954-20 20 8.954 20 20 20z"],
    "hand-point-right": [512, 512, [], "f0a4", "M512 199.652c0 23.625-20.65 43.826-44.8 43.826h-99.851c16.34 17.048 18.346 49.766-6.299 70.944 14.288 22.829 2.147 53.017-16.45 62.315C353.574 425.878 322.654 448 272 448c-2.746 0-13.276-.203-16-.195-61.971.168-76.894-31.065-123.731-38.315C120.596 407.683 112 397.599 112 385.786V214.261l.002-.001c.011-18.366 10.607-35.889 28.464-43.845 28.886-12.994 95.413-49.038 107.534-77.323 7.797-18.194 21.384-29.084 40-29.092 34.222-.014 57.752 35.098 44.119 66.908-3.583 8.359-8.312 16.67-14.153 24.918H467.2c23.45 0 44.8 20.543 44.8 43.826zM96 200v192c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V200c0-13.255 10.745-24 24-24h48c13.255 0 24 10.745 24 24zM68 368c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z"],
    "hand-point-up": [384, 512, [], "f0a6", "M135.652 0c23.625 0 43.826 20.65 43.826 44.8v99.851c17.048-16.34 49.766-18.346 70.944 6.299 22.829-14.288 53.017-2.147 62.315 16.45C361.878 158.426 384 189.346 384 240c0 2.746-.203 13.276-.195 16 .168 61.971-31.065 76.894-38.315 123.731C343.683 391.404 333.599 400 321.786 400H150.261l-.001-.002c-18.366-.011-35.889-10.607-43.845-28.464C93.421 342.648 57.377 276.122 29.092 264 10.897 256.203.008 242.616 0 224c-.014-34.222 35.098-57.752 66.908-44.119 8.359 3.583 16.67 8.312 24.918 14.153V44.8c0-23.45 20.543-44.8 43.826-44.8zM136 416h192c13.255 0 24 10.745 24 24v48c0 13.255-10.745 24-24 24H136c-13.255 0-24-10.745-24-24v-48c0-13.255 10.745-24 24-24zm168 28c-11.046 0-20 8.954-20 20s8.954 20 20 20 20-8.954 20-20-8.954-20-20-20z"],
    "hand-pointer": [448, 512, [], "f25a", "M448 240v96c0 3.084-.356 6.159-1.063 9.162l-32 136C410.686 499.23 394.562 512 376 512H168a40.004 40.004 0 0 1-32.35-16.473l-127.997-176c-12.993-17.866-9.043-42.883 8.822-55.876 17.867-12.994 42.884-9.043 55.877 8.823L104 315.992V40c0-22.091 17.908-40 40-40s40 17.909 40 40v200h8v-40c0-22.091 17.908-40 40-40s40 17.909 40 40v40h8v-24c0-22.091 17.908-40 40-40s40 17.909 40 40v24h8c0-22.091 17.908-40 40-40s40 17.909 40 40zm-256 80h-8v96h8v-96zm88 0h-8v96h8v-96zm88 0h-8v96h8v-96z"],
    "hand-rock": [512, 512, [], "f255", "M512 128.79c0-26.322-20.861-48.344-47.18-48.783C437.935 79.558 416 101.217 416 128h-8V96.79c0-26.322-20.861-48.344-47.18-48.783C333.935 47.558 312 69.217 312 96v32h-8V80.79c0-26.322-20.861-48.344-47.18-48.783C229.935 31.558 208 53.217 208 80v48h-8V96.79c0-26.322-20.861-48.344-47.18-48.783C125.935 47.558 104 69.217 104 96v136l-8-7.111V176.79c0-26.322-20.861-48.344-47.18-48.783C21.935 127.558 0 149.217 0 176v66.445a95.998 95.998 0 0 0 32.221 71.751l111.668 99.261A47.999 47.999 0 0 1 160 449.333V456c0 13.255 10.745 24 24 24h240c13.255 0 24-10.745 24-24v-2.921a96.01 96.01 0 0 1 7.523-37.254l48.954-116.265A96.002 96.002 0 0 0 512 262.306V128.79z"],
    "hand-scissors": [512, 512, [], "f257", "M216 440c0-22.092 17.909-40 40-40v-8h-32c-22.091 0-40-17.908-40-40s17.909-40 40-40h32v-8H48c-26.51 0-48-21.49-48-48s21.49-48 48-48h208v-13.572l-177.551-69.74c-24.674-9.694-36.818-37.555-27.125-62.228 9.693-24.674 37.554-36.817 62.228-27.124l190.342 74.765 24.872-31.09c12.306-15.381 33.978-19.515 51.081-9.741l112 64A40.002 40.002 0 0 1 512 168v240c0 18.562-12.77 34.686-30.838 38.937l-136 32A39.982 39.982 0 0 1 336 480h-80c-22.091 0-40-17.908-40-40z"],
    "hand-spock": [512, 512, [], "f259", "M10.872 316.585c15.139-16.086 40.454-16.854 56.543-1.713L128 371.893v-79.405L88.995 120.865c-4.896-21.542 8.598-42.974 30.14-47.87 21.549-4.894 42.975 8.599 47.87 30.141L201.747 256h9.833L164.016 48.966c-4.946-21.531 8.498-42.994 30.028-47.94 21.532-4.95 42.994 8.498 47.94 30.028L293.664 256h15.105l48.425-193.702c5.357-21.432 27.075-34.462 48.507-29.104 21.432 5.358 34.463 27.075 29.104 48.507L391.231 256h11.08l30.768-129.265c5.117-21.491 26.685-34.768 48.177-29.647 21.491 5.117 34.765 26.686 29.647 48.177l-36.292 152.467A96.024 96.024 0 0 0 472 319.967v42.102a96.002 96.002 0 0 1-3.96 27.287l-26.174 88.287C435.825 498.022 417.101 512 395.846 512H179.172a48.002 48.002 0 0 1-32.898-13.046L12.585 373.128c-16.087-15.141-16.853-40.456-1.713-56.543z"],
    "handshake": [640, 512, [], "f2b5", "M72 112H24c-13.255 0-24 10.745-24 24v208c0 13.255 10.745 24 24 24h48c13.255 0 24-10.745 24-24V136c0-13.255-10.745-24-24-24zM48 340c-11.046 0-20-8.954-20-20s8.954-20 20-20 20 8.954 20 20-8.954 20-20 20zm568-228h-48c-13.255 0-24 10.745-24 24v208c0 13.255 10.745 24 24 24h48c13.255 0 24-10.745 24-24V136c0-13.255-10.745-24-24-24zm-24 228c-11.046 0-20-8.954-20-20s8.954-20 20-20 20 8.954 20 20-8.954 20-20 20zM485.94 92.67L528 140.74V320h-19.17c.56-14.96-4.38-28.98-14-39.71l-80.92-98.91c2.93-3.2 2.76-8.16-.38-11.16-2.82-2.7-7.08-2.92-10.14-.76-.42.3-60.35 62.93-60.35 62.93l-.2.21c-23.904 26.905-66.127 26.204-89.15-1.42-15.48-18.58-15.29-45.39.45-63.76l66.57-77.67C334.304 73.88 354.534 64 376.7 64h46.05a83.98 83.98 0 0 1 63.19 28.67zm-3.37 197.92c15.46 16.78 12.59 43.83-2.37 57.75-17.711 16.462-42.433 13.004-45.93 9.2 1.653 15.658-21.389 47.249-56.42 44.68-6.325 21.185-32.298 38.909-59.18 29.61-10.22 10.21-25.82 14.97-39.81 14.97-28.69 0-54.92-11.99-72.58-30.8L112 320V135.52l61.36-50.57A71.52 71.52 0 0 1 223.93 64h37.42c16.73 0 32.68 6.84 44.21 18.85l-63.57 74.16c-20.84 24.31-21.09 59.81-.59 84.42 29.375 35.247 83.007 35.853 113.31 1.92L402.82 193l79.75 97.59z"],
    "hashtag": [448, 512, [], "f292", "M440.667 182.109l7.143-40c1.313-7.355-4.342-14.109-11.813-14.109h-74.81l14.623-81.891C377.123 38.754 371.468 32 363.997 32h-40.632a12 12 0 0 0-11.813 9.891L296.175 128H197.54l14.623-81.891C213.477 38.754 207.822 32 200.35 32h-40.632a12 12 0 0 0-11.813 9.891L132.528 128H53.432a12 12 0 0 0-11.813 9.891l-7.143 40C33.163 185.246 38.818 192 46.289 192h74.81L98.242 320H19.146a12 12 0 0 0-11.813 9.891l-7.143 40C-1.123 377.246 4.532 384 12.003 384h74.81L72.19 465.891C70.877 473.246 76.532 480 84.003 480h40.632a12 12 0 0 0 11.813-9.891L151.826 384h98.634l-14.623 81.891C234.523 473.246 240.178 480 247.65 480h40.632a12 12 0 0 0 11.813-9.891L315.472 384h79.096a12 12 0 0 0 11.813-9.891l7.143-40c1.313-7.355-4.342-14.109-11.813-14.109h-74.81l22.857-128h79.096a12 12 0 0 0 11.813-9.891zM261.889 320h-98.634l22.857-128h98.634l-22.857 128z"],
    "hdd": [576, 512, [], "f0a0", "M576 304v96c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48v-96c0-26.51 21.49-48 48-48h480c26.51 0 48 21.49 48 48zm-48-80a79.557 79.557 0 0 1 30.777 6.165L462.25 85.374A48.003 48.003 0 0 0 422.311 64H153.689a48 48 0 0 0-39.938 21.374L17.223 230.165A79.557 79.557 0 0 1 48 224h480zm-48 96c-17.673 0-32 14.327-32 32s14.327 32 32 32 32-14.327 32-32-14.327-32-32-32zm-96 0c-17.673 0-32 14.327-32 32s14.327 32 32 32 32-14.327 32-32-14.327-32-32-32z"],
    "heading": [512, 512, [], "f1dc", "M496 80V48c0-8.837-7.163-16-16-16H320c-8.837 0-16 7.163-16 16v32c0 8.837 7.163 16 16 16h37.621v128H154.379V96H192c8.837 0 16-7.163 16-16V48c0-8.837-7.163-16-16-16H32c-8.837 0-16 7.163-16 16v32c0 8.837 7.163 16 16 16h37.275v320H32c-8.837 0-16 7.163-16 16v32c0 8.837 7.163 16 16 16h160c8.837 0 16-7.163 16-16v-32c0-8.837-7.163-16-16-16h-37.621V288H357.62v128H320c-8.837 0-16 7.163-16 16v32c0 8.837 7.163 16 16 16h160c8.837 0 16-7.163 16-16v-32c0-8.837-7.163-16-16-16h-37.275V96H480c8.837 0 16-7.163 16-16z"],
    "headphones": [512, 512, [], "f025", "M256 32C114.52 32 0 146.496 0 288v48a32 32 0 0 0 17.689 28.622l14.383 7.191C34.083 431.903 83.421 480 144 480h24c13.255 0 24-10.745 24-24V280c0-13.255-10.745-24-24-24h-24c-31.342 0-59.671 12.879-80 33.627V288c0-105.869 86.131-192 192-192s192 86.131 192 192v1.627C427.671 268.879 399.342 256 368 256h-24c-13.255 0-24 10.745-24 24v176c0 13.255 10.745 24 24 24h24c60.579 0 109.917-48.098 111.928-108.187l14.382-7.191A32 32 0 0 0 512 336v-48c0-141.479-114.496-256-256-256z"],
    "heart": [576, 512, [], "f004", "M414.9 24C361.8 24 312 65.7 288 89.3 264 65.7 214.2 24 161.1 24 70.3 24 16 76.9 16 165.5c0 72.6 66.8 133.3 69.2 135.4l187 180.8c8.8 8.5 22.8 8.5 31.6 0l186.7-180.2c2.7-2.7 69.5-63.5 69.5-136C560 76.9 505.7 24 414.9 24z"],
    "heartbeat": [576, 512, [], "f21e", "M47.9 257C31.6 232.7 16 200.5 16 165.5 16 76.9 70.3 24 161.1 24 214.2 24 264 65.7 288 89.3 312 65.7 361.8 24 414.9 24 505.7 24 560 76.9 560 165.5c0 35-15.5 67.2-31.9 91.5H408l-26.4-58.6c-4.7-8.9-17.6-8.5-21.6.7l-53.3 134.6L235.4 120c-3.7-10.6-18.7-10.7-22.6-.2l-48 137.2H47.9zm348 32c-4.5 0-8.6-2.5-10.6-6.4l-12.8-32.5-56.9 142.8c-4.4 9.9-18.7 9.4-22.3-.9l-69.7-209.2-33.6 98.4c-1.7 4.7-6.2 7.8-11.2 7.8H73.4c5.3 5.7-12.8-12 198.9 192.6 8.8 8.5 22.8 8.5 31.6 0 204.3-197.2 191-184 199-192.6h-107z"],
    "hexagon": [576, 512, [], "f312", "M441.5 39.8C432.9 25.1 417.1 16 400 16H176c-17.1 0-32.9 9.1-41.5 23.8l-112 192c-8.7 14.9-8.7 33.4 0 48.4l112 192c8.6 14.7 24.4 23.8 41.5 23.8h224c17.1 0 32.9-9.1 41.5-23.8l112-192c8.7-14.9 8.7-33.4 0-48.4l-112-192z"],
    "history": [512, 512, [], "f1da", "M504 255.531c.253 136.64-111.18 248.372-247.82 248.468-59.015.042-113.223-20.53-155.822-54.911-11.077-8.94-11.905-25.541-1.839-35.607l11.267-11.267c8.609-8.609 22.353-9.551 31.891-1.984C173.062 425.135 212.781 440 256 440c101.705 0 184-82.311 184-184 0-101.705-82.311-184-184-184-48.814 0-93.149 18.969-126.068 49.932l50.754 50.754c10.08 10.08 2.941 27.314-11.313 27.314H24c-8.837 0-16-7.163-16-16V38.627c0-14.254 17.234-21.393 27.314-11.314l49.372 49.372C129.209 34.136 189.552 8 256 8c136.81 0 247.747 110.78 248 247.531zm-180.912 78.784l9.823-12.63c8.138-10.463 6.253-25.542-4.21-33.679L288 256.349V152c0-13.255-10.745-24-24-24h-16c-13.255 0-24 10.745-24 24v135.651l65.409 50.874c10.463 8.137 25.541 6.253 33.679-4.21z"],
    "home": [576, 512, [], "f015", "M488 312.7V456c0 13.3-10.7 24-24 24H348c-6.6 0-12-5.4-12-12V356c0-6.6-5.4-12-12-12h-72c-6.6 0-12 5.4-12 12v112c0 6.6-5.4 12-12 12H112c-13.3 0-24-10.7-24-24V312.7c0-3.6 1.6-7 4.4-9.3l188-154.8c4.4-3.6 10.8-3.6 15.3 0l188 154.8c2.7 2.3 4.3 5.7 4.3 9.3zm83.6-60.9L488 182.9V44.4c0-6.6-5.4-12-12-12h-56c-6.6 0-12 5.4-12 12V117l-89.5-73.7c-17.7-14.6-43.3-14.6-61 0L4.4 251.8c-5.1 4.2-5.8 11.8-1.6 16.9l25.5 31c4.2 5.1 11.8 5.8 16.9 1.6l235.2-193.7c4.4-3.6 10.8-3.6 15.3 0l235.2 193.7c5.1 4.2 12.7 3.5 16.9-1.6l25.5-31c4.2-5.2 3.4-12.7-1.7-16.9z"],
    "hospital": [448, 512, [], "f0f8", "M448 492v20H0v-20c0-6.627 5.373-12 12-12h20V120c0-13.255 10.745-24 24-24h88V24c0-13.255 10.745-24 24-24h112c13.255 0 24 10.745 24 24v72h88c13.255 0 24 10.745 24 24v360h20c6.627 0 12 5.373 12 12zM308 192h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12zm-168 64h40c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12zm104 128h-40c-6.627 0-12 5.373-12 12v84h64v-84c0-6.627-5.373-12-12-12zm64-96h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12zm-116 12c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12v-40zM182 96h26v26a6 6 0 0 0 6 6h20a6 6 0 0 0 6-6V96h26a6 6 0 0 0 6-6V70a6 6 0 0 0-6-6h-26V38a6 6 0 0 0-6-6h-20a6 6 0 0 0-6 6v26h-26a6 6 0 0 0-6 6v20a6 6 0 0 0 6 6z"],
    "hourglass": [384, 512, [], "f254", "M360 64c13.255 0 24-10.745 24-24V24c0-13.255-10.745-24-24-24H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24 0 90.965 51.016 167.734 120.842 192C75.016 280.266 24 357.035 24 448c-13.255 0-24 10.745-24 24v16c0 13.255 10.745 24 24 24h336c13.255 0 24-10.745 24-24v-16c0-13.255-10.745-24-24-24 0-90.965-51.016-167.734-120.842-192C308.984 231.734 360 154.965 360 64z"],
    "hourglass-end": [384, 512, [], "f253", "M360 64c13.255 0 24-10.745 24-24V24c0-13.255-10.745-24-24-24H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24 0 90.965 51.016 167.734 120.842 192C75.016 280.266 24 357.035 24 448c-13.255 0-24 10.745-24 24v16c0 13.255 10.745 24 24 24h336c13.255 0 24-10.745 24-24v-16c0-13.255-10.745-24-24-24 0-90.965-51.016-167.734-120.842-192C308.984 231.734 360 154.965 360 64zM192 208c-57.787 0-104-66.518-104-144h208c0 77.945-46.51 144-104 144z"],
    "hourglass-half": [384, 512, [], "f252", "M360 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24 0 90.965 51.016 167.734 120.842 192C75.016 280.266 24 357.035 24 448c-13.255 0-24 10.745-24 24v16c0 13.255 10.745 24 24 24h336c13.255 0 24-10.745 24-24v-16c0-13.255-10.745-24-24-24 0-90.965-51.016-167.734-120.842-192C308.984 231.734 360 154.965 360 64c13.255 0 24-10.745 24-24V24c0-13.255-10.745-24-24-24zm-75.078 384H99.08c17.059-46.797 52.096-80 92.92-80 40.821 0 75.862 33.196 92.922 80zm.019-256H99.078C91.988 108.548 88 86.748 88 64h208c0 22.805-3.987 44.587-11.059 64z"],
    "hourglass-start": [384, 512, [], "f251", "M360 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24 0 90.965 51.016 167.734 120.842 192C75.016 280.266 24 357.035 24 448c-13.255 0-24 10.745-24 24v16c0 13.255 10.745 24 24 24h336c13.255 0 24-10.745 24-24v-16c0-13.255-10.745-24-24-24 0-90.965-51.016-167.734-120.842-192C308.984 231.734 360 154.965 360 64c13.255 0 24-10.745 24-24V24c0-13.255-10.745-24-24-24zm-64 448H88c0-77.458 46.204-144 104-144 57.786 0 104 66.517 104 144z"],
    "i-cursor": [256, 512, [], "f246", "M256 52.048V12.065C256 5.496 250.726.148 244.158.066 211.621-.344 166.469.011 128 37.959 90.266.736 46.979-.114 11.913.114 5.318.157 0 5.519 0 12.114v39.645c0 6.687 5.458 12.078 12.145 11.998C38.111 63.447 96 67.243 96 112.182V224H60c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h36v112c0 44.932-56.075 48.031-83.95 47.959C5.404 447.942 0 453.306 0 459.952v39.983c0 6.569 5.274 11.917 11.842 11.999 32.537.409 77.689.054 116.158-37.894 37.734 37.223 81.021 38.073 116.087 37.845 6.595-.043 11.913-5.405 11.913-12V460.24c0-6.687-5.458-12.078-12.145-11.998C217.889 448.553 160 444.939 160 400V288h36c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-36V112.182c0-44.932 56.075-48.213 83.95-48.142 6.646.018 12.05-5.346 12.05-11.992z"],
    "id-badge": [384, 512, [], "f2c1", "M0 464V48C0 21.49 21.49 0 48 0h288c26.51 0 48 21.49 48 48v416c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48zm192-144c53.019 0 96-42.981 96-96s-42.981-96-96-96-96 42.981-96 96 42.981 96 96 96zm94.317 17.474l-22.954-7.173C242.437 344.413 217.802 352 192 352s-50.437-7.587-71.363-21.699l-22.954 7.173C77.644 343.736 64 362.295 64 383.289V424c0 13.255 10.745 24 24 24h208c13.255 0 24-10.745 24-24v-40.711c0-20.994-13.644-39.553-33.683-45.815zM352 52v-8c0-6.627-5.373-12-12-12H44c-6.627 0-12 5.373-12 12v8c0 6.627 5.373 12 12 12h296c6.627 0 12-5.373 12-12z"],
    "id-card": [512, 512, [], "f2c2", "M464 448H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h416c26.51 0 48 21.49 48 48v288c0 26.51-21.49 48-48 48zM160 160c-35.346 0-64 28.654-64 64s28.654 64 64 64 64-28.654 64-64-28.654-64-64-64m79.589 154.53l-28.281-9.427C196.458 314.532 178.856 320 160 320s-36.458-5.468-51.309-14.897L80.41 314.53A24 24 0 0 0 64 337.298V360c0 13.255 10.745 24 24 24h144c13.255 0 24-10.745 24-24v-22.702a24 24 0 0 0-16.411-22.768zM448 340v-8c0-6.627-5.373-12-12-12H300c-6.627 0-12 5.373-12 12v8c0 6.627 5.373 12 12 12h136c6.627 0 12-5.373 12-12zm0-64v-8c0-6.627-5.373-12-12-12H300c-6.627 0-12 5.373-12 12v8c0 6.627 5.373 12 12 12h136c6.627 0 12-5.373 12-12zm0-64v-8c0-6.627-5.373-12-12-12H300c-6.627 0-12 5.373-12 12v8c0 6.627 5.373 12 12 12h136c6.627 0 12-5.373 12-12zm32-96v-8c0-6.627-5.373-12-12-12H44c-6.627 0-12 5.373-12 12v8c0 6.627 5.373 12 12 12h424c6.627 0 12-5.373 12-12z"],
    "image": [512, 512, [], "f03e", "M464 448H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h416c26.51 0 48 21.49 48 48v288c0 26.51-21.49 48-48 48zM112 120c-30.928 0-56 25.072-56 56s25.072 56 56 56 56-25.072 56-56-25.072-56-56-56zM64 384h384V272l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L208 320l-55.515-55.515c-4.686-4.686-12.284-4.686-16.971 0L64 336v48z"],
    "images": [576, 512, [], "f302", "M480 416v16c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V176c0-26.51 21.49-48 48-48h16v208c0 44.112 35.888 80 80 80h336zm96-80V80c0-26.51-21.49-48-48-48H144c-26.51 0-48 21.49-48 48v256c0 26.51 21.49 48 48 48h384c26.51 0 48-21.49 48-48zM256 128c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-96 144l55.515-55.515c4.686-4.686 12.284-4.686 16.971 0L272 256l135.515-135.515c4.686-4.686 12.284-4.686 16.971 0L512 208v112H160v-48z"],
    "inbox": [576, 512, [], "f01c", "M567.938 243.908L462.25 85.374A48.003 48.003 0 0 0 422.311 64H153.689a48 48 0 0 0-39.938 21.374L8.062 243.908A47.994 47.994 0 0 0 0 270.533V400c0 26.51 21.49 48 48 48h480c26.51 0 48-21.49 48-48V270.533a47.994 47.994 0 0 0-8.062-26.625zM162.252 128h251.497l85.333 128H376l-32 64H232l-32-64H76.918l85.334-128z"],
    "inbox-in": [576, 512, [], "f310", "M250.5 0h68.6c9.5 0 17.1 7.7 17.1 17.1V160h68.3c17.8 0 26.7 21.5 14.1 34.1l-119.4 120c-7.9 7.9-20.9 7.8-28.6-.3L157 193.8c-12.1-12.7-3.1-33.8 14.5-33.8h61.9V17.1c0-9.4 7.7-17.1 17.1-17.1zm315 338.9l-94.6-118.2c-4.5-5.6-13-6-18-.9l-28.1 28.9c-4.2 4.3-4.5 11.1-.8 15.9l44.3 55.4H376l-32 64H232l-32-64h-92.4l43.8-54.7c3.7-4.7 3.5-11.4-.6-15.7l-27.6-29.5c-5-5.3-13.6-5-18.1.7l-94.4 118c-7 8.6-10.7 19.1-10.7 30V464c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48v-95.2c0-10.9-3.7-21.4-10.5-29.9z"],
    "inbox-out": [576, 512, [], "f311", "M576 368.8V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48v-95.2c0-10.9 3.7-21.5 10.5-30l94.4-118c4.6-5.7 13.1-6 18.1-.7l27.6 29.5c4.1 4.4 4.3 11 .6 15.7L107.6 320H200l32 64h112l32-64h92.4l-44.3-55.4c-3.8-4.7-3.5-11.5.8-15.9l28.1-28.9c5-5.2 13.5-4.8 18 .9l94.6 118.2c6.7 8.5 10.4 19 10.4 29.9zm-233.4-65.9V160h61.9c17.6 0 26.6-21.1 14.5-33.8L305.3 6.2c-7.7-8.1-20.7-8.3-28.6-.3l-119.4 120c-12.6 12.6-3.7 34.1 14.1 34.1h68.3v142.9c0 9.5 7.7 17.1 17.1 17.1h68.6c9.5 0 17.2-7.7 17.2-17.1z"],
    "indent": [448, 512, [], "f03c", "M0 84V44c0-8.837 7.163-16 16-16h416c8.837 0 16 7.163 16 16v40c0 8.837-7.163 16-16 16H16c-8.837 0-16-7.163-16-16zm176 144h256c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H176c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zM16 484h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm160-128h256c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H176c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm-52.687-111.313l-96-95.984C17.266 138.652 0 145.776 0 160.016v191.975c0 14.329 17.325 21.304 27.313 11.313l96-95.992c6.249-6.247 6.249-16.377 0-22.625z"],
    "industry": [512, 512, [], "f275", "M475.115 163.781L336 252.309v-68.28c0-18.916-20.931-30.399-36.885-20.248L160 252.309V56c0-13.255-10.745-24-24-24H24C10.745 32 0 42.745 0 56v400c0 13.255 10.745 24 24 24h464c13.255 0 24-10.745 24-24V184.029c0-18.917-20.931-30.399-36.885-20.248z"],
    "industry-alt": [512, 512, [], "f3b3", "M475.115 163.781L336 252.309v-68.28c0-18.916-20.931-30.399-36.885-20.248L160 252.309V56c0-13.255-10.745-24-24-24H24C10.745 32 0 42.745 0 56v400c0 13.255 10.745 24 24 24h464c13.255 0 24-10.745 24-24V184.029c0-18.917-20.931-30.399-36.885-20.248zM404 384h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12zm-128 0h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12zm-128 0h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12z"],
    "info": [192, 512, [], "f129", "M20 424.229h20V279.771H20c-11.046 0-20-8.954-20-20V212c0-11.046 8.954-20 20-20h112c11.046 0 20 8.954 20 20v212.229h20c11.046 0 20 8.954 20 20V492c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20v-47.771c0-11.046 8.954-20 20-20zM96 0C56.235 0 24 32.235 24 72s32.235 72 72 72 72-32.235 72-72S135.764 0 96 0z"],
    "info-circle": [512, 512, [], "f05a", "M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"],
    "info-square": [448, 512, [], "f30f", "M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm-176 86c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"],
    "italic": [320, 512, [], "f033", "M204.758 416h-33.849l62.092-320h40.725a16 16 0 0 0 15.704-12.937l6.242-32C297.599 41.184 290.034 32 279.968 32H120.235a16 16 0 0 0-15.704 12.937l-6.242 32C96.362 86.816 103.927 96 113.993 96h33.846l-62.09 320H46.278a16 16 0 0 0-15.704 12.935l-6.245 32C22.402 470.815 29.967 480 40.034 480h158.479a16 16 0 0 0 15.704-12.935l6.245-32c1.927-9.88-5.638-19.065-15.704-19.065z"],
    "jack-o-lantern": [512, 512, [], "f30e", "M294 97.1c1.6-1.3 3.7-2.5 6.3-3.6 16.3-6.8 24-25.5 17.2-41.8-6.8-16.3-25.5-24-41.8-17.2-31.9 13.3-48.2 40.2-51.2 62.3C57 105.2 0 182.4 0 288c0 112 64 192 256 192s256-80 256-192c0-104.3-55.5-180.8-218-190.9zm-12.9 178.8l48-80c3.1-5.2 10.6-5.2 13.7 0l48 80c3.2 5.3-.6 12.1-6.9 12.1h-96c-6.1 0-10-6.8-6.8-12.1zm-160 0l48-80c3.1-5.2 10.6-5.2 13.7 0l48 80c3.2 5.3-.6 12.1-6.9 12.1h-96c-6.1 0-10-6.8-6.8-12.1zm310.6 62.3c-8.2 28.8-30.6 53-64.6 70-4.8 2.4-9.8 4.6-15 6.6V390c0-3.3-2.7-6-6-6h-20c-3.3 0-6 2.7-6 6v34.7c-20.2 4.7-41.9 7.3-64 7.3s-43.8-2.5-64-7.3V390c0-3.3-2.7-6-6-6h-20c-3.3 0-6 2.7-6 6v24.8c-5.2-2.1-10.2-4.3-15-6.6-34.1-16.9-56.4-41.1-64.6-70-1.8-6.3 4.3-11.9 10.4-9.7 34.2 12.4 81.5 20.4 133.3 22.8V378c0 3.3 2.7 6 6 6h20c3.3 0 6-2.7 6-6v-26c63.9 0 124.2-8.6 165.3-23.5 5.9-2.2 12 3.4 10.2 9.7z"],
    "key": [512, 512, [], "f084", "M512 176.001C512 273.203 433.202 352 336 352c-11.22 0-22.19-1.062-32.827-3.069l-24.012 27.014A23.999 23.999 0 0 1 261.223 384H224v40c0 13.255-10.745 24-24 24h-40v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24v-78.059c0-6.365 2.529-12.47 7.029-16.971l161.802-161.802C163.108 213.814 160 195.271 160 176 160 78.798 238.797.001 335.999 0 433.488-.001 512 78.511 512 176.001zM336 128c0 26.51 21.49 48 48 48s48-21.49 48-48-21.49-48-48-48-48 21.49-48 48z"],
    "keyboard": [576, 512, [], "f11c", "M528 448H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h480c26.51 0 48 21.49 48 48v288c0 26.51-21.49 48-48 48zM128 180v-40c0-6.627-5.373-12-12-12H76c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm96 0v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm96 0v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm96 0v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm96 0v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm-336 96v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm96 0v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm96 0v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm96 0v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm-336 96v-40c0-6.627-5.373-12-12-12H76c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm288 0v-40c0-6.627-5.373-12-12-12H172c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h232c6.627 0 12-5.373 12-12zm96 0v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12z"],
    "language": [640, 512, [], "f1ab", "M304 416H24c-13.255 0-24-10.745-24-24V120c0-13.255 10.745-24 24-24h280v320zm-120.676-72.622A12 12 0 0 0 194.839 352h22.863c8.22 0 14.007-8.078 11.362-15.861L171.61 167.085a12 12 0 0 0-11.362-8.139h-32.489a12.001 12.001 0 0 0-11.362 8.139L58.942 336.139C56.297 343.922 62.084 352 70.304 352h22.805a12 12 0 0 0 11.535-8.693l9.118-31.807h60.211l9.351 31.878zm-39.051-140.42s4.32 21.061 7.83 33.21l10.8 37.531h-38.07l11.07-37.531c3.51-12.15 7.83-33.21 7.83-33.21h.54zM616 416H336V96h280c13.255 0 24 10.745 24 24v272c0 13.255-10.745 24-24 24zm-36-228h-64v-16c0-6.627-5.373-12-12-12h-16c-6.627 0-12 5.373-12 12v16h-64c-6.627 0-12 5.373-12 12v16c0 6.627 5.373 12 12 12h114.106c-6.263 14.299-16.518 28.972-30.023 43.206-6.56-6.898-12.397-13.91-17.365-20.933-3.639-5.144-10.585-6.675-15.995-3.446l-7.28 4.346-6.498 3.879c-5.956 3.556-7.693 11.421-3.735 17.117 6.065 8.729 13.098 17.336 20.984 25.726-8.122 6.226-16.841 12.244-26.103 17.964-5.521 3.41-7.381 10.556-4.162 16.19l7.941 13.896c3.362 5.883 10.935 7.826 16.706 4.276 12.732-7.831 24.571-16.175 35.443-24.891 10.917 8.761 22.766 17.102 35.396 24.881 5.774 3.556 13.353 1.618 16.717-4.27l7.944-13.903c3.213-5.623 1.37-12.76-4.135-16.171a312.737 312.737 0 0 1-26.06-18.019c21.024-22.425 35.768-46.289 42.713-69.85H580c6.627 0 12-5.373 12-12v-16c0-6.625-5.373-11.998-12-11.998z"],
    "laptop": [640, 512, [], "f109", "M512 64v256H128V64h384m16-64H112C85.5 0 64 21.5 64 48v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm100 416H389.5c-3 0-5.5 2.1-5.9 5.1C381.2 436.3 368 448 352 448h-64c-16 0-29.2-11.7-31.6-26.9-.5-2.9-3-5.1-5.9-5.1H12c-6.6 0-12 5.4-12 12v36c0 26.5 21.5 48 48 48h544c26.5 0 48-21.5 48-48v-36c0-6.6-5.4-12-12-12z"],
    "leaf": [576, 512, [], "f06c", "M395.4 420.8c-43.4 21.6-91.9 34.4-140.8 34.4-82.2 0-151.1-40.1-151.1-40.1-16.1 0-35.4 64.9-63.3 64.9-27 0-40.2-24-40.2-38.5 0-33.1 63.6-58.9 63.6-77.3 0 0-12.5-21.2-12.5-59.2 0-101.2 81.3-173.4 172.6-203.3 65.9-21.6 206 3.5 250.7-38.5C492.1 47 500.8 32 527.8 32c36.3 0 48.2 93.2 48.2 120.3 0 110.9-54.5 206.5-180.6 268.5zm-254.3-75.6c63.5-89.9 144.5-128.8 257.7-120 8.8.7 16.5-5.9 17.2-14.7.7-8.8-5.9-16.5-14.7-17.2-124-9.6-215.9 33.9-286.3 133.5-5.1 7.2-3.4 17.2 3.8 22.3 7.2 5.1 17.2 3.4 22.3-3.9z"],
    "lemon": [512, 512, [], "f094", "M489.038 22.963C465.944-.13 434.648-5.93 413.947 6.129c-58.906 34.312-181.25-53.077-321.073 86.746S40.441 355.041 6.129 413.945c-12.059 20.702-6.26 51.999 16.833 75.093 23.095 23.095 54.392 28.891 75.095 16.832 58.901-34.31 181.246 53.079 321.068-86.743S471.56 156.96 505.871 98.056c12.059-20.702 6.261-51.999-16.833-75.093zM243.881 95.522c-58.189 14.547-133.808 90.155-148.358 148.358-1.817 7.27-8.342 12.124-15.511 12.124-1.284 0-2.59-.156-3.893-.481-8.572-2.144-13.784-10.83-11.642-19.403C81.901 166.427 166.316 81.93 236.119 64.478c8.575-2.143 17.261 3.069 19.403 11.642s-3.069 17.259-11.641 19.402z"],
    "level-down": [352, 512, [], "f149", "M345.04 368l-136 136.901c-9.388 9.465-24.691 9.465-34.079 0L38.96 368c-9.307-9.384-9.277-24.526.069-33.872l22.056-22.056c9.619-9.619 25.301-9.329 34.557.639L152 373.16V80H68.024a11.996 11.996 0 0 1-8.485-3.515l-56-56C-4.021 12.926 1.333 0 12.024 0H208c13.255 0 24 10.745 24 24v349.16l56.357-60.448c9.256-9.968 24.938-10.258 34.557-.639l22.056 22.056c9.346 9.345 9.377 24.487.07 33.871z"],
    "level-down-alt": [320, 512, [], "f3be", "M313.553 392.331L209.587 504.334c-9.485 10.214-25.676 10.229-35.174 0L70.438 392.331C56.232 377.031 67.062 352 88.025 352H152V80H68.024a11.996 11.996 0 0 1-8.485-3.515l-56-56C-4.021 12.926 1.333 0 12.024 0H208c13.255 0 24 10.745 24 24v328h63.966c20.878 0 31.851 24.969 17.587 40.331z"],
    "level-up": [352, 512, [], "f148", "M345.04 144l-136-136.901c-9.388-9.465-24.691-9.465-34.079 0L38.96 144c-9.307 9.384-9.277 24.526.069 33.872l22.056 22.056c9.619 9.619 25.301 9.329 34.557-.639L152 138.84V432H68.024a11.996 11.996 0 0 0-8.485 3.515l-56 56C-4.021 499.074 1.333 512 12.024 512H208c13.255 0 24-10.745 24-24V138.84l56.357 60.448c9.256 9.968 24.938 10.258 34.557.639l22.056-22.056c9.346-9.345 9.377-24.487.07-33.871z"],
    "level-up-alt": [320, 512, [], "f3bf", "M313.553 119.669L209.587 7.666c-9.485-10.214-25.676-10.229-35.174 0L70.438 119.669C56.232 134.969 67.062 160 88.025 160H152v272H68.024a11.996 11.996 0 0 0-8.485 3.515l-56 56C-4.021 499.074 1.333 512 12.024 512H208c13.255 0 24-10.745 24-24V160h63.966c20.878 0 31.851-24.969 17.587-40.331z"],
    "life-ring": [512, 512, [], "f1cd", "M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm173.696 119.559l-63.399 63.399c-10.987-18.559-26.67-34.252-45.255-45.255l63.399-63.399a218.396 218.396 0 0 1 45.255 45.255zM256 352c-53.019 0-96-42.981-96-96s42.981-96 96-96 96 42.981 96 96-42.981 96-96 96zM127.559 82.304l63.399 63.399c-18.559 10.987-34.252 26.67-45.255 45.255l-63.399-63.399a218.372 218.372 0 0 1 45.255-45.255zM82.304 384.441l63.399-63.399c10.987 18.559 26.67 34.252 45.255 45.255l-63.399 63.399a218.396 218.396 0 0 1-45.255-45.255zm302.137 45.255l-63.399-63.399c18.559-10.987 34.252-26.67 45.255-45.255l63.399 63.399a218.403 218.403 0 0 1-45.255 45.255z"],
    "lightbulb": [384, 512, [], "f0eb", "M272 428v28c0 10.449-6.68 19.334-16 22.629V488c0 13.255-10.745 24-24 24h-80c-13.255 0-24-10.745-24-24v-9.371c-9.32-3.295-16-12.18-16-22.629v-28c0-6.627 5.373-12 12-12h136c6.627 0 12 5.373 12 12zm-143.107-44c-9.907 0-18.826-6.078-22.376-15.327C67.697 267.541 16 277.731 16 176 16 78.803 94.805 0 192 0s176 78.803 176 176c0 101.731-51.697 91.541-90.516 192.673-3.55 9.249-12.47 15.327-22.376 15.327H128.893zM112 176c0-44.112 35.888-80 80-80 8.837 0 16-7.164 16-16s-7.163-16-16-16c-61.757 0-112 50.243-112 112 0 8.836 7.164 16 16 16s16-7.164 16-16z"],
    "link": [512, 512, [], "f0c1", "M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"],
    "lira-sign": [384, 512, [], "f195", "M371.994 256h-48.019C317.64 256 312 260.912 312 267.246 312 368 230.179 416 144 416V256.781l134.603-29.912A12 12 0 0 0 288 215.155v-40.976c0-7.677-7.109-13.38-14.603-11.714L144 191.219V160.78l134.603-29.912A12 12 0 0 0 288 119.154V78.179c0-7.677-7.109-13.38-14.603-11.714L144 95.219V44c0-6.627-5.373-12-12-12H76c-6.627 0-12 5.373-12 12v68.997L9.397 125.131A12 12 0 0 0 0 136.845v40.976c0 7.677 7.109 13.38 14.603 11.714L64 178.558v30.439L9.397 221.131A12 12 0 0 0 0 232.845v40.976c0 7.677 7.109 13.38 14.603 11.714L64 274.558V468c0 6.627 5.373 12 12 12h79.583c134.091 0 223.255-77.834 228.408-211.592.261-6.782-5.211-12.408-11.997-12.408z"],
    "list": [512, 512, [], "f03a", "M128 116V76c0-8.837 7.163-16 16-16h352c8.837 0 16 7.163 16 16v40c0 8.837-7.163 16-16 16H144c-8.837 0-16-7.163-16-16zm16 176h352c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H144c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h352c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H144c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zM16 144h64c8.837 0 16-7.163 16-16V64c0-8.837-7.163-16-16-16H16C7.163 48 0 55.163 0 64v64c0 8.837 7.163 16 16 16zm0 160h64c8.837 0 16-7.163 16-16v-64c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v64c0 8.837 7.163 16 16 16zm0 160h64c8.837 0 16-7.163 16-16v-64c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v64c0 8.837 7.163 16 16 16z"],
    "list-alt": [512, 512, [], "f022", "M464 480H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h416c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48zM128 120c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40zm0 96c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40zm0 96c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40zm288-136v-32c0-6.627-5.373-12-12-12H204c-6.627 0-12 5.373-12 12v32c0 6.627 5.373 12 12 12h200c6.627 0 12-5.373 12-12zm0 96v-32c0-6.627-5.373-12-12-12H204c-6.627 0-12 5.373-12 12v32c0 6.627 5.373 12 12 12h200c6.627 0 12-5.373 12-12zm0 96v-32c0-6.627-5.373-12-12-12H204c-6.627 0-12 5.373-12 12v32c0 6.627 5.373 12 12 12h200c6.627 0 12-5.373 12-12z"],
    "list-ol": [512, 512, [], "f0cb", "M3.263 139.527c0-7.477 3.917-11.572 11.573-11.572h15.131V88.078c0-5.163.534-10.503.534-10.503h-.356s-1.779 2.67-2.848 3.738c-4.451 4.273-10.504 4.451-15.666-1.068l-5.518-6.231c-5.342-5.341-4.984-11.216.534-16.379l21.72-19.938C32.815 33.602 36.732 32 42.785 32H54.89c7.656 0 11.749 3.916 11.749 11.572v84.384h15.488c7.655 0 11.572 4.094 11.572 11.572v8.901c0 7.477-3.917 11.572-11.572 11.572H14.836c-7.656 0-11.573-4.095-11.573-11.572v-8.902zM2.211 304.591c0-47.278 50.955-56.383 50.955-69.165 0-7.18-5.954-8.755-9.28-8.755-3.153 0-6.479 1.051-9.455 3.852-5.079 4.903-10.507 7.004-16.111 2.451l-8.579-6.829c-5.779-4.553-7.18-9.805-2.803-15.409C13.592 201.981 26.025 192 47.387 192c19.437 0 44.476 10.506 44.476 39.573 0 38.347-46.753 46.402-48.679 56.909h39.049c7.529 0 11.557 4.027 11.557 11.382v8.755c0 7.354-4.028 11.382-11.557 11.382h-67.94c-7.005 0-12.083-4.028-12.083-11.382v-4.028zM5.654 454.61l5.603-9.28c3.853-6.654 9.105-7.004 15.584-3.152 4.903 2.101 9.63 3.152 14.359 3.152 10.155 0 14.358-3.502 14.358-8.23 0-6.654-5.604-9.106-15.934-9.106h-4.728c-5.954 0-9.28-2.101-12.258-7.88l-1.05-1.926c-2.451-4.728-1.226-9.806 2.801-14.884l5.604-7.004c6.829-8.405 12.257-13.483 12.257-13.483v-.35s-4.203 1.051-12.608 1.051H16.685c-7.53 0-11.383-4.028-11.383-11.382v-8.755c0-7.53 3.853-11.382 11.383-11.382h58.484c7.529 0 11.382 4.027 11.382 11.382v3.327c0 5.778-1.401 9.806-5.079 14.183l-17.509 20.137c19.611 5.078 28.716 20.487 28.716 34.845 0 21.363-14.358 44.126-48.503 44.126-16.636 0-28.192-4.728-35.896-9.455-5.779-4.202-6.304-9.805-2.626-15.934zM144 132h352c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H144c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h352c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H144c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h352c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H144c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"],
    "list-ul": [512, 512, [], "f0ca", "M96 96c0 26.51-21.49 48-48 48S0 122.51 0 96s21.49-48 48-48 48 21.49 48 48zM48 208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm0 160c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm96-236h352c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H144c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h352c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H144c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h352c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H144c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"],
    "location-arrow": [512, 512, [], "f124", "M443.683 4.529L27.818 196.418C-18.702 217.889-3.39 288 47.933 288H224v175.993c0 51.727 70.161 66.526 91.582 20.115L507.38 68.225c18.905-40.961-23.752-82.133-63.697-63.696z"],
    "lock": [448, 512, [], "f023", "M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"],
    "lock-alt": [448, 512, [], "f30d", "M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zM264 392c0 22.1-17.9 40-40 40s-40-17.9-40-40v-48c0-22.1 17.9-40 40-40s40 17.9 40 40v48zm32-168H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"],
    "lock-open": [576, 512, [], "f3c1", "M423.5 0C339.5.3 272 69.5 272 153.5V224H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48h-48v-71.1c0-39.6 31.7-72.5 71.3-72.9 40-.4 72.7 32.1 72.7 72v80c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24v-80C576 68 507.5-.3 423.5 0z"],
    "lock-open-alt": [576, 512, [], "f3c2", "M423.5 0C339.5.3 272 69.5 272 153.5V224H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48h-48v-71.1c0-39.6 31.7-72.5 71.3-72.9 40-.4 72.7 32.1 72.7 72v80c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24v-80C576 68 507.5-.3 423.5 0zM264 392c0 22.1-17.9 40-40 40s-40-17.9-40-40v-48c0-22.1 17.9-40 40-40s40 17.9 40 40v48z"],
    "long-arrow-alt-down": [256, 512, [], "f309", "M168 345.941V44c0-6.627-5.373-12-12-12h-56c-6.627 0-12 5.373-12 12v301.941H41.941c-21.382 0-32.09 25.851-16.971 40.971l86.059 86.059c9.373 9.373 24.569 9.373 33.941 0l86.059-86.059c15.119-15.119 4.411-40.971-16.971-40.971H168z"],
    "long-arrow-alt-left": [448, 512, [], "f30a", "M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"],
    "long-arrow-alt-right": [448, 512, [], "f30b", "M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z"],
    "long-arrow-alt-up": [256, 512, [], "f30c", "M88 166.059V468c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12V166.059h46.059c21.382 0 32.09-25.851 16.971-40.971l-86.059-86.059c-9.373-9.373-24.569-9.373-33.941 0l-86.059 86.059c-15.119 15.119-4.411 40.971 16.971 40.971H88z"],
    "long-arrow-down": [320, 512, [], "f175", "M261.573 286.544L196 352.118V56c0-13.255-10.745-24-24-24h-24c-13.255 0-24 10.745-24 24v296.118l-65.573-65.574c-9.373-9.373-24.569-9.373-33.941 0L7.515 303.515c-9.373 9.373-9.373 24.569 0 33.941L143.03 472.97c9.373 9.373 24.568 9.373 33.941 0l135.515-135.514c9.373-9.373 9.373-24.569 0-33.941l-16.971-16.971c-9.373-9.373-24.569-9.373-33.942 0z"],
    "long-arrow-left": [448, 512, [], "f177", "M193.456 357.573L127.882 292H424c13.255 0 24-10.745 24-24v-24c0-13.255-10.745-24-24-24H127.882l65.574-65.573c9.373-9.373 9.373-24.569 0-33.941l-16.971-16.971c-9.373-9.373-24.569-9.373-33.941 0L7.029 239.029c-9.373 9.373-9.373 24.568 0 33.941l135.515 135.515c9.373 9.373 24.569 9.373 33.941 0l16.971-16.971c9.373-9.372 9.373-24.568 0-33.941z"],
    "long-arrow-right": [448, 512, [], "f178", "M254.544 154.427L320.118 220H24c-13.255 0-24 10.745-24 24v24c0 13.255 10.745 24 24 24h296.118l-65.574 65.573c-9.373 9.373-9.373 24.569 0 33.941l16.971 16.971c9.373 9.373 24.569 9.373 33.941 0L440.97 272.97c9.373-9.373 9.373-24.569 0-33.941L305.456 103.515c-9.373-9.373-24.569-9.373-33.941 0l-16.971 16.971c-9.373 9.372-9.373 24.568 0 33.941z"],
    "long-arrow-up": [320, 512, [], "f176", "M58.427 225.456L124 159.882V456c0 13.255 10.745 24 24 24h24c13.255 0 24-10.745 24-24V159.882l65.573 65.574c9.373 9.373 24.569 9.373 33.941 0l16.971-16.971c9.373-9.373 9.373-24.569 0-33.941L176.971 39.029c-9.373-9.373-24.568-9.373-33.941 0L7.515 174.544c-9.373 9.373-9.373 24.569 0 33.941l16.971 16.971c9.372 9.373 24.568 9.373 33.941 0z"],
    "low-vision": [576, 512, [], "f2a8", "M569.344 231.631C512.96 135.949 407.81 72 288 72c-28.468 0-56.102 3.619-82.451 10.409L152.778 10.24c-7.601-10.858-22.564-13.5-33.423-5.9l-13.114 9.178c-10.86 7.601-13.502 22.566-5.9 33.426l43.131 58.395C89.449 131.73 40.228 174.683 6.682 231.581c-.01.017-.023.033-.034.05-8.765 14.875-8.964 33.528 0 48.739 38.5 65.332 99.742 115.862 172.859 141.349L55.316 244.302A272.194 272.194 0 0 1 83.61 208.39l119.4 170.58h.01l40.63 58.04a330.055 330.055 0 0 0 78.94 1.17l-189.98-271.4a277.628 277.628 0 0 1 38.777-21.563l251.836 356.544c7.601 10.858 22.564 13.499 33.423 5.9l13.114-9.178c10.86-7.601 13.502-22.567 5.9-33.426l-43.12-58.377-.007-.009c57.161-27.978 104.835-72.04 136.81-126.301a47.938 47.938 0 0 0 .001-48.739zM390.026 345.94l-19.066-27.23c24.682-32.567 27.711-76.353 8.8-111.68v.03c0 23.65-19.17 42.82-42.82 42.82-23.828 0-42.82-19.349-42.82-42.82 0-23.65 19.17-42.82 42.82-42.82h.03c-24.75-13.249-53.522-15.643-79.51-7.68l-19.068-27.237C253.758 123.306 270.488 120 288 120c75.162 0 136 60.826 136 136 0 34.504-12.833 65.975-33.974 89.94z"],
    "magic": [512, 512, [], "f0d0", "M101.1 505L7 410.9c-9.4-9.4-9.4-24.6 0-33.9L377 7c9.4-9.4 24.6-9.4 33.9 0l94.1 94.1c9.4 9.4 9.4 24.6 0 33.9L135 505c-9.3 9.3-24.5 9.3-33.9 0zM304 159.2l48.8 48.8 89.9-89.9-48.8-48.8-89.9 89.9zM138.9 39.3l-11.7 23.8-26.2 3.8c-4.7.7-6.6 6.5-3.2 9.8l19 18.5-4.5 26.1c-.8 4.7 4.1 8.3 8.3 6.1L144 115l23.4 12.3c4.2 2.2 9.1-1.4 8.3-6.1l-4.5-26.1 19-18.5c3.4-3.3 1.5-9.1-3.2-9.8L160.8 63l-11.7-23.8c-2-4.1-8.1-4.1-10.2.1zm97.7-20.7l-7.8 15.8-17.5 2.6c-3.1.5-4.4 4.3-2.1 6.5l12.6 12.3-3 17.4c-.5 3.1 2.8 5.5 5.6 4L240 69l15.6 8.2c2.8 1.5 6.1-.9 5.6-4l-3-17.4 12.6-12.3c2.3-2.2 1-6.1-2.1-6.5l-17.5-2.5-7.8-15.8c-1.4-3-5.4-3-6.8-.1zm-192 0l-7.8 15.8L19.3 37c-3.1.5-4.4 4.3-2.1 6.5l12.6 12.3-3 17.4c-.5 3.1 2.8 5.5 5.6 4L48 69l15.6 8.2c2.8 1.5 6.1-.9 5.6-4l-3-17.4 12.6-12.3c2.3-2.2 1-6.1-2.1-6.5l-17.5-2.5-7.8-15.8c-1.4-3-5.4-3-6.8-.1zm416 223.5l-7.8 15.8-17.5 2.5c-3.1.5-4.4 4.3-2.1 6.5l12.6 12.3-3 17.4c-.5 3.1 2.8 5.5 5.6 4l15.6-8.2 15.6 8.2c2.8 1.5 6.1-.9 5.6-4l-3-17.4 12.6-12.3c2.3-2.2 1-6.1-2.1-6.5l-17.5-2.5-7.8-15.8c-1.4-2.8-5.4-2.8-6.8 0z"],
    "magnet": [512, 512, [], "f076", "M164.1 160H12c-6.6 0-12-5.4-12-12V68c0-19.9 16.1-36 36-36h104c19.9 0 36 16.1 36 36v80c.1 6.6-5.3 12-11.9 12zm348-12V67.9c0-19.9-16.1-36-36-36h-104c-19.9 0-36 16.1-36 36v80c0 6.6 5.4 12 12 12h152c6.6.1 12-5.3 12-11.9zm-164 44c-6.6 0-12 5.4-12 12v52c0 128.1-160 127.9-160 0v-52c0-6.6-5.4-12-12-12h-152c-6.7 0-12 5.4-12 12.1.1 21.4.6 40.3 0 53.3C.1 408 136.3 504 256.9 504 377.5 504 512 408 512 257.3c-.6-12.8-.2-33 0-53.2 0-6.7-5.3-12.1-12-12.1H348.1z"],
    "male": [192, 512, [], "f183", "M96 0c35.346 0 64 28.654 64 64s-28.654 64-64 64-64-28.654-64-64S60.654 0 96 0m48 144h-11.36c-22.711 10.443-49.59 10.894-73.28 0H48c-26.51 0-48 21.49-48 48v136c0 13.255 10.745 24 24 24h16v136c0 13.255 10.745 24 24 24h64c13.255 0 24-10.745 24-24V352h16c13.255 0 24-10.745 24-24V192c0-26.51-21.49-48-48-48z"],
    "map": [576, 512, [], "f279", "M576 56.015v335.97a23.998 23.998 0 0 1-13.267 21.466l-128 64C418.948 485.344 400 473.992 400 455.985v-335.97a23.998 23.998 0 0 1 13.267-21.466l128-64C557.052 26.656 576 38.008 576 56.015zm-206.253 42.07l-144-64c-15.751-7-33.747 4.461-33.747 21.932v335.967a24 24 0 0 0 14.253 21.931l144 64c15.751 7 33.747-4.461 33.747-21.931V120.017a24 24 0 0 0-14.253-21.932zm-228.48-63.536l-128 63.985A23.998 23.998 0 0 0 0 120v335.985c0 18.007 18.948 29.359 34.733 21.466l128-63.985A23.998 23.998 0 0 0 176 392V56.015c0-18.007-18.948-29.359-34.733-21.466z"],
    "map-marker": [384, 512, [], "f041", "M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0z"],
    "map-marker-alt": [384, 512, [], "f3c5", "M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"],
    "map-pin": [320, 512, [], "f276", "M192 300.813v172.82l-22.015 33.023c-4.75 7.125-15.219 7.125-19.969 0L128 473.633v-172.82a162.221 162.221 0 0 0 64 0zM160 0c79.529 0 144 64.471 144 144s-64.471 144-144 144S16 223.529 16 144 80.471 0 160 0M80 136c0-39.701 32.299-72 72-72a8 8 0 0 0 0-16c-48.523 0-88 39.477-88 88a8 8 0 0 0 16 0z"],
    "map-signs": [512, 512, [], "f277", "M487.515 104.485L439.03 152.97a23.998 23.998 0 0 1-16.97 7.029H56c-13.255 0-24-10.745-24-24V56c0-13.255 10.745-24 24-24h160v-8c0-13.255 10.745-24 24-24h32c13.255 0 24 10.745 24 24v8h126.059a24 24 0 0 1 16.97 7.029l48.485 48.485c4.687 4.687 4.687 12.285.001 16.971zM216 368v120c0 13.255 10.745 24 24 24h32c13.255 0 24-10.745 24-24V368h-80zm240-144H296v-48h-80v48H89.941a24 24 0 0 0-16.97 7.029l-48.485 48.485c-4.686 4.686-4.686 12.284 0 16.971l48.485 48.485a23.998 23.998 0 0 0 16.97 7.029H456c13.255 0 24-10.745 24-24v-80C480 234.745 469.255 224 456 224z"],
    "mars": [384, 512, [], "f222", "M372 64h-79c-10.7 0-16 12.9-8.5 20.5l16.9 16.9-80.7 80.7c-22.2-14-48.5-22.1-76.7-22.1C64.5 160 0 224.5 0 304s64.5 144 144 144 144-64.5 144-144c0-28.2-8.1-54.5-22.1-76.7l80.7-80.7 16.9 16.9c7.6 7.6 20.5 2.2 20.5-8.5V76c0-6.6-5.4-12-12-12zM144 384c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"],
    "mars-double": [512, 512, [], "f227", "M340 0h-79c-10.7 0-16 12.9-8.5 20.5l16.9 16.9-48.7 48.7C198.5 72.1 172.2 64 144 64 64.5 64 0 128.5 0 208s64.5 144 144 144 144-64.5 144-144c0-28.2-8.1-54.5-22.1-76.7l48.7-48.7 16.9 16.9c2.4 2.4 5.5 3.5 8.4 3.5 6.2 0 12.1-4.8 12.1-12V12c0-6.6-5.4-12-12-12zM144 288c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80zm356-128.1h-79c-10.7 0-16 12.9-8.5 20.5l16.9 16.9-48.7 48.7c-18.2-11.4-39-18.9-61.5-21.3-2.1 21.8-8.2 43.3-18.4 63.3 1.1 0 2.2-.1 3.2-.1 44.1 0 80 35.9 80 80s-35.9 80-80 80-80-35.9-80-80c0-1.1 0-2.2.1-3.2-20 10.2-41.5 16.4-63.3 18.4C168.4 455.6 229.6 512 304 512c79.5 0 144-64.5 144-144 0-28.2-8.1-54.5-22.1-76.7l48.7-48.7 16.9 16.9c2.4 2.4 5.4 3.5 8.4 3.5 6.2 0 12.1-4.8 12.1-12v-79c0-6.7-5.4-12.1-12-12.1z"],
    "mars-stroke": [384, 512, [], "f229", "M372 64h-79c-10.7 0-16 12.9-8.5 20.5l16.9 16.9-17.5 17.5-14.1-14.1c-4.7-4.7-12.3-4.7-17 0L224.5 133c-4.7 4.7-4.7 12.3 0 17l14.1 14.1-18 18c-22.2-14-48.5-22.1-76.7-22.1C64.5 160 0 224.5 0 304s64.5 144 144 144 144-64.5 144-144c0-28.2-8.1-54.5-22.1-76.7l18-18 14.1 14.1c4.7 4.7 12.3 4.7 17 0l28.3-28.3c4.7-4.7 4.7-12.3 0-17L329.2 164l17.5-17.5 16.9 16.9c7.6 7.6 20.5 2.2 20.5-8.5V76c-.1-6.6-5.5-12-12.1-12zM144 384c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"],
    "mars-stroke-h": [480, 512, [], "f22b", "M476.2 247.5l-55.9-55.9c-7.6-7.6-20.5-2.2-20.5 8.5V224H376v-20c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v20h-27.6c-5.8-25.6-18.7-49.9-38.6-69.8C189.6 98 98.4 98 42.2 154.2c-56.2 56.2-56.2 147.4 0 203.6 56.2 56.2 147.4 56.2 203.6 0 19.9-19.9 32.8-44.2 38.6-69.8H312v20c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-20h23.9v23.9c0 10.7 12.9 16 20.5 8.5l55.9-55.9c4.6-4.7 4.6-12.3-.1-17zm-275.6 65.1c-31.2 31.2-81.9 31.2-113.1 0-31.2-31.2-31.2-81.9 0-113.1 31.2-31.2 81.9-31.2 113.1 0 31.2 31.1 31.2 81.9 0 113.1z"],
    "mars-stroke-v": [288, 512, [], "f22a", "M245.8 234.2c-19.9-19.9-44.2-32.8-69.8-38.6v-25.4h20c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-20V81.4h23.9c10.7 0 16-12.9 8.5-20.5L152.5 5.1c-4.7-4.7-12.3-4.7-17 0L79.6 61c-7.6 7.6-2.2 20.5 8.5 20.5H112v24.7H92c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h20v25.4c-25.6 5.8-49.9 18.7-69.8 38.6-56.2 56.2-56.2 147.4 0 203.6 56.2 56.2 147.4 56.2 203.6 0 56.3-56.2 56.3-147.4 0-203.6zm-45.2 158.4c-31.2 31.2-81.9 31.2-113.1 0-31.2-31.2-31.2-81.9 0-113.1 31.2-31.2 81.9-31.2 113.1 0 31.2 31.1 31.2 81.9 0 113.1z"],
    "medkit": [512, 512, [], "f0fa", "M96 480h320V128h-32V80c0-26.51-21.49-48-48-48H176c-26.51 0-48 21.49-48 48v48H96v352zm96-384h128v32H192V96zm320 80v256c0 26.51-21.49 48-48 48h-16V128h16c26.51 0 48 21.49 48 48zM64 480H48c-26.51 0-48-21.49-48-48V176c0-26.51 21.49-48 48-48h16v352zm288-208v32c0 8.837-7.163 16-16 16h-48v48c0 8.837-7.163 16-16 16h-32c-8.837 0-16-7.163-16-16v-48h-48c-8.837 0-16-7.163-16-16v-32c0-8.837 7.163-16 16-16h48v-48c0-8.837 7.163-16 16-16h32c8.837 0 16 7.163 16 16v48h48c8.837 0 16 7.163 16 16z"],
    "meh": [512, 512, [], "f11a", "M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zm-396-64c0 37.497 30.503 68 68 68s68-30.503 68-68-30.503-68-68-68-68 30.503-68 68zm160.5 0c0 37.221 30.279 67.5 67.5 67.5s67.5-30.279 67.5-67.5-30.279-67.5-67.5-67.5-67.5 30.279-67.5 67.5zm67.5-48a47.789 47.789 0 0 0-22.603 5.647h.015c10.916 0 19.765 8.849 19.765 19.765s-8.849 19.765-19.765 19.765-19.765-8.849-19.765-19.765v-.015A47.789 47.789 0 0 0 288 192c0 26.51 21.49 48 48 48s48-21.49 48-48-21.49-48-48-48zm-160 0a47.789 47.789 0 0 0-22.603 5.647h.015c10.916 0 19.765 8.849 19.765 19.765s-8.849 19.765-19.765 19.765-19.765-8.849-19.765-19.765v-.015A47.789 47.789 0 0 0 128 192c0 26.51 21.49 48 48 48s48-21.49 48-48-21.49-48-48-48zm160 208H176c-21.178 0-21.169 32 0 32h160c21.178 0 21.169-32 0-32z"],
    "mercury": [288, 512, [], "f223", "M288 208c0-44.2-19.9-83.7-51.2-110.1 2.5-1.8 4.9-3.8 7.2-5.8 24.7-21.2 39.8-48.8 43.2-78.8.9-7.1-4.7-13.3-11.9-13.3h-40.5C229 0 224.1 4.1 223 9.8c-2.4 12.5-9.6 24.3-20.7 33.8C187 56.8 166.3 64 144 64s-43-7.2-58.4-20.4C74.5 34.1 67.4 22.3 64.9 9.8 63.8 4.1 58.9 0 53.2 0H12.7C5.5 0-.1 6.2.8 13.3 4.2 43.4 19.2 71 44 92.2c2.3 2 4.7 3.9 7.2 5.8C19.9 124.3 0 163.8 0 208c0 68.5 47.9 125.9 112 140.4V400H76c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h36v36c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-36h36c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-36v-51.6c64.1-14.5 112-71.9 112-140.4zm-224 0c0-44.1 35.9-80 80-80s80 35.9 80 80-35.9 80-80 80-80-35.9-80-80z"],
    "microchip": [512, 512, [], "f2db", "M416 48v416c0 26.51-21.49 48-48 48H144c-26.51 0-48-21.49-48-48V48c0-26.51 21.49-48 48-48h224c26.51 0 48 21.49 48 48zm96 58v12a6 6 0 0 1-6 6h-18v6a6 6 0 0 1-6 6h-42V88h42a6 6 0 0 1 6 6v6h18a6 6 0 0 1 6 6zm0 96v12a6 6 0 0 1-6 6h-18v6a6 6 0 0 1-6 6h-42v-48h42a6 6 0 0 1 6 6v6h18a6 6 0 0 1 6 6zm0 96v12a6 6 0 0 1-6 6h-18v6a6 6 0 0 1-6 6h-42v-48h42a6 6 0 0 1 6 6v6h18a6 6 0 0 1 6 6zm0 96v12a6 6 0 0 1-6 6h-18v6a6 6 0 0 1-6 6h-42v-48h42a6 6 0 0 1 6 6v6h18a6 6 0 0 1 6 6zM30 376h42v48H30a6 6 0 0 1-6-6v-6H6a6 6 0 0 1-6-6v-12a6 6 0 0 1 6-6h18v-6a6 6 0 0 1 6-6zm0-96h42v48H30a6 6 0 0 1-6-6v-6H6a6 6 0 0 1-6-6v-12a6 6 0 0 1 6-6h18v-6a6 6 0 0 1 6-6zm0-96h42v48H30a6 6 0 0 1-6-6v-6H6a6 6 0 0 1-6-6v-12a6 6 0 0 1 6-6h18v-6a6 6 0 0 1 6-6zm0-96h42v48H30a6 6 0 0 1-6-6v-6H6a6 6 0 0 1-6-6v-12a6 6 0 0 1 6-6h18v-6a6 6 0 0 1 6-6z"],
    "microphone": [384, 512, [], "f130", "M96 256V96c0-53.019 42.981-96 96-96s96 42.981 96 96v160c0 53.019-42.981 96-96 96s-96-42.981-96-96zm252-56h-24c-6.627 0-12 5.373-12 12v42.68c0 66.217-53.082 120.938-119.298 121.318C126.213 376.38 72 322.402 72 256v-44c0-6.627-5.373-12-12-12H36c-6.627 0-12 5.373-12 12v44c0 84.488 62.693 154.597 144 166.278V468h-68c-6.627 0-12 5.373-12 12v20c0 6.627 5.373 12 12 12h184c6.627 0 12-5.373 12-12v-20c0-6.627-5.373-12-12-12h-68v-45.722c81.307-11.681 144-81.79 144-166.278v-44c0-6.627-5.373-12-12-12z"],
    "microphone-alt": [384, 512, [], "f3c9", "M360 212v44c0 84.488-62.693 154.597-144 166.278V468h68c6.627 0 12 5.373 12 12v20c0 6.627-5.373 12-12 12H100c-6.627 0-12-5.373-12-12v-20c0-6.627 5.373-12 12-12h68v-45.722C86.693 410.597 24 340.488 24 256v-44c0-6.627 5.373-12 12-12h24c6.627 0 12 5.373 12 12v42.68c0 66.217 53.082 120.938 119.298 121.318C257.787 376.38 312 322.402 312 256v-44c0-6.627 5.373-12 12-12h24c6.627 0 12 5.373 12 12zm-130 12h58v-32h-58a6 6 0 0 1-6-6v-20a6 6 0 0 1 6-6h58v-32h-58a6 6 0 0 1-6-6v-20a6 6 0 0 1 6-6h58C288 42.738 244.625-.393 191.272.003 138.34.395 96 44.271 96 97.205v157.59c0 52.934 42.34 96.81 95.272 97.202C244.625 352.393 288 309.262 288 256h-58a6 6 0 0 1-6-6v-20a6 6 0 0 1 6-6z"],
    "microphone-slash": [512, 512, [], "f131", "M421.45 285.195L376 239.746V212c0-6.627 5.373-12 12-12h24c6.627 0 12 5.373 12 12v44c0 9.957-.881 19.71-2.55 29.195zM352 96c0-53.019-42.981-96-96-96-32.574 0-61.354 16.227-78.71 41.035L352 215.746V96zm152.971 363.716L52.284 7.029c-9.373-9.373-24.569-9.373-33.941 0L7.029 18.343c-9.372 9.373-9.372 24.568 0 33.941L160 205.254v49.577c0 53.089 43.436 97.452 96.524 97.167 14.626-.078 28.471-3.44 40.854-9.366l17.746 17.746c-17.529 9.971-37.794 15.666-59.372 15.622C189.355 375.864 136 321.053 136 254.656V212c0-6.627-5.373-12-12-12h-24c-6.627 0-12 5.373-12 12v44c0 84.488 62.693 154.597 144 166.278V468h-68c-6.627 0-12 5.373-12 12v20c0 6.627 5.373 12 12 12h184c6.627 0 12-5.373 12-12v-20c0-6.627-5.373-12-12-12h-68v-45.722c25.625-3.682 49.396-13.172 69.942-27.083L459.717 504.97c9.373 9.373 24.569 9.373 33.941 0l11.313-11.313c9.372-9.373 9.372-24.568 0-33.941z"],
    "minus": [448, 512, [], "f068", "M424 318.2c13.3 0 24-10.7 24-24v-76.4c0-13.3-10.7-24-24-24H24c-13.3 0-24 10.7-24 24v76.4c0 13.3 10.7 24 24 24h400z"],
    "minus-circle": [512, 512, [], "f056", "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zM124 296c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h264c6.6 0 12 5.4 12 12v56c0 6.6-5.4 12-12 12H124z"],
    "minus-hexagon": [576, 512, [], "f307", "M553.5 231.8c8.7 14.9 8.7 33.4 0 48.4l-112 192c-8.6 14.7-24.4 23.8-41.5 23.8H176c-17.1 0-32.9-9.1-41.5-23.8l-112-192c-8.7-14.9-8.7-33.4 0-48.4l112-192C143.1 25.1 158.9 16 176 16h224c17.1 0 32.9 9.1 41.5 23.8l112 192zM420 296c6.6 0 12-5.4 12-12v-56c0-6.6-5.4-12-12-12H156c-6.6 0-12 5.4-12 12v56c0 6.6 5.4 12 12 12h264z"],
    "minus-octagon": [512, 512, [], "f308", "M497.9 150.5c9 9 14.1 21.2 14.1 33.9v143.1c0 12.7-5.1 24.9-14.1 33.9L361.5 497.9c-9 9-21.2 14.1-33.9 14.1H184.5c-12.7 0-24.9-5.1-33.9-14.1L14.1 361.5c-9-9-14.1-21.2-14.1-33.9V184.5c0-12.7 5.1-24.9 14.1-33.9L150.5 14.1c9-9 21.2-14.1 33.9-14.1h143.1c12.7 0 24.9 5.1 33.9 14.1l136.5 136.4zM388 296c6.6 0 12-5.4 12-12v-56c0-6.6-5.4-12-12-12H124c-6.6 0-12 5.4-12 12v56c0 6.6 5.4 12 12 12h264z"],
    "minus-square": [448, 512, [], "f146", "M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM92 296c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h264c6.6 0 12 5.4 12 12v56c0 6.6-5.4 12-12 12H92z"],
    "mobile": [320, 512, [], "f10b", "M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"],
    "mobile-alt": [320, 512, [], "f3cd", "M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z"],
    "mobile-android": [320, 512, [], "f3ce", "M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-64 452c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12v8z"],
    "mobile-android-alt": [320, 512, [], "f3cf", "M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-64 452c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12v8zm64-80c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z"],
    "money-bill": [640, 512, [], "f0d6", "M640 120v272c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V120c0-13.255 10.745-24 24-24h592c13.255 0 24 10.745 24 24zM96 384c0-35.346-28.654-64-64-64v64h64zm0-256H32v64c35.346 0 64-28.654 64-64zm304 128c0-53.021-35.816-96-80-96s-80 42.979-80 96c0 53.012 35.814 96 80 96 44.167 0 80-42.969 80-96zm208 64c-35.346 0-64 28.654-64 64h64v-64zm0-192h-64c0 35.346 28.654 64 64 64v-64z"],
    "money-bill-alt": [640, 512, [], "f3d1", "M640 120v272c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V120c0-13.255 10.745-24 24-24h592c13.255 0 24 10.745 24 24zM96 384c0-35.346-28.654-64-64-64v64h64zm0-256H32v64c35.346 0 64-28.654 64-64zm304 128c0-53.021-35.816-96-80-96s-80 42.979-80 96c0 53.012 35.814 96 80 96 44.167 0 80-42.969 80-96zm208 64c-35.346 0-64 28.654-64 64h64v-64zm0-192h-64c0 35.346 28.654 64 64 64v-64zM277.563 299.527c0-7.477 3.917-11.572 11.573-11.572h15.131v-39.878c0-5.163.534-10.503.534-10.503h-.356s-1.779 2.67-2.848 3.738c-4.451 4.273-10.504 4.451-15.666-1.068l-5.518-6.231c-5.342-5.341-4.984-11.216.534-16.379l21.72-19.939c4.449-4.095 8.366-5.697 14.42-5.697h12.105c7.656 0 11.749 3.916 11.749 11.572v84.384h15.488c7.655 0 11.572 4.094 11.572 11.572v8.901c0 7.477-3.917 11.572-11.572 11.572h-67.293c-7.656 0-11.573-4.095-11.573-11.572v-8.9z"],
    "moon": [512, 512, [], "f186", "M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"],
    "motorcycle": [640, 512, [], "f21c", "M512.949 192.003c-14.862-.108-29.14 2.322-42.434 6.874L437.589 144H520c13.255 0 24-10.745 24-24V88c0-13.255-10.745-24-24-24h-45.311a24 24 0 0 0-17.839 7.945l-37.496 41.663-22.774-37.956A24 24 0 0 0 376 64h-80c-8.837 0-16 7.163-16 16v16c0 8.837 7.163 16 16 16h66.411l19.2 32H227.904c-17.727-23.073-44.924-40-99.904-40H72.54c-13.455 0-24.791 11.011-24.536 24.464C48.252 141.505 58.9 152 72 152h56c24.504 0 38.686 10.919 47.787 24.769l-11.291 20.529c-13.006-3.865-26.871-5.736-41.251-5.21C55.857 194.549 1.565 249.605.034 317.021-1.603 389.076 56.317 448 128 448c59.642 0 109.744-40.794 123.953-96h84.236c13.673 0 24.589-11.421 23.976-25.077-2.118-47.12 17.522-93.665 56.185-125.026l12.485 20.808c-27.646 23.654-45.097 58.88-44.831 98.179.47 69.556 57.203 126.452 126.758 127.11 71.629.678 129.839-57.487 129.234-129.099-.588-69.591-57.455-126.386-127.047-126.892zM128 400c-44.112 0-80-35.888-80-80s35.888-80 80-80c4.242 0 8.405.341 12.469.982L98.97 316.434C90.187 332.407 101.762 352 120 352h81.297c-12.37 28.225-40.56 48-73.297 48zm388.351-.116C470.272 402.337 432 365.554 432 320c0-21.363 8.434-40.781 22.125-55.144l49.412 82.352c4.546 7.577 14.375 10.034 21.952 5.488l13.72-8.232c7.577-4.546 10.034-14.375 5.488-21.952l-48.556-80.927A80.005 80.005 0 0 1 512 240c45.554 0 82.338 38.273 79.884 84.352-2.16 40.558-34.974 73.372-75.533 75.532z"],
    "mouse-pointer": [320, 512, [], "f245", "M302.189 329.126H196.105l55.831 135.993c3.889 9.428-.555 19.999-9.444 23.999l-49.165 21.427c-9.165 4-19.443-.571-23.332-9.714l-53.053-129.136-86.664 89.138C18.729 472.71 0 463.554 0 447.977V18.299C0 1.899 19.921-6.096 30.277 5.443l284.412 292.542c11.472 11.179 3.007 31.141-12.5 31.141z"],
    "music": [512, 512, [], "f001", "M470.4 1.5l-304 96C153.1 101.7 144 114 144 128v264.6c-14.1-5.4-30.5-8.6-48-8.6-53 0-96 28.7-96 64s43 64 96 64 96-28.7 96-64V220.5l272-85.9v194c-14.1-5.4-30.5-8.6-48-8.6-53 0-96 28.7-96 64s43 64 96 64 96-28.7 96-64V32c0-21.7-21.1-37-41.6-30.5z"],
    "neuter": [288, 512, [], "f22c", "M288 176c0-79.5-64.5-144-144-144S0 96.5 0 176c0 68.5 47.9 125.9 112 140.4V468c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12V316.4c64.1-14.5 112-71.9 112-140.4zm-144 80c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"],
    "newspaper": [576, 512, [], "f1ea", "M552 64H88c-13.255 0-24 10.745-24 24v8H24c-13.255 0-24 10.745-24 24v272c0 30.928 25.072 56 56 56h472c26.51 0 48-21.49 48-48V88c0-13.255-10.745-24-24-24zM56 400a8 8 0 0 1-8-8V144h16v248a8 8 0 0 1-8 8zm236-16H140c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm208 0H348c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm-208-96H140c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm208 0H348c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm0-96H140c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h360c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12z"],
    "object-group": [512, 512, [], "f247", "M480 128V96h20c6.627 0 12-5.373 12-12V44c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v20H64V44c0-6.627-5.373-12-12-12H12C5.373 32 0 37.373 0 44v40c0 6.627 5.373 12 12 12h20v320H12c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12v-20h384v20c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-20V128zM96 276V140c0-6.627 5.373-12 12-12h168c6.627 0 12 5.373 12 12v136c0 6.627-5.373 12-12 12H108c-6.627 0-12-5.373-12-12zm320 96c0 6.627-5.373 12-12 12H236c-6.627 0-12-5.373-12-12v-52h72c13.255 0 24-10.745 24-24v-72h84c6.627 0 12 5.373 12 12v136z"],
    "object-ungroup": [576, 512, [], "f248", "M64 320v26a6 6 0 0 1-6 6H6a6 6 0 0 1-6-6v-52a6 6 0 0 1 6-6h26V96H6a6 6 0 0 1-6-6V38a6 6 0 0 1 6-6h52a6 6 0 0 1 6 6v26h288V38a6 6 0 0 1 6-6h52a6 6 0 0 1 6 6v52a6 6 0 0 1-6 6h-26v192h26a6 6 0 0 1 6 6v52a6 6 0 0 1-6 6h-52a6 6 0 0 1-6-6v-26H64zm480-64v-32h26a6 6 0 0 0 6-6v-52a6 6 0 0 0-6-6h-52a6 6 0 0 0-6 6v26H408v72h8c13.255 0 24 10.745 24 24v64c0 13.255-10.745 24-24 24h-64c-13.255 0-24-10.745-24-24v-8H192v72h-26a6 6 0 0 0-6 6v52a6 6 0 0 0 6 6h52a6 6 0 0 0 6-6v-26h288v26a6 6 0 0 0 6 6h52a6 6 0 0 0 6-6v-52a6 6 0 0 0-6-6h-26V256z"],
    "octagon": [512, 512, [], "f306", "M361.5 14.1c-9-9-21.2-14.1-33.9-14.1H184.5c-12.7 0-24.9 5.1-33.9 14.1L14.1 150.5c-9 9-14.1 21.2-14.1 33.9v143.1c0 12.7 5.1 24.9 14.1 33.9l136.5 136.5c9 9 21.2 14.1 33.9 14.1h143.1c12.7 0 24.9-5.1 33.9-14.1L498 361.4c9-9 14.1-21.2 14.1-33.9v-143c0-12.7-5.1-24.9-14.1-33.9L361.5 14.1z"],
    "outdent": [448, 512, [], "f03b", "M0 84V44c0-8.837 7.163-16 16-16h416c8.837 0 16 7.163 16 16v40c0 8.837-7.163 16-16 16H16c-8.837 0-16-7.163-16-16zm208 144h224c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H208c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zM16 484h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm192-128h224c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H208c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zM4.687 267.313l96 95.984C110.734 373.348 128 366.224 128 351.984V160.008c0-14.329-17.325-21.304-27.313-11.313l-96 95.992c-6.249 6.248-6.249 16.378 0 22.626z"],
    "paint-brush": [512, 512, [], "f1fc", "M269.9 364.6c1.4 6.4 2.1 13 2.1 19.7 0 81.2-54.2 127.7-134.8 127.7C41.5 512 0 435.1 0 347.6c10.4 7.1 46.9 36.5 58.7 36.5 7 0 13-4 15.5-10.6 23.6-62.2 66.5-76.5 112.9-77.4 15.6 33.8 46.1 59.6 82.8 68.5zM460.6 0c-14.4 0-27.9 6.4-38.2 15.7C228.2 190 208 194.1 208 245.4c0 48.8 40.5 90.6 90.2 90.6 59 0 93.2-43.4 200.6-244.8 7-13.7 13.2-28.5 13.2-43.9C512 19.7 487.3 0 460.6 0z"],
    "paper-plane": [512, 512, [], "f1d8", "M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"],
    "paperclip": [448, 512, [], "f0c6", "M43.246 466.142c-58.43-60.289-57.341-157.511 1.386-217.581L254.392 34c44.316-45.332 116.351-45.336 160.671 0 43.89 44.894 43.943 117.329 0 162.276L232.214 383.128c-29.855 30.537-78.633 30.111-107.982-.998-28.275-29.97-27.368-77.473 1.452-106.953l143.743-146.835c6.182-6.314 16.312-6.422 22.626-.241l22.861 22.379c6.315 6.182 6.422 16.312.241 22.626L171.427 319.927c-4.932 5.045-5.236 13.428-.648 18.292 4.372 4.634 11.245 4.711 15.688.165l182.849-186.851c19.613-20.062 19.613-52.725-.011-72.798-19.189-19.627-49.957-19.637-69.154 0L90.39 293.295c-34.763 35.56-35.299 93.12-1.191 128.313 34.01 35.093 88.985 35.137 123.058.286l172.06-175.999c6.177-6.319 16.307-6.433 22.626-.256l22.877 22.364c6.319 6.177 6.434 16.307.256 22.626l-172.06 175.998c-59.576 60.938-155.943 60.216-214.77-.485z"],
    "paragraph": [448, 512, [], "f1dd", "M408 32H177.531C88.948 32 16.045 103.335 16 191.918 15.956 280.321 87.607 352 176 352v104c0 13.255 10.745 24 24 24h32c13.255 0 24-10.745 24-24V112h32v344c0 13.255 10.745 24 24 24h32c13.255 0 24-10.745 24-24V112h40c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24z"],
    "paste": [448, 512, [], "f0ea", "M128 184c0-30.879 25.122-56 56-56h136V56c0-13.255-10.745-24-24-24h-80.61C204.306 12.89 183.637 0 160 0s-44.306 12.89-55.39 32H24C10.745 32 0 42.745 0 56v336c0 13.255 10.745 24 24 24h104V184zm32-144c13.255 0 24 10.745 24 24s-10.745 24-24 24-24-10.745-24-24 10.745-24 24-24zm184 248h104v200c0 13.255-10.745 24-24 24H184c-13.255 0-24-10.745-24-24V184c0-13.255 10.745-24 24-24h136v104c0 13.2 10.8 24 24 24zm104-38.059V256h-96v-96h6.059a24 24 0 0 1 16.97 7.029l65.941 65.941a24.002 24.002 0 0 1 7.03 16.971z"],
    "pause": [448, 512, [], "f04c", "M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z"],
    "pause-circle": [512, 512, [], "f28b", "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm-16 328c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v160zm112 0c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v160z"],
    "paw": [512, 512, [], "f1b0", "M85.231 330.958C36 330.958 0 273.792 0 231.5c0-28.292 16-58.042 49.538-58.042 49.231 0 85.231 57.458 85.231 99.75 0 28.292-15.692 57.75-49.538 57.75zm348 106.167c0 37.042-32 42.875-63.385 42.875-41.231 0-74.462-26.25-113.846-26.25-41.231 0-76.308 25.958-120.923 25.958-29.847 0-56.308-9.625-56.308-42.583C78.769 368 180.616 265.333 256 265.333s177.231 102.959 177.231 171.792zM182.462 203.792c-49.847 0-80-59.5-80-100.333C102.462 70.792 120.308 32 160 32c50.154 0 80 59.5 80 100.333 0 32.667-17.846 71.459-57.538 71.459zM272 132.333C272 91.5 301.846 32 352 32c39.692 0 57.539 38.792 57.539 71.458 0 40.833-30.154 100.333-80.001 100.333C289.846 203.792 272 165 272 132.333zM512 231.5c0 42.292-36 99.458-85.231 99.458-33.847 0-49.538-29.458-49.538-57.75 0-42.291 35.999-99.75 85.231-99.75C496 173.458 512 203.208 512 231.5z"],
    "pen": [512, 512, [], "f304", "M301.2 99.8l111 111c4.7 4.7 4.7 12.3 0 17L140.8 499.2 26.7 511.8C11.4 513.5-1.5 500.6.2 485.3l12.7-114.2L284.2 99.8c4.7-4.7 12.3-4.7 17 0zm196.7-25.6l-60.1-60.1c-18.7-18.7-49.1-18.7-67.9 0l-46.1 46.1c-4.7 4.7-4.7 12.3 0 17l111 111c4.7 4.7 12.3 4.7 17 0l46.1-46.1c18.8-18.8 18.8-49.2 0-67.9z"],
    "pen-alt": [512, 512, [], "f305", "M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zm-85.7 68.7L251 49.7c-9.4-9.4-24.6-9.4-33.9 0L77.8 189c-9.4 9.4-9.4 24.6 0 33.9l11.3 11.3c9.4 9.4 24.6 9.4 33.9 0l111-111 13.4 13.4L12.8 371.2.2 485.3c-1.7 15.3 11.2 28.2 26.5 26.5l114.2-12.7 271.4-271.4c4.6-4.6 4.6-12.2-.1-16.9z"],
    "pen-square": [448, 512, [], "f14b", "M400 480H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zM238.1 177.9L102.4 313.6l-6.3 57.1c-.8 7.6 5.6 14.1 13.3 13.3l57.1-6.3L302.2 242c2.3-2.3 2.3-6.1 0-8.5L246.7 178c-2.5-2.4-6.3-2.4-8.6-.1zM345 165.1L314.9 135c-9.4-9.4-24.6-9.4-33.9 0l-23.1 23.1c-2.3 2.3-2.3 6.1 0 8.5l55.5 55.5c2.3 2.3 6.1 2.3 8.5 0L345 199c9.3-9.3 9.3-24.5 0-33.9z"],
    "pencil": [512, 512, [], "f040", "M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z"],
    "pencil-alt": [512, 512, [], "f303", "M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z"],
    "percent": [448, 512, [], "f295", "M112 224c61.9 0 112-50.1 112-112S173.9 0 112 0 0 50.1 0 112s50.1 112 112 112zm0-160c26.5 0 48 21.5 48 48s-21.5 48-48 48-48-21.5-48-48 21.5-48 48-48zm224 224c-61.9 0-112 50.1-112 112s50.1 112 112 112 112-50.1 112-112-50.1-112-112-112zm0 160c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zM392.3.2l31.6-.1c19.4-.1 30.9 21.8 19.7 37.8L77.4 501.6a23.95 23.95 0 0 1-19.6 10.2l-33.4.1c-19.5 0-30.9-21.9-19.7-37.8l368-463.7C377.2 4 384.5.2 392.3.2z"],
    "phone": [512, 512, [], "f095", "M493.397 24.615l-104-23.997c-11.314-2.611-22.879 3.252-27.456 13.931l-48 111.997a24 24 0 0 0 6.862 28.029l60.617 49.596c-35.973 76.675-98.938 140.508-177.249 177.248l-49.596-60.616a24 24 0 0 0-28.029-6.862l-111.997 48C3.873 366.516-1.994 378.08.618 389.397l23.997 104C27.109 504.204 36.748 512 48 512c256.087 0 464-207.532 464-464 0-11.176-7.714-20.873-18.603-23.385z"],
    "phone-slash": [512, 512, [], "f3dd", "M233.014 366.269l69.659 69.659C229.545 484.027 142.02 512 48 512c-11.252 0-20.892-7.796-23.386-18.603l-23.997-104c-2.612-11.317 3.256-22.881 13.931-27.456l111.997-47.999a24 24 0 0 1 28.029 6.862l49.596 60.616a363.398 363.398 0 0 0 28.844-15.151zm164.932-13.579C468.963 271.206 512 164.671 512 48c0-11.176-7.714-20.873-18.603-23.385l-104-23.997c-11.314-2.611-22.879 3.252-27.456 13.931l-48 111.997a24 24 0 0 0 6.862 28.029l60.617 49.596c-13.556 28.894-30.954 55.957-51.554 80.439L52.285 7.029c-9.372-9.372-24.568-9.373-33.941 0L7.03 18.343c-9.373 9.373-9.373 24.569 0 33.941L459.716 504.97c9.373 9.373 24.568 9.373 33.941 0l11.314-11.314c9.373-9.373 9.373-24.569 0-33.941L397.946 352.69z"],
    "phone-square": [448, 512, [], "f098", "M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM94 416c-7.033 0-13.057-4.873-14.616-11.627l-14.998-65a15 15 0 0 1 8.707-17.16l69.998-29.999a15 15 0 0 1 17.518 4.289l30.997 37.885c48.944-22.963 88.297-62.858 110.781-110.78l-37.886-30.997a15.001 15.001 0 0 1-4.289-17.518l30-69.998a15 15 0 0 1 17.16-8.707l65 14.998A14.997 14.997 0 0 1 384 126c0 160.292-129.945 290-290 290z"],
    "phone-volume": [384, 512, [], "f2a0", "M97.333 506.966c-129.874-129.874-129.681-340.252 0-469.933 5.698-5.698 14.527-6.632 21.263-2.422l64.817 40.513a17.187 17.187 0 0 1 6.849 20.958l-32.408 81.021a17.188 17.188 0 0 1-17.669 10.719l-55.81-5.58c-21.051 58.261-20.612 122.471 0 179.515l55.811-5.581a17.188 17.188 0 0 1 17.669 10.719l32.408 81.022a17.188 17.188 0 0 1-6.849 20.958l-64.817 40.513a17.19 17.19 0 0 1-21.264-2.422zM247.126 95.473c11.832 20.047 11.832 45.008 0 65.055-3.95 6.693-13.108 7.959-18.718 2.581l-5.975-5.726c-3.911-3.748-4.793-9.622-2.261-14.41a32.063 32.063 0 0 0 0-29.945c-2.533-4.788-1.65-10.662 2.261-14.41l5.975-5.726c5.61-5.378 14.768-4.112 18.718 2.581zm91.787-91.187c60.14 71.604 60.092 175.882 0 247.428-4.474 5.327-12.53 5.746-17.552.933l-5.798-5.557c-4.56-4.371-4.977-11.529-.93-16.379 49.687-59.538 49.646-145.933 0-205.422-4.047-4.85-3.631-12.008.93-16.379l5.798-5.557c5.022-4.813 13.078-4.394 17.552.933zm-45.972 44.941c36.05 46.322 36.108 111.149 0 157.546-4.39 5.641-12.697 6.251-17.856 1.304l-5.818-5.579c-4.4-4.219-4.998-11.095-1.285-15.931 26.536-34.564 26.534-82.572 0-117.134-3.713-4.836-3.115-11.711 1.285-15.931l5.818-5.579c5.159-4.947 13.466-4.337 17.856 1.304z"],
    "plane": [576, 512, [], "f072", "M472 200H360.211L256.013 5.711A12 12 0 0 0 245.793 0h-57.787c-7.85 0-13.586 7.413-11.616 15.011L209.624 200H99.766l-34.904-58.174A12 12 0 0 0 54.572 136H12.004c-7.572 0-13.252 6.928-11.767 14.353l21.129 105.648L.237 361.646c-1.485 7.426 4.195 14.354 11.768 14.353l42.568-.002c4.215 0 8.121-2.212 10.289-5.826L99.766 312h109.858L176.39 496.989c-1.97 7.599 3.766 15.011 11.616 15.011h57.787a12 12 0 0 0 10.22-5.711L360.212 312H472c57.438 0 104-25.072 104-56s-46.562-56-104-56z"],
    "plane-alt": [576, 512, [], "f3de", "M472 200H347.713l-38.614-72H324c6.627 0 12-5.373 12-12V76c0-6.627-5.373-12-12-12h-49.225L243.514 5.711A12 12 0 0 0 233.294 0h-57.787c-7.85 0-13.586 7.413-11.616 15.012l33.306 185.391c-32.631.973-63.109 3.697-89.882 7.79l-39.82-66.366a12 12 0 0 0-10.29-5.826H14.638c-7.573 0-13.252 6.928-11.767 14.353l16.561 82.805C6.949 240.135 0 247.865 0 256.001s6.949 15.866 19.431 22.842l-16.56 82.803C1.386 369.072 7.065 376 14.638 375.999l42.568-.002c4.215 0 8.121-2.212 10.289-5.826l39.819-66.362c26.773 4.093 57.252 6.817 89.883 7.79l-33.306 185.389c-1.97 7.599 3.766 15.012 11.616 15.012h57.787a12 12 0 0 0 10.22-5.711L274.775 448H324c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-14.901l38.614-72H472c57.438 0 104-25.072 104-56s-46.562-56-104-56z"],
    "play": [448, 512, [], "f04b", "M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"],
    "play-circle": [512, 512, [], "f144", "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"],
    "plug": [384, 512, [], "f1e6", "M256 144V32c0-17.673 14.327-32 32-32s32 14.327 32 32v112h-64zm112 16H16c-8.837 0-16 7.163-16 16v32c0 8.837 7.163 16 16 16h16v32c0 77.406 54.969 141.971 128 156.796V512h64v-99.204c73.031-14.825 128-79.39 128-156.796v-32h16c8.837 0 16-7.163 16-16v-32c0-8.837-7.163-16-16-16zm-240-16V32c0-17.673-14.327-32-32-32S64 14.327 64 32v112h64z"],
    "plus": [448, 512, [], "f067", "M448 294.2v-76.4c0-13.3-10.7-24-24-24H286.2V56c0-13.3-10.7-24-24-24h-76.4c-13.3 0-24 10.7-24 24v137.8H24c-13.3 0-24 10.7-24 24v76.4c0 13.3 10.7 24 24 24h137.8V456c0 13.3 10.7 24 24 24h76.4c13.3 0 24-10.7 24-24V318.2H424c13.3 0 24-10.7 24-24z"],
    "plus-circle": [512, 512, [], "f055", "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"],
    "plus-hexagon": [576, 512, [], "f300", "M553.5 231.8c8.7 14.9 8.7 33.4 0 48.4l-112 192c-8.6 14.7-24.4 23.8-41.5 23.8H176c-17.1 0-32.9-9.1-41.5-23.8l-112-192c-8.7-14.9-8.7-33.4 0-48.4l112-192C143.1 25.1 158.9 16 176 16h224c17.1 0 32.9 9.1 41.5 23.8l112 192zM432 228c0-6.6-5.4-12-12-12h-92v-92c0-6.6-5.4-12-12-12h-56c-6.6 0-12 5.4-12 12v92h-92c-6.6 0-12 5.4-12 12v56c0 6.6 5.4 12 12 12h92v92c0 6.6 5.4 12 12 12h56c6.6 0 12-5.4 12-12v-92h92c6.6 0 12-5.4 12-12v-56z"],
    "plus-octagon": [512, 512, [], "f301", "M497.9 150.5c9 9 14.1 21.2 14.1 33.9v143.1c0 12.7-5.1 24.9-14.1 33.9L361.5 497.9c-9 9-21.2 14.1-33.9 14.1H184.5c-12.7 0-24.9-5.1-33.9-14.1L14.1 361.5c-9-9-14.1-21.2-14.1-33.9V184.5c0-12.7 5.1-24.9 14.1-33.9L150.5 14.1c9-9 21.2-14.1 33.9-14.1h143.1c12.7 0 24.9 5.1 33.9 14.1l136.5 136.4zM400 228c0-6.6-5.4-12-12-12h-92v-92c0-6.6-5.4-12-12-12h-56c-6.6 0-12 5.4-12 12v92h-92c-6.6 0-12 5.4-12 12v56c0 6.6 5.4 12 12 12h92v92c0 6.6 5.4 12 12 12h56c6.6 0 12-5.4 12-12v-92h92c6.6 0 12-5.4 12-12v-56z"],
    "plus-square": [448, 512, [], "f0fe", "M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-32 252c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92H92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"],
    "podcast": [448, 512, [], "f2ce", "M267.429 488.563C262.286 507.573 242.858 512 224 512c-18.857 0-38.286-4.427-43.428-23.437C172.927 460.134 160 388.898 160 355.75c0-35.156 31.142-43.75 64-43.75s64 8.594 64 43.75c0 32.949-12.871 104.179-20.571 132.813zM156.867 288.554c-18.693-18.308-29.958-44.173-28.784-72.599 2.054-49.724 42.395-89.956 92.124-91.881C274.862 121.958 320 165.807 320 220c0 26.827-11.064 51.116-28.866 68.552-2.675 2.62-2.401 6.986.628 9.187 9.312 6.765 16.46 15.343 21.234 25.363 1.741 3.654 6.497 4.66 9.449 1.891 28.826-27.043 46.553-65.783 45.511-108.565-1.855-76.206-63.595-138.208-139.793-140.369C146.869 73.753 80 139.215 80 220c0 41.361 17.532 78.7 45.55 104.989 2.953 2.771 7.711 1.77 9.453-1.887 4.774-10.021 11.923-18.598 21.235-25.363 3.029-2.2 3.304-6.566.629-9.185zM224 0C100.204 0 0 100.185 0 224c0 89.992 52.602 165.647 125.739 201.408 4.333 2.118 9.267-1.544 8.535-6.31-2.382-15.512-4.342-30.946-5.406-44.339-.146-1.836-1.149-3.486-2.678-4.512-47.4-31.806-78.564-86.016-78.187-147.347.592-96.237 79.29-174.648 175.529-174.899C320.793 47.747 400 126.797 400 224c0 61.932-32.158 116.49-80.65 147.867-.999 14.037-3.069 30.588-5.624 47.23-.732 4.767 4.203 8.429 8.535 6.31C395.227 389.727 448 314.187 448 224 448 100.205 347.815 0 224 0zm0 160c-35.346 0-64 28.654-64 64s28.654 64 64 64 64-28.654 64-64-28.654-64-64-64z"],
    "poo": [512, 512, [], "f2fe", "M352 288c0 17.7-14.3 32-32 32s-32-14.3-32-32c0-3.3.5-6.5 1.4-9.4 2.5 5.6 8.1 9.4 14.6 9.4 8.8 0 16-7.2 16-16 0-6.5-3.9-12.1-9.4-14.6 3-.9 6.1-1.4 9.4-1.4 17.7 0 32 14.3 32 32zm-128 0c0 17.7-14.3 32-32 32s-32-14.3-32-32c0-3.3.5-6.5 1.4-9.4 2.5 5.6 8.1 9.4 14.6 9.4 8.8 0 16-7.2 16-16 0-6.5-3.9-12.1-9.4-14.6 3-.9 6.1-1.4 9.4-1.4 17.7 0 32 14.3 32 32zm0 0c0 17.7-14.3 32-32 32s-32-14.3-32-32c0-3.3.5-6.5 1.4-9.4 2.5 5.6 8.1 9.4 14.6 9.4 8.8 0 16-7.2 16-16 0-6.5-3.9-12.1-9.4-14.6 3-.9 6.1-1.4 9.4-1.4 17.7 0 32 14.3 32 32zm288 160c0 35.3-28.7 64-64 64H64c-33 0-64-29.9-64-64 0-33 19.7-56.8 52.2-62.9.3-.1 13.1-2.5 33.4-6.8-19-8.6-36.6-36.7-36.6-58.3 0-31.3 12.8-50.6 42.5-60.6.2-.1 14.3-4.8 35.2-12.6-15.1-9-30.7-27.5-30.7-46.8 0-30.5 10.4-54.9 38.4-66.7 2-.9 121.6-22.5 121.6-133.3 31.7 0 78.8 36.7 78.8 72 0 27.7-6.8 40-17.6 56H352c35.3 0 64 28.7 64 64 0 22.9-9.6 44.4-28.5 63.7l-.3.3H400c35.3 0 64 28.7 64 64 0 16.7-5 40.5-27.5 64H448c35.3 0 64 28.7 64 64zM136 288c0 30.9 25.1 56 56 56s56-25.1 56-56-25.1-56-56-56-56 25.1-56 56zm216 96H160c-6.6 0-10.4 7.5-6.4 12.8C177 427.9 214.1 448 256 448s79-20.1 102.4-51.2c4-5.3.2-12.8-6.4-12.8zm24-96c0-30.9-25.1-56-56-56s-56 25.1-56 56 25.1 56 56 56 56-25.1 56-56zm-216 0c0-3.3.5-6.5 1.4-9.4 2.5 5.6 8.1 9.4 14.6 9.4 8.8 0 16-7.2 16-16 0-6.5-3.9-12.1-9.4-14.6 3-.9 6.1-1.4 9.4-1.4 17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32z"],
    "portrait": [384, 512, [], "f3e0", "M0 464V48C0 21.49 21.49 0 48 0h288c26.51 0 48 21.49 48 48v416c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48zm192-176c53.019 0 96-42.981 96-96s-42.981-96-96-96-96 42.981-96 96 42.981 96 96 96zm94.317 17.474l-22.954-7.173C242.437 312.413 217.802 320 192 320s-50.437-7.587-71.363-21.699l-22.954 7.173C77.644 311.736 64 330.295 64 351.289V400c0 26.51 21.49 48 48 48h160c26.51 0 48-21.49 48-48v-48.711c0-20.994-13.644-39.553-33.683-45.815z"],
    "pound-sign": [320, 512, [], "f154", "M308 352h-45.495c-6.627 0-12 5.373-12 12v50.848H128V288h84c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-84v-63.556c0-32.266 24.562-57.086 61.792-57.086 23.658 0 45.878 11.505 57.652 18.849 5.151 3.213 11.888 2.051 15.688-2.685l28.493-35.513c4.233-5.276 3.279-13.005-2.119-17.081C273.124 54.56 236.576 32 187.931 32 106.026 32 48 84.742 48 157.961V224H20c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h28v128H12c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h296c6.627 0 12-5.373 12-12V364c0-6.627-5.373-12-12-12z"],
    "power-off": [512, 512, [], "f011", "M400 54.1c63 45 104 118.6 104 201.9 0 136.8-110.8 247.7-247.5 248C120 504.3 8.2 393 8 256.4 7.9 173.1 48.9 99.3 111.8 54.2c11.7-8.3 28-4.8 35 7.7L162.6 90c5.9 10.5 3.1 23.8-6.6 31-41.5 30.8-68 79.6-68 134.9-.1 92.3 74.5 168.1 168 168.1 91.6 0 168.6-74.2 168-169.1-.3-51.8-24.7-101.8-68.1-134-9.7-7.2-12.4-20.5-6.5-30.9l15.8-28.1c7-12.4 23.2-16.1 34.8-7.8zM296 264V24c0-13.3-10.7-24-24-24h-32c-13.3 0-24 10.7-24 24v240c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24z"],
    "print": [512, 512, [], "f02f", "M464 192h-16V81.941a24 24 0 0 0-7.029-16.97L383.029 7.029A24 24 0 0 0 366.059 0H88C74.745 0 64 10.745 64 24v168H48c-26.51 0-48 21.49-48 48v132c0 6.627 5.373 12 12 12h52v104c0 13.255 10.745 24 24 24h336c13.255 0 24-10.745 24-24V384h52c6.627 0 12-5.373 12-12V240c0-26.51-21.49-48-48-48zm-80 256H128v-96h256v96zM128 224V64h192v40c0 13.2 10.8 24 24 24h40v96H128zm304 72c-13.254 0-24-10.746-24-24s10.746-24 24-24 24 10.746 24 24-10.746 24-24 24z"],
    "puzzle-piece": [576, 512, [], "f12e", "M519.442 288.651c-41.519 0-59.5 31.593-82.058 31.593C377.409 320.244 432 144 432 144s-196.288 80-196.288-3.297c0-35.827 36.288-46.25 36.288-85.985C272 19.216 243.885 0 210.539 0c-34.654 0-66.366 18.891-66.366 56.346 0 41.364 31.711 59.277 31.711 81.75C175.885 207.719 0 166.758 0 166.758v333.237s178.635 41.047 178.635-28.662c0-22.473-40-40.107-40-81.471 0-37.456 29.25-56.346 63.577-56.346 33.673 0 61.788 19.216 61.788 54.717 0 39.735-36.288 50.158-36.288 85.985 0 60.803 129.675 25.73 181.23 25.73 0 0-34.725-120.101 25.827-120.101 35.962 0 46.423 36.152 86.308 36.152C556.712 416 576 387.99 576 354.443c0-34.199-18.962-65.792-56.558-65.792z"],
    "qrcode": [448, 512, [], "f029", "M0 224h192V32H0v192zM64 96h64v64H64V96zm192-64v192h192V32H256zm128 128h-64V96h64v64zM0 480h192V288H0v192zm64-128h64v64H64v-64zm352-64h32v128h-96v-32h-32v96h-64V288h96v32h64v-32zm0 160h32v32h-32v-32zm-64 0h32v32h-32v-32z"],
    "question": [384, 512, [], "f128", "M202.021 0C122.202 0 70.503 32.703 29.914 91.026c-7.363 10.58-5.093 25.086 5.178 32.874l43.138 32.709c10.373 7.865 25.132 6.026 33.253-4.148 25.049-31.381 43.63-49.449 82.757-49.449 30.764 0 68.816 19.799 68.816 49.631 0 22.552-18.617 34.134-48.993 51.164-35.423 19.86-82.299 44.576-82.299 106.405V320c0 13.255 10.745 24 24 24h72.471c13.255 0 24-10.745 24-24v-5.773c0-42.86 125.268-44.645 125.268-160.627C377.504 66.256 286.902 0 202.021 0zM192 373.459c-38.196 0-69.271 31.075-69.271 69.271 0 38.195 31.075 69.27 69.271 69.27s69.271-31.075 69.271-69.271-31.075-69.27-69.271-69.27z"],
    "question-circle": [512, 512, [], "f059", "M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zM262.655 90c-54.497 0-89.255 22.957-116.549 63.758-3.536 5.286-2.353 12.415 2.715 16.258l34.699 26.31c5.205 3.947 12.621 3.008 16.665-2.122 17.864-22.658 30.113-35.797 57.303-35.797 20.429 0 45.698 13.148 45.698 32.958 0 14.976-12.363 22.667-32.534 33.976C247.128 238.528 216 254.941 216 296v4c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12v-1.333c0-28.462 83.186-29.647 83.186-106.667 0-58.002-60.165-102-116.531-102zM256 338c-25.365 0-46 20.635-46 46 0 25.364 20.635 46 46 46s46-20.636 46-46c0-25.365-20.635-46-46-46z"],
    "question-square": [448, 512, [], "f2fd", "M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM224 430c-25.365 0-46-20.636-46-46 0-25.365 20.635-46 46-46s46 20.635 46 46c0 25.364-20.635 46-46 46zm40-131.333V300c0 6.627-5.373 12-12 12h-56c-6.627 0-12-5.373-12-12v-4c0-41.059 31.128-57.472 54.652-70.66 20.171-11.309 32.534-19 32.534-33.976 0-19.81-25.269-32.958-45.698-32.958-27.19 0-39.438 13.139-57.303 35.797-4.045 5.13-11.46 6.069-16.665 2.122l-34.699-26.31c-5.068-3.843-6.251-10.972-2.715-16.258C141.4 112.957 176.158 90 230.655 90c56.366 0 116.531 43.998 116.531 102 0 77.02-83.186 78.205-83.186 106.667z"],
    "quote-left": [512, 512, [], "f10d", "M0 432V304C0 166.982 63.772 67.676 193.827 32.828 209.052 28.748 224 40.265 224 56.027v33.895c0 10.057-6.228 19.133-15.687 22.55C142.316 136.312 104 181.946 104 256h72c26.51 0 48 21.49 48 48v128c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48zm336 48h128c26.51 0 48-21.49 48-48V304c0-26.51-21.49-48-48-48h-72c0-74.054 38.316-119.688 104.313-143.528C505.772 109.055 512 99.979 512 89.922V56.027c0-15.762-14.948-27.279-30.173-23.199C351.772 67.676 288 166.982 288 304v128c0 26.51 21.49 48 48 48z"],
    "quote-right": [512, 512, [], "f10e", "M512 80v128c0 137.018-63.772 236.324-193.827 271.172-15.225 4.08-30.173-7.437-30.173-23.199v-33.895c0-10.057 6.228-19.133 15.687-22.55C369.684 375.688 408 330.054 408 256h-72c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h128c26.51 0 48 21.49 48 48zM176 32H48C21.49 32 0 53.49 0 80v128c0 26.51 21.49 48 48 48h72c0 74.054-38.316 119.688-104.313 143.528C6.228 402.945 0 412.021 0 422.078v33.895c0 15.762 14.948 27.279 30.173 23.199C160.228 444.324 224 345.018 224 208V80c0-26.51-21.49-48-48-48z"],
    "random": [512, 512, [], "f074", "M504.971 359.029c9.373 9.373 9.373 24.569 0 33.941l-80 79.984c-15.01 15.01-40.971 4.49-40.971-16.971V416h-58.785a12.004 12.004 0 0 1-8.773-3.812l-70.556-75.596 53.333-57.143L352 336h32v-39.981c0-21.438 25.943-31.998 40.971-16.971l80 79.981zM12 176h84l52.781 56.551 53.333-57.143-70.556-75.596A11.999 11.999 0 0 0 122.785 96H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12zm372 0v39.984c0 21.46 25.961 31.98 40.971 16.971l80-79.984c9.373-9.373 9.373-24.569 0-33.941l-80-79.981C409.943 24.021 384 34.582 384 56.019V96h-58.785a12.004 12.004 0 0 0-8.773 3.812L96 336H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h110.785c3.326 0 6.503-1.381 8.773-3.812L352 176h32z"],
    "rectangle-landscape": [512, 512, [], "f2fa", "M464 448H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h416c26.5 0 48 21.5 48 48v288c0 26.5-21.5 48-48 48z"],
    "rectangle-portrait": [384, 512, [], "f2fb", "M0 464V48C0 21.5 21.5 0 48 0h288c26.5 0 48 21.5 48 48v416c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48z"],
    "rectangle-wide": [640, 512, [], "f2fc", "M592 416H48c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48h544c26.5 0 48 21.5 48 48v224c0 26.5-21.5 48-48 48z"],
    "recycle": [512, 512, [], "f1b8", "M184.561 261.903c3.232 13.997-12.123 24.635-24.068 17.168l-40.736-25.455-50.867 81.402C55.606 356.273 70.96 384 96.012 384H148c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12H96.115c-75.334 0-121.302-83.048-81.408-146.88l50.822-81.388-40.725-25.448c-12.081-7.547-8.966-25.961 4.879-29.158l110.237-25.45c8.611-1.988 17.201 3.381 19.189 11.99l25.452 110.237zm98.561-182.915l41.289 66.076-40.74 25.457c-12.051 7.528-9 25.953 4.879 29.158l110.237 25.45c8.672 1.999 17.215-3.438 19.189-11.99l25.45-110.237c3.197-13.844-11.99-24.719-24.068-17.168l-40.687 25.424-41.263-66.082c-37.521-60.033-125.209-60.171-162.816 0l-17.963 28.766c-3.51 5.62-1.8 13.021 3.82 16.533l33.919 21.195c5.62 3.512 13.024 1.803 16.536-3.817l17.961-28.743c12.712-20.341 41.973-19.676 54.257-.022zM497.288 301.12l-27.515-44.065c-3.511-5.623-10.916-7.334-16.538-3.821l-33.861 21.159c-5.62 3.512-7.33 10.915-3.818 16.536l27.564 44.112c13.257 21.211-2.057 48.96-27.136 48.96H320V336.02c0-14.213-17.242-21.383-27.313-11.313l-80 79.981c-6.249 6.248-6.249 16.379 0 22.627l80 79.989C302.689 517.308 320 510.3 320 495.989V448h95.88c75.274 0 121.335-82.997 81.408-146.88z"],
    "redo": [512, 512, [], "f01e", "M500.333 0h-47.411c-6.853 0-12.314 5.729-11.986 12.574l3.966 82.759C399.416 41.899 331.672 8 256.001 8 119.34 8 7.899 119.526 8 256.187 8.101 393.068 119.096 504 256 504c63.926 0 122.202-24.187 166.178-63.908 5.113-4.618 5.354-12.561.482-17.433l-33.971-33.971c-4.466-4.466-11.64-4.717-16.38-.543C341.308 415.448 300.606 432 256 432c-97.267 0-176-78.716-176-176 0-97.267 78.716-176 176-176 60.892 0 114.506 30.858 146.099 77.8l-101.525-4.865c-6.845-.328-12.574 5.133-12.574 11.986v47.411c0 6.627 5.373 12 12 12h200.333c6.627 0 12-5.373 12-12V12c0-6.627-5.373-12-12-12z"],
    "redo-alt": [512, 512, [], "f2f9", "M256.455 8c66.269.119 126.437 26.233 170.859 68.685l35.715-35.715C478.149 25.851 504 36.559 504 57.941V192c0 13.255-10.745 24-24 24H345.941c-21.382 0-32.09-25.851-16.971-40.971l41.75-41.75c-30.864-28.899-70.801-44.907-113.23-45.273-92.398-.798-170.283 73.977-169.484 169.442C88.764 348.009 162.184 424 256 424c41.127 0 79.997-14.678 110.629-41.556 4.743-4.161 11.906-3.908 16.368.553l39.662 39.662c4.872 4.872 4.631 12.815-.482 17.433C378.202 479.813 319.926 504 256 504 119.034 504 8.001 392.967 8 256.002 7.999 119.193 119.646 7.755 256.455 8z"],
    "registered": [512, 512, [], "f25d", "M285.363 207.475c0 18.6-9.831 28.431-28.431 28.431h-29.876v-56.14h23.378c28.668 0 34.929 8.773 34.929 27.709zM504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM363.411 360.414c-46.729-84.825-43.299-78.636-44.702-80.98 23.432-15.172 37.945-42.979 37.945-74.486 0-54.244-31.5-89.252-105.498-89.252h-70.667c-13.255 0-24 10.745-24 24V372c0 13.255 10.745 24 24 24h22.567c13.255 0 24-10.745 24-24v-71.663h25.556l44.129 82.937a24.001 24.001 0 0 0 21.188 12.727h24.464c18.261-.001 29.829-19.591 21.018-35.587z"],
    "repeat": [512, 512, [], "f363", "M512 256c0 88.224-71.775 160-160 160H170.067l34.512 32.419c9.875 9.276 10.119 24.883.539 34.464l-10.775 10.775c-9.373 9.372-24.568 9.372-33.941 0l-92.686-92.686c-9.373-9.373-9.373-24.568 0-33.941l92.686-92.686c9.373-9.373 24.568-9.373 33.941 0l10.775 10.775c9.581 9.581 9.337 25.187-.539 34.464L170.067 352H352c52.935 0 96-43.065 96-96 0-13.958-2.996-27.228-8.376-39.204-4.061-9.039-2.284-19.626 4.723-26.633l12.183-12.183c11.499-11.499 30.965-8.526 38.312 5.982C505.814 205.624 512 230.103 512 256zM72.376 295.204C66.996 283.228 64 269.958 64 256c0-52.935 43.065-96 96-96h181.933l-34.512 32.419c-9.875 9.276-10.119 24.883-.539 34.464l10.775 10.775c9.373 9.372 24.568 9.372 33.941 0l92.686-92.686c9.373-9.373 9.373-24.568 0-33.941l-92.686-92.686c-9.373-9.373-24.568-9.373-33.941 0L306.882 29.12c-9.581 9.581-9.337 25.187.539 34.464L341.933 96H160C71.775 96 0 167.776 0 256c0 25.897 6.186 50.376 17.157 72.039 7.347 14.508 26.813 17.481 38.312 5.982l12.183-12.183c7.008-7.008 8.786-17.595 4.724-26.634z"],
    "repeat-1": [512, 512, [], "f365", "M512 256c0 88.224-71.775 160-160 160H170.067l34.512 32.419c9.875 9.276 10.119 24.883.539 34.464l-10.775 10.775c-9.373 9.372-24.568 9.372-33.941 0l-92.686-92.686c-9.373-9.373-9.373-24.568 0-33.941l80.269-80.27c9.373-9.373 24.568-9.373 33.941 0l10.775 10.775c9.581 9.581 9.337 25.187-.539 34.464l-22.095 20H352c52.935 0 96-43.065 96-96 0-13.958-2.996-27.228-8.376-39.204-4.061-9.039-2.284-19.626 4.723-26.633l12.183-12.183c11.499-11.499 30.965-8.526 38.312 5.982C505.814 205.624 512 230.103 512 256zM72.376 295.204C66.996 283.228 64 269.958 64 256c0-52.935 43.065-96 96-96h181.933l-22.095 20.002c-9.875 9.276-10.119 24.883-.539 34.464l10.775 10.775c9.373 9.372 24.568 9.372 33.941 0l80.269-80.27c9.373-9.373 9.373-24.568 0-33.941l-92.686-92.686c-9.373-9.373-24.568-9.373-33.941 0l-10.775 10.775c-9.581 9.581-9.337 25.187.539 34.464L341.933 96H160C71.775 96 0 167.776 0 256c0 25.897 6.186 50.376 17.157 72.039 7.347 14.508 26.813 17.481 38.312 5.982l12.183-12.183c7.008-7.008 8.786-17.595 4.724-26.634zm154.887 4.323c0-7.477 3.917-11.572 11.573-11.572h15.131v-39.878c0-5.163.534-10.503.534-10.503h-.356s-1.779 2.67-2.848 3.738c-4.451 4.273-10.504 4.451-15.666-1.068l-5.518-6.231c-5.342-5.341-4.984-11.216.534-16.379l21.72-19.939c4.449-4.095 8.366-5.697 14.42-5.697h12.105c7.656 0 11.749 3.916 11.749 11.572v84.384h15.488c7.655 0 11.572 4.094 11.572 11.572v8.901c0 7.477-3.917 11.572-11.572 11.572h-67.293c-7.656 0-11.573-4.095-11.573-11.572v-8.9z"],
    "repeat-1-alt": [512, 512, [], "f366", "M493.544 181.463c11.956 22.605 18.655 48.4 18.452 75.75C511.339 345.365 438.56 416 350.404 416H192v47.495c0 22.475-26.177 32.268-40.971 17.475l-80-80c-9.372-9.373-9.372-24.569 0-33.941l80-80C166.138 271.92 192 282.686 192 304v48h158.875c52.812 0 96.575-42.182 97.12-94.992.155-15.045-3.17-29.312-9.218-42.046-4.362-9.185-2.421-20.124 4.8-27.284 4.745-4.706 8.641-8.555 11.876-11.786 11.368-11.352 30.579-8.631 38.091 5.571zM64.005 254.992c.545-52.81 44.308-94.992 97.12-94.992H320v47.505c0 22.374 26.121 32.312 40.971 17.465l80-80c9.372-9.373 9.372-24.569 0-33.941l-80-80C346.014 16.077 320 26.256 320 48.545V96H161.596C73.44 96 .661 166.635.005 254.788c-.204 27.35 6.495 53.145 18.452 75.75 7.512 14.202 26.723 16.923 38.091 5.57 3.235-3.231 7.13-7.08 11.876-11.786 7.22-7.16 9.162-18.098 4.8-27.284-6.049-12.735-9.374-27.001-9.219-42.046zm163.258 44.535c0-7.477 3.917-11.572 11.573-11.572h15.131v-39.878c0-5.163.534-10.503.534-10.503h-.356s-1.779 2.67-2.848 3.738c-4.451 4.273-10.504 4.451-15.666-1.068l-5.518-6.231c-5.342-5.341-4.984-11.216.534-16.379l21.72-19.939c4.449-4.095 8.366-5.697 14.42-5.697h12.105c7.656 0 11.749 3.916 11.749 11.572v84.384h15.488c7.655 0 11.572 4.094 11.572 11.572v8.901c0 7.477-3.917 11.572-11.572 11.572h-67.293c-7.656 0-11.573-4.095-11.573-11.572v-8.9z"],
    "repeat-alt": [512, 512, [], "f364", "M493.544 181.463c11.956 22.605 18.655 48.4 18.452 75.75C511.339 345.365 438.56 416 350.404 416H192v47.495c0 22.475-26.177 32.268-40.971 17.475l-80-80c-9.372-9.373-9.372-24.569 0-33.941l80-80C166.138 271.92 192 282.686 192 304v48h158.875c52.812 0 96.575-42.182 97.12-94.992.155-15.045-3.17-29.312-9.218-42.046-4.362-9.185-2.421-20.124 4.8-27.284 4.745-4.706 8.641-8.555 11.876-11.786 11.368-11.352 30.579-8.631 38.091 5.571zM64.005 254.992c.545-52.81 44.308-94.992 97.12-94.992H320v47.505c0 22.374 26.121 32.312 40.971 17.465l80-80c9.372-9.373 9.372-24.569 0-33.941l-80-80C346.014 16.077 320 26.256 320 48.545V96H161.596C73.44 96 .661 166.635.005 254.788c-.204 27.35 6.495 53.145 18.452 75.75 7.512 14.202 26.723 16.923 38.091 5.57 3.235-3.231 7.13-7.08 11.876-11.786 7.22-7.16 9.162-18.098 4.8-27.284-6.049-12.735-9.374-27.001-9.219-42.046z"],
    "reply": [512, 512, [], "f3e5", "M8.309 189.836L184.313 37.851C199.719 24.546 224 35.347 224 56.015v80.053c160.629 1.839 288 34.032 288 186.258 0 61.441-39.581 122.309-83.333 154.132-13.653 9.931-33.111-2.533-28.077-18.631 45.344-145.012-21.507-183.51-176.59-185.742V360c0 20.7-24.3 31.453-39.687 18.164l-176.004-152c-11.071-9.562-11.086-26.753 0-36.328z"],
    "reply-all": [576, 512, [], "f122", "M136.309 189.836L312.313 37.851C327.72 24.546 352 35.348 352 56.015v82.763c129.182 10.231 224 52.212 224 183.548 0 61.441-39.582 122.309-83.333 154.132-13.653 9.931-33.111-2.533-28.077-18.631 38.512-123.162-3.922-169.482-112.59-182.015v84.175c0 20.701-24.3 31.453-39.687 18.164L136.309 226.164c-11.071-9.561-11.086-26.753 0-36.328zm-128 36.328L184.313 378.15C199.7 391.439 224 380.687 224 359.986v-15.818l-108.606-93.785A55.96 55.96 0 0 1 96 207.998a55.953 55.953 0 0 1 19.393-42.38L224 71.832V56.015c0-20.667-24.28-31.469-39.687-18.164L8.309 189.836c-11.086 9.575-11.071 26.767 0 36.328z"],
    "retweet": [640, 512, [], "f079", "M629.657 343.598L528.971 444.284c-9.373 9.372-24.568 9.372-33.941 0L394.343 343.598c-9.373-9.373-9.373-24.569 0-33.941l10.823-10.823c9.562-9.562 25.133-9.34 34.419.492L480 342.118V160H292.451a24.005 24.005 0 0 1-16.971-7.029l-16-16C244.361 121.851 255.069 96 276.451 96H520c13.255 0 24 10.745 24 24v222.118l40.416-42.792c9.285-9.831 24.856-10.054 34.419-.492l10.823 10.823c9.372 9.372 9.372 24.569-.001 33.941zm-265.138 15.431A23.999 23.999 0 0 0 347.548 352H160V169.881l40.416 42.792c9.286 9.831 24.856 10.054 34.419.491l10.822-10.822c9.373-9.373 9.373-24.569 0-33.941L144.971 67.716c-9.373-9.373-24.569-9.373-33.941 0L10.343 168.402c-9.373 9.373-9.373 24.569 0 33.941l10.822 10.822c9.562 9.562 25.133 9.34 34.419-.491L96 169.881V392c0 13.255 10.745 24 24 24h243.549c21.382 0 32.09-25.851 16.971-40.971l-16.001-16z"],
    "retweet-alt": [640, 512, [], "f361", "M392.402 383.598C404.359 395.555 395.891 416 378.981 416H120c-13.255 0-24-10.745-24-24V192H48c-21.361 0-32.045-25.895-16.971-40.971l80-80c9.373-9.372 24.568-9.372 33.941 0l80 80C240.074 166.134 229.319 192 208 192h-48v160h202.056c7.82 0 14.874 4.783 17.675 12.084a55.865 55.865 0 0 0 12.671 19.514zM592 320h-48V120c0-13.255-10.745-24-24-24H261.019c-16.91 0-25.378 20.445-13.421 32.402a55.865 55.865 0 0 1 12.671 19.514c2.801 7.302 9.855 12.084 17.675 12.084H480v160h-48c-21.313 0-32.08 25.861-16.971 40.971l80 80c9.374 9.372 24.568 9.372 33.941 0l80-80C624.041 345.9 613.368 320 592 320z"],
    "road": [576, 512, [], "f018", "M567.3 383.6L429.9 78.2C426 69.5 417.4 64 408 64h-96.1l1.9 18.8c.7 7.1-4.8 13.2-11.9 13.2H274c-7.1 0-12.7-6.2-11.9-13.2L264 64h-96c-9.4 0-18 5.5-21.9 14.2L8.7 383.6C3.2 395.8 0 409.6 0 424c0 13.3 10.7 24 24 24h213.6c-7.1 0-12.7-6.2-11.9-13.2l10.8-104c.6-6.1 5.8-10.8 11.9-10.8h79.2c6.1 0 11.3 4.6 11.9 10.8l10.8 104c.7 7.1-4.8 13.2-11.9 13.2H552c13.2 0 24-10.7 24-24 0-13.9-3-27.7-8.7-40.4zM254.7 154.8l3.3-32c.6-6.1 5.8-10.8 11.9-10.8h36.2c6.1 0 11.3 4.6 11.9 10.8l3.3 32c.7 7.1-4.8 13.2-11.9 13.2h-42.8c-7.1 0-12.7-6.2-11.9-13.2zM321.8 288h-67.6c-7.1 0-12.7-6.2-11.9-13.2l7.4-72c.6-6.1 5.8-10.8 11.9-10.8h52.7c6.1 0 11.3 4.6 11.9 10.8l7.4 72c.9 7-4.7 13.2-11.8 13.2z"],
    "rocket": [512, 512, [], "f135", "M505.1 19.1C503.8 13 499 8.2 492.9 6.9 460.7 0 435.5 0 410.4 0 307.2 0 245.3 55.2 199.1 128H94.9c-18.2 0-34.8 10.3-42.9 26.5L2.6 253.3c-8 16 3.6 34.7 21.5 34.7h95.1c-5.9 12.8-11.9 25.5-18 37.7-3.1 6.2-1.9 13.6 3 18.5l63.6 63.6c4.9 4.9 12.3 6.1 18.5 3 12.2-6.1 24.9-12 37.7-17.9V488c0 17.8 18.8 29.4 34.7 21.5l98.7-49.4c16.3-8.1 26.5-24.8 26.5-42.9V312.8c72.6-46.3 128-108.4 128-211.1.1-25.2.1-50.4-6.8-82.6zM400 160c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z"],
    "rss": [448, 512, [], "f09e", "M128.081 415.959c0 35.369-28.672 64.041-64.041 64.041S0 451.328 0 415.959s28.672-64.041 64.041-64.041 64.04 28.673 64.04 64.041zm175.66 47.25c-8.354-154.6-132.185-278.587-286.95-286.95C7.656 175.765 0 183.105 0 192.253v48.069c0 8.415 6.49 15.472 14.887 16.018 111.832 7.284 201.473 96.702 208.772 208.772.547 8.397 7.604 14.887 16.018 14.887h48.069c9.149.001 16.489-7.655 15.995-16.79zm144.249.288C439.596 229.677 251.465 40.445 16.503 32.01 7.473 31.686 0 38.981 0 48.016v48.068c0 8.625 6.835 15.645 15.453 15.999 191.179 7.839 344.627 161.316 352.465 352.465.353 8.618 7.373 15.453 15.999 15.453h48.068c9.034-.001 16.329-7.474 16.005-16.504z"],
    "rss-square": [448, 512, [], "f143", "M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM112 416c-26.51 0-48-21.49-48-48s21.49-48 48-48 48 21.49 48 48-21.49 48-48 48zm157.533 0h-34.335c-6.011 0-11.051-4.636-11.442-10.634-5.214-80.05-69.243-143.92-149.123-149.123-5.997-.39-10.633-5.431-10.633-11.441v-34.335c0-6.535 5.468-11.777 11.994-11.425 110.546 5.974 198.997 94.536 204.964 204.964.352 6.526-4.89 11.994-11.425 11.994zm103.027 0h-34.334c-6.161 0-11.175-4.882-11.427-11.038-5.598-136.535-115.204-246.161-251.76-251.76C68.882 152.949 64 147.935 64 141.774V107.44c0-6.454 5.338-11.664 11.787-11.432 167.83 6.025 302.21 141.191 308.205 308.205.232 6.449-4.978 11.787-11.432 11.787z"],
    "ruble-sign": [384, 512, [], "f158", "M239.36 320C324.48 320 384 260.542 384 175.071S324.48 32 239.36 32H76c-6.627 0-12 5.373-12 12v206.632H12c-6.627 0-12 5.373-12 12V308c0 6.627 5.373 12 12 12h52v32H12c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h52v52c0 6.627 5.373 12 12 12h58.56c6.627 0 12-5.373 12-12v-52H308c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12H146.56v-32h92.8zm-92.8-219.252h78.72c46.72 0 74.88 29.11 74.88 74.323 0 45.832-28.16 75.561-76.16 75.561h-77.44V100.748z"],
    "rupee-sign": [320, 512, [], "f156", "M308 96c6.627 0 12-5.373 12-12V44c0-6.627-5.373-12-12-12H12C5.373 32 0 37.373 0 44v44.748c0 6.627 5.373 12 12 12h85.28c27.308 0 48.261 9.958 60.97 27.252H12c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h158.757c-6.217 36.086-32.961 58.632-74.757 58.632H12c-6.627 0-12 5.373-12 12v53.012c0 3.349 1.4 6.546 3.861 8.818l165.052 152.356a12.001 12.001 0 0 0 8.139 3.182h82.562c10.924 0 16.166-13.408 8.139-20.818L116.871 319.906c76.499-2.34 131.144-53.395 138.318-127.906H308c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-58.69c-3.486-11.541-8.28-22.246-14.252-32H308z"],
    "save": [448, 512, [], "f0c7", "M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM224 416c-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64zm96-304.52V212c0 6.627-5.373 12-12 12H76c-6.627 0-12-5.373-12-12V108c0-6.627 5.373-12 12-12h228.52c3.183 0 6.235 1.264 8.485 3.515l3.48 3.48A11.996 11.996 0 0 1 320 111.48z"],
    "scrubber": [496, 512, [], "f2f8", "M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 312c-35.3 0-64-28.7-64-64s28.7-64 64-64 64 28.7 64 64-28.7 64-64 64z"],
    "search": [512, 512, [], "f002", "M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"],
    "search-minus": [512, 512, [], "f010", "M304 192v32c0 6.6-5.4 12-12 12H124c-6.6 0-12-5.4-12-12v-32c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm201 284.7L476.7 505c-9.4 9.4-24.6 9.4-33.9 0L343 405.3c-4.5-4.5-7-10.6-7-17V372c-35.3 27.6-79.7 44-128 44C93.1 416 0 322.9 0 208S93.1 0 208 0s208 93.1 208 208c0 48.3-16.4 92.7-44 128h16.3c6.4 0 12.5 2.5 17 7l99.7 99.7c9.3 9.4 9.3 24.6 0 34zM344 208c0-75.2-60.8-136-136-136S72 132.8 72 208s60.8 136 136 136 136-60.8 136-136z"],
    "search-plus": [512, 512, [], "f00e", "M304 192v32c0 6.6-5.4 12-12 12h-56v56c0 6.6-5.4 12-12 12h-32c-6.6 0-12-5.4-12-12v-56h-56c-6.6 0-12-5.4-12-12v-32c0-6.6 5.4-12 12-12h56v-56c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v56h56c6.6 0 12 5.4 12 12zm201 284.7L476.7 505c-9.4 9.4-24.6 9.4-33.9 0L343 405.3c-4.5-4.5-7-10.6-7-17V372c-35.3 27.6-79.7 44-128 44C93.1 416 0 322.9 0 208S93.1 0 208 0s208 93.1 208 208c0 48.3-16.4 92.7-44 128h16.3c6.4 0 12.5 2.5 17 7l99.7 99.7c9.3 9.4 9.3 24.6 0 34zM344 208c0-75.2-60.8-136-136-136S72 132.8 72 208s60.8 136 136 136 136-60.8 136-136z"],
    "server": [512, 512, [], "f233", "M480 160H32c-17.673 0-32-14.327-32-32V64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm112 248H32c-17.673 0-32-14.327-32-32v-64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm112 248H32c-17.673 0-32-14.327-32-32v-64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24z"],
    "share": [512, 512, [], "f064", "M503.691 189.836L327.687 37.851C312.281 24.546 288 35.347 288 56.015v80.053C127.371 137.907 0 170.1 0 322.326c0 61.441 39.581 122.309 83.333 154.132 13.653 9.931 33.111-2.533 28.077-18.631C66.066 312.814 132.917 274.316 288 272.085V360c0 20.7 24.3 31.453 39.687 18.164l176.004-152c11.071-9.562 11.086-26.753 0-36.328z"],
    "share-all": [576, 512, [], "f367", "M439.691 226.164L263.687 378.15C248.3 391.439 224 380.687 224 359.986v-84.175c-108.668 12.533-151.102 58.854-112.59 182.015 5.034 16.098-14.424 28.562-28.077 18.631C39.582 444.635 0 383.766 0 322.326 0 190.99 94.818 149.009 224 138.777V56.015c0-20.667 24.28-31.469 39.687-18.164l176.004 151.985c11.086 9.575 11.071 26.767 0 36.328zm128-36.328L391.687 37.851C376.28 24.546 352 35.348 352 56.015v15.818l108.607 93.786A55.949 55.949 0 0 1 480 207.998a55.96 55.96 0 0 1-19.394 42.385L352 344.168v15.818c0 20.701 24.3 31.453 39.687 18.164l176.004-151.986c11.071-9.561 11.086-26.753 0-36.328z"],
    "share-alt": [448, 512, [], "f1e0", "M352 320c-22.608 0-43.387 7.819-59.79 20.895l-102.486-64.054a96.551 96.551 0 0 0 0-41.683l102.486-64.054C308.613 184.181 329.392 192 352 192c53.019 0 96-42.981 96-96S405.019 0 352 0s-96 42.981-96 96c0 7.158.79 14.13 2.276 20.841L155.79 180.895C139.387 167.819 118.608 160 96 160c-53.019 0-96 42.981-96 96s42.981 96 96 96c22.608 0 43.387-7.819 59.79-20.895l102.486 64.054A96.301 96.301 0 0 0 256 416c0 53.019 42.981 96 96 96s96-42.981 96-96-42.981-96-96-96z"],
    "share-alt-square": [448, 512, [], "f1e1", "M448 80v352c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48zM304 296c-14.562 0-27.823 5.561-37.783 14.671l-67.958-40.775a56.339 56.339 0 0 0 0-27.793l67.958-40.775C276.177 210.439 289.438 216 304 216c30.928 0 56-25.072 56-56s-25.072-56-56-56-56 25.072-56 56c0 4.797.605 9.453 1.74 13.897l-67.958 40.775C171.823 205.561 158.562 200 144 200c-30.928 0-56 25.072-56 56s25.072 56 56 56c14.562 0 27.823-5.561 37.783-14.671l67.958 40.775a56.088 56.088 0 0 0-1.74 13.897c0 30.928 25.072 56 56 56s56-25.072 56-56C360 321.072 334.928 296 304 296z"],
    "share-square": [576, 512, [], "f14d", "M568.482 177.448L424.479 313.433C409.3 327.768 384 317.14 384 295.985v-71.963c-144.575.97-205.566 35.113-164.775 171.353 4.483 14.973-12.846 26.567-25.006 17.33C155.252 383.105 120 326.488 120 269.339c0-143.937 117.599-172.5 264-173.312V24.012c0-21.174 25.317-31.768 40.479-17.448l144.003 135.988c10.02 9.463 10.028 25.425 0 34.896zM384 379.128V448H64V128h50.916a11.99 11.99 0 0 0 8.648-3.693c14.953-15.568 32.237-27.89 51.014-37.676C185.708 80.83 181.584 64 169.033 64H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48v-88.806c0-8.288-8.197-14.066-16.011-11.302a71.83 71.83 0 0 1-34.189 3.377c-7.27-1.046-13.8 4.514-13.8 11.859z"],
    "shekel-sign": [448, 512, [], "f20b", "M170.12 96H80v372c0 6.627-5.373 12-12 12H12c-6.627 0-12-5.373-12-12V44c0-6.627 5.373-12 12-12h168.36C265.48 32 325 89.6 325 175.071V359c0 6.627-5.373 12-12 12h-44c-13.255 0-24-10.745-24-24V170.323C245 125.11 216.839 96 170.12 96zM436 32h-56c-6.627 0-12 5.373-12 12v372h-90.12c-46.72 0-74.88-29.11-74.88-74.323V165c0-13.255-10.745-24-24-24h-44c-6.627 0-12 5.373-12 12v183.929C123 422.4 182.52 480 267.64 480H436c6.627 0 12-5.373 12-12V44c0-6.627-5.373-12-12-12z"],
    "shield": [512, 512, [], "f132", "M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3z"],
    "shield-alt": [512, 512, [], "f3ed", "M496 128c0 221.282-135.934 344.645-221.539 380.308a48 48 0 0 1-36.923 0C130.495 463.713 16 326.487 16 128a48 48 0 0 1 29.539-44.308l192-80a48 48 0 0 1 36.923 0l192 80A48 48 0 0 1 496 128zM256 446.313l.066.034c93.735-46.689 172.497-156.308 175.817-307.729L256 65.333v380.98z"],
    "shield-check": [512, 512, [], "f2f7", "M496 128c0 221.282-135.934 344.645-221.539 380.308a48 48 0 0 1-36.923 0C130.495 463.713 16 326.487 16 128a48 48 0 0 1 29.539-44.308l192-80a48 48 0 0 1 36.923 0l192 80A48 48 0 0 1 496 128zM235.313 381.941l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.248-16.379-6.249-22.628 0L224 302.745l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.248 6.25 16.379 6.25 22.627.001z"],
    "ship": [640, 512, [], "f21a", "M496.616 372.639l70.012-70.012c16.899-16.9 9.942-45.771-12.836-53.092L512 236.102V96c0-17.673-14.327-32-32-32h-64V24c0-13.255-10.745-24-24-24H248c-13.255 0-24 10.745-24 24v40h-64c-17.673 0-32 14.327-32 32v140.102l-41.792 13.433c-22.753 7.313-29.754 36.173-12.836 53.092l70.012 70.012C125.828 416.287 85.587 448 24 448c-13.255 0-24 10.745-24 24v16c0 13.255 10.745 24 24 24 61.023 0 107.499-20.61 143.258-59.396C181.677 487.432 216.021 512 256 512h128c39.979 0 74.323-24.568 88.742-59.396C508.495 491.384 554.968 512 616 512c13.255 0 24-10.745 24-24v-16c0-13.255-10.745-24-24-24-60.817 0-101.542-31.001-119.384-75.361zM192 128h256v87.531l-118.208-37.995a31.995 31.995 0 0 0-19.584 0L192 215.531V128z"],
    "shopping-bag": [448, 512, [], "f290", "M352 160v-32C352 57.42 294.579 0 224 0 153.42 0 96 57.42 96 128v32H0v272c0 44.183 35.817 80 80 80h288c44.183 0 80-35.817 80-80V160h-96zm-192-32c0-35.29 28.71-64 64-64s64 28.71 64 64v32H160v-32zm160 120c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zm-192 0c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24z"],
    "shopping-basket": [576, 512, [], "f291", "M576 216v16c0 13.255-10.745 24-24 24h-8l-26.113 182.788C514.509 462.435 494.257 480 470.37 480H105.63c-23.887 0-44.139-17.565-47.518-41.212L32 256h-8c-13.255 0-24-10.745-24-24v-16c0-13.255 10.745-24 24-24h67.341l106.78-146.821c10.395-14.292 30.407-17.453 44.701-7.058 14.293 10.395 17.453 30.408 7.058 44.701L170.477 192h235.046L326.12 82.821c-10.395-14.292-7.234-34.306 7.059-44.701 14.291-10.395 34.306-7.235 44.701 7.058L484.659 192H552c13.255 0 24 10.745 24 24zM312 392V280c0-13.255-10.745-24-24-24s-24 10.745-24 24v112c0 13.255 10.745 24 24 24s24-10.745 24-24zm112 0V280c0-13.255-10.745-24-24-24s-24 10.745-24 24v112c0 13.255 10.745 24 24 24s24-10.745 24-24zm-224 0V280c0-13.255-10.745-24-24-24s-24 10.745-24 24v112c0 13.255 10.745 24 24 24s24-10.745 24-24z"],
    "shopping-cart": [576, 512, [], "f07a", "M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"],
    "shower": [512, 512, [], "f2cc", "M389.66 135.6L231.6 293.66c-9.37 9.37-24.57 9.37-33.94 0l-11.32-11.32c-9.37-9.37-9.37-24.57 0-33.94l.11-.11c-34.03-40.21-35.16-98.94-3.39-140.38-11.97-7.55-26.14-11.91-41.3-11.91C98.88 96 64 130.88 64 173.76V480H0V173.76C0 95.59 63.59 32 141.76 32c36.93 0 70.61 14.2 95.86 37.42 35.9-11.51 76.5-4.5 106.67 21.03l.11-.11c9.37-9.37 24.57-9.37 33.94 0l11.32 11.32c9.37 9.37 9.37 24.57 0 33.94zM384 208c0 8.837-7.163 16-16 16s-16-7.163-16-16 7.163-16 16-16 16 7.163 16 16zm32 0c0-8.837 7.163-16 16-16s16 7.163 16 16-7.163 16-16 16-16-7.163-16-16zm96 0c0 8.837-7.163 16-16 16s-16-7.163-16-16 7.163-16 16-16 16 7.163 16 16zm-160 32c0 8.837-7.163 16-16 16s-16-7.163-16-16 7.163-16 16-16 16 7.163 16 16zm48-16c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16zm80 16c0 8.837-7.163 16-16 16s-16-7.163-16-16 7.163-16 16-16 16 7.163 16 16zm-160 32c0 8.837-7.163 16-16 16s-16-7.163-16-16 7.163-16 16-16 16 7.163 16 16zm32 0c0-8.837 7.163-16 16-16s16 7.163 16 16-7.163 16-16 16-16-7.163-16-16zm96 0c0 8.837-7.163 16-16 16s-16-7.163-16-16 7.163-16 16-16 16 7.163 16 16zm-128 32c0-8.837 7.163-16 16-16s16 7.163 16 16-7.163 16-16 16-16-7.163-16-16zm96 0c0 8.837-7.163 16-16 16s-16-7.163-16-16 7.163-16 16-16 16 7.163 16 16zm-96 32c0 8.837-7.163 16-16 16s-16-7.163-16-16 7.163-16 16-16 16 7.163 16 16zm64 0c0 8.837-7.163 16-16 16s-16-7.163-16-16 7.163-16 16-16 16 7.163 16 16zm-32 32c0 8.837-7.163 16-16 16s-16-7.163-16-16 7.163-16 16-16 16 7.163 16 16zm-32 32c0 8.837-7.163 16-16 16s-16-7.163-16-16 7.163-16 16-16 16 7.163 16 16z"],
    "sign-in": [512, 512, [], "f090", "M137.2 110.3l21.9-21.9c9.3-9.3 24.5-9.4 33.9-.1L344.9 239c9.5 9.4 9.5 24.7 0 34.1L193 423.7c-9.4 9.3-24.5 9.3-33.9-.1l-21.9-21.9c-9.7-9.7-9.3-25.4.8-34.7l77.6-71.1H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h191.5l-77.6-71.1c-10-9.1-10.4-24.9-.7-34.5zM512 352V160c0-53-43-96-96-96h-84c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h84c17.7 0 32 14.3 32 32v192c0 17.7-14.3 32-32 32h-84c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h84c53 0 96-43 96-96z"],
    "sign-in-alt": [512, 512, [], "f2f6", "M416 448h-84c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h84c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32h-84c-6.6 0-12-5.4-12-12V76c0-6.6 5.4-12 12-12h84c53 0 96 43 96 96v192c0 53-43 96-96 96zm-47-201L201 79c-15-15-41-4.5-41 17v96H24c-13.3 0-24 10.7-24 24v96c0 13.3 10.7 24 24 24h136v96c0 21.5 26 32 41 17l168-168c9.3-9.4 9.3-24.6 0-34z"],
    "sign-language": [448, 512, [], "f2a7", "M91.434 483.987c-.307-16.018 13.109-29.129 29.13-29.129h62.293v-5.714H56.993c-16.021 0-29.437-13.111-29.13-29.129C28.16 404.491 40.835 392 56.428 392h126.429v-5.714H29.136c-16.021 0-29.437-13.111-29.13-29.129.297-15.522 12.973-28.013 28.566-28.013h154.286v-5.714H57.707c-16.021 0-29.437-13.111-29.13-29.129.297-15.522 12.973-28.013 28.566-28.013h168.566l-31.085-22.606c-12.762-9.281-15.583-27.149-6.302-39.912 9.281-12.761 27.15-15.582 39.912-6.302l123.361 89.715a34.287 34.287 0 0 1 14.12 27.728v141.136c0 15.91-10.946 29.73-26.433 33.374l-80.471 18.934a137.16 137.16 0 0 1-31.411 3.646H120c-15.593-.001-28.269-12.492-28.566-28.014zm73.249-225.701h36.423l-11.187-8.136c-18.579-13.511-20.313-40.887-3.17-56.536l-13.004-16.7c-9.843-12.641-28.43-15.171-40.88-5.088-12.065 9.771-14.133 27.447-4.553 39.75l36.371 46.71zm283.298-2.103l-5.003-152.452c-.518-15.771-13.722-28.136-29.493-27.619-15.773.518-28.137 13.722-27.619 29.493l1.262 38.415L283.565 11.019c-9.58-12.303-27.223-14.63-39.653-5.328-12.827 9.599-14.929 28.24-5.086 40.881l76.889 98.745-4.509 3.511-94.79-121.734c-9.58-12.303-27.223-14.63-39.653-5.328-12.827 9.599-14.929 28.24-5.086 40.881l94.443 121.288-4.509 3.511-77.675-99.754c-9.58-12.303-27.223-14.63-39.653-5.328-12.827 9.599-14.929 28.24-5.086 40.881l52.053 66.849c12.497-8.257 29.055-8.285 41.69.904l123.36 89.714c10.904 7.93 17.415 20.715 17.415 34.198v16.999l61.064-47.549a34.285 34.285 0 0 0 13.202-28.177z"],
    "sign-out": [512, 512, [], "f08b", "M180 448H96c-53 0-96-43-96-96V160c0-53 43-96 96-96h84c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H96c-17.7 0-32 14.3-32 32v192c0 17.7 14.3 32 32 32h84c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm117.9-303.1l77.6 71.1H184c-13.3 0-24 10.7-24 24v32c0 13.3 10.7 24 24 24h191.5l-77.6 71.1c-10.1 9.2-10.4 25-.8 34.7l21.9 21.9c9.3 9.3 24.5 9.4 33.9.1l152-150.8c9.5-9.4 9.5-24.7 0-34.1L353 88.3c-9.4-9.3-24.5-9.3-33.9.1l-21.9 21.9c-9.7 9.6-9.3 25.4.7 34.6z"],
    "sign-out-alt": [512, 512, [], "f2f5", "M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z"],
    "signal": [640, 512, [], "f012", "M36 384h56c6.6 0 12 5.4 12 12v104c0 6.6-5.4 12-12 12H36c-6.6 0-12-5.4-12-12V396c0-6.6 5.4-12 12-12zm116-36v152c0 6.6 5.4 12 12 12h56c6.6 0 12-5.4 12-12V348c0-6.6-5.4-12-12-12h-56c-6.6 0-12 5.4-12 12zm128-80v232c0 6.6 5.4 12 12 12h56c6.6 0 12-5.4 12-12V268c0-6.6-5.4-12-12-12h-56c-6.6 0-12 5.4-12 12zm128-112v344c0 6.6 5.4 12 12 12h56c6.6 0 12-5.4 12-12V156c0-6.6-5.4-12-12-12h-56c-6.6 0-12 5.4-12 12zM536 12v488c0 6.6 5.4 12 12 12h56c6.6 0 12-5.4 12-12V12c0-6.6-5.4-12-12-12h-56c-6.6 0-12 5.4-12 12z"],
    "sitemap": [640, 512, [], "f0e8", "M616 320h-48v-48c0-22.056-17.944-40-40-40H344v-40h48c13.255 0 24-10.745 24-24V24c0-13.255-10.745-24-24-24H248c-13.255 0-24 10.745-24 24v144c0 13.255 10.745 24 24 24h48v40H112c-22.056 0-40 17.944-40 40v48H24c-13.255 0-24 10.745-24 24v144c0 13.255 10.745 24 24 24h144c13.255 0 24-10.745 24-24V344c0-13.255-10.745-24-24-24h-48v-40h176v40h-48c-13.255 0-24 10.745-24 24v144c0 13.255 10.745 24 24 24h144c13.255 0 24-10.745 24-24V344c0-13.255-10.745-24-24-24h-48v-40h176v40h-48c-13.255 0-24 10.745-24 24v144c0 13.255 10.745 24 24 24h144c13.255 0 24-10.745 24-24V344c0-13.255-10.745-24-24-24z"],
    "sliders-h": [576, 512, [], "f1de", "M576 80v40c0 6.6-5.4 12-12 12H160v8c0 13.3-10.7 24-24 24h-16c-13.3 0-24-10.7-24-24v-8H12c-6.6 0-12-5.4-12-12V80c0-6.6 5.4-12 12-12h84v-8c0-13.3 10.7-24 24-24h16c13.3 0 24 10.7 24 24v8h404c6.6 0 12 5.4 12 12zm-12 148h-84v-8c0-13.3-10.7-24-24-24h-16c-13.3 0-24 10.7-24 24v8H12c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h404v8c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24v-8h84c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12zm0 160H288v-8c0-13.3-10.7-24-24-24h-16c-13.3 0-24 10.7-24 24v8H12c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h212v8c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24v-8h276c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12z"],
    "sliders-h-square": [448, 512, [], "f3f0", "M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-16 324c0 6.6-5.4 12-12 12h-52v24c0 13.3-10.7 24-24 24h-16c-13.3 0-24-10.7-24-24v-24H76c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h180v-24c0-13.3 10.7-24 24-24h16c13.3 0 24 10.7 24 24v24h52c6.6 0 12 5.4 12 12v40zm0-160c0 6.6-5.4 12-12 12H192v24c0 13.3-10.7 24-24 24h-16c-13.3 0-24-10.7-24-24v-24H76c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h52v-24c0-13.3 10.7-24 24-24h16c13.3 0 24 10.7 24 24v24h180c6.6 0 12 5.4 12 12v40z"],
    "sliders-v": [448, 512, [], "f3f1", "M128 120v16c0 13.3-10.7 24-24 24h-8v340c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12V160h-8c-13.3 0-24-10.7-24-24v-16c0-13.3 10.7-24 24-24h8V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v84h8c13.3 0 24 10.7 24 24zm136 232h-8V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v340h-8c-13.3 0-24 10.7-24 24v16c0 13.3 10.7 24 24 24h8v84c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-84h8c13.3 0 24-10.7 24-24v-16c0-13.3-10.7-24-24-24zm160-128h-8V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v212h-8c-13.3 0-24 10.7-24 24v16c0 13.3 10.7 24 24 24h8v212c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12V288h8c13.3 0 24-10.7 24-24v-16c0-13.3-10.7-24-24-24z"],
    "sliders-v-square": [448, 512, [], "f3f2", "M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM200 224h-24v180c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12V224H88c-13.3 0-24-10.7-24-24v-16c0-13.3 10.7-24 24-24h24v-52c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h24c13.3 0 24 10.7 24 24v16c0 13.3-10.7 24-24 24zm184 104c0 13.3-10.7 24-24 24h-24v52c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-52h-24c-13.3 0-24-10.7-24-24v-16c0-13.3 10.7-24 24-24h24V108c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v180h24c13.3 0 24 10.7 24 24v16z"],
    "smile": [512, 512, [], "f118", "M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zm-122.526 75.34c11.479-17.755-15.349-35.194-26.873-17.374-53.418 82.627-143.71 82.681-197.164 0-11.502-17.79-38.364-.401-26.873 17.374 66.014 102.107 184.795 102.265 250.91 0zM108 192c0 37.497 30.503 68 68 68s68-30.503 68-68-30.503-68-68-68-68 30.503-68 68zm160.5 0c0 37.221 30.279 67.5 67.5 67.5s67.5-30.279 67.5-67.5-30.279-67.5-67.5-67.5-67.5 30.279-67.5 67.5zm67.5-48a47.789 47.789 0 0 0-22.603 5.647h.015c10.916 0 19.765 8.849 19.765 19.765s-8.849 19.765-19.765 19.765-19.765-8.849-19.765-19.765v-.015A47.789 47.789 0 0 0 288 192c0 26.51 21.49 48 48 48s48-21.49 48-48-21.49-48-48-48zm-160 0a47.789 47.789 0 0 0-22.603 5.647h.015c10.916 0 19.765 8.849 19.765 19.765s-8.849 19.765-19.765 19.765-19.765-8.849-19.765-19.765v-.015A47.789 47.789 0 0 0 128 192c0 26.51 21.49 48 48 48s48-21.49 48-48-21.49-48-48-48z"],
    "snowflake": [448, 512, [], "f2dc", "M444.816 301.639a24.12 24.12 0 0 0 2.661-16.978c-2.725-12.966-15.339-21.245-28.174-18.492l-87.407 25.046L264 256l67.896-35.215 87.407 25.046c12.835 2.753 25.449-5.526 28.174-18.492 2.725-12.966-5.471-25.708-18.305-28.461l-47.477-7.137 53.077-30.956c11.363-6.627 15.257-21.306 8.696-32.785-6.561-11.479-21.091-15.412-32.454-8.785l-53.077 30.956 17.621-45.104c4.057-12.606-2.768-26.146-15.247-30.245-12.478-4.099-25.883 2.797-29.94 15.402l-22.232 88.99-60.38 35.215V144l65.175-63.945c8.778-9.852 7.987-25.027-1.766-33.894-9.753-8.867-24.775-8.068-33.552 1.784l-29.857 37.967V24c0-13.255-10.637-24-23.758-24s-23.758 10.745-23.758 24v61.912l-29.857-37.967c-8.779-9.852-23.799-10.652-33.552-1.784-9.753 8.867-10.543 24.042-1.766 33.894L200.242 144v70.431l-60.38-35.215-22.232-88.99c-4.057-12.605-17.462-19.501-29.94-15.402-12.478 4.099-19.304 17.64-15.247 30.245l17.62 45.104-53.077-30.956c-11.363-6.627-25.893-2.694-32.454 8.785s-2.667 26.157 8.696 32.785l53.077 30.956-47.477 7.137C5.993 201.634-2.203 214.375.523 227.341c2.725 12.965 15.339 21.245 28.174 18.492l87.407-25.046L184 256l-67.896 35.215-87.406-25.045c-12.835-2.753-25.449 5.526-28.174 18.492-2.725 12.967 5.47 25.708 18.305 28.461l47.477 7.137-53.077 30.956C1.866 357.843-2.027 372.521 4.533 384s21.091 15.412 32.454 8.785l53.077-30.956-17.62 45.104a24.157 24.157 0 0 0 2.022 19.428c2.831 4.953 7.416 8.909 13.224 10.816 12.478 4.099 25.883-2.797 29.94-15.402l22.232-88.99 60.38-35.215V368l-65.175 63.945c-8.778 9.852-7.987 25.027 1.766 33.894 9.754 8.868 24.774 8.068 33.552-1.784l29.857-37.967V488c0 13.255 10.637 24 23.758 24s23.758-10.745 23.758-24v-61.912l29.857 37.967A23.59 23.59 0 0 0 295.282 472a23.534 23.534 0 0 0 15.885-6.161c9.753-8.867 10.544-24.042 1.766-33.894L247.758 368v-70.431l60.38 35.215 22.232 88.99c4.057 12.605 17.462 19.501 29.94 15.402 12.479-4.099 19.304-17.64 15.247-30.245l-17.621-45.104 53.077 30.956c11.363 6.627 25.893 2.694 32.454-8.785s2.667-26.157-8.696-32.785l-53.077-30.956 47.477-7.137c6.86-1.469 12.394-5.793 15.645-11.481z"],
    "sort": [320, 512, [], "f0dc", "M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z"],
    "sort-alpha-down": [448, 512, [], "f15d", "M187.298 395.314l-79.984 80.002c-6.248 6.247-16.383 6.245-22.627 0L4.705 395.314C-5.365 385.244 1.807 368 16.019 368H64V48c0-8.837 7.163-16 16-16h32c8.837 0 16 7.163 16 16v320h47.984c14.241 0 21.363 17.264 11.314 27.314zm119.075-180.007A12 12 0 0 1 294.838 224h-35.717c-8.22 0-14.007-8.078-11.362-15.861l57.096-168A12 12 0 0 1 316.217 32h39.566c5.139 0 9.708 3.273 11.362 8.139l57.096 168C426.886 215.922 421.1 224 412.879 224h-35.735a12 12 0 0 1-11.515-8.622l-8.301-28.299h-42.863l-8.092 28.228zm22.857-78.697h13.367l-6.6-22.937-6.767 22.937zm12.575 287.323l67.451-95.698a12 12 0 0 0 2.192-6.913V300c0-6.627-5.373-12-12-12H274.522c-6.627 0-12 5.373-12 12v28.93c0 6.627 5.373 12 12 12h56.469c-.739.991-1.497 2.036-2.27 3.133l-67.203 95.205a12.001 12.001 0 0 0-2.196 6.92V468c0 6.627 5.373 12 12 12h129.355c6.627 0 12-5.373 12-12v-28.93c0-6.627-5.373-12-12-12h-61.146c.74-.993 1.5-2.039 2.274-3.137z"],
    "sort-alpha-up": [448, 512, [], "f15e", "M4.702 116.686l79.984-80.002c6.248-6.247 16.383-6.245 22.627 0l79.981 80.002c10.07 10.07 2.899 27.314-11.314 27.314H128v320c0 8.837-7.163 16-16 16H80c-8.837 0-16-7.163-16-16V144H16.016c-14.241 0-21.363-17.264-11.314-27.314zm301.671 98.621A12 12 0 0 1 294.838 224h-35.717c-8.22 0-14.007-8.078-11.362-15.861l57.096-168A12 12 0 0 1 316.217 32h39.566c5.139 0 9.708 3.273 11.362 8.139l57.096 168C426.886 215.922 421.1 224 412.879 224h-35.735a12 12 0 0 1-11.515-8.622l-8.301-28.299h-42.863l-8.092 28.228zm22.857-78.697h13.367l-6.6-22.937-6.767 22.937zm12.575 287.323l67.451-95.698a12 12 0 0 0 2.192-6.913V300c0-6.627-5.373-12-12-12H274.522c-6.627 0-12 5.373-12 12v28.93c0 6.627 5.373 12 12 12h56.469c-.739.991-1.497 2.036-2.27 3.133l-67.203 95.205a12.001 12.001 0 0 0-2.196 6.92V468c0 6.627 5.373 12 12 12h129.355c6.627 0 12-5.373 12-12v-28.93c0-6.627-5.373-12-12-12h-61.146c.74-.993 1.5-2.039 2.274-3.137z"],
    "sort-amount-down": [512, 512, [], "f160", "M187.298 395.314l-79.984 80.002c-6.248 6.247-16.383 6.245-22.627 0L4.705 395.314C-5.365 385.244 1.807 368 16.019 368H64V48c0-8.837 7.163-16 16-16h32c8.837 0 16 7.163 16 16v320h47.984c14.241 0 21.363 17.264 11.314 27.314zM240 96h256c8.837 0 16-7.163 16-16V48c0-8.837-7.163-16-16-16H240c-8.837 0-16 7.163-16 16v32c0 8.837 7.163 16 16 16zm-16 112v-32c0-8.837 7.163-16 16-16h192c8.837 0 16 7.163 16 16v32c0 8.837-7.163 16-16 16H240c-8.837 0-16-7.163-16-16zm0 256v-32c0-8.837 7.163-16 16-16h64c8.837 0 16 7.163 16 16v32c0 8.837-7.163 16-16 16h-64c-8.837 0-16-7.163-16-16zm0-128v-32c0-8.837 7.163-16 16-16h128c8.837 0 16 7.163 16 16v32c0 8.837-7.163 16-16 16H240c-8.837 0-16-7.163-16-16z"],
    "sort-amount-up": [512, 512, [], "f161", "M4.702 116.686l79.984-80.002c6.248-6.247 16.383-6.245 22.627 0l79.981 80.002c10.07 10.07 2.899 27.314-11.314 27.314H128v320c0 8.837-7.163 16-16 16H80c-8.837 0-16-7.163-16-16V144H16.016c-14.241 0-21.363-17.264-11.314-27.314zM240 96h256c8.837 0 16-7.163 16-16V48c0-8.837-7.163-16-16-16H240c-8.837 0-16 7.163-16 16v32c0 8.837 7.163 16 16 16zm-16 112v-32c0-8.837 7.163-16 16-16h192c8.837 0 16 7.163 16 16v32c0 8.837-7.163 16-16 16H240c-8.837 0-16-7.163-16-16zm0 256v-32c0-8.837 7.163-16 16-16h64c8.837 0 16 7.163 16 16v32c0 8.837-7.163 16-16 16h-64c-8.837 0-16-7.163-16-16zm0-128v-32c0-8.837 7.163-16 16-16h128c8.837 0 16 7.163 16 16v32c0 8.837-7.163 16-16 16H240c-8.837 0-16-7.163-16-16z"],
    "sort-down": [320, 512, [], "f0dd", "M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z"],
    "sort-numeric-down": [448, 512, [], "f162", "M308.811 113.787l-19.448-20.795c-4.522-4.836-4.274-12.421.556-16.95l43.443-40.741a11.999 11.999 0 0 1 8.209-3.247h31.591c6.627 0 12 5.373 12 12v127.07h25.66c6.627 0 12 5.373 12 12v28.93c0 6.627-5.373 12-12 12H301.649c-6.627 0-12-5.373-12-12v-28.93c0-6.627 5.373-12 12-12h25.414v-57.938c-7.254 6.58-14.211 4.921-18.252.601zm-30.57 238.569c0-32.653 23.865-67.356 68.094-67.356 38.253 0 79.424 28.861 79.424 92.228 0 51.276-32.237 105.772-91.983 105.772-17.836 0-30.546-3.557-38.548-6.781-5.79-2.333-8.789-8.746-6.922-14.703l9.237-29.48c2.035-6.496 9.049-9.983 15.467-7.716 13.029 4.602 27.878 5.275 38.103-4.138-38.742 5.072-72.872-25.36-72.872-67.826zm92.273 19.338c0-22.285-15.302-36.505-25.835-36.505-8.642 0-13.164 7.965-13.164 15.832 0 5.669 1.815 24.168 25.168 24.168 9.973 0 13.377-2.154 13.744-2.731.021-.046.087-.291.087-.764zM175.984 368H128V48c0-8.837-7.163-16-16-16H80c-8.837 0-16 7.163-16 16v320H16.019c-14.212 0-21.384 17.244-11.314 27.314l79.981 80.002c6.245 6.245 16.38 6.247 22.627 0l79.984-80.002c10.05-10.05 2.928-27.314-11.313-27.314z"],
    "sort-numeric-up": [448, 512, [], "f163", "M308.811 113.787l-19.448-20.795c-4.522-4.836-4.274-12.421.556-16.95l43.443-40.741a11.999 11.999 0 0 1 8.209-3.247h31.591c6.627 0 12 5.373 12 12v127.07h25.66c6.627 0 12 5.373 12 12v28.93c0 6.627-5.373 12-12 12H301.649c-6.627 0-12-5.373-12-12v-28.93c0-6.627 5.373-12 12-12h25.414v-57.938c-7.254 6.58-14.211 4.921-18.252.601zm-30.57 238.569c0-32.653 23.865-67.356 68.094-67.356 38.253 0 79.424 28.861 79.424 92.228 0 51.276-32.237 105.772-91.983 105.772-17.836 0-30.546-3.557-38.548-6.781-5.79-2.333-8.789-8.746-6.922-14.703l9.237-29.48c2.035-6.496 9.049-9.983 15.467-7.716 13.029 4.602 27.878 5.275 38.103-4.138-38.742 5.072-72.872-25.36-72.872-67.826zm92.273 19.338c0-22.285-15.302-36.505-25.835-36.505-8.642 0-13.164 7.965-13.164 15.832 0 5.669 1.815 24.168 25.168 24.168 9.973 0 13.377-2.154 13.744-2.731.021-.046.087-.291.087-.764zM16.016 144H64v320c0 8.837 7.163 16 16 16h32c8.837 0 16-7.163 16-16V144h47.981c14.212 0 21.384-17.244 11.314-27.314l-79.981-80.002c-6.245-6.245-16.38-6.247-22.627 0L4.702 116.686C-5.347 126.736 1.775 144 16.016 144z"],
    "sort-up": [320, 512, [], "f0de", "M279 224H41c-21.4 0-32.1-25.9-17-41L143 64c9.4-9.4 24.6-9.4 33.9 0l119 119c15.2 15.1 4.5 41-16.9 41z"],
    "space-shuttle": [640, 512, [], "f197", "M592.604 208.244C559.735 192.836 515.777 184 472 184H186.327c-4.952-6.555-10.585-11.978-16.72-16H376C229.157 137.747 219.403 32 96.003 32H96v128H80V32c-26.51 0-48 28.654-48 64v64c-23.197 0-32 10.032-32 24v40c0 13.983 8.819 24 32 24v16c-23.197 0-32 10.032-32 24v40c0 13.983 8.819 24 32 24v64c0 35.346 21.49 64 48 64V352h16v128h.003c123.4 0 133.154-105.747 279.997-136H169.606c6.135-4.022 11.768-9.445 16.72-16H472c43.777 0 87.735-8.836 120.604-24.244C622.282 289.845 640 271.992 640 256s-17.718-33.845-47.396-47.756zM488 296a8 8 0 0 1-8-8v-64a8 8 0 0 1 8-8c31.909 0 31.942 80 0 80z"],
    "spade": [512, 512, [], "f2f4", "M272.5 6.6c-9.3-8.8-23.8-8.8-33.1 0C191.4 52.4 53.6 185 32 208.9c-19.3 21.3-32 49.4-32 80.6C0 360 54.9 415.7 123.5 416c36.7.1 69.7-15.7 92.5-40.9-.1 36.6-.8 52.3-52.4 75.4-14.1 6.3-22.2 21.6-18.7 36.6 3.3 14.5 16.3 24.8 31.2 24.8h159.4c15.5 0 29.2-10.8 32.1-26 2.8-14.6-4.8-29.2-18.4-35.2-51.6-23-52.8-38.1-53-75.6 23.4 25.8 57.5 41.8 95.3 40.8 67.5-1.7 120.7-56.5 120.7-124 0-32.2-12.2-61.2-32-83.1C458.4 185 320.6 52.4 272.5 6.6z"],
    "spinner": [512, 512, [], "f110", "M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z"],
    "spinner-third": [512, 512, [], "f3f4", "M456.433 371.72l-27.79-16.045c-7.192-4.152-10.052-13.136-6.487-20.636 25.82-54.328 23.566-118.602-6.768-171.03-30.265-52.529-84.802-86.621-144.76-91.424C262.35 71.922 256 64.953 256 56.649V24.56c0-9.31 7.916-16.609 17.204-15.96 81.795 5.717 156.412 51.902 197.611 123.408 41.301 71.385 43.99 159.096 8.042 232.792-4.082 8.369-14.361 11.575-22.424 6.92z"],
    "square": [448, 512, [], "f0c8", "M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"],
    "star": [576, 512, [], "f005", "M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"],
    "star-exclamation": [576, 512, [], "f2f3", "M259.3 17.8L194 150.2 47.9 171.4c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.1 23 46 46.4 33.7L288 439.6l130.7 68.7c23.3 12.3 50.9-7.5 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8C305-5.9 271.1-6 259.3 17.8zM256.1 160h64c4.7 0 8.4 4.1 8 8.6l-8 112c-.3 4.2-3.8 7.4-8 7.4h-48c-4.2 0-7.7-3.2-8-7.4l-8-112c-.5-4.7 3.5-8.6 8-8.6zM288 392c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"],
    "star-half": [576, 512, [], "f089", "M288 0c-11.4 0-22.8 5.9-28.7 17.8L194 150.2 47.9 171.4c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.1 23 46 46.4 33.7L288 439.6V0z"],
    "step-backward": [448, 512, [], "f048", "M64 468V44c0-6.6 5.4-12 12-12h48c6.6 0 12 5.4 12 12v176.4l195.5-181C352.1 22.3 384 36.6 384 64v384c0 27.4-31.9 41.7-52.5 24.6L136 292.7V468c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12z"],
    "step-forward": [448, 512, [], "f051", "M384 44v424c0 6.6-5.4 12-12 12h-48c-6.6 0-12-5.4-12-12V291.6l-195.5 181C95.9 489.7 64 475.4 64 448V64c0-27.4 31.9-41.7 52.5-24.6L312 219.3V44c0-6.6 5.4-12 12-12h48c6.6 0 12 5.4 12 12z"],
    "stethoscope": [512, 512, [], "f0f1", "M512 176c0-35.659-29.164-64.507-64.941-63.993-34.21.492-62.296 28.357-63.043 62.562-.531 24.282 12.476 45.558 31.984 56.848V344c0 57.346-50.243 104-112 104-60.039 0-109.189-44.096-111.878-99.24C265.005 333.847 320 269.225 320 192V36.584c0-11.44-8.075-21.29-19.293-23.534L237.81.471c-12.997-2.599-25.641 5.83-28.241 18.827l-3.138 15.689c-2.6 12.997 5.83 25.641 18.827 28.241L256 69.376v121.4c0 52.852-42.203 96.707-95.053 97.22C107.58 288.513 64 245.25 64 192V69.376l30.742-6.149c12.997-2.6 21.427-15.243 18.827-28.241l-3.138-15.689C107.831 6.3 95.188-2.129 82.19.471L19.293 13.05C8.075 15.294 0 25.144 0 36.584V192c0 77.295 55.096 141.961 128.076 156.798C130.747 439.223 208.634 512 304 512c97.047 0 176-75.364 176-168V231.417c19.124-11.068 32-31.732 32-55.417zm-64-16c8.822 0 16 7.178 16 16s-7.178 16-16 16-16-7.178-16-16 7.178-16 16-16z"],
    "sticky-note": [448, 512, [], "f249", "M312 320h136V56c0-13.3-10.7-24-24-24H24C10.7 32 0 42.7 0 56v400c0 13.3 10.7 24 24 24h264V344c0-13.2 10.8-24 24-24zm129 55l-98 98c-4.5 4.5-10.6 7-17 7h-6V352h128v6.1c0 6.3-2.5 12.4-7 16.9z"],
    "stop": [448, 512, [], "f04d", "M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"],
    "stop-circle": [512, 512, [], "f28d", "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm96 328c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h160c8.8 0 16 7.2 16 16v160z"],
    "stopwatch": [448, 512, [], "f2f2", "M432 304c0 114.9-93.1 208-208 208S16 418.9 16 304c0-104 76.3-190.2 176-205.5V64h-28c-6.6 0-12-5.4-12-12V12c0-6.6 5.4-12 12-12h120c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-28v34.5c37.5 5.8 71.7 21.6 99.7 44.6l27.5-27.5c4.7-4.7 12.3-4.7 17 0l28.3 28.3c4.7 4.7 4.7 12.3 0 17l-29.4 29.4-.6.6C419.7 223.3 432 262.2 432 304zm-176 36V188.5c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12V340c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12z"],
    "street-view": [512, 512, [], "f21d", "M192 64c0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64s-64-28.654-64-64zm112 80h-11.36c-22.711 10.443-49.59 10.894-73.28 0H208c-26.51 0-48 21.49-48 48v104c0 13.255 10.745 24 24 24h16v104c0 13.255 10.745 24 24 24h64c13.255 0 24-10.745 24-24V320h16c13.255 0 24-10.745 24-24V192c0-26.51-21.49-48-48-48zm85.642 189.152a72.503 72.503 0 0 1-29.01 27.009C391.133 365.251 480 385.854 480 416c0 46.304-167.656 64-224 64-70.303 0-224-20.859-224-64 0-30.123 88.361-50.665 119.367-55.839a72.516 72.516 0 0 1-29.01-27.009C74.959 343.395 0 367.599 0 416c0 77.111 178.658 96 256 96 77.249 0 256-18.865 256-96 0-48.403-74.967-72.606-122.358-82.848z"],
    "strikethrough": [512, 512, [], "f0cc", "M496 288H16c-8.837 0-16-7.163-16-16v-32c0-8.837 7.163-16 16-16h480c8.837 0 16 7.163 16 16v32c0 8.837-7.163 16-16 16zm-214.666 16c27.258 12.937 46.524 28.683 46.524 56.243 0 33.108-28.977 53.676-75.621 53.676-32.325 0-76.874-12.08-76.874-44.271V368c0-8.837-7.164-16-16-16H113.75c-8.836 0-16 7.163-16 16v19.204c0 66.845 77.717 101.82 154.487 101.82 88.578 0 162.013-45.438 162.013-134.424 0-19.815-3.618-36.417-10.143-50.6H281.334zm-30.952-96c-32.422-13.505-56.836-28.946-56.836-59.683 0-33.92 30.901-47.406 64.962-47.406 42.647 0 64.962 16.593 64.962 32.985V136c0 8.837 7.164 16 16 16h45.613c8.836 0 16-7.163 16-16v-30.318c0-52.438-71.725-79.875-142.575-79.875-85.203 0-150.726 40.972-150.726 125.646 0 22.71 4.665 41.176 12.777 56.547h129.823z"],
    "subscript": [512, 512, [], "f12c", "M395.198 416c3.461-10.526 18.796-21.28 36.265-32.425 16.625-10.605 35.467-22.626 50.341-38.862 17.458-19.054 25.944-40.175 25.944-64.567 0-60.562-50.702-88.146-97.81-88.146-42.491 0-76.378 22.016-94.432 50.447-4.654 7.329-2.592 17.036 4.623 21.865l30.328 20.296c7.032 4.706 16.46 3.084 21.63-3.614 8.022-10.394 18.818-18.225 31.667-18.225 19.387 0 26.266 12.901 26.266 23.948 0 36.159-119.437 57.023-119.437 160.024 0 6.654.561 13.014 1.415 19.331 1.076 7.964 7.834 13.928 15.87 13.928H496c8.837 0 16-7.163 16-16v-32c0-8.837-7.163-16-16-16H395.198zM272 256c8.837 0 16 7.163 16 16v32c0 8.837-7.163 16-16 16h-62.399a16 16 0 0 1-13.541-7.478l-45.701-72.615c-2.297-3.352-4.422-6.969-6.195-10.209-1.65 3.244-3.647 6.937-5.874 10.582l-44.712 72.147a15.999 15.999 0 0 1-13.6 7.572H16c-8.837 0-16-7.163-16-16v-32c0-8.837 7.163-16 16-16h26.325l56.552-82.709L46.111 96H16C7.163 96 0 88.837 0 80V48c0-8.837 7.163-16 16-16h68.806a16 16 0 0 1 13.645 7.644l39.882 65.126c2.072 3.523 4.053 7.171 5.727 10.37 1.777-3.244 3.92-6.954 6.237-10.537l40.332-65.035A15.999 15.999 0 0 1 204.226 32H272c8.837 0 16 7.163 16 16v32c0 8.837-7.163 16-16 16h-27.979l-52.69 75.671L249.974 256H272z"],
    "subway": [448, 512, [], "f239", "M448 96v256c0 51.815-61.624 96-130.022 96l62.98 49.721C386.905 502.417 383.562 512 376 512H72c-7.578 0-10.892-9.594-4.957-14.279L130.022 448C61.82 448 0 403.954 0 352V96C0 42.981 64 0 128 0h192c65 0 128 42.981 128 96zM200 232V120c0-13.255-10.745-24-24-24H72c-13.255 0-24 10.745-24 24v112c0 13.255 10.745 24 24 24h104c13.255 0 24-10.745 24-24zm200 0V120c0-13.255-10.745-24-24-24H272c-13.255 0-24 10.745-24 24v112c0 13.255 10.745 24 24 24h104c13.255 0 24-10.745 24-24zm-48 56c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm-256 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48z"],
    "suitcase": [512, 512, [], "f0f2", "M96 480h320V128h-32V80c0-26.51-21.49-48-48-48H176c-26.51 0-48 21.49-48 48v48H96v352zm96-384h128v32H192V96zm320 80v256c0 26.51-21.49 48-48 48h-16V128h16c26.51 0 48 21.49 48 48zM64 480H48c-26.51 0-48-21.49-48-48V176c0-26.51 21.49-48 48-48h16v352z"],
    "sun": [512, 512, [], "f185", "M274.835 12.646l25.516 62.393c4.213 10.301 16.671 14.349 26.134 8.492l57.316-35.479c15.49-9.588 34.808 4.447 30.475 22.142l-16.03 65.475c-2.647 10.81 5.053 21.408 16.152 22.231l67.224 4.987c18.167 1.348 25.546 24.057 11.641 35.826L441.81 242.26c-8.495 7.19-8.495 20.289 0 27.479l51.454 43.548c13.906 11.769 6.527 34.478-11.641 35.826l-67.224 4.987c-11.099.823-18.799 11.421-16.152 22.231l16.03 65.475c4.332 17.695-14.986 31.73-30.475 22.142l-57.316-35.479c-9.463-5.858-21.922-1.81-26.134 8.492l-25.516 62.393c-6.896 16.862-30.774 16.862-37.67 0l-25.516-62.393c-4.213-10.301-16.671-14.349-26.134-8.492l-57.317 35.479c-15.49 9.588-34.808-4.447-30.475-22.142l16.03-65.475c2.647-10.81-5.053-21.408-16.152-22.231l-67.224-4.987c-18.167-1.348-25.546-24.057-11.641-35.826L70.19 269.74c8.495-7.19 8.495-20.289 0-27.479l-51.454-43.548c-13.906-11.769-6.527-34.478 11.641-35.826l67.224-4.987c11.099-.823 18.799-11.421 16.152-22.231l-16.03-65.475c-4.332-17.695 14.986-31.73 30.475-22.142l57.317 35.479c9.463 5.858 21.921 1.81 26.134-8.492l25.516-62.393c6.896-16.861 30.774-16.861 37.67 0zM392 256c0-74.991-61.01-136-136-136-74.991 0-136 61.009-136 136s61.009 136 136 136c74.99 0 136-61.009 136-136zm-32 0c0 57.346-46.654 104-104 104s-104-46.654-104-104 46.654-104 104-104 104 46.654 104 104z"],
    "superscript": [512, 512, [], "f12b", "M395.198 256c3.461-10.526 18.796-21.28 36.265-32.425 16.625-10.605 35.467-22.626 50.341-38.862 17.458-19.054 25.944-40.175 25.944-64.567 0-60.562-50.702-88.146-97.81-88.146-42.491 0-76.378 22.016-94.432 50.447-4.654 7.329-2.592 17.036 4.623 21.865l30.328 20.296c7.032 4.706 16.46 3.084 21.63-3.614 8.022-10.394 18.818-18.225 31.667-18.225 19.387 0 26.266 12.901 26.266 23.948 0 36.159-119.437 57.023-119.437 160.024 0 6.654.561 13.014 1.415 19.331 1.076 7.964 7.834 13.928 15.87 13.928H496c8.837 0 16-7.163 16-16v-32c0-8.837-7.163-16-16-16H395.198zM272 416c8.837 0 16 7.163 16 16v32c0 8.837-7.163 16-16 16h-62.399a16 16 0 0 1-13.541-7.478l-45.701-72.615c-2.297-3.352-4.422-6.969-6.195-10.209-1.65 3.244-3.647 6.937-5.874 10.582l-44.712 72.147a15.999 15.999 0 0 1-13.6 7.572H16c-8.837 0-16-7.163-16-16v-32c0-8.837 7.163-16 16-16h26.325l56.552-82.709L46.111 256H16c-8.837 0-16-7.163-16-16v-32c0-8.837 7.163-16 16-16h68.806a16 16 0 0 1 13.645 7.644l39.882 65.126c2.072 3.523 4.053 7.171 5.727 10.37 1.777-3.244 3.92-6.954 6.237-10.537l40.332-65.035a16 16 0 0 1 13.598-7.567H272c8.837 0 16 7.163 16 16v32c0 8.837-7.163 16-16 16h-27.979l-52.69 75.671L249.974 416H272z"],
    "sync": [512, 512, [], "f021", "M440.935 12.574l3.966 82.766C399.416 41.904 331.674 8 256 8 134.813 8 33.933 94.924 12.296 209.824 10.908 217.193 16.604 224 24.103 224h49.084c5.57 0 10.377-3.842 11.676-9.259C103.407 137.408 172.931 80 256 80c60.893 0 114.512 30.856 146.104 77.801l-101.53-4.865c-6.845-.328-12.574 5.133-12.574 11.986v47.411c0 6.627 5.373 12 12 12h200.333c6.627 0 12-5.373 12-12V12c0-6.627-5.373-12-12-12h-47.411c-6.853 0-12.315 5.729-11.987 12.574zM256 432c-60.895 0-114.517-30.858-146.109-77.805l101.868 4.871c6.845.327 12.573-5.134 12.573-11.986v-47.412c0-6.627-5.373-12-12-12H12c-6.627 0-12 5.373-12 12V500c0 6.627 5.373 12 12 12h47.385c6.863 0 12.328-5.745 11.985-12.599l-4.129-82.575C112.725 470.166 180.405 504 256 504c121.187 0 222.067-86.924 243.704-201.824 1.388-7.369-4.308-14.176-11.807-14.176h-49.084c-5.57 0-10.377 3.842-11.676 9.259C408.593 374.592 339.069 432 256 432z"],
    "sync-alt": [512, 512, [], "f2f1", "M370.72 133.28C339.458 104.008 298.888 87.962 255.848 88c-77.458.068-144.328 53.178-162.791 126.85-1.344 5.363-6.122 9.15-11.651 9.15H24.103c-7.498 0-13.194-6.807-11.807-14.176C33.933 94.924 134.813 8 256 8c66.448 0 126.791 26.136 171.315 68.685L463.03 40.97C478.149 25.851 504 36.559 504 57.941V192c0 13.255-10.745 24-24 24H345.941c-21.382 0-32.09-25.851-16.971-40.971l41.75-41.749zM32 296h134.059c21.382 0 32.09 25.851 16.971 40.971l-41.75 41.75c31.262 29.273 71.835 45.319 114.876 45.28 77.418-.07 144.315-53.144 162.787-126.849 1.344-5.363 6.122-9.15 11.651-9.15h57.304c7.498 0 13.194 6.807 11.807 14.176C478.067 417.076 377.187 504 256 504c-66.448 0-126.791-26.136-171.315-68.685L48.97 471.03C33.851 486.149 8 475.441 8 454.059V320c0-13.255 10.745-24 24-24z"],
    "table": [512, 512, [], "f0ce", "M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM224 416H64v-96h160v96zm0-160H64v-96h160v96zm224 160H288v-96h160v96zm0-160H288v-96h160v96z"],
    "tablet": [448, 512, [], "f10a", "M400 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM224 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"],
    "tablet-alt": [448, 512, [], "f3fa", "M400 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM224 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm176-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h328c6.6 0 12 5.4 12 12v312z"],
    "tablet-android": [448, 512, [], "f3fb", "M400 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM288 452c0 6.6-5.4 12-12 12H172c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h104c6.6 0 12 5.4 12 12v8z"],
    "tablet-android-alt": [448, 512, [], "f3fc", "M400 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM288 452c0 6.6-5.4 12-12 12H172c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h104c6.6 0 12 5.4 12 12v8zm112-80c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h328c6.6 0 12 5.4 12 12v312z"],
    "tachometer": [576, 512, [], "f0e4", "M75.694 480a48.02 48.02 0 0 1-42.448-25.571C12.023 414.3 0 368.556 0 320 0 160.942 128.942 32 288 32s288 128.942 288 288c0 48.556-12.023 94.3-33.246 134.429A48.018 48.018 0 0 1 500.306 480H75.694zm291.419-350.921c-12.659-3.928-26.105 3.148-30.035 15.808L282.659 320.24C249.814 322.955 224 350.454 224 384c0 35.346 28.654 64 64 64s64-28.654 64-64c0-19.976-9.155-37.809-23.494-49.546l54.416-175.34c3.929-12.659-3.15-26.107-15.809-30.035z"],
    "tachometer-alt": [576, 512, [], "f3fd", "M75.694 480a48.02 48.02 0 0 1-42.448-25.571C12.023 414.3 0 368.556 0 320 0 160.942 128.942 32 288 32s288 128.942 288 288c0 48.556-12.023 94.3-33.246 134.429A48.018 48.018 0 0 1 500.306 480H75.694zM512 288c-17.673 0-32 14.327-32 32 0 17.673 14.327 32 32 32s32-14.327 32-32c0-17.673-14.327-32-32-32zM288 128c17.673 0 32-14.327 32-32 0-17.673-14.327-32-32-32s-32 14.327-32 32c0 17.673 14.327 32 32 32zM64 288c-17.673 0-32 14.327-32 32 0 17.673 14.327 32 32 32s32-14.327 32-32c0-17.673-14.327-32-32-32zm65.608-158.392c-17.673 0-32 14.327-32 32 0 17.673 14.327 32 32 32s32-14.327 32-32c0-17.673-14.327-32-32-32zm316.784 0c-17.673 0-32 14.327-32 32 0 17.673 14.327 32 32 32s32-14.327 32-32c0-17.673-14.327-32-32-32zm-87.078 31.534c-12.627-4.04-26.133 2.92-30.173 15.544l-45.923 143.511C250.108 322.645 224 350.264 224 384c0 35.346 28.654 64 64 64 35.346 0 64-28.654 64-64 0-19.773-8.971-37.447-23.061-49.187l45.919-143.498c4.039-12.625-2.92-26.133-15.544-30.173z"],
    "tag": [512, 512, [], "f02b", "M0 252.118V48C0 21.49 21.49 0 48 0h204.118a48 48 0 0 1 33.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882L293.823 497.941c-18.745 18.745-49.137 18.745-67.882 0L14.059 286.059A48 48 0 0 1 0 252.118zM112 64c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48z"],
    "tags": [640, 512, [], "f02c", "M497.941 225.941L286.059 14.059A48 48 0 0 0 252.118 0H48C21.49 0 0 21.49 0 48v204.118a48 48 0 0 0 14.059 33.941l211.882 211.882c18.744 18.745 49.136 18.746 67.882 0l204.118-204.118c18.745-18.745 18.745-49.137 0-67.882zM112 160c-26.51 0-48-21.49-48-48s21.49-48 48-48 48 21.49 48 48-21.49 48-48 48zm513.941 133.823L421.823 497.941c-18.745 18.745-49.137 18.745-67.882 0l-.36-.36L527.64 323.522c16.999-16.999 26.36-39.6 26.36-63.64s-9.362-46.641-26.36-63.64L331.397 0h48.721a48 48 0 0 1 33.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882z"],
    "tasks": [512, 512, [], "f0ae", "M208 132h288c8.8 0 16-7.2 16-16V76c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16v40c0 8.8 7.2 16 16 16zm0 160h288c8.8 0 16-7.2 16-16v-40c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16v40c0 8.8 7.2 16 16 16zm0 160h288c8.8 0 16-7.2 16-16v-40c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16v40c0 8.8 7.2 16 16 16zM64 368c-26.5 0-48.6 21.5-48.6 48s22.1 48 48.6 48 48-21.5 48-48-21.5-48-48-48zm92.5-299l-72.2 72.2-15.6 15.6c-4.7 4.7-12.9 4.7-17.6 0L3.5 109.4c-4.7-4.7-4.7-12.3 0-17l15.7-15.7c4.7-4.7 12.3-4.7 17 0l22.7 22.1 63.7-63.3c4.7-4.7 12.3-4.7 17 0l17 16.5c4.6 4.7 4.6 12.3-.1 17zm0 159.6l-72.2 72.2-15.7 15.7c-4.7 4.7-12.9 4.7-17.6 0L3.5 269c-4.7-4.7-4.7-12.3 0-17l15.7-15.7c4.7-4.7 12.3-4.7 17 0l22.7 22.1 63.7-63.7c4.7-4.7 12.3-4.7 17 0l17 17c4.6 4.6 4.6 12.2-.1 16.9z"],
    "taxi": [512, 512, [], "f1ba", "M461.951 243.865l-21.816-87.268A79.885 79.885 0 0 0 362.522 96H352V56c0-13.255-10.745-24-24-24H184c-13.255 0-24 10.745-24 24v40h-10.522a79.885 79.885 0 0 0-77.612 60.597L50.05 243.865C25.515 252.823 8 276.366 8 304v48c0 20.207 9.374 38.214 24 49.943V456c0 13.255 10.745 24 24 24h48c13.255 0 24-10.745 24-24v-40h256v40c0 13.255 10.745 24 24 24h48c13.255 0 24-10.745 24-24v-54.057c14.626-11.729 24-29.737 24-49.943v-48c0-27.634-17.515-51.177-42.049-60.135zM149.478 160h213.045a15.975 15.975 0 0 1 15.522 12.12l16.97 67.88h-278.03l16.97-67.881A15.976 15.976 0 0 1 149.478 160zM132 336c0 19.882-16.118 36-36 36s-36-16.118-36-36 16.118-36 36-36 36 16.118 36 36zm320 0c0 19.882-16.118 36-36 36s-36-16.118-36-36 16.118-36 36-36 36 16.118 36 36z"],
    "terminal": [640, 512, [], "f120", "M257.981 272.971L63.638 467.314c-9.373 9.373-24.569 9.373-33.941 0L7.029 444.647c-9.357-9.357-9.375-24.522-.04-33.901L161.011 256 6.99 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L257.981 239.03c9.373 9.372 9.373 24.568 0 33.941zM640 456v-32c0-13.255-10.745-24-24-24H312c-13.255 0-24 10.745-24 24v32c0 13.255 10.745 24 24 24h304c13.255 0 24-10.745 24-24z"],
    "text-height": [576, 512, [], "f034", "M16 32h288c8.837 0 16 7.163 16 16v96c0 8.837-7.163 16-16 16h-35.496c-8.837 0-16-7.163-16-16V96h-54.761v320H232c8.837 0 16 7.163 16 16v32c0 8.837-7.163 16-16 16H88c-8.837 0-16-7.163-16-16v-32c0-8.837 7.163-16 16-16h34.257V96H67.496v48c0 8.837-7.163 16-16 16H16c-8.837 0-16-7.163-16-16V48c0-8.837 7.163-16 16-16zm475.308 4.685l79.995 80.001C581.309 126.693 574.297 144 559.99 144H512v224h48c15.639 0 20.635 17.991 11.313 27.314l-79.995 80.001c-6.247 6.247-16.381 6.245-22.626 0l-79.995-80.001C378.691 385.307 385.703 368 400.01 368H448V144h-48c-15.639 0-20.635-17.991-11.313-27.314l79.995-80.001c6.247-6.248 16.381-6.245 22.626 0z"],
    "text-width": [448, 512, [], "f035", "M16 32h416c8.837 0 16 7.163 16 16v96c0 8.837-7.163 16-16 16h-35.496c-8.837 0-16-7.163-16-16V96H261.743v128H296c8.837 0 16 7.163 16 16v32c0 8.837-7.163 16-16 16H152c-8.837 0-16-7.163-16-16v-32c0-8.837 7.163-16 16-16h34.257V96H67.496v48c0 8.837-7.163 16-16 16H16c-8.837 0-16-7.163-16-16V48c0-8.837 7.163-16 16-16zm427.315 340.682l-80.001-79.995C353.991 283.365 336 288.362 336 304v48H112v-47.99c0-14.307-17.307-21.319-27.314-11.313L4.685 372.692c-6.245 6.245-6.247 16.379 0 22.626l80.001 79.995C94.009 484.635 112 479.638 112 464v-48h224v47.99c0 14.307 17.307 21.319 27.314 11.313l80.001-79.995c6.245-6.245 6.248-16.379 0-22.626z"],
    "th": [512, 512, [], "f00a", "M149.333 56v80c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V56c0-13.255 10.745-24 24-24h101.333c13.255 0 24 10.745 24 24zm181.334 240v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.256 0 24.001-10.745 24.001-24zm32-240v80c0 13.255 10.745 24 24 24H488c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24zm-32 80V56c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.256 0 24.001-10.745 24.001-24zm-205.334 56H24c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24zM0 376v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H24c-13.255 0-24 10.745-24 24zm386.667-56H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24zm0 160H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24zM181.333 376v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24z"],
    "th-large": [512, 512, [], "f009", "M296 32h192c13.255 0 24 10.745 24 24v160c0 13.255-10.745 24-24 24H296c-13.255 0-24-10.745-24-24V56c0-13.255 10.745-24 24-24zm-80 0H24C10.745 32 0 42.745 0 56v160c0 13.255 10.745 24 24 24h192c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24zM0 296v160c0 13.255 10.745 24 24 24h192c13.255 0 24-10.745 24-24V296c0-13.255-10.745-24-24-24H24c-13.255 0-24 10.745-24 24zm296 184h192c13.255 0 24-10.745 24-24V296c0-13.255-10.745-24-24-24H296c-13.255 0-24 10.745-24 24v160c0 13.255 10.745 24 24 24z"],
    "th-list": [512, 512, [], "f00b", "M149.333 216v80c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24v-80c0-13.255 10.745-24 24-24h101.333c13.255 0 24 10.745 24 24zM0 376v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H24c-13.255 0-24 10.745-24 24zM125.333 32H24C10.745 32 0 42.745 0 56v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24zm80 448H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24zm-24-424v80c0 13.255 10.745 24 24 24H488c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24zm24 264H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24z"],
    "thermometer-empty": [256, 512, [], "f2cb", "M192 384c0 35.346-28.654 64-64 64s-64-28.654-64-64c0-35.346 28.654-64 64-64s64 28.654 64 64zm32-84.653c19.912 22.563 32 52.194 32 84.653 0 70.696-57.303 128-128 128-.299 0-.609-.001-.909-.003C56.789 511.509-.357 453.636.002 383.333.166 351.135 12.225 321.755 32 299.347V96c0-53.019 42.981-96 96-96s96 42.981 96 96v203.347zM208 384c0-34.339-19.37-52.19-32-66.502V96c0-26.467-21.533-48-48-48S80 69.533 80 96v221.498c-12.732 14.428-31.825 32.1-31.999 66.08-.224 43.876 35.563 80.116 79.423 80.42L128 464c44.112 0 80-35.888 80-80z"],
    "thermometer-full": [256, 512, [], "f2c7", "M224 96c0-53.019-42.981-96-96-96S32 42.981 32 96v203.347C12.225 321.756.166 351.136.002 383.333c-.359 70.303 56.787 128.176 127.089 128.664.299.002.61.003.909.003 70.698 0 128-57.304 128-128 0-32.459-12.088-62.09-32-84.653V96zm-96 368l-.576-.002c-43.86-.304-79.647-36.544-79.423-80.42.173-33.98 19.266-51.652 31.999-66.08V96c0-26.467 21.533-48 48-48s48 21.533 48 48v221.498c12.63 14.312 32 32.164 32 66.502 0 44.112-35.888 80-80 80zm64-80c0 35.346-28.654 64-64 64s-64-28.654-64-64c0-23.685 12.876-44.349 32-55.417V96c0-17.673 14.327-32 32-32s32 14.327 32 32v232.583c19.124 11.068 32 31.732 32 55.417z"],
    "thermometer-half": [256, 512, [], "f2c9", "M192 384c0 35.346-28.654 64-64 64s-64-28.654-64-64c0-23.685 12.876-44.349 32-55.417V224c0-17.673 14.327-32 32-32s32 14.327 32 32v104.583c19.124 11.068 32 31.732 32 55.417zm32-84.653c19.912 22.563 32 52.194 32 84.653 0 70.696-57.303 128-128 128-.299 0-.609-.001-.909-.003C56.789 511.509-.357 453.636.002 383.333.166 351.135 12.225 321.755 32 299.347V96c0-53.019 42.981-96 96-96s96 42.981 96 96v203.347zM208 384c0-34.339-19.37-52.19-32-66.502V96c0-26.467-21.533-48-48-48S80 69.533 80 96v221.498c-12.732 14.428-31.825 32.1-31.999 66.08-.224 43.876 35.563 80.116 79.423 80.42L128 464c44.112 0 80-35.888 80-80z"],
    "thermometer-quarter": [256, 512, [], "f2ca", "M192 384c0 35.346-28.654 64-64 64s-64-28.654-64-64c0-23.685 12.876-44.349 32-55.417V288c0-17.673 14.327-32 32-32s32 14.327 32 32v40.583c19.124 11.068 32 31.732 32 55.417zm32-84.653c19.912 22.563 32 52.194 32 84.653 0 70.696-57.303 128-128 128-.299 0-.609-.001-.909-.003C56.789 511.509-.357 453.636.002 383.333.166 351.135 12.225 321.755 32 299.347V96c0-53.019 42.981-96 96-96s96 42.981 96 96v203.347zM208 384c0-34.339-19.37-52.19-32-66.502V96c0-26.467-21.533-48-48-48S80 69.533 80 96v221.498c-12.732 14.428-31.825 32.1-31.999 66.08-.224 43.876 35.563 80.116 79.423 80.42L128 464c44.112 0 80-35.888 80-80z"],
    "thermometer-three-quarters": [256, 512, [], "f2c8", "M192 384c0 35.346-28.654 64-64 64-35.346 0-64-28.654-64-64 0-23.685 12.876-44.349 32-55.417V160c0-17.673 14.327-32 32-32s32 14.327 32 32v168.583c19.124 11.068 32 31.732 32 55.417zm32-84.653c19.912 22.563 32 52.194 32 84.653 0 70.696-57.303 128-128 128-.299 0-.609-.001-.909-.003C56.789 511.509-.357 453.636.002 383.333.166 351.135 12.225 321.755 32 299.347V96c0-53.019 42.981-96 96-96s96 42.981 96 96v203.347zM208 384c0-34.339-19.37-52.19-32-66.502V96c0-26.467-21.533-48-48-48S80 69.533 80 96v221.498c-12.732 14.428-31.825 32.1-31.999 66.08-.224 43.876 35.563 80.116 79.423 80.42L128 464c44.112 0 80-35.888 80-80z"],
    "thumbs-down": [512, 512, [], "f165", "M0 56v240c0 13.255 10.745 24 24 24h80c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24H24C10.745 32 0 42.745 0 56zm40 200c0-13.255 10.745-24 24-24s24 10.745 24 24-10.745 24-24 24-24-10.745-24-24zm272 256c-20.183 0-29.485-39.293-33.931-57.795-5.206-21.666-10.589-44.07-25.393-58.902-32.469-32.524-49.503-73.967-89.117-113.111a11.98 11.98 0 0 1-3.558-8.521V59.901c0-6.541 5.243-11.878 11.783-11.998 15.831-.29 36.694-9.079 52.651-16.178C256.189 17.598 295.709.017 343.995 0h2.844c42.777 0 93.363.413 113.774 29.737 8.392 12.057 10.446 27.034 6.148 44.632 16.312 17.053 25.063 48.863 16.382 74.757 17.544 23.432 19.143 56.132 9.308 79.469l.11.11c11.893 11.949 19.523 31.259 19.439 49.197-.156 30.352-26.157 58.098-59.553 58.098H350.723C358.03 364.34 384 388.132 384 430.548 384 504 336 512 312 512z"],
    "thumbs-up": [512, 512, [], "f164", "M104 224H24c-13.255 0-24 10.745-24 24v240c0 13.255 10.745 24 24 24h80c13.255 0 24-10.745 24-24V248c0-13.255-10.745-24-24-24zM64 472c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zM384 81.452c0 42.416-25.97 66.208-33.277 94.548h101.723c33.397 0 59.397 27.746 59.553 58.098.084 17.938-7.546 37.249-19.439 49.197l-.11.11c9.836 23.337 8.237 56.037-9.308 79.469 8.681 25.895-.069 57.704-16.382 74.757 4.298 17.598 2.244 32.575-6.148 44.632C440.202 511.587 389.616 512 346.839 512l-2.845-.001c-48.287-.017-87.806-17.598-119.56-31.725-15.957-7.099-36.821-15.887-52.651-16.178-6.54-.12-11.783-5.457-11.783-11.998v-213.77c0-3.2 1.282-6.271 3.558-8.521 39.614-39.144 56.648-80.587 89.117-113.111 14.804-14.832 20.188-37.236 25.393-58.902C282.515 39.293 291.817 0 312 0c24 0 72 8 72 81.452z"],
    "thumbtack": [384, 512, [], "f08d", "M298.028 214.267L285.793 96H328c13.255 0 24-10.745 24-24V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v48c0 13.255 10.745 24 24 24h42.207L85.972 214.267C37.465 236.82 0 277.261 0 328c0 13.255 10.745 24 24 24h136v104.007c0 1.242.289 2.467.845 3.578l24 48c2.941 5.882 11.364 5.893 14.311 0l24-48a8.008 8.008 0 0 0 .845-3.578V352h136c13.255 0 24-10.745 24-24-.001-51.183-37.983-91.42-85.973-113.733z"],
    "ticket": [576, 512, [], "f145", "M576 208v-96c0-26.51-21.49-48-48-48H48C21.49 64 0 85.49 0 112v96c26.51 0 48 21.49 48 48s-21.49 48-48 48v96c0 26.51 21.49 48 48 48h480c26.51 0 48-21.49 48-48v-96c-26.51 0-48-21.49-48-48s21.49-48 48-48z"],
    "ticket-alt": [576, 512, [], "f3ff", "M128 160h320v192H128V160zm400 96c0 26.51 21.49 48 48 48v96c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48v-96c26.51 0 48-21.49 48-48s-21.49-48-48-48v-96c0-26.51 21.49-48 48-48h480c26.51 0 48 21.49 48 48v96c-26.51 0-48 21.49-48 48zm-48-104c0-13.255-10.745-24-24-24H120c-13.255 0-24 10.745-24 24v208c0 13.255 10.745 24 24 24h336c13.255 0 24-10.745 24-24V152z"],
    "times": [384, 512, [], "f00d", "M323.1 441l53.9-53.9c9.4-9.4 9.4-24.5 0-33.9L279.8 256l97.2-97.2c9.4-9.4 9.4-24.5 0-33.9L323.1 71c-9.4-9.4-24.5-9.4-33.9 0L192 168.2 94.8 71c-9.4-9.4-24.5-9.4-33.9 0L7 124.9c-9.4 9.4-9.4 24.5 0 33.9l97.2 97.2L7 353.2c-9.4 9.4-9.4 24.5 0 33.9L60.9 441c9.4 9.4 24.5 9.4 33.9 0l97.2-97.2 97.2 97.2c9.3 9.3 24.5 9.3 33.9 0z"],
    "times-circle": [512, 512, [], "f057", "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"],
    "times-hexagon": [576, 512, [], "f2ee", "M553.5 231.8c8.7 14.9 8.7 33.4 0 48.4l-112 192c-8.6 14.7-24.4 23.8-41.5 23.8H176c-17.1 0-32.9-9.1-41.5-23.8l-112-192c-8.7-14.9-8.7-33.4 0-48.4l112-192C143.1 25.1 158.9 16 176 16h224c17.1 0 32.9 9.1 41.5 23.8l112 192zM409.6 338c4.7-4.7 4.7-12.3 0-17l-65-65 65.1-65.1c4.7-4.7 4.7-12.3 0-17L370 134.4c-4.7-4.7-12.3-4.7-17 0l-65 65-65.1-65.1c-4.7-4.7-12.3-4.7-17 0L166.4 174c-4.7 4.7-4.7 12.3 0 17l65.1 65.1-65.1 65.1c-4.7 4.7-4.7 12.3 0 17l39.6 39.6c4.7 4.7 12.3 4.7 17 0l65.1-65.1 65.1 65.1c4.7 4.7 12.3 4.7 17 0l39.4-39.8z"],
    "times-octagon": [512, 512, [], "f2f0", "M497.9 150.5c9 9 14.1 21.2 14.1 33.9v143.1c0 12.7-5.1 24.9-14.1 33.9L361.5 497.9c-9 9-21.2 14.1-33.9 14.1H184.5c-12.7 0-24.9-5.1-33.9-14.1L14.1 361.5c-9-9-14.1-21.2-14.1-33.9V184.5c0-12.7 5.1-24.9 14.1-33.9L150.5 14.1c9-9 21.2-14.1 33.9-14.1h143.1c12.7 0 24.9 5.1 33.9 14.1l136.5 136.4zM377.6 338c4.7-4.7 4.7-12.3 0-17l-65-65 65.1-65.1c4.7-4.7 4.7-12.3 0-17L338 134.4c-4.7-4.7-12.3-4.7-17 0l-65 65-65.1-65.1c-4.7-4.7-12.3-4.7-17 0L134.4 174c-4.7 4.7-4.7 12.3 0 17l65.1 65.1-65.1 65.1c-4.7 4.7-4.7 12.3 0 17l39.6 39.6c4.7 4.7 12.3 4.7 17 0l65.1-65.1 65.1 65.1c4.7 4.7 12.3 4.7 17 0l39.4-39.8z"],
    "times-square": [448, 512, [], "f2d3", "M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-54.4 289.1c4.7 4.7 4.7 12.3 0 17L306 377.6c-4.7 4.7-12.3 4.7-17 0L224 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L102.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L280 256l65.6 65.1z"],
    "tint": [384, 512, [], "f043", "M192 512c-98.435 0-178.087-79.652-178.087-178.087 0-111.196 101.194-154.065 148.522-311.825 9.104-30.116 51.099-28.778 59.13 0 47.546 158.486 148.522 200.069 148.522 311.825C370.087 432.348 290.435 512 192 512zm-42.522-171.826c-1.509-5.533-9.447-5.532-10.956 0-9.223 29.425-27.913 37.645-27.913 58.435C110.609 417.13 125.478 432 144 432s33.391-14.87 33.391-33.391c0-20.839-18.673-28.956-27.913-58.435z"],
    "toggle-off": [576, 512, [], "f204", "M384 64H192C85.961 64 0 149.961 0 256s85.961 192 192 192h192c106.039 0 192-85.961 192-192S490.039 64 384 64zM64 256c0-70.741 57.249-128 128-128 70.741 0 128 57.249 128 128 0 70.741-57.249 128-128 128-70.741 0-128-57.249-128-128zm320 128h-48.905c65.217-72.858 65.236-183.12 0-256H384c70.741 0 128 57.249 128 128 0 70.74-57.249 128-128 128z"],
    "toggle-on": [576, 512, [], "f205", "M576 256c0 106.039-85.961 192-192 192H192C85.961 448 0 362.039 0 256S85.961 64 192 64h192c106.039 0 192 85.961 192 192zM384 128c-70.741 0-128 57.249-128 128 0 70.741 57.249 128 128 128 70.741 0 128-57.249 128-128 0-70.741-57.249-128-128-128"],
    "trademark": [640, 512, [], "f25c", "M97.119 163.133H12c-6.627 0-12-5.373-12-12V108c0-6.627 5.373-12 12-12h248.559c6.627 0 12 5.373 12 12v43.133c0 6.627-5.373 12-12 12H175.44V404c0 6.627-5.373 12-12 12h-54.322c-6.627 0-12-5.373-12-12V163.133zM329.825 96h65.425a12 12 0 0 1 11.346 8.093l43.759 127.068c7.161 20.588 16.111 52.812 16.111 52.812h.896s8.95-32.224 16.111-52.812l43.758-127.068A12 12 0 0 1 538.577 96h65.41a12 12 0 0 1 11.961 11.03l24.012 296c.567 6.987-4.951 12.97-11.961 12.97h-54.101a12 12 0 0 1-11.972-11.182l-9.082-132.93c-1.79-24.168 0-53.706 0-53.706h-.896s-10.741 33.566-17.902 53.706l-30.7 84.731a12 12 0 0 1-11.282 7.912h-50.302a12 12 0 0 1-11.282-7.912l-30.7-84.731c-7.161-20.14-17.903-53.706-17.903-53.706h-.895s1.79 29.538 0 53.706l-9.082 132.93c-.428 6.295-5.66 11.182-11.97 11.182H305.4c-7.017 0-12.536-5.994-11.959-12.987l24.425-296A11.999 11.999 0 0 1 329.825 96z"],
    "train": [448, 512, [], "f238", "M448 96v256c0 51.815-61.624 96-130.022 96l62.98 49.721C386.905 502.417 383.562 512 376 512H72c-7.578 0-10.892-9.594-4.957-14.279L130.022 448C61.82 448 0 403.954 0 352V96C0 42.981 64 0 128 0h192c65 0 128 42.981 128 96zm-48 136V120c0-13.255-10.745-24-24-24H72c-13.255 0-24 10.745-24 24v112c0 13.255 10.745 24 24 24h304c13.255 0 24-10.745 24-24zm-176 64c-30.928 0-56 25.072-56 56s25.072 56 56 56 56-25.072 56-56-25.072-56-56-56z"],
    "transgender": [384, 512, [], "f224", "M372 0h-79c-10.7 0-16 12.9-8.5 20.5l16.9 16.9-80.7 80.7C198.5 104.1 172.2 96 144 96 64.5 96 0 160.5 0 240c0 68.5 47.9 125.9 112 140.4V408H76c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h36v28c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-28h36c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-36v-27.6c64.1-14.6 112-71.9 112-140.4 0-28.2-8.1-54.5-22.1-76.7l80.7-80.7 16.9 16.9c7.6 7.6 20.5 2.2 20.5-8.5V12c0-6.6-5.4-12-12-12zM144 320c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"],
    "transgender-alt": [480, 512, [], "f225", "M468 0h-79c-10.7 0-16 12.9-8.5 20.5l16.9 16.9-80.7 80.7C294.5 104.1 268.2 96 240 96c-28.2 0-54.5 8.1-76.7 22.1l-16.5-16.5 19.8-19.8c4.7-4.7 4.7-12.3 0-17l-28.3-28.3c-4.7-4.7-12.3-4.7-17 0l-19.8 19.8-19-19 16.9-16.9C107.1 12.9 101.7 0 91 0H12C5.4 0 0 5.4 0 12v79c0 10.7 12.9 16 20.5 8.5l16.9-16.9 19 19-19.8 19.8c-4.7 4.7-4.7 12.3 0 17l28.3 28.3c4.7 4.7 12.3 4.7 17 0l19.8-19.8 16.5 16.5C104.1 185.5 96 211.8 96 240c0 68.5 47.9 125.9 112 140.4V408h-36c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h36v28c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-28h36c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-36v-27.6c64.1-14.6 112-71.9 112-140.4 0-28.2-8.1-54.5-22.1-76.7l80.7-80.7 16.9 16.9c7.6 7.6 20.5 2.2 20.5-8.5V12c0-6.6-5.4-12-12-12zM240 320c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"],
    "trash": [448, 512, [], "f1f8", "M0 84V56c0-13.3 10.7-24 24-24h112l9.4-18.7c4-8.2 12.3-13.3 21.4-13.3h114.3c9.1 0 17.4 5.1 21.5 13.3L312 32h112c13.3 0 24 10.7 24 24v28c0 6.6-5.4 12-12 12H12C5.4 96 0 90.6 0 84zm415.2 56.7L394.8 467c-1.6 25.3-22.6 45-47.9 45H101.1c-25.3 0-46.3-19.7-47.9-45L32.8 140.7c-.4-6.9 5.1-12.7 12-12.7h358.5c6.8 0 12.3 5.8 11.9 12.7z"],
    "trash-alt": [448, 512, [], "f2ed", "M0 84V56c0-13.3 10.7-24 24-24h112l9.4-18.7c4-8.2 12.3-13.3 21.4-13.3h114.3c9.1 0 17.4 5.1 21.5 13.3L312 32h112c13.3 0 24 10.7 24 24v28c0 6.6-5.4 12-12 12H12C5.4 96 0 90.6 0 84zm416 56v324c0 26.5-21.5 48-48 48H80c-26.5 0-48-21.5-48-48V140c0-6.6 5.4-12 12-12h360c6.6 0 12 5.4 12 12zm-272 68c0-8.8-7.2-16-16-16s-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16V208zm96 0c0-8.8-7.2-16-16-16s-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16V208zm96 0c0-8.8-7.2-16-16-16s-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16V208z"],
    "tree": [384, 512, [], "f1bb", "M377.33 375.429L293.906 288H328c21.017 0 31.872-25.207 17.448-40.479L262.79 160H296c20.878 0 31.851-24.969 17.587-40.331l-104-112.003c-9.485-10.214-25.676-10.229-35.174 0l-104 112.003C56.206 134.969 67.037 160 88 160h33.21l-82.659 87.521C24.121 262.801 34.993 288 56 288h34.094L6.665 375.429C-7.869 390.655 2.925 416 24.025 416H144c0 32.781-11.188 49.26-33.995 67.506C98.225 492.93 104.914 512 120 512h144c15.086 0 21.776-19.069 9.995-28.494-19.768-15.814-33.992-31.665-33.995-67.496V416h119.97c21.05 0 31.929-25.309 17.36-40.571z"],
    "tree-alt": [512, 512, [], "f400", "M453.5 199.602c37.988-66.521-31.458-144.037-101.934-112.73C346.968 38.135 305.94 0 256 0s-90.968 38.135-95.565 86.872C89.908 55.543 20.548 133.143 58.5 199.602 24.115 214.207 0 248.287 0 288c0 53.019 42.981 96 96 96h112c0 48.847 3.8 69.27-33.995 99.506C162.225 492.93 168.913 512 184 512h144c15.086 0 21.776-19.069 9.995-28.494C300.218 453.284 304 433.034 304 384h112c53.019 0 96-42.981 96-96 0-39.713-24.115-73.793-58.5-88.398z"],
    "triangle": [576, 512, [], "f2ec", "M329.6 24c-18.4-32-64.7-32-83.2 0L6.5 440c-18.4 31.9 4.6 72 41.6 72H528c36.9 0 60-40 41.6-72l-240-416z"],
    "trophy": [576, 512, [], "f091", "M552 64H448V24c0-13.3-10.7-24-24-24H152c-13.3 0-24 10.7-24 24v40H24C10.7 64 0 74.7 0 88v56c0 35.7 22.5 72.4 61.9 100.7 31.5 22.7 69.8 37.1 110 41.7C203.3 338.5 240 360 240 360v72h-48c-35.3 0-64 20.7-64 56v12c0 6.6 5.4 12 12 12h296c6.6 0 12-5.4 12-12v-12c0-35.3-28.7-56-64-56h-48v-72s36.7-21.5 68.1-73.6c40.3-4.6 78.6-19 110-41.7 39.3-28.3 61.9-65 61.9-100.7V88c0-13.3-10.7-24-24-24zM99.3 192.8C74.9 175.2 64 155.6 64 144v-16h64.2c1 32.6 5.8 61.2 12.8 86.2-15.1-5.2-29.2-12.4-41.7-21.4zM512 144c0 16.1-17.7 36.1-35.3 48.8-12.5 9-26.7 16.2-41.8 21.4 7-25 11.8-53.6 12.8-86.2H512v16z"],
    "trophy-alt": [576, 512, [], "f2eb", "M552 64H448V24c0-13.3-10.7-24-24-24H152c-13.3 0-24 10.7-24 24v40H24C10.7 64 0 74.7 0 88v56c0 66.5 77.9 131.7 171.9 142.4C203.3 338.5 240 360 240 360v72h-48c-35.3 0-64 20.7-64 56v12c0 6.6 5.4 12 12 12h296c6.6 0 12-5.4 12-12v-12c0-35.3-28.7-56-64-56h-48v-72s36.7-21.5 68.1-73.6C498.4 275.6 576 210.3 576 144V88c0-13.3-10.7-24-24-24zM64 144v-16h64.2c1 32.6 5.8 61.2 12.8 86.2-47.5-16.4-77-49.9-77-70.2zm448 0c0 20.2-29.4 53.8-77 70.2 7-25 11.8-53.6 12.8-86.2H512v16zm-127.3 4.7l-39.6 38.6 9.4 54.6c1.7 9.8-8.7 17.2-17.4 12.6l-49-25.8-49 25.8c-8.8 4.6-19.1-2.9-17.4-12.6l9.4-54.6-39.6-38.6c-7.1-6.9-3.2-19 6.7-20.5l54.8-8 24.5-49.6c4.4-8.9 17.1-8.9 21.5 0l24.5 49.6 54.8 8c9.6 1.5 13.5 13.6 6.4 20.5z"],
    "truck": [640, 512, [], "f0d1", "M592 0H272c-26.51 0-48 21.49-48 48v48h-44.118a48 48 0 0 0-33.941 14.059l-99.882 99.882A48 48 0 0 0 32 243.882V352h-8c-13.255 0-24 10.745-24 24v16c0 13.255 10.745 24 24 24h40c0 53.019 42.981 96 96 96s96-42.981 96-96h128c0 53.019 42.981 96 96 96s96-42.981 96-96h40c13.255 0 24-10.745 24-24V48c0-26.51-21.49-48-48-48zM160 464c-26.467 0-48-21.533-48-48s21.533-48 48-48 48 21.533 48 48-21.533 48-48 48zm64-208H80v-12.118L179.882 144H224v112zm256 208c-26.467 0-48-21.533-48-48s21.533-48 48-48 48 21.533 48 48-21.533 48-48 48z"],
    "tty": [512, 512, [], "f1e4", "M5.37 103.822c138.532-138.532 362.936-138.326 501.262 0 6.078 6.078 7.074 15.496 2.583 22.681l-43.214 69.138a18.332 18.332 0 0 1-22.356 7.305l-86.422-34.569a18.335 18.335 0 0 1-11.434-18.846L351.741 90c-62.145-22.454-130.636-21.986-191.483 0l5.953 59.532a18.331 18.331 0 0 1-11.434 18.846l-86.423 34.568a18.334 18.334 0 0 1-22.356-7.305L2.787 126.502a18.333 18.333 0 0 1 2.583-22.68zM96 308v-40c0-6.627-5.373-12-12-12H44c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm96 0v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm96 0v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm96 0v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm96 0v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm-336 96v-40c0-6.627-5.373-12-12-12H92c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm96 0v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm96 0v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm96 0v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zM96 500v-40c0-6.627-5.373-12-12-12H44c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm288 0v-40c0-6.627-5.373-12-12-12H140c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h232c6.627 0 12-5.373 12-12zm96 0v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12z"],
    "tv": [640, 512, [], "f26c", "M592 0H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h245.1v32h-160c-17.7 0-32 14.3-32 32s14.3 32 32 32h384c17.7 0 32-14.3 32-32s-14.3-32-32-32h-160v-32H592c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-16 352H64V64h512v288z"],
    "tv-retro": [512, 512, [], "f401", "M464 96H338.8l35.7-41.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 94.2 182.8 9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L173.2 96H48c-26.5 0-48 21.5-48 48v288c0 26.5 21.5 48 48 48h16v32h48l21.3-32h245.3l21.3 32h48v-32h16c26.5 0 48-21.5 48-48V144c.1-26.5-21.4-48-47.9-48zm-72 312s0 8-168 8c-152 0-152-8-152-8s-8 0-8-120 8-120 8-120 0-8 152-8c168 0 168 8 168 8s8 0 8 120-8 120-8 120zm72-100c0 6.6-5.4 12-12 12h-8c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h8c6.6 0 12 5.4 12 12v8zm0-64c0 6.6-5.4 12-12 12h-8c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h8c6.6 0 12 5.4 12 12v8z"],
    "umbrella": [576, 512, [], "f0e9", "M557.011 267.631c-51.432-45.217-107.572-43.698-158.567 30.731-5.298 7.861-14.906 7.165-19.736 0-2.483-3.624-32.218-60.808-90.708-60.808-45.766 0-70.542 31.378-90.709 60.808-4.829 7.165-14.436 7.861-19.734 0-50.904-74.285-106.613-76.406-158.567-30.731-10.21 8.264-20.912-1.109-18.696-9.481C32.146 134.573 158.516 64.612 288.001 64.612c128.793 0 256.546 69.961 287.706 193.538 2.206 8.322-8.426 17.793-18.696 9.481zM256 261.001V416c0 17.645-14.355 32-32 32s-32-14.355-32-32c0-17.673-14.327-32-32-32s-32 14.327-32 32c0 52.935 43.065 96 96 96s96-43.065 96-96V261.288c-21.836-10.806-45.425-9.737-64-.287zm64-211.007V32c0-17.673-14.327-32-32-32s-32 14.327-32 32v17.987a372.105 372.105 0 0 1 64 .007z"],
    "underline": [448, 512, [], "f0cd", "M224.264 388.24c-91.669 0-156.603-51.165-156.603-151.392V64H39.37c-8.837 0-16-7.163-16-16V16c0-8.837 7.163-16 16-16h137.39c8.837 0 16 7.163 16 16v32c0 8.837-7.163 16-16 16h-28.813v172.848c0 53.699 28.314 79.444 76.317 79.444 46.966 0 75.796-25.434 75.796-79.965V64h-28.291c-8.837 0-16-7.163-16-16V16c0-8.837 7.163-16 16-16h136.868c8.837 0 16 7.163 16 16v32c0 8.837-7.163 16-16 16h-28.291v172.848c0 99.405-64.881 151.392-156.082 151.392zM16 448h416c8.837 0 16 7.163 16 16v32c0 8.837-7.163 16-16 16H16c-8.837 0-16-7.163-16-16v-32c0-8.837 7.163-16 16-16z"],
    "undo": [512, 512, [], "f0e2", "M212.333 224.333H12c-6.627 0-12-5.373-12-12V12C0 5.373 5.373 0 12 0h48c6.627 0 12 5.373 12 12v78.112C117.773 39.279 184.26 7.47 258.175 8.007c136.906.994 246.448 111.623 246.157 248.532C504.041 393.258 393.12 504 256.333 504c-64.089 0-122.496-24.313-166.51-64.215-5.099-4.622-5.334-12.554-.467-17.42l33.967-33.967c4.474-4.474 11.662-4.717 16.401-.525C170.76 415.336 211.58 432 256.333 432c97.268 0 176-78.716 176-176 0-97.267-78.716-176-176-176-58.496 0-110.28 28.476-142.274 72.333h98.274c6.627 0 12 5.373 12 12v48c0 6.627-5.373 12-12 12z"],
    "undo-alt": [512, 512, [], "f2ea", "M255.545 8c-66.269.119-126.438 26.233-170.86 68.685L48.971 40.971C33.851 25.851 8 36.559 8 57.941V192c0 13.255 10.745 24 24 24h134.059c21.382 0 32.09-25.851 16.971-40.971l-41.75-41.75c30.864-28.899 70.801-44.907 113.23-45.273 92.398-.798 170.283 73.977 169.484 169.442C423.236 348.009 349.816 424 256 424c-41.127 0-79.997-14.678-110.63-41.556-4.743-4.161-11.906-3.908-16.368.553L89.34 422.659c-4.872 4.872-4.631 12.815.482 17.433C133.798 479.813 192.074 504 256 504c136.966 0 247.999-111.033 248-247.998C504.001 119.193 392.354 7.755 255.545 8z"],
    "universal-access": [512, 512, [], "f29a", "M256 48c114.953 0 208 93.029 208 208 0 114.953-93.029 208-208 208-114.953 0-208-93.029-208-208 0-114.953 93.029-208 208-208m0-40C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 56C149.961 64 64 149.961 64 256s85.961 192 192 192 192-85.961 192-192S362.039 64 256 64zm0 44c19.882 0 36 16.118 36 36s-16.118 36-36 36-36-16.118-36-36 16.118-36 36-36zm117.741 98.023c-28.712 6.779-55.511 12.748-82.14 15.807.851 101.023 12.306 123.052 25.037 155.621 3.617 9.26-.957 19.698-10.217 23.315-9.261 3.617-19.699-.957-23.316-10.217-8.705-22.308-17.086-40.636-22.261-78.549h-9.686c-5.167 37.851-13.534 56.208-22.262 78.549-3.615 9.255-14.05 13.836-23.315 10.217-9.26-3.617-13.834-14.056-10.217-23.315 12.713-32.541 24.185-54.541 25.037-155.621-26.629-3.058-53.428-9.027-82.141-15.807-8.6-2.031-13.926-10.648-11.895-19.249s10.647-13.926 19.249-11.895c96.686 22.829 124.283 22.783 220.775 0 8.599-2.03 17.218 3.294 19.249 11.895 2.029 8.601-3.297 17.219-11.897 19.249z"],
    "university": [512, 512, [], "f19c", "M480 128v16a8 8 0 0 1-8 8h-24v12c0 6.627-5.373 12-12 12H44c-6.627 0-12-5.373-12-12v-12H8a8 8 0 0 1-8-8v-16a8 8 0 0 1 4.941-7.392l232-88a7.996 7.996 0 0 1 6.118 0l232 88A8 8 0 0 1 480 128zm-24 304H24c-13.255 0-24 10.745-24 24v16a8 8 0 0 0 8 8h464a8 8 0 0 0 8-8v-16c0-13.255-10.745-24-24-24zM64 192v192H44c-6.627 0-12 5.373-12 12v20h416v-20c0-6.627-5.373-12-12-12h-20V192h-64v192h-32V192h-64v192h-32V192h-64v192h-32V192H64z"],
    "unlink": [512, 512, [], "f127", "M304.083 405.907c4.686 4.686 4.686 12.284 0 16.971l-44.674 44.674c-59.263 59.262-155.693 59.266-214.961 0-59.264-59.265-59.264-155.696 0-214.96l44.675-44.675c4.686-4.686 12.284-4.686 16.971 0l39.598 39.598c4.686 4.686 4.686 12.284 0 16.971l-44.675 44.674c-28.072 28.073-28.072 73.75 0 101.823 28.072 28.072 73.75 28.073 101.824 0l44.674-44.674c4.686-4.686 12.284-4.686 16.971 0l39.597 39.598zm-56.568-260.216c4.686 4.686 12.284 4.686 16.971 0l44.674-44.674c28.072-28.075 73.75-28.073 101.824 0 28.072 28.073 28.072 73.75 0 101.823l-44.675 44.674c-4.686 4.686-4.686 12.284 0 16.971l39.598 39.598c4.686 4.686 12.284 4.686 16.971 0l44.675-44.675c59.265-59.265 59.265-155.695 0-214.96-59.266-59.264-155.695-59.264-214.961 0l-44.674 44.674c-4.686 4.686-4.686 12.284 0 16.971l39.597 39.598zm234.828 359.28l22.627-22.627c9.373-9.373 9.373-24.569 0-33.941L63.598 7.029c-9.373-9.373-24.569-9.373-33.941 0L7.029 29.657c-9.373 9.373-9.373 24.569 0 33.941l441.373 441.373c9.373 9.372 24.569 9.372 33.941 0z"],
    "unlock": [448, 512, [], "f09c", "M400 256H152V152.9c0-39.6 31.7-72.5 71.3-72.9 40-.4 72.7 32.1 72.7 72v16c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24v-16C376 68 307.5-.3 223.5 0 139.5.3 72 69.5 72 153.5V256H48c-26.5 0-48 21.5-48 48v160c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"],
    "unlock-alt": [448, 512, [], "f13e", "M400 256H152V152.9c0-39.6 31.7-72.5 71.3-72.9 40-.4 72.7 32.1 72.7 72v16c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24v-16C376 68 307.5-.3 223.5 0 139.5.3 72 69.5 72 153.5V256H48c-26.5 0-48 21.5-48 48v160c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zM264 408c0 22.1-17.9 40-40 40s-40-17.9-40-40v-48c0-22.1 17.9-40 40-40s40 17.9 40 40v48z"],
    "upload": [512, 512, [], "f093", "M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"],
    "usd-circle": [512, 512, [], "f2e8", "M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zm-177.811 3.732c-16.045-12.42-36.231-20.246-55.752-27.813-33.873-13.131-54.441-22.511-54.441-42.007 0-8.317 3.706-15.58 10.719-21.004 7.811-6.041 19.356-9.368 32.51-9.368 30.935 0 56.027 21.997 56.262 22.206a8.995 8.995 0 0 0 7.489 2.178 8.996 8.996 0 0 0 6.378-4.489l17.276-30.936a9 9 0 0 0-1.388-10.645c-.929-.96-20.51-20.774-57.242-28.105V76c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v35.356c-16.854 4.814-31.48 13.097-42.878 24.408-15.026 14.911-23.301 34.426-23.301 54.951 0 54.796 48.128 74.002 86.799 89.434 32.484 12.963 52.208 22.092 52.208 39.529 0 9.61-3.894 17.784-11.262 23.637-7.423 5.897-17.919 9.145-29.555 9.145-36.629 0-65.68-27.637-66.047-27.99a8.999 8.999 0 0 0-13.433 1.008l-21.695 28.525a9 9 0 0 0 .465 11.459c1.109 1.236 25.001 27.325 68.698 36.841V436c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12v-34.218c17.605-4.721 32.759-13.618 44.422-26.223 14.563-15.739 22.583-36.44 22.583-58.291.001-23.706-9.425-42.527-28.815-57.536z"],
    "usd-square": [448, 512, [], "f2e9", "M448 80v352c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48zM294.189 259.732c-16.045-12.42-36.231-20.246-55.752-27.813-33.873-13.131-54.441-22.511-54.441-42.007 0-8.317 3.706-15.58 10.719-21.004 7.811-6.041 19.356-9.368 32.51-9.368 30.935 0 56.027 21.997 56.262 22.206a8.995 8.995 0 0 0 7.489 2.178 8.996 8.996 0 0 0 6.378-4.489l17.276-30.936a9 9 0 0 0-1.388-10.645c-.929-.96-20.51-20.774-57.242-28.105V76c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v35.356c-16.854 4.814-31.48 13.097-42.878 24.408-15.026 14.911-23.301 34.426-23.301 54.951 0 54.796 48.128 74.002 86.799 89.434 32.484 12.963 52.208 22.092 52.208 39.529 0 9.61-3.894 17.784-11.262 23.637-7.423 5.897-17.919 9.145-29.555 9.145-36.629 0-65.68-27.637-66.047-27.99a8.999 8.999 0 0 0-13.433 1.008l-21.695 28.525a9 9 0 0 0 .465 11.459c1.109 1.236 25.001 27.325 68.698 36.841V436c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12v-34.218c17.605-4.721 32.759-13.618 44.422-26.223 14.563-15.739 22.583-36.44 22.583-58.291.001-23.706-9.425-42.527-28.815-57.536z"],
    "user": [512, 512, [], "f007", "M96 160C96 71.634 167.635 0 256 0s160 71.634 160 160-71.635 160-160 160S96 248.366 96 160zm304 192h-28.556c-71.006 42.713-159.912 42.695-230.888 0H112C50.144 352 0 402.144 0 464v24c0 13.255 10.745 24 24 24h464c13.255 0 24-10.745 24-24v-24c0-61.856-50.144-112-112-112z"],
    "user-alt": [448, 512, [], "f406", "M96 128C96 57.308 153.308 0 224 0s128 57.308 128 128-57.308 128-128 128S96 198.692 96 128zm256 160h-54.624c-45.669 20.945-99.331 21.749-146.752 0H96c-53.019 0-96 42.981-96 96v104c0 13.255 10.745 24 24 24h400c13.255 0 24-10.745 24-24V384c0-53.019-42.981-96-96-96z"],
    "user-circle": [512, 512, [], "f2bd", "M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zM144 208c0-61.856 50.144-112 112-112s112 50.144 112 112-50.144 112-112 112-112-50.144-112-112zm268.408 172.663c-80.346 100.411-232.375 100.53-312.817 0C117.003 362.973 141.218 352 168 352h18.204c44.03 21.336 95.495 21.368 139.592 0H344c26.782 0 50.997 10.973 68.408 28.663z"],
    "user-md": [448, 512, [], "f0f0", "M96 128C96 57.308 153.308 0 224 0s128 57.308 128 128-57.308 128-128 128S96 198.692 96 128zm256 160v33.61c36.471 7.433 64 39.756 64 78.39v49.441c0 11.44-8.075 21.29-19.293 23.534l-21.802 4.361c-6.499 1.3-12.821-2.915-14.12-9.414l-1.569-7.845c-1.3-6.499 2.915-12.821 9.414-14.12l15.37-3.074v-42.078c0-26.283-20.793-48.297-47.071-48.797C310.039 351.498 288 373.224 288 400v42.883l15.371 3.074c6.499 1.3 10.713 7.622 9.414 14.12l-1.569 7.845c-1.3 6.499-7.622 10.714-14.12 9.414l-21.802-4.361C264.075 470.732 256 460.882 256 449.441V400c0-38.634 27.529-70.957 64-78.39V288h-22.624c-45.669 20.945-99.331 21.749-146.752 0H128v66.025c28.495 7.361 49.359 33.906 47.931 64.977-1.506 32.778-28.097 59.392-60.874 60.926C78.383 481.644 48 452.303 48 416c0-29.767 20.427-54.852 48-61.975V288c-53.019 0-96 42.981-96 96v104c0 13.255 10.745 24 24 24h400c13.255 0 24-10.745 24-24V384c0-53.019-42.981-96-96-96zM80 416c0 17.645 14.355 32 32 32s32-14.355 32-32-14.355-32-32-32-32 14.355-32 32z"],
    "user-plus": [640, 512, [], "f234", "M616 332c0-6.627-5.373-12-12-12h-60v-60c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v60h-60c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h60v60c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12v-60h60c6.627 0 12-5.373 12-12v-40zM448 444v15c0 11.598-9.402 21-21 21H21c-11.598 0-21-9.402-21-21v-21c0-54.124 43.876-98 98-98h24.986c62.104 37.358 139.897 37.374 202.027 0H350a98.09 98.09 0 0 1 26 3.493V372c0 24.262 19.738 44 44 44h25.519c2.768 12.064 2.481 20.659 2.481 28zM84 172c0-77.32 62.68-140 140-140s140 62.68 140 140-62.68 140-140 140S84 249.32 84 172z"],
    "user-secret": [448, 512, [], "f21b", "M388.829 295.324l20.972-55.052c2.992-7.854-2.809-16.272-11.214-16.272H340.39c7.45-16.236 11.61-34.297 11.61-53.333 0-3.631-.16-7.224-.456-10.778C391.083 152.074 416 140.684 416 128c0-13.263-27.231-25.112-69.947-32.937-9.185-32.805-27.178-65.797-40.714-82.85-9.452-11.908-25.873-15.634-39.471-8.834l-27.557 13.779a31.997 31.997 0 0 1-28.622 0l-27.557-13.78c-13.599-6.799-30.02-3.074-39.471 8.834-13.536 17.053-31.529 50.045-40.714 82.85C59.231 102.888 32 114.737 32 128c0 12.684 24.917 24.074 64.456 31.889A129.362 129.362 0 0 0 96 170.667c0 19.037 4.159 37.098 11.608 53.333h-57.41c-8.615 0-14.423 8.809-11.029 16.727l22.906 53.447C25.799 307.882 0 342.925 0 384v104c0 13.255 10.745 24 24 24h400c13.255 0 24-10.745 24-24V384c0-39.97-24.43-74.231-59.171-88.676zM184 488l-48-192 48 24 24 40-24 128zm80 0l-24-128 24-40 48-24-48 192zm54.778-303.746c-.008.043-4.299 3.231-5.125 5.771-3.861 11.864-7.026 24.572-16.514 33.359-10.071 9.327-47.957 22.405-63.996-25.029-2.837-8.395-15.447-8.398-18.285 0-16.963 50.168-56.019 32.417-63.996 25.029-9.488-8.786-12.653-21.495-16.514-33.359-.826-2.54-5.118-5.728-5.125-5.771-.554-2.925-.981-5.884-1.22-8.85-.309-3.848 10.078-3.658 11.078-3.747 26.303-2.326 52.303-.579 78.023 5.497 2.563.606 11.553.529 13.793 0 25.72-6.076 51.72-7.824 78.023-5.497 1.002.089 11.387-.102 11.078 3.747-.239 2.966-.666 5.925-1.22 8.85z"],
    "user-times": [640, 512, [], "f235", "M599.681 411.397c4.686-4.686 4.686-12.284 0-16.971L557.255 352l42.426-42.426c4.686-4.686 4.686-12.284 0-16.971l-28.284-28.284c-4.686-4.686-12.284-4.686-16.971 0L512 306.745l-42.426-42.426c-4.686-4.686-12.284-4.686-16.971 0l-28.284 28.284c-4.686 4.686-4.686 12.284 0 16.971L466.745 352l-42.426 42.426c-4.686 4.686-4.686 12.284 0 16.971l28.284 28.284c4.686 4.686 12.284 4.686 16.971 0L512 397.255l42.426 42.426c4.686 4.686 12.284 4.686 16.971 0l28.284-28.284zM84 172c0-77.32 62.68-140 140-140s140 62.68 140 140-62.68 140-140 140S84 249.32 84 172zm359.737 299.645C439.904 476.712 433.843 480 427 480H21c-11.598 0-21-9.402-21-21v-21c0-54.124 43.876-98 98-98h24.986c62.104 37.358 139.897 37.374 202.027 0H350c23.366 0 44.818 8.183 61.658 21.832l-9.967 9.967c-17.156 17.156-17.156 45.07 0 62.225l28.284 28.284a43.946 43.946 0 0 0 13.762 9.337z"],
    "users": [640, 512, [], "f0c0", "M220 164c0-55.229 44.772-100 100-100s100 44.771 100 100-44.772 100-100 100-100-44.771-100-100zM48 208c0-44.183 35.817-80 80-80s80 35.817 80 80-35.817 80-80 80-80-35.817-80-80zm384 0c0-44.183 35.817-80 80-80s80 35.817 80 80-35.817 80-80 80-80-35.817-80-80zm-22 76c38.66 0 70 31.34 70 70v70c0 13.255-10.745 24-24 24H184c-13.255 0-24-10.745-24-24v-70c0-38.66 31.34-70 70-70h17.848c44.364 26.687 99.93 26.693 144.305 0H410m-282 70c0-11.975 2.081-23.472 5.889-34.156-21.93 1.152-44.122-4.121-63.611-15.844H56c-30.928 0-56 25.072-56 56v32c0 13.255 10.745 24 24 24h104v-62zm456-50h-14.278c-19.495 11.727-41.686 16.996-63.611 15.844A101.542 101.542 0 0 1 512 354v62h104c13.255 0 24-10.745 24-24v-32c0-30.928-25.072-56-56-56z"],
    "utensil-fork": [512, 512, [], "f2e3", "M469.5 119.4L356.3 232.6c-3.8 1.7-14.7-9.5-12.9-12.9 19.2-21.5 105.3-117.9 107.3-120.1 14.1-19.3-19.1-52.5-38.4-38.4-2.3 2-98.7 88.1-120.1 107.3-3.4 1.8-14.6-9.1-12.9-12.9L392.5 42.4c15.4-19.4-18.7-53-37.5-39.3-4.4 3.1-88.6 62.8-116.2 90.3-41.8 41.8-49.6 94.1-28.7 139.1L9 413.2c-11.6 10.5-12.1 28.5-1 39.5L59.3 504c11 11 29.1 10.5 39.5-1.1l180.5-201.2c45 20.9 97.2 13.3 139.1-28.7 27.6-27.6 87.3-111.8 90.4-116.2 13.7-18.7-19.9-52.7-39.3-37.4z"],
    "utensil-knife": [512, 512, [], "f2e4", "M424.9 8.7L20.8 412.8c-11.5 11.5-11.5 30.3 0 41.8l48.8 48.8c12.2 12.2 32.2 11.4 43.4-1.8l148.2-174.3C504.1 357 538.5 80.5 466.7 8.7c-11.6-11.6-30.3-11.6-41.8 0z"],
    "utensil-spoon": [512, 512, [], "f2e5", "M480.1 31.9c-55-55.1-164.9-34.5-227.8 28.5-49.3 49.3-55.1 110-28.8 160.4L9 413.2c-11.6 10.5-12.1 28.5-1 39.5L59.3 504c11 11 29.1 10.5 39.5-1.1l192.4-214.4c50.4 26.3 111.1 20.5 160.4-28.8 63-62.9 83.6-172.8 28.5-227.8z"],
    "utensils": [416, 512, [], "f2e7", "M207.9 15.2c.8 4.7 16.1 94.5 16.1 128.8 0 52.3-27.8 89.6-68.9 104.6L168 486.7c.7 13.7-10.2 25.3-24 25.3H80c-13.7 0-24.7-11.5-24-25.3l12.9-238.1C27.7 233.6 0 196.2 0 144 0 109.6 15.3 19.9 16.1 15.2 19.3-5.1 61.4-5.4 64 16.3v141.2c1.3 3.4 15.1 3.2 16 0 1.4-25.3 7.9-139.2 8-141.8 3.3-20.8 44.7-20.8 47.9 0 .2 2.7 6.6 116.5 8 141.8.9 3.2 14.8 3.4 16 0V16.3c2.6-21.6 44.8-21.4 48-1.1zm119.2 285.7l-15 185.1c-1.2 14 9.9 26 23.9 26h56c13.3 0 24-10.7 24-24V24c0-13.2-10.7-24-24-24-82.5 0-221.4 178.5-64.9 300.9z"],
    "utensils-alt": [576, 512, [], "f2e6", "M576 32.1C576 165.9 520 256 360 256c-7.9 9.3-189.4 223.2-208.7 245.9-12.4 13.2-33.2 13.5-46 .7l-32-32c-12.8-12.8-12.4-33.7.8-46.1l154.7-143.6c-26.6-30-14.4-16.3-41-46.3-35 20.7-74.2 18.1-108.5-16.2C57.7 196.7 6 123.7 3.2 119.8c-11.8-16.1 11.5-37.5 26.2-24.9l93.8 81.2c1.6 1.3 5.9-3 4.6-4.6L49.1 74.6C36.7 59.3 59.5 36.8 74.6 49.1l96.9 78.8c1.7 1.3 5.9-3.2 4.7-4.6L94.9 29.4c-12.7-14.7 8.8-37.9 24.8-26.2 3.9 2.8 76.9 54.5 98.6 76.2 33.3 33.3 37.6 72.2 16.1 108.4 30.4 26.9 19.6 17.4 48.4 42.9L522.2 8.6c20.5-19 53.8-4.4 53.8 23.5zM501.2 424L363.1 301.8l-56.6 66.8L424 501.2c12.2 13.8 33.6 14.4 46.6 1.4l32-32c13.1-13 12.4-34.3-1.4-46.6z"],
    "venus": [288, 512, [], "f221", "M288 176c0-79.5-64.5-144-144-144S0 96.5 0 176c0 68.5 47.9 125.9 112 140.4V368H76c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h36v36c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-36h36c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-36v-51.6c64.1-14.5 112-71.9 112-140.4zm-224 0c0-44.1 35.9-80 80-80s80 35.9 80 80-35.9 80-80 80-80-35.9-80-80z"],
    "venus-double": [512, 512, [], "f226", "M288 176c0-79.5-64.5-144-144-144S0 96.5 0 176c0 68.5 47.9 125.9 112 140.4V368H76c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h36v36c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-36h36c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-36v-51.6c64.1-14.5 112-71.9 112-140.4zm-224 0c0-44.1 35.9-80 80-80s80 35.9 80 80-35.9 80-80 80-80-35.9-80-80zm336 140.4V368h36c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-36v36c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-36h-36c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h36v-51.6c-21.2-4.8-40.6-14.3-57.2-27.3 14-16.7 25-36 32.1-57.1 14.5 14.8 34.7 24 57.1 24 44.1 0 80-35.9 80-80s-35.9-80-80-80c-22.3 0-42.6 9.2-57.1 24-7.1-21.1-18-40.4-32.1-57.1C303.4 43.6 334.3 32 368 32c79.5 0 144 64.5 144 144 0 68.5-47.9 125.9-112 140.4z"],
    "venus-mars": [576, 512, [], "f228", "M564 0h-79c-10.7 0-16 12.9-8.5 20.5l16.9 16.9-48.7 48.7C422.5 72.1 396.2 64 368 64c-33.7 0-64.6 11.6-89.2 30.9 14 16.7 25 36 32.1 57.1 14.5-14.8 34.7-24 57.1-24 44.1 0 80 35.9 80 80s-35.9 80-80 80c-22.3 0-42.6-9.2-57.1-24-7.1 21.1-18 40.4-32.1 57.1 24.5 19.4 55.5 30.9 89.2 30.9 79.5 0 144-64.5 144-144 0-28.2-8.1-54.5-22.1-76.7l48.7-48.7 16.9 16.9c2.4 2.4 5.4 3.5 8.4 3.5 6.2 0 12.1-4.8 12.1-12V12c0-6.6-5.4-12-12-12zM144 64C64.5 64 0 128.5 0 208c0 68.5 47.9 125.9 112 140.4V400H76c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h36v36c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-36h36c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-36v-51.6c64.1-14.6 112-71.9 112-140.4 0-79.5-64.5-144-144-144zm0 224c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"],
    "video": [576, 512, [], "f03d", "M528 64h-12.118a48 48 0 0 0-33.941 14.059L384 176v-64c0-26.51-21.49-48-48-48H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h288c26.51 0 48-21.49 48-48v-64l97.941 97.941A48 48 0 0 0 515.882 448H528c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48z"],
    "volume-down": [384, 512, [], "f027", "M256 88.017v335.964c0 21.438-25.943 31.998-40.971 16.971L126.059 352H24c-13.255 0-24-10.745-24-24V184c0-13.255 10.745-24 24-24h102.059l88.971-88.954c15.01-15.01 40.97-4.49 40.97 16.971zM384 256c0-33.717-17.186-64.35-45.972-81.944-15.079-9.214-34.775-4.463-43.992 10.616s-4.464 34.775 10.615 43.992C314.263 234.538 320 244.757 320 256a32.056 32.056 0 0 1-13.802 26.332c-14.524 10.069-18.136 30.006-8.067 44.53 10.07 14.525 30.008 18.136 44.53 8.067C368.546 316.983 384 287.478 384 256z"],
    "volume-mute": [640, 512, [], "f2e2", "M219.845 98.213l27.184-27.167C262.04 56.036 288 66.556 288 88.017v62.623l-68.155-52.427zm195.889 150.684c-2.233-30.88-18.956-58.492-45.706-74.842-13.987-8.547-31.941-5.071-41.824 7.51l87.53 67.332zM436.665 64.74C500.967 104.063 544 174.983 544 256a223.67 223.67 0 0 1-14.854 80.137l52.417 40.321C598.735 339.19 608 298.184 608 256c0-103.244-54.579-194.877-137.944-245.859-15.074-9.221-34.773-4.473-43.995 10.604-9.221 15.077-4.473 34.774 10.604 43.995zm-50.009 81.961C425.067 170.188 448 211.048 448 256c0 5.676-.39 11.301-1.128 16.849l55.604 42.772A191.69 191.69 0 0 0 512 256c0-68.547-36.15-129.777-91.957-163.901-15.076-9.22-34.774-4.471-43.994 10.607-9.22 15.078-4.471 34.775 10.607 43.995zM90.232 160H56c-13.255 0-24 10.745-24 24v144c0 13.255 10.745 24 24 24h102.059l88.97 88.951c15.028 15.028 40.971 4.467 40.971-16.97V312.129L90.232 160zm360.889 277.607c-1.205.871-2.403 1.75-3.627 2.599-14.522 10.072-18.129 30.01-8.057 44.532 10.076 14.528 30.016 18.125 44.531 8.057a289.026 289.026 0 0 0 19.578-14.861l-52.425-40.327zm-71.629-55.099c-1.263 7.875.389 16.229 5.294 23.3 6.216 8.96 16.185 13.765 26.322 13.765 4.387 0 8.8-.923 12.959-2.776l-44.575-34.289zm255.53 107.442c8.071-10.493 6.123-25.54-4.356-33.63L48.389 4.978c-10.506-8.082-25.574-6.116-33.656 4.39L4.978 22.05c-8.082 10.506-6.116 25.574 4.39 33.656l582.208 451.29c10.505 8.111 25.598 6.156 33.69-4.364l9.756-12.682z"],
    "volume-off": [256, 512, [], "f026", "M256 88.017v335.964c0 21.438-25.943 31.998-40.971 16.971L126.059 352H24c-13.255 0-24-10.745-24-24V184c0-13.255 10.745-24 24-24h102.059l88.971-88.954c15.01-15.01 40.97-4.49 40.97 16.971z"],
    "volume-up": [576, 512, [], "f028", "M256 88.017v335.964c0 21.438-25.943 31.998-40.971 16.971L126.059 352H24c-13.255 0-24-10.745-24-24V184c0-13.255 10.745-24 24-24h102.059l88.971-88.954c15.01-15.01 40.97-4.49 40.97 16.971zm182.056-77.876C422.982.92 403.283 5.668 394.061 20.745c-9.221 15.077-4.473 34.774 10.604 43.995C468.967 104.063 512 174.983 512 256c0 73.431-36.077 142.292-96.507 184.206-14.522 10.072-18.129 30.01-8.057 44.532 10.076 14.528 30.016 18.126 44.531 8.057C529.633 438.927 576 350.406 576 256c0-103.244-54.579-194.877-137.944-245.859zM480 256c0-68.547-36.15-129.777-91.957-163.901-15.076-9.22-34.774-4.471-43.994 10.607-9.22 15.078-4.471 34.774 10.607 43.994C393.067 170.188 416 211.048 416 256c0 41.964-20.62 81.319-55.158 105.276-14.521 10.073-18.128 30.01-8.056 44.532 6.216 8.96 16.185 13.765 26.322 13.765a31.862 31.862 0 0 0 18.21-5.709C449.091 377.953 480 318.938 480 256zm-96 0c0-33.717-17.186-64.35-45.972-81.944-15.079-9.214-34.775-4.463-43.992 10.616s-4.464 34.775 10.615 43.992C314.263 234.538 320 244.757 320 256a32.056 32.056 0 0 1-13.802 26.332c-14.524 10.069-18.136 30.006-8.067 44.53 10.07 14.525 30.008 18.136 44.53 8.067C368.546 316.983 384 287.478 384 256z"],
    "watch": [384, 512, [], "f2e1", "M192 80c97.2 0 176 78.8 176 176s-78.8 176-176 176S16 353.2 16 256 94.8 80 192 80m0-24c47.4 0 92.4 16.6 128 46.3V24c0-13.3-10.7-24-24-24H88C74.7 0 64 10.7 64 24v78.3C99.6 72.6 144.5 56 192 56zm0 400c-47.5 0-92.4-16.7-128-46.3V488c0 13.3 10.7 24 24 24h208c13.3 0 24-10.7 24-24v-78.3c-35.6 29.7-80.6 46.3-128 46.3zm53-130.3l18.8-25.9c3.9-5.4 2.7-12.9-2.6-16.8L220 253v-93c0-6.6-5.4-12-12-12h-32c-6.6 0-12 5.4-12 12v115.4c0 3.8 1.8 7.4 4.9 9.7l59.3 43.2c5.4 4 12.9 2.8 16.8-2.6z"],
    "wheelchair": [512, 512, [], "f193", "M496.101 385.669l14.227 28.663c3.929 7.915.697 17.516-7.218 21.445l-65.465 32.886c-16.049 7.967-35.556 1.194-43.189-15.055L331.679 320H192c-15.925 0-29.426-11.71-31.679-27.475C126.433 55.308 128.38 70.044 128 64c0-36.358 30.318-65.635 67.052-63.929 33.271 1.545 60.048 28.905 60.925 62.201.868 32.933-23.152 60.423-54.608 65.039l4.67 32.69H336c8.837 0 16 7.163 16 16v32c0 8.837-7.163 16-16 16H215.182l4.572 32H352a32 32 0 0 1 28.962 18.392L438.477 396.8l36.178-18.349c7.915-3.929 17.517-.697 21.446 7.218zM311.358 352h-24.506c-7.788 54.204-54.528 96-110.852 96-61.757 0-112-50.243-112-112 0-41.505 22.694-77.809 56.324-97.156-3.712-25.965-6.844-47.86-9.488-66.333C45.956 198.464 0 261.963 0 336c0 97.047 78.953 176 176 176 71.87 0 133.806-43.308 161.11-105.192L311.358 352z"],
    "wifi": [640, 512, [], "f1eb", "M384 416c0 35.346-28.654 64-64 64s-64-28.654-64-64c0-35.346 28.654-64 64-64s64 28.654 64 64zm136.659-124.443c6.465-6.465 6.245-17.065-.564-23.167-113.793-101.985-286.526-101.869-400.19 0-6.809 6.102-7.029 16.702-.564 23.167l34.006 34.006c5.927 5.927 15.464 6.32 21.769.796 82.88-72.609 207.074-72.447 289.768 0 6.305 5.524 15.842 5.132 21.769-.796l34.006-34.006zm112.11-113.718c6.385-6.385 6.254-16.816-.35-22.973-175.768-163.86-449.134-163.8-624.837 0-6.604 6.157-6.735 16.589-.35 22.973l33.966 33.966c6.095 6.095 15.891 6.231 22.224.383 144.763-133.668 368.356-133.702 513.156 0 6.333 5.848 16.129 5.712 22.224-.383l33.967-33.966z"],
    "window": [512, 512, [], "f40e", "M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-336 96c0 17.7-14.3 32-32 32s-32-14.3-32-32 14.3-32 32-32 32 14.3 32 32zm96 0c0 17.7-14.3 32-32 32s-32-14.3-32-32 14.3-32 32-32 32 14.3 32 32zm96 0c0 17.7-14.3 32-32 32s-32-14.3-32-32 14.3-32 32-32 32 14.3 32 32z"],
    "window-alt": [512, 512, [], "f40f", "M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM256 96c0 17.7-14.3 32-32 32s-32-14.3-32-32 14.3-32 32-32 32 14.3 32 32zm96 0c0 17.7-14.3 32-32 32s-32-14.3-32-32 14.3-32 32-32 32 14.3 32 32zm96 0c0 17.7-14.3 32-32 32s-32-14.3-32-32 14.3-32 32-32 32 14.3 32 32z"],
    "window-close": [512, 512, [], "f410", "M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-83.6 290.5c4.8 4.8 4.8 12.6 0 17.4l-40.5 40.5c-4.8 4.8-12.6 4.8-17.4 0L256 313.3l-66.5 67.1c-4.8 4.8-12.6 4.8-17.4 0l-40.5-40.5c-4.8-4.8-4.8-12.6 0-17.4l67.1-66.5-67.1-66.5c-4.8-4.8-4.8-12.6 0-17.4l40.5-40.5c4.8-4.8 12.6-4.8 17.4 0l66.5 67.1 66.5-67.1c4.8-4.8 12.6-4.8 17.4 0l40.5 40.5c4.8 4.8 4.8 12.6 0 17.4L313.3 256l67.1 66.5z"],
    "window-maximize": [512, 512, [], "f2d0", "M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-16 160H64v-84c0-6.6 5.4-12 12-12h360c6.6 0 12 5.4 12 12v84z"],
    "window-minimize": [512, 512, [], "f2d1", "M464 352H48c-26.5 0-48 21.5-48 48v32c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48v-32c0-26.5-21.5-48-48-48z"],
    "window-restore": [512, 512, [], "f2d2", "M512 48v288c0 26.5-21.5 48-48 48h-48V176c0-44.1-35.9-80-80-80H128V48c0-26.5 21.5-48 48-48h288c26.5 0 48 21.5 48 48zM384 176v288c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48h288c26.5 0 48 21.5 48 48zm-68 28c0-6.6-5.4-12-12-12H76c-6.6 0-12 5.4-12 12v52h252v-52z"],
    "won-sign": [576, 512, [], "f159", "M564 192c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-48.028l18.572-80.61c1.732-7.518-3.978-14.694-11.693-14.694h-46.107a11.998 11.998 0 0 0-11.736 9.5L450.73 128H340.839l-19.725-85.987a12 12 0 0 0-11.696-9.317H265.43a12 12 0 0 0-11.687 9.277L233.696 128H124.975L107.5 42.299a12 12 0 0 0-11.758-9.602H53.628c-7.686 0-13.39 7.124-11.709 14.624L60 128H12c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h62.342l7.171 32H12c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h83.856l40.927 182.624A12 12 0 0 0 148.492 480h56.767c5.583 0 10.428-3.85 11.689-9.288L259.335 288h55.086l42.386 182.712A12 12 0 0 0 368.496 480h56.826a12 12 0 0 0 11.694-9.306L479.108 288H564c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-70.146l7.373-32H564zm-425.976 0h80.757l-7.457 32h-66.776l-6.524-32zm45.796 150.029c-6.194 25.831-6.758 47.25-7.321 47.25h-1.126s-1.689-22.05-6.758-47.25L157.599 288h38.812l-12.591 54.029zM274.182 224l1.996-8.602c1.856-7.962 3.457-15.968 4.803-23.398h11.794c1.347 7.43 2.947 15.436 4.803 23.398l1.996 8.602h-25.392zm130.959 118.029c-5.068 25.2-6.758 47.25-6.758 47.25h-1.126c-.563 0-1.126-21.42-7.321-47.25L377.542 288h39.107l-11.508 54.029zM430.281 224h-67.42l-7.34-32h81.577l-6.817 32z"],
    "wrench": [512, 512, [], "f0ad", "M481.156 200c9.3 0 15.12 10.155 10.325 18.124C466.295 259.992 420.419 288 368 288c-79.222 0-143.501-63.974-143.997-143.079C223.505 65.469 288.548-.001 368.002 0c52.362.001 98.196 27.949 123.4 69.743C496.24 77.766 490.523 88 481.154 88H376l-40 56 40 56h105.156zm-171.649 93.003L109.255 493.255c-24.994 24.993-65.515 24.994-90.51 0-24.993-24.994-24.993-65.516 0-90.51L218.991 202.5c16.16 41.197 49.303 74.335 90.516 90.503zM104 432c0-13.255-10.745-24-24-24s-24 10.745-24 24 10.745 24 24 24 24-10.745 24-24z"],
    "yen-sign": [384, 512, [], "f157", "M351.208 32h-65.277a12 12 0 0 0-10.778 6.724l-55.39 113.163c-14.513 34.704-27.133 71.932-27.133 71.932h-1.262s-12.62-37.228-27.133-71.932l-55.39-113.163A11.997 11.997 0 0 0 98.068 32H32.792c-9.057 0-14.85 9.65-10.59 17.643L102.322 200H44c-6.627 0-12 5.373-12 12v32c0 6.627 5.373 12 12 12h88.162L152 293.228V320H44c-6.627 0-12 5.373-12 12v32c0 6.627 5.373 12 12 12h108v92c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12v-92h108c6.627 0 12-5.373 12-12v-32c0-6.627-5.373-12-12-12H232v-26.772L251.838 256H340c6.627 0 12-5.373 12-12v-32c0-6.627-5.373-12-12-12h-58.322l80.12-150.357C366.058 41.65 360.266 32 351.208 32z"]
  };

  var w = WINDOW || {};

  if (!w[NAMESPACE_IDENTIFIER]) w[NAMESPACE_IDENTIFIER] = {};
  if (!w[NAMESPACE_IDENTIFIER].packs) w[NAMESPACE_IDENTIFIER].packs = {};
  if (!w[NAMESPACE_IDENTIFIER].hooks) w[NAMESPACE_IDENTIFIER].hooks = {};
  if (!w[NAMESPACE_IDENTIFIER].shims) w[NAMESPACE_IDENTIFIER].shims = [];

  var namespace = w[NAMESPACE_IDENTIFIER];

  var babelHelpers = {};

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  babelHelpers;

  function define(prefix) {
    if (typeof namespace.hooks.addPack === 'function') {
      namespace.hooks.addPack(prefix, icons$1);
    } else {
      namespace.packs[prefix] = _extends({}, namespace.packs[prefix] || {}, icons$1);
    }
  }

  bunker(function () {
    define('fas');
    define('fa');
  });
})();

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./src/app.js");
module.exports = __webpack_require__("./src/styles/app.scss");


/***/ })

},[0]);
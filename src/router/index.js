import _ from "lodash";
import Vue from "vue";
import Router from "vue-router";

// Components
import Home from "../components/Home.vue";
import Post from "../components/Post/Post.vue";
import Page from "../components/Page/Page.vue";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      // Assuming you're using the default permalink structure for posts
      path: "/:year/:month/:day/:postSlug",
      name: "Post",
      component: Post
    },
    {
      path: "/:pageSlug",
      name: "Page",
      component: Page
    }
  ],
  mode: "history",
  base: "",

  // Prevents window from scrolling back to top
  // when navigating between components/views
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
});

router.afterEach((to, from) => {
  // Add a body class specific to the route we're viewing
  let body = document.querySelector("body");
  let bodyClasses = body.className.split(" ");

  if (bodyClasses.length > 0) {
    const newBodyClasses = bodyClasses.filter(theClass =>
      theClass.startsWith("vue--page--")
    );
  }

  const slug = _.isEmpty(to.params.postSlug)
    ? to.params.pageSlug
    : to.params.postSlug;
  body.classList.add("vue--page--" + slug);
});

export default router;

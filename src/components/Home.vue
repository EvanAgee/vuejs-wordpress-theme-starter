<template>
  <div class="page page--home">
    <a href="https://vuewordpress.com">
      <img
        src="https://res.cloudinary.com/evanagee/image/upload/c_scale,w_700/v1580244758/VueWP/VWP-hero.png"
      />
    </a>
    <h3>Welcome!</h3>
    <p>You'll probably want to remove all of this stuff, but hey it at least it works!</p>
    <p>
      ~
      <a href="https://evanagee.com/">Evan Agee</a>
    </p>

    <div class="recent-items">
      <recent-posts-widget limit="5">Recent Posts</recent-posts-widget>
      <pages-widget limit="5">Pages</pages-widget>
    </div>
  </div>
</template>

<script>
import RecentPostsWidget from "./widgets/RecentPosts.vue";
import PagesWidget from "./widgets/Pages.vue";

export default {
  components: {
    RecentPostsWidget,
    PagesWidget
  }
};
</script>

<style type="postcss">
.page--home {
  padding-top: 5vh;

  .recent-items {
    display: flex;
    width: 100%;

    & > * {
      min-width: 300px;
    }
  }
}
</style>

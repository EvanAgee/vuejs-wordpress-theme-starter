<template>
  <div>
    <h3>Welcome!</h3>
    <p>You'll probably want to remove all of this stuff, but hey it at least it works!</p>
    <p>
      ~
      <a href="https://evanagee.com/">Evan Agee</a>
    </p>

    <recent-posts-widget limit="5">Recent Posts</recent-posts-widget>
    <pages-widget limit="5">Pages</pages-widget>
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

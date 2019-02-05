<template>
  <div>
    <h3>Welcome!</h3>
    <p>You'll probably want to remove all of this stuff, but hey it at least gives you a preview of Bootstrap-Vue!</p>
    <p>I would encourage you to avoid using jQuery and instead find the Vue way of doing some things. You'll thank me later!</p>
    <p>
      ~
      <a href="http://evanagee.com/">Evan Agee</a>
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

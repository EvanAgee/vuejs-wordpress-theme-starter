<template>
  <div class="widget pages">
    <h3>
      <slot></slot>
    </h3>
    <ul v-if="allPagesLoaded">
      <li v-for="page in somePages(limit)" :key="page.id">
        <router-link :to="page.slug">{{ page.title.rendered }}</router-link>
      </li>
    </ul>
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: ["limit"],
  computed: {
    ...mapGetters({
      somePages: "somePages",
      allPagesLoaded: "allPagesLoaded"
    })
  },

  mounted() {}
};
</script>

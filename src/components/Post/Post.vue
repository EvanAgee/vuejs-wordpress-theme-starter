<template>
  <div class="bv-example-row pt-4">
    <template v-if="post">
      <h1>{{ post.title.rendered }}</h1>
      <div v-html="post.content.rendered"></div>
    </template>
    <Loader v-else/>
  </div>
</template>

<script>
import axios from "axios";
import Loader from "../partials/Loader.vue";
import { mapGetters } from "vuex";
import SETTINGS from "../../settings";

export default {
  data() {
    return {
      post: false
    };
  },

  computed: {},

  beforeMount() {
    this.getPost();
  },

  methods: {
    getPost: function() {
      axios
        .get(
          SETTINGS.API_BASE_PATH + "posts?slug=" + this.$route.params.postSlug
        )
        .then(response => {
          this.post = response.data[0];
        })
        .catch(e => {
          console.log(e);
        });
    }
  },

  components: {
    Loader
  }
};
</script>

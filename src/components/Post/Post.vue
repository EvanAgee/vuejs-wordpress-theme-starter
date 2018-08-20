<template>
  <b-container class="bv-example-row pt-4">
    <template v-if="post">
      <h1>{{ post.title.rendered }}</h1>
      <div v-html="post.content.rendered"></div>
    </template>
    <Loader v-else />
  </b-container>
</template>

<script>
import Loader from '../partials/Loader.vue';
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      post: false
    }
  },

  computed: {

  },

  beforeMount() {
    this.getPost()
  },

  methods: {
    getPost: function() {
      axios.get(window.SETTINGS.API_BASE_PATH + 'posts?slug=' + this.$route.params.postSlug)
      .then(response => {
        this.post = response.data[0];
      })
      .catch(e => {
        console.log(e);
      })
    }
  },

  components: {
    Loader
  }
}
</script>
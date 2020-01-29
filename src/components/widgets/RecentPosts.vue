<template>
  <div class="widget recent-posts">
    <h3>
      <slot></slot>
    </h3>
    <div v-if="recentPostsLoaded">
      <div v-for="post in recentPosts(limit)" :key="post.id">
        <router-link :to="post.slug" tag="div" class="max-w-sm w-full lg:max-w-full lg:flex">
          <div
            class="h-48 lg:h-auto lg:w-48 flex-none bg-cover bg-center rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
            style="background-image: url('https://res.cloudinary.com/evanagee/image/upload/c_scale,h_400/v1580267636/VueWP/Youtube-bg_00240.jpg')"
            title="Woman holding a mug"
          ></div>
          <div
            class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"
          >
            <div class="mb-8">
              <div class="text-gray-900 font-bold text-xl mb-2">{{ post.title.rendered }}</div>
              <p class="text-gray-700 text-base" v-html="post.excerpt.rendered"></p>
            </div>
            <div class="flex items-center">
              <img
                class="w-10 h-10 rounded-full mr-4"
                src="https://res.cloudinary.com/evanagee/image/upload/c_fit,w_50/v1551277265/evanagee.com/evan-2018.jpg"
                alt="Avatar of Jonathan Reinink"
              />
              <div class="text-sm">
                <p class="text-gray-600">{{ getAuthor(post) }}</p>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props: ['limit'],
  computed: {
    ...mapGetters({
      recentPosts: 'recentPosts',
      recentPostsLoaded: 'recentPostsLoaded',
    }),
  },

  methods: {
    getAuthor(post) {
      console.log(post);
    },
  },

  mounted() {
    this.$store.dispatch('getPosts', { limit: this.limit });
  },
};
</script>

<template>
  <div class="widget pages">
    <h3>
      <slot></slot>
    </h3>
    <ul v-if="allPagesLoaded">
      <li v-for="page in somePages(limit)" :key="page.id">
        <router-link :to="page.slug" tag="div" class="max-w-sm w-full lg:max-w-full lg:flex">
          <div
            class="h-48 lg:h-auto lg:w-48 flex-none bg-cover bg-center rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
            style="background-image: url('https://res.cloudinary.com/evanagee/image/upload/c_scale,h_400/v1580267636/VueWP/Youtube-bg_00240.jpg')"
            title="Woman holding a mug"
          ></div>
          <div
            class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"
          >
            <div class="mb-8">
              <div class="text-gray-900 font-bold text-xl mb-2">{{ page.title.rendered }}</div>
              <p class="text-gray-700 text-base" v-html="page.excerpt.rendered"></p>
            </div>
            <div class="flex items-center">
              <img
                class="w-10 h-10 rounded-full mr-4"
                src="https://res.cloudinary.com/evanagee/image/upload/c_fit,w_50/v1551277265/evanagee.com/evan-2018.jpg"
                alt="Avatar of Jonathan Reinink"
              />
              <div class="text-sm">
                <p class="text-gray-600">Aug 18</p>
              </div>
            </div>
          </div>
        </router-link>
      </li>
    </ul>
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props: ['limit'],
  computed: {
    ...mapGetters({
      somePages: 'somePages',
      allPagesLoaded: 'allPagesLoaded',
    }),
  },

  mounted() {},
};
</script>

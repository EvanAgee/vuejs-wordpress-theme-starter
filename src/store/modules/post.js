import api from "../../api";
import _ from "lodash";
import * as types from "../mutation-types";

const createPostSlug = post => {
  let slug = post.link.replace("http://" + window.location.hostname, "");
  slug = slug.replace("https://" + window.location.hostname, "");
  post.slug = slug;
  return post;
};

// initial state
const state = {
  recent: [],
  loaded: false
};

// getters
const getters = {
  recentPosts: state => limit => {
    if (
      !limit ||
      !_.isNumber(limit) ||
      _.isNull(limit) ||
      typeof limit == "undefined"
    ) {
      return state.recent;
    }
    let recent = state.recent;
    return recent.slice(0, limit);
  },

  recentPostsLoaded: state => state.loaded
};

// actions
const actions = {
  getPosts({ commit }, { limit }) {
    api.getPosts(limit, posts => {
      posts.map((post, i) => {
        posts[i] = createPostSlug(post);
      });

      commit(types.STORE_FETCHED_POSTS, { posts });
      commit(types.POSTS_LOADED, true);
      commit(types.INCREMENT_LOADING_PROGRESS);
    });
  }
};

// mutations
const mutations = {
  [types.STORE_FETCHED_POSTS](state, { posts }) {
    state.recent = posts;
  },

  [types.POSTS_LOADED](state, val) {
    state.loaded = val;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};

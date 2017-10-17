import api from '../../api'
import * as types from '../mutation-types'

// initial state
const state = {
  all: [],
  recent: [],
  loaded: false
}

// getters
const getters = {
  allPosts: state => state.all,
  allPostsLoaded: state => state.loaded
}

// actions
const actions = {
  getAllPosts ({ commit }) {
    api.getPosts(posts => {
      commit(types.STORE_FETCHED_POSTS, { posts })
      commit(types.POSTS_LOADED, true)
      commit(types.INCREMENT_LOADING_PROGRESS)
    })
  }
}

// mutations
const mutations = {
  [types.STORE_FETCHED_POSTS] (state, { posts }) {
    state.all = posts
  },

  [types.POSTS_LOADED] (state, val) {
    state.loaded = val
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

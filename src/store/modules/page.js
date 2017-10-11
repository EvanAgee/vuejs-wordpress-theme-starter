import api from '../../api'
import * as types from '../mutation-types'

// initial state
const state = {
  all: [],
  loaded: false,
  page: null
}

// getters
const getters = {
  allPagesLoaded: state => state.loaded,
  pageContent: state => (id) => {
    let page = state.all.filter(page => page.id === id)
    return !_.isNull(_.first(page).content.rendered) ? _.first(page).content.rendered : false
  }
}

// actions
const actions = {
  getAllPages ({ commit }) {
    api.getPages(pages => {
      commit(types.STORE_FETCHED_PAGES, { pages })
      commit(types.PAGES_LOADED, true)
      commit(types.INCREMENT_LOADING_PROGRESS)
    })
  }
}

// mutations
const mutations = {
  [types.STORE_FETCHED_PAGES] (state, { pages }) {
    state.all = pages
  },

  [types.PAGES_LOADED] (state, val) {
    state.loaded = val
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

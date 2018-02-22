import api from '../../api'
import * as types from '../mutation-types'

// initial state
const state = {
  all: [],
  loaded: false
}

// getters
const getters = {
  getSettings: state => state.all
}

// actions
const actions = {
  fetchSettings({ commit }) {
    if(state.loaded) {
      return state.all;
    }

    api.getSettings( settings => {
      commit(types.STORE_FETCHED_SETTINGS, { settings })
      commit(types.SETTINGS_LOADED, true)

      return settings;
    })
  }
}

// mutations
const mutations = {
  
  [types.STORE_FETCHED_SETTINGS] (state, { settings }) {
    state.all = settings;
  },

  [types.SETTINGS_LOADED] (state, val) {
    state.loaded = val
  }
  
}

export default {
  state,
  getters,
  actions,
  mutations
}

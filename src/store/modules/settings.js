import api from '../../api'
import * as types from '../mutation-types'

// initial state
const state = {
  all: [],
  loaded: false,
  test: 'abc'
}

// getters
const getters = {
  getSettings: state => state.all
}

// actions
const actions = {
  fetchSetting({ commit }, { name }) {
    if(state.all.name) {
      return state.all.name;
    }

    api.getSetting( name, setting => { 
      commit(types.STORE_FETCHED_SETTINGS, { setting })
      commit(types.SETTINGS_LOADED, true)

      return setting;
    })
  }
}

// mutations
const mutations = {
  
  [types.STORE_FETCHED_SETTINGS] (state, { wpSetting }) { 
    state.all.push(wpSetting);
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

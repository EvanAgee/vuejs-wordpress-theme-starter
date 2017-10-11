import api from '../../api'
import * as types from '../mutation-types'

// initial state
const state = {
  id: '',
  logged_in: false
}

// getters
const getters = {
  userId: state => state.id,
}

// actions
const actions = {
}

// mutations
const mutations = {
  [types.STORE_FETCHED_USER] (state, { uid }) {
    state.id = uid
  },

  [types.LOGIN_USER] (state) {
    state.logged_in = true
  },

  [types.LOGOUT_USER] (state) {
    state.logged_in = false
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

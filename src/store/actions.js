import * as types from './mutation-types'
import api from '../api'

export const loginUser = ({ commit }) => {
  auth.signInAnonymously().catch(function(error) {
    // Handle Errors here.
    return false
  })
}


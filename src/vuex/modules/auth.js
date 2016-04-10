import {
  LOGIN_SUCCESS,
  USERINFO_SUCCESS,
  USERINFO_FAILURE,
  LOGOUT_USER,
  UPDATE_USER_SUCCESS
} from '../types'
import {getCookie} from '../../utils/authService'
// import {saveCookie, getCookie, signOut} from '../../utils/authService'

const state = {
  csrftoken: getCookie('csrftoken') || null,
  user: null
}

const mutations = {
  [LOGIN_SUCCESS] (state, action) {
    state.csrftoken = action.csrftoken
  },
  [USERINFO_SUCCESS] (state, action) {
    state.user = action.user
  },
  [USERINFO_FAILURE] (state, action) {
    state.user = null
  },
  [LOGOUT_USER] (state, action) {
    state.csrftoken = getCookie('csrftoken') || null
    state.user = null
    state.csrftoken = null
  },
  [UPDATE_USER_SUCCESS] (state, action) {
    state.user = action.user
  }
}

export default {
  state,
  mutations
}

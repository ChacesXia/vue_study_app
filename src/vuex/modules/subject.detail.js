import {
  SUBJECT_DETAIL,
  ADD_SUBJECT_DETAIL,
  REQUEST_SUBJECT_DETAIL,
  GET_SUBJECT_DETAIL_FAILURE
} from '../types'

const state = {
  isFetching: false,
  isMore: true,
  items: []
}

const mutations = {
  [REQUEST_SUBJECT_DETAIL] (state) {
    state.isFetching = true
  },
  [SUBJECT_DETAIL] (state, action) {
    state.isFetching = false
    state.isMore = action.isMore
    state.items = action.subjectDetail
  },
  [GET_SUBJECT_DETAIL_FAILURE] (state) {
    state.isFetching = false
  },
  [ADD_SUBJECT_DETAIL] (state, action) {
    state.isFetching = false
    state.isMore = action.isMore
    state.items = [...state.items, ...action.subjectList]
  }
}

export default {
  state,
  mutations
}

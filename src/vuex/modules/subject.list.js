import {
  SUBJECT_LIST,
  ADD_SUBJECT_LIST,
  REQUEST_SUBJECT_LIST,
  GET_SUBJECT_LIST_FAILURE
} from '../types'

const state = {
  isFetching: false,
  isMore: true,
  items: []
}

const mutations = {
  [REQUEST_SUBJECT_LIST] (state) {
    state.isFetching = true
  },
  [SUBJECT_LIST] (state, action) {
    state.isFetching = false
    state.isMore = action.isMore
    state.items = action.subjectList
  },
  [GET_SUBJECT_LIST_FAILURE] (state) {
    state.isFetching = false
  },
  [ADD_SUBJECT_LIST] (state, action) {
    state.isFetching = false
    state.isMore = action.isMore
    state.items = [...state.items, ...action.subjectList]
  }
}

export default {
  state,
  mutations
}

import Vue from 'vue'
import Vuex from 'vuex'
import subjectList from './modules/subject.list'
import subjectDetail from './modules/subject.detail'
import auth from './modules/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    subjectList,
    subjectDetail,
    auth
  }
})

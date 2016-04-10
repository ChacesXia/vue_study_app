// import {SubjectResource} from './resources'
// import {UserResource, SubjectResource} from './resources'
import {UserResource, AuthResource, SubjectResource} from './resources'

export default {
  localLogin: function (data) {
    return AuthResource.save({id: 'login'}, data)
  },
  getMe: function () {
    return UserResource.get({id: 3})
  },
  // mdUser: function (data) {
  //   return UserResource.update({id:'mdUser'},data)
  // },
  // getTagList:function () {
  //   return TagResource.get({id: 'getFrontTagList'})
  // },
  // getApps:function () {
  //   return MobileResource.get({id: 'getApps'})
  // },
  // //article
  // getIndexImage:function () {
  //   return SubjectResource.get({id:'getIndexImage'})
  // },
  // xc
  getFrontSubjectList: function (options) {
    return SubjectResource.get({id: 'subject', ...options})
    // return SubjectResource.get()
  },
  getFrontSubjectDetail: function (options) {
    return SubjectResource.get({id: 'course', ...options})
  }
  // getFrontArticleCount:function () {
  //   return SubjectResource.get({id: 'getFrontArticleCount'})
  // },
  // getFrontArticle:function (id) {
  //   return SubjectResource.get({id: id, controller: 'getFrontArticle'})
  // },
  // toggleLike:function (id) {
  //   return SubjectResource.update({id:id,controller:'toggleLike'},{})
  // },
  // getPrenext:function (id,options) {
  //   return SubjectResource.get({id:id,controller: 'getPrenext', ...options})
  // }
}

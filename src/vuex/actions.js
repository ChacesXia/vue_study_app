import api from '../api'
import * as types from './types'
import {saveCookie} from '../utils/authService'
// import { saveCookie, getCookie, signOut } from '../utils/authService'

export const showMsg = ({dispatch}, content, type = 'error') => {
  dispatch(types.SHOW_MSG, {content: content, type: type})
}

// export const hideMsg = ({dispatch}) => {
//   dispatch(types.HIDE_MSG)
// }

// export const changeStyleMode = ({dispatch}) => {
//   dispatch(types.CHANGE_STYLE_MODE)
// }

// export const getCaptchaUrl = ({dispatch}) => {
//   dispatch(types.GET_CAPTCHAURL)
// }

// export const getIndexImage = ({dispatch}) => {
//   api.getIndexImage().then(response => {
//     if(!response.ok){
//       return dispatch(types.GET_INDEX_IMG, {indexImg: img})
//     }
//     dispatch(types.GET_INDEX_IMG, {indexImg: response.data.img})
//   }, response => {
//     dispatch(types.GET_INDEX_IMG, {indexImg: img})
//   })
// }

// export const logout = ({dispatch, router}) => {
//   signOut()
//   router.go({path:'/'})
//   dispatch(types.LOGOUT_USER)
// }

// export const getSnsLogins = ({ dispatch }) => {
//   api.getSnsLogins().then(response => {
//     if(!response.ok){
//       return dispatch(types.FAILURE_GET_SNSLOGINS)
//     }
//     dispatch(types.SUCCESS_GET_SNSLOGINS, response.data.data)
//   }, response => {
//     dispatch(types.FAILURE_GET_SNSLOGINS)
//   })
// }

export const localLogin = (store, userInfo) => {
  api.localLogin(userInfo).then(response => {
    if (!response.ok) {
      // getCaptchaUrl(store)
      console.log('登录失败')
      // return showMsg(store, response.data.error_msg || '登录失败')
    }
    const csrftoken = response.data.token
    saveCookie('csrftoken', csrftoken)
    getUserInfo(store)
    store.dispatch(types.LOGIN_SUCCESS, {csrftoken: csrftoken})
    showMsg(store, '登录成功,欢迎光临!', 'success')
    store.router.go({path: '/'})
  }, response => {
    // getCaptchaUrl(store)
    showMsg(store, response.data.error_msg || '登录失败')
  })
}
export const getUserInfo = ({ dispatch }) => {
  api.getMe().then(response => {
    if (!response.ok) {
      return dispatch(types.USERINFO_FAILURE)
    }
    dispatch(types.USERINFO_SUCCESS, { user: response.data })
  }, response => {
    dispatch(types.USERINFO_FAILURE)
  })
}

// export const updateUser = (store,userInfo) => {
//   api.mdUser(userInfo).then(response => {
//     if(!response.ok){
//       return showMsg(store,'更新用户资料失败!')
//     }
//     store.dispatch(types.UPDATE_USER_SUCCESS, { user: response.data.data })
//     showMsg(store,'更新资料成功!','success')
//   }, response => {
//     showMsg(store,'更新用户资料失败!')
//   })
// }

// export const getTagList = ({ dispatch }) => {
//   api.getTagList().then(response => {
//     if(!response.ok){
//       return dispatch(types.GET_TAG_LIST_FAILURE)
//     }
//     dispatch(types.GET_TAG_LIST_SUCCESS, { tagList: response.data.data })
//   }, response => {
//     dispatch(types.GET_TAG_LIST_FAILURE)
//   })
// }

// //更改options
// export const changeOptions = ({ dispatch },options) => {
//   dispatch(types.CHANGE_OPTIONS, { options: options })
// }
// getSubjectList
export const getSubjectList = ({ dispatch }, options, isAdd) => {
  dispatch(types.REQUEST_SUBJECT_LIST)
  api.getFrontSubjectList(options).then(response => {
    if (!response.ok) {
      return dispatch(types.GET_SUBJECT_LIST_FAILURE)
    }
    const json = response.data.results
    // const isMore = !(json.data.length < options.itemsPerPage)
    if (isAdd) {
      dispatch(types.ADD_SUBJECT_LIST, {
        subjectList: json
        // isMore: isMore
      })
    } else {
      dispatch(types.SUBJECT_LIST, {
        subjectList: json
        // isMore: isMore
      })
    }
  }, response => {
    console.log('返回失败')
    dispatch(types.GET_SUBJECT_LIST_FAILURE)
  })
}

export const getSubjectDetail = ({ dispatch }, id, user) => {
  api.getFrontSubjectDetail(id).then(response => {
    if (response.ok) {
      // let isLike = false
      let detail = response.data.results
      if (user) {
        user.likes.map(item => {
          if (item.toString() === detail._id) {
            // isLike = true
          }
        })
      }
      dispatch(types.SUBJECT_DETAIL, {
        subjectDetail: {
          ...detail
          // isLike: isLike
        }
      })
    }
  })
}
// //getPrenext
// export const getPrenext = ({ dispatch,state }, id) => {
//   api.getPrenext(id,state.options.item).then(response => {
//     if(response.ok){
//       dispatch(types.PRENEXT_ARTICLE, { prenextArticle: response.data.data })
//     }
//   })
// }

// //toggleLike
// export const toggleLike = ({ dispatch }, id) => {
//   api.toggleLike(id).then(response => {
//     const json = response.data
//     if(response.ok){
//       dispatch(types.TOGGLE_LIKE, {
//         like_count: json.count,
//         isLike: json.isLike
//       })
//     }
//   })
// }

// export const getCommentList = ({ dispatch },id) => {
//   api.getFrontCommentList(id).then(response => {
//     if(!response.ok){
//       return dispatch(types.GET_COMMENT_LIST_FAILURE)
//     }
//     dispatch(types.COMMENT_LIST, { commentList: response.data.data })
//   }, response => {
//     dispatch(types.GET_COMMENT_LIST_FAILURE)
//   })
// }

// //addComment
// export const addComment = (store,data) => {
//   api.addNewComment(data).then(response => {
//     if(!response.ok){
//       return showMsg(store,response.data.error_msg || '添加评论失败!')
//     }
//     showMsg(store,'添加评论成功!','success')
//     store.dispatch(types.SUCCESS_ADD_COMMENT, { comment: response.data.data })
//   }, response => {
//     showMsg(store,response.data.error_msg || '添加评论失败!')
//   })
// }

// export const addReply = (store,cid,data) => {
//   api.addNewReply(cid,data).then(response => {
//     if(!response.ok){
//       return showMsg(store,response.data.error_msg || '添加回复失败!')
//     }
//     showMsg(store,'添加回复成功!','success')
//     store.dispatch(types.SUCCESS_ADD_REPLY, { cid:cid,replys: response.data.data })
//   }, response => {
//     showMsg(store,response.data.error_msg || '添加回复失败!')
//   })
// }

// //getApps
// export const getApps = ({ dispatch }) => {
//   api.getApps().then(response => {
//     if(!response.ok){
//       return dispatch(types.FAILURE_GET_APPS)
//     }
//     dispatch(types.SUCCESS_GET_APPS, { apps: response.data.data })
//   }, response => {
//     dispatch(types.FAILURE_GET_APPS)
//   })
// }

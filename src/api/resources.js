import Vue from 'vue'
import VueResource from 'vue-resource'
import {API_ROOT} from '../config'
import { getCookie, signOut } from '../utils/authService'
// import { saveCookie, getCookie, signOut } from '../utils/authService'

Vue.use(VueResource)

// HTTP相关
Vue.http.options.crossOrigin = true
// Vue.http.options.xhr = {withCredentials: true}
// Vue.http.setRequestHeader('X-PINGOTHER', 'pingpong')
Vue.http.interceptors.push({
  request (request) {
    console.log(request)
    // 这里对请求体进行处理
    request.headers = request.headers || {}
    // request.headers['X-CSRFTOKEN'] = 'ffffffsdafd'
    // request.headers['Content-Type'] = 'text/xml'
    if (getCookie('sessionid')) {
      request.headers.sessionid = getCookie('sessionid').replace(/(^\")|(\"$)/g, '')
    }
    return request
  },
  response (response) {
    // 这里可以对响应的结果进行处理
    if (response.status === 401) {
      signOut()
      window.location.pathname = '/login'
    }
    return response
  }
})

export const UserResource = Vue.resource(API_ROOT + 'api/user{/id}')
export const AuthResource = Vue.resource(API_ROOT + 'auth{/id}')
export const SubjectResource = Vue.resource(API_ROOT + 'api/subject{/id}')

// export const TagResource = Vue.resource(API_ROOT + 'tags{/id}')
// export const CommentResource = Vue.resource(API_ROOT + 'comment{/id}{/controller}')
// export const MobileResource = Vue.resource(API_ROOT + 'mobile{/id}')

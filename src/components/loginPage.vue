<template>
  <div class="loginPage">
   <label>学号：</label><input placeholder="请输入学号" v-model = "username"></input>
   <label>密码：</label><input placeholder="请输入密码" v-model = "password"></input>
  </div>
   <button @click = "login">登陆</button>

</template>

<script>
import {localLogin} from '../vuex/actions'
export default {
  data () {
    return {
      user: {
        username: '113',
        password: 'admin113'
      }
    }
  },
  vuex: {
    getters: {
      logins: ({logins}) => logins.items,
      token: ({auth}) => auth.token
    },
    actions: {
      localLogin
    }
  },
  methods: {
    login: function () {
      this.localLogin(this.user)
    }
    // postForm: function () {
    //   console.log(this.$resource())
    //   this.$http.post('http://121.249.216.217/auth/login/?next=/', {'username': '113', 'password': 'admin113'}, {
    //     headers: {
    //       'crossOrigin': 'false',
    //       // 'Origin': 'http://http://121.249.216.217:80/',
    //       'X-CSRFTOKEN': this.getCookie()
    //     }
    //   }
    //     ).then(function (successResponse) {
    //       this.$set('response', successResponse)
    //     }, function (errorResponse) {
    //       this.$set('response', errorResponse)
    //     })
    // },
    // getCookie: function () {
    //   var cookieName = 'csrftoken'
    //   var cookieValue = null
    //   if (document.cookie && document.cookie !== '') {
    //     var cookies = document.cookie.split(';')
    //     for (var i = 0; i < cookies.length; i++) {
    //       var cookie = cookies[i].trim()
    //       if (cookie.substring(0, cookieName.length + 1).trim() === cookieName.trim() + '=') {
    //         cookieValue = cookie.substring(cookieName.length + 1, cookie.length)
    //         break
    //       }
    //     }
    //   }
    //   if (cookieValue !== '' && cookieValue !== null) {
    //     return cookieValue
    //   } else {
    //     return 'BQfx3tbQCf5nW1k2hKaJSy4OiNbya1mT'
    //   }
    // }
  },
  ready: function () {
    this.$dispatch('notify_route', 'loginPage')
  }
}
</script>


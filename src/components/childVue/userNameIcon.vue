<template>
  {{show}}
  <span id="login" class="icon icon-emoji pull-right" v-show="showLogin" v-link="{path:'/login'}">
  </span>

  <div id="usernameicon" v-show="showUsername" v-link="{path:'/stuInfo'">
    USERNAME{{routerStr}}
  </div>
</template>
<script type="text/javascript">
export default{
  ready: function () {
  },
  data () {
    return {
      login: 'LOGIN',
      user: 'username',
      showUsername: true,
      showLogin: true
    }
  },
  methods: {
    goLoginPage: function () {
      this.$route.router.go({
        path: '/login'
      })
    }
  },
  events: {
  },
  computed: {
    show: function () {
      var routerStr = this.$route.path
      if (routerStr === '/') {
        this.showUsername = false
        this.showLogin = true
      } else {
        this.showUsername = false
        this.showLogin = false
      }
    },
    username: function () {
      if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';')
        for (var i = 0; i < cookies.length; i++) {
          if (true) {
            return '具体的名字'
          } else {
            return 'Login'
          }
        }
      }
    }
  },
  watch: {
  }
}
</script>
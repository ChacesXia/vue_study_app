<template>
{{show}}
  <a href="#" class="icon icon-menu pull-left open-panel" data-panel='#panel-left-demo'></a>

  <div v-show="showBack" @click="goBack">
    goBack
  </div>
  <div v-show="showGoBackHome" @click="">
    goHome
  </div>
</template>
<script type="text/javascript">
export default{
  data () {
    return {
      showSideBar: true,
      showBack: false,
      showGoBackHome: false
    }
  },
  props: ['msg'],
  methods: {
    goBack: function () {
      window.history.go(-1)
    },
    changeStatus: function () {
      this.msg = !(this.msg)
    }
  },
  computed: {
    show: function () {
      var pattLogin = new RegExp('login')
      var pattEnroll = new RegExp('courseEnroll')
      var pattModulelist = new RegExp('moduleList')
      var pattContext = new RegExp('context')

      var routerStr = this.$route.path
      if (routerStr === '/') {
        this.showSideBar = true
        this.showBack = false
        this.showGoBackHome = false
      } else if (pattLogin.test(routerStr)) {
        this.showSideBar = false
        this.showBack = true
        this.showGoBackHome = false
      } else if (pattEnroll.test(routerStr)) {
        this.showSideBar = false
        this.showBack = true
      } else if (pattModulelist.test(routerStr)) {
        this.showSideBar = false
        this.showBack = false
        this.showGoBackHome = true
      } else if (pattContext.test(routerStr)) {
        this.showSideBar = false
        this.showBack = true
        this.showGoBackHome = false
      }
    }
  }
}
</script>
<template>
{{title2}}
  <h1 class="title" v-show="showComponent">{{title}}</h1>
</template>
<script type="text/javascript">
export default{
  data () {
    return {
      title: '主页',
      showComponent: true
    }
  },
  // props: ['send'],
  computed: {
    'title2': function () {
      var routerStr = this.$route.path
      var pattLogin = new RegExp('login')
      var pattEnroll = new RegExp('courseEnroll')
      var pattModulelist = new RegExp('moduleList')
      var pattContext = new RegExp('context')

      if (routerStr === '/') {
        this.title = '主页'
      } else if (pattLogin.test(routerStr)) {
        this.title = '登陆'
      } else if (pattEnroll.test(routerStr)) {
        this.title = '选课'
      } else if (pattModulelist.test(routerStr)) {
        this.title = '列表'
      } else if (pattContext.test(routerStr)) {
        this.title = '内容'
      }
    }
  },
  events: {
    headerBroadcast: function (paras) {
      this.msg = paras
      return true
      // console.log(paras)
    }
  },
  methods: {
    // 测试数据传递
    print: function () {
      console.log(this.send)
      console.log(this.$route.path)
    }
  }
}
</script>
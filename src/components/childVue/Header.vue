<template>
	<div class="bar bar-nav">
		<icon></icon>
    <user></user>
		<title></title>
	</div>
</template>

<style>
  #header{
  	position: relative;
  }
</style>

<script>
import icon from './sideIcon'
import title from './hTitle'
import user from './userNameIcon'
import subjectList from './subjectList'

export default {
  data () {
    return {
      sideShow: false,
      routeStr: this.$route.path,
      msg: {}
    }
  },
  methods: {
    changeStatus: function () {
      console.log(this.sideShow)
      this.sideShow = !(this.sideShow)
    },
    print: function () {
      console.log(this.msg)
    }
  },
  computed: {
  },
  // watch: {
  //   $route: function () {
  //     // console.log(this.routeStr)
  //     this.currentLoad()
  //   }
  // },
  events: {
    // 接受来自APP的广播事件通知
    // headerDispatch: function (paras) {
    //   this.msg = paras
    //   console.log(paras)
    // return true
    // }
  },
  components: {
    icon,
    title,
    user,
    subjectList
  }
}
</script>
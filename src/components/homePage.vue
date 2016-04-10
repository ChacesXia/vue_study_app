<template>
  <div class="homePage">
    <subject-detail></subject-detail>
  </div>
</template>

<script>
import mySwipe from './childVue/mySwipe'
import subjectDetail from './childVue/subjectDetail'
import subjectList from './childVue/subjectList'
export default {
  data () {
    return {
      courseTitle: '',
      courseList: [],
      subjectUrl: '',
      parameters: {
        componentName: '这是homePage组件',
        viaData: {
          via1: ''
        }
      }
    }
  },
  // props: ['send'],
  components: {
    mySwipe,
    subjectDetail,
    subjectList
  },
  events: {
    // 接受来自router组件的通知
    // routerBroadcast: function (msg) {
    //   this.subjectUrl = msg
    //   return true
    // }
  },
  ready: function () {
    this.$dispatch('notify', 'homePage')
  },
  methods: {
    print: function () {
      console.log(this.$route.path)
      console.log(this.send.viaData.via1)
    }
  }
}
</script>
<style>
  .homePage{
    /*border: solid 1px red;*/
  }
</style>
<template>
  <div class="page">
    <!-- header部分 -->
    <header-bar></header-bar>
    <!-- 主内容区 -->
    <div class="router-view">
      <router-view></router-view>
    </div>
  </div>
  <div class="panel-overlay"></div>
  <!-- 侧边栏 -->
  <subject-list></subject-list>
</template>

<script>
  import headerBar from './components/childVue/Header'
  import subjectList from './components/childVue/subjectList'
  // import stuinfo from './components/stuinfoPage'
  import store from './vuex/store'
  export default{
    store,
    components: {
      headerBar,
      subjectList
      // stuinfo
    },
    data () {
      return {
        parameters: {
          componentName: '',
          viaData: {
            via1: ''
          }
        }
      }
    },
    events: {
      // 接受来自router组件的事件通知
      routerDispatch: function (paras) {
        this.parameters = paras
        this.$broadcast('headerBroadcast', this.parameters)
      },
      // 接受来自header组件的事件通知
      headerDispatch: function (paras) {
        this.parameters = paras
        // 向router广播
        this.$broadcast('routerBroadcast', this.parameters)
        console.log(paras)
      }
    },
    computed: {
      // 观察parameters的变化进行broadcast
    }
  }
</script>
<style>
  .v-link-active{
    color:red;
  }
  .page{
    display: inline-block;
  }
  .list-block ul ul{
    padding-left: 0;
  }
  .router-view{
    margin-top:70px;
  }
</style>


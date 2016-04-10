<template>
  <div class="moduleListPage list-block">
    <ul>
      <li class="item-content" v-for = 'module in moduleGet' v-link = "'../context/' + courseGetId + '/' + module.id">
        <div class="item-inner">
          <div class="item-title">{{module.title}}</div>
          <div class="item-after icon icon-emoji"></div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '这是moduleListPage组件！',
      getCoursePath: 'http://121.249.216.217/api/subject/course/' + this.$route.params.courseNumber + '/',
      courseGetId: '',
      moduleGet: []
    }
  },
  ready: function () {
    // 读取localStorage,如果有courseListObj就直接从本地获取
    // 若没有，则从服务器get并且存入Localstorage
    var storage = window.localStorage
    if (storage.courseListObj) {
      var courseList = JSON.parse(storage.courseListObj)
      var courseLen = courseList.length
      var courseId = parseInt(this.$route.params.courseNumber)
      for (var i = 0; i < courseLen; i++) {
        if (courseList[i].id === courseId) {
          this.moduleGet = courseList[i].modules
        }
      }
    } else {
      this.$http.get(this.getCoursePath, function (data) {
        this.moduleGet = data.modules
      })
    }
    this.courseGetId = this.$route.params.courseNumber
    // 向app.vue派发事件
    this.$dispatch('notify_route', 'moduleListPage')
  }
}
</script>

<style>
    .moduleListPage {
        /*border: solid 1px #000000;*/
    }
</style>


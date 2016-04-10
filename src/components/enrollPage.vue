<template>
  <div class="mySwipe">
    <img src="../assets/logo.png">
    <p >{{courseGet.id}}---{{courseGet.title}}</p>
    <p>课程简介：{{courseGet.overview}}</p>
    <button @click="handleControl(courseGet.id)">选课</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      item: this.$route.params.courseNumber,
      routePath: '../moduleList/' + this.$route.params.courseNumber,
      getCoursePath: 'http://121.249.216.217/api/subject/course/' + this.$route.params.courseNumber,
      courseGet: {}
    }
  },
  ready: function () {
    // 读取localStorage,如果有courseListObj就直接从本地获取
    // 若没有，则从服务器get
    var storage = window.localStorage
    if (storage.courseListObj) {
      var courseList = JSON.parse(storage.courseListObj)
      var courseLen = courseList.length
      var courseId = parseInt(this.$route.params.courseNumber)
      for (var i = 0; i < courseLen; i++) {
        if (courseList[i].id === courseId) {
          this.courseGet = courseList[i]
        }
      }
    } else {
      this.$http.get(this.getCoursePath, function (data) {
        this.courseGet = data
      })
    }
    // 向App派发事件
    this.$dispatch('notify_route', 'enrollPage')
  },
  methods: {
    // 判断用户是否登陆,操作控制函数
    handleControl: function (courseNumber) {
      var router = this.$route.router
      if (this.isCookie('sessionid')) {
        window.$.alert('选课成功', function () {
          router.go({path: '/moduleList/' + courseNumber})
        })
      } else {
        window.$.confirm('你还没登陆，是否现在去登陆？',
          function () {
            router.go({path: '/login'})
          })
      }
    },
    isCookie: function (name) {
      var cookies = document.cookie.split(';')
      for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].split('=')
        if (name === cookie[0]) {
          return true
        } else {
          return false
        }
      }
    }
  }
}
</script>
<style>
  .mySwipe{
    border: solid 1px red;
  }
</style>
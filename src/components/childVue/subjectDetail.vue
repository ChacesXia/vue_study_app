<template>
  <div class="subjectDetail content infinite-scroll infinite-scroll-bottom" data-distance="50">
    <div class="card courseItem confirm-title-ok-cancel item-content" v-for="courseItem in itemList" v-show="parameters.viaData.via1==courseItem.subject || parameters.viaData.via1==''" @click="handleControl(courseItem.id)">
      <div class="card-content">
        <div class="list-block media-list">
          <ul>
            <li class="item-content">
              <div class="item-media">
                <img src="../../assets/logo.png" width="44"></div>
              <div class="item-inner">
                <div class="item-title-row">
                  <div class="item-title">{{courseItem.title}}{{courseItem.id}}</div>
                </div>
                <div class="item-subtitle">{{courseItem.overview}}</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="card-footer">
        <span>老师{{teacher}}</span>
        <span>时间{{time}}</span>
      </div>
    </div>
    <!-- 加载提示符 -->  
    <div class="infinite-scroll-preloader">
      <div class="preloader"></div>
    </div>
  </div>
</template>
<script>
import { getSubjectDetail } from '../../vuex/actions'
export default {
  ready: function () {
    // 读取localStorage,如果有courseListObj就直接从本地获取
    // 若没有，则从服务器get并且存入Localstorage
    // var storage = window.localStorage
    // if (storage.courseListObj) {
    //   this.itemList = JSON.parse(storage.courseListObj)
    // } else {
    //   this.$http.get('http://121.249.216.217/api/subject/course/', function (data) {
    //     this.itemList = data.results
    //     // 将course列表存入本地，通过Localstorage
    //     storage.courseListObj = JSON.stringify(data.results)
    //   })
    // }
    // 下拉刷新事件
    this.pre()
  },
  data () {
    return {
      // itemList: [],
      parameters: {
        componentName: '这里是subjectDetail的简介byxc ！',
        viaData: {
          via1: ''
        }
      }
    }
  },
  vuex: {
    getters: {
      itemList: ({subjectDetail}) => subjectDetail.items
    },
    actions: {
      getSubjectDetail
    }
  },
  created () {
    this.getSubjectDetail()
  },
  computed: {
    equals: function () {
      if (true) {
        return true
      }
    },
    results: function () {
      return window.localStorage.data
    }
  },
  events: {
    routerBroadcast: function (msg) {
      this.parameters = msg
      console.log(msg.viaData.via1)
    }
    // infinite: function () {
    //   console.log('events')
    //   this.pre()
    // }
  },
  methods: {
    print: function () {
      console.log(window.localStorage.data)
      // console.log(this.send.viaData.via1
    },
    addItems: function (number, lastIndex) {
      // 生成新条目的HTML
      var html = ''
      for (var i = lastIndex + 1; i <= lastIndex + number; i++) {
        html += '<li class="item-content"><div class="item-inner"><div class="item-title">Item ' + i + '</div></div></li>'
      }
      // 添加新条目
      window.$('.infinite-scroll-bottom .list-container').append(html)
    },
    pre: function () {
      // 加载flag
      console.log(window.$)
      var loading = false
      // 最多可加载的条目
      var maxItems = 100
      // 每次加载添加多少条目
      var itemsPerLoad = 20
      // 预先加载20条,因为不能用this访问，所以重新给函数赋值临时变量
      var tempAdd = this.addItems
      tempAdd(itemsPerLoad, 0)
      // 上次加载的序号
      var lastIndex = 20
      window.$(document).on('infinite', '.infinite-scroll-bottom', function () {
        // 如果正在加载，则退出
        console.log('执行了下拉刷新')
        if (loading) {
          return
        }
        // 设置flag
        loading = true
        // 模拟1s的加载过程
        setTimeout(function () {
        // 重置加载flag
          loading = false
          if (lastIndex >= maxItems) {
            // 加载完毕，则注销无限加载事件，以防不必要的加载
            window.$.detachInfiniteScroll(window.$('.infinite-scroll'))
            // 删除加载提示符
            window.$('.infinite-scroll-preloader').remove()
            return
          }
          // 添加新条目
          tempAdd(itemsPerLoad, lastIndex)
          // 更新最后加载的序号
          lastIndex = window.$('.list-container li').length
          // 容器发生改变,如果是js滚动，需要刷新滚动
          window.$.refreshScroller()
        }, 1000)
      })
    },
    // 用户点击跳转位置控制,使用isUserCourse和getLocalStorage函数
    handleControl: function (courseNumber) {
      var router = this.$route.router
      if (this.isUserCourse(courseNumber)) {
        router.go({path: '/moduleList/' + courseNumber})
      } else {
        router.go({path: '/courseEnroll/' + courseNumber})
      }
    },
    // 判断一门课程是不是用户所选课程
    isUserCourse: function (courseid) {
      var userCourse = this.getLocalStorage('userCourse')
      for (var i = userCourse.length - 1; i >= 0; i--) {
        if (userCourse[i].id === courseid) {
          return true
        } else {
          return false
        }
      }
    },
    // 获取一个localStorage中一个固定value
    getLocalStorage: function (name) {
      var storages = window.localStorage
      if (storages.name) {
        return JSON.parse(storages.name)
      }
    }
  }
}
</script>

<style type="text/css">
    .subjectDetail{
      padding: 5px;
      top: 50px;
    }
    .subjectDetail .media img{
      width:50px;
    }
    /*.subjectDetail .media .media-body{
      position:relative;
      width: 100%;
    }*/
    /*超长度省略号,不支持ff*/
    .text-ellipsis{display:block;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;width:100%;}
</style>

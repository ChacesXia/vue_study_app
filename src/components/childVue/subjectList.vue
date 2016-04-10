<template>
  <div id='panel-left-demo' class="panel panel-left panel-reveal">
    <ul class="list-block">
      <li class="item-content" @click = "getMsg('')">全部课程</li>
      <li class="item-content" v-for = 'subject in subjectList' @click = "getMsg(subject.url)">{{subject.title}}</li>
      <li class="button button-fill close-panel" @click="print()">关闭</li>
    </ul>
  </div>
</template>

<script>
import { getSubjectList } from '../../vuex/actions'
export default {
  data () {
    return {
      // subjectList: [],
      parameters: {
        componentName: 'subjectList',
        viaData: {
          via1: 'this is subjectlist'
        }
      }
    }
  },
  ready: function () {
    // 读取localStorage,如果有subjectListObj就直接从本地获取
    // 若没有，则从服务器get并且存入Localstorage
    // var storage = window.localStorage
    // if (storage.subjectListObj) {
    //   this.subjectList = JSON.parse(storage.subjectListObj)
    // } else {
    //   this.$http.get('http://121.249.216.217/api/subject/subject/', function (data) {
    //     this.subjectList = data.results
    //     // 将subject列表存入本地，通过Localstorage
    //     storage.subjectListObj = JSON.stringify(data.results)
    //   })
    // }
  },
  vuex: {
    getters: {
      options: ({options}) => options.item,
      subjectList: ({subjectList}) => subjectList.items
    },
    actions: {
      getSubjectList
    }
  },
  created () {
    this.getSubjectList(this.options, true)
  },
  methods: {
    getMsg: function (url) {
      this.parameters.viaData.via1 = url
      this.dispatch(this.parameters)
    },
    dispatch: function (paras) {
      this.msg = this.parameters
      this.$dispatch('headerDispatch', paras)
      // console.log(this.parameters.viaData.via1)
    },
    print: function () {
      console.log(window.$)
    }
  },
  events: {
    // headerBroadcast: function (paras) {
    //   console.log(paras)
    // }
  }
}
</script>

<style type="text/css">
    .subjectList{
        border: solid 1px #000000;
    }
</style>
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import { sync } from 'vuex-router-sync'
import store from './vuex/store'
import App from './App'
import configRouter from './router'

Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter({
  hashbang: false
})
// 加载路由配置项
configRouter(router)
// 路由启动
sync(store, router)

router.start(App, '#app')
// 全局路由
window.router = router

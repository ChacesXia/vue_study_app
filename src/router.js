export default function (router) {
  router.map({
    // 登陆界面
    '/login': {
      name: 'login',
      component: require('./components/loginPage.vue')
    },
    // 注册页面
    '/courseEnroll/:courseNumber': {
      name: 'courseEnroll',
      component: require('./components/enrollPage.vue')
    },
    // 课程详细信息页面
    '/courseInfo/:courseNumber': {
      name: 'courseInfo',
      component: require('./components/contextPage.vue')
    },
    // 学生个人中心
    '/stuInfo/:stuNumber': {
      name: 'stuInfo',
      component: require('./components/stuInfoPage.vue')
    },
    // 某课程某单元的内容页面
    '/context/:courseNumber/:moduleNumber': {
      name: 'context',
      component: require('./components/contextPage.vue')
    },
    // 首页（除去header）
    'homePage/:stuNumber': {
      name: 'homePage',
      component: require('./components/homePage.vue')
    },
    // 单元列表页面
    '/moduleList/:courseNumber': {
      name: 'moduleList',
      component: require('./components/moduleListPage.vue')
    },
    '*': {
      component: require('./components/homePage.vue')
    }
  })
}

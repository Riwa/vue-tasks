import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Hidden from '@/components/Hidden'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/hidden',
      name: 'Hidden',
      component: Hidden
    }
  ]
})

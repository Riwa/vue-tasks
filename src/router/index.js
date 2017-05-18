import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Hidden from '@/components/Hidden/Hidden'
import Urgent from '@/components/Urgent/Urgent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/invisible',
      name: 'Hidden',
      component: Hidden
    },
    {
      path: '/critique',
      name: 'Urgent',
      component: Urgent
    }
  ]
})

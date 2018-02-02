import Vue from 'vue'
import Router from 'vue-router'
import Calculating from '@/components/Calculating'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Calculating',
      component: Calculating
    }
  ]
})

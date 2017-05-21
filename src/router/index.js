import Vue from 'vue'
import Router from 'vue-router'
import Catalog from '@/components/Catalog'
import Thread from '@/components/Thread'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/:board/',
      name: 'catalog',
      component: Catalog
    },
    {
      path: '/thread/:board/:id/',
      name: 'thread',
      component: Thread
    }
  ]
})

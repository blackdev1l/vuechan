import Vue from 'vue'
import Router from 'vue-router'
import Catalog from '@/components/Catalog'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/:board',
      name: 'Catalog',
      component: Catalog
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Admin from './views/Admin.vue'
import oneProduct from './views/oneProduct.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
    },
    {
      path: '/admin/:id',
      name: 'detail',
      component: oneProduct
    },
  ]
})

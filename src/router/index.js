import Vue from 'vue'
import Router from 'vue-router'

import Msite from '../pages/Msite/Msite'
import Order from '../pages/Order/Order'
import Search from '../pages/Search/Search'
import Profile from '../pages/Profile/Profile'
import Login from '../pages/Login/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/msite',
      meta:{
        showFooter: true
      },
      component: Msite
    },
    {
      path: '/order',
      meta:{
        showFooter: true
      },
      component: Order
    },
    {
      path: '/search',
      meta:{
        showFooter: true
      },
      component: Search
    },
    {
      path: '/profile',
      meta:{
        showFooter: true
      },
      component: Profile
    },
   {
      path: '/login',
      component: Login
    },
    //重定向路由
    {
      path: '/',
      redirect: '/msite'
    }
  ]
})

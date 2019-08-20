import Vue from 'vue'
import Router from 'vue-router'

import GoodsList from '@/views/goodsList'
import Cart from '@/views/cart'
import Site from '@/views/site'
import Address from '@/views/address'
import OrderConfirm from '@/views/orderConfirm'
import OrderSuccess from '@/views/orderSuccess'
import login from '@/views/login'
import signIn from '@/views/signIn'
import fuzujian from '@/views/fuzujian'

import store from '../vuex/index'

Vue.use(Router)
let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'defaultGoodsList',
      component: GoodsList
    },
    {
      path: '/goodsList',
      name: 'goodsList',
      component: GoodsList
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/signIn',
      name: 'signIn',
      component: signIn,
      meth: {
        title: '注册'
      }
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/site',
      name: 'site',
      component: Site
    },
    {
      path: '/address',
      name: 'address',
      component: Address
    },
    {
      path: '/orderConfirm',
      name: 'orderConfirm',
      component: OrderConfirm
    },
    {
      path: '/orderSuccess',
      name: 'orderSuccess',
      component: OrderSuccess
    },
    {
      path: '/fuzujian',
      name: 'fuzujian',
      component: fuzujian
    }
  ]
})

router.beforeEach((to, from, next) => {
  let cookies = document.cookie
  if (cookies) {
    let cookiesArr = cookies.split(';')
    let userName = ''
    cookiesArr.forEach(item => {
      if (item.indexOf('userName=') > -1) {
        userName = item.trim().substr(9)
        store.commit('setUserName', userName)
      }
    })
  }
  next()
})
export default router

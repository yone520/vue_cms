import Vue from 'vue'
import Router from 'vue-router'

import App from '../App'

const LAYOUT = r => require.ensure([], () => r(require('../views/layout/')), 'layout');
const home = r => require.ensure([], () => r(require('../views/home/')), 'home');
const user = r => require.ensure([], () => r(require('../views/user/')), 'user');
const money = r => require.ensure([], () => r(require('../views/money/')), 'money');
const notfound = r => require.ensure([], () => r(require('../views/notFound/')), 'notfound');
const login = r => require.ensure([], () => r(require('../views/login/')), 'login');
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'layout',
      component: LAYOUT,
      children: [
        {
          path: '/user',
          name: 'user',
          component: user
        }, {
          path: '/money',
          name: 'money',
          component: money
        }, {
          path: '/home',
          name: 'home',
          component: home
        }
      ]
    }, {
      path: '/login',
      name: 'login',
      component: login
    }, {
      path: '*',
      component: notfound
    }
  ]
})

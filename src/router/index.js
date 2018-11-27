import Vue from 'vue'
import Router from 'vue-router'

import App from '../App'

const home = r => require.ensure([], () => r(require('../views/home/')), 'home');
const user = r => require.ensure([], () => r(require('../views/user/')), 'user');
const money = r => require.ensure([], () => r(require('../views/money/')), 'money');

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: '/home'
    }, {
      path: '/home',
      component: home
    }, {
      path: '/user',
      component: user
    }, {
      path: '/money',
      component: money
    }
  ]
})

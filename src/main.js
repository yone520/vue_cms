// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import cookie from 'js-cookie';
import auth from './utils/auth'

Vue.config.productionTip = false;
Vue.use(ElementUi);

// 注册全局守卫
router.beforeEach((to, from, next) => {
  // to即将进入的路由对象
  if (to.name !== 'login') {
    if (cookie.get(auth.cookieText)) {
      next();
    } else {
      next({
        path: '/login'
      })
    }
  } else {
    if (cookie.get(auth.cookieText)) {
      next({
        path: from.fullPath
      })
    } else {
      next();
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

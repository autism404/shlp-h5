import '@babel/polyfill';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'lib-flexible';
import vant from 'vant';
import mixins from './mixins/global';


import './components';

Vue.config.productionTip = false;

Vue.use(vant);
Vue.mixin(mixins);

// router.beforeEach((to, from, next) => {
//   const token = localStorage.getItem('token');
//   if (to.path !== '/login' && !token) {
//     return next('/login');
//   } else if (to.path === '/login' && token) {
//     return next('/home');
//   } else {
//     next();
//   }
// });

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

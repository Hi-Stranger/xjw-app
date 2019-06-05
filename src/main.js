// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import Vant from 'vant';
import {Toast, Dialog, Loading} from 'vant';
import myComponts from './base';
import 'vant/lib/index.css';
import '../static/css/index.less';
import store from './store';
import MinXin from './components/mixins.js';

Vue.mixin(MinXin);
Vue.use(Dialog);
Vue.use(Vant);
Vue.use(myComponts);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
});

(function () {
  var setFont = function () {
    var calc_window_width = window.innerWidth > 750 ? 750 : window.innerWidth;
    document.documentElement.style.fontSize = calc_window_width / 3.75 + 'px'
  };
  setFont();
  window.onresize = function () {
    setFont();
  };
})();
router.beforeEach((to, from, next) => {
  if (to.path === '/membercenter') {
    router.push('/land');
    return;
  }
  if (to.path === '/changepassword' || to.path === 'details') {
    if (Object.keys(store._modules.root.state.userinfo).length == 0) {
      let time = true;
      Dialog.alert({
        title: '重要提醒',
        message: '请先登陆',
        lockScroll: false,
      }).then(() => {
        time = false;
      });
      setTimeout(() => {
        if (time) Dialog.close();
        router.push('/');
      }, 2000);
      return;
    } else {
      next();
    }
  } else {
    next();
  }
});


// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import Vant from 'vant';
import myComponts from './base';
import 'vant/lib/index.css';
import '../static/css/index.less';
import store from './store';
import MinXin from './components/mixins.js';

Vue.mixin(MinXin);
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


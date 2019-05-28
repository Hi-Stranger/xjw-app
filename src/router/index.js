import Vue from 'vue';
import Router from 'vue-router';
import Register from '@/components/Register';
import Download from '@/components/Download';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Register',
      component: Register
    },
    {
      path: '/download',
      name: 'Download',
      component: Download
    }
  ]
})

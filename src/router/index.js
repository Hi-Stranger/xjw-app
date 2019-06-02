import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home'; //首页
import Register from '@/components/Register'; //注册
import Download from '@/components/Download'; //下载

Vue.use(Router);

function getAbsolutePath() {
  let path = location.pathname
  return path.substring(0, path.lastIndexOf('/') + 1)
}

export default new Router({
  mode: 'history',
  base: getAbsolutePath(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/download',
      name: 'Download',
      component: Download
    },
    {
      path: '*',
      redirect: '/',
    }
  ]
})

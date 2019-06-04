import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home'; //首页
import Land from '@/components/Land'; //登陆
import Register from '@/components/Register'; //注册
import Download from '@/components/Download'; //下载
import Preferential from '@/components/Preferential'; //下载
import MemberCenter from '@/components/MemberCenter'; //会员中心
import Details from '@/components/Details'; //会员中心-详情
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
      component: Home,
      children: [
        {
          path: '/land',
          name: 'Land',
          component: Land
        },
        {
          path: '/register',
          name: 'Register',
          component: Register
        },
        {
          path: '/download',
          name: 'Download',
          component: Download
        },
        {
          path: '/preferential',
          name: 'Preferential',
          component: Preferential
        },
        {
          path: '/membercenter',
          name: 'MemberCenter',
          component: MemberCenter
        },
        {
          path: '/details',
          name: 'Details',
          component: Details
        },
      ]
    },
    {
      path: '*',
      redirect: '/',
    }
  ]
})

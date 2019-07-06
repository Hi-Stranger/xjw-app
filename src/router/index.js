import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home'; //首页
import Land from '@/components/Land'; //登陆
import Register from '@/components/Register'; //注册
import Download from '@/components/Download'; //下载
import Preferential from '@/components/Preferential'; //下载
import MemberCenter from '@/components/MemberCenter'; //会员中心
import Details from '@/components/Details'; //会员中心-详情
import ChangePassword from '@/components/ChangePassword'; //修改密码
import GameRecord from '@/components/GameRecord'; //游戏记录
import ContactService from '@/components/ContactService'; //联系客服
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
        {
          path: '/changepassword',
          name: 'ChangePassword',
          component: ChangePassword
        },
        {
          path: '/gamerecord',
          name: 'GameRecord',
          component: GameRecord
        },
        {
          path: '/contactservice',
          name: 'ContactService',
          component: ContactService
        },
      ]
    },
    {
      path: '*',
      redirect: '/',
    }
  ]
})

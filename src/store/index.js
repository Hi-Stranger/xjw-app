import Vue from 'vue';
import Vuex from "vuex";

Vue.use(Vuex);
import mutations from './mutations';

const state = {
  config: {
    notice: '拒绝一切与兼职刷单、理财诈骗、洗黑钱等相关非正当资金。一经发现并确认，将永久冻结账号及资金，凡请有涉及会员请自行离开。',
    phone: [],
    wechat: '',
    qrcode: '',
    token: '',
    qq: '',
    load: false,
    appurl1: "",
    appurl2: "",
    online_live_url: "",
    online_service_url: "",
    useMobileCode: "",  //是否使用短信验证码判断 0使用/register（非） 1使用/registerSms
  },
  userinfo: localStorage.userinfo ? JSON.parse(localStorage.userinfo) : {}
};
export default new Vuex.Store({state, mutations, strict: true});

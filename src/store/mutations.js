import * as Types from './mutations-type';

const mutations = {
  [Types.TEST](state, data) {
    console.log(state);
    console.log(data);
  },
  [Types.NOTICE](state, obj) {
    state.config.msg = obj.notice;
    state.config.phone = obj.phone;
    state.config.qrcode = obj.qrcode;
    state.config.wechat = obj.wechat;
  },
  [Types.SETINFO](state, info) {
    localStorage.userinfo = JSON.stringify(info);
    state.userinfo = info;
  },
  [Types.SETOUT](state, info) {
    localStorage.removeItem('userinfo');
    state.userinfo = {};
  },
  [Types.SETLOAD](state, BOOL) {
    state.config.load = BOOL;
  }
};
export default mutations;

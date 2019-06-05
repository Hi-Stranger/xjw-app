import * as Types from './mutations-type';

const mutations = {
  [Types.TEST](state, data) {
    console.log(state);
    console.log(data);
  },
  [Types.NOTICE](state, str) {
    // state.config.msg = str;
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
    console.log(111);
    state.config.load = BOOL;
  }
};
export default mutations;

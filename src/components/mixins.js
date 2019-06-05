const myMixin = {
  data() {
    return {
      isNoData: false,
      isShowLoding: true
    }
  },
  methods: {
    routerYz() {
      let time = true;
      let msg = '功能暂未开通，敬请期待！';
      this.$dialog.alert({
        title: '重要提醒',
        message: msg,
        lockScroll: false,
      }).then(() => {
        time = false;
      });
      setTimeout(() => {
        if (time) this.$dialog.close();
      }, 2000);
    }
  }
};
export default myMixin;

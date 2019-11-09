<template>
  <div @click="opentalk" class="contactcustomerservice-box fixed font15 text-center">
    <i class="iconfont icon-xiaoxi font30" style="margin-left: .05rem"></i>
    <br>在<br>线<br>客<br>服
  </div>
</template>

<script>
  import {mapState} from 'vuex';
  import * as Types from '../store/mutations-type';

  export default {
    name: "contactcustomerservice",
    computed: {
      ...mapState(['userinfo', 'config'])
    },
    created() {
      this.$nextTick(() => {

      });
    },
    methods: {
      opentalk() {
        if (this.config.online_service_url) {
          window.open(this.config.online_service_url);
        } else {
          Dialog.alert({
            title: '重要提醒',
            message: '网络错误，请重试',
            lockScroll: false,
          }).then(() => {

          });
        }
      }
    }
  }
</script>

<style lang="less">
  .contactcustomerservice-box {
    top: 65%;
    left: 0;
    transform: translate(0, -50%);
    background-color: #1586d2;
    z-index: 20;
    color: #ffffff;
    padding: .1rem 0;
    border-radius: .05rem;
  }
</style>

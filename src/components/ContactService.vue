<template>
  <div class="box">
    <Head>联系客服</Head>
    <div class="ContactService-box text-center colorWhite">
      <p class="font28">客服热线</p>
      <a :href="'tel:'+config.phone" class="font21 block colorWhite "><u>{{config.phone}}</u></a>
      <img class="border-box pad-10 margin-auto" :src="config.qrcode">
      <p class="font21">微信号 {{config.wechat}}</p>
      <!--      <a href="weixin://dl/scan">点击一下</a>-->
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex';

  export default {
    name: "ContactService",
    computed: {
      ...mapState(['config'])
    },
  }
</script>

<style lang="less">
  .ContactService-box {
    background-color: #1a2a51;
    line-height: 1;

    p:first-child {
      margin-top: .47rem;
      margin-bottom: .21rem;
    }

    a:nth-child(2) {
      margin-bottom: .43rem;
    }

    img {
      width: 1.72rem;
      height: 1.72rem;
      background-color: #ffffff;
      margin-bottom: .3rem;
    }

    p:last-child {
      color: #ffe200;
    }
  }
</style>

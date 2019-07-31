<template>
  <div class="box">
    <Head>联系客服</Head>
    <div class="ContactService-box text-center colorWhite">
      <p class="font28">客服热线</p>
      <a v-for="(l,i) in config.phone" :href="'tel:'+config.phone"
         :class="i == config.phone.length - 1 ? 'mar-b43' : 'mar-b10'" class="font21 block colorWhite"><u>{{l}}</u></a>
      <img class="border-box pad-10 margin-auto" :src="config.qrcode">
      <p class="font21 copyp mar-b15" @click="copy(config.wechat)">微信号 {{config.wechat}}</p>
      <a v-if="config.qq"
         :href="'mqqwpa://im/chat?chat_type=wpa&uin='+config.qq+'&version=1&src_type=web&web_src=oicqzone.com'"
         class="font21 copyp block">QQ号 {{config.qq}}</a>
      <!--         @click="copy(config.qq)"-->
      <!--            <a href="weixin://">点击一下</a>-->
      <input v-show="showin" v-model="inval" ref="in" type="text" style="opacity: 0;width: .1rem;height: .1rem;">
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
    data() {
      return {
        inval: '',
        showin: false,
      }
    },
    methods: {
      copy(str) {
        this.showin = true;
        this.inval = str;
        setTimeout(() => {
          let dom = this.$refs['in'];
          dom.select();
          document.execCommand("Copy"); // 执行浏览器复制命令
          this.tipSome('已经复制微信号码，是否打开微信', function () {
            window.location.href = 'weixin://';
          });
          this.showin = false;
        }, 200);
      }
    }
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

    a.mar-b43 {
      margin-bottom: .43rem;
    }

    img {
      width: 1.72rem;
      height: 1.72rem;
      background-color: #ffffff;
      margin-bottom: .3rem;
    }

    .copyp {
      color: #ffe200;
    }
  }
</style>

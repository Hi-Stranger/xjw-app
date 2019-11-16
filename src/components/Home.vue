<template>
  <div class="box">
    <Head :logo="true" :group="true" :back="false"></Head>
    <div class="home-box flex col">
      <!--      <Contactcustomerservice v-if="$route.name === 'Home'"></Contactcustomerservice>-->
      <van-swipe :autoplay="3000" indicator-color="#304691">
        <van-swipe-item>
          <img src="../../static/img/banner1@2x.png" alt="图片显示错误">
        </van-swipe-item>
        <van-swipe-item>
          <img src="../../static/img/banner7.jpg" alt="图片显示错误">
        </van-swipe-item>
        <van-swipe-item>
          <img src="../../static/img/banner8.jpg" alt="图片显示错误">
        </van-swipe-item>
        <van-swipe-item>
          <img src="../../static/img/banner2@2x.png" alt="图片显示错误">
        </van-swipe-item>
        <van-swipe-item>
          <img src="../../static/img/banner4@2x.png" alt="图片显示错误">
        </van-swipe-item>
      </van-swipe>
      <div class="notice-box relative">
        <div class="absolute full-width flex items-center border-box">
          <van-notice-bar class="full-width font14 colorGray"
                          :text="config.notice" left-icon="volume-o"/>
        </div>
      </div>
      <div class="contact-box relative flex col flex1">
        <div class="contact-info-box flex">
          <div class="left-box full-height flex items-center">
            <img :src="config.qrcode" alt="">
            <span class="font14">客<br>服<br>微<br>信</span>
          </div>
          <div class="right-box flex just-center col warp flex1" style="text-align: left;">
            <span v-for="(item,index) in config.phone" :key="index" class="font15"
                  style="margin-bottom: .03rem;">联系电话：<a :href="'tel:'+item"
                                                         style="color:rgb(228,141,38);">{{item}}</a></span>
            <span class="font15">QQ：<a
              :href="'mqqwpa://im/chat?chat_type=wpa&uin='+config.qq+'&version=1&src_type=web&web_src=oicqzone.com'"
              style="color:rgb(228,141,38)">{{config.qq}}</a></span>
          </div>
        </div>
        <div v-show="$route.name === 'Home'" class="video-box flex1 relative" style="z-index: 5;">
          <video id="welcomeVideo" playsinline="true" webkit-playsinline="true"
                 class="video-js vjs-default-skin absolute full-height full-width">
            <source id="source" src="http://103.60.166.73:56782/hls/live/dsqj1.m3u8" type="application/x-mpegURL"/>
          </video>
        </div>
      </div>
    </div>
    <Foot></Foot>
    <router-view></router-view>
    <div v-show="config.load" class="load-box fixed full-width full-height flex just-center items-center">
      <van-loading type="spinner"/>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex';
  import * as Types from '../store/mutations-type';
  import {getconfigure} from '../api';

  export default {
    name: "Home",
    data() {
      return {
        currentType: 0,
      }
    },
    computed: {
      ...mapState(['userinfo', 'config'])
    },
    created() {
      this.$nextTick(() => {
        let _url = (window.location.host).split(".");
        localStorage.agent = (_url[0]).toLocaleLowerCase() == 'www' ? _url[1] + ".com" : _url[0] + ".com";
        // localStorage.agent = 'ds0118.com';
        let query = this.$route.query.agent || localStorage.agent;
        this.$store.commit('SETLOAD', true);
        getconfigure(query).then((resp) => {
          this.$store.commit('SETLOAD', false);
          this.$store.commit(Types.NOTICE, resp.data);
          let myVideo = videojs('welcomeVideo', {
            loop: true,
            controls: true,
            preload: 'auto',
            autoplay: "muted"
          });
          myVideo.play();
          let _53code = document.createElement("script");
          _53code.src = resp.data.online_service_url;
          let s = document.getElementsByTagName("script")[0];
          s.parentNode.insertBefore(_53code, s);
        });
      });
    },
    methods: {
      changeType(num) {
        if (num == 0 || num == 3) {
          this.currentType = num;
          return;
        }
        this.routerYz();
      },
      goGame() {
        if (!this.userinfo.para) {
          this.$dialog.alert({
            title: '重要提醒',
            message: '请先登陆',
            lockScroll: false,
          });
          setTimeout(() => {
            this.$dialog.close();
          }, 2000);
          return;
        }
        window.open(this.userinfo.para);
      }
    },
    watch: {}
  }
</script>

<style lang="less">
  .home-box {
    .van-swipe img {
      height: 1.25rem;
    }

    .notice-box {
      height: .4rem;

      .absolute {
        height: .48rem;
        padding: 0 .03rem;
        top: -.1rem;

        .van-notice-bar {
          background: url("../../static/img/gonggao_bg@2x.png") no-repeat center/cover;

          .van-icon-volume-o:before {
            content: '';
            background: url("../../static/img/laba@2x.png") no-repeat center center/cover;
            width: .2rem;
            height: .17rem;
          }
        }
      }
    }

    .contact-box {
      .contact-info-box {
        background-color: #eceff3;
        padding: .1rem;
        height: 1.465rem;
        box-sizing: border-box;

        .left-box {
          border-right: 1px solid #a9adb1;

          img {
            height: 1.2241rem;
            width: 1.2241rem;
            padding: .05rem;
            box-sizing: border-box;
            background-color: #ffffff;
          }

          span {
            margin: .12rem;
          }
        }

        .right-box {

        }
      }

      .right-box {
        padding-left: .12rem;
      }
    }
  }

  .load-box {
    z-index: 10;
    background-color: rgba(0, 0, 0, .3);
    top: 0;
    left: 0;
  }
</style>

<template>
  <div class="box">
    <Head :logo="true" :group="true" :back="false"></Head>
    <div class="home-box flex col">
      <van-swipe :autoplay="3000" indicator-color="#304691">
        <van-swipe-item>
          <img src="../../static/img/banner1@2x.png" alt="图片显示错误">
        </van-swipe-item>
        <van-swipe-item>
          <img src="../../static/img/banner2@2x.png" alt="图片显示错误">
        </van-swipe-item>
        <van-swipe-item>
          <img src="../../static/img/banner3@2x.png" alt="图片显示错误">
        </van-swipe-item>
        <van-swipe-item>
          <img src="../../static/img/banner4@2x.png" alt="图片显示错误">
        </van-swipe-item>
        <van-swipe-item>
          <img src="../../static/img/banner5@2x.png" alt="图片显示错误">
        </van-swipe-item>
      </van-swipe>
      <div class="notice-box relative">
        <div class="absolute full-width flex items-center border-box">
          <van-notice-bar class="full-width font14 colorGray"
                          text="拒绝一切与兼职刷单、理财诈骗、洗黑钱等相关非正当资金。一经发现并确认，将永久冻结账号及资金，凡请有涉及会员请自行离开。" left-icon="volume-o"/>
        </div>
      </div>
      <div class="more-box font14 flex">
        <div @click="changeType(0)" :class="{'current-type':currentType == 0}"
             class="flex just-center col items-center">
          <img src="../../static/img/remen@2x.png" alt="图片显示错误">
          <span>热门</span>
        </div>
        <div @click="changeType(1)" :class="{'current-type':currentType == 1}"
             class="flex just-center col items-center">
          <img src="../../static/img/tiyu@2x.png" alt="图片显示错误">
          <span>体育</span>
        </div>
        <div @click="changeType(2)" :class="{'current-type':currentType == 2}"
             class="flex just-center col items-center">
          <img src="../../static/img/caipiao@2x.png" alt="图片显示错误">
          <span>彩票</span>
        </div>
        <div @click="changeType(3)" :class="{'current-type':currentType == 3}"
             class="flex just-center col items-center">
          <img src="../../static/img/shixun@2x.png" alt="图片显示错误">
          <span>视讯</span>
        </div>
        <div @click="changeType(4)" :class="{'current-type':currentType == 4}"
             class="flex just-center col items-center">
          <img src="../../static/img/dianzi@2x.png" alt="图片显示错误">
          <span>电子</span>
        </div>
        <div @click="changeType(5)" :class="{'current-type':currentType == 5}"
             class="flex just-center col items-center">
          <img src="../../static/img/qipai@2x.png" alt="图片显示错误">
          <span>棋牌</span>
        </div>
      </div>
      <div class="flex just-between flex1 warp overflowY type-box border-box">
        <router-link to="/download" tag="div" class="border-box">
          <div class="flex just-between items-center font16 full-height">
            <img src="../../static/img/sy_l@2x.png" alt="图片显示错误">
            <span>鼎盛国际</span>
          </div>
        </router-link>
        <div class="border-box">
          <div class="flex just-between items-center font16 full-height">
            <img src="../../static/img/jiahao@2x.png" alt="图片显示错误">
            <div class="flex items-center just-center col">
              <span>敬请期待</span>
              <span class="font10">UPCOMING</span>
            </div>
          </div>
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
        // localStorage.agent = 'hl66899.com';
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
    watch: {
      $route(n) {
        console.log(n);
      }
    }
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

    .more-box {
      height: .85rem;
      overflow-x: auto;
      background-color: #edf0f3;

      > div {
        width: .75rem;
        flex: 0 0 auto;
        border-bottom: 1px solid #e4e4e3;

        img {
          width: .43rem;
          height: .43rem;
        }

        span {
          margin-top: .07rem;
          color: #3f3f3f;
        }

        &.current-type {
          background: #ffffff url("../../static/img/xz@2x.png") no-repeat left top/100% 100%;
          border-bottom: 1px solid transparent;
          border-radius: .05rem .05rem 0 0;
        }
      }
    }

    .type-box {
      margin-top: .06rem;
      padding: 0 .05rem;

      > div {
        width: 50%;
        height: .7rem;

        &:nth-child(2n+1) {
          padding-right: .03rem;
        }

        &:nth-child(2n) {
          padding-left: .03rem;
        }

        > div {
          background: url("../../static/img/bg_x@2x.png") no-repeat center center/cover;

          img {
            width: .49rem;
            height: .49rem;
            margin-left: .2rem;
          }

          span {
            color: #3F3F3F;
            margin-right: .25rem;

            &.font10 {
              color: #403E50;
            }
          }
        }
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

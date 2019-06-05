<template>
  <div class="box main-box">
    <Head :back="false">会员中心</Head>
    <div class="membercenter-box flex col">
      <div class="userinfo-box flex col relative">
        <div class="tx-box flex col">
          <i class="iconfont icon-huiyuan colorWhite text-center"></i>
          <span class="font15 text-center colorWhite">{{userinfo.username}}</span>
        </div>
        <div class="info-box flex items-center just-between absolute full-width font15 colorWhite">
          <span class="text-center flex1">可用额度:￥{{userinfo.balance}}</span>
          <span class="text-center flex1">可用积分:0</span>
        </div>
      </div>
      <div class="link-box flex1 overflowY font15">
        <router-link to="/details" tag="div">
          <i class="iconfont icon-huiyuan" style="background-color: #2576E0;"></i>
          账户首页
        </router-link>
        <div @click="routerYz">
          <i class="iconfont icon-jilumian" style="background-color: #9750EA;"></i>
          游戏记录
        </div>
        <div @click="routerYz">
          <i class="iconfont icon-jilu1" style="background-color: #1EC889;"></i>
          充值记录
        </div>
        <router-link to="/changepassword" tag="div">
          <i class="iconfont icon-suo" style="background-color: #F28F25;"></i>
          修改密码
        </router-link>
        <div @click="Signout" class="tc-btn font17 colorWhite border-box pad-r10 pad-l10">
          <button class="full-width full-height text-center opacity8">安全退出</button>
        </div>
      </div>
    </div>
    <Foot></Foot>
  </div>
</template>

<script>
  import {mapState} from 'vuex';

  export default {
    name: "MemberCenter",
    computed: {
      ...mapState(['userinfo'])
    },
  }
</script>

<style lang="less">
  .membercenter-box {
    .userinfo-box {
      height: 1.28rem;
      background: url("../../static/img/user_bg@2x.png") no-repeat center center/cover;

      .info-box {
        height: .3rem;
        background-color: #031E43;
        bottom: 0;
      }

      .tx-box {
        i {
          font-size: .6rem;
          line-height: .7rem;
          width: .7rem;
          background-color: #2179FF;
          border-radius: 50%;
          margin: .025rem auto 0 auto;
        }
      }
    }

    .link-box {
      > div:not(:last-child) {
        line-height: .49rem;
        height: .49rem;
        background-color: #ffffff;
        border-bottom: 1px solid rgba(221, 221, 221, 1);
        display: flex;
        align-items: center;

        i {
          color: #ffffff;
          font-size: .2rem;
          width: .26rem;
          height: .26rem;
          border-radius: 50%;
          line-height: .26rem;
          text-align: center;
          margin: 0 .1rem 0 .15rem;
        }

        &:active {
          background-color: #f5f5f5;
        }
      }

      .tc-btn {
        margin-top: .28rem;

        button {
          background-color: #DA524E;
          line-height: .49rem;
          border-radius: .05rem;
        }
      }
    }
  }
</style>

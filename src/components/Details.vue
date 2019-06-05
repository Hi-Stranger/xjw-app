<template>
  <div class="box main-box">
    <Head>会员中心</Head>
    <div class="details-box border-box pad-10 colorBlack">
      <div class="font17 colorWhite">
        <span>用户信息</span>
      </div>
      <div class="font14">
        <span>总余额</span>
        <span>{{userinfo.balance}}</span>
      </div>
      <div class="font14">
        <span>会员账号</span>
        <span class="colorWhite">{{userinfo.username}}</span>
      </div>
      <div class="font14">
        <span>上次登录时间</span>
        <span class="colorWhite">{{userinfo.last_login_time}}</span>
      </div>
      <div class="tc-btn">
        <button class="colorWhite font17 full-width text-center opacity8">退出账号</button>
      </div>
    </div>
    <Foot></Foot>
  </div>
</template>

<script>
  import {mapState} from 'vuex';

  export default {
    name: "Details",
    computed: {
      ...mapState(['userinfo'])
    },
  }
</script>

<style lang="less">
  .details-box {
    > div:not(:last-child) {
      height: .38rem;
      box-sizing: border-box;
      padding-left: .15rem;
      padding-right: .1rem;
      background-color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    div:nth-child(1) {
      background-color: #4D6A8D;
    }

    div:nth-child(2) {
      span:nth-child(2) {
        color: #EA2626;
      }
    }

    div:nth-child(3), div:nth-child(4) {
      background-color: #F2F4F6;

      span:nth-child(2) {
        background-color: #777777;
        height: .19rem;
        border-radius: .1rem;
        padding: 0 .1rem;
      }
    }

    div:nth-child(4) {
      background-color: #ffffff;
    }

    .tc-btn {
      margin-top: .4rem;

      button {
        line-height: .49rem;
        background-color: #405F85;
        border-radius: .05rem;
      }
    }
  }
</style>

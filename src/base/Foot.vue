<template>
  <div class="foot-box fixed full-width flex">
    <router-link to="/" tag="a" class="flex flex1 col just-end items-center" href="javascript:;">
      <i class="iconfont icon-shouye1-copy font30"></i>
      <span>首页</span>
    </router-link>
    <a @click="routerYz" class="flex flex1 col just-end items-center" href="javascript:;">
      <i class="iconfont icon-04_youhuihuodong font30"></i>
      <span>优惠活动</span>
    </a>
    <!--    <router-link to="/preferential" tag="a" class="flex flex1 col just-end items-center" href="javascript:;">-->
    <!--      <i class="iconfont icon-04_youhuihuodong font24"></i>-->
    <!--      <span>优惠活动</span>-->
    <!--    </router-link>-->
    <!--    <a @click="routerYz" class="flex flex1 col just-end items-center" href="javascript:;">-->
    <!--      <i class="iconfont icon-qiandai text-center colorWhite font24"></i>-->
    <!--      <span>充值提现</span>-->
    <!--    </a>-->
    <router-link to="/download" tag="a" class="flex flex1 col just-end items-center" href="javascript:;">
      <i class="iconfont icon-app1 font30"></i>
      <span>APP下载</span>
    </router-link>
    <!--    <a :href="this.config.online_service_url" target="_blank" class="flex flex1 col just-end items-center">-->
    <!--      <i class="iconfont icon-xiaoxi font30"></i>-->
    <!--      <span>在线客服</span>-->
    <!--    </a>-->
    <router-link to="/membercenter" tag="a" class="flex flex1 col just-end items-center" href="javascript:;">
      <i class="iconfont icon-huiyuan font30"></i>
      <span>会员中心</span>
    </router-link>
  </div>
</template>

<script>
  import {mapState} from 'vuex';

  export default {
    name: "Foot",
    computed: {
      ...mapState(['userinfo', 'config'])
    },
  }
</script>

<style lang="less">
  .foot-box {
    height: .59rem;
    border-top: 1px solid #eaeaea;
    /*<!--background: url("../../static/img/bottom_bg@2x.png") no-repeat center center/cover;-->*/
    bottom: 0;

    a {
      color: #5C5C5C;
      font-size: .12rem;

      span {
        margin: .04rem 0 .08rem 0;
        line-height: 1;
      }

      /*<!--&:nth-child(3) {-->*/
      /*<!--  i {-->*/
      /*<!--    line-height: .42rem;-->*/
      /*<!--    width: .42rem;-->*/
      /*<!--    height: .42rem;-->*/
      /*<!--    background: url("../../static/img/tixian_bg@2x.png") no-repeat center center/cover;-->*/
      /*<!--    border-radius: 50%;-->*/
      /*<!--    margin-bottom: .05rem;-->*/
      /*<!--  }-->*/
      /*<!--}-->*/
    }
  }
</style>

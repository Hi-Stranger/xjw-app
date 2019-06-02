<template>
  <div class="foot-box fixed full-width flex">
    <a class="flex flex1 col just-end items-center" href="javascript:;">
      <i class="iconfont icon-shouye1-copy font24"></i>
      <span>首页</span>
    </a>
    <a class="flex flex1 col just-end items-center" href="javascript:;">
      <i class="iconfont icon-04_youhuihuodong font24"></i>
      <span>优惠活动</span>
    </a>
    <a class="flex flex1 col just-end items-center" href="javascript:;">
      <i class="iconfont icon-qiandai text-center colorWhite font24"></i>
      <span>充值提现</span>
    </a>
    <a class="flex flex1 col just-end items-center" href="javascript:;">
      <i class="iconfont icon-zhuanhuan font24"></i>
      <span>额度转换</span>
    </a>
    <a class="flex flex1 col just-end items-center" href="javascript:;">
      <i class="iconfont icon-huiyuan font24"></i>
      <span>会员中心</span>
    </a>
  </div>
</template>

<script>
  export default {
    name: "Foot"
  }
</script>

<style lang="less">
  .foot-box {
    height: .79rem;
    background: url("../../static/img/bottom_bg@2x.png") no-repeat center center/cover;
    bottom: 0;

    a {
      color: #5C5C5C;
      font-size: .12rem;

      span {
        margin: .04rem 0 .08rem 0;
        line-height: 1;
      }

      &:nth-child(3) {
        i {
          line-height: .42rem;
          width: .42rem;
          height: .42rem;
          background: url("../../static/img/tixian_bg@2x.png") no-repeat center center/cover;
          border-radius: 50%;
          margin-bottom: .05rem;
        }
      }
    }
  }
</style>

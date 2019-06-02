<template>
  <div class="header-box flex just-between border-box pad-l10 pad-r10 items-center">
    <div class="logo-box"></div>
    <div class="head-group flex items-center">
      <button class="font15 colorWhite">注册</button>
      <button class="font15 colorWhite">登陆</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Head"
  }
</script>

<style lang="less">
  .header-box {
    height: .57rem;
    background: #030925 url("../../static/img/home_top_bg@2x.png") no-repeat left top/cover;

    .logo-box {
      width: 1.37rem;
      height: .36rem;
      line-height: .36rem;
      background: url("../../static/img/logo@2x.png") no-repeat center center/cover;
    }

    .head-group {
      button {
        outline: none;
        border: unset;
        background: url("../../static/img/zc_btn_bg@2x.png") no-repeat center center/contain;
        width: .55rem;
        height: .36rem;
        line-height: .36rem;
      }

      button:last-child {
        margin-left: .08rem;
      }
    }
  }
</style>

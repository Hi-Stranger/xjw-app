<template>
  <div :class="{'bg':bg}" class="header-box flex just-between border-box pad-l10 pad-r10 items-center relative">
    <div v-show="logo" class="logo-box"></div>
    <div v-show="group" class="head-group flex items-center">
      <button class="font15 colorWhite">注册</button>
      <router-link to="land" tag="button" class="font15 colorWhite">登陆</router-link>
    </div>
    <div v-show="back" class="flex items-center">
      <i class="iconfont icon-fanhui font23 colorWhite"></i>
    </div>
    <div v-show="register" class="flex items-center font15 colorWhite">
      注册
      <i class="iconfont icon-shouye1-copy font23"></i>
    </div>
    <div class="slot-box absolute full-height full-width flex just-center items-center font17 colorWhite">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Head",
    props: {
      'bg': {
        default: true,
        type: Boolean,
      },
      'logo': {
        default: false,
        type: Boolean,
      },
      'group': {
        default: false,
        type: Boolean,
      },
      'back': {
        default: true,
        type: Boolean,
      },
      'register': {
        default: false,
        type: Boolean,
      }
    }
  }
</script>

<style lang="less">
  .header-box {
    height: .57rem;

    &.bg {
      background: #030925 url("../../static/img/home_top_bg@2x.png") no-repeat left top/cover;
    }

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

    .slot-box {
      pointer-events: none;
      left: 0;
      top: 0;
    }
  }
</style>

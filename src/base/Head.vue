<template>
  <div :class="{'bg':bg}" class="header-box flex just-between border-box pad-l10 pad-r10 items-center relative">
    <div v-show="logo" class="logo-box"></div>
    <div v-show="group" class="head-group flex items-center">
      <router-link to="register" tag="button" class="font15 colorWhite">注册</router-link>
      <router-link to="land" tag="button" class="font15 colorWhite">登陆</router-link>
    </div>
    <div @click="goBack" v-show="back" class="flex items-center">
      <i :style="{'color':color}" class="iconfont icon-fanhui font23 colorWhite"></i>
      <span v-show="backText" class="font15" style="color: #19295C;">返回</span>
    </div>
    <router-link to="register" tag="div" v-show="register" class="flex items-center font15 colorWhite">
      注册
      <i class="iconfont icon-shouye1-copy font23"></i>
    </router-link>
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
      'backText': {
        default: false,
        type: Boolean,
      },
      'register': {
        default: false,
        type: Boolean,
      },
      'color': {
        default: '#fff',
      }
    },
    methods: {
      goBack() {
        this.$router.go(-1);
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

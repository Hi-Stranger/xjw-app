<template>
  <div class="box preferential-bg">
    <Head>优惠活动</Head>
    <div class="preferential-box border-box pad-l10 pad-r10" style="padding-bottom: 0;">
      <img @click="current = 0" class="full-width" src="../../static/img/banner@2x.png" alt="图片显示错误">
      <div :class="{'auto':current == 0}">
        <img class="full-width" src="../../static/img/huodong1_03.jpg" alt="图片显示错误">
      </div>
      <img @click="current = 1" class="full-width" src="../../static/img/banner@2x.png" alt="图片显示错误">
      <div :class="{'auto':current == 1}">
        <img class="full-width" src="../../static/img/huodong1_03.jpg" alt="图片显示错误">
      </div>
      <img @click="current = 2" class="full-width" src="../../static/img/banner@2x.png" alt="图片显示错误">
      <div :class="{'auto':current == 2}">
        <img class="full-width" src="../../static/img/huodong1_03.jpg" alt="图片显示错误">
      </div>
      <img @click="current = 3" class="full-width" src="../../static/img/banner@2x.png" alt="图片显示错误">
      <div :class="{'auto':current == 3}">
        <img class="full-width" src="../../static/img/huodong1_03.jpg" alt="图片显示错误">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Preferential",
    data() {
      return {
        current: 0,
      }
    }
  }
</script>

<style lang="less">
  .preferential-bg {
    background-color: #202020;
  }

  .preferential-box {
    > img {
      margin: .06rem 0;
    }

    div {
      height: 0;
      overflow: hidden;
      transition: .3s;

      &.auto {
        height: 2.93rem;
        margin-bottom: .06rem;
      }
    }
  }
</style>

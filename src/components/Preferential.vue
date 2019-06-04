<template>
  <div class="box preferential-bg">
    <Head>优惠活动</Head>
    <div class="preferential-box border-box pad-l10 pad-r10">
      <img class="full-width" src="../../static/img/banner@2x.png" alt="图片显示错误">
      <div>
<!--        <img src="../../static/" alt="">-->
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Preferential"
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
  }
</style>

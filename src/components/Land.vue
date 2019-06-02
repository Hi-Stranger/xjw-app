<template>
  <div class="box">
    <div class="land-box">
      <Head :bg="false" :register="true"></Head>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Land"
  }
</script>

<style lang="less">
  .land-box {
    background: url("../../static/img/big_bg@2x.png") no-repeat center center/cover;
  }
</style>

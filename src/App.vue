<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style lang="less">
  .box {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: #ffffff;

    > div {
      height: 100%;
      overflow-y: auto;
    }
  }

  .main-box {
    background-color: #f5f5f5;
  }
</style>

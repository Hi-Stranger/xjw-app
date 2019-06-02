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
    width: 100%;
    height: 100%;
    overflow: hidden;

    > div {
      height: 100%;
      overflow-y: auto;
    }
  }

  .main-box {
    background-color: #f5f5f5;
  }
</style>

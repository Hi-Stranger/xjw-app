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
    display: flex;
    flex-direction: column;

    > div:nth-child(2) {
      flex: 1;
      overflow-y: auto;
      padding-bottom: .59rem;
    }
  }

  .main-box {
    background-color: #f5f5f5;
  }

  button {
    border: none;
    outline: none;
    display: block;
    background: unset;
  }
</style>

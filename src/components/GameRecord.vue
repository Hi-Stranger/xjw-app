<template>
  <div class="box main-box">
    <Head>请选择游戏类别</Head>
    <div class="gamerecord-box border-box">
      <div class="game-type backgroundWhite font17 colorBlack border-box flex items-center just-center opacity8">
        <i class="iconfont icon-shipin font24"></i>
        真人视讯
      </div>
    </div>
    <Foot></Foot>
  </div>
</template>

<script>
  export default {
    name: "GameRecord",

  }
</script>

<style lang="less">
  .gamerecord-box {
    padding: 0 .27rem;

    .game-type {
      height: .35rem;
      margin-top: .18rem;
      border-radius: .05rem;
      border: 1px solid #E4E4E4;

      i {
        color: #67809E;
        margin-right: .08rem;
      }
    }
  }
</style>

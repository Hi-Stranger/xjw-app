<template>
  <div class="box">
    <Head :bg="false" :backText="true" :color="'#19295C'"></Head>
    <div class="download-box font14 text-center">
      <img class="margin-auto" src="../../static/img/dologo@2x.png" alt="图片显示错误">
      <span class="font24 mar-t15 mar-b15">鼎盛国际</span>
      <span>版本：2.2.9/2.3.1</span>
      <span>更新于：2018-10-1</span>
      <div class="font17 border-box flex items-center colorWhite">
        <a @click="openurl(config.appurl1)"
           class="full-width full-height text-center opacity8">新版本下载</a>
      </div>
      <div class="font17 border-box flex items-center colorWhite">
        <a @click="openurl(config.appurl2)" class="full-width full-height text-center opacity8">旧版本下载</a>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex';

  export default {
    name: "Download",
    computed: {
      ...mapState(['config'])
    },
    created() {
      this.$nextTick(() => {

      });
    },
    methods: {
      openurl(url) {
        window.open(url);
      }
    }
  }
</script>

<style lang="less">
  .download-box {
    img {
      width: 1.19rem;
      height: 1.19rem;
      margin-top: .25rem;
    }

    span {
      display: block;
      line-height: 1;
    }

    span:nth-child(3) {
      margin-bottom: .08rem;
    }

    div {
      padding: 0 .28rem;
      height: .49rem;
      line-height: .49rem;

      a {
        background-color: #405F85;
        border-radius: .1rem;
        color: #ffffff !important;
      }

      &:nth-child(5) {
        margin: .48rem 0 .1rem 0;
      }
    }
  }
</style>

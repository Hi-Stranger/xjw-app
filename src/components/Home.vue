<template>
  <div class="box">
    <div class="home-box flex col">
      <Head></Head>
      <van-swipe :autoplay="3000" indicator-color="#304691">
        <van-swipe-item>
          <img src="../../static/img/banner1@2x.png" alt="图片显示错误">
        </van-swipe-item>
        <van-swipe-item>
          <img src="../../static/img/banner2@2x.png" alt="图片显示错误">
        </van-swipe-item>
        <van-swipe-item>
          <img src="../../static/img/banner3@2x.png" alt="图片显示错误">
        </van-swipe-item>
        <van-swipe-item>
          <img src="../../static/img/banner4@2x.png" alt="图片显示错误">
        </van-swipe-item>
        <van-swipe-item>
          <img src="../../static/img/banner5@2x.png" alt="图片显示错误">
        </van-swipe-item>
      </van-swipe>
      <div class="notice-box relative">
        <div class="absolute full-width flex items-center border-box">
          <van-notice-bar class="full-width font14 colorGray"
                          text="拒绝一切与兼职刷单、理财诈骗、洗黑钱等相关非正当资金。一经发现并确认，将永久冻结账号及资金，凡请有涉及会员请自行离开。" left-icon="volume-o"/>
        </div>
      </div>
      <div class="more-box font14 flex">
        <div class="current-type flex just-center col items-center">
          <img src="../../static/img/remen@2x.png" alt="图片显示错误">
          <span>热门</span>
        </div>
        <div class="flex just-center col items-center">
          <img src="../../static/img/tiyu@2x.png" alt="图片显示错误">
          <span>体育</span>
        </div>
        <div class="flex just-center col items-center">
          <img src="../../static/img/caipiao@2x.png" alt="图片显示错误">
          <span>彩票</span>
        </div>
        <div class="flex just-center col items-center">
          <img src="../../static/img/shixun@2x.png" alt="图片显示错误">
          <span>视讯</span>
        </div>
        <div class="flex just-center col items-center">
          <img src="../../static/img/dianzi@2x.png" alt="图片显示错误">
          <span>电子</span>
        </div>
        <div class="flex just-center col items-center">
          <img src="../../static/img/qipai@2x.png" alt="图片显示错误">
          <span>棋牌</span>
        </div>
      </div>
      <div class="flex just-between flex1 warp overflowY type-box border-box">
        <div class="border-box">
          <div class="flex just-between items-center font16 full-height">
            <img src="../../static/img/sy_l@2x.png" alt="图片显示错误">
            <span>鼎盛国际</span>
          </div>
        </div>
        <div class="border-box">
          <div class="flex just-between items-center font16 full-height">
            <img src="../../static/img/jiahao@2x.png" alt="图片显示错误">
            <div class="flex items-center just-center col">
              <span>敬请期待</span>
              <span class="font10">UPCOMING</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Home"
  }
</script>

<style lang="less">
  .home-box {
    .van-swipe img {
      height: 1.25rem;
    }

    .notice-box {
      height: .4rem;

      .absolute {
        height: .48rem;
        padding: 0 .03rem;
        top: -.1rem;

        .van-notice-bar {
          background: url("../../static/img/gonggao_bg@2x.png") no-repeat center/cover;

          .van-icon-volume-o:before {
            content: '';
            background: url("../../static/img/laba@2x.png") no-repeat center center/contain;
            width: .2rem;
            height: .17rem;
          }
        }
      }
    }

    .more-box {
      height: .85rem;
      overflow-x: auto;
      background-color: #edf0f3;

      > div {
        width: .75rem;
        flex: 0 0 auto;
        border-bottom: 1px solid #e4e4e3;

        img {
          width: .43rem;
          height: .43rem;
        }

        span {
          margin-top: .07rem;
          color: #3f3f3f;
        }

        &.current-type {
          background: #ffffff url("../../static/img/xz@2x.png") no-repeat left top/100% 100%;
          border-bottom: none;
          border-radius: .05rem .05rem 0 0;
        }
      }
    }

    .type-box {
      margin-top: .06rem;
      padding: 0 .05rem;

      > div {
        width: 50%;
        height: .7rem;

        &:nth-child(2n+1) {
          padding-right: .03rem;
        }

        &:nth-child(2n) {
          padding-left: .03rem;
        }

        > div {
          background: url("../../static/img/bg_x@2x.png") no-repeat center center/cover;

          img {
            width: .49rem;
            height: .49rem;
            margin-left: .2rem;
          }

          span {
            color: #3F3F3F;
            margin-right: .25rem;

            &.font10 {
              color: #403E50;
            }
          }
        }
      }

    }
  }
</style>

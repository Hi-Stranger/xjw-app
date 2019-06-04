<template>
  <div class="box main-box">
    <Head>修改密码</Head>
    <div class="changepassword-box font14 border-box">
      <div class="flex items-center group-one backgroundWhite mar-t10">
        <p class="colorBlack"><font class="visibility-hidden">*</font>旧密码<font class="visibility-hidden">位</font></p>
        <input class="colorGray flex1 border-box pad-r10" type="password" placeholder="请输入旧密码">
      </div>
      <div class="flex items-center group-one backgroundWhite mar-t10">
        <p class="colorBlack"><font class="visibility-hidden">*</font>新密码<font class="visibility-hidden">位</font></p>
        <input class="colorGray flex1 border-box pad-r10" type="password"
               placeholder="6-20个任意字符组成">
      </div>
      <div class="flex items-center group-one backgroundWhite mar-t10">
        <p class="colorBlack"><font class="visibility-hidden">*</font>确认密码</p>
        <input class="colorGray flex1 border-box pad-r10" type="password"
               placeholder="6-20个任意字符组成">
      </div>
      <div class="save-btn font17">
        <button class="full-width colorWhite opacity8">保存</button>
      </div>
    </div>
    <Foot></Foot>
  </div>
</template>

<script>
  export default {
    name: "ChangePassword"
  }
</script>

<style lang="less">
  .changepassword-box {
    padding: 0 .1rem;

    .group-one {
      line-height: .38rem;
      height: .38rem;
      border-radius: .1rem;
      border: 1px solid #cdcdcd;

      p {
        margin-left: .05rem;
      }

      font {
        color: #E53E39;
      }

      input {
        margin-left: .35rem;
      }
    }

    .save-btn {
      margin-top: .75rem;

      button {
        background-color: #405F85;
        line-height: .49rem;
        border-radius: .05rem;
      }
    }
  }
</style>

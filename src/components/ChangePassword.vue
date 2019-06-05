<template>
  <div class="box main-box">
    <Head>修改密码</Head>
    <div class="changepassword-box font14 border-box">
      <div class="flex items-center group-one backgroundWhite mar-t10">
        <p class="colorBlack"><font class="visibility-hidden">*</font>旧密码<font class="visibility-hidden">位</font></p>
        <input v-model="oldPassword" class="colorGray flex1 border-box pad-r10" type="password" placeholder="请输入旧密码">
      </div>
      <div class="flex items-center group-one backgroundWhite mar-t10">
        <p class="colorBlack"><font class="visibility-hidden">*</font>新密码<font class="visibility-hidden">位</font></p>
        <input v-model="newPassword" class="colorGray flex1 border-box pad-r10" type="password"
               placeholder="6-20个任意字符组成">
      </div>
      <div class="flex items-center group-one backgroundWhite mar-t10">
        <p class="colorBlack"><font class="visibility-hidden">*</font>确认密码</p>
        <input v-model="renewPassword" class="colorGray flex1 border-box pad-r10" type="password"
               placeholder="6-20个任意字符组成">
      </div>
      <div @click="changePassword" class="save-btn font17">
        <button class="full-width colorWhite opacity8">保存</button>
      </div>
    </div>
    <Foot></Foot>
  </div>
</template>

<script>
  import {mapState} from 'vuex';
  import * as Types from '../store/mutations-type';
  import {repassword} from '../api';

  export default {
    name: "ChangePassword",
    data() {
      return {
        oldPassword: '',
        newPassword: '',
        renewPassword: '',
      }
    },
    computed: {
      ...mapState(['userinfo', 'config'])
    },
    methods: {
      changePassword() {
        let msg = '';
        if (!this.oldPassword) msg = '请输入旧密码';
        if (!(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$/.test(this.newPassword)) || this.newPassword.length < 6 || this.newPassword.length > 12) msg = '会员密码为6-12位的数字和字母组成的密码';
        if (this.renewPassword != this.newPassword) msg = '新密码输入不一致';
        if (msg) {
          this.$dialog.alert({
            title: '重要提醒',
            message: msg,
            lockScroll: false,
          });
          return;
        }
        this.$store.commit('SETLOAD', true);
        repassword({
          user_id: this.userinfo.user_id,
          old_password: this.oldPassword,
          password: this.renewPassword,
          domain: localStorage.agent,
        }, {token: this.userinfo.token}).then((resp) => {
          this.$store.commit('SETLOAD', false);
          if (resp.code != 0) {
            this.$dialog.alert({
              title: '重要提醒',
              message: resp.message,
              lockScroll: false,
            });
            return;
          } else {
            let _this = this;
            this.$toast.success({
              message: resp.data.msg,
              duration: 2000,
              onClose() {
                _this.$store.commit(Types.SETOUT);
                _this.$router.push('/');
              }
            });
          }
        });
      },
    }
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

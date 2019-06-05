<template>
  <div class="box land-bg">
    <Head :to="'/'" :bg="false" :register="true"></Head>
    <div class="land-box">
      <div class="logo-box flex just-center">
        <img src="../../static/img/logo@2x.png" alt="图片显示错误">
      </div>
      <div class="land-group border-box font15">
        <div class="relative mar-b10">
          <i class="iconfont icon-yonghu absolute font26"></i>
          <input v-model="account" class="full-width border-box font15" placeholder="用户名">
        </div>
        <div class="relative">
          <i class="iconfont icon-mima absolute font26"></i>
          <input v-model="password" class="full-width border-box font15" type="password" placeholder="密码">
        </div>
      </div>
      <div class="land-btn border-box">
        <button @click="SignIn" class="text-center full-width font17 colorWhite opacity8">登陆</button>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex';
  import * as Types from '../store/mutations-type';
  import {login} from '../api';

  export default {
    name: "Land",
    data() {
      return {
        account: '',
        password: ''
      }
    },
    computed: {
      ...mapState(['userinfo'])
    },
    methods: {
      SignIn() { //登录
        if (!this.account || !this.password || this.account.length < 6 || this.account.length > 12 || this.password < 6 || this.password.length > 12) {
          this.$dialog.alert({
            title: '重要提醒',
            message: '请输入6-12位字符账户或密码',
            lockScroll: false,
          });
          return;
        }
        this.$store.commit('SETLOAD', true);
        login({
          username: this.account,
          password: this.password,
          domain: localStorage.agent || 'hl66899.com',
        }).then((resp) => {
          this.$store.commit('SETLOAD', false);
          if (resp.code && resp.code != 0) {
            this.$dialog.alert({
              title: '重要提醒',
              message: resp.message,
              lockScroll: false,
            });
            return;
          } else {
            let _this = this;
            this.$toast.success({
              message: '登陆成功',
              duration: 2000,
              onClose() {
                let encrypt = new Object();
                encrypt.account = _this.account;
                encrypt.password = _this.password;
                let userInfo = JSON.stringify(encrypt);
                let encryptAfter = encryptAES(userInfo);
                resp.data.para = 'http://ds66668.com?para=' + encryptAfter;
                resp.data.a = _this.account;
                resp.data.b = _this.password;
                _this.$store.commit(Types.SETINFO, resp.data);
                _this.$router.push('/');
              }
            });
          }
        }).catch((err) => {
          console.log(err);
        });
      }
    }
  }
</script>

<style lang="less">
  .land-bg {
    background: url("../../static/img/big_bg@2x.png") no-repeat center center/cover;
  }

  .land-box {
    .logo-box {
      margin-bottom: .33rem;

      img {
        height: .47rem;
      }
    }

    .land-group {
      padding: 0 .43rem;

      i {
        color: #4d6a8d;
        top: 50%;
        left: .18rem;
        transform: translate(0, -50%);
      }

      input {
        height: .5rem;
        line-height: .5rem;
        background-color: #ffffff;
        border-radius: .05rem;
        padding: 0 .1rem 0 .6rem;
      }
    }

    .land-btn {
      padding: 0 .43rem;

      button {
        background-color: #3c6497;
        height: .5rem;
        line-height: .5rem;
        margin-top: .45rem;
        border-radius: .05rem;
      }
    }
  }
</style>

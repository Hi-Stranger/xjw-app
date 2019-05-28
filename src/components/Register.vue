<template>
  <div class="main-box register-box">
    <van-nav-bar title="用户注册"></van-nav-bar>
    <div class="register-in">
      <van-cell-group>
        <van-field
          v-model="InAccount"
          required
          clearable
          label="用户名"
          placeholder="6-12个英文和数字组成"
        />
        <van-field
          v-model="InPassword"
          type="password"
          label="密码"
          placeholder="6-20个任意字符组成"
          required
        />
        <van-field
          v-model="ReInPassword"
          type="password"
          label="确认密码"
          placeholder="6-20个任意字符组成"
          required
        />
        <van-field
          v-model="InMoneyPassword"
          type="password"
          label="提款密码"
          placeholder="提款认证必须，请务必记住"
          required
        />
        <van-field
          v-model="InName"
          label="真实姓名"
          placeholder="名字必须与您的银行户口所用名字相同"
        />
        <van-field
          v-model="InTel"
          label="手机号码"
          placeholder="请输入手机号码"
        />
        <van-field
          v-model="InWx"
          label="微信号码"
          placeholder="请填写微信号"
        />
      </van-cell-group>
    </div>
    <div class="border-box pad-l10 pad-r10 text-center register-btn">
      <p @click="HandleRegister" class="colorWhite font20 font21">注册</p>
    </div>
  </div>
</template>

<script>
  import {registerIn} from '../api';

  export default {
    name: "Register",
    data() {
      return {
        checked: true,
        InAccount: '',  //账号
        InPassword: '', //密码
        ReInPassword: '', //确认密码
        InMoneyPassword: '',  //取款密码
        InName: '', //真实姓名
        InTel: '', //电话号码
        InWx: '', //微信号码
      }
    },
    created() {
      this.$nextTick(() => {
        let _url = (window.location.host).split(".");
        localStorage.agent = (_url[0]).toLocaleLowerCase() == 'www' ? _url[1] + ".com" : _url[0] + ".com";
      });
    },
    methods: {
      HandleRegister() { //注册
        let msg = '';
        if ((/[\u4E00-\u9FA5\uF900-\uFA2D]/.test(this.InAccount)) || this.InAccount.length < 6 || this.InAccount.length > 12) {
          msg = '会员账号为6-12位的数字、字母或其组合';
        } else if (!(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$/.test(this.InPassword)) || this.InPassword.length < 6 || this.InPassword.length > 12) {
          msg = '会员密码为6-12位的数字和字母组成的密码';
        } else if (this.ReInPassword != this.InPassword) {
          msg = '两次密码不一致';
        } else if (!this.InMoneyPassword) {
          msg = '请输入取款密码';
        } else if (!this.checked) {
          msg = '请同意注册协议';
        }
        if (msg) {
          this.$dialog.alert({
            title: '重要提醒',
            message: msg,
            lockScroll: false,
          });
          return;
        }
        registerIn({
          username: this.InAccount,
          password: this.InPassword,
          nickname: this.InName,
          withdrawal_password: this.InMoneyPassword,
          wechat: this.InWx,
          phone: this.InTel,
          domain: localStorage.agent,
        }).then((resp) => {
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
              message: resp.message,
              duration: 2000,
              onClose() {
                _this.$router.push('/download');
              }
            });
          }
        });
      },
      scrollTo0() {  //滚动条到顶部
        this.$refs.scrollTo.scroll(0, 0);
      }
    }
  }
</script>

<style lang="less">
  .register-box {
    .van-nav-bar {
      background-color: #192859;

      .van-nav-bar__title {
        color: #ffffff;
      }
    }

    .van-cell-group {
      background-color: unset;
    }

    .van-cell {
      margin: 0.05rem 0;
      font-size: .12rem;
    }

    .register-btn {
      margin-top: .3rem;

      p {
        background-color: #416183;
        line-height: .5rem;
        border-radius: .05rem;

        &:active {
          opacity: .8;
        }
      }
    }
  }
</style>

<template>
  <div class="box main-box">
    <Head>用户注册</Head>
    <div class="register-box">
      <div class="register-group border-box font14">
        <div class="flex items-center group-one backgroundWhite mar-t10">
          <p class="colorBlack"><font>*</font>会员账号</p>
          <input v-model="InAccount" class="colorGray flex1 border-box pad-r10" type="number"
                 placeholder="6-12位的数字、字母或其组合">
        </div>
        <div class="flex items-center group-one backgroundWhite mar-t10">
          <p class="colorBlack"><font>*</font>会员密码</p>
          <input v-model="InPassword" class="colorGray flex1 border-box pad-r10" type="password"
                 placeholder="6-12位数字和字母组成的密码">
        </div>
        <div class="flex items-center group-one backgroundWhite mar-t10">
          <p class="colorBlack"><font>*</font>确认密码</p>
          <input v-model="ReInPassword" class="colorGray flex1 border-box pad-r10" type="password"
                 placeholder="请再次输入密码">
        </div>
        <div class="flex items-center group-one backgroundWhite mar-t10">
          <p class="colorBlack"><font>*</font>取款密码</p>
          <input v-model="InMoneyPassword" class="colorGray flex1 border-box pad-r10" type="password"
                 placeholder="请设置您的取款密码，次密码务必牢记">
        </div>
        <div class="flex items-center group-one backgroundWhite mar-t10">
          <p class="colorBlack"><font class="visibility-hidden">*</font>真实姓名</p>
          <input v-model="InName" class="colorGray flex1 border-box pad-r10" type="text"
                 placeholder="真实姓名必须与银行卡用户一致">
        </div>
        <div class="flex items-center group-one backgroundWhite mar-t10">
          <p class="colorBlack"><font class="visibility-hidden">*</font>手机号码</p>
          <input v-model="InName" class="colorGray flex1 border-box pad-r10" type="text"
                 placeholder="请输入手机号码">
        </div>
        <div class="flex items-center group-one backgroundWhite mar-t10">
          <p class="colorBlack"><font class="visibility-hidden">*</font>微信号码</p>
          <input v-model="InName" class="colorGray flex1 border-box pad-r10" type="text"
                 placeholder="请填写微信号码">
        </div>
        <div class="flex items-center mar-t10">
          <van-checkbox class="font12" v-model="checked" :shape="'square'">
            我已年满18岁，且同意本站用户
            <u>注册协议</u>
          </van-checkbox>
        </div>
        <div @click="HandleRegister" class="register-btn colorWhite flex items-center mar-t10 opacity8">
          <button class="margin-auto">立即注册</button>
        </div>
        <div class="text-center font12">
          已有鼎盛国际账号？
          <router-link to="/land" tag="span" style="color: #357FD9;">立即登录</router-link>
        </div>
      </div>
    </div>
    <Foot v-show="footshow"></Foot>
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
        windowsize: '', //窗口大小
        footshow: true,
        fn: null,
      }
    },
    created() {
      this.$nextTick(() => {
        let _this = this;
        this.windowsize = window.innerHeight;
        this.fn = function () {
          if (_this.windowsize != window.innerHeight) {
            _this.footshow = false;
          } else {
            _this.footshow = true;
          }
        };
        window.addEventListener('resize', this.fn);
        // let _url = (window.location.host).split(".");
        // localStorage.agent = (_url[0]).toLocaleLowerCase() == 'www' ? _url[1] + ".com" : _url[0] + ".com";
        localStorage.agent = 'hl66899.com';
      });
    },
    destroyed() {
      window.removeEventListener('resize', this.fn);
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
    .register-group {
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
    }

    .van-checkbox {
      display: flex;
      align-items: center;
      justify-content: space-between;

      u {
        color: #E53E39;
      }
    }

    .van-checkbox__icon {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .van-checkbox__icon .van-icon {
      width: .14rem;
      height: .14rem;
      font-size: .12rem;
      display: flex;
      align-items: center;
    }

    .register-btn {
      margin-top: .17rem;
      margin-bottom: .12rem;
      background-color: #405F85;
      line-height: .49rem;
      height: .49rem;
      border-radius: .1rem;
    }
  }
</style>

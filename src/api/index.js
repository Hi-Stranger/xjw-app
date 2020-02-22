import axios from "axios";
import Vue from "vue";
//增加默认请求路径
axios.defaults.baseURL = "http://hl66899.com";
axios.interceptors.response.use((res) => {
  if (res.data) return res.data;
  return res; //在这里统一拦截结果
});
//获取平台配置
export let getconfigure = (str) => {
  return axios.post("/get_platform_config", {
    'domain': str,
  });
};
//获取短信验证码
export let getMsgCode = (data) => {
  return axios.post("/createMobileCode", data);
};
//短信验证码注册
export let registerSms = (data) => {
  return axios.post("/registerSms", data);
};
//注册
export let registerIn = (data) => {
  return axios.post("/register", data);
};

//登陆
export let login = (data) => {
  return axios.post("/login", data);
};

//修改密码
export let repassword = (data, token) => {
  return axios.post("/api/modify_password", data, {
    headers: token
  });
};




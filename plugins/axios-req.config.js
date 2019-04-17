/**
 * num : Number
 * str: String
 * bool: Boolean
 * arr: Array
 * obj: Object
 */
import Vue from 'vue';
class RequestConfig {
  constructor() {

  }
  /** 
   * 登录接口
   * @method login
   * @param { userId : num, password : num }  用户名, 用户密码
   * @returns {}
  */
  login({ userId, password }) {
    return {
      url: 'login',
      methods: 'post',
      data: { userId, password }
    }
  }
}

let reqConfig = new RequestConfig()


export default ({ app }) => {
  Vue.prototype.$reqConfig = app.$reqConfig = reqConfig
}
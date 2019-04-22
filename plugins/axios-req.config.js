import Vue from 'vue';
/**
 * num : Number
 * str: String
 * bool: Boolean
 * arr: Array
 * obj: Object
 */
class RequestConfigs {
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

export default ({ app }) => {
  Vue.prototype.$reqConfigs = app.$reqConfigs = new RequestConfigs()
}
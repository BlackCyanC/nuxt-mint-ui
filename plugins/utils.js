import Vue from 'vue';
/**
 * num : Number
 * str: String
 * bool: Boolean
 * arr: Array
 * obj: Object
 */
class Utils {
  constructor() {

  }
  /**
   * 数组根据数组对象中的某个属性值进行排序的方法
   * 使用例子：newArray.sort(sortBy('number',false)) //表示根据number属性降序排列;若第二个参数不传递，默认表示升序排序
   * @method sortBy
   * @param { attr: str, rev: bool } { 排序属性,排序方式: true ↑ false ↓ }
   * @retunrs function
   */
  sortBy({ attr, rev = 1 }) {
    rev = (rev) ? 1 : -1;
    return function (a, b) {
      a = a[attr]
      b = b[attr]
      if (a < b) {
        return rev * -1;
      }
      if (a > b) {
        return rev * 1;
      }
      return 0;
    }
  }
  /**
   * 设置本地缓存
   * @param { key: str , val: any } 
   * @retunrs true: bool
   */
  setSto({ key, val }) {
    localStorage.setItem(key, JSON.stringify(val))
    return true
  }
  /**
   * 读取本地缓存
   * @param key: str
   * @retunrs *: any
   */
  getSto(key) {
    return JSON.parse(localStorage.getItem(key))
  }
  /**
   * 删除本地缓存
   * @param key: str
   * @returns {}
   */
  deleteSto(key) {
    localStorage.removeItem(key)
    return this
  }
  /**
   * 格式化数据
   * @param val:num
   * @returns str
   */
  // 将数字过滤为每三位逗号隔开
  tostr3(val) {
    return parseFloat(val).toLocaleString()
  }
  // 将数字保留两位小数
  tostr2(val) {
    return val.toFixed(2)
  }
  // 将数字过滤为每三位逗号间隔并保留两位小数
  tostr32(val) {
    return val.toFixed(2).replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,')
  }
}

export default ({ app }) => {
  Vue.prototype.$utils = app.$utils = new Utils()
}
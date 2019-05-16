import Vue from 'vue'

/**
 * num : Number
 * str: String
 * bool: Boolean
 * arr: Array
 * obj: Object
 */
class Utils {
  constructor() {}

  /**
   * 数组根据数组对象中的某个属性值进行排序的方法
   * 使用例子：newArray.sort(sortBy('number',false)) //表示根据number属性降序排列;若第二个参数不传递，默认表示升序排序
   * @method sortBy
   * @param { attr: str, rev: bool } { 排序属性,排序方式: true ↑ false ↓ }
   * @retunrs function
   */
  sortBy({ attr, rev = 1 }) {
    rev = rev ? 1 : -1
    return function(a, b) {
      a = a[attr]
      b = b[attr]
      if (a < b) {
        return rev * -1
      }
      if (a > b) {
        return rev * 1
      }
      return 0
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

  /**
   * 隐藏手机中间/后四位
   */
  phoneHide(tel, type) {
    tel = '' + tel
    let phone
    if (type == 'mid') {
      phone = tel.replace(tel.substring(3, 7), '****')
    } else if (type == 'end') {
      phone = tel.replace(tel.substring(7, 11), '****')
    }
    return phone
  }

  // 获取当前的日期时间 格式“yyyy-MM-dd HH:MM:SS”
  getNowFormatDate() {
    var date = new Date()
    var seperator1 = '-'
    var seperator2 = ':'
    var month = date.getMonth() + 1
    var strDate = date.getDate()
    if (month >= 1 && month <= 9) {
      month = '0' + month
    }
    if (strDate >= 0 && strDate <= 9) {
      strDate = '0' + strDate
    }
    var currentdate =
      date.getFullYear() +
      seperator1 +
      month +
      seperator1 +
      strDate +
      ' ' +
      date.getHours() +
      seperator2 +
      date.getMinutes() +
      seperator2 +
      date.getSeconds()
    return currentdate
  }

  // 日期转字符串
  dateToString(date) {
    var year = date.getFullYear()
    var month = (date.getMonth() + 1).toString()
    var day = date.getDate().toString()
    if (month.length == 1) {
      month = '0' + month
    }
    if (day.length == 1) {
      day = '0' + day
    }
    var dateTime = year + '-' + month + '-' + day
    return dateTime
  }

  // 字符串转日期
  stringToDate(dateStr, separator) {
    if (!separator) {
      separator = '-'
    }
    var dateArr = dateStr.split(separator)
    var year = parseInt(dateArr[0])
    var month
    //处理月份为04这样的情况
    if (dateArr[1].indexOf('0') == 0) {
      month = parseInt(dateArr[1].substring(1))
    } else {
      month = parseInt(dateArr[1])
    }
    var day = parseInt(dateArr[2])
    var date = new Date(year, month - 1, day)
    return date
  }

  catchNull(root, next, defaultParam) {
    let val = null
    let keys = []
    keys = next.split('.')
    if (root) {
      for (let i = 0; i < keys.length; i++) {
        let current = root[keys[i]]
        if (current) {
          root = val = current
        } else {
          val = defaultParam
        }
      }
    } else {
      val = defaultParam
    }
    return val
  }

  clearSuffix(str) {
    let newStr = null
    if (
      str
        .split('')
        .reverse()
        .join('')
        .indexOf('.') !== -1
    ) {
      newStr = str
        .split('')
        .reverse()
        .join('')
        .split('.')[1]
        .split('')
        .reverse()
        .join('')
    } else {
      newStr = str
    }
    return newStr
  }
  // 递归
  getById(Data, id) {
    var Deep, T, F
    for (F = Data.length; F; ) {
      T = Data[--F]
      if (id == T.value) return T
      if (T.children) {
        Deep = this.getById(T.children, id)
        if (Deep) return Deep
      }
    }
  }
}

export default ({ app }) => {
  Vue.prototype.$utils = app.$utils = new Utils()
}

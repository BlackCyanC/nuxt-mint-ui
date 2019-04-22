/**
 * num : Number
 * str: String
 * bool: Boolean
 * arr: Array
 * obj: Object
 */
class HeadConfigs {
  constructor() { }
  // 首页
  index() {
    return {
      title: '首页',
      meta: [
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  }
}


export default ({ app }) => {
  app.$heads = new HeadConfigs()
}
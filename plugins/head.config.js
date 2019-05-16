/**
 * num : Number
 * str: String
 * bool: Boolean
 * arr: Array
 * obj: Object
 */
class HeadConfigs {
  constructor() {}

  /**
   * 通用生成 head方法
   * @method base
   * @param { title: str , description: str, keywords: str } 标题, 描述, 关键字
   * @returns {{title: *, meta: *[]}}
   */
  base({ title, description, keywords }) {
    return {
      title,
      meta: [
        { hid: 'description', name: 'description', content: description },
        { hid: 'keywords', name: 'keywords', content: keywords },
      ],
    }
  }

  /**
   * 静态 head
   * @method static
   * @param route
   * @returns {{title: string}}
   */
  static(route) {
    let pageName = '',
      now = new Date().getTime()
    switch (route.path) {
      default:
        pageName = 'Nuxt'
        break
    }
    return {
      title: `${pageName}-Vue`,
    }
  }
}

export default ({ app }) => {
  app.$heads = new HeadConfigs()
}

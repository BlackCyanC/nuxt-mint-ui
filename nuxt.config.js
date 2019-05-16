module.exports = {
  // 模式: 服务器端渲染
  mode: 'universal',
  env: {
    baseUrl: process.env.NODE_ENV == 'development' ? '/api/' : '',
  },
  // 默认 head
  head: {
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0,minimum-scale=1.0,user-scalable=0',
      },
      { name: 'author', content: 'BlackCyan' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [{ src: '/js/flexible.js', type: 'text/javascript', charset: 'utf-8' }],
  },
  // 自定义 router
  router: {
    // 默认中间件
    middleware: 'default',
  },
  // 自定义 loading
  loading: {
    css: false,
  },
  // 全局样式
  css: [
    'vant/lib/index.css',
    '~/assets/scss/base.scss',
    // test
    'mint-ui/lib/style.css',
  ],
  // 插件
  plugins: [
    { src: '@/plugins/vant-ui' },
    { src: '@/plugins/axios' },
    { src: '@/plugins/axios-req.config' },
    { src: '@/plugins/head.config' },
    { src: '@/plugins/utils' },
    // test
    { src: '@/plugins/mint-ui' },
    { src: '@/plugins/font-awesome' },
  ],
  modules: ['@nuxtjs/axios'],
  // nuxt.axios
  axios: {
    proxy: true,
    prefix: '/api/', // baseUrl
  },
  // axios 代理
  proxy: {
    '/api/': {
      target: 'http://www.baidu.com', // 代理地址
      changeOrigin: true,
      pathRewrite: {
        '^/api': 'api',
      },
    },
  },
  build: {
    transpile: [/^vant-ui/],
    postcss: {
      plugins: {
        'postcss-pxtorem': {
          // 屏幕大小 / 10
          rootValue: 37.5,
          propList: ['*', '!border*'],
        },
        autoprefixer: {
          browsers: ['Android >= 4.0', 'iOS >= 7'],
        },
      },
    },
    // webpack.config
    extend(config, ctx) {},
  },
  // vue.config
  vue: {
    config: {
      devtools: true,
      // 生产环境去除 map 文件
      productionSourceMap: true,
      // 生产环境提示
      productionTip: false,
    },
  },
}

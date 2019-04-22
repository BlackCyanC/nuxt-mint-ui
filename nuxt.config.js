module.exports = {
  // 模式: 服务器端渲染
  mode: 'universal',
  env: {
    baseUrl: process.env.NODE_ENV == 'development' ? '/api' : ''
  },
  // 默认head
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0,minimum-scale=1.0,user-scalable=0' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  // 自定义 loading
  loading: {
    css: false
  },
  // 全局样式
  css: [
    'mint-ui/lib/style.css',
    '~/assets/less/base.less'
  ],
  // 插件
  plugins: [
    { src: '@/plugins/mint-ui' },
    { src: '@/plugins/axios' },
    { src: '@/plugins/axios-req.config' },
    { src: '@/plugins/head.config.js' },
    { src: '@/plugins/font-awesome' },
  ],
  modules: [
    '@nuxtjs/axios',
  ],
  // nuxt.axios
  axios: {
    proxy: true,
    prefix: process.env.NODE_ENV == 'development' ? '/api2' : '', // baseURL
    credentials: true,
  },
  // axios代理
  proxy: {
    '/api/': {
      target: 'http://school.test.51jiaoxi.com/', // 代理地址
      changeOrigin: true,
      pathRewrite: {
        '^/api': ''
      },
    },
  },
  build: {
    transpile: [/^mint-ui/],
    // webpack.config
    extend(config, ctx) {
    }
  }
}

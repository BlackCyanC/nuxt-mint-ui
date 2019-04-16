const pkg = require('./package')
module.exports = {
  // 模式: 服务器端渲染
  mode: 'universal',
  // 默认head
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  // 自定义 loading
  loading: { color: '#fff' },
  // 全局样式
  css: [
    'mint-ui/lib/style.css',
    '~/assets/less/normalize.less',
    '~/assets/less/base.less'
  ],
  // 插件
  plugins: [
    '@/plugins/mint-ui',
    '@/plugins/axios',
    '@/plugins/font-awesome'
  ],
  modules: [
    '@nuxtjs/axios',
  ],
  // nuxt.axios
  axios: {
    proxy: true,
    prefix: '/api', // baseURL
    credentials: true,
  },
  // 代理
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

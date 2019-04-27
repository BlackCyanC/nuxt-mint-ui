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
        ],
        script: [
            { src: '/js/flexible.js', type: 'text/javascript', charset: 'utf-8' }
        ],
    },
    // 自定义 loading
    loading: {
        css: false
    },
    // 全局样式
    css: [
        '~/assets/scss/base.scss'
    ],
    // 插件
    plugins: [
        { src: '@/plugins/vant-ui' },
        { src: '@/plugins/axios' },
        { src: '@/plugins/axios-req.config' },
        { src: '@/plugins/head.config.js' },
    ],
    modules: [
        '@nuxtjs/axios',
    ],
    // nuxt.axios
    axios: {
        proxy: true,
        prefix: process.env.NODE_ENV == 'development' ? '/api' : '', // baseURL
        credentials: true,
    },
    // axios代理
    proxy: {
        '/api/': {
            target: '', // 代理地址
            changeOrigin: true,
            pathRewrite: {
                '^/api': ''
            },
        },
    },
    build: {
        transpile: [/^mint-ui/],
        postcss: [
            require('postcss-pxtorem')({
                rootValue: 37.5,
                propList: ['*']
            })
        ],
        // webpack.config
        extend(config, ctx) {}
    }
}
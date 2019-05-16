import Cookies from 'js-cookie'
let returnLoginStatus = [401, 403]
let returnLoginExcludeRoute = ['/buycart']

export default function(app) {
  let axios = app.$axios
  // axios.defaults.baseURL = ``
  axios.defaults.timeout = 10000
  axios.defaults.headers.common['Content-Type'] = 'application/json'
  axios.defaults.headers.post['Content-Type'] = 'application/json'

  // 请求回调
  axios.onRequest(config => {})
  // 返回回调
  axios.onResponse(res => {})

  // 错误回调
  axios.onError(error => {
    if (!returnLoginExcludeRoute.includes(location.pathname) && returnLoginStatus.includes(error.response.status)) {
      console.log('请先登录')
    }
  })
}

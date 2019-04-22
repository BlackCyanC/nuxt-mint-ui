export default function(app) {
  let axios = app.$axios
  axios.defaults.timeout = 10000
  axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

  // 请求回调
  axios.onRequest(config => {
    console.log('req')
  })
  // 返回回调
  axios.onResponse(res => {
  })

  // 错误回调
  axios.onError(error => {
  })
}

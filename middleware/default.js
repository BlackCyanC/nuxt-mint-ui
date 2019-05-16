// 中间件执行在 asyncData 之前
export default async ({ route, redirect, app }) => {
  // if (['/account'].includes(route.path)) {
  //   let res = await app.$axios({})
  //   if ([403, 401].includes(res.code)) {
  //     redirect(302, '/login')
  //   }
  // }
}

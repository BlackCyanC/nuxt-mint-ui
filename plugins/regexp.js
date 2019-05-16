// 正则
const regPhone = /^1[3456789][0-9]\d{8}$/
const regName = /^[\u2E80-\u9FFF]+$/
const regEmail = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/
const regQQ = /^[1-9]\d{5,11}$/

export { regPhone, regName, regEmail, regQQ }

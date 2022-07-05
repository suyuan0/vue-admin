import { TIME_OUT, TOKEN_VALUE } from '@/utils/constant'
// 获取时间戳
export const getTime = () => {
  localStorage.setItem(TIME_OUT, +new Date())
}

export const timeout = () => {
  const nowDate = +new Date()
  return nowDate - getTime() > TOKEN_VALUE
}

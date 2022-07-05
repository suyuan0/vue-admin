import request from '@/utils/request'

// 获取验证码
export const getCode = () => {
  return request({
    url: '/captcha',
    method: 'GET'
  })
}

// 登录接口
export const login = (data) => {
  return request({
    url: `/login?username=${data.username}&password=${data.password}&code=${data.code}&token=${data.token}`,
    method: 'POST'
  })
}

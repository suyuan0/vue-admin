import request from '@/utils/request'

export const getCode = () => {
  return request({
    url: '/captcha',
    method: 'GET'
  })
}

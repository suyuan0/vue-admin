import request from '@/utils/request'

// 获取用户信息
export const getUserInfo = () => {
  return request({
    url: '/sys/userInfo',
    method: 'GET'
  })
}

// 获取菜单权限
export const getMenuNav = () => {
  return request({
    url: '/sys/menu/nav',
    method: 'GET'
  })
}

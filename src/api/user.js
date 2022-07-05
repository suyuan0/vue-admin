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

// 获取用户列表
export const getUserList = (data) => {
  return request({
    url: '/sys/user/list',
    data,
    method: 'GET'
  })
}
// 获取用户信息
export const getRoleList = (data) => {
  return request({
    url: '/sys/role/list',
    data,
    method: 'GET'
  })
}

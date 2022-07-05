export default {
  path: '/sys/users',
  name: 'sysUsers',
  meta: {
    title: '用户管理',
    icon: '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-78e17ca8=""><path fill="currentColor" d="M628.736 528.896A416 416 0 0 1 928 928H96a415.872 415.872 0 0 1 299.264-399.104L512 704l116.736-175.104zM720 304a208 208 0 1 1-416 0 208 208 0 0 1 416 0z"></path></svg>'
  },
  component: () => import('@/views/user')
}

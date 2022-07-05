import layout from '@/layout'

export default {
  path: '/sys',
  component: layout,
  name: 'sys:user:list',
  redirect: '/sys/users',
  meta: {
    title: '系统管理',
    icon: '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-78e17ca8=""><path fill="currentColor" d="M896 192H128v128h768V192zm0 256H384v128h512V448zm0 256H128v128h768V704zM320 384 128 512l192 128V384z"></path></svg>'
  },
  children: [
    {
      path: '/sys/users',
      name: 'sys:user:list',
      meta: {
        title: '用户管理',
        icon: '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-78e17ca8=""><path fill="currentColor" d="M628.736 528.896A416 416 0 0 1 928 928H96a415.872 415.872 0 0 1 299.264-399.104L512 704l116.736-175.104zM720 304a208 208 0 1 1-416 0 208 208 0 0 1 416 0z"></path></svg>'
      },
      component: () => import('@/views/user')
    }
  ]
}

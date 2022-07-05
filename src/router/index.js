import { createRouter, createWebHashHistory } from 'vue-router'
import layout from '@/layout'
import ditcs from '@/router/modules/sys/ditcs'
import menus from '@/router/modules/sys/menus'
import roles from '@/router/modules/sys/roles'
import users from '@/router/modules/sys/users'
// 共有路由
export const publicRoutes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login')
  },
  {
    path: '/',
    name: 'layout',
    component: layout,
    redirect: '/index',
    children: [
      {
        path: '/index',
        name: 'index',
        meta: {
          title: '首页',
          icon: '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-78e17ca8=""><path fill="currentColor" d="M512 128 128 447.936V896h255.936V640H640v256h255.936V447.936z"></path></svg>'
        },
        component: () => import('@/views/home')
      }
    ]
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/error-page/404')
  },
  {
    path: '/401',
    name: '401',
    component: () => import('@/views/error-page/401')
  }
]

// 私有路由
export const privateRoutes = [users, roles, menus, ditcs]
const router = createRouter({
  history: createWebHashHistory(),
  routes: publicRoutes
})

export default router

// users, roles, menus, ditcs

import { createRouter, createWebHashHistory } from 'vue-router'
import layout from '@/layout'
// 共有路由
const publicRoutes = [
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
          icon: '<el-icon><HomeFilled /></el-icon>'
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
const privateRoutes = [
  {
    path: '/sys',
    name: 'sys',
    component: layout,
    meta: {
      title: '系统管理',
      icon: '<el-icon><Expand /></el-icon>'
    },
    redirect: '/sys/user',
    children: [
      {
        path: '/sys/user',
        name: 'sysUser',
        meta: {
          title: '用户管理',
          icon: '<el-icon><UserFilled /></el-icon>'
        },
        component: () => import('@/views/user')
      },
      {
        path: '/sys/roles',
        name: 'sysRoles',
        meta: {
          title: '角色管理',
          icon: '<el-icon><Grid /></el-icon>'
        },
        component: () => import('@/views/roles')
      },
      {
        path: '/sys/menus',
        name: 'sysMenus',
        meta: {
          title: '菜单管理',
          icon: '<el-icon><Menu /></el-icon>'
        },
        component: () => import('@/views/menus')
      }
    ]
  },
  {
    path: '/dicts',
    name: 'dicts',
    component: layout,
    redirect: '/sys/dicts',
    meta: {
      title: '系统工具',
      icon: '<el-icon><Tools /></el-icon>'
    },
    children: [
      {
        path: '/sys/dicts',
        name: 'sysDicts',
        meta: {
          title: '数字字典',
          icon: '<el-icon><List /></el-icon>'
        },
        component: () => import('@/views/dicts')
      }
    ]
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes: [...publicRoutes, ...privateRoutes]
})

export default router

import router from '@/router'
import store from '@/store'

const whiteList = ['/login']
router.beforeEach(async (to, from, next) => {
  const token = store.getters.token
  const userInfo = store.getters.userInfo
  const menuNav = store.getters.menuNav
  if (token) {
    if (to.path === '/login') {
      next(from.path)
    } else {
      if (!userInfo) {
        await store.dispatch('user/setUserInfo')
      }
      if (!menuNav) {
        await store.dispatch('user/getMenuNav')
      }
      next()
    }
  } else {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
})

import router from '@/router'
import store from '@/store'

const whiteList = ['/login']
router.beforeEach(async (to, from, next) => {
  const token = store.getters.token
  const userInfo = store.getters.hasUserInfo
  const menuNav = store.getters.hasMenuNav
  if (token) {
    if (to.path === '/login') {
      next(from.path)
    } else {
      if (!userInfo) {
        await store.dispatch('user/setUserInfo')
      }
      if (!menuNav) {
        const { nav } = await store.dispatch('user/getMenuNav')
        store.dispatch('menu/setMenuList', nav)
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

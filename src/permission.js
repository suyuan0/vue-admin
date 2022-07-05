import router from '@/router'
import store from '@/store'

const whiteList = ['/login']
router.beforeEach(async (to, from, next) => {
  const token = store.getters.token
  const userInfo = store.getters.hasUserInfo
  const menuNav = store.getters.hasMenuNav
  document.title = to.meta.title
  if (token) {
    if (to.path === '/login') {
      next(from.path)
    } else {
      if (!userInfo) {
        await store.dispatch('user/setUserInfo')
      }
      if (!menuNav) {
        const { authoritys } = await store.dispatch('user/getMenuNav')
        const data = await store.dispatch('menu/setMenuList', authoritys)
        data.forEach((item) => {
          router.addRoute(item)
        })
        return next(to.path)
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

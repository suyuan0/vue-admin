// import router from '@/router'
import { privateRoutes, publicRoutes } from '@/router'

export default {
  namespaced: true,
  state: () => ({
    menus: publicRoutes
  }),
  mutations: {
    setMenuList(state, menu) {
      state.menus = [...publicRoutes, ...menu]
    }
  },
  actions: {
    async setMenuList({ commit }, menu) {
      const result = []
      menu.forEach((menu) => {
        result.push(...privateRoutes.filter((value) => value.name === menu))
      })
      result.push({
        path: '/:catchAll(.*)',
        redirect: '/404'
      })
      console.log(result, '1')
      commit('setMenuList', result)
      return result
    }
  }
}

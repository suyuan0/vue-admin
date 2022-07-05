import router from '@/router'

export default {
  namespaced: true,
  state: () => ({
    menus: []
  }),
  mutations: {
    setMenuList(state, menu) {
      menu.forEach((item) => {
        if (!item.path) {
          item.path = item.children[0].path
        }
      })
      state.menus = menu
      router.addRoute(menu)
    }
  },
  actions: {
    setMenuList({ commit }, menu) {
      commit('setMenuList', menu)
    }
  }
}

import { login } from '@/api/login'
import { setItem, getItem } from '@/utils/storage'
import { TOKEN } from '@/utils/constant'
import { getUserInfo, getMenuNav } from '@/api/user'

export default {
  namespaced: true,
  state: () => ({
    token: getItem(TOKEN) || '',
    userInfo: {},
    menu: {}
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
      setItem(TOKEN, token)
    },
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo
    },
    setMenuNav(state, menu) {
      state.menu = menu
    }
  },
  actions: {
    async userLogin({ commit }, data) {
      await login(data)
    },
    setToken({ commit }, token) {
      commit('setToken', token)
      console.log(token)
    },
    async setUserInfo({ commit }) {
      const data = await getUserInfo()
      commit('setUserInfo', data)
    },
    async getMenuNav({ commit }) {
      const data = await getMenuNav()
      commit('setMenuNav', data)
    }
  }
}

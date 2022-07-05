import { login } from '@/api/login'
import { setItem, getItem } from '@/utils/storage'
import { TOKEN } from '@/utils/constant'
import { getUserInfo, getMenuNav } from '@/api/user'
import router from '@/router'

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
    },
    async setUserInfo({ commit }) {
      const data = await getUserInfo()
      commit('setUserInfo', data)
    },
    async getMenuNav({ commit }) {
      const data = await getMenuNav()
      commit('setMenuNav', data)
    },
    async userLogout({ commit }) {
      commit('setToken', '')
      commit('setUserInfo', {})
      commit('setMenuNav', {})
      router.push('/login')
    }
  }
}

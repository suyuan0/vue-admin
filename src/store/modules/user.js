import { login } from '@/api/login'
import { setItem, getItem } from '@/utils/storage'
import { TOKEN } from '@/utils/constant'

export default {
  namespaced: true,
  state: () => ({
    token: getItem(TOKEN) || ''
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
      setItem(TOKEN, token)
    }
  },
  actions: {
    async userLogin({ commit }, data) {
      await login(data)
      commit('setToken', data.token)
    }
  }
}

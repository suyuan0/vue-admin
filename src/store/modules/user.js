import { login } from '@/api/login'

export default {
  namespaced: true,
  state: () => ({}),
  actions: {
    async userLogin(state, data) {
      await login(data)
    }
  }
}

import { login } from '@/api/login'
import { setItem, getItem } from '@/utils/storage'
import { TOKEN } from '@/utils/constant'

export default {
  namespaced: true,
  state: () => ({
    token: getItem(TOKEN) || ''
  }),
  actions: {
    async userLogin(state, data) {
      await login(data)
      setItem(TOKEN, data.token)
    }
  }
}

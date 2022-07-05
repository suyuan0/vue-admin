import { createStore } from 'vuex'
import user from './modules/user'
import getters from './getters'
import menu from './modules/menu'
import tagsview from './modules/tagsview'

export default createStore({
  modules: {
    user,
    menu,
    tagsview
  },
  getters
})

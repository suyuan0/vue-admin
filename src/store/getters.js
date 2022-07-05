const getters = {
  token: (state) => state.user.token,
  userInfo: (state) => {
    return JSON.stringify(state.user.userInfo) !== '{}'
  },
  menuNav: (state) => {
    return JSON.stringify(state.user.menu) !== '{}'
  }
}

export default getters

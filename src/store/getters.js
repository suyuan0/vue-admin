const getters = {
  token: (state) => state.user.token,
  hasUserInfo: (state) => {
    return JSON.stringify(state.user.userInfo) !== '{}'
  },
  hasMenuNav: (state) => {
    return JSON.stringify(state.user.menu) !== '{}'
  },
  userInfo: (state) => state.user.userInfo
}

export default getters

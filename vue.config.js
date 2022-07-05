const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      [process.env.VUE_APP_API]: {
        target: process.env.VUE_APP_URL,
        changeOrigin: true,
        PathRewrite: {
          ['^' + process.env.VUE_APP_URL]: ''
        }
      }
    }
  }
})

import axios from 'axios'
import { loading } from '@/utils/loading'
import { ElMessage } from 'element-plus'

const instance = axios.create({
  baseURL: 'https://www.markerhub.com/vueadmin-java',
  timeout: 1000
})

// 添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    loading()
    // 在发送请求之前做些什么
    return config
  },
  function (error) {
    // 对请求错误做些什么
    loading().close()
    return Promise.reject(error)
  }
)

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    loading().close()
    const { code, msg, data } = response.data
    if (code === 200) {
      return data
    }
    _showError(msg)
    // 对响应数据做点什么
  },
  function (error) {
    // 对响应错误做点什么
    loading().close()
    const message = error.message
    if (message.includes('Network Error')) {
      _showError('网络错误')
    }
    if (message.includes('timeout')) {
      _showError('网络超时')
    }
    return Promise.reject(error)
  }
)
// 失败提示信息
const _showError = (message) => {
  ElMessage.error(message)
}

// 统一传参
const service = (data) => {
  if (data.method.toLowerCase() === 'get') {
    data.params = data.data || {}
  }
  return instance({
    url: data.url,
    method: data.method
  })
}

export default service

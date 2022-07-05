import axios from 'axios'
import { loading } from '@/utils/loading'

const instance = axios.create({
  baseURL: process.env.VUE_APP_API,
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
    // 对响应数据做点什么
    loading().close()
    return response
  },
  function (error) {
    // 对响应错误做点什么
    loading().close()
    return Promise.reject(error)
  }
)

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

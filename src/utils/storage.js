// 本地存储方案
const storage = window.sessionStorage

// 存储数据
export const setItem = (key, value) => {
  if (typeof value === 'object') {
    storage.setItem(key, JSON.stringify(value))
  } else {
    storage.setItem(key, value)
  }
}

// 获取数据
export const getItem = (key) => {
  const data = storage.getItem(key)
  try {
    return JSON.parse(data)
  } catch {
    return data
  }
}

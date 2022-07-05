// 获取子级路由
const getChildrenRoutes = (routes) => {
  const result = []
  routes.forEach((item) => {
    if (item.children && item.children.length <= 0) {
      result.push(item)
    }
  })
  return result
}

// 获取一级路由
export const filterRoutes = (routes) => {
  const childrenRoutes = getChildrenRoutes(routes)
  const result = routes.filter((item) => {
    return !childrenRoutes.find((route) => {
      return item.path === route.path
    })
  })
  return result
}

// 判断是否为空
const isNull = (data) => {
  if (!data) return true
  if (JSON.stringify(data) === '[]') return true
  if (JSON.stringify(data) === '{}') return true
  return false
}
export const generateMenus = (routes) => {
  const result = []
  routes.forEach((item) => {
    if (isNull(item.meta) && isNull(item.children)) return
    if (isNull(item.meta) && !isNull(item.children)) {
      result.push(...generateMenus(item.children))
      return
    }
    const routePath = item.path
    let route = result.find((item) => item.path === routePath)
    if (!route) {
      route = {
        meta: item.meta,
        path: routePath,
        children: []
      }
    }
    if (item.meta.title && item.meta.icon) {
      result.push(route)
    }
    if (item.children) {
      route.children.push(...generateMenus(item.children))
    }
  })
  return result
}

// 过滤空的children
export const removeChildren = (routes) => {
  routes.forEach((item) => {
    if (item.children && item.children.length <= 0) {
      delete item.children
    }
    if (item.children && item.children.length > 0) {
      removeChildren(item.children)
    }
  })
  return routes
}

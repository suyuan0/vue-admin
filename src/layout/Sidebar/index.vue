<template>
  <div>
    <MenuTree :menu-list='menuList'></MenuTree>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
// import { useStore } from 'vuex'
import { filterRoutes, generateMenus } from '@/utils/route'
import { computed } from 'vue'
import { removeChildren } from '@/utils/util'
import MenuTree from '@/layout/Sidebar/MenuTree'

// const store = useStore()
const router = useRouter()
const menuList = computed(() => {
  const children = filterRoutes(router.getRoutes())
  return removeChildren(generateMenus(children))
  // return removeChildren(store.getters.menus)
})
</script>

<style scoped>

</style>

<template>
  <div>
    <MenuTree :menu-list='menuList'></MenuTree>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { filterRoutes, generateMenus } from '@/utils/route'
import { computed } from 'vue'
import { removeChildren } from '@/utils/util'
import MenuTree from '@/layout/Sidebar/MenuTree'

const router = useRouter()
const menuList = computed(() => {
  const children = filterRoutes(router.getRoutes())
  return removeChildren(generateMenus(children))
})
</script>

<style scoped>

</style>

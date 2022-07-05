<template>
  <div>
    side
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { filterRoutes, generateMenus } from '@/utils/route'
import { computed } from 'vue'
import { removeChildren } from '@/utils/util'

const router = useRouter()
const menuList = computed(() => {
  const children = filterRoutes(router.getRoutes())
  return removeChildren(generateMenus(children))
})
console.log(menuList)
</script>

<style scoped>

</style>

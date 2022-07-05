<template>
  <div>
    side
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { filterRoutes, generateMenus } from '@/utils/route'

const router = useRouter()
console.log(generateMenus(filterRoutes(router.getRoutes())))
</script>

<style scoped>

</style>

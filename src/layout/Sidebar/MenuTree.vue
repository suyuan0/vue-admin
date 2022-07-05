<template>
  <el-menu :default-active='$route.path' active-text-color='#ffd04b' background-color='#545c64' router text-color='#fff'
           unique-opened>
    <MenuItem v-for='item in menuList' :key='item.path' :item='item'></MenuItem>
  </el-menu>
</template>

<script setup>
import { defineProps } from 'vue'
import MenuItem from '@/layout/Sidebar/MenuItem'

defineProps({
  menuList: {
    type: Array,
    default: () => []
  }
})
</script>

<style scoped>

</style>

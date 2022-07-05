<template>
  <el-menu-item v-if='!item.children' :index='item.path'>
    <el-icon v-html='item.meta.icon'></el-icon>
    <span>{{ item.meta.title }}</span>
  </el-menu-item>
  <template v-if='item.children && item.children.length>0'>
    <el-sub-menu :index='item.path'>
      <template #title>
        <el-icon v-html='item.meta.icon'></el-icon>
        <span>{{ item.meta.title }}</span>
      </template>
      <MenuItem v-for='child in item.children' :key='child.path' :item='child'></MenuItem>
    </el-sub-menu>

  </template>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  item: {
    type: Object,
    default: () => {
    }
  }
})
</script>

<style scoped>

</style>

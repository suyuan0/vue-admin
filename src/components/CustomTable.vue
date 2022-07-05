<template>
  <el-table :data='data' border>
    <el-table-column v-for='(item,i) in cols' :key='i' :label='item.title' :prop='item.name'>
      <!--      <template v-slot='{row}'>-->
      <!--        <slot></slot>-->
      <!--      </template>-->
    </el-table-column>
  </el-table>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  data: {
    type: Array,
    default: () => []
  },
  cols: {
    type: Array,
    default: () => []
  }
})
</script>

<style scoped>

</style>

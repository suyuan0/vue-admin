<template>
  <el-table :data='data' border>
    <el-table-column v-for='(item,i) in cols' :key='i' :label='item.title' :prop='item.name'>
      <template v-if='item.slot' v-slot='{row}'>
        <slot :name='item.slot' :row='row'>
        </slot>
      </template>
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
.el-table {
  overflow: auto;
  margin-top: 70px;
}
</style>

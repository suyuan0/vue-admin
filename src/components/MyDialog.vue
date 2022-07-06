<template>
  <el-dialog :model-value='true' :title='title' :width='width'>
    <slot></slot>
    <template #footer>
      <span class='dialog-footer'>
        <el-button>取消</el-button>
        <el-button type='primary'>确定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  title: String,
  width: String
})
</script>

<style scoped>

</style>

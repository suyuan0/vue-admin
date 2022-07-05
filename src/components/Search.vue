<template>
  <div class='search-container'>
    <el-input placeholder='名称'></el-input>
    <el-button size='large' @click='search'>搜索</el-button>
    <el-button size='large' type='primary' @click='newAdd'>新增</el-button>
    <el-button disabled size='large' type='danger' @click='batchDelete'>批量删除</el-button>
  </div>
</template>

<script setup>
import { defineEmits } from 'vue'

const emits = defineEmits(['search', 'newAdd', 'batchDelete'])
const search = () => {
  console.log('搜索')
  emits('search')
}
const newAdd = () => {
  emits('newAdd')
  console.log('新增')
}
const batchDelete = () => {
  console.log('批量删除')
  emits('batchDelete')
}
</script>

<style lang='scss' scoped>
.search-container {
  height: 40px;
  margin-bottom: 20px;

  .el-input {
    height: 100%;
    width: 217px;
    margin-right: 20px;
  }
}
</style>

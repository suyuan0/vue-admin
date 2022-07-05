<template>
  <div class='navbar'>
    <div class='title'>
      <strong>VueAdmin后台管理系统</strong>
      <avatar></avatar>
    </div>
    <div class='tagsview'>
      123
    </div>
  </div>
</template>

<script setup>

import Avatar from '@/components/avatar'
</script>

<style lang='scss' scoped>
.navbar {
  position: relative;

  .title {
    background: #17b3a3;
    height: 55px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .tagsview {
    color: #333;
    border-bottom: 1px solid #e4e7ed;
    height: 40px;
  }
}
</style>

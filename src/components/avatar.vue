<template>
  <el-dropdown @command='handleCommand'>
    <span class='el-dropdown-link'>
      <el-avatar :src='userInfo.avatar'></el-avatar>
      {{ userInfo.username }}
      <el-icon>
        <ArrowDown />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-item command='profile'>个人中心</el-dropdown-item>
      <el-dropdown-item command='exit'>退出</el-dropdown-item>
    </template>
  </el-dropdown>
</template>

<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'
import { ArrowDown } from '@element-plus/icons-vue'

const store = useStore()
const userInfo = computed(() => {
  return {
    avatar: store.getters.userInfo.avatar,
    username: store.getters.userInfo.username
  }
})
const handleCommand = (command) => {
  switch (command) {
    case 'exit':
      handleExit()
      break
  }
}
// 用户退出
const handleExit = () => {
  store.dispatch('user/userLogout')
}

</script>

<style lang='scss' scoped>
.el-dropdown {
  cursor: pointer;
  position: absolute;
  right: 10px;

  .el-dropdown-link {
    .el-avatar {
      vertical-align: middle;
      margin-right: 5px;
    }
  }
}
</style>

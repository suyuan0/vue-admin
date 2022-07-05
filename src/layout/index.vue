<template>
  <div class='app-main-container'>
    <SideBar class='sidebar-container'></SideBar>
    <div class='main'>
      <NavBar class='navbar-container'></NavBar>
      <Main class='app-main'></Main>
    </div>
  </div>
</template>

<script setup>
import SideBar from './Sidebar'
import NavBar from '@/layout/NavBar'
import Main from '@/layout/Main'
</script>

<style lang='scss' scoped>
.app-main-container {
  display: flex;
  height: 100%;

  .sidebar-container {
    width: 200px;
    background: #545c64;
    height: 100%;
  }

  .main {
    height: 100%;
    flex: 1;

    .navbar-container {
      height: 90px;
    }

    .app-main {
      height: calc(100vh - 90px);
      padding: 20px;
    }
  }
}
</style>

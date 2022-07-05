<template>
  <div class='app-main-container'>
    <SideBar></SideBar>
    <div class='main'>
      <NavBar></NavBar>
      <Main></Main>
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

}
</style>

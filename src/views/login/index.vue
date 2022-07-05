<template>
  <div class='login-container'>
    <div class='login-form'>
      <el-form label-width='100px'>
        <el-form-item label='用户名'>
          <el-input v-model='loginModel.username' placeholder='请输入用户名' />
        </el-form-item>
        <el-form-item label='密码'>
          <el-input v-model='loginModel.password' placeholder='请输入密码' />
        </el-form-item>
        <el-form-item label='验证码'>
          <el-input v-model='loginModel.code' placeholder='请输入验证码' type='password' />
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { getCode } from '@/api/login'
// 获取图形验证码
const getCaptcha = () => {
  getCode()
}
getCaptcha()
// 定义登录数据模型
const loginModel = reactive({
  username: 'test',
  password: '1234567',
  code: ''
})
</script>

<style lang='scss' scoped>
.login-container {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .login-form {
    width: 400px;
  }
}
</style>

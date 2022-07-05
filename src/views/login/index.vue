<template>
  <div class="login-container">
    <div class="login-form">
      <el-form
        ref="formRef"
        :model="loginModel"
        :rules="rules"
        label-width="100px"
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model="loginModel.username" placeholder="请输入用户名" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            v-model="loginModel.password"
            placeholder="请输入密码"
            type="password"
          />
        </el-form-item>
        <el-form-item class="imgCode" label="验证码" prop="code">
          <el-input v-model="loginModel.code" placeholder="请输入验证码" />
          <img :src="imgCode" alt="" @click="getCaptcha" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleLogin">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { getCode } from '@/api/login'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { getUserInfo, getMenuNav } from '@/api/user'

const router = useRouter()
const store = useStore()
// 表单ref
const formRef = ref(null)
// 表单验证规则
const rules = {
  username: [
    {
      required: true,
      message: '请输入用户名',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '请输入密码',
      trigger: 'blur'
    }
  ],
  code: [
    {
      required: true,
      message: '请输入验证码',
      trigger: 'blur'
    },
    {
      required: true,
      min: 1,
      max: 5,
      message: '验证码为5个字符',
      trigger: 'blur'
    }
  ]
}
// 图形验证码
const imgCode = ref('')
// 定义登录数据模型
const loginModel = reactive({
  username: 'test',
  password: '1234567',
  code: '',
  token: ''
})
// 获取图形验证码
const getCaptcha = async () => {
  try {
    const { captchaImg, token } = await getCode()
    imgCode.value = captchaImg
    loginModel.token = token
  } catch (e) {
    console.log(e)
  }
}
getCaptcha()

// 登录
const handleLogin = async () => {
  try {
    await formRef.value.validate()
    await store.dispatch('user/userLogin', loginModel)
    router.push('/')
    await getUserInfo()
    await getMenuNav()
  } catch (e) {
    console.log(e)
  }
}

</script>

<style lang="scss" scoped>
.login-container {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .login-form {
    width: 400px;

    .imgCode {
      display: flex;

      .el-input {
        width: 180px;
      }
    }
  }
}
</style>

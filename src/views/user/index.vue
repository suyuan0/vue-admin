<template>
  <div>
    <Search></Search>
    <CustomTable :cols='cols' :data='tableList'>
      <template v-slot:avatar='{row:{avatar}}'>
        <el-avatar :src='avatar'></el-avatar>
      </template>
      <template v-slot:tag='{row:{roles}}'>
        <el-tag v-for='item in roles' :key='item.id' style='margin-right: 5px' type='info'>{{ item.name }}</el-tag>
      </template>
      <template v-slot:status='{row:{statu}}'>
        <el-tag :type='statu===1?"success":"danger"'>
          {{ statu === 1 ? '正常' : '不正常' }}
        </el-tag>
      </template>
      <template v-slot:actions>
        <el-button link type='primary'>分配角色</el-button>
        |
        <el-button link type='primary'>重置密码</el-button>
        |
        <el-button link type='primary'>编辑</el-button>
        |
        <el-button link type='primary'>删除</el-button>
      </template>
    </CustomTable>
    <MyDialog title='用户信息' width='500px'>
      <MyForm></MyForm>
    </MyDialog>
  </div>
</template>

<script setup>
import Search from '@/components/Search'
import CustomTable from '@/components/CustomTable'
import { reactive, ref } from 'vue'
import { getUserList } from '@/api/user'
import MyDialog from '@/components/MyDialog'
import MyForm from '@/components/MyForm'
// 表格列表请求参数
const userListModel = reactive({
  creent: 1,
  size: 10
})
// 表格数据
const tableList = ref([])
// 条数
const tota = ref(0)
// 获取用户列表
const handleGetUserList = async () => {
  const {
    records,
    total
  } = await getUserList(userListModel)
  tableList.value = records
  tota.value = total
}
handleGetUserList()
// 表格列
const cols = [
  {
    title: '头像',
    slot: 'avatar'
  },
  {
    title: '用户名',
    name: 'username'
  },
  {
    title: '角色名称',
    slot: 'tag'
  },
  {
    title: '邮箱',
    name: 'email'
  },
  {
    title: '手机号'
  },
  {
    title: '状态',
    slot: 'status'
  },
  {
    title: '创建时间',
    name: 'created'
  },
  {
    title: '操作',
    slot: 'actions'
  }
]
</script>

<style scoped>

</style>

<template>
  <div>
    <Search></Search>
    <CustomTable :cols='cols' :data='tableList'></CustomTable>
  </div>
</template>

<script setup>
import Search from '@/components/Search'
import CustomTable from '@/components/CustomTable'
import { reactive, ref } from 'vue'
import { getUserList } from '@/api/user'
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
    name: 'avatar'
  },
  {
    title: '用户名',
    name: 'username'
  },
  {
    title: '角色名称',
    name: 'roles'
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
    name: 'status'
  },
  {
    title: '创建时间',
    name: 'created'
  },
  {
    title: '操作'
  }
]
</script>

<style scoped>

</style>

<template>
  <div>
    <Search></Search>
    <CustomTable :cols='cols' :data='tableList'>
      <template v-slot:status='{row:{statu}}'>
        <el-tag :type='statu===1?"success":"danger"'>
          {{ statu === 1 ? '正常' : '不正常' }}
        </el-tag>
      </template>
      <template v-slot:actions>
        <el-button link type='primary'>分享权限</el-button>
        |
        <el-button link type='primary'>编辑</el-button>
        |
        <el-button link type='primary'>删除</el-button>
      </template>
    </CustomTable>
  </div>
</template>

<script setup>
import Search from '@/components/Search'
import { getRoleList } from '@/api/user'
import { reactive, ref } from 'vue'
import CustomTable from '@/components/CustomTable'
// 获取参数
const roleModel = reactive({
  current: 1,
  size: 10
})
const tota = ref(0)
const tableList = ref([])
const handleGetRoleList = async () => {
  const {
    records,
    total
  } = await getRoleList(roleModel)
  tableList.value = records
  tota.value = total
}
handleGetRoleList()
// 定义表格列
const cols = [
  {
    title: '名称',
    name: 'name'
  },
  {
    title: '唯一编码',
    name: 'code'
  },
  {
    title: '描述',
    name: 'remark'
  },
  {
    title: '状态',
    slot: 'status'
  },
  {
    title: '操作',
    slot: 'actions'
  }
]
</script>

<style scoped>

</style>

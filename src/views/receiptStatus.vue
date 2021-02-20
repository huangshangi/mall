<template>
  <el-row>
    <el-col :span="18" :offset="3">
      <mall-title></mall-title>
    </el-col>
  </el-row>
  <el-row>
    <el-col :offset="3" :span="18">
      <search :search="true"/>
    </el-col>
  </el-row>
  <el-row>
    <el-col :offset="3" :span="18">
      <receipt-status-temp/>
    </el-col>
  </el-row>
</template>

<script>
import mallTitle from '../components/mallTitle'
import Search from '../components/search'
import ReceiptStatusTemp from '../components/receiptStatusTemp'
export default {
  name: 'receiptStatus',
  components: { ReceiptStatusTemp, Search, mallTitle }
}
</script>

<style scoped>

</style>

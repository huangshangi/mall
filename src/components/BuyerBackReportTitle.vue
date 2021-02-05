<template>
  <div class="border allDiv">
    <el-row>
      <el-col :span="2"><span>举报编号</span></el-col>
      <el-col :span="8"><span>举报类型</span></el-col>
      <el-col :span="3"><span>举报对象</span></el-col>
      <el-col :span="3"><span>被举报人</span></el-col>
      <el-col :span="3"><span>发起时间</span></el-col>
      <el-col :span="3"><span>处理状态</span></el-col>
      <el-col :span="2"><span>操作</span></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'BuyerBackReportTitle'
}
</script>

<style scoped>
.allDiv{
  background: #f5f5f5;
  border: 1px solid red;
}
</style>

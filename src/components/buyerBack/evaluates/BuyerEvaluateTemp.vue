<template>
  <div class="border">
    <search-by-condition/>
    <el-row>
      <el-col :span="3"><span>订单号</span></el-col>
      <el-col :span="8"><span>宝贝信息</span></el-col>
      <el-col :span="3"><span>评价人</span></el-col>
      <el-col :span="6"><span>内容</span></el-col>
      <el-col :span="3"><span>操作</span></el-col>
    </el-row>
    <template v-for="(item) in 4" :key="item"><buyer-evaluate-item/></template>
    <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400">
    </el-pagination>
  </div>
</template>

<script>
import BuyerEvaluateItem from './BuyerEvaluateItem'
import SearchByCondition from '../common/searchByCondition'
export default {
  name: 'BuyerEvaluateTemp',
  components: { SearchByCondition, BuyerEvaluateItem }
}
</script>

<style scoped>
.border{
  border: 1px solid red;
}
</style>

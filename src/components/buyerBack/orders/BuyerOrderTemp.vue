<template>
  <div class="border">
<!--    header-->
    <el-row>
      <el-col :span="3"><span>订单号</span></el-col>
      <el-col :span="3"><span>订单创建时间</span></el-col>
      <el-col :span="3"><span>订单标题</span></el-col>
      <el-col :span="3"><span>金额</span></el-col>
      <el-col :span="3"><span>状态</span></el-col>
      <el-col :span="9"><span>操作</span></el-col>
    </el-row>
    <template v-for="(item,index) in 4" :key="item"><buyer-order-item :index="index"/></template>
  </div>
</template>

<script>
import BuyerOrderItem from './BuyerOrderItem'
export default {
  name: 'BuyerOrderTemp',
  components: { BuyerOrderItem },
  methods: {
  }
}
</script>

<style scoped>

</style>

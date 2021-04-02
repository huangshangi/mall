<template>
  <div style="padding: 20px">
    <p style="margin: 10px;text-align: left">我的退款</p>
    <buyer-back-refund-navbar/>
    <buyer-back-refund-title/>
    <template v-for="item in 10" :key="item">
      <buyer-back-refund-item/>
    </template>
    <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400">
    </el-pagination>
  </div>
</template>

<script>
import BuyerBackRefundNavbar from './BuyerBackRefundNavbar'
import BuyerBackRefundTitle from './BuyerBackRefundTitle'
import BuyerBackRefundItem from './BuyerBackRefundItem'
export default {
  name: 'BuyerBackRefundTemp',
  components: { BuyerBackRefundItem, BuyerBackRefundTitle, BuyerBackRefundNavbar }
}
</script>

<style scoped>

</style>

<template>
  <div>
    <p style="margin: 20px;text-align: left">我的举报</p>
    <buyer-back-report-title/>
    <template v-for="item in 10" :key="item">
      <buyer-back-report-item/>
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
import BuyerBackReportTitle from '@/components/BuyerBackReportTitle'
import BuyerBackReportItem from '@/components/BuyerBackReportItem'
export default {
  name: 'BuyerBackReportTemp',
  components: { BuyerBackReportItem, BuyerBackReportTitle }
}
</script>

<style scoped>

</style>

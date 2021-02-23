<template>
  <div>
    <el-row>
      <el-col :span="18">
        <trade-hall-classify/>
        <trade-hall-title/>
        <el-row v-for="item1 in 5" :key="item1">
          <el-col :span="12" v-for="item in 10" :key="item">
            <trade-hall-demand-card/>
          </el-col>
        </el-row>
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
      </el-col>
      <el-col :span="6">
        <trade-hall-right-nav/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import tradeHallClassify from './tradeHallClassify'
import tradeHallTitle from './tradeHallTitle'
import tradeHallDemandCard from './tradeHallDemandCard'
import TradeHallRightNav from './tradeHallRightNav'
export default {
  name: 'tradeHallCallBit',
  components: { TradeHallRightNav, tradeHallDemandCard, tradeHallTitle, tradeHallClassify }
}
</script>

<style scoped>

</style>

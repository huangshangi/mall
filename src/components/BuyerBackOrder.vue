<template>
  <div class="border">
    <el-row>
      <el-col :offset="1" :span="23">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="全部订单" name="first">
            <search-by-conditon/>
            <buyer-order-temp/>
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
          </el-tab-pane>
          <el-tab-pane label="待付款" name="second">待付款</el-tab-pane>
          <el-tab-pane label="进行中" name="third">进行中</el-tab-pane>
          <el-tab-pane label="待评价" name="fourth">待评价</el-tab-pane>
          <el-tab-pane label="已结束" name="fourth">已结束</el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// import BuyerBackTemp from '@/components/BuyerBackTemp'
import SearchByConditon from '@/components/searchByConditon'
import BuyerOrderTemp from '@/components/BuyerOrderTemp'
export default {
  name: 'BuyerBackOrder',
  components: { SearchByConditon, BuyerOrderTemp }
}
</script>

<style scoped>
.border{
  border: 1px solid red;
}
</style>

<template>
  <div style="padding: 20px">
    <h3 style="text-align: left">我的退款</h3>
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="我收到的退款申请" name="first">
        <buyer-back-refund-navbar/>
        <el-table
           stripe
           :data="tableData"
           style="width: 100%">
          <el-table-column
             prop="orderNumber"
             label="订单编号"
             width="150">
          </el-table-column>
          <el-table-column
             prop="refundNumber"
             label="退款编号"
             width="150">
          </el-table-column>
          <el-table-column
             prop="demand"
             label="需求"
             width="300">
          </el-table-column>
          <el-table-column
             prop="host"
             label="雇主"
             width="120">
          </el-table-column>
          <el-table-column
             prop="amount"
             label="退款金额"
             width="120">
          </el-table-column>
          <el-table-column
             prop="date"
             sortable
             label="申请时间"
             width="120">
          </el-table-column>
          <el-table-column
             prop="state"
             label="退款状态"
             width="120">
          </el-table-column>
          <el-table-column
             label="操作"
             width="300">
            <template #default="scope">
              <div style="display: inline-block">
                <el-button @click="handleClick(scope.row)" type="text" size="small">同意</el-button>
                <el-button type="text" size="small">拒绝</el-button>
                <el-button type="text" size="small">查看详情</el-button>
              </div>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>

  </div>
</template>

<script>
import BuyerBackRefundNavbar from '../buyerBack/refunds/BuyerBackRefundNavbar'
export default {
  name: 'backRefundManager',
  components: { BuyerBackRefundNavbar },
  data () {
    return {
      tableData: [{
        orderNumber: 1,
        refundNumber: 1,
        demand: '仅退款',
        host: 'wangjie',
        amount: 11,
        date: '2021-01-01',
        state: '退款中'
      }]
    }
  }
}
</script>

<style scoped>

</style>

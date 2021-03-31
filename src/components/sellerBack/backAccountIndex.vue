<template>
  <div >
    <div class="page-left">
      <div class="page-card" style="text-align: left">
        <h4 class="page-title">账户余额</h4>
        <ul class="card-content">
          <li>总计<span class="amount">0.00</span> 元</li>
          <li>暂时冻结<span class="amount">0.00</span> 元</li>
          <li>可用<span class="amount">0.00</span> 元</li>
        </ul>
      </div>
    </div>
    <div class="page-right">
      <h4 class="page-title">近期交易记录</h4>
      <el-table :data="tableData">
        <el-table-column prop="time" label="创建时间" width="180"></el-table-column>
        <el-table-column prop="name" label="名称" width="180"></el-table-column>
        <el-table-column prop="otherside" label="对方" width="180"></el-table-column>
        <el-table-column prop="orderprice" label="订单额" width="180"></el-table-column>
        <el-table-column prop="state" label="状态" width="180"></el-table-column>
      </el-table>
      <el-button type="text">查看全部</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'backAccountIndex',
  data () {
    return {
      tableData: [{ time: '2021-03-31', name: '测试交易', otherside: 'huangshangi', orderprice: 1800, state: '交易成功' }]
    }
  }
}
</script>

<style scoped>
.page-content,.page-left{
  width: 320px;
  margin-right: 10px;
}
.page-right{
  width: 1060px;
}
.page-content,.page-right,.page-left{
  font-size: 14px;
  vertical-align: top;
  display: inline-block;
}
.page-card{
  margin-bottom: 10px;
  background-color: #fff;
  box-shadow: 0 0 10px 0 #e6e6e6;
}
.page-title{
  color: #333;
  font-size: 16px;
  padding: 0 24px;
  line-height: 58px;
}
.page-card,.card-content{
  padding: 0 24px;
}
li{
  list-style: none;
  line-height: 45px;
  border-bottom: 1px solid #f5f5f5;
}
.amount{
  color: #169BD5;
  font-size: 20px;
}
</style>

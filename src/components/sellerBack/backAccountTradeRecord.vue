<template>
  <div style="text-align: left;margin-left: 100px">
    <el-form inline label-width="80px">
      <el-form-item>
        <el-date-picker
           v-model="value1"
           type="date"
           placeholder="选择日期">
        </el-date-picker>
        -
        <el-date-picker
           v-model="value1"
           type="date"
           placeholder="选择日期">
        </el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-radio-group v-model="radio">
          <el-radio :label="3">交易</el-radio>
          <el-radio :label="6">提现</el-radio>
          <el-radio :label="9">退款</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        <el-select v-model="value" placeholder="请选择">
          <el-option
             v-for="item in options"
             :key="item.value"
             :label="item.label"
             :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-search">搜索</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableData">
      <el-table-column prop="createTime" label="创建时间" width="180"></el-table-column>
      <el-table-column prop="name" label="名称" width="180"></el-table-column>
      <el-table-column prop="orderId" label="商户订单号" width="180"></el-table-column>
      <el-table-column prop="tradeId" label="钱包交易号" width="180"></el-table-column>
      <el-table-column prop="otherSide" label="对方" width="180"></el-table-column>
      <el-table-column prop="orderPrice" label="订单额" width="180"></el-table-column>
      <el-table-column prop="state" label="状态" width="180"></el-table-column>
    </el-table>
    <el-pagination
       style="text-align: center"
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
export default {
  name: 'backAccountTradeRecord',
  data () {
    return {
      radio: 3,
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: '',
      tableData: [{ createTime: '2021-03-31', name: '测试交易', orderId: 1, tradeId: 1, otherSide: 'huangshangi', orderPrice: 100, state: '交易结束' }]
    }
  }
}
</script>

<style scoped>

</style>

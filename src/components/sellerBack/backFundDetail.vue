<template>
  <div style="text-align: left; margin-left: 200px">
    <el-form label-width="80px" inline>
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
      <el-form-item label="收支:">
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
      <el-table-column prop="time" label="时间" width="200"></el-table-column>
      <el-table-column prop="name" label="名称/摘要" width="200"></el-table-column>
      <el-table-column prop="income" label="收入" width="200"></el-table-column>
      <el-table-column prop="outcome" label="支出" width="200"></el-table-column>
      <el-table-column prop="balance" label="账户余额" width="200"></el-table-column>
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
  name: 'backFundDetail',
  data () {
    return {
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
      tableData: [{ time: '2021-03-31', name: '测试交易', income: 0, outcome: 10, balance: 20 }]
    }
  }
}
</script>

<style scoped>

</style>

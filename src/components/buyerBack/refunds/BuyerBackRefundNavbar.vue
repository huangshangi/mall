<template>
  <div class="border">
    <el-row>
      <div class="condition">
        <span>交易号：</span>
        <el-input style="width: 150px;"/>
      </div>
      <div class="condition">
        <span>退款状态：</span>
        <el-select v-model="value" placeholder="请选择">
          <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div class="condition">
        <span>退款申请时间：</span>
        <el-date-picker
            v-model="value1"
            type="date"
            placeholder="选择日期">
        </el-date-picker>
        ~
        <el-date-picker
            v-model="value1"
            type="date"
            placeholder="选择日期">
        </el-date-picker>
      </div>
      <div  class="condition">
        <el-button type="primary">筛选</el-button>
      </div>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'BuyerBackRefundNavbar',
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
      }]
    }
  }
}
</script>

<style scoped>
.border{
  border: 1px solid red;
}
.condition{
  margin: 10px 20px;
}
</style>

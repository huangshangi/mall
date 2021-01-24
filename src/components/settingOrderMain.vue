<template>
  <div class="allDiv border">
    <h3>确认订单信息</h3>
    <el-row class="title">
      <el-col :span="11">
        <span>店铺宝贝</span>
      </el-col>
<!--      <el-col :span="4">-->
<!--        <span>商品属性</span>-->
<!--      </el-col>-->
      <el-col :span="2" :offset="1">
        <span>单价</span>
      </el-col>
      <el-col :span="6">
        <span>数量</span>
      </el-col>
      <el-col :span="4">
        <span>小计</span>
      </el-col>
    </el-row>
    <el-divider/>
    <order-item :shoppingCart="false"/>
    <el-row><el-col :offset="19" :span="5">实付款：￥30000.00</el-col> </el-row>
    <el-row><el-col :offset="19" :span="5"><el-button style="width: 100%" type="primary">付款</el-button></el-col> </el-row>
  </div>
</template>

<script>
// import SettingOrderItem from '@/components/settingOrderItem'
import OrderItem from '@/components/orderItem'
export default {
  name: 'settingOrderMain',
  components: { OrderItem }
}
</script>

<style scoped>
.allDiv{
  width: 100%;
}
.border{
  border: 1px solid red;
}
.allDiv .title span{
  text-align: center;
}
.allDiv h3{
  text-align: left;
}
</style>

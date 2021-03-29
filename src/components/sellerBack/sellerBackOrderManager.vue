<template>
  <el-tabs class="order" v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="全部订单" name="first">
      <order-search/>
      <back-order-temp/>
    </el-tab-pane>
    <el-tab-pane label="进行中" name="second">
      <order-search/>
      <back-order-temp/>
    </el-tab-pane>
    <el-tab-pane label="已结束" name="third">
      <order-search/>
      <back-order-temp/>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import OrderSearch from './orderSearch'
import BackOrderTemp from './backOrderTemp'
export default {
  name: 'sellerBackOrderManager',
  components: { BackOrderTemp, OrderSearch }
}
</script>

<style scoped>
.order{
  padding: 20px;
}
</style>

<template>
  <div>
    <p style="text-align: left">我的足迹</p>
    <el-row v-for="item in 3" :key="item" style="margin: 10px;">
      <el-col v-for="item2 in 6" :key="item2" :span="4" style="padding-right: 10px">
        <buyer-back-history-item/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import BuyerBackHistoryItem from './BuyerBackHistoryItem'
export default {
  name: 'BuyerBackHistoryTemp',
  components: { BuyerBackHistoryItem }
}
</script>

<style scoped>

</style>

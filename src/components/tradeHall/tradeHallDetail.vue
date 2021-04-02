<template>
  <div>
    <el-row>
      <el-col :offset="3" :span="15">
        <trade-hall-detail-temp/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import TradeHallDetailTemp from './tradeHallDetailTemp'
export default {
  name: 'tradeHallDetail',
  components: { TradeHallDetailTemp }
}
</script>

<style scoped>

</style>
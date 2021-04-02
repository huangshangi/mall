<template>
  <div>
    <el-row>
      <template v-for="item in 3" :key="item">
        <el-col :span="8">
          <trade-hall-card :explain="false"/>
        </el-col>
      </template>
    </el-row>
    <div class="title">解决需求的方式远不止一种</div>
    <el-row>
      <template v-for="item in 3" :key="item">
        <el-col :span="8">
          <trade-hall-card :explain="true"/>
        </el-col>
      </template>
    </el-row>
    <trade-hall-progress v-for="item in 3" :key="item" :footer-show="true" :title-show="true"></trade-hall-progress>
  </div>
</template>

<script>
import TradeHallCard from './tradeHallModeCard'
import TradeHallProgress from './tradeHallProgress'
export default {
  name: 'tradeHallIndex',
  components: { TradeHallProgress, TradeHallCard }
}
</script>

<style scoped>
.title{
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  line-height: 62px;
  border-bottom: 1px solid #f6f6f6;
  position: relative;
}
</style>

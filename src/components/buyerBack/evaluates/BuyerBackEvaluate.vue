<template>
  <el-row>
    <el-col :offset="1" :span="22">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="我的评价" name="first">
          <buyer-evaluate-temp/>
        </el-tab-pane>
        <el-tab-pane label="来自卖家的评价" name="second">来自卖家的评价</el-tab-pane>
      </el-tabs>
    </el-col>
  </el-row>
</template>

<script>
import BuyerEvaluateTemp from './BuyerEvaluateTemp'
export default {
  name: 'BuyerBackEvaluate',
  components: { BuyerEvaluateTemp },
  data () {
    return {
      activeName: 'first'
    }
  }
}
</script>

<style scoped>

</style>

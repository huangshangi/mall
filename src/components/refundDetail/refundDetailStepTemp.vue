<template>
  <div>
    <el-row>
      <el-col :span="18">
        <slot/>
        <consult-history/>
      </el-col>
      <el-col :span="6">
        <right-refund-detail :refund-show="true"/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import ConsultHistory from './consultHistory'
import RightRefundDetail from './rightRefundDetail'
export default {
  name: 'refundDetailStepTemp',
  components: { RightRefundDetail, ConsultHistory }
}
</script>

<style scoped>

</style>

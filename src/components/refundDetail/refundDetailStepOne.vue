<template>
  <div style="border: 1px solid red;">
    <el-row>
      <el-col :span="18">
        <refund-info/>
      </el-col>
      <el-col :span="6">
        <right-refund-detail :refund-show="false"/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import RefundInfo from './refundInfo'
import RightRefundDetail from './rightRefundDetail'
export default {
  name: 'refundDetailStepOne',
  components: { RightRefundDetail, RefundInfo }
}
</script>

<style scoped>

</style>

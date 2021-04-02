<template>
  <div>
    <el-row>
      <el-col :span="18" :offset="3"><mall-title/></el-col>
    </el-row>
    <el-row>
      <el-col :span="18" :offset="3">
        <el-steps :active="active" simple>
          <el-step title="买家申请退款" icon="el-icon-edit"></el-step>
          <el-step title="卖家处理退款申请" icon="el-icon-upload"></el-step>
          <el-step title="退款完毕" icon="el-icon-picture"></el-step>
        </el-steps>
      </el-col>
    </el-row>
    <template v-if="active === 1">
      <refund-detail-step-one/>
    </template>
    <template v-else-if="active === 2">
      <refund-detail-step-two/>
    </template>
    <template v-else>
      <refund-detail-step-three/>
    </template>
<!--    <el-row>-->
<!--      <el-col :span="12" :offset="3">-->
<!--        <consult-title/>-->
<!--        <consult-history/>-->
<!--      </el-col>-->
<!--      <el-col :span="6">-->
<!--        <goods-digest-info :detail="true" :refund="true" :report="false"/>-->
<!--      </el-col>-->
<!--    </el-row>-->
  </div>
</template>

<script>
// import ConsultTitle from '../components/consultTitle'
// import GoodsDigestInfo from '../components/goodsDigestInfo'
// import ConsultHistory from '../components/consultHistory'
import mallTitle from '../components/front/mallTitle'
import RefundDetailStepOne from '../components/front/refundDetail/refundDetailStepOne'
import RefundDetailStepTwo from '../components/front/refundDetail/refundDetailStepTwo'
import RefundDetailStepThree from '../components/front/refundDetail/refundDetailStepThree'
export default {
  name: 'refundDetail',
  components: { RefundDetailStepThree, RefundDetailStepTwo, RefundDetailStepOne, mallTitle },
  data () {
    return {
      active: 1
    }
  }
}
</script>

<style scoped>

</style>

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
      <report-detail-step-one/>
    </template>
    <template v-else-if="active === 2">
      <report-detail-step-two/>
    </template>
    <template v-else>
      <report-detail-step-three/>
    </template>
  </div>
</template>

<script>
import mallTitle from '../components/front/mallTitle'
import ReportDetailStepOne from '../components/front/reportDetail/reportDetailStepOne'
import ReportDetailStepTwo from '../components/front/reportDetail/reportDetailStepTwo'
import ReportDetailStepThree from '../components/front/reportDetail/reportDetailStepThree'
export default {
  name: 'reportDetail',
  components: { mallTitle, ReportDetailStepThree, ReportDetailStepTwo, ReportDetailStepOne },
  data () {
    return {
      active: 3
    }
  }
}
</script>

<style scoped>

</style>

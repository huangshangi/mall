<template>
  <div>
    <el-row>
      <el-col :span="18" :offset="3"><mall-title/></el-col>
    </el-row>
    <el-row>
      <el-col :span="18" :offset="3">
        <el-steps :active="1" simple>
          <el-step title="步骤 1" icon="el-icon-edit"></el-step>
          <el-step title="步骤 2" icon="el-icon-upload"></el-step>
          <el-step title="步骤 3" icon="el-icon-picture"></el-step>
        </el-steps>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12" :offset="3">
        <consult-title/>
        <consult-history/>
      </el-col>
      <el-col :span="6">
        <right-refund-detail/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import ConsultTitle from '../components/consultTitle'
import RightRefundDetail from '../components/rightRefundDetail'
import ConsultHistory from '../components/consultHistory'
export default {
  name: 'refundDetail',
  components: { ConsultHistory, RightRefundDetail, ConsultTitle }
}
</script>

<style scoped>

</style>

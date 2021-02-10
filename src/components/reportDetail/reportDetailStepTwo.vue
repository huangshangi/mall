<template>
  <detail-step-temp :detail="true" :report="true" :refund="false">
    <template v-slot:content>
      <div>
        <div style="text-align: left">
          <p class="digest">请等待商家处理</p>
          <div class="line"></div>
          <p class="explain">您已成功发起退款申请，请耐心等待商家处理</p>
          <el-button type="primary" style="margin-top: 20px;margin-bottom: 20px;">撤销投诉</el-button>
        </div>
      </div>
    </template>
    <template v-slot:digest-title>
      <p>投诉详情</p>
    </template>
  </detail-step-temp>
</template>

<script>
import DetailStepTemp from '../detailStepTemp'
export default {
  name: 'reportDetailStepTwo',
  components: { DetailStepTemp }
}
</script>

<style scoped>
.digest{
  font-weight: bolder;
  font-size: 20px;
}
.line{
  overflow: hidden;
  height: 1px;
  line-height: 1px;
  font-size: 1px;
  background: #e8e8e8;
  margin: 14px 0px;
}
.explain{
  color: #6c6c6c;
}
</style>

<template>
  <div>
   <detail-step-temp :refund="false" :report="true" :detail="true">
     <template v-slot:content>
       <div style="text-align: left">
         <div class="refundTitle">
           <p class="digest">请等待商家处理</p>
           <p class="explain">您已成功发起退款申请，请耐心等待商家处理</p>
         </div>
         <div class="line"></div>
         <div>
           <ul class="refundExplain">
             <li>商家同意后，退款将原路返回至您的账户</li>
             <li>如商家拒绝，您可以修改申请后再次发起，商家会重新处理</li>
             <li>如商家超时未处理，退款申请将达成</li>
           </ul>
         </div>
         <div style="margin: 20px 0px">
           <el-button type="primary">修改申请</el-button>
         </div>
         <div style="margin: 20px 0px">
           <span>您还可以：</span>
           <a href="#" class="repealApp">撤销申请</a>
         </div>
       </div>
     </template>
   </detail-step-temp>
  </div>
</template>

<script>
import DetailStepTemp from '../detailStepTemp'
export default {
  name: 'refundDetailStepTwo',
  components: { DetailStepTemp }
}
</script>

<style scoped>
.refundExplain{
  padding-left: 0px;
  list-style-position: inside;
}
.refundTitle .digest{
  font-weight: bolder;
  font-size: 20px;
}
.refundTitle .explain{
  color: #6c6c6c;
}
.refundExplain{
  color: #a8a8a8;
}
.line{
  overflow: hidden;
  height: 1px;
  line-height: 1px;
  font-size: 1px;
  background: #e8e8e8;
  margin: 14px 0px;
}
.repealApp{
  color: #409eff;
  text-decoration: transparent;
}
.repealApp:hover{
  text-decoration: underline;
  color: #66b1ff;
}
</style>

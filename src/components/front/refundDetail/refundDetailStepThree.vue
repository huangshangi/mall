<template>
  <detail-step-temp :refund="true" :report="false" :detail="true">
    <template v-slot:content>
      <div class="title">
        <p class="info">退款成功</p>
        <p class="time">退款成功时间：2021-02-02 13:30:44</p>
        <div class="line"></div>
        <p class="result">退款总金额：￥24.33</p>
      </div>
    </template>
    <template v-slot:digest-title>
      <p>退款详情</p>
    </template>
  </detail-step-temp>
</template>

<script>
import DetailStepTemp from '../detailStepTemp'
export default {
  name: 'refundDetailStepThree',
  components: { DetailStepTemp }
}
</script>

<style scoped>
.title{
  text-align: left;
}
.info{
  font-size: 18px;
  color: #3c3c3c;
  font-weight: 700;
  line-height: 18px;
  margin-right: 30px;
}
.time{
  margin-top: 5px;
  font-size: 14px;
  color: #6c6c6c;
  line-height: 1.5;
  white-space: pre-line;
}
.result{
  font-size: 16px;
  font-weight: 400;
  color: #3c3c3c;
  white-space: pre-line;
}
</style>

<template>
  <detail-step-temp :detail="true" :report="true" :refund="false">
    <template v-slot:content>
      <div class="title">
        <p class="info">投诉成功</p>
        <p class="time">投诉成功时间：2021-02-02 13:30:44</p>
        <div class="line"></div>
        <p class="result">商家已被封禁</p>
      </div>
    </template>
    <template v-slot:digest-title>
      <div>投诉详情</div>
    </template>
  </detail-step-temp>
</template>

<script>
import DetailStepTemp from '../detailStepTemp'
export default {
  name: 'reportDetailStepThree',
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

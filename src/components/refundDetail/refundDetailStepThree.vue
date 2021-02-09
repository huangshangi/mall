<template>
  <refund-detail-step-temp>
    <slot>
      <div class="title">
        <p class="info">退款成功</p>
        <p class="time">退款成功时间：2021-02-02 13:30:44</p>
        <div class="line"></div>
        <p class="money">退款总金额：￥24.33</p>
      </div>
    </slot>
  </refund-detail-step-temp>
</template>

<script>
import RefundDetailStepTemp from './refundDetailStepTemp'
export default {
  name: 'refundDetailStepThree',
  components: { RefundDetailStepTemp }
}
</script>

<style scoped>
.title{
  text-align: left;
}
.info{
  font-weight: bolder;
  font-size: 20px;
}
.time{
  color: #6c6c6c;
}
.line{
  overflow: hidden;
  height: 1px;
  line-height: 1px;
  font-size: 1px;
  background: #e8e8e8;
  margin: 14px 0px;
}
</style>

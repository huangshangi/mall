<template>
  <div class="title">
    <p class="info">退款成功</p>
    <p class="time">退款成功时间：2021-02-02 13:30:44</p>
    <p class="money">退款总金额：￥24.33</p>
  </div>
</template>

<script>
export default {
  name: 'consultTitle'
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
.money{
  font-size: 16px;
  font-weight: 400;
  color: #3c3c3c;
  white-space: pre-line;
}
</style>

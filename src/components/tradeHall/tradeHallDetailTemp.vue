<template>
  <div class="allDiv">
    <div class="content-top">
      <div class="icon">比稿</div>
      <div class="content">LOGO设计</div>
      <div class="number">23255</div>
    </div>
    <trade-hall-progress/>
  </div>
</template>

<script>
import TradeHallProgress from './tradeHallProgress'
export default {
  name: 'tradeHallDetailTemp',
  components: { TradeHallProgress }
}
</script>

<style scoped>
.content-top .icon{
  display: inline-block;
  width: 47px;
  height: 47px;
  background: #E9D29E;
  border-radius: 50%;
  line-height: 47px;
  text-align: center;
  font-size: 14px;
  color: #fff;
  margin-left: 5px;
}
.content-top .content{
  display: inline-block;
  font-size: 26px;
  margin-left: 8px;
  vertical-align: top;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 400px;
  white-space: nowrap;
  line-height: 47px;
}
.content-top .number{
  display: inline-block;
  vertical-align: top;
  margin-left: 12px;
  color: #666;
  margin-right: 50px;
  line-height: 47px;
}
.allDiv{
  text-align: left;
  border: 1px solid red;
}
</style>

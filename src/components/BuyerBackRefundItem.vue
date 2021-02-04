<template>
  <div class="">
    <div class="item-title">
      <span>订单编号：1553626118806572033</span>&emsp;
      <span>退款编号：1553626118806572033</span>&emsp;
      <span>正鑫网络科技有限公司</span>
    </div>
    <el-row class="item-content">
      <el-col :span="2" class="margin">
        <el-image src="https://img.alicdn.com/bao/uploaded/i2/3946023263/O1CN01phkJne1ZyV0ECfpX3_!!3946023263.jpg"></el-image>
      </el-col>
      <el-col :span="8" class="margin title">
        <span>Steam正版PC中文游戏 一起开火车 Unrailed! 国区全球礼物激活Steam正版PC中文游戏 一起开火车 Unrailed! 国区全球礼物激活</span>
      </el-col>
      <el-col :span="2" class="margin">
        <span>￥24.33</span>
      </el-col>
      <el-col :span="3" class="margin">
        <span>2021-02-01 21:15:10</span>
      </el-col>
      <el-col :span="3" class="margin"><span>仅退款</span></el-col>
      <el-col :span="3" class="margin"><span>退款成功</span></el-col>
      <el-col :span="3" class="margin"><span>查看详情</span></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'BuyerBackRefundItem'
}
</script>

<style scoped>
.item-title{
  padding: 10px;
  text-align: left;
  border: 1px solid #91CFFF;
  background: #EAF8FF;
}
.item-content{
  border: 1px solid #e8e8e8;
  border-top: none;
  padding: 10px;
}
.border{
  border: 1px solid red;
}
.margin{
  margin: auto;
}
.title{
  text-align: left;
}
</style>

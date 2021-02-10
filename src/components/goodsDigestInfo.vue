<template>
  <div class="allDiv">
    <slot name="title">退款详情</slot>
    <div style="position: relative;" class="item">
      <span>
         <el-image class="img" src="https://img.alicdn.com/bao/uploaded/i2/3946023263/O1CN01phkJne1ZyV0ECfpX3_!!3946023263.jpg"/>
      </span>
      <div class="contentDiv" style="height: 55px;">
        <span class="content">真心网络科技</span>
      </div>
    </div>
    <div class="line"/>
    <div class="item">
      <span class="title">卖&emsp;&emsp;家:</span>
      <div class="contentDiv">
        <span class="content">真心网络科技</span>
      </div>
    </div>
    <div class="item">
      <span class="title">联系电话</span>
      <div class="contentDiv">
        <span class="content">15665851627</span>
      </div>
    </div>
    <div class="item">
      <span class="title">订单编号</span>
      <div class="contentDiv">
        <span  class="content">1553626118806572033</span>
      </div>
    </div>
    <div class="item">
      <span class="title">成交时间</span>
      <div class="contentDiv">
        <span class="content">2021-02-21 21::14:32</span>
      </div>
    </div>
    <div class="item">
      <span class="title">单价</span>
      <div class="contentDiv">
        <span class="content">￥29.00</span>
      </div>
    </div>
    <div class="item">
      <span class="title">数量</span>
      <div class="contentDiv">
        <span class="content">1</span>
      </div>
    </div>
    <div class="item">
      <span class="title">商品总价</span>
      <div class="contentDiv">
        <span class="content">￥29.00</span>
      </div>
    </div>
    <div v-if="detail && refund && !report">
      <div class="line"/>
      <div class="item">
        <span class="title">退款编号</span>
        <div class="contentDiv">
          <span class="content">100558407542573320</span>
        </div>
      </div>
      <div class="item">
        <span class="title">退款金额</span>
        <div class="contentDiv">
          <span class="content">￥29.00</span>
        </div>
      </div>
      <div class="item">
        <span class="title">原因</span>
        <div class="contentDiv">
          <span class="content">不想要</span>
        </div>
      </div>
      <div class="item">
        <span class="title">要求</span>
        <div class="contentDiv">
          <span class="content">仅退款</span>
        </div>
      </div>
      <div class="item">
        <span class="title">货物状态</span>
        <div class="contentDiv">
          <span class="content">未发货</span>
        </div>
      </div>
      <div class="item">
        <span class="title">说明</span>
        <div class="contentDiv">
          <span class="content">-</span>
        </div>
      </div>
    </div>
    <div v-if="detail && !refund && report">
      <div class="line"/>
      <div class="item">
        <span class="title">投诉编号：</span>
        <div class="contentDiv">
          <span class="content">100558407542573320</span>
        </div>
      </div>
      <div class="item">
        <span class="title">投诉原因：</span>
        <div class="contentDiv">
          <span class="content">发货问题</span>
        </div>
      </div>
      <div class="item">
        <span class="title">投诉说明：</span>
        <div class="contentDiv">
          <span class="content">无</span>
        </div>
      </div>
      <div class="item">
        <span class="title">申请时间：</span>
        <div class="contentDiv">
          <span class="content">2021-02-10 18:06</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'goodsDigestInfo',
  props: {
    refund: Boolean,
    report: Boolean,
    detail: Boolean
  }
}
</script>

<style scoped>
.allDiv{
  text-align: left;
  width: 200px;
}
.title{
  float: left;
  margin-right: 5px;
  display: inline-block;
  color: #9c9c9c;
}
.content{
  word-wrap: break-word;
  word-break: break-all;
  color: #3c3c3c;
}
.contentDiv{
  margin-left: 60px;
}
.item{
  font-size: 12px;
  line-height: 17px;
}
.img{
  position: absolute;
  top: 50%;
  margin-top: -27px;
  width: 54px;
  height: 54px;
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

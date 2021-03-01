<template>
  <div class="allDiv">
    <div class="detail" :class="{ 'hideMore': !detailSpread }">
      <span class="dropdown-box" @click="detailSpreadClick">
        <span class="content" :class="{'toDown': !detailSpread, 'toUp': detailSpread }">
          {{!detailSpread?'展开':'收起'}}
        </span>
      </span>
      <div class="detail-content">
        <div class="title">
          <i></i>
          <h4 class="title-val">需求详情</h4>
        </div>
        <div class="content-item">
          <span class="item-title">需求类目：</span>
          <span class="item-value">LOGO</span>
        </div>
        <div class="content-item">
          <span class="item-title">需求类目：</span>
          <span class="item-value">LOGO</span>
        </div>
        <div class="content-item">
          <span class="item-title">需求类目：</span>
          <span class="item-value">LOGO</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tradeHallDemandSummary',
  methods: {
    detailSpreadClick () {
      this.detailSpread = !this.detailSpread
    }
  },
  data () {
    return {
      detailSpread: false
    }
  }
}
</script>

<style scoped>
.detail{
  position: relative;
  background: #fff;
  box-sizing: border-box;
  padding-bottom: 37px;
  margin-bottom: 5px;
  overflow: hidden;
}
.hideMore{
  max-height: 155px;
}
.detail .title i{
  position: absolute;
  left: 0;
  display: inline-block;
  width: 3px;
  height: 19px;
  background: #2D8CF0;
}
.detail .title .title-val{
  font-size: 16px;
  color: #333;
  margin-bottom: 24px;
  font-weight: 700;
}
.detail .detail-content{
  box-sizing: border-box;
  overflow: hidden;
  padding: 19px 106px 0 25px;
}
.content-item{
  margin-top: 12px;
  font-size: 14px;
  color: #999;
}
.item-title{
  margin-right: 8px;
  vertical-align: baseline;
  text-align: right;
  min-width: 56px;
  display: inline-block;
}
.item-value{
  display: inline-block;
  max-width: 680px;
  color: #333;
  font-size: 14px;
}
.dropdown-box{
  color: #333;
  position: absolute;
  display: inline-block;
  width: 915px;
  bottom: 40px;
  right: 7px;
  font-size: 12px;
  text-align: right;
  margin-right: 42px;
}
.dropdown-box .content{
  cursor: pointer;
  position: relative;
}
.dropdown-box .toDown:before{
  position: absolute;
  top: 5px;
  right: -15px;
  content: "";
  display: inline-block;
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid #A1A1A1;
}
.dropdown-box .toDown:after{
  position: absolute;
  top: 3px;
  right: -15px;
  content: "";
  display: inline-block;
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid #fff;
}
.dropdown-box .toUp:before{
  position: absolute;
  top: 4px;
  right: -15px;
  content: "";
  display: inline-block;
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 5px solid #A1A1A1;
}
.dropdown-box .toUp:after{
  position: absolute;
  top: 6px;
  right: -15px;
  content: "";
  display: inline-block;
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 5px solid #fff;
}
.allDiv{
  border: 1px solid red;
  text-align: left;
}
</style>

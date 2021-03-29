<template>
  <div class="header">
    <div class="header-content">
      <span class="title">
        推荐：<span class="count">115</span>
      </span>
      <span class="title">
        剩余投标：<span class="count">115</span>
      </span>
      <span>
        <a class="url" href="#">招标大厅 ></a>
      </span>
    </div>
  </div>
  <template v-for="item in 3" :key="item">
    <div class="item-content">
      <div class="item-left">
        <div class="left-title">
          <a class="title" href="#">需要网站UI设计</a>
        </div>
        <div class="left-content">
          <span class="content">网站设计</span>
        </div>
      </div>
      <div class="item-right">
        <span class="price">￥0.0</span>
        <span class="host-order">未托管</span>
        <a class="check-detail" href="#">立即抢标</a>
      </div>
    </div>
  </template>
</template>

<script>
export default {
  name: 'backIndexDemandTemp'
}
</script>

<style scoped>
.header{
  background: #f8f8f8;
  padding: 0 8px 6px;
  margin-bottom: 5px;
}
.header .header-content{
  padding: 8px 0 0;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
  font-size: 12px;
}
.header-content .title{
  color: #999;
}
.count{
  color: #000;
}
.url{
  color: #2D8CF0;
  text-decoration: none;
}
.item-content{
  font-size: 12px;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
  border-bottom: 1px dashed #eee;
  padding: 10px;
}
.item-left{
  -ms-flex: 1;
  flex: 1;
  overflow: hidden;
  text-align: left;
}
.item-right{
  width: 122px;
  text-align: right;
}
.item-left .left-title{
  margin-bottom: 7px;
  width: 96%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  display: inline-block;
}
.item-left .title{
  font-size: 14px;
  margin-right: 10px;
}
.left-content .content{
  color: #999;
  width: 94%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  display: inline-block;
}
.price{
  font-size: 14px;
  color: #409eff;
  margin-right: 10px;
}
.host-order{
  color: #999;
}
.check-detail{
  width: 70px;
  height: 25px;
  line-height: 25px;
  display: inline-block;
  background: #2d8cf0;
  border-radius: 2px;
  border: 0;
  font-size: 12px;
  color: #fff;
  text-align: center;
  margin-top: 3px;
}
a{
  color: #333;
  text-decoration: none;
  outline: 0;
}
.item-left .title:hover{
  color: #777;
  text-decoration: underline;
}
</style>

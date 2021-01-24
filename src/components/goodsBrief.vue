<template>
  <div class="goodsbrief">
    <el-row>
      <el-image src="https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i3/112247518/O1CN01g8J4d825PIG7H1Apl_!!0-saturn_solar.jpg_580x580Q90.jpg"></el-image>
    </el-row>
    <el-row class="row">
      <label class="row-price">￥79.90</label>
    </el-row>
    <el-row class="row"><a class="row_link_title" href="#">极男沐浴露男持久留香沐浴液后背除螨古龙香体清爽沐浴乳男士专用</a></el-row>
    <el-row class="row"><a class="row_link_store" href="#">李可</a></el-row>
    <el-row class="row" >
      <el-col :span="12" class="row_trade_text">成交10笔</el-col>
      <el-col :span="12" class="row_comment_text">有100条评价</el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'goodsBrief'
}
</script>

<style scoped>
.goodsbrief{
  display: block;
  width: 100%;
  /*height: 390px;*/
  /*max-height: 450px;*/
  max-width: 375px;
  background-color: white;
  border: 1px solid red;
}

.row-price{
  color: orange;
  font-size: 18px;
  font-weight: bold;
  text-align: left;
}
.row-top{
  margin-top: 10px;
}
.row{
  margin-left: 4px;
  margin-top: 7px;
  margin-right: 4px;

}
.row_link_title{
  text-decoration: none;
  color: #3d3d3d;
  text-align: left;
  padding: 0px;
  max-height: 42px;
  overflow: hidden;
}
.row_link_store{
  color: #888888;
  text-align: left;
}
.row_link_title:hover,.row_link_store:hover {
  color: red;
  text-decoration: underline;
}

.row_comment_text{
  color: #888888;
  text-align: right;
}
.row_trade_text{
  color: #888888;
  text-align: left;
}
</style>

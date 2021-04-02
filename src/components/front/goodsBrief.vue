<template>
  <div class="goodsbrief">
    <el-row>
      <el-image class="img"  @click="clickGoodsDetail"
                src="https://gd3.alicdn.com/imgextra/i3/0/O1CN014nKo7o1KLpLD0PMQ9_!!0-item_pic.jpg_400x400.jpg"></el-image>
    </el-row>
    <el-row class="row">
      <label class="row-price">￥79.90</label>
    </el-row>
    <el-row class="row"><router-link class="row_link_title" to="/goodsDetail">Apple/苹果 MacBook Air 笔记本电脑超薄游戏本i7轻薄便携学生pro </router-link></el-row>
    <el-row class="row"><router-link class="row_link_store" to="/goodsStore">李可</router-link></el-row>
    <el-row class="row" >
      <el-col :span="12" class="row_trade_text">成交10笔</el-col>
      <el-col :span="12" class="row_comment_text">有100条评价</el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'goodsBrief',
  methods: {
    clickGoodsDetail () {
      this.$router.push('/goodsDetail')
    }
  }
}
</script>

<style scoped>
.goodsbrief{
  display: block;
  /*width: 100%;*/
  /*height: 390px;*/
  /*max-height: 450px;*/
  max-width: 417px;
  background-color: white;
  border: 1px solid red;
}
.img{
  width: 100%;
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

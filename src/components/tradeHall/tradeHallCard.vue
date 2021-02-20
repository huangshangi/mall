<template>
  <div class="allDiv">
    <div class="head">
      <div class="content"  v-if="explain">
         <span class="mode" style="padding-top: 40%">
          <strong>比稿模式</strong>
        </span>
      </div>
      <div class="content" v-else>
        <span class="number">
          <strong>2037264</strong>
          个雇主用
        </span>
        <span class="mode">
          <strong>比稿模式</strong>
        </span>
        <span class="intro">
          收获了满意的创意稿件
        </span>
      </div>
      <div class="image">
        <el-image src="https://as.zbjimg.com/static/nodejs-zbj-bid-api/widget/index-2019/mode-board/images/bigao_4128dc7.png"/>
      </div>
      <div class="line"/>
    </div>
    <div class="introduce" v-if="explain">
      雇主发布招标需求，多个服务商在投标期内参与投标，待雇主选择一位中标后，由中标服务商向雇主提交需求解决方案的交易模式。
    </div>
    <ul class="detailContent" v-else>
      <li v-for="item in 5" :key="item">
        <a href="#">全国：车友会logo设计</a>
        <span class="price">￥300</span>
      </li>
    </ul>
    <el-button type="primary" class="submit">发布比稿需求</el-button>
  </div>
</template>

<script>
export default {
  name: 'tradeHallCard',
  props: {
    explain: Boolean
  }
}
</script>

<style scoped>
.allDiv{
  border: 1px solid red;
  width: 90%;
  margin-left: 5%;
  margin-right: 5%;
}
.head{
  position: relative;
  height: 120px;
}
.content{
  float: left;
  text-align: left;
  padding-left: 6%;
  padding-top: 15px;
}
span{
  display: block;
}
.image{
  width: 64px;
  height: 64px;
  float: right;
  margin-top: 15px;
  margin-right: 5%;
  margin-left: 5%;
}
.content span{
  color: #666;
  font-size: 14px;
  line-height: 28px;
  opacity: .9;
}
.content strong{
  font-size: 20px;
  opacity: 1;
}
.content .mode strong{
  color: #409eff ;
}
.line{
  position: absolute;
  width: 100%;
  bottom: 0;
  height: 2px;
  background-image: linear-gradient(to right,#409eff,#ecf5ff);
}
.detailContent{
  padding: 25px 5% 10px 5%;
  list-style: none;
}
.detailContent li{
  line-height: 32px;
  font-size: 14px;
  overflow: hidden;
}
.detailContent li a{
  float: left;
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 50%;
  color: #333;
  text-decoration: none;
}
.detailContent li a:hover{
  color: #409eff;
}
.detailContent li span{
  float: right;
  color: #409eff;
}
.submit{
  width: 60%;
  margin-bottom: 20px;
}
.introduce{
  padding: 5%;
  color: #666;
  max-height: 160px;
  line-height: 24px;
  text-align: left;
}
</style>

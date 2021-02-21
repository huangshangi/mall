<template>
  <div class="allDiv">
    <div class="header">
      <span class="nameAndTime"><span>t****d</span>2021-02-21</span>
      <span class="numberPeople">4 人参与，剩4个名额</span>
    </div>
    <div class="body">
      <div class="title-box">
        <span class="title-box-a"><a href="#">济南紫金玫瑰股份有限公司需要电商运营</a> </span>
        <span class="tag"><el-tag>标签一</el-tag><el-tag>标签一</el-tag></span>
      </div>
      <div class="price-box">
        可议价
        <span>匹配中</span>
      </div>
      <div class="desc-box">
        京东，天猫，淘宝，阿里，微商城
      </div>
    </div>
    <div class="footer">
      <div class="type-box">
        <span>网店代运营</span>
      </div>
      <div class="button-box">
        <el-button class="button">我要投标</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tradeHallDemandCard'
}
</script>

<style scoped>
.allDiv{
  border: 1px solid red;
  text-align: left;
  width: 95%;
  margin-left: 20px;
}
.allDiv .header{
  font-size: 12px;
  line-height: 38px;
  height: 38px;
  border-bottom: 1px solid #eee;
  color: #a7a7a7;
  padding: 0 20px;
}
.body{
  display: block;
  padding: 0 20px;
  height: 113px;
  cursor: pointer;
}
.nameAndTime{
  float: left;
}
.numberPeople{
  float: right;
}
.title-box{
  line-height: 30px;
  margin-top: 5px;
  margin-bottom: 5px;
  overflow: hidden;
}
.title-box-a{
  font-size: 16px;
  color: #333;
  max-width: 180px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  float: left;
}
.title-box-a a{
  color: #333;
  text-decoration: none;
}
.title-box-a a:hover{
  color: #409eff;
}
.title-box .tag{
  float: right;
}
.price-box{
  font-size: 16px;
  font-weight: 700;
  color: #409eff;
}
.price-box span{
  font-size: 12px;
  position: relative;
  top: -1px;
}
.desc-box{
  font-size: 12px;
  color: #999;
  line-height: 20px;
  max-height: 40px;
  overflow: hidden;
}
.footer{
  height: 48px;
  background: #ecf5ff;
  padding: 0 20px;
  font-size: 12px;
  cursor: pointer;
}
.type-box{
  color: #999;
  line-height: 48px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 170px;
  float: left;
}
.button-box{
  float: right;
  margin: 5px auto;
}
.button-box .button{
  border: 1px solid #409eff;
  background: transparent;
  color: #409eff;
}
.button-box .button:hover{
  background: #66b1ff;
  color: white;
}
</style>

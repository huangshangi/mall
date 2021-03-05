<template>
  <div class="allDiv">
    <div class="title">
      <i></i>
      <h4 class="title-val">需求动态</h4>
    </div>
    <div class="content">
      <ul>
        <li class="item">
          <div class="date-div">
            <p class="time">10:09</p>
            <p class="date">2021-03-05</p>
          </div>
          <i class="curr"></i>
          <div class="currContent">您参与需求投标</div>
        </li>
        <li class="item">
          <div class="date-div">
            <p class="time">10:09</p>
            <p class="date">2021-03-05</p>
          </div>
          <i class="his"></i>
          <div>您参与需求投标</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tradeHallDemandDynamic'
}
</script>

<style scoped>
.allDiv{
  text-align: left;
  border: 1px solid red;
}
.title{
  position: relative;
  background: #fff;
  box-sizing: border-box;
  /*padding-bottom: 37px;*/
  /*margin-bottom: 5px;*/
}

.title i{
  position: absolute;
  left: 0;
  display: inline-block;
  width: 3px;
  height: 19px;
  background: #2D8CF0;
}
.title .title-val{
  font-size: 16px;
  color: #333;
  margin-left: 24px;
  font-weight: 700;
}
.content ul{
  list-style: none;
  position: relative;
  padding-left: 120px;
  overflow-y: scroll;
  max-height: 100px;
}
.content ul:before{
  width: 1px;
  height: 100%;
  content: "";
  display: inline-block;
  background: linear-gradient(180deg,#9fc6ee,#fff);
  position: absolute;
  top: 0;
}
.content ul li{
  width: 740px;
  box-sizing: border-box;
  font-size: 14px;
  position: relative;
  padding-bottom: 60px;
  padding-left: 20px;
  color: #999;
}
.content .date-div{
  position: absolute;
  top: -13px;
  left: -92px;
  width: 70px;
  text-align: center;
  color: #999;
}
.content .date-div .time{
  font-size: 14px;
  color: #222;
}
.content .date-div .date{
  font-size: 12px;
}
 .content .item .curr{
   border: 1px solid #2D8CF0;
   box-shadow: 0 0 4px 0 rgba(45,140,240,.73);
   width: 11px;
   height: 11px;
   top: 0;
   left: -5px;
   border-radius: 50%;
   background: #fff;
   box-sizing: border-box;
   position: absolute;
   display: inline-block;
 }
 .content .item .currContent{
   color: #333;
 }
.content .item .his{
  background: #2d8cf0;
  border: 1px solid #2d8cf0;
  box-shadow: 0 0 4px 0 #9fc6ee;
  width: 5px;
  height: 5px;
  top: 0;
  left: -2px;
  border-radius: 50%;
  box-sizing: border-box;
  position: absolute;
  display: inline-block;
}
</style>

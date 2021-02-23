<template>
  <div class="allDiv">
    <div class="statistics-box">
      <ul>
        <li class="item" v-for="item in 3" :key="item">
          <p class="val">0</p>
          <p class="desc">今日投标金额</p>
        </li>
      </ul>
    </div>
    <div class="notice-box">
      <div>
        <h1 class="title">
          <i class="icon"></i>
          <span>公告</span>
        </h1>
        <div class="content">
          <a href="#" v-for="item in 10" :key="item">【重要】交易工作台升级公告</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tradeHallRightNav'
}
</script>

<style scoped>
.statistics-box{
  margin-bottom: 10px;
  background: #fff;
}
.statistics-box ul{
  list-style: none;
  padding-left: 0px;
}
.item{
  font-size: 20px;
  display: inline-block;
  width: 100%;
  height: 91px;
  box-sizing: border-box;
  vertical-align: top;
  text-align: center;
  border-bottom: 1px solid #f6f6f6;
}
.val{
  line-height: 85px;
  color: #409eff;
  font-weight: 600;
}
.desc{
  font-size: 12px;
  color: #666;
  position: relative;
  top: -30px;
}
.notice-box{
  margin-bottom: 14px;
  padding: 23px 16px 16px;
  text-align: left;
}
.title{
  color: #409eff;
  font-weight: bolder;
  font-size: 16px;
  display: inline;
}
.title span{
  color: #409eff;
  font-weight: bolder;
  font-size: 16px;
  position: relative;
  top: -3px;
  left: 5px;
}
.title .icon{
  display: inline-block;
  width: 22px;
  height: 22px;
  background: url(../../../src/assets/img/notice.png) no-repeat;
}
.content a{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: block;
  margin-top: 15px;
  color: #666;
  font-size: 14px;
  text-decoration: none;
}
.content a:hover{
  color: #409eff;
}
.allDiv{
  border: 1px solid red;
}
</style>

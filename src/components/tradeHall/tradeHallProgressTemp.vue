<template>
  <div class="allDiv">
    <div class="title">
      <i></i>
      <h4 class="title-val">项目进度</h4>
      <a href="#" class="detailHref">详情 ></a>
    </div>
    <div class="progress-div">
      <el-progress :percentage="50"></el-progress>
    </div>
    <ul>
      <el-row>
        <el-col :span="6" v-for="item in 4" :key="item">
          <li class="progress-item">
            <p class="item-value">0</p>
            <p class="item-desc">今日待办</p>
          </li>
        </el-col>
      </el-row>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'tradeHallProgressTemp'
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
.title a{
  position: absolute;
  right: 30px;
  top: 0;
  font-size: 12px;
}
a{
  text-decoration: none;
  color: #606266;
}
a:hover{
  color: #409eff;
}
.title .title-val{
  font-size: 16px;
  color: #333;
  margin-left: 24px;
  font-weight: 700;
}
.progress-div{
  padding: 0 20px;
}
ul{
  text-align: center;
  padding-left: 26px;
  height: 54px;
  /*margin-top: 24px;*/
  list-style: none;
}
.progress-item{
  font-size: 12px;
  color: #999;
  display: inline-block;
  /*width: 63px;*/
  height: 54px;
  box-sizing: border-box;
  vertical-align: top;
}
.progress-item .item-value{
  font-size: 18px;
  color: #333;
  text-align: center;
  margin-bottom: 4px;
}
.progress-item .item-desc{
  text-align: center;
}
</style>

<template>
  <div class="allDiv">
    <div class="title">
      <i></i>
      <h4 class="title-val">需求详情</h4>
      <a href="#" class="detailHref">详情 ></a>
    </div>
    <ul>
      <li><a href="#">测试链接</a></li>
      <li><a href="#">测试链接</a></li>
      <li><a href="#">测试链接</a></li>
      <li><a href="#">测试链接</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'tradeHallFileListTemp'
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
ul{
  list-style: none;
  padding-left: 30px;
}
</style>

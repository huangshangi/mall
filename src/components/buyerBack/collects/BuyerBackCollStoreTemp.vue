<template>
  <div class="allDiv border">
    <el-row>
<!--      左侧-->
      <el-col :span="8">
        <div style="display: flex">
          <el-avatar :size="50" src="https://avatar.zbjimg.com/020/45/80/200x200_avatar_82.jpg!big"/>
          <span class="middleVertical">迷糊文化 精品视频动画</span>
        </div>
        <div class="storeBrief">
          <span>最近成交了1033笔订单</span>
          <span class="line">|</span>
          <span>最近获得102份好评</span>
        </div>
        <el-row>
          <el-col :span="10"><el-button class="normal">进入店铺</el-button></el-col>
          <el-col :span="10"><el-button type="primary">立即咨询</el-button></el-col>
        </el-row>
      </el-col>
<!--      右侧-->
      <el-col :span="15" :offset="1">
<!--        <evaluate-tarbar/>-->
      </el-col>
    </el-row>
  </div>
</template>

<script>
// import EvaluateTarbar from '@/components/evaluateTarbar'
export default {
  name: 'BuyerBackCollStoreTemp'
  // components: { EvaluateTarbar }
}
</script>

<style scoped>
.allDiv{
  text-align: left;
}
.border{
  border: 1px solid red;
}
.middleVertical{
  margin: auto 0px auto 10px;
}
.line{
  color: #e7e7e7;
  margin: 0 5px;
}
.storeBrief{
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: left;
}
.normal,.normal:focus{
  border-color: #3a8ee6;
  color: #3a8ee6;
  background-color: white;
}
.normal:hover{
  background-color: #409eff;
  color: white;
}
</style>

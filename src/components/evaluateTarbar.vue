<template>
  <div class="border alldiv">
    <el-row>
<!--      综合得分面板-->
      <el-col :span="4" :offset="1" class="border">
        <div >
          <label class="leftDivLabel marginTop5">综合得分</label>
          <label class="leftDivLabel scoreLabel marginTop5">{{leftValue}}</label>
          <div class="marginTop5">
            <el-rate disabled v-model="leftValue"/>
          </div>
        </div>
      </el-col>
<!--    得分统计面板-->
      <el-col :span="5" :offset="1" class="border">
        <ul class="leftdivUl">
          <li><span>服务态度：<em>4</em>分</span></li>
          <li><span>服务态度：<em>4</em>分</span></li>
          <li><span>服务态度：<em>4</em>分</span></li>
        </ul>
      </el-col>
      <el-col :span="10" :offset="1" class="border">
        <el-row>
          <el-col :span="10"><el-rate disabled v-model="leftValue" show-score="true" score-template="{value}分"/></el-col>
          <el-col :span="5"><span>共293人</span></el-col>
        </el-row>
        <div class="marginTop5"></div>
        <el-row v-for="item in 5" :key="item" class="detailGoal">
          <el-col :span="10"><el-rate disabled v-model="leftValue" show-score="true" score-template="{value}分"/></el-col>
          <el-col :span="10"><el-progress :percentage="20"  color="#f99d0c" stroke-width="10"></el-progress></el-col>
        </el-row>
      </el-col>
    </el-row>

    <el-row class="marginTop5">
      <el-col :offset="1" :span="22">
        <div class="evaluateDivLabel">
          <el-tag effect="dark">好评</el-tag>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'evaluateTarbar',
  data () {
    return {
      leftValue: 3.7
    }
  }
}
</script>

<style scoped>
.leftDivLabel{
  display: block;
}

.border{
  border: 1px solid red;
}

.alldiv{
  width: 1060px;
}

.scoreLabel{
  font-size: 25px;
  font-weight: bold;
  font-style: normal;
  color: #ff6600;
}

.marginTop5{
  margin-top: 5px;
}

.leftdivUl em{
  font-style: normal;
  color: #ff9400;
  margin-left: 5px;
}

.leftdivUl{
  text-align: left;
}
.leftdivUl li{
  list-style: none;
  margin-top: 5px;
  border: 1px solid transparent;
}

.leftdivUl li:hover{
  border: 1px solid red;
}
.overallGoal{
  margin: auto 0;
}
.evaluateDivLabel{
  text-align: left;
}
</style>

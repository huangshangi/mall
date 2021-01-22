<template>
  <div class="border">
    <el-row class="goodsDetailForm"><label class="contentInCenter">李可（专家名称）</label></el-row>
    <el-row class="goodsDetailForm">
      <el-col :span="8"><el-row><label class="contentInCenter">态度</label></el-row><el-row><label class="contentInCenter">4.9</label></el-row></el-col>
      <el-col :span="8"><el-row><label class="contentInCenter">态度</label></el-row><el-row><label class="contentInCenter">4.9</label></el-row></el-col>
      <el-col :span="8"><el-row><label class="contentInCenter">态度</label></el-row><el-row><label class="contentInCenter">4.8</label></el-row></el-col>
    </el-row>
    <el-row class="goodsDetailForm"><el-col><el-button>与他交流</el-button></el-col></el-row>
  </div>
</template>

<script>
export default {
  name: 'storeBriefInformation'
}
</script>

<style scoped>
.goodsDetailForm{
  margin-top: 15px;
}
.contentInCenter{
  margin: auto;
}
.border{
  border: 1px solid red;
}
</style>

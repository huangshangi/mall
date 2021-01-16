<template>
  <slot name="image"></slot>
  <el-row>
    <el-col :offset="7" :span="1.5"><el-button class="button-noborader">全部</el-button></el-col>
    <el-col :span="1.5"><el-button class="button-noborader">解决方案</el-button></el-col>
    <el-col :span="1.5"><el-button class="button-noborader">专家</el-button></el-col>
  </el-row>

  <el-row>
    <el-col :offset="7" :span="6"><el-input placeholder="请输入内容" prefix-icon="el-icon-search"> </el-input></el-col>
    <el-col :span="1"><el-button class="button-normal">搜索</el-button></el-col>
    <el-col :span="2" :offset="2"><el-button class="button-normal">发布需求</el-button></el-col>

  </el-row>

</template>

<script>
export default {
  name: 'search'
}
</script>

<style scoped>
.button-noborader{
  border-style: none;
}
.button-normal{
  border-style: none;
}
.button-noborader:focus,.button-noborader:hover,.button-normal,.button-normal:focus,.button-normal:hover{
  background-color: orange;
  color: white;
}

.button-normal:hover{
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
}
</style>

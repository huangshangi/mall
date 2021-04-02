<template>
  <el-row class="border">
      <el-col :span="3" class="search-positon-div">
        <div class="search-positon-img">
          <router-link to="/"><el-image :src="require('../../assets/logo.png')"></el-image></router-link>
        </div>
      </el-col>
      <el-col :span="10" :offset="10" v-if="!search">
        <el-steps align-center="true">
          <el-step title="拍下商品"></el-step>
          <el-step title="付款到支付宝"></el-step>
          <el-step title="确认收货"></el-step>
          <el-step title="评价"></el-step>
        </el-steps>
      </el-col>
    <el-col :offset="1" :span="18" v-else>
      <el-row>
        <el-col :span="1.5"><el-button class="button-noborader">全部</el-button></el-col>
        <el-col :span="1.5"><el-button class="button-noborader">解决方案</el-button></el-col>
        <el-col :span="1.5"><el-button class="button-noborader">专家</el-button></el-col>
      </el-row>
      <el-row>
        <el-col :span="18"><el-input placeholder="请输入内容" prefix-icon="el-icon-search"> </el-input></el-col>
        <el-col :span="1"><el-button class="button-normal" @click="clickSearch">搜索</el-button></el-col>
        <el-col :span="2" :offset="2"><el-button class="button-normal" @click="clickPublishDemand">发布需求</el-button></el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'search',
  props: {
    search: Boolean
  },
  methods: {
    clickSearch () {
      this.$router.push('/search')
    },
    clickPublishDemand () {
      this.$router.push('/publishDemand')
    }
  }
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
  background-color: #409eff;
  color: white;
}

.button-normal:hover{
  background-color: #66b1ff;
  /*box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);*/
}

.search-positon-div{
  position: relative;
  /*background-color: red;*/
}
.search-positon-img{
  position: absolute;
  bottom: 0px;
  /*top: 50%;*/
  /*transform: translateY(-50%);*/
  /*background-color: green;*/
}
.border{
  border: 1px solid red;
}
</style>

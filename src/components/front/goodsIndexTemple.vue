<template>
  <div class="goodsIndexAllDiv">
    <div class="goodsIndexTitle">{{title}}</div>
      <el-tabs v-model="first" @tab-click="handleClick">
        <el-tab-pane label="用户管理" name="first">
          <el-row v-for="(row,index) in 3" :key="row+index">
            <el-col span="8" v-for="item in 3" :key="item"><goods-brief/></el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
        <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
        <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
      </el-tabs>
  </div>
</template>

<script>
import goodsBrief from './goodsBrief'
export default {
  name: 'goodsIndexTemple',
  components: { goodsBrief },
  props: {
    title: String
  },
  data () {
    return {
      first: 'first'
    }
  }
}
</script>

<style scoped>
.goodsIndexAllDiv {
  border: red solid 1px;
  background-color: #13ce66;
  /*width: 1920px;*/
  width: 100%;
  text-align: left;
}
.goodsIndexTitle{
  text-align: left;
  font-size: 20px;
  font-weight: bolder;
  color: black;
}
.goods-div-row{
  display: inline-block;
}
.goods-div-col{
  /*margin: 4px;*/
}
</style>

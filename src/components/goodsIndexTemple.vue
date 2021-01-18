<template>
  <div class="goodsIndexAllDiv">
    <div class="goodsIndexTitle">{{title}}</div>
      <el-tabs v-model="first" @tab-click="handleClick">
        <el-tab-pane label="用户管理" name="first">
          <div v-for="(row,index) in 4" :key="row+index" class="goods-div-row">
            <div v-for="(item,index2) in 2" :key="item+index2" class="goods-div-col">
              <goods-brief/>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
        <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
        <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
      </el-tabs>
  </div>
</template>

<script>
import goodsBrief from '@/components/goodsBrief'
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
  /*width: 1920px;*/
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
  margin: 4px;
}
</style>

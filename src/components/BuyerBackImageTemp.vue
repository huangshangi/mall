<template>
  <div class="allDiv">
    <el-row>
      <el-image src="https://homesitetask.zbjimg.com/homesite%2Ftask%2FMG%E5%8A%A8%E7%94%BB50.png%2Forigine%2F7e600c76-bb7d-4c34-b13d-3c4cf1dd5b5a"></el-image>
    </el-row>
    <el-row>
      <span class="content left"><a href="#">二维Flash飞碟说驻真二维Flash飞碟说驻真二维Flash飞碟说驻真</a></span>
    </el-row>
    <el-row>
      <el-col :span="10" class="content left"><span class="price">￥50</span></el-col>
      <el-col :offset="4" :span="10" class="content right"><span class="normal">21小时前</span></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'BuyerBackImageTemp'
}
</script>

<style scoped>
.content{
  margin-left: 5px;
  display: inline-block;
  white-space: nowrap;
  width: 100%;
  overflow: hidden;
  text-overflow:ellipsis;
  font-size: 12px;
}
.allDiv{
  border: 1px solid red;
  width: 100%;
}
.left{
  text-align: left;
}
.right{
  text-align: right;
}
.content a,.content .normal{
  color: #606266;
  text-decoration: none;
}
.content a:hover{
  color: #409eff;
}
.content .price{
  color: #409eff;
  font-size: 14px;
  font-weight: bold;
}
</style>

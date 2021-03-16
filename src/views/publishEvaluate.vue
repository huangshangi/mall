<template>
  <div class="border">
    <el-row><el-col :offset="3" :span="18"><mall-title/></el-col></el-row>
    <el-row><el-col :offset="3" :span="18"><search :search="true"/></el-col></el-row>
    <el-row><el-col :offset="3" :span="18"><goods-detail-main :show-evalute="true"/></el-col></el-row>
    <el-row><el-col :offset="3" :span="18"><publish-evaluate-main/></el-col></el-row>
  </div>
</template>

<script>
import mallTitle from '@/components/mallTitle'
import Search from '@/components/search'
import GoodsDetailMain from '@/components/goodsDetailMain'
import PublishEvaluateMain from '@/components/publishEvaluateMain'
export default {
  name: 'publishEvaluate',
  components: { PublishEvaluateMain, GoodsDetailMain, Search, mallTitle }
}
</script>

<style scoped>
.border{
  border: 1px solid red;
}
</style>

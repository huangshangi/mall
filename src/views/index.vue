<template>
<!--  首页-->
  <el-row><el-col :offset="3" :span="18"><mall-title></mall-title></el-col></el-row>
  <el-row class="marginTop10">
    <el-col :span="18" :offset="3"><Search :search="true"></Search></el-col>
  </el-row>
  <el-row class="marginTop10">
    <el-col :span="18" :offset="3"><index-main/></el-col>
  </el-row>
  <!--推荐商品页-->
  <el-row class="marginTop10">
    <el-col :offset="3" :span="18">
      <goods-index-temple title="热门解决方案"/>
    </el-col>
  </el-row>
<!--  推荐专家页-->
  <el-row class="marginTop10">
    <el-col :offset="3" :span="18">
      <goods-index-temple title="热门专家"/>
    </el-col>
  </el-row>
</template>

<script>
import mallTitle from '../components/front/mallTitle'
import Search from '../components/front/search'
import goodsIndexTemple from '../components/front/goodsIndexTemple'
import IndexMain from '../components/front/indexMain'
export default {
  name: 'index',
  components: {
    IndexMain,
    Search,
    mallTitle,
    goodsIndexTemple
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.image{
  display: inline;
}
.marginTop10{
  margin-top: 10px;
}
.border{
  border: 1px solid red;
}
</style>

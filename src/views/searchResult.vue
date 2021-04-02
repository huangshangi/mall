<template>
<!--  搜索结果页面-->
  <el-row><el-col :offset="3" :span="18"><mall-title></mall-title></el-col></el-row>
  <el-row class="marginTop10">
    <el-col :span="18" :offset="3"><Search :search="true"></Search></el-col>
  </el-row>
  <el-row class="marginTop10">
    <el-col :offset="3" :span="18">
      <goods-index-temple title="搜索结果"/>
    </el-col>
  </el-row>
</template>

<script>
import mallTitle from '../components/front/mallTitle'
import Search from '../components/front/search'
import goodsIndexTemple from '../components/front/goodsIndexTemple'
export default {
  name: 'searchResult',
  components: {
    Search,
    mallTitle,
    goodsIndexTemple
  }
}
</script>

<style scoped>

</style>

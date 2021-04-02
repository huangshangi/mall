<template>
<!--  购物车界面-->
  <el-row>
    <el-col :span="18" :offset="3"><mall-title></mall-title></el-col>
  </el-row>
  <el-row>
    <el-col :span="18" :offset="3"><Search :search="false"></Search></el-col>
  </el-row>
  <el-row>
    <el-col :span="18" :offset="3"><shoppingCartMain/></el-col>
  </el-row>
</template>

<script>
import shoppingCartMain from '../components/front/shoppingCartMain'
import mallTitle from '../components/front/mallTitle'
import Search from '../components/front/search'
export default {
  name: 'shoppingCart',
  components: { mallTitle, shoppingCartMain, Search }
}
</script>

<style scoped>

</style>

<template>
  <Title></Title>
  <el-row>
    <el-col :span="18" :offset="3"><Search></Search></el-col>
  </el-row>
  <el-row>
    <el-col :span="18" :offset="3"><shoppingCartMain/></el-col>
  </el-row>
</template>

<script>
import shoppingCartMain from '@/components/shoppingCartMain'
import Title from '@/components/title'
import Search from '@/components/search'
export default {
  name: 'shoppingCart',
  components: { Title, shoppingCartMain, Search }
}
</script>

<style scoped>

</style>

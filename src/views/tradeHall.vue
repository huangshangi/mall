<template>
  <el-row><el-col :offset="3" :span="18"><mall-title></mall-title></el-col> </el-row>
  <el-row><el-col :offset="3" :span="18"><search :search="true"></search></el-col></el-row>
  <el-row>
    <el-col :offset="3" :span="18">
      <nav-template :header-show="false" :options="navtars"></nav-template>
      <trade-hall-index/>
    </el-col>
  </el-row>
</template>

<script>
import mallTitle from '../components/mallTitle'
import Search from '../components/search'
import NavTemplate from '../components/navTemplate'
import TradeHallIndex from '../components/tradeHall/tradeHallIndex'
export default {
  name: 'tradeHall',
  components: { TradeHallIndex, NavTemplate, Search, mallTitle },
  data () {
    return {
      navtars: [{ title: '首页' }, { title: '招标大厅' }, { title: '比稿大厅' }, { title: '计件大厅' }]
    }
  }
}
</script>

<style scoped>

</style>

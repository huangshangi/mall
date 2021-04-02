<template>
  <div class="border">
    <el-row>
      <el-col :span="18" :offset="3"><mall-title/></el-col>
    </el-row>
    <el-row>
      <el-col :span="18" :offset="3"><Search :search="false"></Search></el-col>
    </el-row>
    <el-row><el-col :span="18" :offset="3"><setting-order-main/></el-col></el-row>
  </div>
</template>

<script>
import mallTitle from '../components/front/mallTitle'
import Search from '../components/front/search'
import SettingOrderMain from '../components/front/settingOrderMain'
export default {
  name: 'settingOrder',
  components: { SettingOrderMain, mallTitle, Search }
}
</script>

<style scoped>
.border{
  border: 1px solid red;
}
</style>

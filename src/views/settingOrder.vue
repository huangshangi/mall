<template>
  <div class="border">
    <mall-title></mall-title>
    <el-row>
      <el-col :span="18" :offset="3"><Search></Search></el-col>
    </el-row>
    <el-row><el-col :span="18" :offset="3"><setting-order-main/></el-col></el-row>
  </div>
</template>

<script>
import mallTitle from '@/components/title'
import Search from '@/components/search'
import SettingOrderMain from '@/components/settingOrderMain'
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

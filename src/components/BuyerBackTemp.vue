<template>
  <div>
    <back-title-temp :seller="false"/>
    <el-row>
      <el-col :span="3" style="z-index: 1">
        <buyer-back-nav/>
      </el-col>
      <el-col :span="21" style="z-index: 2">
        <buyer-back-index/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import BuyerBackNav from '@/components/BuyerBackNav'
import BuyerBackIndex from '@/components/BuyerBackIndex'
import BackTitleTemp from './backTitleTemp'
export default {
  name: 'BuyerBackTemp',
  components: { BackTitleTemp, BuyerBackIndex, BuyerBackNav }
}
</script>

<style scoped>

</style>

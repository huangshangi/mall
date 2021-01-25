<template>
  <div>
    <buyer-back-title/>
    <el-row>
      <el-col :span="3">
        <buyer-back-nav/>
      </el-col>
      <el-col :span="21">
        <buyer-back-index/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import BuyerBackTitle from '@/components/BuyerBackTitle'
import BuyerBackNav from '@/components/BuyerBackNav'
import BuyerBackIndex from '@/components/BuyerBackIndex'
export default {
  name: 'BuyerBackTemp',
  components: { BuyerBackIndex, BuyerBackNav, BuyerBackTitle }
}
</script>

<style scoped>

</style>

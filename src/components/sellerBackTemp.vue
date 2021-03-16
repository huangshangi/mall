<template>
  <back-title-temp :seller="true"/>
  <el-row>
    <el-col :span="3">
      <seller-back-nav/>
    </el-col>
    <el-col :span="21">
      <buyer-back-index/>
    </el-col>
  </el-row>
</template>

<script>
import BackTitleTemp from './buyerBack/backTitleTemp'
import SellerBackNav from './sellerBackNav'
import BuyerBackIndex from './buyerBack/BuyerBackIndex'
export default {
  name: 'sellerBackTemp',
  components: { BuyerBackIndex, SellerBackNav, BackTitleTemp }
}
</script>

<style scoped>

</style>

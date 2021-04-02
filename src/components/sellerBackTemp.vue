<template>
  <back-title-temp :seller="true"/>
  <el-row>
    <el-col :span="3">
      <seller-back-nav/>
    </el-col>
    <el-col :span="21">
      <seller-back-index/>
    </el-col>
  </el-row>
</template>

<script>
import BackTitleTemp from './buyerBack/common/backTitleTemp'
import SellerBackNav from './sellerBackNav'
import SellerBackIndex from './sellerBack/sellerBackIndex'
export default {
  name: 'sellerBackTemp',
  components: { SellerBackIndex, SellerBackNav, BackTitleTemp }
}
</script>

<style scoped>

</style>

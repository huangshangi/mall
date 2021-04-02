<template>
  <div>
    <back-title-temp :seller="true"/>
    <el-row>
      <el-col :span="3">
        <seller-back-nav/>
      </el-col>
      <el-col :span="21" style="padding: 20px">
        <router-view/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import BackTitleTemp from '../components/buyerBack/common/backTitleTemp'
import SellerBackNav from '../components/sellerBackNav'
export default {
  name: 'sellerBackTemp',
  components: { SellerBackNav, BackTitleTemp }
}
</script>

<style scoped>

</style>

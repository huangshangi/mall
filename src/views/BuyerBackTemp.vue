<template>
  <div>
    <back-title-temp :seller="false"/>
    <el-row>
      <el-col :span="3" style="z-index: 1">
        <buyer-back-nav :activeTab="activeTab"/>
      </el-col>
      <el-col :span="21" style="z-index: 2">
        <router-view v-on:changeNav="changeNav"></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import BuyerBackNav from '../components/buyerBack/common/BuyerBackNav'
import BackTitleTemp from '../components/buyerBack/common/backTitleTemp'
export default {
  name: 'BuyerBackTemp',
  components: { BackTitleTemp, BuyerBackNav },
  data () {
    return {
      activeTab: '1'
    }
  },
  methods: {
    changeNav (index) {
      this.activeTab = index
    }
  }
}
</script>

<style scoped>

</style>

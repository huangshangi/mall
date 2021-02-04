<template>
  <div>
    <p style="margin: 10px;text-align: left">我的退款</p>
    <buyer-back-refund-navbar/>
    <buyer-back-refund-title/>
    <template v-for="item in 10" :key="item">
      <buyer-back-refund-item/>
    </template>
  </div>
</template>

<script>
import BuyerBackRefundNavbar from '@/components/BuyerBackRefundNavbar'
import BuyerBackRefundTitle from '@/components/BuyerBackRefundTitle'
import BuyerBackRefundItem from '@/components/BuyerBackRefundItem'
export default {
  name: 'BuyerBackRefundTemp',
  components: { BuyerBackRefundItem, BuyerBackRefundTitle, BuyerBackRefundNavbar }
}
</script>

<style scoped>

</style>

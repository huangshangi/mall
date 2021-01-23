<template>
  <div class="allDiv">
    <order-item/>
  </div>
</template>

<script>
import OrderItem from '@/components/orderItem'
export default {
  name: 'settingOrderItem',
  components: { OrderItem }
}
</script>

<style scoped>
.allDiv{
  width: 990px;
}
.border{
  border: 1px solid red;
}
</style>

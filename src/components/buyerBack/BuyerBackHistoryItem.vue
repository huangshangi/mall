<template>
  <div class="allDiv" style="margin-top: 10px;">
    <span class="date" v-if="!first">1.25</span>
    <buyer-back-image-temp :history="true"/>
  </div>

</template>

<script>
import BuyerBackImageTemp from '@/components/BuyerBackImageTemp'
export default {
  name: 'BuyerBackHistoryItem',
  props: {
    first: Boolean
  },
  data () {

  },
  components: { BuyerBackImageTemp }
}
</script>
<style scoped>
.date{
  position: absolute;
  top: -12px;
  left: 15px;
  font-size: 20px;
  line-height: 20px;
  padding: 0 5px;
  color: #409eff;
  background: #fff;
  z-index: 2;
  text-align: left;
}
.allDiv{
  border-top:1px solid #dcdbdb;
  position: relative;
}
</style>

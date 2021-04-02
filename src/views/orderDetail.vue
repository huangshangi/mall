<template>
 <el-row>
   <el-col :offset="3" :span="18">
     <receive-and-order-template>
       <template v-slot:mainContent>
         <el-row><el-col><span>订单状态：交易成功</span></el-col></el-row>
         <el-row>
           <el-col :span="12">成交时间：2021-01-11 21:13:09</el-col>
           <el-col :span="12">发货时间：2021-01-11 21:13:09</el-col>
         </el-row>
         <el-row>
           <el-col :span="12">付款时间：2021-01-11 21:13:09</el-col>
           <el-col :span="12">完结时间：2021-01-11 21:13:09</el-col>
         </el-row>
         <el-row><el-col><span>您可以</span>
           <el-button @click="clickEvaluate">评价</el-button>
           <el-button @click="clickRefund">退款</el-button>
           <el-button @click="clickReport">投诉</el-button>
         </el-col></el-row>
       </template>
     </receive-and-order-template>
   </el-col>
 </el-row>
</template>

<script>
import ReceiveAndOrderTemplate from '../components/front/orderDetails/receiveAndOrderTemplate'
export default {
  name: 'orderDetail',
  components: { ReceiveAndOrderTemplate },
  methods: {
    clickEvaluate () {
      this.$router.push('/publishEvaluate')
    },
    clickRefund () {
      this.$router.push('/refund')
    },
    clickReport () {
      this.$router.push('/report')
    }
  }
}
</script>

<style scoped>
</style>

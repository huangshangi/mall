<template>
<!--    <router-link to="/">Home</router-link> |-->
<!--    <router-link to="/title">About</router-link>-->
<!--  <index/>-->
<!--  <router-view/>-->
<!--  <goodsIndexTemple/>-->
<!--  <slide-show/>-->
  <GoodsDetailService/>
</template>

<script>
// import index from '@/views/index'
// import goodsIndexTemple from '@/components/goodsIndexTemple'
// import goodsBrief from '@/components/goodsBrief'
// import testParent from '@/components/test-parent'
// import GoodsDetail from '@/views/goodsDetail'
import GoodsDetailService from '@/components/goodsDetailService'
// import slideShow from '@/components/slideShow'
export default {
  components: { GoodsDetailService }
}
</script>

<style lang="stylus">
@import "assets/css/common.css"
</style>

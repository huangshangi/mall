<template>
  <el-row class="border">
    <!--    商品类别级联-->
    <el-col :span="6">
      <GoodCascader></GoodCascader>
    </el-col>
    <!--轮播图-->
    <el-col :span="11">
      <el-carousel height="500px" style="background-color: red" autoplay="false" interval="10000000000000">
        <el-carousel-item v-for="(item,index) in goodsRecommend" :key="index">
          <el-image class="image" :src="item" object-fit="fill"/>
        </el-carousel-item>
      </el-carousel>
    </el-col>
    <!--    个人信息页-->
    <el-col :span="7">
      <Profile/>
    </el-col>
  </el-row>
</template>

<script>
import GoodCascader from '@/components/goodsCascader'
import Profile from '@/components/profile'
export default {
  name: 'indexMain',
  components: { GoodCascader, Profile },
  data () {
    return {
      goodsRecommend: ['https://img13.360buyimg.com/da/s1180x940_jfs/t1/147280/6/10614/56058/5f8551b4Efdb27ec4/2730f7c703b0c9bc.jpg.webp']
    }
  }
}
</script>

<style scoped>
.image{
  display: inline;
}
.marginTop10{
  margin-top: 10px;
}
.border{
  border: 1px solid red;
}
</style>

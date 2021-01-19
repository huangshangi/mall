<template>
  <Title></Title>
  <el-row>
    <el-col :span="18" :offset="3"><Search></Search></el-col>
  </el-row>
  <el-row>
<!--    商品类别级联-->
    <el-col :offset="3" :span="4">
      <GoodCascader></GoodCascader>
    </el-col>
<!--轮播图-->
    <el-col :span="8">
      <el-carousel height="500px" style="background-color: red" autoplay="false" interval="10000000000000">
        <el-carousel-item v-for="(item,index) in goodsRecommend" :key="index">
          <el-image class="image" :src="item" object-fit="fill"/>
        </el-carousel-item>
      </el-carousel>
    </el-col>
<!--    个人信息页-->
    <el-col :span="5">
      <Profile/>
    </el-col>
  </el-row>

  <!--推荐商品页-->
  <el-row>
    <el-col :offset="3" span="18">
      <goods-index-temple title="热门解决方案"/>
    </el-col>
  </el-row>
<!--  推荐专家页-->
  <el-row>
    <el-col :offset="3" span="18">
      <goods-index-temple title="热门专家"/>
    </el-col>
  </el-row>
</template>

<script>
import Title from '../components/title'
import Search from '@/components/search'
import GoodCascader from '@/components/goodsCascader'
import Profile from '@/components/profile'
// import GoodsBrief from '@/components/goodsBrief'
import goodsIndexTemple from '@/components/goodsIndexTemple'
export default {
  name: 'index',
  components: {
    Profile,
    GoodCascader,
    Search,
    Title,
    goodsIndexTemple
  },
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
</style>

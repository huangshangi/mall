<template>
  <Title></Title>
  <Search></Search>
  <el-row>
<!--    商品类别级联-->
    <el-col :offset="3" :span="3">
      <GoodCascader></GoodCascader>
    </el-col>
<!--轮播图-->
    <el-col :span="9">
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

</template>

<script>
import Title from '../components/title'
import Search from '@/components/search'
import GoodCascader from '@/components/goodsCascader'
import Profile from '@/components/profile'
export default {
  name: 'index',
  components: {
    Profile,
    GoodCascader,
    Search,
    Title
  },
  data () {
    return {
      goodsRecommend: ['https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2961606521,3400735427&fm=26&gp=0.jpg']
    }
  }
}
</script>

<style scoped>
.image{
  display: inline;
}
</style>

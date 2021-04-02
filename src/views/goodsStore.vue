<template>
  <div class="allDiv">
    <el-row>
      <el-col :offset="3" :span="18">
        <mall-title></mall-title>
      </el-col>
    </el-row>
    <el-row>
      <el-col :offset="3" :span="18">
        <search :search="true"/>
      </el-col>
    </el-row>
    <!--  导航栏-->
    <nav-template :header-show="true"/>
    <el-row>
<!--      左侧-->
      <el-col :offset="3" :span="3" class="border">
        <store-brief-information/>
        <div class="storeSearch border">
          <el-input prefix-icon="el-icon-search" placeholder="请输入搜索内容" class="input"/>
          <el-button class="button">搜索</el-button>
        </div>
        <div>
          <el-carousel height="150px" style="background-color: red" autoplay="false" interval="10000000000000">
            <el-carousel-item v-for="(item,index) in goodsRecommend" :key="index">
              <el-image class="image" :src="item" object-fit="fill"/>
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="border">
          <el-tree :data="data"></el-tree>
        </div>
      </el-col>
<!--    右侧-->
      <el-col :offset="1" :span="14" class="border">
        <el-row>
          <el-col :span="6" :offset="1">
            <el-input prefix-icon="el-icon-search" placeholder="请输入关键字"/>
          </el-col>
          <el-col :span="12">
            <div style="display: inline">
              <el-input class="smallInput" placeholder="最低价格"/>
              至
              <el-input class="smallInput" placeholder="最高价格"/>
            </div>
          </el-col>
          <el-col :span="3">
            <el-button>搜索</el-button>
          </el-col>
        </el-row>
        <el-divider></el-divider>
        <nav-template :header-show="false"/>
        <template v-for="(item,index) in 5" :key="item+index">
          <el-row>
            <el-col v-for="itemCol in 3" :key="itemCol" :span="8">
              <goods-brief/>
            </el-col>
          </el-row>
        </template>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Search from '../components/front/search'
import mallTitle from '../components/front/mallTitle'
import NavTemplate from '../components/front/navTemplate'
import StoreBriefInformation from '../components/front/storeBriefInformation'
import goodsBrief from '../components/front/goodsBrief'
export default {
  name: 'goodsStore',
  data () {
    return {
      goodsRecommend: ['https://img13.360buyimg.com/da/s1180x940_jfs/t1/147280/6/10614/56058/5f8551b4Efdb27ec4/2730f7c703b0c9bc.jpg.webp'],
      data: [{
        label: '一级 1',
        children: [{
          label: '二级 1-1',
          children: [{
            label: '三级 1-1-1'
          }]
        }]
      }, {
        label: '一级 2',
        children: [{
          label: '二级 2-1',
          children: [{
            label: '三级 2-1-1'
          }]
        }, {
          label: '二级 2-2',
          children: [{
            label: '三级 2-2-1'
          }]
        }]
      }, {
        label: '一级 3',
        children: [{
          label: '二级 3-1',
          children: [{
            label: '三级 3-1-1'
          }]
        }, {
          label: '二级 3-2',
          children: [{
            label: '三级 3-2-1'
          }]
        }]
      }]
    }
  },
  components: { StoreBriefInformation, Search, mallTitle, NavTemplate, goodsBrief }
}
</script>

<style scoped>
.allDiv{
  border: 1px solid red;
}

.border{
  border: 1px solid red;
}
.storeSearch{
  width: 100%;
}

.storeSearch{
  display: block;
}
.storeSearch .input{
  margin-top: 10px;
  width: 150px;
}
.storeSearch .button{
  margin-top: 10px;
  width: 100px;
}
.image{
  display: inline;
}
.smallInput{
  width: 150px;
}
.goods-div-row{
  display: inline-block;
}
.goods-div-col{
  margin: 4px;
}
</style>

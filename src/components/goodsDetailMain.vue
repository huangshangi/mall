<template>
  <!--商品详细信息-->
  <div class="allDiv">
    <el-row class="marginTop10">
      <!--  商品图片  -->
      <el-col :span="10">
        <el-row>
          <el-image class="border goodsDetailImage" :src="currentSrc"/>
        </el-row>
        <el-row>
          <el-col :span="4" v-for="(item,index) in images" :key="index" class="thumbnail" :class="{'thumbnail-sele': index === currentPicIndex}">
            <el-image  :src="item" @mouseover="goodsDetailImageChange(index)"/>
          </el-col>
        </el-row>
      </el-col>
      <!--    商品介绍 价格-->
      <el-col :offset="1" :span="13">
        <el-row><div class="goods-title">移动联通电信4G手机 双卡双待Apple iPhone 11 (A2223) 128GB 黑色 移动联通电信4G手机 双卡双待</div></el-row>
        <el-form label-position="left" label-width="160px" class="goodsDetailForm">
          <el-form-item class="goodsDetailFormItemTitle" label="价&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;格">
            <label class="goodsDetailFormItemContent">￥4799元</label>
          </el-form-item>
          <el-form-item class="goodsDetailFormItemTitle" label="订单平均响应时间">
            <label class="goodsDetailFormItemContent"> 17分钟</label>
          </el-form-item>
          <el-form-item class="goodsDetailFormItemTitle" label="订单平均完成时间">
            <label class="goodsDetailFormItemContent">2天</label>
          </el-form-item>
          <el-form-item class="goodsDetailFormItemTitle" label="数&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;量">
            <div class="">
              <el-input-number v-model="num" @change="handleChange"  label="描述文字" v-if="!showEvalute"></el-input-number>
              <div v-else>
                <label class="goodsDetailFormItemContent">{{ num }}</label>
                <label class="goodsDetailFormItemContent">您于2021年01月25日 12:17购买</label>
              </div>
            </div>
          </el-form-item>
        </el-form>
        <div v-if="!showEvalute">
          <el-row class="goodsDetailFormItemTitle goodsDetailForm">
            <el-col :span="8">
              <el-button class="buttonBuyNow">立即购买</el-button>
            </el-col>
            <el-col :span="8">
              <el-button class="buttonAddCart">加入购物车</el-button>
            </el-col>
          </el-row>
          <el-row class="goodsDetailForm">
            <el-col :span="12" ><el-button class="buttonBuyNow buttonAsk">咨询商家</el-button></el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>

  </div>
</template>

<script>
export default {
  name: 'goodsDetailMain',
  props: {
    showEvalute: Boolean
  },
  methods: {
    goodsDetailImageChange (index) {
      this.currentPicIndex = index
    }
  },
  computed: {
    currentSrc () {
      return this.images[this.currentPicIndex]
    }
  },
  data () {
    return {
      images: ['https://img12.360buyimg.com/n5/s54x54_jfs/t1/148767/39/18017/86358/5fd32ff0E5ca41721/d885f7c401dfa557.jpg',
        'https://img12.360buyimg.com/n5/s54x54_jfs/t1/142574/9/17878/51690/5fd34693E1d6142e2/d2d35afca393e566.jpg',
        'https://img12.360buyimg.com/n5/s54x54_jfs/t1/136123/20/19495/50331/5fd34697E35ee8d84/9e542233d66da7c1.jpg',
        'https://img12.360buyimg.com/n5/s54x54_jfs/t1/133295/19/19538/138037/5fd3469bE861a6bd9/f8b640b7d732a93c.jpg',
        'https://img12.360buyimg.com/n5/s54x54_jfs/t1/141270/6/17695/85325/5fd3469eE061669e3/4ace6b708fd72215.jpg',
        'https://img12.360buyimg.com/n5/s54x54_jfs/t1/141270/6/17695/85325/5fd3469eE061669e3/4ace6b708fd72215.jpg'],
      currentPicIndex: 0,
      num: 3
    }
  }
}
</script>

<style scoped>
.border{
  border: 1px solid red;
}
.allDiv{

}
.thumbnail{
  text-align: center;
}
.thumbnail:hover{
  border: 1px solid red;
}
.goodsDetailImage{
  width: 450px;
  height: 450px;
}
.goods-title{
  text-align: left;
  color: black;
  font-weight: bolder;
  font-size: 15pt;
  max-height: 55px;
}
.goodsDetailForm{
  margin-top: 15px;
}
.goodsDetailFormItemTitle{
  text-align: left;
}
.goodsDetailFormItemContent{
  padding-left: 20px;
  display: block;
}
.marginTop10{
  margin-top: 10px;
}
.buttonBuyNow,.buttonBuyNow:active{
  background-color: #ecf5ff ;
  color: #409eff ;
}
.buttonBuyNow:active{
  /*border: transparent;*/
}
.buttonAddCart,.buttonAddCart:focus,.buttonAddCart:hover,.buttonAddCart:active{
  background-color: #409eff ;
  color: white;
}
.buttonAsk{
  width: 100% ;
}
</style>

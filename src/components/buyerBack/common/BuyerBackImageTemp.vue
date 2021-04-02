<template>
  <div class="allDiv">
    <el-row style="position: relative">
      <div :style="{'display': hover?'block':'none'}"  @mouseover="deleteIn()" @mouseout="deleteOut()"><a class="delete">删除</a></div>
      <el-image @mouseover="imageIn()" @mouseout="imageOut()" @click="clickGoodsDetail" class="img"
                src="https://homesitetask.zbjimg.com/homesite%2Ftask%2FMG%E5%8A%A8%E7%94%BB50.png%2Forigine%2F7e600c76-bb7d-4c34-b13d-3c4cf1dd5b5a"></el-image>
      <div v-if="!history" :style="{'display': hover?'block':'none'}" @mouseover="storeIn()" @mouseout="storeOut()"><a class="enterStore">进入店铺</a></div>
    </el-row>
    <el-row>
      <span class="content left"><a href="#">二维Flash飞碟说驻真二维Flash飞碟说驻真二维Flash飞碟说驻真</a></span>
    </el-row>
    <el-row>
      <el-col :span="10" class="content left"><span class="price">￥50</span></el-col>
      <el-col :offset="4" :span="10" class="content right"><span class="normal">21小时前</span></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'BuyerBackImageTemp',
  props: {
    history: Boolean
  },
  methods: {
    imageIn () {
      this.imageHover = true
    },
    imageOut () {
      this.imageHover = false
    },
    deleteIn () {
      this.deleteHover = true
    },
    deleteOut () {
      this.deleteHover = false
    },
    storeIn () {
      this.storeHover = true
    },
    storeOut () {
      this.storeHover = false
    },
    clickGoodsDetail () {
      this.$router.push('/goodsDetail')
    }
  },
  data () {
    return {
      imageHover: false,
      deleteHover: false,
      storeHover: false
    }
  },
  computed: {
    hover () {
      return this.imageHover || this.deleteHover || this.storeHover
    }
  }
}
</script>

<style scoped>
.img{
  cursor: pointer;
}
.content{
  margin-left: 5px;
  display: inline-block;
  white-space: nowrap;
  width: 100%;
  overflow: hidden;
  text-overflow:ellipsis;
  font-size: 12px;
}
.allDiv{
  border: 1px solid red;
  width: 100%;
}
.left{
  text-align: left;
}
.right{
  text-align: right;
}
.content a,.content .normal{
  color: #606266;
  text-decoration: none;
}
.content a:hover{
  color: #409eff;
}
.content .price{
  color: #409eff;
  font-size: 14px;
  font-weight: bold;
}
.enterStore{
  position: absolute;
  bottom: 0px;
  width: 100%;
  color: white;
  background-color: rgba(0,0,0,0.5);
  z-index: 3;
  cursor: pointer;
}
.enterStore:hover,.delete:hover{
  background-color:  #409eff;
}
.delete{
  position: absolute;
  top: 0px;
  right: 0px;
  background-color: rgba(0,0,0,0.5);
  color: white;
  padding: 5px;
  z-index: 3;
  cursor: pointer;
}
</style>

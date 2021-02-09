<template>
  <div class="border item">
      <div class="consult-item-image">
        <el-image class="avatar" src="https://gw.alicdn.com/tps/i3/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_40x40.jpg"/>
      </div>
      <div style="margin-left: 50px;">
        <div class="consult-item-top" style="display: block;">
          <span class="consult-item-title">真心网络科技</span>
          <span class="consult-item-time">2021-02-02 13:30:44</span>
        </div>
        <div class="consult-item-bottom">
          <p class="consult-item-content">商家主动统一,退款给买家商家主动统一,退款给买家商家主动统一,退款给买家商家主动统一,退款给买家商家主动统一,退款给买家商家主动统一,退款给买家
            商家主动统一,退款给买家商家主动统一,退款给买家商家主动统一,退款给买家商家主动统一,退款给买家商家主动统一,退款给买家商家主动统一,退款给买家商家主动统一,退款给买家商家主动统一,退款给买家商家主动统一,退款给买家 商家主动统一,退款给买家商家主动统一,退款给买家商家主动统一,退款给买家商家主动统一,退款给买家商家主动统一,退款给买家商家主动统一,退款给买家商家主动统一,退款给买家商家主动统一,退款给买家商家主动统一,退款给买家 商家主动统一,退款给买家商家主动统一,退款给买家商家主动统一,退款给买家</p>
        </div>
        <div class="picWall">
          <el-image class="avatar" v-for="item in imageList" :key="item"
                    :src="item"/>
        </div>
      </div>

  </div>
</template>

<script>
export default {
  name: 'consultItem',
  data () {
    return {
      imageList: ['https://gw.alicdn.com/tps/i3/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_40x40.jpg', 'https://gw.alicdn.com/tps/i3/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_40x40.jpg', 'https://gw.alicdn.com/tps/i3/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_40x40.jpg']
    }
  }
}
</script>

<style scoped>
.border{
  border: 1px solid red;
}
.consult-item-title{
  float: left;
  font-size: 12px;
  color: #3c3c3c;
}
.consult-item-time{
  float: right;
  font-size: 12px;
  color: #9c9c9c;
}
.consult-item-top{
  display: block;
  height: 20px;
  line-height: 20px;
}
.consult-item-bottom{
  /*height: 20px;*/
  line-height: 20px;
}
.consult-item-image{
  width: 42px;
  height: 42px;
  float: left;
  margin-right: 8px;
}
.consult-item-content{
  margin-top: 0px;
  text-align: left;
  word-break: break-all;
  white-space: pre-wrap;
  font-size: 14px;
  color: #3c3c3c;
}
.item{
  background-color: #fff;
  padding: 16px 0;
}
.picWall{
  text-align: left;
  border: 1px solid red;
}
</style>

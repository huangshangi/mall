<template>
  <div>
    <el-row style="position: relative">
      <el-col :span="3"><div class="center">23063077</div></el-col>
      <el-col :span="3"><div class="center">2021-01-24 17:31:50</div></el-col>
      <el-col :span="3"><div class="center">需要logo</div></el-col>
      <el-col :span="3"><div class="center">￥10</div></el-col>
      <el-col :span="3" class="progress-div">
        <div>
          <p>交易失败</p>
          <a class="progress-a" @mouseover="overDetail" @mouseout="outDetail"  href="#">全部进度</a>
        </div>
      </el-col>
      <el-col :span="9">
        <div class="center">
          <a href="#"><p>查看详情</p></a>
          <a href="#"><p>删除</p></a>
        </div>

      </el-col>
    </el-row>
  </div>
  <div :id="'popwindow'+index" class="border popwindow" :class="{'showPopwindow':showPopwindow}">
    <div class="">
      <div class="title">订单进度</div>
        <ul class="popwindowUl">
          <li v-for="item in 4" :key="item">
            <div class="popwindowItem">
              <div class="timeDiv">
                <p class="date">2021-01-24</p>
                <span class="time">17:31:50</span>
              </div>
              <div class="contentDiv">
                <p class="content">你关闭了需求，原因：暂时不做此需求</p>
              </div>
            </div>
          </li>
        </ul>
    </div>
    </div>
</template>

<script>
export default {
  name: 'BuyerOrderItem',
  data () {
    return {
      show: false
    }
  },
  props: {
    index: Number
  },
  methods: {
    overDetail () {
      this.show = true
    },
    outDetail () {
      this.show = false
    }
  },
  computed: {
    showPopwindow: function () {
      return this.show
    }
  },
  mounted () {
    let e = document.getElementsByClassName('progress-div')
    let e2 = document.getElementsByClassName('progress-a')
    if (e2 === undefined || e === undefined) {
      return
    }
    e = e[0]
    e2 = e2[0]
    const offestW = e.offsetLeft + e2.offsetLeft
    console.log(offestW)
    document.getElementById('popwindow' + this.index).style.left = offestW + 'px'
  }
}
</script>
<style scoped>
.border{
  border: 1px solid red;
}
.popwindow{
  z-index: 2;
  display: none;
  padding-top: 25px;
  width: 400px;
  background-color: greenyellow;
  position: absolute;
  /*left: 0px;*/
  /*top: 0px;*/
  text-align: left;
}
.popwindowUl{
  list-style: none;
}
.div{
  position: relative;
  width: 100%;
  padding: 0 15px;
  box-sizing: border-box;
}
.popwindowItem{
  position: relative;
  font-size: 12px;
  line-height: 17px;
  margin-top: -5px;
}
.popwindowItem::marker{
  font-size: 12px;
  line-height: 17px;
}
.timeDiv{
  position: absolute;
  width: 70px;
  left: 0;
  top: 0;
  color: #999;
  text-align: right;
}
.contentDiv{
  position: relative;
  padding: 0 0 25px 95px;
}
.contentDiv:before{
  content: "";
  position: absolute;
  width: 10px;
  height: 10px;
  left: 79px;
  top: 4px;
  z-index: 2;
  background: url('//as.zbjimg.com/static/nodejs-zbj-i-web/widget/order/order/img/dot_5ec872f.png') center center no-repeat;
  background-size: auto;
  background-size: 10px 10px;
}
.contentDiv:after{
  content: "";
  position: absolute;
  left: 84px;
  width: 1px;
  top: 5px;
  bottom: 0;
  border-left: 1px dashed #F7B500;
}
.content,.date,.popwindowUl li{
  margin: 0px;
  padding: 0px;
}
.title{
  height: 41px;
  border-bottom: 1px solid #e4e4e4;
  line-height: 41px;
  margin-left: 50px;
}
.showPopwindow{
  display: block;
}
.center{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
.center a{
  text-decoration: none;
  color: #606266;
}
.center a:hover{
  color: #409eff;
}
.progress-a{
  color: #606266;
  text-decoration: none;
}
</style>

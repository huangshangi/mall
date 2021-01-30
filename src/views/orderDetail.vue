<template>
  <el-row><el-col :offset="3" :span="18"><mall-title></mall-title></el-col></el-row>
  <el-row class="marginTop10">
    <el-col :span="18" :offset="3"><Search :search="true"></Search></el-col>
  </el-row>
  <el-row class="marginTop10">
    <el-col :offset="3" :span="18" class="border">
      <el-steps align-center="true">
        <el-step title="拍下商品" description="2021-01-18 16:02:25"></el-step>
        <el-step title="付款到支付宝" description="2021-01-18 16:02:25"></el-step>
        <el-step title="卖家发货" description="2021-01-18 16:02:25"></el-step>
        <el-step title="确认收货" description="2021-01-18 16:02:25"></el-step>
        <el-step title="评价" description="2021-01-18 16:02:25"></el-step>
      </el-steps>
    </el-col>
  </el-row>
  <el-row>
    <el-col class="border marginTop10" :offset="3" :span="6">
      <span>订单信息</span>
      <ul class="orderInfo">
        <li>
          <span>买家留言：</span>
        </li>
        <li>
          <div>
            <span class="title">订单编号：</span>
            <span class="content">152027740873357203</span>
            <div class="dropdownDiv" @mouseover="orderMoreHover()" @mouseout="orderMoreOut">
              <span id="orderMoreText">更多</span>
              <div class="smallicon">
                <div class="dropdownContent" id="orderMore" style="display: none">
                  <div class="pointer"></div>
                  <ul>
                    <li>
                      <span class="title">交易单号:</span>
                      <span class="cont">2021011822001165071443753020</span>
                    </li>
                    <li>
                      <span class="title">成交时间:</span>
                      <span class="cont">2021-01-18 16:02:25</span>
                    </li>
                    <li>
                      <span class="title">付款时间:</span>
                      <span class="cont">2021-01-18 16:02:25</span>
                    </li>
                    <li>
                      <span class="title">发货时间:</span>
                      <span class="cont">2021-01-18 16:02:25</span>
                    </li>
                    <li>
                      <span class="title">完结时间:</span>
                      <span class="cont">2021-01-18 16:02:25</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
<!--          <div>-->
<!--            <span class="title">订单编号：</span>-->
<!--            <span class="content">152027740873357203</span>-->
<!--            <div class="dropdownDiv">-->
<!--              <span>更多</span>-->
<!--              <div style="background-color: greenyellow;">-->
<!--                <ul>-->
<!--                  <li>-->
<!--                    <span>支付宝交易号:</span>-->
<!--                    <span>2021011822001165071443753020</span>-->
<!--                  </li>-->
<!--                  <li>-->
<!--                    <span>成交时间:</span>-->
<!--                    <span>2021-01-18 16:02:25</span>-->
<!--                  </li>-->
<!--                  <li>-->
<!--                    <span>付款时间:</span>-->
<!--                    <span>2021-01-18 16:02:25</span>-->
<!--                  </li>-->
<!--                  <li>-->
<!--                    <span>发货时间:</span>-->
<!--                    <span>2021-01-18 16:02:25</span>-->
<!--                  </li>-->
<!--                  <li>-->
<!--                    <span>完结时间:</span>-->
<!--                    <span>2021-01-18 16:02:25</span>-->
<!--                  </li>-->
<!--                </ul>-->
<!--              </div>-->
<!--            </div>-->

<!--          </div>-->
        </li>
        <li>
          <div>
            <span class="title">商家信息：</span>
            <span class="content">安尚芬暖耀专卖店</span>
            <div class="dropdownDiv" @mouseover="InfoMoreHover()" @mouseout="InfoMoreOut">
              <span id="InfoMoreText">更多</span>
              <div class="smallicon">
                <div class="dropdownContent" id="InfoMore" style="display: none">
                  <div class="pointer"></div>
                  <ul>
                    <li>
                      <span class="title">公司名称:</span>
                      <span class="cont">安尚芬暖耀专卖店</span>
                    </li>
                    <li>
                      <span class="title">联系电话:</span>
                      <span class="cont">15665851627</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </el-col>
    <el-col :span="12" class="border marginTop10">
      <el-row><el-col><span>订单状态：交易成功</span></el-col></el-row>
      <el-row>
        <el-col :span="12">成交时间：2021-01-11 21:13:09</el-col>
        <el-col :span="12">发货时间：2021-01-11 21:13:09</el-col>
      </el-row>
      <el-row>
        <el-col :span="12">付款时间：2021-01-11 21:13:09</el-col>
        <el-col :span="12">完结时间：2021-01-11 21:13:09</el-col>
      </el-row>
      <el-row><el-col><span>您可以</span><el-button>评价</el-button></el-col></el-row>
    </el-col>
  </el-row>
  <el-row>
    <el-col :offset="3" :span="18" class="border">
      <el-row class="alginCenter">
        <el-col :span="10">
          <span>商品信息</span>
        </el-col>
        <el-col :span="1"/>
        <el-col :span="2">
          <span>单价</span>
        </el-col>
        <el-col :span="6">
          <span>数量</span>
        </el-col>
        <el-col :span="4">
          <span>状态</span>
        </el-col>
      </el-row>
      <order-item :type="3"/>
    </el-col>
  </el-row>
</template>

<script>
import mallTitle from '@/components/title'
import Search from '@/components/search'
import OrderItem from '@/components/orderItem'
export default {
  name: 'orderDetail',
  components: { OrderItem, mallTitle, Search },
  methods: {
    orderMoreHover () {
      document.getElementById('orderMore').style.display = 'block'
      document.getElementById('orderMoreText').style.color = 'red'
    },
    orderMoreOut () {
      document.getElementById('orderMore').style.display = 'none'
      document.getElementById('orderMoreText').style.color = '#2C3E50'
    },
    InfoMoreHover () {
      document.getElementById('InfoMore').style.display = 'block'
      document.getElementById('InfoMoreText').style.color = 'red'
    },
    InfoMoreOut () {
      document.getElementById('InfoMore').style.display = 'none'
      document.getElementById('InfoMoreText').style.color = '#2C3E50'
    }
  }
}
</script>

<style scoped>
.marginTop10{
  margin-top: 10px;
}
.border{
  border: 1px solid red;
}
.dropdownDiv{
  margin-left: 5px;
  display: inline-block;
  cursor: pointer;
}
.orderInfo,.dropdownDiv ul{
  list-style: none;
  text-align: left;
  padding-left: 0px;
}
.orderInfo .title{
  /*vertical-align: top;*/
  text-align: right;
}
.orderInfo .content{
  /*vertical-align: top;*/
  text-align: left;
}
.pointer{
  position: absolute;
  top: -7px;
  right: 5px;
  height: 15px;
  background: url(//img.alicdn.com/tps/i4/T1plGJXlRBXXXeCKDX-15-15.png) 100% 100% no-repeat;
}
.dropdownContent{
  position: absolute;
  left: -11px;
  top: 19px;
  border: 1px solid #D3D3D3;
  box-shadow: 2px 2px 2px #ECECEC;
  background-color: #FBFBFB;
  padding: 10px;
  cursor: default;
  min-width: 300px;
  z-index: 99990;
}
.smallicon{
  width: 6px;
  background-image: url(//img.alicdn.com/tps/i4/TB1yGHYHpXXXXXuXXXXMs3..VXX-14-14.png);
  background-position: 50% 0;
  background-repeat: no-repeat;
  height: 12px;
  cursor: pointer;
  color: #666;
  position: relative;
  display: inline-block;
}
.dropdownContent  ul li span{
  white-space: nowrap;
}
.dropdownContent  ul li .title{
  text-align: right;
  min-width: 70px;
}
.dropdownContent  ul li cont{
  text-align: left;
  min-width: 100px;
}
.alginCenter{
  text-align: center;
  margin-top: 10px;
}
</style>

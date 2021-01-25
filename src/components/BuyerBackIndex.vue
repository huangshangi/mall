<template>
  <div class="border">
<!--    第一行个人信息 and  我的足迹-->
    <el-row >
      <el-col :span="1"/>
<!--      我的个人信息-->
      <el-col :span="10" class="border">
        <el-row>
          <el-col :span="3" class="avaterDiv marginTop10"> <el-avatar :size="50" src="https://avatar.zbjimg.com/020/45/80/200x200_avatar_82.jpg!big"/></el-col>
          <el-col :span="10" :offset="3" class="leftDiv"><span class="middleVertical">huangshangi,欢迎您</span></el-col>
        </el-row>
        <el-row class="leftDiv"><el-col :span="23" :offset="1">账户余额：0元</el-col></el-row>
        <el-row class="leftDiv"><el-col :span="23" :offset="1">年度消费：0元</el-col></el-row>
        <el-row class="leftDiv"><el-col :span="23" :offset="1">绑定邮箱：1730256822@qq.com</el-col></el-row>
        <el-row class="leftDiv"><el-col :span="23" :offset="1">绑定手机号：15665851627</el-col></el-row>
        <el-row class="leftDiv"><el-col :span="23" :offset="1">身份认证：已认证</el-col></el-row>
      </el-col>
<!--      我的足迹-->
      <el-col :offset="1" :span="11" class="border">
        <div class="border">
          <el-row>
            <el-col :span="4" class="flexDiv">
              <span class="middleVertical">我的足迹</span>
            </el-col>
            <el-col :offset="16" :span="4">
              <el-button class="noborderButton middleVerticalContent">更多</el-button>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="6" v-for="item in 4" :key="item">
              <buyer-back-image-temp/>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
<!--  我的订单进展-->
    <el-row>
      <el-col :span="1"/>
      <el-col :span="22">
        <el-row class="border flexDiv">
          <el-col :span="4" class="mineOrder">
            <span class="middleVertical">我的订单</span>
          </el-col>
          <el-col :offset="16" :span="4" class="allOrder">
            <el-button class="noborderButton middleVerticalContent">全部订单</el-button>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import BuyerBackImageTemp from '@/components/BuyerBackImageTemp'
export default {
  name: 'BuyerBackIndex',
  components: { BuyerBackImageTemp }
}
</script>

<style scoped>
.border{
  border: 1px solid red;
}

.avaterDiv{
  text-align: center;
}
.leftDiv{
  text-align: left;
  display: flex;
  margin-left: 10px;
  margin-top: 10px;
}
.flexDiv{
  display: flex;
}
.middleVertical{
  margin: auto 0px auto 10px;
}
.middleVerticalContent{
  margin: auto;
}
.noborderButton{
  border-style: none;
}

.noborderButton:focus, .noborderButton:hover{
  color: #409eff;
  background-color: transparent;
}
.left,.right{
  position: absolute;
}
.left{
  left: 10px;
  top: 5px;
}
.right{
  right: 0px;
}
.marginTop10{
  margin-top: 10px;
}
.mineOrder{
  text-align: left;
  padding-left: 10px;
}
.allOrder{
  text-align: right;
}
</style>

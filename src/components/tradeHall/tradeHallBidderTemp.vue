<template>
  <div class="allDiv">
    <i class="status"></i>
    <el-row>
      <el-col :span="3">
        <div class="avatar-div">
          <el-avatar
             shape="circle"
             style="width: 100px; height: 100px"
             src="https://avatar.zbjimg.com/029/18/07/200x200_avatar_98.jpg!small"
             fit="fill"></el-avatar>
        </div>
      </el-col>
      <el-col :span="15">
        <div class="name-div">
          <span class="name">huangshangi</span>
          <el-tag class="label" type="success">个人</el-tag>
          <el-tag class="label" type="success">新手</el-tag>
        </div>
        <div class="info-div">
          <el-row>
            <el-col :span="6">
              完成过的需求：0个
            </el-col>
            <el-col :span="6">
              服务过的雇主数：0个
            </el-col>
            <el-col :span="6">
              好评率：0个
            </el-col>
            <el-col :span="6">
              退款率：0个
            </el-col>
          </el-row>
        </div>
        <div class="label-div">
          <el-tag class="label" type="success">个人</el-tag>
          <el-tag class="label" type="success">新手</el-tag>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="contact">
          <el-button>在线联系</el-button>
        </div>
        <div class="contact">
          <el-button>电话联系</el-button>
        </div>
        <div class="contact">
          <el-button>取消合作</el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'tradeHallBidderTemp'
}
</script>

<style scoped>
.allDiv{
  border: 1px solid red;
  position: relative;
}
.label-div,.name-div{
  text-align: left;
}
.name{
  font-size: 16px;
  color: #333;
  font-weight: 700;
}
.label{
  margin: 0px 10px;
}
.info-div{
  margin: 10px 0;
}
.contact{
  margin: 10px 0;
}
.status {
  position: absolute;
  top: 50%;
  right: 30%;
  display: inline-block;
  width: 88px;
  height: 75px;
  background: url(//as.zbjimg.com/static/nodejs-zbj-trade-api/widget/page/zbj/s39-newmode-bid/master/compos/s39-newmode-bid-successor/imgs/bid-successor-icon_83c34d8.png) no-repeat;
  background-size: 88px 75px;
  z-index: 1;
}
</style>
